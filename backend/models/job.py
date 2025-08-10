from pydantic import BaseModel, Field
from typing import List, Optional
from datetime import datetime
import uuid

class JobCreate(BaseModel):
    title: str = Field(..., min_length=2, max_length=200)
    company: str = Field(..., min_length=2, max_length=100)
    location: str
    type: str  # Full Time, Part Time, Contract, Remote
    salary: str
    level: str  # Entry, Mid, Senior, Executive
    sponsorship: str
    description: str = Field(..., min_length=10)
    requirements: List[str] = Field(default_factory=list)
    logo: Optional[str] = None

class Job(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    title: str
    company: str
    location: str
    type: str
    salary: str
    level: str
    sponsorship: str
    description: str
    requirements: List[str]
    logo: Optional[str] = None
    posted_at: datetime = Field(default_factory=datetime.utcnow)
    is_active: bool = True

class JobResponse(BaseModel):
    id: str
    title: str
    company: str
    location: str
    type: str
    salary: str
    level: str
    sponsorship: str
    description: str
    requirements: List[str]
    logo: Optional[str] = None
    posted: str  # Human readable time
    recommended: bool = False

class JobFilter(BaseModel):
    search: Optional[str] = None
    location: Optional[str] = None
    job_type: Optional[str] = None
    experience: Optional[str] = None
    limit: int = Field(default=20, le=100)
    skip: int = Field(default=0, ge=0)