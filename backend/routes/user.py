from fastapi import APIRouter, HTTPException, status, Depends
from motor.motor_asyncio import AsyncIOMotorDatabase
from models.user import UserResponse
from models.application import ApplicationResponse
from utils.auth import get_current_user
from typing import List, Dict, Any
from datetime import datetime, timedelta

router = APIRouter(prefix="/user", tags=["user"])

# Get database dependency
async def get_database():
    from server import db
    return db

@router.get("/applications", response_model=List[ApplicationResponse])
async def get_user_applications(
    db: AsyncIOMotorDatabase = Depends(get_database),
    current_user: UserResponse = Depends(get_current_user)
):
    """Get user's job applications"""
    try:
        # Get applications
        applications = await db.applications.find({"user_id": current_user.id}, {"_id": 0}).sort("applied_at", -1).to_list(100)
        
        # Populate with job details
        application_responses = []
        for app_doc in applications:
            # Get job details
            job_doc = await db.jobs.find_one({"id": app_doc["job_id"]}, {"_id": 0})
            
            application_response = ApplicationResponse(
                id=app_doc["id"],
                job_id=app_doc["job_id"],
                status=app_doc["status"],
                applied_at=app_doc["applied_at"],
                notes=app_doc.get("notes"),
                job=job_doc
            )
            application_responses.append(application_response)
        
        return application_responses
    
    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Failed to fetch applications"
        )

@router.get("/saved-jobs", response_model=List[Dict[str, Any]])
async def get_saved_jobs(
    db: AsyncIOMotorDatabase = Depends(get_database),
    current_user: UserResponse = Depends(get_current_user)
):
    """Get user's saved jobs"""
    try:
        # Get saved jobs
        saved_jobs = await db.saved_jobs.find({"user_id": current_user.id}).sort("saved_at", -1).to_list(100)
        
        # Populate with job details
        saved_job_responses = []
        for saved_job in saved_jobs:
            job_doc = await db.jobs.find_one({"id": saved_job["job_id"]})
            if job_doc:
                saved_job_responses.append({
                    "saved_at": saved_job["saved_at"],
                    "job": job_doc
                })
        
        return saved_job_responses
    
    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Failed to fetch saved jobs"
        )

@router.get("/stats", response_model=Dict[str, Any])
async def get_user_stats(
    db: AsyncIOMotorDatabase = Depends(get_database),
    current_user: UserResponse = Depends(get_current_user)
):
    """Get user dashboard statistics"""
    try:
        # Get applications count
        applications_count = await db.applications.count_documents({"user_id": current_user.id})
        
        # Get interviews count (applications with status containing "interview")
        interviews_count = await db.applications.count_documents({
            "user_id": current_user.id,
            "status": {"$regex": "interview", "$options": "i"}
        })
        
        # Get saved jobs count
        saved_jobs_count = await db.saved_jobs.count_documents({"user_id": current_user.id})
        
        # Get profile views (mock for now)
        profile_views = 45  # This would be real data in production
        
        return {
            "applied_jobs": applications_count,
            "interviews_scheduled": interviews_count,
            "saved_jobs": saved_jobs_count,
            "profile_views": profile_views
        }
    
    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Failed to fetch user stats"
        )

@router.get("/analytics", response_model=Dict[str, Any])
async def get_user_analytics(
    db: AsyncIOMotorDatabase = Depends(get_database),
    current_user: UserResponse = Depends(get_current_user)
):
    """Get user analytics data for charts"""
    try:
        # Get applications by month (last 6 months)
        six_months_ago = datetime.utcnow() - timedelta(days=180)
        
        # Mock analytics data for now - in production, you'd aggregate from database
        application_data = [
            {"name": "Jan", "applications": 12, "interviews": 3},
            {"name": "Feb", "applications": 19, "interviews": 5},
            {"name": "Mar", "applications": 25, "interviews": 8},
            {"name": "Apr", "applications": 32, "interviews": 12},
            {"name": "May", "applications": 28, "interviews": 10},
            {"name": "Jun", "applications": 35, "interviews": 15}
        ]
        
        # Get application status distribution
        status_counts = {
            "Applied": await db.applications.count_documents({"user_id": current_user.id, "status": "Applied"}),
            "In Review": await db.applications.count_documents({"user_id": current_user.id, "status": "In Review"}),
            "Interview": await db.applications.count_documents({"user_id": current_user.id, "status": {"$regex": "interview", "$options": "i"}}),
            "Offer": await db.applications.count_documents({"user_id": current_user.id, "status": "Offer"})
        }
        
        job_status_data = [
            {"name": "Applied", "value": status_counts["Applied"], "color": "#10b981"},
            {"name": "In Review", "value": status_counts["In Review"], "color": "#3b82f6"},
            {"name": "Interview", "value": status_counts["Interview"], "color": "#f59e0b"},
            {"name": "Offer", "value": status_counts["Offer"], "color": "#ef4444"}
        ]
        
        return {
            "application_data": application_data,
            "job_status_data": job_status_data
        }
    
    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Failed to fetch analytics"
        )