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
  DollarSign
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
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Header */}
      <div className="bg-white border-b border-gray-200 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-emerald-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">J</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">JOBS</h1>
                <p className="text-gray-600">Find your perfect match with AI assistance</p>
              </div>
            </div>
            <div className="flex space-x-2">
              <Badge className="bg-black text-white">Recommended 3</Badge>
              <Badge variant="outline">Liked {likedJobs.size}</Badge>
              <Badge variant="outline">Applied {savedJobs.size}</Badge>
            </div>
          </div>

          {/* Search and Filters */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                placeholder="Job title, company, or keywords"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                placeholder="Location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={jobType} onValueChange={setJobType}>
              <SelectTrigger>
                <SelectValue placeholder="Job Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="full time">Full Time</SelectItem>
                <SelectItem value="part time">Part Time</SelectItem>
                <SelectItem value="contract">Contract</SelectItem>
                <SelectItem value="remote">Remote</SelectItem>
              </SelectContent>
            </Select>
            <Select value={experience} onValueChange={setExperience}>
              <SelectTrigger>
                <SelectValue placeholder="Experience" />
              </SelectTrigger>
              <SelectContent>
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-gray-900">
            {filteredJobs.length} jobs found
          </h2>
          <Button variant="outline" className="flex items-center space-x-2">
            <Filter className="w-4 h-4" />
            <span>More Filters</span>
          </Button>
        </div>

        <div className="space-y-4">
          {filteredJobs.map((job) => (
            <Card key={job.id} className="bg-white border border-gray-200 hover:shadow-lg transition-all duration-300 hover:border-emerald-300">
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-4 flex-1">
                    <Avatar className="w-16 h-16 rounded-xl">
                      <AvatarImage src={job.logo} />
                      <AvatarFallback className="bg-gray-100 text-gray-600 text-lg font-semibold rounded-xl">
                        {job.company.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="text-xl font-semibold text-gray-900 hover:text-emerald-600 cursor-pointer transition-colors">
                          {job.title}
                        </h3>
                        {job.recommended && (
                          <Badge className="bg-emerald-100 text-emerald-700 flex items-center space-x-1">
                            <Sparkles className="w-3 h-3" />
                            <span>Recommended</span>
                          </Badge>
                        )}
                      </div>
                      
                      <div className="flex items-center space-x-4 mb-3 text-gray-600">
                        <div className="flex items-center space-x-1">
                          <Building2 className="w-4 h-4" />
                          <span>{job.company}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MapPin className="w-4 h-4" />
                          <span>{job.location}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="w-4 h-4" />
                          <span>{job.posted}</span>
                        </div>
                      </div>

                      <div className="flex items-center space-x-3 mb-4">
                        <Badge variant="secondary">{job.level}</Badge>
                        <Badge variant="outline">{job.type}</Badge>
                        <Badge className="bg-blue-100 text-blue-700">{job.sponsorship}</Badge>
                        <div className="flex items-center space-x-1 text-emerald-600">
                          <DollarSign className="w-4 h-4" />
                          <span className="font-medium">{job.salary}</span>
                        </div>
                      </div>

                      <p className="text-gray-700 mb-4">{job.description}</p>
                      
                      <div className="flex flex-wrap gap-2">
                        {job.requirements.map((req, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {req}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col items-end space-y-3 ml-4">
                    <div className="flex space-x-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleLikeJob(job.id)}
                        className={`${likedJobs.has(job.id) ? 'text-red-500' : 'text-gray-400'} hover:text-red-500`}
                      >
                        <Heart className={`w-5 h-5 ${likedJobs.has(job.id) ? 'fill-current' : ''}`} />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleSaveJob(job.id)}
                        className={`${savedJobs.has(job.id) ? 'text-emerald-500' : 'text-gray-400'} hover:text-emerald-500`}
                      >
                        <Bookmark className={`w-5 h-5 ${savedJobs.has(job.id) ? 'fill-current' : ''}`} />
                      </Button>
                    </div>
                    
                    <div className="flex flex-col space-y-2">
                      <Button className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-2 rounded-lg font-medium">
                        Apply Now
                      </Button>
                      <Button variant="outline" className="px-6 py-2 rounded-lg">
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
        <div className="text-center mt-12">
          <Button variant="outline" className="px-8 py-3">
            Load More Jobs
          </Button>
        </div>
      </div>

      <Footer />
      <OrionChatbot />
    </div>
  );
};

export default JobsPage;