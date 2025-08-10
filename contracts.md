# JobRight Clone - Backend Contracts

## API Contracts

### Authentication Endpoints
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `GET /api/auth/me` - Get current user profile
- `PUT /api/auth/profile` - Update user profile

### Job Management Endpoints
- `GET /api/jobs` - Get job listings with filters (search, location, type, experience)
- `GET /api/jobs/:id` - Get specific job details
- `POST /api/jobs/:id/apply` - Apply to a job
- `POST /api/jobs/:id/save` - Save/unsave a job
- `POST /api/jobs/:id/like` - Like/unlike a job
- `GET /api/user/applications` - Get user's job applications
- `GET /api/user/saved-jobs` - Get user's saved jobs

### AI Chat Endpoints
- `POST /api/chat/message` - Send message to Orion AI
- `GET /api/chat/history/:session_id` - Get chat history for a session
- `DELETE /api/chat/session/:session_id` - Clear chat session

### Analytics Endpoints
- `GET /api/user/stats` - Get user dashboard statistics
- `GET /api/user/analytics` - Get user application analytics data

## Mock Data to Replace

### From mockData.js:
1. **mockJobs** → Real job data from database
2. **mockUser** → Actual user profile from authentication
3. **mockTestimonials** → Real testimonials from database
4. **mockStats** → Real platform statistics
5. **mockChatMessages** → Actual AI chat conversations
6. **mockCareerAdvice** → Dynamic AI-generated advice

## Backend Implementation Plan

### 1. Database Models (MongoDB)
```javascript
// User Schema
{
  _id: ObjectId,
  name: String,
  email: String (unique),
  password: String (hashed),
  title: String,
  location: String,
  avatar: String,
  skills: [String],
  experience: String,
  resume: String,
  preferences: {
    jobTypes: [String],
    locations: [String],
    salaryRange: {min: Number, max: Number}
  },
  createdAt: Date,
  updatedAt: Date
}

// Job Schema
{
  _id: ObjectId,
  title: String,
  company: String,
  location: String,
  type: String, // Full Time, Part Time, Contract
  salary: String,
  level: String, // Entry, Mid, Senior, Executive
  sponsorship: String,
  description: String,
  requirements: [String],
  logo: String,
  postedAt: Date,
  isActive: Boolean
}

// Application Schema
{
  _id: ObjectId,
  userId: ObjectId,
  jobId: ObjectId,
  status: String, // Applied, In Review, Interview, Offer, Rejected
  appliedAt: Date,
  notes: String
}

// ChatSession Schema
{
  _id: ObjectId,
  userId: ObjectId,
  sessionId: String,
  messages: [{
    type: String, // user, bot
    message: String,
    timestamp: Date
  }],
  createdAt: Date,
  updatedAt: Date
}

// SavedJob Schema
{
  _id: ObjectId,
  userId: ObjectId,
  jobId: ObjectId,
  savedAt: Date
}

// LikedJob Schema
{
  _id: ObjectId,
  userId: ObjectId,
  jobId: ObjectId,
  likedAt: Date
}
```

### 2. Business Logic
- **JWT Authentication** with bcrypt password hashing
- **Job Matching Algorithm** based on user skills and preferences
- **AI Chat Integration** using Emergent LLM Key for Orion responses
- **Real-time Statistics** calculation for dashboard
- **Application Tracking** with status updates

### 3. External Integrations
- **Emergent LLM API** for Orion AI chatbot responses
- **Email Service** for notifications (optional)
- **File Upload** for resume storage

## Frontend & Backend Integration

### 1. Remove Mock Data
- Replace `mockJobs` with API calls to `/api/jobs`
- Replace `mockUser` with `/api/auth/me`
- Replace `mockChatMessages` with `/api/chat/history`
- Replace hardcoded stats with `/api/user/stats`

### 2. State Management Updates
- Add loading states for API calls
- Implement error handling with toast notifications
- Add authentication context for user session management
- Update job filtering to use backend search

### 3. Key Integration Points
- **OrionChatbot.jsx**: Connect to `/api/chat/message` endpoint
- **JobsPage.jsx**: Use `/api/jobs` with real filtering
- **Dashboard.jsx**: Fetch real analytics from `/api/user/analytics`
- **AuthPage.jsx**: Implement actual login/register with JWT
- **App.js**: Add authentication middleware and protected routes

### 4. Security Implementation
- JWT token validation middleware
- Password hashing with bcrypt
- Input validation and sanitization
- Rate limiting for API endpoints
- CORS configuration for production

## Testing Strategy
- Unit tests for authentication flow
- Integration tests for job search functionality
- End-to-end tests for Orion chatbot
- Performance tests for job listing queries