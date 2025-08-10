import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ChevronDown, Menu, X } from "lucide-react";
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
    <nav className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">J</span>
            </div>
            <span className="text-xl font-bold text-gray-900">Jobright</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center space-x-1 text-gray-700 hover:text-emerald-600 transition-colors">
                <span>Features</span>
                <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>
                  <Link to="/jobs" className="w-full">Job Search</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>Resume Optimizer</DropdownMenuItem>
                <DropdownMenuItem>Interview Prep</DropdownMenuItem>
                <DropdownMenuItem>Career Insights</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link to="/ai-agent" className="text-gray-700 hover:text-emerald-600 transition-colors">
              AI Agent
            </Link>
            <Link to="/resume-ai" className="text-gray-700 hover:text-emerald-600 transition-colors">
              Resume AI
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-emerald-600 transition-colors">
              About Us
            </Link>
            <Link to="/blog" className="text-gray-700 hover:text-emerald-600 transition-colors">
              Blog
            </Link>
          </div>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button 
              variant="ghost" 
              onClick={handleSignIn}
              className="text-gray-700 hover:text-emerald-600"
            >
              SIGN IN
            </Button>
            <Button 
              onClick={handleJoinNow}
              className="bg-black text-white hover:bg-gray-800 rounded-lg px-6"
            >
              JOIN NOW
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col space-y-4">
              <Link to="/jobs" className="text-gray-700 hover:text-emerald-600 transition-colors">
                Features
              </Link>
              <Link to="/ai-agent" className="text-gray-700 hover:text-emerald-600 transition-colors">
                AI Agent
              </Link>
              <Link to="/resume-ai" className="text-gray-700 hover:text-emerald-600 transition-colors">
                Resume AI
              </Link>
              <Link to="/about" className="text-gray-700 hover:text-emerald-600 transition-colors">
                About Us
              </Link>
              <Link to="/blog" className="text-gray-700 hover:text-emerald-600 transition-colors">
                Blog
              </Link>
              <div className="flex flex-col space-y-2 pt-4 border-t border-gray-100">
                <Button variant="ghost" onClick={handleSignIn}>
                  SIGN IN
                </Button>
                <Button onClick={handleJoinNow} className="bg-black text-white hover:bg-gray-800">
                  JOIN NOW
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