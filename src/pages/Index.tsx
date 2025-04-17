
import { useEffect } from "react";
import AnimatedBackground from "@/components/AnimatedBackground";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PricingPlans from "@/components/PricingPlans";
import FeaturesSection from "@/components/FeaturesSection";
import FaqSection from "@/components/FaqSection";
import Footer from "@/components/Footer";

const Index = () => {
  // Apply dark background color to the whole page
  useEffect(() => {
    document.body.classList.add("bg-background");
    
    // Preload document with dark mode 
    document.documentElement.classList.add("dark");
    
    return () => {
      document.body.classList.remove("bg-background");
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      {/* Background Animation */}
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
