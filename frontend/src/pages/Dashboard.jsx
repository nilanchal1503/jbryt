import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import OrionChatbot from "../components/OrionChatbot";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import { Progress } from "../components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from 'recharts';
import { 
  User, 
  Briefcase, 
  Calendar, 
  Eye, 
  Heart,
  FileText,
  TrendingUp,
  Clock,
  MapPin,
  Building2,
  Target,
  CheckCircle
} from "lucide-react";
import { mockUser, mockJobs } from "../data/mockData";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");

  // Mock data for charts
  const applicationData = [
    { name: 'Jan', applications: 12, interviews: 3 },
    { name: 'Feb', applications: 19, interviews: 5 },
    { name: 'Mar', applications: 25, interviews: 8 },
    { name: 'Apr', applications: 32, interviews: 12 },
    { name: 'May', applications: 28, interviews: 10 },
    { name: 'Jun', applications: 35, interviews: 15 }
  ];

  const jobStatusData = [
    { name: 'Applied', value: 45, color: '#10b981' },
    { name: 'In Review', value: 12, color: '#3b82f6' },
    { name: 'Interview', value: 8, color: '#f59e0b' },
    { name: 'Offer', value: 3, color: '#ef4444' }
  ];

  const recentApplications = mockJobs.slice(0, 5);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Dashboard Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-6">
              <Avatar className="w-20 h-20">
                <AvatarImage src={mockUser.avatar} />
                <AvatarFallback className="bg-emerald-500 text-white text-2xl">
                  {mockUser.name.charAt(0)}
                </AvatarFallback>
              </Avatar>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">Welcome back, {mockUser.name}!</h1>
                <p className="text-lg text-gray-600">{mockUser.title}</p>
                <div className="flex items-center space-x-2 mt-2">
                  <MapPin className="w-4 h-4 text-gray-500" />
                  <span className="text-gray-600">{mockUser.location}</span>
                </div>
              </div>
            </div>
            <div className="text-right">
              <Badge className="bg-emerald-100 text-emerald-700 mb-2">
                Profile 85% Complete
              </Badge>
              <Progress value={85} className="w-48" />
            </div>
          </div>
        </div>
      </div>

      {/* Dashboard Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-8">
          <TabsList className="grid w-full grid-cols-4 max-w-md">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="applications">Applications</TabsTrigger>
            <TabsTrigger value="profile">Profile</TabsTrigger>
            <TabsTrigger value="insights">Insights</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-8">
            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <Card className="bg-white border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">Applications</p>
                      <p className="text-3xl font-bold text-gray-900">{mockUser.appliedJobs}</p>
                    </div>
                    <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center">
                      <Briefcase className="w-6 h-6 text-emerald-600" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">Interviews</p>
                      <p className="text-3xl font-bold text-gray-900">{mockUser.interviewsScheduled}</p>
                    </div>
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Calendar className="w-6 h-6 text-blue-600" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">Profile Views</p>
                      <p className="text-3xl font-bold text-gray-900">{mockUser.profileViews}</p>
                    </div>
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                      <Eye className="w-6 h-6 text-purple-600" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">Saved Jobs</p>
                      <p className="text-3xl font-bold text-gray-900">{mockUser.savedJobs}</p>
                    </div>
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                      <Heart className="w-6 h-6 text-orange-600" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Charts Row */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card className="bg-white border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <TrendingUp className="w-5 h-5 text-emerald-600" />
                    <span>Application Trends</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={applicationData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="applications" fill="#10b981" />
                      <Bar dataKey="interviews" fill="#3b82f6" />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <Card className="bg-white border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Target className="w-5 h-5 text-blue-600" />
                    <span>Application Status</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                      <Pie
                        data={jobStatusData}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={120}
                        paddingAngle={5}
                        dataKey="value"
                      >
                        {jobStatusData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                  <div className="grid grid-cols-2 gap-2 mt-4">
                    {jobStatusData.map((item, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <div className={`w-3 h-3 rounded-full`} style={{backgroundColor: item.color}}></div>
                        <span className="text-sm text-gray-600">{item.name}: {item.value}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Recent Applications */}
            <Card className="bg-white border-0 shadow-lg">
              <CardHeader>
                <CardTitle>Recent Applications</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentApplications.map((job) => (
                    <div key={job.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                      <div className="flex items-center space-x-4">
                        <Avatar className="w-12 h-12">
                          <AvatarImage src={job.logo} />
                          <AvatarFallback>{job.company.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <h4 className="font-semibold text-gray-900">{job.title}</h4>
                          <p className="text-gray-600">{job.company} • {job.location}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Badge className="bg-green-100 text-green-700">Applied</Badge>
                        <span className="text-sm text-gray-500">{job.posted}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="applications">
            <Card className="bg-white border-0 shadow-lg">
              <CardHeader>
                <CardTitle>All Applications</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12">
                  <Briefcase className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Application Management</h3>
                  <p className="text-gray-600 mb-6">Track all your job applications in one place</p>
                  <Button className="bg-emerald-500 hover:bg-emerald-600 text-white">
                    View All Applications
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="profile">
            <Card className="bg-white border-0 shadow-lg">
              <CardHeader>
                <CardTitle>Profile Settings</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12">
                  <User className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Profile Management</h3>
                  <p className="text-gray-600 mb-6">Update your professional information and preferences</p>
                  <Button className="bg-emerald-500 hover:bg-emerald-600 text-white">
                    Edit Profile
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="insights">
            <Card className="bg-white border-0 shadow-lg">
              <CardHeader>
                <CardTitle>Career Insights</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12">
                  <TrendingUp className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">AI Career Insights</h3>
                  <p className="text-gray-600 mb-6">Get personalized career recommendations and market insights</p>
                  <Button className="bg-emerald-500 hover:bg-emerald-600 text-white">
                    View Insights
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      <Footer />
      <OrionChatbot />
    </div>
  );
};

export default Dashboard;