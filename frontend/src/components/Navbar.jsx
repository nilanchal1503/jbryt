import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ChevronDown, Menu, X, Code2, Zap } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleSignIn = () => {
    navigate("/auth");
  };

  const handleJoinNow = () => {
    navigate("/auth");
  };

  return (
    <nav className="bg-white/80 backdrop-blur-xl border-b border-violet-100/50 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-18">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-violet-500 via-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                <Code2 className="text-white font-bold text-lg w-5 h-5" />
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                <Zap className="w-2.5 h-2.5 text-white" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold brand-font gradient-text-purple">
                Stack-Finds
              </span>
              <span className="text-xs text-violet-600 font-medium -mt-1">
                AI-Powered Tech Jobs
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center space-x-1 text-slate-700 hover:text-violet-600 transition-colors font-medium">
                <span>Features</span>
                <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="mt-2 glass rounded-xl border-violet-200">
                <DropdownMenuItem className="hover:bg-violet-50">
                  <Link to="/jobs" className="w-full flex items-center space-x-2">
                    <Code2 className="w-4 h-4 text-violet-500" />
                    <span>Smart Job Search</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-violet-50">
                  <div className="flex items-center space-x-2">
                    <Zap className="w-4 h-4 text-violet-500" />
                    <span>AI Resume Builder</span>
                  </div>
                </DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-violet-50">
                  <div className="flex items-center space-x-2">
                    <Code2 className="w-4 h-4 text-violet-500" />
                    <span>Tech Interview Prep</span>
                  </div>
                </DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-violet-50">
                  <div className="flex items-center space-x-2">
                    <Zap className="w-4 h-4 text-violet-500" />
                    <span>Stack Insights</span>
                  </div>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link to="/ai-agent" className="text-slate-700 hover:text-violet-600 transition-colors font-medium">
              AI Copilot
            </Link>
            <Link to="/stack-analyzer" className="text-slate-700 hover:text-violet-600 transition-colors font-medium">
              Stack Analyzer
            </Link>
            <Link to="/about" className="text-slate-700 hover:text-violet-600 transition-colors font-medium">
              About
            </Link>
            <Link to="/blog" className="text-slate-700 hover:text-violet-600 transition-colors font-medium">
              Tech Blog
            </Link>
          </div>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button 
              variant="ghost" 
              onClick={handleSignIn}
              className="text-slate-700 hover:text-violet-600 hover:bg-violet-50 font-medium"
            >
              SIGN IN
            </Button>
            <Button 
              onClick={handleJoinNow}
              className="btn-gradient text-white hover:shadow-lg rounded-xl px-6 py-2.5 font-medium transform hover:scale-105 transition-all duration-200"
            >
              <span className="relative z-10">JOIN NOW</span>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-violet-600"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-violet-100">
            <div className="flex flex-col space-y-4">
              <Link to="/jobs" className="text-slate-700 hover:text-violet-600 transition-colors font-medium">
                Smart Job Search
              </Link>
              <Link to="/ai-agent" className="text-slate-700 hover:text-violet-600 transition-colors font-medium">
                AI Copilot
              </Link>
              <Link to="/stack-analyzer" className="text-slate-700 hover:text-violet-600 transition-colors font-medium">
                Stack Analyzer
              </Link>
              <Link to="/about" className="text-slate-700 hover:text-violet-600 transition-colors font-medium">
                About
              </Link>
              <Link to="/blog" className="text-slate-700 hover:text-violet-600 transition-colors font-medium">
                Tech Blog
              </Link>
              <div className="flex flex-col space-y-3 pt-4 border-t border-violet-100">
                <Button variant="ghost" onClick={handleSignIn} className="justify-start">
                  SIGN IN
                </Button>
                <Button onClick={handleJoinNow} className="btn-gradient text-white justify-start">
                  <span className="relative z-10">JOIN NOW</span>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;