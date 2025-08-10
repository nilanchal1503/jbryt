from fastapi import APIRouter, HTTPException, status, Depends
from motor.motor_asyncio import AsyncIOMotorDatabase
from models.user import User, UserCreate, UserLogin, UserUpdate, UserResponse
from utils.auth import hash_password, verify_password, create_access_token, get_current_user
from datetime import datetime, timedelta
import os

router = APIRouter(prefix="/auth", tags=["authentication"])

# Get database dependency
async def get_database():
    from server import db
    return db

@router.post("/register", response_model=dict)
async def register_user(user_data: UserCreate, db: AsyncIOMotorDatabase = Depends(get_database)):
    """Register a new user"""
    try:
        # Check if user already exists
        existing_user = await db.users.find_one({"email": user_data.email}, {"_id": 0})
        if existing_user:
            raise HTTPException(
                status_code=status.HTTP_400_BAD_REQUEST,
                detail="Email already registered"
            )
        
        # Create new user
        user_dict = user_data.dict()
        user_dict["password"] = hash_password(user_data.password)
        user = User(**user_dict)
        
        # Insert into database
        await db.users.insert_one(user.dict())
        
        # Create access token
        access_token_expires = timedelta(minutes=int(os.getenv("ACCESS_TOKEN_EXPIRE_MINUTES", 30)))
        access_token = create_access_token(
            data={"sub": user.id}, expires_delta=access_token_expires
        )
        
        return {
            "access_token": access_token,
            "token_type": "bearer",
            "user": UserResponse(
                id=user.id,
                name=user.name,
                email=user.email,
                title=user.title,
                location=user.location,
                avatar=user.avatar,
                skills=user.skills,
                experience=user.experience,
                preferences=user.preferences
            )
        }
    except HTTPException:
        raise
    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Registration failed"
        )

@router.post("/login", response_model=dict)
async def login_user(login_data: UserLogin, db: AsyncIOMotorDatabase = Depends(get_database)):
    """Login user"""
    try:
        # Find user by email
        user_doc = await db.users.find_one({"email": login_data.email}, {"_id": 0})
        if not user_doc:
            raise HTTPException(
                status_code=status.HTTP_401_UNAUTHORIZED,
                detail="Invalid email or password"
            )
        
        user = User(**user_doc)
        
        # Verify password
        if not verify_password(login_data.password, user_doc["password"]):
            raise HTTPException(
                status_code=status.HTTP_401_UNAUTHORIZED,
                detail="Invalid email or password"
            )
        
        # Create access token
        access_token_expires = timedelta(minutes=int(os.getenv("ACCESS_TOKEN_EXPIRE_MINUTES", 30)))
        access_token = create_access_token(
            data={"sub": user.id}, expires_delta=access_token_expires
        )
        
        return {
            "access_token": access_token,
            "token_type": "bearer",
            "user": UserResponse(
                id=user.id,
                name=user.name,
                email=user.email,
                title=user.title,
                location=user.location,
                avatar=user.avatar,
                skills=user.skills,
                experience=user.experience,
                preferences=user.preferences
            )
        }
    except HTTPException:
        raise
    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Login failed"
        )

@router.get("/me", response_model=UserResponse)
async def get_current_user_profile(db: AsyncIOMotorDatabase = Depends(get_database), current_user: UserResponse = Depends(get_current_user)):
    """Get current user profile"""
    return current_user

@router.put("/profile", response_model=UserResponse)
async def update_user_profile(
    user_update: UserUpdate, 
    db: AsyncIOMotorDatabase = Depends(get_database),
    current_user: UserResponse = Depends(get_current_user)
):
    """Update user profile"""
    try:
        update_data = user_update.dict(exclude_unset=True)
        if update_data:
            update_data["updated_at"] = datetime.utcnow()
            await db.users.update_one(
                {"id": current_user.id},
                {"$set": update_data}
            )
        
        # Return updated user
        updated_user = await db.users.find_one({"id": current_user.id})
        user = User(**updated_user)
        
        return UserResponse(
            id=user.id,
            name=user.name,
            email=user.email,
            title=user.title,
            location=user.location,
            avatar=user.avatar,
            skills=user.skills,
            experience=user.experience,
            preferences=user.preferences
        )
    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Profile update failed"
        )