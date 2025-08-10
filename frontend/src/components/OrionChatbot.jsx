import React, { useState, useRef, useEffect } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { 
  MessageCircle, 
  Send, 
  X, 
  Minimize2, 
  Maximize2,
  Sparkles,
  User,
  Code2,
  Zap,
  Bot
} from "lucide-react";
import { mockChatMessages, mockCareerAdvice } from "../data/mockData";

const OrionChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: "bot",
      message: "Hi! I'm Stack-Bot, your AI career copilot for developers. How can I help you find your perfect tech job today? 🚀",
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage = {
      id: messages.length + 1,
      type: "user",
      message: inputValue,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const botResponse = generateBotResponse(inputValue);
      const botMessage = {
        id: messages.length + 2,
        type: "bot",
        message: botResponse,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const generateBotResponse = (input) => {
    const lowerInput = input.toLowerCase();
    
    if (lowerInput.includes("job") || lowerInput.includes("search") || lowerInput.includes("find")) {
      return "Perfect! I can help you discover amazing tech opportunities. Based on your profile, I've analyzed thousands of positions that match your stack. What technologies are you most passionate about? 💻";
    } else if (lowerInput.includes("resume") || lowerInput.includes("cv")) {
      return "Great question! For developers, your resume should showcase your tech stack prominently. I recommend highlighting your GitHub contributions, tech projects, and specific frameworks. Want me to review your current resume? 📄";
    } else if (lowerInput.includes("interview") || lowerInput.includes("coding")) {
      return "Coding interviews can be challenging! I can help you practice algorithms, system design, and behavioral questions. Which companies are you targeting? I have specific prep strategies for FAANG, startups, and everything in between! 🧠";
    } else if (lowerInput.includes("salary") || lowerInput.includes("compensation")) {
      return "Salary negotiation is crucial in tech! Based on your experience level, location, and tech stack, I can provide current market rates. What's your primary programming language and years of experience? 💰";
    } else if (lowerInput.includes("stack") || lowerInput.includes("technology") || lowerInput.includes("tech")) {
      return "Technology stacks are my specialty! Whether you're into React, Python, Go, or exploring new frameworks, I can match you with companies using your preferred technologies. What's your current stack? ⚡";
    } else if (lowerInput.includes("remote") || lowerInput.includes("work from home")) {
      return "Remote work is amazing for developers! I can help you find fully remote positions, hybrid opportunities, or location-specific roles. Many top tech companies offer excellent remote packages. Interested in any particular type? 🏠";
    } else {
      return "I'm your dedicated tech career assistant! I specialize in helping developers find amazing opportunities, optimize their profiles, prepare for coding interviews, and navigate the tech job market. What aspect of your developer career can I help with? 🚀";
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const quickActions = [
    "🔍 Find tech jobs for me",
    "📄 Review my developer resume", 
    "💻 Coding interview tips",
    "💰 Tech salary insights"
  ];

  if (!isOpen) {
    return (
      <div className="fixed bottom-6 right-6 z-50">
        <div className="relative">
          <Button
            onClick={() => setIsOpen(true)}
            className="bg-gradient-to-br from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700 text-white rounded-2xl w-16 h-16 shadow-2xl hover:shadow-violet-500/25 transition-all duration-300 hover:scale-110 pulse-glow"
          >
            <Bot className="w-7 h-7" />
          </Button>
          <Badge className="absolute -top-3 -right-3 bg-gradient-to-r from-pink-500 to-violet-500 text-white text-xs px-2 py-1 rounded-full animate-pulse">
            Stack-Bot
          </Badge>
          <div className="absolute -top-1 -left-1 w-4 h-4 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
            <Zap className="w-2.5 h-2.5 text-white" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Card className={`bg-white/95 backdrop-blur-xl shadow-2xl border-0 transition-all duration-300 ${
        isMinimized ? "w-80 h-20" : "w-96 h-[550px]"
      } rounded-3xl border border-violet-200/50`}>
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-violet-100/50 bg-gradient-to-r from-violet-500 via-purple-600 to-pink-500 text-white rounded-t-3xl">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                <Bot className="w-5 h-5" />
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-yellow-400 rounded-full flex items-center justify-center">
                <Zap className="w-2.5 h-2.5 text-white" />
              </div>
            </div>
            <div>
              <h3 className="font-bold text-lg brand-font">Stack-Bot</h3>
              <p className="text-xs opacity-90">AI Developer Career Copilot</p>
            </div>
            <Badge className="bg-white/20 text-white text-xs px-2 py-1 border border-white/30">
              <span className="w-2 h-2 bg-green-400 rounded-full mr-1 animate-pulse"></span>
              Online
            </Badge>
          </div>
          <div className="flex items-center space-x-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMinimized(!isMinimized)}
              className="text-white hover:bg-white/20 rounded-xl"
            >
              {isMinimized ? <Maximize2 className="w-4 h-4" /> : <Minimize2 className="w-4 h-4" />}
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(false)}
              className="text-white hover:bg-white/20 rounded-xl"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {!isMinimized && (
          <>
            {/* Messages */}
            <CardContent className="flex-1 overflow-y-auto p-4 space-y-4 h-80 bg-gradient-to-b from-slate-50/50 to-white/80">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div className={`flex items-start space-x-3 max-w-xs ${
                    message.type === "user" ? "flex-row-reverse space-x-reverse" : ""
                  }`}>
                    <Avatar className="w-9 h-9 mt-1 shadow-lg">
                      {message.type === "bot" ? (
                        <>
                          <AvatarFallback className="bg-gradient-to-br from-violet-500 to-purple-600 text-white text-xs">
                            <Bot className="w-5 h-5" />
                          </AvatarFallback>
                        </>
                      ) : (
                        <>
                          <AvatarImage src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face" />
                          <AvatarFallback className="bg-gradient-to-br from-slate-500 to-slate-600 text-white text-xs">
                            <User className="w-5 h-5" />
                          </AvatarFallback>
                        </>
                      )}
                    </Avatar>
                    <div className={`p-4 rounded-2xl shadow-sm ${
                      message.type === "user" 
                        ? "bg-gradient-to-br from-violet-500 to-purple-600 text-white" 
                        : "bg-white border border-violet-100"
                    }`}>
                      <p className="text-sm leading-relaxed">{message.message}</p>
                      <p className="text-xs opacity-70 mt-2">
                        {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
              
              {isTyping && (
                <div className="flex justify-start">
                  <div className="flex items-start space-x-3">
                    <Avatar className="w-9 h-9 mt-1 shadow-lg">
                      <AvatarFallback className="bg-gradient-to-br from-violet-500 to-purple-600 text-white text-xs">
                        <Bot className="w-5 h-5" />
                      </AvatarFallback>
                    </Avatar>
                    <div className="bg-white border border-violet-100 p-4 rounded-2xl shadow-sm">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-violet-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{animationDelay: "0.1s"}}></div>
                        <div className="w-2 h-2 bg-pink-400 rounded-full animate-bounce" style={{animationDelay: "0.2s"}}></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </CardContent>

            {/* Quick Actions */}
            {messages.length === 1 && (
              <div className="px-4 pb-3 bg-white/80">
                <p className="text-xs text-slate-500 mb-3 font-medium">Quick actions for developers:</p>
                <div className="grid grid-cols-2 gap-2">
                  {quickActions.map((action, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      size="sm"
                      onClick={() => {
                        setInputValue(action.replace(/^[🔍📄💻💰]\s/, ''));
                      }}
                      className="text-xs hover:bg-violet-50 hover:border-violet-300 hover:text-violet-600 transition-colors text-left justify-start p-2 h-auto rounded-xl"
                    >
                      {action}
                    </Button>
                  ))}
                </div>
              </div>
            )}

            {/* Input */}
            <div className="p-4 border-t border-violet-100/50 bg-white/80 rounded-b-3xl">
              <div className="flex space-x-3">
                <Input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask about tech jobs, coding interviews, salary..."
                  className="flex-1 border-violet-200 focus:border-violet-500 focus:ring-violet-500 rounded-xl bg-white/80 backdrop-blur-sm"
                />
                <Button
                  onClick={handleSendMessage}
                  disabled={!inputValue.trim() || isTyping}
                  className="bg-gradient-to-br from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700 text-white px-4 rounded-xl shadow-lg hover:shadow-violet-500/25 transition-all duration-200 hover:scale-105"
                >
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </>
        )}
      </Card>
    </div>
  );
};

export default OrionChatbot;