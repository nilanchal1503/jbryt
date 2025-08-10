import React from "react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { 
  Twitter, 
  Linkedin, 
  Github, 
  Mail,
  MapPin,
  Phone,
  Sparkles
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-emerald-500 rounded-lg flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold">Jobright</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              The first AI-powered job search platform that hunts jobs for you. Transform your career with intelligent job matching and personalized guidance.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="sm" className="text-gray-300 hover:text-white hover:bg-gray-800">
                <Twitter className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-300 hover:text-white hover:bg-gray-800">
                <Linkedin className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-300 hover:text-white hover:bg-gray-800">
                <Github className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-300 hover:text-white hover:bg-gray-800">
                <Mail className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Product</h3>
            <ul className="space-y-3">
              <li><Link to="/jobs" className="text-gray-300 hover:text-white transition-colors">Job Search</Link></li>
              <li><Link to="/ai-agent" className="text-gray-300 hover:text-white transition-colors">AI Agent</Link></li>
              <li><Link to="/resume-ai" className="text-gray-300 hover:text-white transition-colors">Resume AI</Link></li>
              <li><Link to="/interview-prep" className="text-gray-300 hover:text-white transition-colors">Interview Prep</Link></li>
              <li><Link to="/career-insights" className="text-gray-300 hover:text-white transition-colors">Career Insights</Link></li>
              <li><Link to="/networking" className="text-gray-300 hover:text-white transition-colors">Networking</Link></li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Company</h3>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/careers" className="text-gray-300 hover:text-white transition-colors">Careers</Link></li>
              <li><Link to="/blog" className="text-gray-300 hover:text-white transition-colors">Blog</Link></li>
              <li><Link to="/press" className="text-gray-300 hover:text-white transition-colors">Press</Link></li>
              <li><Link to="/investors" className="text-gray-300 hover:text-white transition-colors">Investors</Link></li>
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Support</h3>
            <ul className="space-y-3">
              <li><Link to="/help" className="text-gray-300 hover:text-white transition-colors">Help Center</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact Us</Link></li>
              <li><Link to="/privacy" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-gray-300 hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link to="/cookies" className="text-gray-300 hover:text-white transition-colors">Cookie Policy</Link></li>
            </ul>
            
            <div className="mt-8">
              <h4 className="font-semibold mb-3 text-emerald-400">Contact Info</h4>
              <div className="space-y-2 text-sm text-gray-300">
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4" />
                  <span>San Francisco, CA</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4" />
                  <span>support@jobright.ai</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span>+1 (555) 123-4567</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} Jobright. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              <Badge className="bg-emerald-500 text-white">
                🏆 Product Hunt #1
              </Badge>
              <Badge className="bg-blue-600 text-white">
                🚀 OpenAI Top Pick
              </Badge>
              <span className="text-gray-400 text-sm">
                Trusted by 520,000+ professionals
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;