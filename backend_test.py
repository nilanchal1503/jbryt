#!/usr/bin/env python3
"""
JobRight Backend API Test Suite
Tests all backend endpoints for functionality and data persistence
"""

import requests
import json
import uuid
from datetime import datetime
import os
import sys

# Get backend URL from environment
BACKEND_URL = "https://b9debc4a-5fc0-43b5-bf12-fdfbd73ef363.preview.emergentagent.com"
API_BASE = f"{BACKEND_URL}/api"

# Test data
TEST_USER_DATA = {
    "name": "Sarah Johnson",
    "email": f"sarah.johnson.{uuid.uuid4().hex[:8]}@example.com",
    "password": "SecurePass123!"
}

TEST_LOGIN_DATA = {
    "email": TEST_USER_DATA["email"],
    "password": TEST_USER_DATA["password"]
}

# Global variables for test state
auth_token = None
user_id = None
test_job_id = None
test_session_id = None

def print_test_result(test_name, success, details=""):
    """Print formatted test results"""
    status = "✅ PASS" if success else "❌ FAIL"
    print(f"{status} {test_name}")
    if details:
        print(f"    {details}")
    print()

def make_request(method, endpoint, data=None, headers=None, params=None):
    """Make HTTP request with error handling"""
    url = f"{API_BASE}{endpoint}"
    
    try:
        if method.upper() == "GET":
            response = requests.get(url, headers=headers, params=params, timeout=30)
        elif method.upper() == "POST":
            response = requests.post(url, json=data, headers=headers, params=params, timeout=30)
        elif method.upper() == "PUT":
            response = requests.put(url, json=data, headers=headers, params=params, timeout=30)
        elif method.upper() == "DELETE":
            response = requests.delete(url, headers=headers, params=params, timeout=30)
        else:
            return None, f"Unsupported method: {method}"
        
        return response, None
    except requests.exceptions.RequestException as e:
        return None, str(e)

def test_platform_stats():
    """Test platform statistics endpoint"""
    print("🔍 Testing Platform Statistics...")
    
    response, error = make_request("GET", "/platform/stats")
    
    if error:
        print_test_result("Platform Stats - Connection", False, f"Connection error: {error}")
        return False
    
    if response.status_code != 200:
        print_test_result("Platform Stats - Status Code", False, f"Expected 200, got {response.status_code}")
        return False
    
    try:
        data = response.json()
        required_fields = ["new_jobs", "total_jobs", "happy_users", "companies"]
        
        for field in required_fields:
            if field not in data:
                print_test_result("Platform Stats - Data Structure", False, f"Missing field: {field}")
                return False
        
        print_test_result("Platform Stats", True, f"Stats: {data}")
        return True
        
    except json.JSONDecodeError:
        print_test_result("Platform Stats - JSON Parse", False, "Invalid JSON response")
        return False

def test_user_registration():
    """Test user registration"""
    global auth_token, user_id
    
    print("🔍 Testing User Registration...")
    
    response, error = make_request("POST", "/auth/register", TEST_USER_DATA)
    
    if error:
        print_test_result("User Registration - Connection", False, f"Connection error: {error}")
        return False
    
    if response.status_code != 200:
        print_test_result("User Registration - Status Code", False, f"Expected 200, got {response.status_code}")
        print(f"Response: {response.text}")
        return False
    
    try:
        data = response.json()
        
        # Check response structure
        if "access_token" not in data or "user" not in data:
            print_test_result("User Registration - Response Structure", False, "Missing access_token or user")
            return False
        
        # Store auth token and user ID for subsequent tests
        auth_token = data["access_token"]
        user_id = data["user"]["id"]
        
        print_test_result("User Registration", True, f"User created with ID: {user_id}")
        return True
        
    except json.JSONDecodeError:
        print_test_result("User Registration - JSON Parse", False, "Invalid JSON response")
        return False

def test_user_login():
    """Test user login"""
    global auth_token
    
    print("🔍 Testing User Login...")
    
    response, error = make_request("POST", "/auth/login", TEST_LOGIN_DATA)
    
    if error:
        print_test_result("User Login - Connection", False, f"Connection error: {error}")
        return False
    
    if response.status_code != 200:
        print_test_result("User Login - Status Code", False, f"Expected 200, got {response.status_code}")
        print(f"Response: {response.text}")
        return False
    
    try:
        data = response.json()
        
        if "access_token" not in data:
            print_test_result("User Login - Response Structure", False, "Missing access_token")
            return False
        
        # Update auth token
        auth_token = data["access_token"]
        
        print_test_result("User Login", True, "Login successful")
        return True
        
    except json.JSONDecodeError:
        print_test_result("User Login - JSON Parse", False, "Invalid JSON response")
        return False

