from pydantic import BaseModel, Field, EmailStr
from typing import List, Optional, Dict, Any
from datetime import datetime
import uuid

class UserPreferences(BaseModel):
    job_types: List[str] = Field(default_factory=list)
    locations: List[str] = Field(default_factory=list)
    salary_range: Dict[str, int] = Field(default_factory=lambda: {"min": 0, "max": 300000})

class UserCreate(BaseModel):
    name: str = Field(..., min_length=2, max_length=100)
    email: EmailStr
    password: str = Field(..., min_length=6)

class UserLogin(BaseModel):
    email: EmailStr
    password: str

class UserUpdate(BaseModel):
    name: Optional[str] = None
    title: Optional[str] = None
    location: Optional[str] = None
    avatar: Optional[str] = None
    skills: Optional[List[str]] = None
    experience: Optional[str] = None
    resume: Optional[str] = None
    preferences: Optional[UserPreferences] = None

class User(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    email: EmailStr
    title: Optional[str] = None
    location: Optional[str] = None
    avatar: Optional[str] = None
    skills: List[str] = Field(default_factory=list)
    experience: Optional[str] = None
    resume: Optional[str] = None
    preferences: UserPreferences = Field(default_factory=UserPreferences)
    created_at: datetime = Field(default_factory=datetime.utcnow)
    updated_at: datetime = Field(default_factory=datetime.utcnow)

class UserResponse(BaseModel):
    id: str
    name: str
    email: str
    title: Optional[str] = None
    location: Optional[str] = None
    avatar: Optional[str] = None
    skills: List[str] = []
    experience: Optional[str] = None
    preferences: UserPreferences