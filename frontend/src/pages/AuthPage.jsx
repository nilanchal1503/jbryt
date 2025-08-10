import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { 
  Code2, 
  Zap, 
  Eye, 
  EyeOff, 
  ArrowRight, 
  Sparkles, 
  Github, 
  Chrome,
  Mail,
  User,
  Lock,
  CheckCircle
} from "lucide-react";

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      navigate("/dashboard");
    }, 2000);
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const benefits = [
    "AI-powered job matching",
    "Personalized career insights", 
    "Real-time salary data",
    "Interview preparation tools",
    "Direct company connections"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-violet-50/30 to-purple-50/30 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-violet-300 to-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-pink-300 to-violet-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{animationDelay: "2s"}}></div>
      </div>

      <div className="relative z-10 flex">
        {/* Left Side - Branding */}
        <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-violet-600 via-purple-700 to-pink-600 text-white flex-col justify-center p-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%2523ffffff%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
          
          <div className="relative z-10">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-4 mb-12 group">
              <div className="relative">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-xl group-hover:shadow-2xl transition-all duration-300 group-hover:scale-110">
                  <Code2 className="text-white font-bold text-lg w-8 h-8" />
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                  <Zap className="w-3 h-3 text-white" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-4xl font-bold brand-font">Stack-Finds</span>
                <span className="text-violet-100 font-medium -mt-1">AI-Powered Tech Jobs</span>
              </div>
            </Link>

            <div className="mb-12">
              <h1 className="text-5xl font-bold mb-6 brand-font leading-tight">
                Your Dream
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-pink-300">
                  Developer Job
                </span>
                <br />
                Awaits
              </h1>
              <p className="text-xl text-violet-100 leading-relaxed mb-8 max-w-md">
                Join thousands of developers who've accelerated their careers with our AI-powered platform.
              </p>

              <div className="space-y-4 mb-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3 group">
                    <div className="w-6 h-6 bg-emerald-400 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-violet-100 font-medium">{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center space-x-6 opacity-80">
                <div className="text-center">
                  <p className="text-3xl font-bold">25K+</p>
                  <p className="text-violet-200 text-sm">Developers</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold">95%</p>
                  <p className="text-violet-200 text-sm">Success Rate</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold">500+</p>
                  <p className="text-violet-200 text-sm">Companies</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Auth Form */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
          <div className="w-full max-w-md">
            {/* Mobile Logo */}
            <div className="lg:hidden mb-8 text-center">
              <Link to="/" className="inline-flex items-center space-x-3 group">
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-br from-violet-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-xl">
                    <Code2 className="text-white font-bold w-6 h-6" />
                  </div>
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                    <Zap className="w-2.5 h-2.5 text-white" />
                  </div>
                </div>
                <span className="text-3xl font-bold brand-font gradient-text-purple">Stack-Finds</span>
              </Link>
            </div>

            <Card className="glass rounded-3xl shadow-2xl border border-violet-200/50">
              <CardHeader className="text-center pb-6">
                <div className="flex justify-center mb-4">
                  <Badge className="bg-gradient-to-r from-violet-100 to-purple-100 text-violet-700 px-4 py-2 border border-violet-200">
                    <Sparkles className="w-3 h-3 mr-1" />
                    Developer Platform
                  </Badge>
                </div>
                <CardTitle className="text-3xl font-bold text-slate-900 brand-font mb-2">
                  {isLogin ? "Welcome Back" : "Join Stack-Finds"}
                </CardTitle>
                <p className="text-slate-600 text-lg">
                  {isLogin 
                    ? "Continue your journey to find amazing tech opportunities" 
                    : "Start your journey with AI-powered job matching"
                  }
                </p>
              </CardHeader>

              <CardContent className="space-y-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {!isLogin && (
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                      <Input
                        name="name"
                        type="text"
                        placeholder="Full Name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="pl-12 h-14 rounded-xl border-violet-200 focus:border-violet-500 focus:ring-violet-500 bg-white/80 backdrop-blur-sm text-lg"
                        required={!isLogin}
                      />
                    </div>
                  )}

                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                    <Input
                      name="email"
                      type="email"
                      placeholder="your.email@developer.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="pl-12 h-14 rounded-xl border-violet-200 focus:border-violet-500 focus:ring-violet-500 bg-white/80 backdrop-blur-sm text-lg"
                      required
                    />
                  </div>

                  <div className="relative">
                    <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                    <Input
                      name="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Password"
                      value={formData.password}
                      onChange={handleInputChange}
                      className="pl-12 pr-12 h-14 rounded-xl border-violet-200 focus:border-violet-500 focus:ring-violet-500 bg-white/80 backdrop-blur-sm text-lg"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-slate-600"
                    >
                      {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>

                  {!isLogin && (
                    <div className="relative">
                      <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                      <Input
                        name="confirmPassword"
                        type={showPassword ? "text" : "password"}
                        placeholder="Confirm Password"
                        value={formData.confirmPassword}
                        onChange={handleInputChange}
                        className="pl-12 h-14 rounded-xl border-violet-200 focus:border-violet-500 focus:ring-violet-500 bg-white/80 backdrop-blur-sm text-lg"
                        required={!isLogin}
                      />
                    </div>
                  )}

                  {isLogin && (
                    <div className="flex justify-end">
                      <Link to="/forgot-password" className="text-violet-600 hover:text-violet-700 font-medium">
                        Forgot Password?
                      </Link>
                    </div>
                  )}

                  <Button
                    type="submit"
                    disabled={isLoading}
                    className="w-full h-14 bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700 text-white rounded-xl font-semibold text-lg shadow-lg hover:shadow-violet-500/25 transition-all duration-200 hover:scale-105"
                  >
                    {isLoading ? (
                      <div className="flex items-center space-x-2">
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        <span>Processing...</span>
                      </div>
                    ) : (
                      <div className="flex items-center justify-center space-x-2">
                        <span>{isLogin ? "Sign In" : "Create Account"}</span>
                        <ArrowRight className="w-5 h-5" />
                      </div>
                    )}
                  </Button>
                </form>

                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-slate-200"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-4 bg-white text-slate-500 font-medium">Or continue with</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <Button variant="outline" className="h-12 rounded-xl border-violet-200 hover:bg-violet-50 hover:border-violet-300">
                    <Github className="w-5 h-5 mr-2" />
                    GitHub
                  </Button>
                  <Button variant="outline" className="h-12 rounded-xl border-violet-200 hover:bg-violet-50 hover:border-violet-300">
                    <Chrome className="w-5 h-5 mr-2" />
                    Google
                  </Button>
                </div>

                <div className="text-center">
                  <p className="text-slate-600">
                    {isLogin ? "New to Stack-Finds?" : "Already have an account?"}
                    <button
                      onClick={() => setIsLogin(!isLogin)}
                      className="text-violet-600 hover:text-violet-700 font-semibold ml-2 underline"
                    >
                      {isLogin ? "Create Account" : "Sign In"}
                    </button>
                  </p>
                </div>

                {!isLogin && (
                  <p className="text-xs text-slate-500 text-center leading-relaxed">
                    By creating an account, you agree to our{" "}
                    <Link to="/terms" className="text-violet-600 hover:underline">Terms of Service</Link>{" "}
                    and{" "}
                    <Link to="/privacy" className="text-violet-600 hover:underline">Privacy Policy</Link>.
                  </p>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;