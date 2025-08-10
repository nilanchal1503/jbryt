import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import OrionChatbot from "../components/OrionChatbot";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
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
  Cell,
  LineChart,
  Line,
} from "recharts";
import {
  Briefcase,
  Calendar,
  Eye,
  Bookmark,
  TrendingUp,
  Users,
  Target,
  Clock,
  Sparkles,
  Code2,
  Zap,
  ArrowRight,
  Filter,
  MoreHorizontal,
  Activity
} from "lucide-react";
import { mockUser } from "../data/mockData";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");

  // Mock analytics data
  const applicationData = [
    { name: "Jan", applications: 12, interviews: 3, offers: 1 },
    { name: "Feb", applications: 19, interviews: 5, offers: 2 },
    { name: "Mar", applications: 25, interviews: 8, offers: 3 },
    { name: "Apr", applications: 32, interviews: 12, offers: 4 },
    { name: "May", applications: 28, interviews: 10, offers: 3 },
    { name: "Jun", applications: 35, interviews: 15, offers: 5 }
  ];

  const jobStatusData = [
    { name: "Applied", value: 45, color: "#8b5cf6" },
    { name: "In Review", value: 25, color: "#3b82f6" },
    { name: "Interview", value: 20, color: "#10b981" },
    { name: "Offer", value: 10, color: "#f59e0b" }
  ];

  const recentActivities = [
    { type: "application", company: "Google", position: "Senior React Developer", time: "2 hours ago", status: "Applied" },
    { type: "interview", company: "Meta", position: "Full Stack Engineer", time: "1 day ago", status: "Interview Scheduled" },
    { type: "offer", company: "Stripe", position: "Frontend Developer", time: "3 days ago", status: "Offer Received" },
    { type: "application", company: "Netflix", position: "DevOps Engineer", time: "1 week ago", status: "In Review" }
  ];

  const savedJobs = [
    { company: "Apple", position: "iOS Developer", salary: "$160k-$220k", posted: "2 days ago", match: "95%" },
    { company: "Tesla", position: "Software Engineer", salary: "$140k-$200k", posted: "1 week ago", match: "92%" },
    { company: "Airbnb", position: "Frontend Engineer", salary: "$150k-$210k", posted: "3 days ago", match: "89%" }
  ];

  const stats = [
    {
      title: "Applications Sent",
      value: mockUser.appliedJobs,
      change: "+12%",
      icon: <Briefcase className="w-6 h-6 text-violet-600" />,
      bgColor: "bg-gradient-to-br from-violet-50 to-purple-50",
      borderColor: "border-violet-200"
    },
    {
      title: "Interviews Scheduled",
      value: mockUser.interviewsScheduled,
      change: "+25%",
      icon: <Calendar className="w-6 h-6 text-emerald-600" />,
      bgColor: "bg-gradient-to-br from-emerald-50 to-teal-50",
      borderColor: "border-emerald-200"
    },
    {
      title: "Profile Views",
      value: mockUser.profileViews,
      change: "+8%",
      icon: <Eye className="w-6 h-6 text-blue-600" />,
      bgColor: "bg-gradient-to-br from-blue-50 to-indigo-50",
      borderColor: "border-blue-200"
    },
    {
      title: "Saved Jobs",
      value: mockUser.savedJobs,
      change: "+15%",
      icon: <Bookmark className="w-6 h-6 text-pink-600" />,
      bgColor: "bg-gradient-to-br from-pink-50 to-rose-50",
      borderColor: "border-pink-200"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-violet-50/20 to-purple-50/20">
      <Navbar />

      {/* Header */}
      <div className="bg-white/80 backdrop-blur-xl border-b border-violet-100/50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-6">
              <Avatar className="w-20 h-20 border-4 border-violet-200 shadow-xl">
                <AvatarImage src={mockUser.avatar} />
                <AvatarFallback className="bg-gradient-to-br from-violet-500 to-purple-600 text-white text-2xl font-bold">
                  {mockUser.name.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
              <div>
                <h1 className="text-4xl font-bold text-slate-900 brand-font">
                  Welcome back, <span className="gradient-text">{mockUser.name.split(' ')[0]}</span>!
                </h1>
                <p className="text-xl text-slate-600 font-medium">{mockUser.title} • {mockUser.location}</p>
                <Badge className="mt-2 bg-gradient-to-r from-emerald-100 to-green-100 text-emerald-700 px-3 py-1.5 font-medium">
                  <Activity className="w-3 h-3 mr-1" />
                  Active Job Seeker
                </Badge>
              </div>
            </div>
            <div className="flex space-x-4">
              <Button variant="outline" className="rounded-xl border-violet-200 hover:bg-violet-50">
                <Filter className="w-4 h-4 mr-2" />
                Filters
              </Button>
              <Button className="bg-gradient-to-r from-violet-500 to-purple-600 text-white rounded-xl hover:from-violet-600 hover:to-purple-700 shadow-lg hover:shadow-violet-500/25 transition-all duration-200">
                <Sparkles className="w-4 h-4 mr-2" />
                AI Recommendations
              </Button>
            </div>
          </div>

          {/* Tab Navigation */}
          <div className="flex space-x-8">
            <button
              onClick={() => setActiveTab("overview")}
              className={`pb-4 border-b-2 font-semibold transition-colors ${
                activeTab === "overview"
                  ? "border-violet-500 text-violet-600"
                  : "border-transparent text-slate-500 hover:text-slate-700"
              }`}
            >
              Overview
            </button>
            <button
              onClick={() => setActiveTab("applications")}
              className={`pb-4 border-b-2 font-semibold transition-colors ${
                activeTab === "applications"
                  ? "border-violet-500 text-violet-600"
                  : "border-transparent text-slate-500 hover:text-slate-700"
              }`}
            >
              Applications
            </button>
            <button
              onClick={() => setActiveTab("saved")}
              className={`pb-4 border-b-2 font-semibold transition-colors ${
                activeTab === "saved"
                  ? "border-violet-500 text-violet-600"
                  : "border-transparent text-slate-500 hover:text-slate-700"
              }`}
            >
              Saved Jobs
            </button>
            <button
              onClick={() => setActiveTab("analytics")}
              className={`pb-4 border-b-2 font-semibold transition-colors ${
                activeTab === "analytics"
                  ? "border-violet-500 text-violet-600"
                  : "border-transparent text-slate-500 hover:text-slate-700"
              }`}
            >
              Analytics
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === "overview" && (
          <>
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {stats.map((stat, index) => (
                <Card key={index} className={`${stat.bgColor} ${stat.borderColor} border-2 hover:shadow-xl transition-all duration-300 hover:scale-105 card-hover rounded-2xl`}>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 bg-white/80 rounded-2xl flex items-center justify-center shadow-lg">
                        {stat.icon}
                      </div>
                      <Badge className="bg-emerald-100 text-emerald-700 text-xs px-2 py-1 font-medium">
                        {stat.change}
                      </Badge>
                    </div>
                    <h3 className="text-3xl font-bold text-slate-900 mb-1 brand-font">{stat.value}</h3>
                    <p className="text-slate-600 font-medium">{stat.title}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Charts and Activity */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              {/* Application Progress */}
              <Card className="bg-white/80 backdrop-blur-sm border border-violet-100/50 rounded-2xl">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2 text-slate-900 brand-font">
                    <TrendingUp className="w-5 h-5 text-violet-600" />
                    <span>Application Progress</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={applicationData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                      <XAxis dataKey="name" stroke="#64748b" />
                      <YAxis stroke="#64748b" />
                      <Tooltip 
                        contentStyle={{ 
                          background: 'rgba(255, 255, 255, 0.95)', 
                          backdropFilter: 'blur(10px)',
                          borderRadius: '12px',
                          border: '1px solid #e2e8f0'
                        }} 
                      />
                      <Line type="monotone" dataKey="applications" stroke="#8b5cf6" strokeWidth={3} />
                      <Line type="monotone" dataKey="interviews" stroke="#10b981" strokeWidth={3} />
                      <Line type="monotone" dataKey="offers" stroke="#f59e0b" strokeWidth={3} />
                    </LineChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              {/* Recent Activity */}
              <Card className="bg-white/80 backdrop-blur-sm border border-violet-100/50 rounded-2xl">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2 text-slate-900 brand-font">
                    <Clock className="w-5 h-5 text-violet-600" />
                    <span>Recent Activity</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentActivities.map((activity, index) => (
                      <div key={index} className="flex items-center space-x-4 p-4 bg-violet-50/50 rounded-xl hover:bg-violet-50 transition-colors">
                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                          activity.type === 'offer' ? 'bg-emerald-100' :
                          activity.type === 'interview' ? 'bg-blue-100' : 'bg-violet-100'
                        }`}>
                          {activity.type === 'offer' ? <Target className="w-5 h-5 text-emerald-600" /> :
                           activity.type === 'interview' ? <Users className="w-5 h-5 text-blue-600" /> :
                           <Briefcase className="w-5 h-5 text-violet-600" />}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-slate-900">{activity.position}</h4>
                          <p className="text-slate-600">{activity.company}</p>
                        </div>
                        <div className="text-right">
                          <Badge className={`text-xs font-medium ${
                            activity.type === 'offer' ? 'bg-emerald-100 text-emerald-700' :
                            activity.type === 'interview' ? 'bg-blue-100 text-blue-700' : 'bg-violet-100 text-violet-700'
                          }`}>
                            {activity.status}
                          </Badge>
                          <p className="text-slate-500 text-sm mt-1">{activity.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Saved Jobs Preview */}
            <Card className="bg-white/80 backdrop-blur-sm border border-violet-100/50 rounded-2xl">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center space-x-2 text-slate-900 brand-font">
                    <Bookmark className="w-5 h-5 text-violet-600" />
                    <span>Your Saved Jobs</span>
                  </CardTitle>
                  <Button variant="outline" className="rounded-xl border-violet-200 hover:bg-violet-50">
                    View All
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {savedJobs.map((job, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-violet-50/50 rounded-xl hover:bg-violet-50 transition-colors group cursor-pointer">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-white rounded-xl shadow-lg flex items-center justify-center">
                          <Code2 className="w-6 h-6 text-violet-600" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-slate-900 group-hover:text-violet-600 transition-colors">
                            {job.position}
                          </h4>
                          <p className="text-slate-600">{job.company} • {job.salary}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <Badge className="bg-emerald-100 text-emerald-700 px-3 py-1.5 font-medium">
                          {job.match} Match
                        </Badge>
                        <p className="text-slate-500 text-sm">{job.posted}</p>
                        <Button variant="ghost" size="sm" className="group-hover:bg-violet-100">
                          <MoreHorizontal className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </>
        )}

        {activeTab === "analytics" && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Bar Chart */}
            <Card className="bg-white/80 backdrop-blur-sm border border-violet-100/50 rounded-2xl">
              <CardHeader>
                <CardTitle className="text-slate-900 brand-font">Monthly Applications</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={350}>
                  <BarChart data={applicationData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis dataKey="name" stroke="#64748b" />
                    <YAxis stroke="#64748b" />
                    <Tooltip 
                      contentStyle={{ 
                        background: 'rgba(255, 255, 255, 0.95)', 
                        backdropFilter: 'blur(10px)',
                        borderRadius: '12px',
                        border: '1px solid #e2e8f0'
                      }} 
                    />
                    <Bar dataKey="applications" fill="#8b5cf6" radius={[4, 4, 0, 0]} />
                    <Bar dataKey="interviews" fill="#10b981" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* Pie Chart */}
            <Card className="bg-white/80 backdrop-blur-sm border border-violet-100/50 rounded-2xl">
              <CardHeader>
                <CardTitle className="text-slate-900 brand-font">Application Status</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={350}>
                  <PieChart>
                    <Pie
                      data={jobStatusData}
                      cx="50%"
                      cy="50%"
                      outerRadius={120}
                      dataKey="value"
                      label={({ name, value }) => `${name}: ${value}`}
                    >
                      {jobStatusData.map((entry, index) => (
                        <Cell key={index} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>
        )}
      </div>

      <Footer />
      <OrionChatbot />
    </div>
  );
};

export default Dashboard;