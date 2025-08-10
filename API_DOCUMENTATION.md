# Stack-Finds - API Documentation

## Base URL
```
https://b9debc4a-5fc0-43b5-bf12-fdfbd73ef363.preview.emergentagent.com/api
```

## Authentication
The API uses JWT Bearer token authentication. Include the token in the Authorization header:
```
Authorization: Bearer <your_jwt_token>
```

## API Endpoints

### 🔐 Authentication Endpoints

#### 1. Register User
- **POST** `/auth/register`
- **Description**: Create a new developer account on Stack-Finds
- **Body**:
```json
{
  "name": "John Doe",
  "email": "john.doe@developer.com",
  "password": "securepassword123"
}
```
- **Response**:
```json
{
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "token_type": "bearer",
  "user": {
    "id": "uuid-string",
    "name": "John Doe",
    "email": "john.doe@developer.com",
    "title": null,
    "location": null,
    "avatar": null,
    "skills": [],
    "experience": null,
    "preferences": {
      "job_types": [],
      "locations": [],
      "salary_range": {"min": 0, "max": 300000}
    }
  }
}
```

#### 2. Login User
- **POST** `/auth/login`
- **Description**: Authenticate existing developer
- **Body**:
```json
{
  "email": "john.doe@developer.com",
  "password": "securepassword123"
}
```
- **Response**: Same as register response

#### 3. Get Current User Profile
- **GET** `/auth/me`
- **Description**: Get current authenticated developer's profile
- **Headers**: `Authorization: Bearer <token>`
- **Response**:
```json
{
  "id": "uuid-string",
  "name": "John Doe",
  "email": "john.doe@developer.com",
  "title": "Senior Full Stack Engineer",
  "location": "San Francisco, CA",
  "avatar": "https://example.com/avatar.jpg",
  "skills": ["JavaScript", "React", "Node.js", "Python"],
  "experience": "5+ years",
  "preferences": {
    "job_types": ["Full Time", "Remote"],
    "locations": ["San Francisco", "Remote"],
    "salary_range": {"min": 120000, "max": 200000}
  }
}
```

#### 4. Update User Profile
- **PUT** `/auth/profile`
- **Description**: Update developer profile information
- **Headers**: `Authorization: Bearer <token>`
- **Body**:
```json
{
  "title": "Senior Full Stack Engineer",
  "location": "Seattle, WA",
  "skills": ["JavaScript", "React", "Node.js", "Python", "TypeScript"],
  "experience": "7+ years",
  "preferences": {
    "job_types": ["Full Time", "Remote"],
    "locations": ["Seattle", "Remote"],
    "salary_range": {"min": 150000, "max": 250000}
  }
}
```
- **Response**: Updated user profile object

---

### 💼 Tech Job Management Endpoints

#### 5. Get Tech Job Listings
- **GET** `/jobs`
- **Description**: Get tech job listings with AI-powered filtering
- **Query Parameters**:
  - `search`: Search term (searches title, company, tech stack)
  - `location`: Filter by location or "Remote"
  - `job_type`: Filter by job type (Full Time, Part Time, Contract, Remote)
  - `experience`: Filter by experience level (Entry, Mid, Senior, Staff, Principal)
  - `limit`: Number of results (default: 20, max: 100)
  - `skip`: Number of results to skip (pagination)

- **Example Request**:
```
GET /jobs?search=react&location=San Francisco&job_type=Full Time&limit=10
```

- **Response**:
```json
[
  {
    "id": "job-uuid",
    "title": "Senior Full Stack Engineer",
    "company": "Google",
    "location": "San Francisco, CA",
    "type": "Full Time",
    "salary": "$180,000 - $250,000",
    "level": "Senior Level",
    "sponsorship": "H1B sponsorship available",
    "description": "Join our team to build next-generation software solutions...",
    "requirements": ["React", "Node.js", "Python", "AWS", "TypeScript", "System Design"],
    "logo": "https://logo.clearbit.com/google.com",
    "posted": "2 days ago",
    "recommended": true
  }
]
```

