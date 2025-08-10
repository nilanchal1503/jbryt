import React from "react";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Star, Quote, Sparkles, Code2 } from "lucide-react";
import { mockTestimonials } from "../data/mockData";

const TestimonialsSection = () => {
  return (
    <div className="py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <Badge className="bg-gradient-to-r from-violet-100 to-purple-100 text-violet-700 mb-6 px-4 py-2 border border-violet-200">
            <Sparkles className="w-4 h-4 mr-2" />
            Developer Success Stories
          </Badge>
          <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-8 brand-font">
            What <span className="gradient-text">Developers</span> Say
            <br />
            About Stack-Finds
          </h2>
          <p className="text-xl md:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            Real stories from real developers who transformed their careers with our AI-powered platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {mockTestimonials.map((testimonial, index) => (
            <Card key={testimonial.id} className="bg-white/80 backdrop-blur-sm border border-violet-100/50 hover:shadow-2xl transition-all duration-500 hover:scale-105 transform card-hover group cursor-pointer rounded-3xl overflow-hidden">
              <CardContent className="p-8">
                {/* Quote Icon */}
                <div className="flex justify-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-violet-100 to-purple-100 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Quote className="w-6 h-6 text-violet-600" />
                  </div>
                </div>

                {/* Stars */}
                <div className="flex justify-center space-x-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <blockquote className="text-slate-700 text-lg leading-relaxed mb-8 font-medium text-center">
                  "{testimonial.quote}"
                </blockquote>

                {/* Author Info */}
                <div className="flex items-center justify-center space-x-4">
                  <Avatar className="w-14 h-14 border-3 border-violet-200 shadow-lg">
                    <AvatarImage src={testimonial.avatar} />
                    <AvatarFallback className="bg-gradient-to-br from-violet-500 to-purple-600 text-white font-bold">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div className="text-center">
                    <p className="font-bold text-slate-900 text-lg">{testimonial.name}</p>
                    <p className="text-violet-600 font-medium">{testimonial.role}</p>
                    <p className="text-slate-500 text-sm">{testimonial.company}</p>
                  </div>
                </div>

                {/* Tech Stack Indicator */}
                <div className="mt-6 flex justify-center">
                  <Badge className="bg-violet-100 text-violet-700 px-3 py-1.5 font-medium">
                    <Code2 className="w-3 h-3 mr-1" />
                    Tech Professional
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-violet-500 via-purple-600 to-pink-500 rounded-3xl p-12 lg:p-16 text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 rounded-3xl"></div>
            <div className="relative z-10">
              <Badge className="glass-dark border-white/20 text-white mb-6 px-4 py-2">
                <Sparkles className="w-4 h-4 mr-2" />
                Join Successful Developers
              </Badge>
              <h3 className="text-4xl md:text-5xl font-bold mb-6 brand-font">
                Your Success Story
                <br />
                Starts Here
              </h3>
              <p className="text-white/90 text-xl max-w-3xl mx-auto leading-relaxed mb-8">
                Don't just take their word for it. Experience the power of AI-driven job matching 
                and join thousands of developers who've found their perfect tech roles.
              </p>
              
              {/* Trust Indicators */}
              <div className="flex justify-center items-center space-x-8 mb-8 opacity-80">
                <div className="text-center">
                  <p className="text-3xl font-bold">95%</p>
                  <p className="text-sm">Success Rate</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold">2.3x</p>
                  <p className="text-sm">Faster Hiring</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold">5k+</p>
                  <p className="text-sm">Happy Devs</p>
                </div>
              </div>
              
              <div className="flex justify-center">
                <button className="bg-white text-violet-600 px-10 py-4 rounded-2xl text-lg font-bold shadow-2xl hover:shadow-white/25 transition-all duration-300 hover:scale-105 hover:bg-violet-50">
                  Start Your Journey Today
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="group">
            <h4 className="text-3xl font-bold text-violet-600 mb-2 group-hover:scale-110 transition-transform">25,000+</h4>
            <p className="text-slate-600 font-medium">Developers Trust Us</p>
          </div>
          <div className="group">
            <h4 className="text-3xl font-bold text-pink-600 mb-2 group-hover:scale-110 transition-transform">500+</h4>
            <p className="text-slate-600 font-medium">Partner Companies</p>
          </div>
          <div className="group">
            <h4 className="text-3xl font-bold text-emerald-600 mb-2 group-hover:scale-110 transition-transform">98%</h4>
            <p className="text-slate-600 font-medium">Match Accuracy</p>
          </div>
          <div className="group">
            <h4 className="text-3xl font-bold text-orange-600 mb-2 group-hover:scale-110 transition-transform">24/7</h4>
            <p className="text-slate-600 font-medium">AI Support</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;