import React from "react";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { TrendingUp, Users, Building2, Briefcase } from "lucide-react";
import { mockStats } from "../data/mockData";

const StatsSection = () => {
  const stats = [
    {
      icon: <Briefcase className="w-8 h-8 text-emerald-600" />,
      value: mockStats.newJobs,
      label: "Today's new jobs",
      bgColor: "bg-emerald-50",
      textColor: "text-emerald-600"
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-blue-600" />,
      value: mockStats.totalJobs,
      label: "Total jobs",
      bgColor: "bg-blue-50",
      textColor: "text-blue-600"
    },
    {
      icon: <Users className="w-8 h-8 text-purple-600" />,
      value: mockStats.happyUsers,
      label: "Happy users",
      bgColor: "bg-purple-50",
      textColor: "text-purple-600"
    },
    {
      icon: <Building2 className="w-8 h-8 text-orange-600" />,
      value: mockStats.companies,
      label: "Partner companies",
      bgColor: "bg-orange-50",
      textColor: "text-orange-600"
    }
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Badge className="bg-emerald-100 text-emerald-700 mb-4">
            Never Miss Out On New Jobs Again.
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Join The Largest Job Board!
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardContent className="p-8 text-center">
                <div className={`w-16 h-16 ${stat.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                  {stat.icon}
                </div>
                <h3 className={`text-4xl font-bold ${stat.textColor} mb-2`}>
                  {stat.value}
                </h3>
                <p className="text-gray-600 font-medium">
                  {stat.label}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl shadow-xl p-8 max-w-2xl mx-auto border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Transform Your Job Search?
            </h3>
            <p className="text-gray-600 mb-6">
              Join thousands of professionals who've accelerated their careers with AI
            </p>
            <Button className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              Get Started Today
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsSection;