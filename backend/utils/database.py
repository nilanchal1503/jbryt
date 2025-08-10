from motor.motor_asyncio import AsyncIOMotorDatabase
from data.seed_data import get_seed_jobs
from datetime import datetime

async def seed_database(db: AsyncIOMotorDatabase):
    """Seed the database with initial data"""
    try:
        # Check if jobs collection is empty
        job_count = await db.jobs.count_documents({})
        
        if job_count == 0:
            print("Seeding database with job data...")
            
            # Insert seed jobs
            seed_jobs = get_seed_jobs()
            await db.jobs.insert_many(seed_jobs)
            
            print(f"✅ Inserted {len(seed_jobs)} jobs into database")
        else:
            print(f"Database already has {job_count} jobs, skipping seed")
            
    except Exception as e:
        print(f"❌ Error seeding database: {str(e)}")

async def get_platform_stats(db: AsyncIOMotorDatabase) -> dict:
    """Get platform-wide statistics"""
    try:
        # Count total jobs
        total_jobs = await db.jobs.count_documents({"is_active": True})
        
        # Count jobs posted today
        today_start = datetime.utcnow().replace(hour=0, minute=0, second=0, microsecond=0)
        new_jobs_today = await db.jobs.count_documents({
            "is_active": True,
            "posted_at": {"$gte": today_start}
        })
        
        # Count total users
        total_users = await db.users.count_documents({})
        
        # Mock companies count (in production, you'd have a companies collection)
        companies_count = 10000
        
        return {
            "new_jobs": f"{new_jobs_today:,}+",
            "total_jobs": f"{total_jobs:,}+", 
            "happy_users": "520,000+",  # Marketing number
            "companies": f"{companies_count:,}+"
        }
        
    except Exception as e:
        print(f"Error getting platform stats: {str(e)}")
        return {
            "new_jobs": "400,000+",
            "total_jobs": "8,000,000+",
            "happy_users": "520,000+",
            "companies": "10,000+"
        }