#### 6. Get Job Details
- **GET** `/jobs/{job_id}`
- **Description**: Get detailed information about a specific tech job
- **Response**: Single job object (same structure as job listing item)

#### 7. Apply to Job
- **POST** `/jobs/{job_id}/apply`
- **Description**: Apply to a specific tech job
- **Headers**: `Authorization: Bearer <token>`
- **Body**:
```json
{
  "notes": "I'm excited about this opportunity to work with React and Node.js..."
}
```
- **Response**:
```json
{
  "id": "application-uuid",
  "job_id": "job-uuid",
  "status": "Applied",
  "applied_at": "2024-01-15T10:30:00Z",
  "notes": "I'm excited about this opportunity...",
  "job": {
    // Full job object
  }
}
```

#### 8. Save/Unsave Job
- **POST** `/jobs/{job_id}/save`
- **Description**: Save or unsave a tech job for later review
- **Headers**: `Authorization: Bearer <token>`
- **Response**:
```json
{
  "message": "Job saved successfully",
  "saved": true
}
```

#### 9. Like/Unlike Job
- **POST** `/jobs/{job_id}/like`
- **Description**: Like or unlike a job to improve AI recommendations
- **Headers**: `Authorization: Bearer <token>`
- **Response**:
```json
{
  "message": "Job liked successfully",
  "liked": true
}
```

---

### 📊 Developer Dashboard Endpoints

#### 10. Get Developer Applications
- **GET** `/user/applications`
- **Description**: Get developer's job applications
- **Headers**: `Authorization: Bearer <token>`
- **Response**:
```json
[
  {
    "id": "application-uuid",
    "job_id": "job-uuid", 
    "status": "Applied",
    "applied_at": "2024-01-15T10:30:00Z",
    "notes": "Application notes",
    "job": {
      // Full job object with company, title, etc.
    }
  }
]
```

#### 11. Get Saved Jobs
- **GET** `/user/saved-jobs`
- **Description**: Get developer's saved jobs
- **Headers**: `Authorization: Bearer <token>`
- **Response**:
```json
[
  {
    "saved_at": "2024-01-15T10:30:00Z",
    "job": {
      // Full job object
    }
  }
]
```

#### 12. Get Developer Statistics
- **GET** `/user/stats`
- **Description**: Get developer dashboard statistics
- **Headers**: `Authorization: Bearer <token>`
- **Response**:
```json
{
  "applied_jobs": 18,
  "interviews_scheduled": 5,
  "saved_jobs": 12,
  "profile_views": 67
}
```

#### 13. Get Developer Analytics
- **GET** `/user/analytics`
- **Description**: Get analytics data for developer dashboard charts
- **Headers**: `Authorization: Bearer <token>`
- **Response**:
```json
{
  "application_data": [
    {"name": "Jan", "applications": 12, "interviews": 3},
    {"name": "Feb", "applications": 19, "interviews": 5}
  ],
  "job_status_data": [
    {"name": "Applied", "value": 10, "color": "#8b5cf6"},
    {"name": "In Review", "value": 3, "color": "#3b82f6"},
    {"name": "Interview", "value": 2, "color": "#10b981"}
  ]
}
```

---

### 🤖 AI Chat Endpoints (Stack-Bot)

#### 14. Send Chat Message
- **POST** `/chat/message`
- **Description**: Send a message to Stack-Bot AI career assistant
- **Headers**: `Authorization: Bearer <token>`
- **Body**:
```json
{
  "message": "Can you help me prepare for a React interview at Google?",
  "session_id": "optional-session-uuid"
}
```
- **Response**:
```json
{
  "session_id": "session-uuid",
  "messages": [
    {
      "type": "user",
      "message": "Can you help me prepare for a React interview at Google?",
      "timestamp": "2024-01-15T10:30:00Z"
    },
    {
      "type": "bot", 
      "message": "Absolutely! I'd be happy to help you prepare for your React interview at Google...",
      "timestamp": "2024-01-15T10:30:05Z"
    }
  ],
  "bot_response": "Absolutely! I'd be happy to help you prepare for your React interview at Google..."
}
```

