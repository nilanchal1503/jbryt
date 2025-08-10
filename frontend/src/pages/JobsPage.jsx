import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import OrionChatbot from "../components/OrionChatbot";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Badge } from "../components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import { 
  Search, 
  MapPin, 
  Clock, 
  Heart, 
  Bookmark,
  Filter,
  Sparkles,
  Building2,
  DollarSign,
  Code2,
  ArrowRight,
  Zap,
  TrendingUp
} from "lucide-react";
import { mockJobs } from "../data/mockData";

const JobsPage = () => {
  const [jobs, setJobs] = useState(mockJobs);
  const [searchTerm, setSearchTerm] = useState("");
  const [location, setLocation] = useState("");
  const [jobType, setJobType] = useState("all");
  const [experience, setExperience] = useState("all");
  const [likedJobs, setLikedJobs] = useState(new Set());
  const [savedJobs, setSavedJobs] = useState(new Set());

  const handleLikeJob = (jobId) => {
    const newLikedJobs = new Set(likedJobs);
    if (newLikedJobs.has(jobId)) {
      newLikedJobs.delete(jobId);
    } else {
      newLikedJobs.add(jobId);
    }
    setLikedJobs(newLikedJobs);
  };

  const handleSaveJob = (jobId) => {
    const newSavedJobs = new Set(savedJobs);
    if (newSavedJobs.has(jobId)) {
      newSavedJobs.delete(jobId);
    } else {
      newSavedJobs.add(jobId);
    }
    setSavedJobs(newSavedJobs);
  };

  const filteredJobs = jobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.company.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLocation = location === "" || job.location.toLowerCase().includes(location.toLowerCase());
    const matchesType = jobType === "all" || job.type.toLowerCase().includes(jobType.toLowerCase());
    const matchesExperience = experience === "all" || job.level.toLowerCase().includes(experience.toLowerCase());
    
    return matchesSearch && matchesLocation && matchesType && matchesExperience;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-violet-50/20 to-purple-50/20">
      <Navbar />
      
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-xl border-b border-violet-100/50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-6">
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-violet-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-xl">
                  <Code2 className="text-white font-bold text-lg w-8 h-8" />
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                  <Zap className="w-3 h-3 text-white" />
                </div>
              </div>
              <div>
                <h1 className="text-4xl font-bold text-slate-900 brand-font">
                  <span className="gradient-text">Tech Jobs</span>
                </h1>
                <p className="text-slate-600 text-lg font-medium">Find your perfect developer role with AI precision</p>
              </div>
            </div>
            <div className="flex space-x-3">
              <Badge className="bg-gradient-to-r from-violet-500 to-purple-600 text-white px-4 py-2 font-medium shadow-lg">
                <Sparkles className="w-3 h-3 mr-1" />
                Smart Matched {filteredJobs.filter(job => job.recommended).length}
              </Badge>
              <Badge variant="outline" className="border-violet-300 text-violet-600 px-4 py-2 font-medium">
                <Heart className="w-3 h-3 mr-1" />
                Liked {likedJobs.size}
              </Badge>
              <Badge variant="outline" className="border-emerald-300 text-emerald-600 px-4 py-2 font-medium">
                <Bookmark className="w-3 h-3 mr-1" />
                Saved {savedJobs.size}
              </Badge>
            </div>
          </div>

          {/* Search and Filters */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
              <Input
                placeholder="Job title, tech stack, or company"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-12 h-12 rounded-xl border-violet-200 focus:border-violet-500 focus:ring-violet-500 bg-white/80 backdrop-blur-sm"
              />
            </div>
            <div className="relative">
              <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
              <Input
                placeholder="Location or Remote"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="pl-12 h-12 rounded-xl border-violet-200 focus:border-violet-500 focus:ring-violet-500 bg-white/80 backdrop-blur-sm"
              />
            </div>
            <Select value={jobType} onValueChange={setJobType}>
              <SelectTrigger className="h-12 rounded-xl border-violet-200 focus:border-violet-500 focus:ring-violet-500 bg-white/80 backdrop-blur-sm">
                <SelectValue placeholder="Job Type" />
              </SelectTrigger>
              <SelectContent className="rounded-xl border-violet-200">
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="full time">Full Time</SelectItem>
                <SelectItem value="part time">Part Time</SelectItem>
                <SelectItem value="contract">Contract</SelectItem>
                <SelectItem value="remote">Remote</SelectItem>
              </SelectContent>
            </Select>
            <Select value={experience} onValueChange={setExperience}>
              <SelectTrigger className="h-12 rounded-xl border-violet-200 focus:border-violet-500 focus:ring-violet-500 bg-white/80 backdrop-blur-sm">
                <SelectValue placeholder="Experience Level" />
              </SelectTrigger>
              <SelectContent className="rounded-xl border-violet-200">
                <SelectItem value="all">All Levels</SelectItem>
                <SelectItem value="entry">Entry Level</SelectItem>
                <SelectItem value="mid">Mid Level</SelectItem>
                <SelectItem value="senior">Senior Level</SelectItem>
                <SelectItem value="executive">Executive</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      {/* Job Listings */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center space-x-4">
            <h2 className="text-2xl font-bold text-slate-900 brand-font">
              {filteredJobs.length} <span className="gradient-text-purple">Amazing Opportunities</span>
            </h2>
            <Badge className="bg-violet-100 text-violet-700 px-3 py-1.5 font-medium">
              <TrendingUp className="w-3 h-3 mr-1" />
              Updated 2 mins ago
            </Badge>
          </div>
          <Button variant="outline" className="flex items-center space-x-2 rounded-xl border-violet-200 hover:bg-violet-50">
            <Filter className="w-4 h-4" />
            <span>Advanced Filters</span>
          </Button>
        </div>

        <div className="space-y-6">
          {filteredJobs.map((job) => (
            <Card key={job.id} className="bg-white/80 backdrop-blur-sm border border-violet-100/50 hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] card-hover group cursor-pointer rounded-2xl">
              <CardContent className="p-8">
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-6 flex-1">
                    <Avatar className="w-20 h-20 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <AvatarImage src={job.logo} />
                      <AvatarFallback className="bg-gradient-to-br from-slate-100 to-slate-200 text-slate-600 text-xl font-bold rounded-2xl">
                        {job.company.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    
                    <div className="flex-1">
                      <div className="flex items-center space-x-4 mb-3">
                        <h3 className="text-2xl font-bold text-slate-900 group-hover:text-violet-600 cursor-pointer transition-colors brand-font">
                          {job.title}
                        </h3>
                        {job.recommended && (
                          <Badge className="bg-gradient-to-r from-emerald-100 to-green-100 text-emerald-700 flex items-center space-x-1 px-3 py-1.5 font-medium">
                            <Sparkles className="w-3 h-3" />
                            <span>AI Recommended</span>
                          </Badge>
                        )}
                      </div>
                      
                      <div className="flex items-center space-x-6 mb-4 text-slate-600">
                        <div className="flex items-center space-x-2">
                          <Building2 className="w-4 h-4" />
                          <span className="font-medium">{job.company}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <MapPin className="w-4 h-4" />
                          <span>{job.location}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Clock className="w-4 h-4" />
                          <span>{job.posted}</span>
                        </div>
                      </div>

                      <div className="flex items-center space-x-4 mb-5">
                        <Badge className="bg-violet-100 text-violet-700 px-3 py-1.5 font-medium">{job.level}</Badge>
                        <Badge variant="outline" className="border-violet-200 text-violet-600 px-3 py-1.5 font-medium">{job.type}</Badge>
                        <Badge className="bg-blue-100 text-blue-700 px-3 py-1.5 font-medium">{job.sponsorship}</Badge>
                        <div className="flex items-center space-x-2 text-emerald-600 bg-emerald-50 px-3 py-1.5 rounded-lg">
                          <DollarSign className="w-4 h-4" />
                          <span className="font-semibold">{job.salary}</span>
                        </div>
                      </div>

                      <p className="text-slate-700 mb-5 leading-relaxed text-lg">{job.description}</p>
                      
                      <div className="flex flex-wrap gap-3">
                        {job.requirements.map((req, index) => (
                          <Badge key={index} className="bg-slate-100 text-slate-700 hover:bg-violet-100 hover:text-violet-700 transition-colors px-3 py-1.5 font-medium cursor-pointer">
                            {req}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col items-end space-y-4 ml-6">
                    <div className="flex space-x-3">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleLikeJob(job.id)}
                        className={`${likedJobs.has(job.id) ? 'text-pink-500 bg-pink-50' : 'text-slate-400 hover:text-pink-500 hover:bg-pink-50'} rounded-xl transition-all duration-200 hover:scale-110`}
                      >
                        <Heart className={`w-5 h-5 ${likedJobs.has(job.id) ? 'fill-current' : ''}`} />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleSaveJob(job.id)}
                        className={`${savedJobs.has(job.id) ? 'text-violet-500 bg-violet-50' : 'text-slate-400 hover:text-violet-500 hover:bg-violet-50'} rounded-xl transition-all duration-200 hover:scale-110`}
                      >
                        <Bookmark className={`w-5 h-5 ${savedJobs.has(job.id) ? 'fill-current' : ''}`} />
                      </Button>
                    </div>
                    
                    <div className="flex flex-col space-y-3">
                      <Button className="bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700 text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:shadow-violet-500/25 transition-all duration-200 hover:scale-105">
                        <span className="flex items-center space-x-2">
                          <span>Apply Now</span>
                          <ArrowRight className="w-4 h-4" />
                        </span>
                      </Button>
                      <Button variant="outline" className="px-8 py-3 rounded-xl border-violet-200 hover:bg-violet-50 hover:border-violet-300 transition-colors font-medium">
                        View Details
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-16">
          <Button className="bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700 text-white px-12 py-4 rounded-2xl text-lg font-semibold shadow-lg hover:shadow-violet-500/25 transition-all duration-200 hover:scale-105">
            <span className="flex items-center space-x-2">
              <TrendingUp className="w-5 h-5" />
              <span>Load More Opportunities</span>
              <Sparkles className="w-5 h-5" />
            </span>
          </Button>
        </div>
      </div>

      <Footer />
      <OrionChatbot />
    </div>
  );
};

export default JobsPage;