def test_get_user_profile():
    """Test getting user profile"""
    print("🔍 Testing Get User Profile...")
    
    if not auth_token:
        print_test_result("Get User Profile - Auth", False, "No auth token available")
        return False
    
    headers = {"Authorization": f"Bearer {auth_token}"}
    response, error = make_request("GET", "/auth/me", headers=headers)
    
    if error:
        print_test_result("Get User Profile - Connection", False, f"Connection error: {error}")
        return False
    
    if response.status_code != 200:
        print_test_result("Get User Profile - Status Code", False, f"Expected 200, got {response.status_code}")
        return False
    
    try:
        data = response.json()
        
        if "id" not in data or "email" not in data:
            print_test_result("Get User Profile - Data Structure", False, "Missing required fields")
            return False
        
        print_test_result("Get User Profile", True, f"Profile retrieved for: {data['name']}")
        return True
        
    except json.JSONDecodeError:
        print_test_result("Get User Profile - JSON Parse", False, "Invalid JSON response")
        return False

def test_update_user_profile():
    """Test updating user profile"""
    print("🔍 Testing Update User Profile...")
    
    if not auth_token:
        print_test_result("Update User Profile - Auth", False, "No auth token available")
        return False
    
    update_data = {
        "title": "Senior Software Engineer",
        "location": "San Francisco, CA",
        "skills": ["Python", "FastAPI", "React", "MongoDB"]
    }
    
    headers = {"Authorization": f"Bearer {auth_token}"}
    response, error = make_request("PUT", "/auth/profile", update_data, headers)
    
    if error:
        print_test_result("Update User Profile - Connection", False, f"Connection error: {error}")
        return False
    
    if response.status_code != 200:
        print_test_result("Update User Profile - Status Code", False, f"Expected 200, got {response.status_code}")
        return False
    
    try:
        data = response.json()
        
        if data.get("title") != update_data["title"]:
            print_test_result("Update User Profile - Data Persistence", False, "Profile update not persisted")
            return False
        
        print_test_result("Update User Profile", True, f"Profile updated: {data['title']}")
        return True
        
    except json.JSONDecodeError:
        print_test_result("Update User Profile - JSON Parse", False, "Invalid JSON response")
        return False

def test_get_jobs():
    """Test job listings"""
    global test_job_id
    
    print("🔍 Testing Job Listings...")
    
    response, error = make_request("GET", "/jobs/")
    
    if error:
        print_test_result("Job Listings - Connection", False, f"Connection error: {error}")
        return False
    
    if response.status_code != 200:
        print_test_result("Job Listings - Status Code", False, f"Expected 200, got {response.status_code}")
        return False
    
    try:
        data = response.json()
        
        if not isinstance(data, list):
            print_test_result("Job Listings - Data Type", False, "Expected list of jobs")
            return False
        
        if len(data) == 0:
            print_test_result("Job Listings - Data Availability", False, "No jobs found")
            return False
        
        # Store first job ID for subsequent tests
        test_job_id = data[0]["id"]
        
        print_test_result("Job Listings", True, f"Found {len(data)} jobs")
        return True
        
    except json.JSONDecodeError:
        print_test_result("Job Listings - JSON Parse", False, "Invalid JSON response")
        return False

def test_job_search_filters():
    """Test job search with filters"""
    print("🔍 Testing Job Search Filters...")
    
    # Test search filter
    params = {"search": "engineer", "limit": 5}
    response, error = make_request("GET", "/jobs/", params=params)
    
    if error:
        print_test_result("Job Search Filters - Connection", False, f"Connection error: {error}")
        return False
    
    if response.status_code != 200:
        print_test_result("Job Search Filters - Status Code", False, f"Expected 200, got {response.status_code}")
        return False
    
    try:
        data = response.json()
        
        if not isinstance(data, list):
            print_test_result("Job Search Filters - Data Type", False, "Expected list of jobs")
            return False
        
        print_test_result("Job Search Filters", True, f"Search returned {len(data)} jobs")
        return True
        
    except json.JSONDecodeError:
        print_test_result("Job Search Filters - JSON Parse", False, "Invalid JSON response")
        return False

