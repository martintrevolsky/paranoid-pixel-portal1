
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import ParallaxEffect from "./ParallaxEffect";
import { FloatingOrbs, GlitchLines, HexagonPattern } from "./DecorativeElements";

const HeroSection: React.FC = () => {
  const [glitchText, setGlitchText] = useState(false);
  const [currentWord, setCurrentWord] = useState(0);
  const words = ["Secure", "Anonymous", "Untraceable", "Private"];
  
  // Glitch effect for text
  useEffect(() => {
    const glitchInterval = setInterval(() => {
      setGlitchText(true);
      setTimeout(() => setGlitchText(false), 100);
    }, 5000);
    
    return () => clearInterval(glitchInterval);
  }, []);
  
  // Word rotation
  useEffect(() => {
    const wordInterval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 2000);
    
    return () => clearInterval(wordInterval);
  }, []);

  return (
    <div className="relative min-h-screen pt-20 flex items-center overflow-hidden">
      {/* Decorative Elements */}
      <FloatingOrbs />
      <GlitchLines />
      <HexagonPattern />
      
      {/* Content */}
      <div className="container mx-auto px-4 pt-20 md:pt-0 flex flex-col items-center text-center z-10">
        <ParallaxEffect>
          <div 
            className={`inline-block mb-4 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full ${
              glitchText ? "animate-glitch" : ""
            }`}
          >
            <span className="text-sm font-medium bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Stay anonymous in a world that's watching
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight animate-fade-in">
            <span className="block bg-gradient-to-br from-white to-white/70 bg-clip-text text-transparent">
              Temporary Phone Numbers
            </span>
            <span className="block mt-2 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              For {words[currentWord]} Communication
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mb-8 animate-fade-in-delayed">
            Protect your privacy with disposable phone numbers. No contracts, no tracking, 
            just temporary numbers that disappear when you're done.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-16 animate-fade-in-delayed">
            <Button size="lg" className="group animate-pulse-glow">
              Get Started
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
            </Button>
            <Button size="lg" variant="outline">
              Explore Plans
            </Button>
          </div>
        </ParallaxEffect>
        
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-3xl">
          {[
            { number: "99.9%", label: "Uptime Guarantee" },
            { number: "5M+", label: "Anonymous Calls" },
            { number: "100+", label: "Country Codes" }
          ].map((stat, idx) => (
            <div 
              key={idx} 
              className="p-6 border border-primary/20 rounded-lg bg-background/50 backdrop-blur-sm animate-float"
              style={{ animationDelay: `${idx * 0.2}s` }}
            >
              <div className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                {stat.number}
              </div>
              <div className="text-foreground/60">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
