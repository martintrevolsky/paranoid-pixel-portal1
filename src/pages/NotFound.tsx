
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { AlertTriangleIcon, ArrowLeftIcon } from "lucide-react";
import AnimatedBackground from "@/components/AnimatedBackground";

const NotFound = () => {
  const [glitching, setGlitching] = useState(false);
  const [tracingText, setTracingText] = useState("");
  const fullTracingText = "ERROR 404: LOCATION UNTRACEABLE // SIGNAL LOST // CONNECTION TERMINATED // PRESENCE UNDETECTED";
  
  useEffect(() => {
    // Apply dark theme
    document.body.classList.add("bg-background");
    document.documentElement.classList.add("dark");
    
    return () => {
      document.body.classList.remove("bg-background");
    };
  }, []);
  
  // Typewriter effect for tracing text
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      setTracingText(fullTracingText.substring(0, index));
      index++;
      
      if (index > fullTracingText.length) {
        clearInterval(timer);
      }
    }, 50);
    
    return () => clearInterval(timer);
  }, []);
  
  // Random glitch effect
  useEffect(() => {
    const glitchInterval = setInterval(() => {
      setGlitching(true);
      setTimeout(() => setGlitching(false), 100);
    }, 3000);
    
    return () => clearInterval(glitchInterval);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center overflow-hidden relative">
      <AnimatedBackground />
      
      {/* Grid overlay for terminal effect */}
      <div className="absolute inset-0 grid grid-cols-[repeat(50,1fr)] grid-rows-[repeat(50,1fr)] opacity-5 pointer-events-none">
        {Array.from({ length: 50 }).map((_, x) => (
          Array.from({ length: 50 }).map((_, y) => (
            <div key={`${x}-${y}`} className="border border-primary/10"></div>
          ))
        ))}
      </div>
      
      {/* Main Content */}
      <div className="z-10 max-w-2xl mx-auto p-8 text-center">
        <div className={`mb-6 ${glitching ? "animate-glitch" : ""}`}>
          <AlertTriangleIcon className="w-20 h-20 mx-auto text-accent animate-pulse-glow" />
        </div>
        
        <h1 className="text-7xl font-bold mb-4">
          <span className={`bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent ${glitching ? "animate-glitch" : ""}`}>
            404
          </span>
        </h1>
        
        <div className="h-8 my-6 overflow-hidden border-b border-primary/20">
          <p className="text-sm font-mono text-primary/80 text-left animate-pulse-glow">
            {tracingText}
            <span className="animate-pulse">_</span>
          </p>
        </div>
        
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-foreground">
          You've Vanished Off-Grid
        </h2>
        
        <p className="text-lg text-foreground/70 mb-8">
          This page has self-destructed or never existed. For your safety, we recommend returning to a secure location.
        </p>
        
        <div className="inline-block hover:scale-105 transition-transform">
          <Link to="/">
            <Button size="lg" className="group bg-gradient-to-r from-primary to-accent hover:opacity-90">
              <ArrowLeftIcon className="mr-2 w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              Return to Safety
            </Button>
          </Link>
        </div>
        
        {/* Bottom decorative code block */}
        <div className="mt-16 text-left">
          <div className="font-mono text-xs text-foreground/40 overflow-hidden">
            <div>/* Privacy breach detected */</div>
            <div>function eraseTraces() &#123;</div>
            <div>&nbsp;&nbsp;const userLocation = 'unknown';</div>
            <div>&nbsp;&nbsp;const userIdentity = 'protected';</div>
            <div>&nbsp;&nbsp;const securityProtocol = 'initiated';</div>
            <div>&nbsp;&nbsp;return &#123; status: 'secure' &#125;;</div>
            <div>&#125;</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
