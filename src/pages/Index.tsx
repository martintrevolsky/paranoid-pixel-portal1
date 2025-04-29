import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PricingPlans from "@/components/PricingPlans";
import FeaturesSection from "@/components/FeaturesSection";
import FaqSection from "@/components/FaqSection";
import Footer from "@/components/Footer";
import AnimatedBackground from "@/components/AnimatedBackground";

const Index = () => {
  useEffect(() => {
    // Force dark mode
    document.documentElement.classList.add("dark");
    document.body.style.backgroundColor = "#0a0a0a";
    document.body.style.color = "#ffffff";
    
    return () => {
      document.body.style.backgroundColor = "";
      document.body.style.color = "";
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden bg-[#0a0a0a] text-white">
      {/* Background */}
      <AnimatedBackground />
      
      {/* Main Content */}
      <div className="relative z-10 flex-grow">
        <Navbar />
        <HeroSection />
        <PricingPlans />
        <FeaturesSection />
        <FaqSection />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
