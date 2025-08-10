import React from "react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ArrowRight, Sparkles, TrendingUp, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();

  const handleTryForFree = () => {
    navigate("/auth");
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-emerald-200 to-teal-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-cyan-200 to-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse" style={{animationDelay: "2s"}}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        {/* Announcement Banner */}
        <div className="flex justify-center mb-8">
          <Badge className="bg-emerald-100 text-emerald-700 hover:bg-emerald-200 px-6 py-2 rounded-full border border-emerald-200 transition-all duration-300 hover:scale-105">
            <span className="flex items-center space-x-2">
              <Sparkles className="w-4 h-4" />
              <span>New</span>
              <span>Introducing</span>
              <span className="font-semibold">Jobright Agent</span>
              <span>: the first AI that hunts jobs for you.</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </span>
          </Badge>
        </div>

        {/* Awards */}
        <div className="flex justify-center space-x-8 mb-12">
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center mb-2">
              <TrendingUp className="w-8 h-8 text-emerald-600" />
            </div>
            <Badge className="bg-white text-gray-700 px-3 py-1 text-xs">
              Product of the month
            </Badge>
            <Badge className="bg-gray-900 text-white px-3 py-1 text-xs mt-1">
              PRODUCT HUNT 1st
            </Badge>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center mb-2">
              <Users className="w-8 h-8 text-blue-600" />
            </div>
            <Badge className="bg-white text-gray-700 px-3 py-1 text-xs">
              Featured by
            </Badge>
            <Badge className="bg-blue-600 text-white px-3 py-1 text-xs mt-1">
              OpenAI TOP PICK
            </Badge>
          </div>
        </div>

        {/* Main Hero Content */}
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8 leading-tight">
            No More Solo Job Hunting
            <br />
            <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              DO IT WITH AI COPILOT
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
            Our AI makes landing job interviews dramatically easier and faster! - get matched jobs, tailored
            resume, and recommended insider connections in less than 1 min!
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Button
              onClick={handleTryForFree}
              className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              Try Jobright for Free
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            
            <div className="flex items-center space-x-2 text-gray-600">
              <div className="flex -space-x-2">
                <img className="w-8 h-8 rounded-full border-2 border-white" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50&h=50&fit=crop&crop=face" alt="User 1" />
                <img className="w-8 h-8 rounded-full border-2 border-white" src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=50&h=50&fit=crop&crop=face" alt="User 2" />
                <img className="w-8 h-8 rounded-full border-2 border-white" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop&crop=face" alt="User 3" />
              </div>
              <span className="text-sm">Join 520,000+ happy users</span>
            </div>
          </div>
        </div>

        {/* Demo Job Cards Preview */}
        <div className="mt-20">
          <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-4xl mx-auto border border-gray-100">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-emerald-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">J</span>
                </div>
                <span className="font-semibold text-gray-700">JOBS</span>
              </div>
              <div className="flex space-x-2">
                <Badge className="bg-black text-white">Recommended 3</Badge>
                <Badge variant="outline">Liked 13</Badge>
                <Badge variant="outline">Applied 24</Badge>
              </div>
            </div>
            
            <div className="grid gap-4">
              <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer">
                <div className="flex items-center space-x-4">
                  <img src="https://logo.clearbit.com/google.com" alt="Google" className="w-12 h-12 rounded-lg" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Software Engineer</h3>
                    <p className="text-gray-600">San Francisco, CA • Senior Level • Full Time • H1B sponsorship</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Badge className="bg-emerald-100 text-emerald-700">Recommended</Badge>
                  <div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;