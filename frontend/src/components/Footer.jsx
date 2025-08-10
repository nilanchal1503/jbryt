import React from "react";
import { Link } from "react-router-dom";
import { Badge } from "./ui/badge";
import { Code2, Zap, Github, Twitter, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "Platform",
      links: [
        { name: "Smart Job Search", href: "/jobs" },
        { name: "AI Copilot", href: "/ai-agent" },
        { name: "Stack Analyzer", href: "/stack-analyzer" },
        { name: "Resume Builder", href: "/resume-ai" },
        { name: "Interview Prep", href: "/interview-prep" }
      ]
    },
    {
      title: "For Developers",
      links: [
        { name: "Frontend Jobs", href: "/jobs?stack=frontend" },
        { name: "Backend Jobs", href: "/jobs?stack=backend" },
        { name: "Full Stack Jobs", href: "/jobs?stack=fullstack" },
        { name: "DevOps Jobs", href: "/jobs?stack=devops" },
        { name: "Mobile Jobs", href: "/jobs?stack=mobile" }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About Stack-Finds", href: "/about" },
        { name: "Tech Blog", href: "/blog" },
        { name: "Success Stories", href: "/success-stories" },
        { name: "Careers", href: "/careers" },
        { name: "Press Kit", href: "/press" }
      ]
    },
    {
      title: "Support",
      links: [
        { name: "Help Center", href: "/help" },
        { name: "Developer API", href: "/api-docs" },
        { name: "Community", href: "/community" },
        { name: "Contact Us", href: "/contact" },
        { name: "Status Page", href: "/status" }
      ]
    }
  ];

  const socialLinks = [
    { icon: <Github className="w-5 h-5" />, href: "#", label: "GitHub" },
    { icon: <Twitter className="w-5 h-5" />, href: "#", label: "Twitter" },
    { icon: <Linkedin className="w-5 h-5" />, href: "#", label: "LinkedIn" },
    { icon: <Mail className="w-5 h-5" />, href: "#", label: "Email" }
  ];

  return (
    <footer className="bg-gradient-to-b from-slate-900 via-violet-900 to-purple-900 text-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10 rounded-3xl"></div>
      
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
          {/* Top Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              {/* Logo and Brand */}
              <Link to="/" className="flex items-center space-x-4 mb-6 group">
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-br from-violet-400 via-purple-400 to-pink-400 rounded-2xl flex items-center justify-center shadow-xl group-hover:shadow-2xl transition-all duration-300 group-hover:scale-110">
                    <Code2 className="text-white font-bold text-lg w-6 h-6" />
                  </div>
                  <div className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                    <Zap className="w-3 h-3 text-white" />
                  </div>
                </div>
                <div className="flex flex-col">
                  <span className="text-3xl font-bold brand-font text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-pink-400">
                    Stack-Finds
                  </span>
                  <span className="text-violet-200 font-medium -mt-1">
                    AI-Powered Tech Jobs
                  </span>
                </div>
              </Link>

              <p className="text-violet-100 text-lg leading-relaxed mb-6 max-w-md">
                Revolutionizing how developers find their perfect tech roles with AI-powered matching, 
                personalized recommendations, and career guidance.
              </p>

              {/* Stats */}
              <div className="flex space-x-8 mb-8">
                <div>
                  <p className="text-2xl font-bold text-white">25K+</p>
                  <p className="text-violet-200 text-sm">Developers</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-white">500+</p>
                  <p className="text-violet-200 text-sm">Companies</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-white">98%</p>
                  <p className="text-violet-200 text-sm">Success Rate</p>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center hover:bg-white/20 transition-all duration-300 hover:scale-110 border border-white/10"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
              <Badge className="glass-dark border-violet-300/30 text-violet-200 mb-4 px-3 py-1.5">
                <Zap className="w-3 h-3 mr-1" />
                Developer Newsletter
              </Badge>
              <h3 className="text-2xl font-bold text-white mb-4 brand-font">
                Stay Ahead in Tech
              </h3>
              <p className="text-violet-100 mb-6 leading-relaxed">
                Get weekly insights on tech trends, salary data, and exclusive job opportunities 
                delivered to your inbox.
              </p>
              <div className="flex space-x-3">
                <input
                  type="email"
                  placeholder="your.email@developer.com"
                  className="flex-1 px-4 py-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl text-white placeholder-violet-200 focus:outline-none focus:border-violet-300"
                />
                <button className="bg-gradient-to-r from-violet-400 to-purple-400 text-white px-6 py-3 rounded-xl font-semibold hover:from-violet-500 hover:to-purple-500 transition-all duration-200 hover:scale-105 shadow-lg">
                  Subscribe
                </button>
              </div>
              <p className="text-violet-200 text-xs mt-3">
                Join 10,000+ developers. Unsubscribe anytime.
              </p>
            </div>
          </div>

          {/* Links Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            {footerSections.map((section, index) => (
              <div key={index}>
                <h4 className="text-white font-bold text-lg mb-6 brand-font">
                  {section.title}
                </h4>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link
                        to={link.href}
                        className="text-violet-200 hover:text-white transition-colors duration-200 hover:underline"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom Section */}
          <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-6 text-violet-200 text-sm">
              <Link to="/privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link to="/cookies" className="hover:text-white transition-colors">
                Cookie Policy
              </Link>
            </div>

            <div className="flex items-center space-x-2 text-violet-200">
              <span>© {currentYear} Stack-Finds. Made with</span>
              <Heart className="w-4 h-4 text-pink-400 fill-current" />
              <span>for developers.</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;