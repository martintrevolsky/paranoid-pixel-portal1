import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import AnimatedBackground from "@/components/AnimatedBackground";
import { ArrowLeftIcon, MessageSquare, Send } from "lucide-react";

const ComingSoonPage: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center overflow-hidden relative">
      <AnimatedBackground />
      
      {/* Background Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-primary/10 rounded-full blur-3xl"></div>
      
      {/* Main Content */}
      <div className="relative z-10 w-full max-w-2xl mx-auto p-8 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            You're Too Eager!
          </span>
        </h1>
        
        <p className="text-lg text-foreground/80 mb-12">
          We're still working on our paranoid-level secure authentication system. 
          For now, follow us to stay updated on our progress.
        </p>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-12">
          <Button 
            size="lg" 
            className="w-full md:w-auto bg-[#5865F2] hover:bg-[#4752c4] gap-2"
          >
            <MessageSquare className="h-5 w-5" />
            Join Our Discord
          </Button>
          
          <Button 
            size="lg" 
            className="w-full md:w-auto bg-[#0088cc] hover:bg-[#0077b5] gap-2"
          >
            <Send className="h-5 w-5" />
            Follow on Telegram
          </Button>
        </div>
        
        <div className="p-6 bg-card/50 backdrop-blur-md border border-border/50 rounded-xl mb-8">
          <div className="text-xl font-semibold mb-2">Why Wait?</div>
          <p className="text-foreground/70">
            Our temporary phone number service is being developed with the highest security standards. 
            We're implementing end-to-end encryption, zero-knowledge protocols, and anonymous payment systems 
            to ensure you remain completely untraceable.
          </p>
        </div>
        
        <Link to="/">
          <Button variant="outline" className="group">
            <ArrowLeftIcon className="mr-2 w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Homepage
          </Button>
        </Link>
        
        {/* Decorative Code Block */}
        <div className="mt-16 text-left">
          <div className="font-mono text-xs text-foreground/40 overflow-hidden">
            <div>/* Authentication system under development */</div>
            <div>const userStatus = 'anonymous';</div>
            <div>const securityLevel = 'paranoid';</div>
            <div>const launchDate = 'coming_soon';</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComingSoonPage;
