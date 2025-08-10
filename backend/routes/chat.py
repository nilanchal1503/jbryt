from fastapi import APIRouter, HTTPException, status, Depends
from motor.motor_asyncio import AsyncIOMotorDatabase
from models.chat import ChatSession, ChatMessage, ChatMessageCreate, ChatResponse
from models.user import UserResponse
from utils.auth import get_current_user
from emergentintegrations.llm.chat import LlmChat, UserMessage
import os
import uuid
from datetime import datetime

router = APIRouter(prefix="/chat", tags=["chat"])

# Get database dependency
async def get_database():
    from server import db
    return db

# Initialize AI chat
EMERGENT_LLM_KEY = os.getenv("EMERGENT_LLM_KEY")

ORION_SYSTEM_MESSAGE = """You are Orion, an expert AI career assistant at JobRight, the leading AI-powered job search platform. Your mission is to help job seekers accelerate their careers with personalized guidance.

Your expertise includes:
- Job search strategy and optimization
- Resume writing and ATS optimization
- Interview preparation and practice
- Salary negotiation tactics
- Career path planning
- Company research and insights
- Networking strategies
- LinkedIn optimization

Your personality:
- Professional yet friendly and approachable
- Encouraging and motivational
- Data-driven with practical advice
- Concise but thorough in explanations
- Proactive in suggesting next steps

Always provide actionable advice and ask follow-up questions to better understand the user's career goals. Keep responses conversational and under 200 words unless detailed explanations are specifically requested."""

async def get_ai_response(user_message: str, session_id: str, user_context: dict = None) -> str:
    """Get AI response from Emergent LLM"""
    try:
        # Initialize chat with Emergent LLM
        chat = LlmChat(
            api_key=EMERGENT_LLM_KEY,
            session_id=session_id,
            system_message=ORION_SYSTEM_MESSAGE
        ).with_model("openai", "gpt-4o-mini")
        
        # Add user context to the message if available
        enhanced_message = user_message
        if user_context:
            context_info = f"User context: {user_context.get('name', 'User')} is a {user_context.get('title', 'professional')} in {user_context.get('location', 'their location')}. "
            enhanced_message = context_info + user_message
        
        # Create user message
        user_msg = UserMessage(text=enhanced_message)
        
        # Get AI response
        response = await chat.send_message(user_msg)
        return response
        
    except Exception as e:
        print(f"AI response error: {str(e)}")
        return "I'm sorry, I'm having trouble processing your request right now. Please try again in a moment."

@router.post("/message", response_model=ChatResponse)
async def send_chat_message(
    message_data: ChatMessageCreate,
    db: AsyncIOMotorDatabase = Depends(get_database),
    current_user: UserResponse = Depends(get_current_user)
):
    """Send a message to Orion AI and get response"""
    try:
        # Generate session ID if not provided
        session_id = message_data.session_id or str(uuid.uuid4())
        
        # Get or create chat session
        chat_session = await db.chat_sessions.find_one({
            "user_id": current_user.id,
            "session_id": session_id
        }, {"_id": 0})
        
        if not chat_session:
            # Create new session
            new_session = ChatSession(
                user_id=current_user.id,
                session_id=session_id,
                messages=[]
            )
            await db.chat_sessions.insert_one(new_session.dict())
            chat_session = new_session.dict()
        
        # Add user message to session
        user_message = ChatMessage(
            type="user",
            message=message_data.message,
            timestamp=datetime.utcnow()
        )
        
        # Get AI response
        user_context = {
            "name": current_user.name,
            "title": current_user.title,
            "location": current_user.location
        }
        
        ai_response_text = await get_ai_response(
            message_data.message, 
            session_id,
            user_context
        )
        
        # Create bot message
        bot_message = ChatMessage(
            type="bot",
            message=ai_response_text,
            timestamp=datetime.utcnow()
        )
        
        # Update session with both messages
        await db.chat_sessions.update_one(
            {"user_id": current_user.id, "session_id": session_id},
            {
                "$push": {
                    "messages": {
                        "$each": [user_message.dict(), bot_message.dict()]
                    }
                },
                "$set": {"updated_at": datetime.utcnow()}
            }
        )
        
        # Get updated session
        updated_session = await db.chat_sessions.find_one({
            "user_id": current_user.id,
            "session_id": session_id
        })
        
        messages = [ChatMessage(**msg) for msg in updated_session["messages"]]
        
        return ChatResponse(
            session_id=session_id,
            messages=messages,
            bot_response=ai_response_text
        )
        
    except Exception as e:
        print(f"Chat error: {str(e)}")
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Failed to process chat message"
        )

@router.get("/history/{session_id}", response_model=ChatResponse)
async def get_chat_history(
    session_id: str,
    db: AsyncIOMotorDatabase = Depends(get_database),
    current_user: UserResponse = Depends(get_current_user)
):
    """Get chat history for a session"""
    try:
        chat_session = await db.chat_sessions.find_one({
            "user_id": current_user.id,
            "session_id": session_id
        })
        
        if not chat_session:
            # Return empty session
            return ChatResponse(
                session_id=session_id,
                messages=[],
                bot_response=""
            )
        
        messages = [ChatMessage(**msg) for msg in chat_session["messages"]]
        
        return ChatResponse(
            session_id=session_id,
            messages=messages,
            bot_response=""
        )
        
    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Failed to fetch chat history"
        )

@router.delete("/session/{session_id}")
async def clear_chat_session(
    session_id: str,
    db: AsyncIOMotorDatabase = Depends(get_database),
    current_user: UserResponse = Depends(get_current_user)
):
    """Clear a chat session"""
    try:
        result = await db.chat_sessions.delete_one({
            "user_id": current_user.id,
            "session_id": session_id
        })
        
        if result.deleted_count == 0:
            raise HTTPException(
                status_code=status.HTTP_404_NOT_FOUND,
                detail="Chat session not found"
            )
        
        return {"message": "Chat session cleared successfully"}
        
    except HTTPException:
        raise
    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Failed to clear chat session"
        )