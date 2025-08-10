from models.job import Job
from datetime import datetime, timedelta
import random

def get_seed_jobs():
    """Generate seed tech job data for Stack-Finds database"""
    tech_companies = [
        {"name": "Google", "logo": "https://logo.clearbit.com/google.com"},
        {"name": "Microsoft", "logo": "https://logo.clearbit.com/microsoft.com"},
        {"name": "Meta", "logo": "https://logo.clearbit.com/meta.com"},
        {"name": "Apple", "logo": "https://logo.clearbit.com/apple.com"},
        {"name": "Amazon", "logo": "https://logo.clearbit.com/amazon.com"},
        {"name": "Netflix", "logo": "https://logo.clearbit.com/netflix.com"},
        {"name": "Airbnb", "logo": "https://logo.clearbit.com/airbnb.com"},
        {"name": "Uber", "logo": "https://logo.clearbit.com/uber.com"},
        {"name": "Tesla", "logo": "https://logo.clearbit.com/tesla.com"},
        {"name": "Spotify", "logo": "https://logo.clearbit.com/spotify.com"},
        {"name": "Stripe", "logo": "https://logo.clearbit.com/stripe.com"},
        {"name": "Shopify", "logo": "https://logo.clearbit.com/shopify.com"},
        {"name": "Slack", "logo": "https://logo.clearbit.com/slack.com"},
        {"name": "Discord", "logo": "https://logo.clearbit.com/discord.com"},
        {"name": "GitHub", "logo": "https://logo.clearbit.com/github.com"}
    ]
    
    tech_job_titles = [
        "Senior Full Stack Engineer",
        "Frontend React Developer",
        "Backend Python Developer", 
        "Senior Software Engineer",
        "Full Stack Developer",
        "Data Scientist",
        "Machine Learning Engineer",
        "DevOps Engineer",
        "Cloud Solutions Architect",
        "iOS Developer",
        "Android Developer",
        "Frontend Engineer",
        "Backend Engineer",
        "Platform Engineer",
        "Site Reliability Engineer",
        "Technical Lead",
        "Engineering Manager",
        "Data Engineer",
        "Security Engineer",
        "Mobile Developer",
        "React Native Developer",
        "Vue.js Developer",
        "Angular Developer",
        "Node.js Developer",
        "Python Developer",
        "Java Developer",
        "Go Developer",
        "Rust Developer",
        "TypeScript Developer",
        "GraphQL Developer"
    ]
    
    tech_locations = [
        "San Francisco, CA",
        "Seattle, WA", 
        "New York, NY",
        "Austin, TX",
        "Los Angeles, CA",
        "Boston, MA",
        "Chicago, IL",
        "Denver, CO",
        "Portland, OR",
        "Remote",
        "Palo Alto, CA",
        "Mountain View, CA",
        "Redmond, WA",
        "Menlo Park, CA",
        "Cupertino, CA"
    ]
    
    job_types = ["Full Time", "Part Time", "Contract", "Remote"]
    experience_levels = ["Entry Level", "Mid Level", "Senior Level", "Staff Level", "Principal Level"]
    visa_sponsorships = ["H1B sponsorship available", "No visa sponsorship", "Visa sponsorship considered", "Green card sponsorship"]
    
    # Tech stack requirements pool
    tech_requirements = [
        # Frontend
        "React", "Vue.js", "Angular", "TypeScript", "JavaScript", "HTML/CSS", "Sass/SCSS",
        "Next.js", "Nuxt.js", "Svelte", "Redux", "Vuex", "RxJS", "Webpack", "Vite",
        
        # Backend  
        "Node.js", "Python", "Java", "Go", "Rust", "C#", ".NET", "PHP", "Ruby",
        "Django", "Flask", "Express.js", "Spring Boot", "FastAPI", "Rails",
        
        # Databases
        "PostgreSQL", "MySQL", "MongoDB", "Redis", "Elasticsearch", "Cassandra",
        "DynamoDB", "Firebase", "Supabase", "Neo4j",
        
        # Cloud & DevOps
        "AWS", "GCP", "Azure", "Docker", "Kubernetes", "Terraform", "Jenkins",
        "GitLab CI", "GitHub Actions", "Prometheus", "Grafana", "ELK Stack",
        
        # Mobile
        "React Native", "Flutter", "Swift", "Kotlin", "Xamarin",
        
        # Data & ML
        "TensorFlow", "PyTorch", "Pandas", "NumPy", "Scikit-learn", "Apache Spark",
        "Kafka", "Airflow", "Jupyter", "R",
        
        # Other
        "GraphQL", "REST APIs", "Microservices", "System Design", "Agile", "Scrum",
        "Git", "Linux", "Testing", "CI/CD", "Security"
    ]
    
    jobs = []
    
    for i in range(75):  # Generate 75 diverse tech jobs
        company = random.choice(tech_companies)
        title = random.choice(tech_job_titles)
        
        # Generate salary range based on level and role
        level = random.choice(experience_levels)
        
        if "Principal" in level or "Staff" in level:
            min_salary = random.randint(200, 280)
            max_salary = min_salary + random.randint(80, 150)
        elif "Senior" in level or "Lead" in title or "Manager" in title:
            min_salary = random.randint(150, 220)
            max_salary = min_salary + random.randint(50, 100)
        elif "Mid" in level:
            min_salary = random.randint(100, 160)
            max_salary = min_salary + random.randint(40, 80)
        else:  # Entry level
            min_salary = random.randint(70, 130)
            max_salary = min_salary + random.randint(20, 60)
        
        salary = f"${min_salary},000 - ${max_salary},000"
        
        # Generate relevant tech stack requirements
        num_reqs = random.randint(4, 10)
        
        # Ensure we have relevant tech stack for different roles
        role_specific_reqs = []
        if "Frontend" in title or "React" in title or "Vue" in title or "Angular" in title:
            role_specific_reqs = random.sample([r for r in tech_requirements if r in ["React", "Vue.js", "Angular", "TypeScript", "JavaScript", "HTML/CSS"]], min(3, len([r for r in tech_requirements if r in ["React", "Vue.js", "Angular", "TypeScript", "JavaScript", "HTML/CSS"]])))
        elif "Backend" in title or "API" in title:
            role_specific_reqs = random.sample([r for r in tech_requirements if r in ["Node.js", "Python", "Java", "Go", "Django", "Flask", "Express.js"]], min(3, len([r for r in tech_requirements if r in ["Node.js", "Python", "Java", "Go", "Django", "Flask", "Express.js"]])))
        elif "Full Stack" in title:
            role_specific_reqs = random.sample([r for r in tech_requirements if r in ["React", "Node.js", "Python", "TypeScript", "PostgreSQL", "AWS"]], min(4, len([r for r in tech_requirements if r in ["React", "Node.js", "Python", "TypeScript", "PostgreSQL", "AWS"]])))
        elif "Mobile" in title or "iOS" in title or "Android" in title:
            role_specific_reqs = random.sample([r for r in tech_requirements if r in ["React Native", "Flutter", "Swift", "Kotlin"]], min(2, len([r for r in tech_requirements if r in ["React Native", "Flutter", "Swift", "Kotlin"]])))
        elif "Data" in title or "ML" in title:
            role_specific_reqs = random.sample([r for r in tech_requirements if r in ["Python", "TensorFlow", "PyTorch", "Pandas", "NumPy"]], min(3, len([r for r in tech_requirements if r in ["Python", "TensorFlow", "PyTorch", "Pandas", "NumPy"]])))
        elif "DevOps" in title or "Cloud" in title:
            role_specific_reqs = random.sample([r for r in tech_requirements if r in ["AWS", "GCP", "Docker", "Kubernetes", "Terraform"]], min(3, len([r for r in tech_requirements if r in ["AWS", "GCP", "Docker", "Kubernetes", "Terraform"]])))
        
        # Fill remaining requirements
        remaining_reqs = num_reqs - len(role_specific_reqs)
        if remaining_reqs > 0:
            available_reqs = [r for r in tech_requirements if r not in role_specific_reqs]
            additional_reqs = random.sample(available_reqs, min(remaining_reqs, len(available_reqs)))
            role_specific_reqs.extend(additional_reqs)
        
        requirements = role_specific_reqs[:num_reqs]
        
        # Generate tech-focused job descriptions
        tech_descriptions = [
            f"Join {company['name']} to build cutting-edge software solutions that scale to millions of users worldwide.",
            f"We're looking for a passionate {title.lower()} to join our world-class engineering team at {company['name']}.",
            f"Help us revolutionize technology at {company['name']} with modern development practices and innovative solutions.", 
            f"Be part of {company['name']}'s mission to transform the industry through exceptional software engineering.",
            f"Work with leading-edge technologies and collaborate with top-tier engineers at {company['name']}.",
            f"Build the future of tech at {company['name']} - where innovation meets engineering excellence.",
            f"Join our engineering team at {company['name']} to create products that impact developers worldwide.",
            f"Help shape the next generation of technology solutions at {company['name']} with clean, scalable code."
        ]
        
        # Random posting time (within last 30 days, with more recent jobs weighted higher)
        days_ago = random.choices(
            range(0, 30), 
            weights=[10, 8, 6, 5, 4, 3, 3, 2, 2, 2] + [1] * 20,
            k=1
        )[0]
        posted_at = datetime.utcnow() - timedelta(days=days_ago, hours=random.randint(0, 23))
        
        job = Job(
            title=title,
            company=company["name"],
            location=random.choice(tech_locations),
            type=random.choice(job_types),
            salary=salary,
            level=level,
            sponsorship=random.choice(visa_sponsorships),
            description=random.choice(tech_descriptions),
            requirements=requirements,
            logo=company["logo"],
            posted_at=posted_at,
            is_active=True
        )
        
        jobs.append(job.dict())
    
    return jobs