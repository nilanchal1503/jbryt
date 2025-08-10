# JobRight Clone - API Documentation

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
- **Description**: Create a new user account
- **Body**:
```json
{
  "name": "John Doe",
  "email": "john.doe@example.com",
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
    "email": "john.doe@example.com",
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
- **Description**: Authenticate existing user
- **Body**:
```json
{
  "email": "john.doe@example.com",
  "password": "securepassword123"
}
```
- **Response**: Same as register response

#### 3. Get Current User Profile
- **GET** `/auth/me`
- **Description**: Get current authenticated user's profile
- **Headers**: `Authorization: Bearer <token>`
- **Response**:
```json
{
  "id": "uuid-string",
  "name": "John Doe",
  "email": "john.doe@example.com",
  "title": "Software Engineer",
  "location": "San Francisco, CA",
  "avatar": "https://example.com/avatar.jpg",
  "skills": ["JavaScript", "React", "Node.js"],
  "experience": "5+ years",
  "preferences": {
    "job_types": ["Full Time", "Remote"],
    "locations": ["San Francisco", "Remote"],
    "salary_range": {"min": 100000, "max": 200000}
  }
}
```

#### 4. Update User Profile
- **PUT** `/auth/profile`
- **Description**: Update user profile information
- **Headers**: `Authorization: Bearer <token>`
- **Body**:
```json
{
  "title": "Senior Software Engineer",
  "location": "Seattle, WA",
  "skills": ["JavaScript", "React", "Node.js", "Python"],
  "experience": "7+ years",
  "preferences": {
    "job_types": ["Full Time"],
    "locations": ["Seattle", "Remote"],
    "salary_range": {"min": 120000, "max": 250000}
  }
}
```
- **Response**: Updated user profile object

---

### 💼 Job Management Endpoints

#### 5. Get Job Listings
- **GET** `/jobs`
- **Description**: Get job listings with optional filters
- **Query Parameters**:
  - `search`: Search term (searches title, company, description)
  - `location`: Filter by location
  - `job_type`: Filter by job type (Full Time, Part Time, Contract)
  - `experience`: Filter by experience level (Entry Level, Mid Level, Senior Level)
  - `limit`: Number of results (default: 20, max: 100)
  - `skip`: Number of results to skip (pagination)

- **Example Request**:
```
GET /jobs?search=engineer&location=San Francisco&job_type=Full Time&limit=10
```

- **Response**:
```json
[
  {
    "id": "job-uuid",
    "title": "Senior Software Engineer",
    "company": "Google",
    "location": "San Francisco, CA",
    "type": "Full Time",
    "salary": "$150,000 - $200,000",
    "level": "Senior Level",
    "sponsorship": "H1B sponsorship",
    "description": "Join Google to build innovative solutions...",
    "requirements": ["Python", "JavaScript", "AWS", "Docker"],
    "logo": "https://logo.clearbit.com/google.com",
    "posted": "2 days ago",
    "recommended": true
  }
]
```

#### 6. Get Job Details
- **GET** `/jobs/{job_id}`
- **Description**: Get detailed information about a specific job
- **Response**: Single job object (same structure as job listing item)

#### 7. Apply to Job
- **POST** `/jobs/{job_id}/apply`
- **Description**: Apply to a specific job
- **Headers**: `Authorization: Bearer <token>`
- **Body**:
```json
{
  "notes": "I'm excited about this opportunity because..."
}
```
- **Response**:
```json
{
  "id": "application-uuid",
  "job_id": "job-uuid",
  "status": "Applied",
  "applied_at": "2024-01-15T10:30:00Z",
  "notes": "I'm excited about this opportunity because...",
  "job": {
    // Full job object
  }
}
```

#### 8. Save/Unsave Job
- **POST** `/jobs/{job_id}/save`
- **Description**: Save or unsave a job for later
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
- **Description**: Like or unlike a job
- **Headers**: `Authorization: Bearer <token>`
- **Response**:
```json
{
  "message": "Job liked successfully",
  "liked": true
}
```

---

### 📊 User Dashboard Endpoints

#### 10. Get User Applications
- **GET** `/user/applications`
- **Description**: Get user's job applications
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
      // Full job object
    }
  }
]
```

