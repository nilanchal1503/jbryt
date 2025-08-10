import React from "react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ArrowRight, Sparkles, TrendingUp, Users, Code2, Zap, Rocket, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();

  const handleTryForFree = () => {
    navigate("/auth");
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-50 via-violet-50/30 to-purple-50/30 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-violet-300 to-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse float-animation"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-pink-300 to-violet-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{animationDelay: "2s"}}></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full mix-blend-multiply filter blur-2xl opacity-10 animate-pulse" style={{animationDelay: "4s"}}></div>
      </div>

      {/* Tech stack floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-12 h-12 bg-violet-100 rounded-lg flex items-center justify-center shadow-lg float-animation opacity-60">
          <Code2 className="w-6 h-6 text-violet-600" />
        </div>
        <div className="absolute top-40 right-20 w-10 h-10 bg-pink-100 rounded-lg flex items-center justify-center shadow-lg float-animation opacity-60" style={{animationDelay: "1s"}}>
          <Zap className="w-5 h-5 text-pink-600" />
        </div>
        <div className="absolute bottom-40 left-1/4 w-14 h-14 bg-purple-100 rounded-lg flex items-center justify-center shadow-lg float-animation opacity-60" style={{animationDelay: "2s"}}>
          <Rocket className="w-7 h-7 text-purple-600" />
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        {/* Announcement Banner */}
        <div className="flex justify-center mb-8">
          <Badge className="glass border-violet-200 text-violet-700 hover:bg-violet-50 px-6 py-3 rounded-full transition-all duration-300 hover:scale-105 cursor-pointer">
            <span className="flex items-center space-x-2 font-medium">
              <div className="w-2 h-2 bg-violet-500 rounded-full animate-pulse"></div>
              <Sparkles className="w-4 h-4" />
              <span>New:</span>
              <span className="font-semibold gradient-text-purple">Stack-Finds AI Copilot</span>
              <span>- Find tech jobs 10x faster</span>
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </span>
          </Badge>
        </div>

        {/* Awards & Recognition */}
        <div className="flex justify-center space-x-8 mb-12">
          <div className="flex flex-col items-center group">
            <div className="w-16 h-16 glass rounded-2xl shadow-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300 border border-violet-200">
              <TrendingUp className="w-8 h-8 text-violet-600" />
            </div>
            <Badge className="bg-white text-slate-700 px-3 py-1 text-xs font-medium shadow-sm">
              Featured Product
            </Badge>
            <Badge className="bg-gradient-to-r from-violet-500 to-purple-600 text-white px-3 py-1 text-xs mt-1 font-medium">
              PRODUCT HUNT #1
            </Badge>
          </div>
          <div className="flex flex-col items-center group">
            <div className="w-16 h-16 glass rounded-2xl shadow-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300 border border-pink-200">
              <Star className="w-8 h-8 text-pink-600" />
            </div>
            <Badge className="bg-white text-slate-700 px-3 py-1 text-xs font-medium shadow-sm">
              Top Rated
            </Badge>
            <Badge className="bg-gradient-to-r from-pink-500 to-violet-600 text-white px-3 py-1 text-xs mt-1 font-medium">
              TECH CRUNCH PICK
            </Badge>
          </div>
        </div>

        {/* Main Hero Content */}
        <div className="text-center">
          <div className="flex justify-center mb-6">
            <Badge className="bg-gradient-to-r from-violet-100 to-purple-100 text-violet-700 px-4 py-2 rounded-full font-medium text-sm border border-violet-200">
              🚀 For Developers, By Developers
            </Badge>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold text-slate-900 mb-8 leading-tight brand-font">
            Find Your Perfect
            <br />
            <span className="gradient-text animated-gradient bg-clip-text">
              Tech Stack Match
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-600 mb-12 max-w-4xl mx-auto leading-relaxed">
            Our AI analyzes millions of tech jobs to find positions that match your exact skills, 
            preferred technologies, and career goals. Land your dream developer job 10x faster!
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center space-y-6 sm:space-y-0 sm:space-x-6 mb-12">
            <Button
              onClick={handleTryForFree}
              className="btn-gradient text-white px-10 py-5 rounded-2xl text-lg font-semibold shadow-2xl hover:shadow-violet-500/25 transition-all duration-300 hover:scale-105 pulse-glow"
            >
              <span className="relative z-10 flex items-center space-x-2">
                <Rocket className="w-5 h-5" />
                <span>Start Finding Jobs</span>
                <ArrowRight className="w-5 h-5" />
              </span>
            </Button>
            
            <div className="flex items-center space-x-4 text-slate-600">
              <div className="flex -space-x-3">
                <img className="w-10 h-10 rounded-full border-3 border-white shadow-lg" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50&h=50&fit=crop&crop=face" alt="Dev 1" />
                <img className="w-10 h-10 rounded-full border-3 border-white shadow-lg" src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=50&h=50&fit=crop&crop=face" alt="Dev 2" />
                <img className="w-10 h-10 rounded-full border-3 border-white shadow-lg" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop&crop=face" alt="Dev 3" />
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-violet-500 to-purple-600 border-3 border-white shadow-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">2K+</span>
                </div>
              </div>
              <div className="text-left">
                <p className="font-semibold text-slate-700">Join 25,000+ developers</p>
                <p className="text-sm text-slate-500">who found their dream tech jobs</p>
              </div>
            </div>
          </div>

          {/* Trust indicators */}
          <div className="flex justify-center space-x-8 mb-16 opacity-60">
            <div className="text-center">
              <p className="text-2xl font-bold text-violet-600">95%</p>
              <p className="text-sm text-slate-500">Match Accuracy</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-pink-600">10x</p>
              <p className="text-sm text-slate-500">Faster Applications</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-purple-600">500+</p>
              <p className="text-sm text-slate-500">Tech Companies</p>
            </div>
          </div>
        </div>

        {/* Demo Preview Card */}
        <div className="mt-20">
          <div className="glass rounded-3xl shadow-2xl p-8 max-w-5xl mx-auto border border-violet-200/50 card-hover">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-violet-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <Code2 className="text-white font-bold w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-800 text-lg brand-font">TECH JOBS</h3>
                  <p className="text-violet-600 text-sm font-medium">AI-Powered Matching</p>
                </div>
              </div>
              <div className="flex space-x-3">
                <Badge className="bg-gradient-to-r from-violet-500 to-purple-600 text-white px-3 py-1.5 font-medium">
                  <Sparkles className="w-3 h-3 mr-1" />
                  Recommended 12
                </Badge>
                <Badge variant="outline" className="border-violet-300 text-violet-600 px-3 py-1.5">
                  Saved 5
                </Badge>
                <Badge variant="outline" className="border-pink-300 text-pink-600 px-3 py-1.5">
                  Applied 8
                </Badge>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between p-6 border border-violet-100 rounded-2xl hover:bg-violet-50/50 transition-all cursor-pointer group">
                <div className="flex items-center space-x-5">
                  <div className="w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center border border-violet-100">
                    <img src="https://logo.clearbit.com/google.com" alt="Google" className="w-10 h-10 rounded-lg" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-lg group-hover:text-violet-600 transition-colors">
                      Senior Full Stack Engineer
                    </h4>
                    <div className="flex items-center space-x-4 text-slate-600 mt-1">
                      <span className="flex items-center space-x-1">
                        <span>Google</span>
                      </span>
                      <span>•</span>
                      <span>San Francisco, CA</span>
                      <span>•</span>
                      <span>$180k-$250k</span>
                    </div>
                    <div className="flex space-x-2 mt-3">
                      <Badge className="bg-violet-100 text-violet-700 text-xs">React</Badge>
                      <Badge className="bg-blue-100 text-blue-700 text-xs">Node.js</Badge>
                      <Badge className="bg-green-100 text-green-700 text-xs">Python</Badge>
                      <Badge className="bg-orange-100 text-orange-700 text-xs">AWS</Badge>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Badge className="bg-gradient-to-r from-emerald-100 to-green-100 text-emerald-700 px-3 py-2 font-medium">
                    <Sparkles className="w-3 h-3 mr-1" />
                    98% Match
                  </Badge>
                  <div className="w-12 h-12 bg-gradient-to-br from-violet-500 to-purple-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <ArrowRight className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>
              
              <div className="flex items-center justify-between p-6 border border-violet-100 rounded-2xl hover:bg-violet-50/50 transition-all cursor-pointer group opacity-75">
                <div className="flex items-center space-x-5">
                  <div className="w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center border border-violet-100">
                    <img src="https://logo.clearbit.com/stripe.com" alt="Stripe" className="w-10 h-10 rounded-lg" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-lg group-hover:text-violet-600 transition-colors">
                      Frontend Engineer
                    </h4>
                    <div className="flex items-center space-x-4 text-slate-600 mt-1">
                      <span>Stripe</span>
                      <span>•</span>
                      <span>Remote</span>
                      <span>•</span>
                      <span>$160k-$220k</span>
                    </div>
                    <div className="flex space-x-2 mt-3">
                      <Badge className="bg-violet-100 text-violet-700 text-xs">React</Badge>
                      <Badge className="bg-yellow-100 text-yellow-700 text-xs">TypeScript</Badge>
                      <Badge className="bg-pink-100 text-pink-700 text-xs">GraphQL</Badge>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Badge className="bg-gradient-to-r from-emerald-100 to-green-100 text-emerald-700 px-3 py-2 font-medium">
                    <Sparkles className="w-3 h-3 mr-1" />
                    92% Match
                  </Badge>
                  <div className="w-12 h-12 bg-gradient-to-br from-violet-500 to-purple-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <ArrowRight className="w-5 h-5 text-white" />
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