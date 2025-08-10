import React from "react";
import { Badge } from "./ui/badge";
import { Sparkles, Users, Building2, Briefcase, TrendingUp } from "lucide-react";
import { mockStats } from "../data/mockData";

const StatsSection = () => {
  const stats = [
    {
      icon: <Briefcase className="w-8 h-8 text-violet-600" />,
      number: mockStats.newJobs,
      label: "New Tech Jobs",
      sublabel: "Added this week",
      bgColor: "bg-gradient-to-br from-violet-50 to-purple-50",
      iconBg: "bg-violet-100"
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-emerald-600" />,
      number: mockStats.totalJobs,
      label: "Active Positions",
      sublabel: "Across all tech stacks",
      bgColor: "bg-gradient-to-br from-emerald-50 to-teal-50",
      iconBg: "bg-emerald-100"
    },
    {
      icon: <Users className="w-8 h-8 text-pink-600" />,
      number: mockStats.happyUsers,
      label: "Developers Hired",
      sublabel: "Success stories",
      bgColor: "bg-gradient-to-br from-pink-50 to-rose-50",
      iconBg: "bg-pink-100"
    },
    {
      icon: <Building2 className="w-8 h-8 text-blue-600" />,
      number: mockStats.companies,
      label: "Tech Companies",
      sublabel: "Hiring partners",
      bgColor: "bg-gradient-to-br from-blue-50 to-indigo-50",
      iconBg: "bg-blue-100"
    }
  ];

  return (
    <div className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="bg-gradient-to-r from-violet-100 to-purple-100 text-violet-700 mb-6 px-4 py-2 border border-violet-200">
            <Sparkles className="w-4 h-4 mr-2" />
            Trusted by Developers Worldwide
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 brand-font">
            The Numbers Speak for
            <br />
            <span className="gradient-text">Themselves</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Join thousands of developers who've found their dream tech jobs through Stack-Finds' 
            AI-powered matching system.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className={`${stat.bgColor} p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 transform card-hover border border-white/50 group cursor-pointer`}
            >
              <div className={`w-16 h-16 ${stat.iconBg} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                {stat.icon}
              </div>
              
              <div className="text-center">
                <h3 className="text-4xl md:text-5xl font-bold text-slate-900 mb-2 brand-font">
                  {stat.number}
                </h3>
                <p className="text-lg font-semibold text-slate-700 mb-1">
                  {stat.label}
                </p>
                <p className="text-sm text-slate-500 font-medium">
                  {stat.sublabel}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-slate-900 via-violet-900 to-purple-900 rounded-3xl p-12 lg:p-16 relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 rounded-3xl"></div>
            <div className="relative z-10">
              <Badge className="glass-dark border-violet-300/30 text-violet-200 mb-6 px-4 py-2">
                <TrendingUp className="w-4 h-4 mr-2" />
                Growing Fast
              </Badge>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 brand-font">
                Ready to Join the Revolution?
              </h3>
              <p className="text-violet-100 text-lg max-w-2xl mx-auto leading-relaxed">
                Thousands of developers are already using Stack-Finds to accelerate their careers. 
                Your dream tech job is waiting.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsSection;