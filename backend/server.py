from fastapi import FastAPI, APIRouter
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field
from typing import List
import uuid
from datetime import datetime

# Import routes
from routes import auth, jobs, user, chat, platform
from utils.database import seed_database

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL'].strip('"')
db_name = os.environ.get('DB_NAME', 'stackfinds_db').strip('"')
client = AsyncIOMotorClient(mongo_url)
db = client[db_name]

# Create the main app without a prefix
app = FastAPI(
    title="Stack-Finds API", 
    description="AI-Powered Tech Job Search Platform for Developers", 
    version="2.0.0",
    docs_url="/docs",
    redoc_url="/redoc"
)

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")

# Define Models (keeping original for compatibility)
class StatusCheck(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=datetime.utcnow)

class StatusCheckCreate(BaseModel):
    client_name: str

# Add original routes
@api_router.get("/")
async def root():
    return {
        "message": "Stack-Finds API - AI-Powered Tech Job Search Platform",
        "version": "2.0.0",
        "platform": "For Developers, By Developers",
        "features": [
            "AI-Powered Job Matching",
            "Smart Resume Analysis",
            "Tech Stack Recommendations",
            "AI Interview Preparation",
            "Career Progression Insights"
        ]
    }

@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    status_dict = input.dict()
    status_obj = StatusCheck(**status_dict)
    _ = await db.status_checks.insert_one(status_obj.dict())
    return status_obj

@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    status_checks = await db.status_checks.find().to_list(1000)
    return [StatusCheck(**status_check) for status_check in status_checks]

# Health check endpoint
@api_router.get("/health")
async def health_check():
    return {
        "status": "healthy",
        "service": "Stack-Finds API",
        "version": "2.0.0",
        "database": "connected" if client else "disconnected"
    }

# Include all route modules
api_router.include_router(auth.router)
api_router.include_router(jobs.router)
api_router.include_router(user.router)
api_router.include_router(chat.router)
api_router.include_router(platform.router)

# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

@app.on_event("startup")
async def startup_event():
    """Initialize database and seed data"""
    await seed_database(db)
    logger.info("🚀 Stack-Finds API started successfully")
    logger.info("🔍 AI-Powered Tech Job Search Platform Ready")

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
    logger.info("Database connection closed")