#### 15. Get Chat History
- **GET** `/chat/history/{session_id}`
- **Description**: Get chat history for a session
- **Headers**: `Authorization: Bearer <token>`
- **Response**:
```json
{
  "session_id": "session-uuid",
  "messages": [
    // Array of chat messages
  ],
  "bot_response": ""
}
```

#### 16. Clear Chat Session
- **DELETE** `/chat/session/{session_id}`
- **Description**: Clear a chat session
- **Headers**: `Authorization: Bearer <token>`
- **Response**:
```json
{
  "message": "Chat session cleared successfully"
}
```

---

### 📈 Platform Endpoints

#### 17. Get Stack-Finds Statistics
- **GET** `/platform/stats`
- **Description**: Get Stack-Finds platform-wide statistics
- **Response**:
```json
{
  "new_jobs": "15,000+",
  "total_jobs": "450,000+",
  "happy_users": "25,000+",
  "companies": "2,500+"
}
```

#### 18. API Health Check
- **GET** `/health`
- **Description**: Check API health and status
- **Response**:
```json
{
  "status": "healthy",
  "service": "Stack-Finds API",
  "version": "2.0.0",
  "database": "connected"
}
```

---

## Error Responses

### Common HTTP Status Codes
- `200`: Success
- `201`: Created
- `400`: Bad Request (validation error)
- `401`: Unauthorized (invalid/missing token)
- `404`: Not Found
- `500`: Internal Server Error

### Error Response Format
```json
{
  "detail": "Error message describing what went wrong"
}
```

---

## Testing Examples with cURL

### 1. Register a new developer:
```bash
curl -X POST "https://b9debc4a-5fc0-43b5-bf12-fdfbd73ef363.preview.emergentagent.com/api/auth/register" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test Developer",
    "email": "test@developer.com",
    "password": "password123"
  }'
```

### 2. Get tech job listings:
```bash
curl "https://b9debc4a-5fc0-43b5-bf12-fdfbd73ef363.preview.emergentagent.com/api/jobs?search=react&limit=5"
```

### 3. Get developer profile (with token):
```bash
curl "https://b9debc4a-5fc0-43b5-bf12-fdfbd73ef363.preview.emergentagent.com/api/auth/me" \
  -H "Authorization: Bearer YOUR_JWT_TOKEN"
```

### 4. Send message to Stack-Bot:
```bash
curl -X POST "https://b9debc4a-5fc0-43b5-bf12-fdfbd73ef363.preview.emergentagent.com/api/chat/message" \
  -H "Authorization: Bearer YOUR_JWT_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "message": "What are the best JavaScript frameworks to learn in 2024?"
  }'
```

---

## Frontend Integration Notes

### Authentication Flow:
1. Developer registers/logs in → Get JWT token
2. Store token in localStorage/sessionStorage
3. Include token in all authenticated requests
4. Handle token expiration (redirect to login)

### Tech Job Search Integration:
- Use `/jobs` endpoint with query parameters for filtering
- Implement pagination with `skip` and `limit`
- Cache job data for better performance
- Show AI match percentages and recommendations

### Stack-Bot Integration:
- Create new session for each conversation
- Store session_id for conversation continuity
- Display typing indicators during AI response
- Support rich text formatting in bot responses

### Dashboard Integration:
- Fetch `/user/stats` for dashboard cards
- Use `/user/analytics` for charts (works with Recharts)
- Refresh data periodically or on user actions
- Show real-time application status updates

---

**Stack-Finds API is ready for developers! All endpoints are fully functional and optimized for tech job search.**