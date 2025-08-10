from fastapi import APIRouter, HTTPException, status, Depends, Query
from motor.motor_asyncio import AsyncIOMotorDatabase
from models.job import Job, JobCreate, JobResponse, JobFilter
from models.application import Application, ApplicationCreate, ApplicationResponse, SavedJob, LikedJob
from models.user import UserResponse
from utils.auth import get_current_user
from typing import List, Optional
from datetime import datetime, timedelta
import re

router = APIRouter(prefix="/jobs", tags=["jobs"])

# Get database dependency
async def get_database():
    from server import db
    return db

def time_ago(posted_at: datetime) -> str:
    """Convert datetime to human readable 'time ago' format"""
    now = datetime.utcnow()
    diff = now - posted_at
    
    if diff.days > 0:
        return f"{diff.days} day{'s' if diff.days > 1 else ''} ago"
    elif diff.seconds > 3600:
        hours = diff.seconds // 3600
        return f"{hours} hour{'s' if hours > 1 else ''} ago"
    else:
        minutes = diff.seconds // 60
        return f"{minutes} minute{'s' if minutes > 1 else ''} ago"

@router.get("/", response_model=List[JobResponse])
async def get_jobs(
    search: Optional[str] = Query(None),
    location: Optional[str] = Query(None),
    job_type: Optional[str] = Query(None),
    experience: Optional[str] = Query(None),
    limit: int = Query(20, le=100),
    skip: int = Query(0, ge=0),
    db: AsyncIOMotorDatabase = Depends(get_database)
):
    """Get job listings with filters"""
    try:
        # Build query
        query = {"is_active": True}
        
        if search:
            # Search in title, company, and description
            search_pattern = {"$regex": search, "$options": "i"}
            query["$or"] = [
                {"title": search_pattern},
                {"company": search_pattern},
                {"description": search_pattern}
            ]
        
        if location:
            query["location"] = {"$regex": location, "$options": "i"}
        
        if job_type and job_type != "all":
            query["type"] = {"$regex": job_type, "$options": "i"}
        
        if experience and experience != "all":
            query["level"] = {"$regex": experience, "$options": "i"}
        
        # Get jobs from database
        cursor = db.jobs.find(query).sort("posted_at", -1).skip(skip).limit(limit)
        jobs = await cursor.to_list(length=limit)
        
        # Convert to response format
        job_responses = []
        for job_doc in jobs:
            job = Job(**job_doc)
            job_response = JobResponse(
                id=job.id,
                title=job.title,
                company=job.company,
                location=job.location,
                type=job.type,
                salary=job.salary,
                level=job.level,
                sponsorship=job.sponsorship,
                description=job.description,
                requirements=job.requirements,
                logo=job.logo,
                posted=time_ago(job.posted_at),
                recommended=True  # Simple logic - can be enhanced with AI
            )
            job_responses.append(job_response)
        
        return job_responses
    
    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Failed to fetch jobs"
        )

@router.get("/{job_id}", response_model=JobResponse)
async def get_job_details(job_id: str, db: AsyncIOMotorDatabase = Depends(get_database)):
    """Get specific job details"""
    try:
        job_doc = await db.jobs.find_one({"id": job_id})
        if not job_doc:
            raise HTTPException(
                status_code=status.HTTP_404_NOT_FOUND,
                detail="Job not found"
            )
        
        job = Job(**job_doc)
        return JobResponse(
            id=job.id,
            title=job.title,
            company=job.company,
            location=job.location,
            type=job.type,
            salary=job.salary,
            level=job.level,
            sponsorship=job.sponsorship,
            description=job.description,
            requirements=job.requirements,
            logo=job.logo,
            posted=time_ago(job.posted_at),
            recommended=True
        )
    
    except HTTPException:
        raise
    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Failed to fetch job details"
        )

@router.post("/{job_id}/apply", response_model=ApplicationResponse)
async def apply_to_job(
    job_id: str,
    application_data: ApplicationCreate,
    db: AsyncIOMotorDatabase = Depends(get_database),
    current_user: UserResponse = Depends(get_current_user)
):
    """Apply to a job"""
    try:
        # Check if job exists
        job_doc = await db.jobs.find_one({"id": job_id})
        if not job_doc:
            raise HTTPException(
                status_code=status.HTTP_404_NOT_FOUND,
                detail="Job not found"
            )
        
        # Check if already applied
        existing_application = await db.applications.find_one({
            "user_id": current_user.id,
            "job_id": job_id
        })
        if existing_application:
            raise HTTPException(
                status_code=status.HTTP_400_BAD_REQUEST,
                detail="Already applied to this job"
            )
        
        # Create application
        application = Application(
            user_id=current_user.id,
            job_id=job_id,
            notes="Applied via JobRight platform"
        )
        
        await db.applications.insert_one(application.dict())
        
        return ApplicationResponse(
            id=application.id,
            job_id=application.job_id,
            status=application.status,
            applied_at=application.applied_at,
            notes=application.notes,
            job=job_doc
        )
    
    except HTTPException:
        raise
    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Application failed"
        )

@router.post("/{job_id}/save")
async def save_job(
    job_id: str,
    db: AsyncIOMotorDatabase = Depends(get_database),
    current_user: UserResponse = Depends(get_current_user)
):
    """Save or unsave a job"""
    try:
        # Check if already saved
        existing_save = await db.saved_jobs.find_one({
            "user_id": current_user.id,
            "job_id": job_id
        })
        
        if existing_save:
            # Unsave the job
            await db.saved_jobs.delete_one({
                "user_id": current_user.id,
                "job_id": job_id
            })
            return {"message": "Job unsaved successfully", "saved": False}
        else:
            # Save the job
            saved_job = SavedJob(
                user_id=current_user.id,
                job_id=job_id
            )
            await db.saved_jobs.insert_one(saved_job.dict())
            return {"message": "Job saved successfully", "saved": True}
    
    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Failed to save/unsave job"
        )

@router.post("/{job_id}/like")
async def like_job(
    job_id: str,
    db: AsyncIOMotorDatabase = Depends(get_database),
    current_user: UserResponse = Depends(get_current_user)
):
    """Like or unlike a job"""
    try:
        # Check if already liked
        existing_like = await db.liked_jobs.find_one({
            "user_id": current_user.id,
            "job_id": job_id
        })
        
        if existing_like:
            # Unlike the job
            await db.liked_jobs.delete_one({
                "user_id": current_user.id,
                "job_id": job_id
            })
            return {"message": "Job unliked successfully", "liked": False}
        else:
            # Like the job
            liked_job = LikedJob(
                user_id=current_user.id,
                job_id=job_id
            )
            await db.liked_jobs.insert_one(liked_job.dict())
            return {"message": "Job liked successfully", "liked": True}
    
    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Failed to like/unlike job"
        )