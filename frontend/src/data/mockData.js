export const mockJobs = [
  {
    id: 1,
    title: "Senior Software Engineer",
    company: "Google",
    location: "San Francisco, CA",
    type: "Full Time",
    salary: "$180,000 - $250,000",
    posted: "2 hours ago",
    level: "Senior Level",
    sponsorship: "H1B sponsorship",
    recommended: true,
    description: "Join our team to build next-generation software solutions that impact billions of users worldwide.",
    requirements: ["5+ years experience", "React/TypeScript", "Python", "System Design"],
    logo: "https://logo.clearbit.com/google.com"
  },
  {
    id: 2,
    title: "Data Scientist",
    company: "Microsoft",
    location: "Seattle, WA",
    type: "Full Time",
    salary: "$160,000 - $220,000",
    posted: "4 hours ago",
    level: "Senior Level",
    sponsorship: "H1B sponsorship",
    recommended: true,
    description: "Drive insights from data to shape product decisions and user experiences.",
    requirements: ["PhD in Data Science", "Python/R", "Machine Learning", "SQL"],
    logo: "https://logo.clearbit.com/microsoft.com"
  },
  {
    id: 3,
    title: "Product Manager",
    company: "Meta",
    location: "Menlo Park, CA",
    type: "Full Time",
    salary: "$170,000 - $240,000",
    posted: "6 hours ago",
    level: "Senior Level",
    sponsorship: "H1B sponsorship",
    recommended: false,
    description: "Lead product strategy and execution for cutting-edge social platforms.",
    requirements: ["MBA preferred", "5+ years PM experience", "Analytics", "Leadership"],
    logo: "https://logo.clearbit.com/meta.com"
  },
  {
    id: 4,
    title: "Frontend Developer",
    company: "Airbnb",
    location: "San Francisco, CA",
    type: "Full Time",
    salary: "$140,000 - $180,000",
    posted: "8 hours ago",
    level: "Mid Level",
    sponsorship: "No sponsorship",
    recommended: true,
    description: "Create beautiful and intuitive user experiences for millions of travelers.",
    requirements: ["3+ years React", "TypeScript", "CSS/SCSS", "Testing"],
    logo: "https://logo.clearbit.com/airbnb.com"
  },
  {
    id: 5,
    title: "DevOps Engineer",
    company: "Netflix",
    location: "Los Gatos, CA",
    type: "Full Time",
    salary: "$150,000 - $200,000",
    posted: "12 hours ago",
    level: "Senior Level",
    sponsorship: "H1B sponsorship",
    recommended: false,
    description: "Scale infrastructure to support global streaming for 200M+ subscribers.",
    requirements: ["Kubernetes", "AWS/GCP", "Docker", "Terraform"],
    logo: "https://logo.clearbit.com/netflix.com"
  }
];

export const mockUser = {
  id: 1,
  name: "Alex Johnson",
  email: "alex.johnson@email.com",
  title: "Senior Software Engineer",
  location: "San Francisco, CA",
  avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
  appliedJobs: 12,
  interviewsScheduled: 3,
  profileViews: 45,
  savedJobs: 8
};

export const mockTestimonials = [
  {
    id: 1,
    name: "Fred H.",
    role: "Senior Software Engineer",
    company: "Tech Corp",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    quote: "I am able to find more relevant jobs faster, since using JobRight I have tripled my interview rate. I am truly impressed.",
    rating: 5
  },
  {
    id: 2,
    name: "Sarah M.",
    role: "Product Manager",
    company: "Startup Inc",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
    quote: "Thanks to this platform I've landed a few interviews and accepted an offer within 1 week of interviewing!",
    rating: 5
  },
  {
    id: 3,
    name: "David L.",
    role: "Data Scientist",
    company: "AI Solutions",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
    quote: "The AI recommendations are spot-on. Found my dream job in just 2 weeks!",
    rating: 5
  }
];

export const mockStats = {
  newJobs: "400,000+",
  totalJobs: "8,000,000+",
  happyUsers: "520,000+",
  companies: "10,000+"
};

export const mockChatMessages = [
  {
    id: 1,
    type: "bot",
    message: "Hi! I'm Orion, your AI career assistant. How can I help you with your job search today?",
    timestamp: new Date()
  }
];

export const mockCareerAdvice = [
  "Tailor your resume for each job application",
  "Research the company culture before interviews",
  "Use LinkedIn to find insider connections",
  "Practice common interview questions",
  "Follow up within 24 hours after interviews"
];