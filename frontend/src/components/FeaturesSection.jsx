import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { 
  Brain, 
  FileText, 
  MessageSquare, 
  Target, 
  Users, 
  Clock,
  Zap,
  Shield,
  TrendingUp
} from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: <Brain className="w-8 h-8 text-purple-600" />,
      title: "AI-Powered Job Matching",
      description: "Our advanced AI analyzes your skills, experience, and preferences to find the perfect job matches in real-time.",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200"
    },
    {
      icon: <FileText className="w-8 h-8 text-blue-600" />,
      title: "Resume Optimization",
      description: "Get ATS-friendly resumes tailored for each application with AI-powered suggestions and industry insights.",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200"
    },
    {
      icon: <MessageSquare className="w-8 h-8 text-emerald-600" />,
      title: "Interview Preparation",
      description: "Practice with AI-powered mock interviews and get personalized feedback to ace your next interview.",
      bgColor: "bg-emerald-50",
      borderColor: "border-emerald-200"
    },
    {
      icon: <Target className="w-8 h-8 text-red-600" />,
      title: "Company Insights",
      description: "Get detailed company information, culture insights, and insider tips to make informed decisions.",
      bgColor: "bg-red-50",
      borderColor: "border-red-200"
    },
    {
      icon: <Users className="w-8 h-8 text-indigo-600" />,
      title: "Networking Assistant",
      description: "Find and connect with relevant professionals in your target companies through intelligent networking.",
      bgColor: "bg-indigo-50",
      borderColor: "border-indigo-200"
    },
    {
      icon: <Clock className="w-8 h-8 text-orange-600" />,
      title: "24/7 Career Support",
      description: "Get instant career advice and job search guidance from Orion AI whenever you need it.",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200"
    }
  ];

  const benefits = [
    {
      icon: <Zap className="w-6 h-6 text-yellow-500" />,
      title: "10x Faster Applications",
      description: "Apply to more jobs in less time with automated application tracking and management."
    },
    {
      icon: <Shield className="w-6 h-6 text-green-500" />,
      title: "Privacy Protected",
      description: "Your data is secure and only shared with companies you choose to apply to."
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-blue-500" />,
      title: "Higher Success Rate",
      description: "Users report 3x more interviews and 5x better job match relevance."
    }
  ];

  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Features */}
        <div className="text-center mb-16">
          <Badge className="bg-emerald-100 text-emerald-700 mb-4">
            Powered by Advanced AI
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Everything You Need to Land Your Dream Job
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From intelligent job matching to interview preparation, our AI copilot guides you through every step of your career journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <Card key={index} className={`${feature.bgColor} ${feature.borderColor} border-2 hover:shadow-xl transition-all duration-300 hover:scale-105 transform`}>
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                  {feature.icon}
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Benefits Grid */}
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-12 text-white">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Why Choose Jobright?</h3>
            <p className="text-gray-300 text-lg">
              Join the revolution in job searching with AI-powered career assistance
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-white bg-opacity-10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  {benefit.icon}
                </div>
                <h4 className="text-xl font-semibold mb-3">{benefit.title}</h4>
                <p className="text-gray-300 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
              Start Your AI-Powered Job Search
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;