#### 11. Get Saved Jobs
- **GET** `/user/saved-jobs`
- **Description**: Get user's saved jobs
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

#### 12. Get User Statistics
- **GET** `/user/stats`
- **Description**: Get user dashboard statistics
- **Headers**: `Authorization: Bearer <token>`
- **Response**:
```json
{
  "applied_jobs": 15,
  "interviews_scheduled": 3,
  "saved_jobs": 8,
  "profile_views": 45
}
```

#### 13. Get User Analytics
- **GET** `/user/analytics`
- **Description**: Get analytics data for dashboard charts
- **Headers**: `Authorization: Bearer <token>`
- **Response**:
```json
{
  "application_data": [
    {"name": "Jan", "applications": 12, "interviews": 3},
    {"name": "Feb", "applications": 19, "interviews": 5}
  ],
  "job_status_data": [
    {"name": "Applied", "value": 10, "color": "#10b981"},
    {"name": "In Review", "value": 3, "color": "#3b82f6"},
    {"name": "Interview", "value": 2, "color": "#f59e0b"}
  ]
}
```

---

### 🤖 AI Chat Endpoints

#### 14. Send Chat Message
- **POST** `/chat/message`
- **Description**: Send a message to Orion AI assistant
- **Headers**: `Authorization: Bearer <token>`
- **Body**:
```json
{
  "message": "Can you help me prepare for a software engineering interview?",
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
      "message": "Can you help me prepare for a software engineering interview?",
      "timestamp": "2024-01-15T10:30:00Z"
    },
    {
      "type": "bot",
      "message": "I'd be happy to help you prepare for your software engineering interview...",
      "timestamp": "2024-01-15T10:30:05Z"
    }
  ],
  "bot_response": "I'd be happy to help you prepare for your software engineering interview..."
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

#### 17. Get Platform Statistics
- **GET** `/platform/stats`
- **Description**: Get platform-wide statistics for homepage
- **Response**:
```json
{
  "new_jobs": "50+",
  "total_jobs": "50+",
  "happy_users": "520,000+",
  "companies": "10,000+"
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

### 1. Register a new user:
```bash
curl -X POST "https://b9debc4a-5fc0-43b5-bf12-fdfbd73ef363.preview.emergentagent.com/api/auth/register" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "password": "password123"
  }'
```

### 2. Get job listings:
```bash
curl "https://b9debc4a-5fc0-43b5-bf12-fdfbd73ef363.preview.emergentagent.com/api/jobs?search=engineer&limit=5"
```

### 3. Get user profile (with token):
```bash
curl "https://b9debc4a-5fc0-43b5-bf12-fdfbd73ef363.preview.emergentagent.com/api/auth/me" \
  -H "Authorization: Bearer YOUR_JWT_TOKEN"
```

### 4. Send chat message:
```bash
curl -X POST "https://b9debc4a-5fc0-43b5-bf12-fdfbd73ef363.preview.emergentagent.com/api/chat/message" \
  -H "Authorization: Bearer YOUR_JWT_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "message": "What are the best programming languages to learn in 2024?"
  }'
```

---

## Frontend Integration Notes

### Authentication Flow:
1. User registers/logs in → Get JWT token
2. Store token in localStorage/sessionStorage
3. Include token in all authenticated requests
4. Handle token expiration (redirect to login)

### Job Search Integration:
- Use `/jobs` endpoint with query parameters for filtering
- Implement pagination with `skip` and `limit`
- Cache job data for better performance

### Chat Integration:
- Create new session for each conversation
- Store session_id for conversation continuity
- Poll for new messages or implement WebSocket later

### Dashboard Integration:
- Fetch `/user/stats` for dashboard cards
- Use `/user/analytics` for charts (works with Recharts)
- Refresh data periodically or on user actions

---

**All endpoints are ready for testing! The backend is fully functional and production-ready.**