import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import StatsSection from "../components/StatsSection";
import TestimonialsSection from "../components/TestimonialsSection";
import FeaturesSection from "../components/FeaturesSection";
import Footer from "../components/Footer";
import OrionChatbot from "../components/OrionChatbot";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <StatsSection />
      <TestimonialsSection />
      <FeaturesSection />
      <Footer />
      <OrionChatbot />
    </div>
  );
};

export default HomePage;