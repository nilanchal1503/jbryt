from models.job import Job
from datetime import datetime, timedelta
import random

def get_seed_jobs():
    """Generate seed job data for the database"""
    companies = [
        {"name": "Google", "logo": "https://logo.clearbit.com/google.com"},
        {"name": "Microsoft", "logo": "https://logo.clearbit.com/microsoft.com"},
        {"name": "Meta", "logo": "https://logo.clearbit.com/meta.com"},
        {"name": "Apple", "logo": "https://logo.clearbit.com/apple.com"},
        {"name": "Amazon", "logo": "https://logo.clearbit.com/amazon.com"},
        {"name": "Netflix", "logo": "https://logo.clearbit.com/netflix.com"},
        {"name": "Airbnb", "logo": "https://logo.clearbit.com/airbnb.com"},
        {"name": "Uber", "logo": "https://logo.clearbit.com/uber.com"},
        {"name": "Tesla", "logo": "https://logo.clearbit.com/tesla.com"},
        {"name": "Spotify", "logo": "https://logo.clearbit.com/spotify.com"}
    ]
    
    job_titles = [
        "Senior Software Engineer",
        "Frontend Developer",
        "Backend Developer",
        "Full Stack Engineer",
        "Data Scientist",
        "Product Manager",
        "DevOps Engineer",
        "Machine Learning Engineer",
        "UI/UX Designer",
        "Software Architect",
        "Technical Lead",
        "Engineering Manager",
        "Data Engineer",
        "Cloud Engineer",
        "Mobile Developer"
    ]
    
    locations = [
        "San Francisco, CA",
        "Seattle, WA",
        "New York, NY",
        "Austin, TX",
        "Los Angeles, CA",
        "Boston, MA",
        "Chicago, IL",
        "Denver, CO",
        "Portland, OR",
        "Remote"
    ]
    
    job_types = ["Full Time", "Part Time", "Contract"]
    levels = ["Entry Level", "Mid Level", "Senior Level", "Executive Level"]
    sponsorships = ["H1B sponsorship", "No sponsorship", "Visa sponsorship available"]
    
    requirements_pool = [
        "Python", "JavaScript", "React", "Node.js", "TypeScript", "AWS", "Docker",
        "Kubernetes", "SQL", "MongoDB", "PostgreSQL", "Git", "CI/CD", "REST APIs",
        "GraphQL", "Machine Learning", "TensorFlow", "PyTorch", "Agile", "Scrum",
        "System Design", "Microservices", "Redis", "Elasticsearch", "Java", "Go",
        "Rust", "Swift", "Kotlin", "Flutter", "React Native", "Vue.js", "Angular"
    ]
    
    jobs = []
    
    for i in range(50):  # Generate 50 jobs
        company = random.choice(companies)
        title = random.choice(job_titles)
        
        # Generate salary range based on level
        level = random.choice(levels)
        if "Senior" in level or "Executive" in level:
            min_salary = random.randint(150, 200)
            max_salary = min_salary + random.randint(50, 100)
        elif "Mid" in level:
            min_salary = random.randint(100, 150)
            max_salary = min_salary + random.randint(30, 70)
        else:
            min_salary = random.randint(70, 120)
            max_salary = min_salary + random.randint(20, 50)
        
        salary = f"${min_salary},000 - ${max_salary},000"
        
        # Generate requirements
        num_reqs = random.randint(3, 8)
        requirements = random.sample(requirements_pool, num_reqs)
        
        # Generate description
        descriptions = [
            f"Join {company['name']} to build innovative solutions that impact millions of users worldwide.",
            f"We're looking for a talented {title} to join our growing engineering team at {company['name']}.",
            f"Help us shape the future of technology at {company['name']} with cutting-edge projects.",
            f"Be part of {company['name']}'s mission to revolutionize the industry through technology.",
            f"Work on exciting projects that push the boundaries of what's possible at {company['name']}."
        ]
        
        # Random posting time (within last 30 days)
        days_ago = random.randint(0, 30)
        posted_at = datetime.utcnow() - timedelta(days=days_ago, hours=random.randint(0, 23))
        
        job = Job(
            title=title,
            company=company["name"],
            location=random.choice(locations),
            type=random.choice(job_types),
            salary=salary,
            level=level,
            sponsorship=random.choice(sponsorships),
            description=random.choice(descriptions),
            requirements=requirements,
            logo=company["logo"],
            posted_at=posted_at,
            is_active=True
        )
        
        jobs.append(job.dict())
    
    return jobs