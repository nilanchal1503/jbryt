import React from "react";
import { Card, CardContent } from "./ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { Star, Heart, Quote } from "lucide-react";
import { mockTestimonials } from "../data/mockData";

const TestimonialsSection = () => {
  return (
    <div className="py-20 bg-gradient-to-br from-emerald-500 to-teal-600 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-black bg-opacity-10"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-20"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <Heart className="w-12 h-12 text-white opacity-80" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            520,000+ HAPPY USERS' LOVE
          </h2>
          <p className="text-xl text-white opacity-90 max-w-3xl mx-auto">
            Thank you for your praise and suggestions. With your support, we can go further. We hope to accompany
            you throughout your job search journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockTestimonials.map((testimonial, index) => (
            <Card key={testimonial.id} className="bg-white border-0 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 transform">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Quote className="w-8 h-8 text-emerald-500 opacity-50" />
                </div>
                
                <p className="text-gray-700 mb-6 leading-relaxed italic">
                  "{testimonial.quote}"
                </p>
                
                <div className="flex items-center space-x-4">
                  <Avatar className="w-12 h-12">
                    <AvatarImage src={testimonial.avatar} />
                    <AvatarFallback className="bg-emerald-500 text-white">
                      {testimonial.name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                    <p className="text-xs text-gray-500">{testimonial.company}</p>
                  </div>
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional testimonials showcase */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="bg-white bg-opacity-90 backdrop-blur-sm border-0 shadow-2xl">
            <CardContent className="p-8">
              <div className="flex items-center mb-4">
                <Quote className="w-6 h-6 text-emerald-500 opacity-50" />
              </div>
              <p className="text-gray-700 mb-4 italic">
                "I am able to find more relevant jobs faster, since using Jobright I have tripled my interview rate. I am truly impressed."
              </p>
              <div className="flex items-center space-x-3">
                <Avatar className="w-10 h-10">
                  <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face" />
                  <AvatarFallback>FH</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium text-gray-900">Fred H.</p>
                  <p className="text-sm text-gray-600">Senior Software Engineer</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white bg-opacity-90 backdrop-blur-sm border-0 shadow-2xl">
            <CardContent className="p-8">
              <div className="flex items-center mb-4">
                <Quote className="w-6 h-6 text-emerald-500 opacity-50" />
              </div>
              <p className="text-gray-700 mb-4 italic">
                "Thanks to this platform I've landed a few interviews and accepted an offer within 1 week of interviewing!"
              </p>
              <div className="flex items-center space-x-3">
                <Avatar className="w-10 h-10">
                  <AvatarImage src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face" />
                  <AvatarFallback>SM</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium text-gray-900">Sarah M.</p>
                  <p className="text-sm text-gray-600">Product Manager</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;