def test_job_details():
    """Test getting specific job details"""
    print("🔍 Testing Job Details...")
    
    if not test_job_id:
        print_test_result("Job Details - Job ID", False, "No test job ID available")
        return False
    
    response, error = make_request("GET", f"/jobs/{test_job_id}")
    
    if error:
        print_test_result("Job Details - Connection", False, f"Connection error: {error}")
        return False
    
    if response.status_code != 200:
        print_test_result("Job Details - Status Code", False, f"Expected 200, got {response.status_code}")
        return False
    
    try:
        data = response.json()
        
        required_fields = ["id", "title", "company", "description"]
        for field in required_fields:
            if field not in data:
                print_test_result("Job Details - Data Structure", False, f"Missing field: {field}")
                return False
        
        print_test_result("Job Details", True, f"Job details: {data['title']} at {data['company']}")
        return True
        
    except json.JSONDecodeError:
        print_test_result("Job Details - JSON Parse", False, "Invalid JSON response")
        return False

def test_job_application():
    """Test applying to a job"""
    print("🔍 Testing Job Application...")
    
    if not auth_token or not test_job_id:
        print_test_result("Job Application - Prerequisites", False, "Missing auth token or job ID")
        return False
    
    # Send minimal application data
    application_data = {
        "notes": "I'm very interested in this position and believe my skills align well with the requirements."
    }
    
    headers = {"Authorization": f"Bearer {auth_token}"}
    response, error = make_request("POST", f"/jobs/{test_job_id}/apply", application_data, headers)
    
    if error:
        print_test_result("Job Application - Connection", False, f"Connection error: {error}")
        return False
    
    if response.status_code != 200:
        print_test_result("Job Application - Status Code", False, f"Expected 200, got {response.status_code}")
        print(f"Response: {response.text}")
        return False
    
    try:
        data = response.json()
        
        if "id" not in data or "status" not in data:
            print_test_result("Job Application - Response Structure", False, "Missing required fields")
            return False
        
        print_test_result("Job Application", True, f"Application submitted with status: {data['status']}")
        return True
        
    except json.JSONDecodeError:
        print_test_result("Job Application - JSON Parse", False, "Invalid JSON response")
        return False

def test_save_job():
    """Test saving a job"""
    print("🔍 Testing Save Job...")
    
    if not auth_token or not test_job_id:
        print_test_result("Save Job - Prerequisites", False, "Missing auth token or job ID")
        return False
    
    headers = {"Authorization": f"Bearer {auth_token}"}
    response, error = make_request("POST", f"/jobs/{test_job_id}/save", headers=headers)
    
    if error:
        print_test_result("Save Job - Connection", False, f"Connection error: {error}")
        return False
    
    if response.status_code != 200:
        print_test_result("Save Job - Status Code", False, f"Expected 200, got {response.status_code}")
        return False
    
    try:
        data = response.json()
        
        if "saved" not in data:
            print_test_result("Save Job - Response Structure", False, "Missing 'saved' field")
            return False
        
        print_test_result("Save Job", True, f"Job saved: {data['saved']}")
        return True
        
    except json.JSONDecodeError:
        print_test_result("Save Job - JSON Parse", False, "Invalid JSON response")
        return False

def test_like_job():
    """Test liking a job"""
    print("🔍 Testing Like Job...")
    
    if not auth_token or not test_job_id:
        print_test_result("Like Job - Prerequisites", False, "Missing auth token or job ID")
        return False
    
    headers = {"Authorization": f"Bearer {auth_token}"}
    response, error = make_request("POST", f"/jobs/{test_job_id}/like", headers=headers)
    
    if error:
        print_test_result("Like Job - Connection", False, f"Connection error: {error}")
        return False
    
    if response.status_code != 200:
        print_test_result("Like Job - Status Code", False, f"Expected 200, got {response.status_code}")
        return False
    
    try:
        data = response.json()
        
        if "liked" not in data:
            print_test_result("Like Job - Response Structure", False, "Missing 'liked' field")
            return False
        
        print_test_result("Like Job", True, f"Job liked: {data['liked']}")
        return True
        
    except json.JSONDecodeError:
        print_test_result("Like Job - JSON Parse", False, "Invalid JSON response")
        return False

