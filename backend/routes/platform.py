from fastapi import APIRouter, Depends
from motor.motor_asyncio import AsyncIOMotorDatabase
from utils.database import get_platform_stats
from typing import Dict, Any

router = APIRouter(prefix="/platform", tags=["platform"])

# Get database dependency
async def get_database():
    from server import db
    return db

@router.get("/stats", response_model=Dict[str, Any])
async def get_stats(db: AsyncIOMotorDatabase = Depends(get_database)):
    """Get platform statistics for homepage"""
    try:
        stats = await get_platform_stats(db)
        return stats
    except Exception as e:
        # Return default stats if database query fails
        return {
            "new_jobs": "400,000+",
            "total_jobs": "8,000,000+",
            "happy_users": "520,000+",
            "companies": "10,000+"
        }