import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import ParallaxEffect from "./ParallaxEffect";
import { FloatingOrbs, GlitchLines, HexagonPattern } from "./DecorativeElements";
import { motion } from 'framer-motion';
import PhoneModel from './PhoneModel';

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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left relative"
          >
            {/* Glowing orb behind text */}
            <div className="absolute -left-20 -top-20 w-64 h-64 bg-primary/20 rounded-full blur-3xl" />
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-6xl font-bold mb-6"
            >
              <span className="bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">
                Secure Your Digital
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                Identity
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-muted-foreground mb-8 relative z-10"
            >
              Get non-VOIP numbers for secure verifications. Unlimited incoming SMS with plans starting at just 10€/month.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-purple-600 hover:opacity-90 transition-opacity"
              >
                Get Started
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary/50 hover:bg-primary/10"
              >
                Learn More
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="floating">
              <PhoneModel />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -right-20 -top-20 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl" />
            <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl" />
          </motion.div>
        </div>
      </div>

      {/* Additional decorative elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
        />
      </div>
    </section>
  );
};

export default HeroSection;