def test_user_applications():
    """Test getting user applications"""
    print("🔍 Testing User Applications...")
    
    if not auth_token:
        print_test_result("User Applications - Auth", False, "No auth token available")
        return False
    
    headers = {"Authorization": f"Bearer {auth_token}"}
    response, error = make_request("GET", "/user/applications", headers=headers)
    
    if error:
        print_test_result("User Applications - Connection", False, f"Connection error: {error}")
        return False
    
    if response.status_code != 200:
        print_test_result("User Applications - Status Code", False, f"Expected 200, got {response.status_code}")
        return False
    
    try:
        data = response.json()
        
        if not isinstance(data, list):
            print_test_result("User Applications - Data Type", False, "Expected list of applications")
            return False
        
        print_test_result("User Applications", True, f"Found {len(data)} applications")
        return True
        
    except json.JSONDecodeError:
        print_test_result("User Applications - JSON Parse", False, "Invalid JSON response")
        return False

def test_user_saved_jobs():
    """Test getting user saved jobs"""
    print("🔍 Testing User Saved Jobs...")
    
    if not auth_token:
        print_test_result("User Saved Jobs - Auth", False, "No auth token available")
        return False
    
    headers = {"Authorization": f"Bearer {auth_token}"}
    response, error = make_request("GET", "/user/saved-jobs", headers=headers)
    
    if error:
        print_test_result("User Saved Jobs - Connection", False, f"Connection error: {error}")
        return False
    
    if response.status_code != 200:
        print_test_result("User Saved Jobs - Status Code", False, f"Expected 200, got {response.status_code}")
        return False
    
    try:
        data = response.json()
        
        if not isinstance(data, list):
            print_test_result("User Saved Jobs - Data Type", False, "Expected list of saved jobs")
            return False
        
        print_test_result("User Saved Jobs", True, f"Found {len(data)} saved jobs")
        return True
        
    except json.JSONDecodeError:
        print_test_result("User Saved Jobs - JSON Parse", False, "Invalid JSON response")
        return False

def test_user_stats():
    """Test getting user dashboard statistics"""
    print("🔍 Testing User Statistics...")
    
    if not auth_token:
        print_test_result("User Statistics - Auth", False, "No auth token available")
        return False
    
    headers = {"Authorization": f"Bearer {auth_token}"}
    response, error = make_request("GET", "/user/stats", headers=headers)
    
    if error:
        print_test_result("User Statistics - Connection", False, f"Connection error: {error}")
        return False
    
    if response.status_code != 200:
        print_test_result("User Statistics - Status Code", False, f"Expected 200, got {response.status_code}")
        return False
    
    try:
        data = response.json()
        
        required_fields = ["applied_jobs", "interviews_scheduled", "saved_jobs", "profile_views"]
        for field in required_fields:
            if field not in data:
                print_test_result("User Statistics - Data Structure", False, f"Missing field: {field}")
                return False
        
        print_test_result("User Statistics", True, f"Stats: {data}")
        return True
        
    except json.JSONDecodeError:
        print_test_result("User Statistics - JSON Parse", False, "Invalid JSON response")
        return False

def test_user_analytics():
    """Test getting user analytics"""
    print("🔍 Testing User Analytics...")
    
    if not auth_token:
        print_test_result("User Analytics - Auth", False, "No auth token available")
        return False
    
    headers = {"Authorization": f"Bearer {auth_token}"}
    response, error = make_request("GET", "/user/analytics", headers=headers)
    
    if error:
        print_test_result("User Analytics - Connection", False, f"Connection error: {error}")
        return False
    
    if response.status_code != 200:
        print_test_result("User Analytics - Status Code", False, f"Expected 200, got {response.status_code}")
        return False
    
    try:
        data = response.json()
        
        required_fields = ["application_data", "job_status_data"]
        for field in required_fields:
            if field not in data:
                print_test_result("User Analytics - Data Structure", False, f"Missing field: {field}")
                return False
        
        print_test_result("User Analytics", True, "Analytics data retrieved successfully")
        return True
        
    except json.JSONDecodeError:
        print_test_result("User Analytics - JSON Parse", False, "Invalid JSON response")
        return False

