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
  TrendingUp,
  Code2,
  Rocket,
  Search,
  Bot,
  Sparkles
} from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: <Brain className="w-8 h-8 text-violet-600" />,
      title: "AI-Powered Tech Matching",
      description: "Our advanced AI analyzes your tech stack, coding skills, and preferences to find perfect developer job matches in real-time.",
      bgColor: "bg-gradient-to-br from-violet-50 to-purple-50",
      borderColor: "border-violet-200"
    },
    {
      icon: <Code2 className="w-8 h-8 text-blue-600" />,
      title: "Stack-Specific Resume",
      description: "Generate ATS-friendly resumes optimized for your tech stack with AI-powered suggestions and industry best practices.",
      bgColor: "bg-gradient-to-br from-blue-50 to-violet-50",
      borderColor: "border-blue-200"
    },
    {
      icon: <Bot className="w-8 h-8 text-emerald-600" />,
      title: "AI Interview Coach",
      description: "Practice coding interviews and system design with our AI coach. Get personalized feedback for top tech companies.",
      bgColor: "bg-gradient-to-br from-emerald-50 to-teal-50",
      borderColor: "border-emerald-200"
    },
    {
      icon: <Search className="w-8 h-8 text-pink-600" />,
      title: "Company Deep Dive",
      description: "Get insider insights into tech culture, stack details, salary ranges, and engineering practices at target companies.",
      bgColor: "bg-gradient-to-br from-pink-50 to-rose-50",
      borderColor: "border-pink-200"
    },
    {
      icon: <Users className="w-8 h-8 text-indigo-600" />,
      title: "Developer Network",
      description: "Connect with senior engineers and tech leads at your target companies through intelligent networking recommendations.",
      bgColor: "bg-gradient-to-br from-indigo-50 to-blue-50",
      borderColor: "border-indigo-200"
    },
    {
      icon: <Rocket className="w-8 h-8 text-orange-600" />,
      title: "24/7 Career Copilot",
      description: "Get instant tech career guidance, salary insights, and job search strategies from our specialized AI assistant.",
      bgColor: "bg-gradient-to-br from-orange-50 to-yellow-50",
      borderColor: "border-orange-200"
    }
  ];

  const benefits = [
    {
      icon: <Zap className="w-6 h-6 text-yellow-500" />,
      title: "10x Faster Job Discovery",
      description: "Find relevant tech positions instantly with AI-powered filtering and smart recommendations."
    },
    {
      icon: <Shield className="w-6 h-6 text-green-500" />,
      title: "Privacy-First Approach",
      description: "Your coding projects and personal data are secure. Share only what you choose with employers."
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-violet-500" />,
      title: "Higher Success Rate",
      description: "Developers report 5x more interviews and 8x better job match relevance with our platform."
    }
  ];

  return (
    <div className="py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Features */}
        <div className="text-center mb-20">
          <Badge className="bg-gradient-to-r from-violet-100 to-purple-100 text-violet-700 mb-6 px-4 py-2 border border-violet-200">
            <Sparkles className="w-4 h-4 mr-2" />
            Powered by Advanced AI
          </Badge>
          <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-8 brand-font">
            Everything Developers Need to 
            <br />
            <span className="gradient-text">Land Dream Jobs</span>
          </h2>
          <p className="text-xl md:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            From intelligent tech job matching to coding interview preparation, 
            our AI copilot guides you through every step of your developer career journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {features.map((feature, index) => (
            <Card key={index} className={`${feature.bgColor} ${feature.borderColor} border-2 hover:shadow-2xl transition-all duration-500 hover:scale-105 transform card-hover group cursor-pointer`}>
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-white/80 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300 border border-white/50">
                  {feature.icon}
                </div>
                <CardTitle className="text-xl font-bold text-slate-900 group-hover:text-violet-600 transition-colors">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-700 leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-violet-900 to-purple-900 rounded-3xl"></div>
          <div className="absolute inset-0 opacity-20 rounded-3xl"></div>
          
          <div className="relative z-10 p-12 lg:p-16 text-white rounded-3xl">
            <div className="text-center mb-12">
              <Badge className="glass-dark border-violet-300/30 text-violet-200 mb-6 px-4 py-2">
                <Code2 className="w-4 h-4 mr-2" />
                Why Stack-Finds?
              </Badge>
              <h3 className="text-4xl md:text-5xl font-bold mb-6 brand-font">
                Built by Developers,
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-pink-400">
                  For Developers
                </span>
              </h3>
              <p className="text-violet-100 text-xl max-w-3xl mx-auto leading-relaxed">
                Join thousands of developers who've revolutionized their job search with AI-powered career assistance
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 glass-dark rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 border border-violet-400/20">
                    {benefit.icon}
                  </div>
                  <h4 className="text-2xl font-bold mb-4 text-violet-100">{benefit.title}</h4>
                  <p className="text-violet-200 leading-relaxed text-lg">{benefit.description}</p>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Button className="btn-gradient text-white px-10 py-5 rounded-2xl text-lg font-semibold shadow-2xl hover:shadow-violet-500/25 transition-all duration-300 hover:scale-105">
                <span className="relative z-10 flex items-center space-x-2">
                  <Rocket className="w-5 h-5" />
                  <span>Start Your Developer Journey</span>
                  <Sparkles className="w-5 h-5" />
                </span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;