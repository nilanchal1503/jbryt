export const mockJobs = [
  {
    id: 1,
    title: "Senior Full Stack Engineer",
    company: "Google",
    location: "San Francisco, CA",
    type: "Full Time",
    salary: "$180,000 - $250,000",
    posted: "2 hours ago",
    level: "Senior Level",
    sponsorship: "H1B sponsorship",
    recommended: true,
    description: "Join our team to build next-generation software solutions that impact billions of users worldwide. Work with cutting-edge technologies and collaborate with world-class engineers.",
    requirements: ["React", "Node.js", "Python", "AWS", "System Design", "5+ years experience"],
    logo: "https://logo.clearbit.com/google.com"
  },
  {
    id: 2,
    title: "Senior Data Scientist",
    company: "Microsoft",
    location: "Seattle, WA",
    type: "Full Time",
    salary: "$160,000 - $220,000",
    posted: "4 hours ago",
    level: "Senior Level",
    sponsorship: "H1B sponsorship",
    recommended: true,
    description: "Drive insights from data to shape product decisions and user experiences. Work with machine learning models and big data technologies.",
    requirements: ["Python", "R", "Machine Learning", "SQL", "TensorFlow", "PhD preferred"],
    logo: "https://logo.clearbit.com/microsoft.com"
  },
  {
    id: 3,
    title: "Frontend React Developer",
    company: "Meta",
    location: "Menlo Park, CA",
    type: "Full Time",
    salary: "$170,000 - $240,000",
    posted: "6 hours ago",
    level: "Senior Level",
    sponsorship: "H1B sponsorship",
    recommended: false,
    description: "Build the next generation of social experiences. Work on products used by billions of people worldwide with modern React technologies.",
    requirements: ["React", "TypeScript", "GraphQL", "Next.js", "5+ years experience"],
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
    description: "Create beautiful and intuitive user experiences for millions of travelers. Work with React, TypeScript, and modern frontend technologies.",
    requirements: ["React", "TypeScript", "CSS/SCSS", "Testing", "3+ years experience"],
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
    description: "Scale infrastructure to support global streaming for 200M+ subscribers. Work with Kubernetes, AWS, and cutting-edge DevOps technologies.",
    requirements: ["Kubernetes", "AWS", "Docker", "Terraform", "Python", "4+ years experience"],
    logo: "https://logo.clearbit.com/netflix.com"
  }
];

export const mockUser = {
  id: 1,
  name: "Alex Johnson",
  email: "alex.johnson@email.com",
  title: "Senior Full Stack Engineer",
  location: "San Francisco, CA",
  avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
  appliedJobs: 18,
  interviewsScheduled: 5,
  profileViews: 67,
  savedJobs: 12
};

export const mockTestimonials = [
  {
    id: 1,
    name: "Sarah Chen",
    role: "Senior React Developer",
    company: "Stripe",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
    quote: "Stack-Finds' AI matching is incredible! I found my dream job at Stripe in just 2 weeks. The personalized recommendations were spot-on.",
    rating: 5
  },
  {
    id: 2,
    name: "Marcus Rodriguez",
    role: "Full Stack Engineer",
    company: "Shopify",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    quote: "The interview prep tools and AI copilot helped me land multiple offers. I went from 0 to 3 job offers in one month!",
    rating: 5
  },
  {
    id: 3,
    name: "Emily Park",
    role: "Data Scientist",
    company: "Uber",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
    quote: "As a data scientist, finding the right role was challenging. Stack-Finds understood my skills and matched me with perfect opportunities.",
    rating: 5
  }
];

export const mockStats = {
  newJobs: "15,000+",
  totalJobs: "450,000+",
  happyUsers: "25,000+",
  companies: "2,500+"
};

export const mockChatMessages = [
  {
    id: 1,
    type: "bot",
    message: "Hi! I'm Stack-Bot, your AI career copilot for developers. How can I help you find your perfect tech job today? 🚀",
    timestamp: new Date()
  }
];

export const mockCareerAdvice = [
  "Tailor your resume for each tech stack",
  "Research the company's engineering culture",
  "Practice system design questions",
  "Contribute to open source projects",
  "Network with engineers on LinkedIn"
];