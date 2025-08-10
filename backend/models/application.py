from pydantic import BaseModel, Field
from typing import Optional
from datetime import datetime
import uuid

class ApplicationCreate(BaseModel):
    job_id: str
    notes: Optional[str] = None

class Application(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    user_id: str
    job_id: str
    status: str = "Applied"  # Applied, In Review, Interview, Offer, Rejected
    applied_at: datetime = Field(default_factory=datetime.utcnow)
    notes: Optional[str] = None

class ApplicationResponse(BaseModel):
    id: str
    job_id: str
    status: str
    applied_at: datetime
    notes: Optional[str] = None
    job: Optional[dict] = None  # Job details will be populated

class SavedJob(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    user_id: str
    job_id: str
    saved_at: datetime = Field(default_factory=datetime.utcnow)

class LikedJob(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    user_id: str
    job_id: str
    liked_at: datetime = Field(default_factory=datetime.utcnow)