def test_ai_chat():
    """Test AI chat functionality"""
    global test_session_id
    
    print("🔍 Testing AI Chat...")
    
    if not auth_token:
        print_test_result("AI Chat - Auth", False, "No auth token available")
        return False
    
    test_session_id = str(uuid.uuid4())
    chat_data = {
        "message": "Hello Orion! I'm looking for software engineering jobs in San Francisco. Can you help me?",
        "session_id": test_session_id
    }
    
    headers = {"Authorization": f"Bearer {auth_token}"}
    response, error = make_request("POST", "/chat/message", chat_data, headers)
    
    if error:
        print_test_result("AI Chat - Connection", False, f"Connection error: {error}")
        return False
    
    if response.status_code != 200:
        print_test_result("AI Chat - Status Code", False, f"Expected 200, got {response.status_code}")
        print(f"Response: {response.text}")
        return False
    
    try:
        data = response.json()
        
        required_fields = ["session_id", "messages", "bot_response"]
        for field in required_fields:
            if field not in data:
                print_test_result("AI Chat - Response Structure", False, f"Missing field: {field}")
                return False
        
        if not data["bot_response"]:
            print_test_result("AI Chat - Bot Response", False, "Empty bot response")
            return False
        
        print_test_result("AI Chat", True, f"Bot responded: {data['bot_response'][:100]}...")
        return True
        
    except json.JSONDecodeError:
        print_test_result("AI Chat - JSON Parse", False, "Invalid JSON response")
        return False

def test_chat_history():
    """Test getting chat history"""
    print("🔍 Testing Chat History...")
    
    if not auth_token or not test_session_id:
        print_test_result("Chat History - Prerequisites", False, "Missing auth token or session ID")
        return False
    
    headers = {"Authorization": f"Bearer {auth_token}"}
    response, error = make_request("GET", f"/chat/history/{test_session_id}", headers=headers)
    
    if error:
        print_test_result("Chat History - Connection", False, f"Connection error: {error}")
        return False
    
    if response.status_code != 200:
        print_test_result("Chat History - Status Code", False, f"Expected 200, got {response.status_code}")
        return False
    
    try:
        data = response.json()
        
        if "messages" not in data:
            print_test_result("Chat History - Response Structure", False, "Missing messages field")
            return False
        
        if len(data["messages"]) < 2:  # Should have user message and bot response
            print_test_result("Chat History - Message Count", False, "Expected at least 2 messages")
            return False
        
        print_test_result("Chat History", True, f"Retrieved {len(data['messages'])} messages")
        return True
        
    except json.JSONDecodeError:
        print_test_result("Chat History - JSON Parse", False, "Invalid JSON response")
        return False

def run_all_tests():
    """Run all backend tests"""
    print("🚀 Starting JobRight Backend API Tests")
    print("=" * 50)
    
    test_results = []
    
    # Test sequence
    tests = [
        ("Platform Statistics", test_platform_stats),
        ("User Registration", test_user_registration),
        ("User Login", test_user_login),
        ("Get User Profile", test_get_user_profile),
        ("Update User Profile", test_update_user_profile),
        ("Job Listings", test_get_jobs),
        ("Job Search Filters", test_job_search_filters),
        ("Job Details", test_job_details),
        ("Job Application", test_job_application),
        ("Save Job", test_save_job),
        ("Like Job", test_like_job),
        ("User Applications", test_user_applications),
        ("User Saved Jobs", test_user_saved_jobs),
        ("User Statistics", test_user_stats),
        ("User Analytics", test_user_analytics),
        ("AI Chat", test_ai_chat),
        ("Chat History", test_chat_history)
    ]
    
    for test_name, test_func in tests:
        try:
            result = test_func()
            test_results.append((test_name, result))
        except Exception as e:
            print_test_result(test_name, False, f"Exception: {str(e)}")
            test_results.append((test_name, False))
    
    # Summary
    print("=" * 50)
    print("📊 TEST SUMMARY")
    print("=" * 50)
    
    passed = sum(1 for _, result in test_results if result)
    total = len(test_results)
    
    for test_name, result in test_results:
        status = "✅ PASS" if result else "❌ FAIL"
        print(f"{status} {test_name}")
    
    print(f"\nTotal: {passed}/{total} tests passed")
    
    if passed == total:
        print("🎉 All tests passed! Backend is working correctly.")
        return True
    else:
        print(f"⚠️  {total - passed} tests failed. Please check the issues above.")
        return False

if __name__ == "__main__":
    success = run_all_tests()
    sys.exit(0 if success else 1)