
import React from "react";
import { Shield, Clock, Globe, RefreshCcw, Lock, Zap } from "lucide-react";

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const Feature: React.FC<FeatureProps> = ({ icon, title, description, delay }) => (
  <div 
    className="p-6 bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl hover:bg-card/80 transition-all animate-fade-in"
    style={{ animationDelay: `${delay}ms` }}
  >
    <div className="mb-4 p-3 inline-flex items-center justify-center rounded-lg bg-primary/10">
      {icon}
    </div>
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-foreground/70">{description}</p>
  </div>
);

const FeaturesSection: React.FC = () => {
  const features: Array<Omit<FeatureProps, "delay">> = [
    {
      icon: <Shield className="w-6 h-6 text-primary" />,
      title: "End-to-End Privacy",
      description: "All calls and messages are encrypted with zero logs kept on our servers. What happens on your temporary number, stays on your temporary number."
    },
    {
      icon: <Clock className="w-6 h-6 text-primary" />,
      title: "Self-Destructing Numbers",
      description: "Once your rental period ends, your temporary number vanishes without a trace. No long-term commitments, no lingering data."
    },
    {
      icon: <Globe className="w-6 h-6 text-primary" />,
      title: "Global Coverage",
      description: "Get a number from almost anywhere in the world. Conduct business internationally without international roaming charges."
    },
    {
      icon: <RefreshCcw className="w-6 h-6 text-primary" />,
      title: "Instant Activation",
      description: "Generate a new number within seconds. No paperwork, no ID verification, just instant paranoid-level privacy."
    },
    {
      icon: <Lock className="w-6 h-6 text-primary" />,
      title: "Anonymous Payment",
      description: "Pay with cryptocurrency for complete anonymity. Your financial identity remains separate from your communication."
    },
    {
      icon: <Zap className="w-6 h-6 text-primary" />,
      title: "Lightning Performance",
      description: "Crystal clear calls and instant message delivery, despite our advanced privacy architecture. Security doesn't mean sacrifice."
    }
  ];

  return (
    <section className="py-20 relative">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-accent/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Paranoid-Level Features
          </h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Our temporary phone numbers include cutting-edge privacy features that keep you completely off the grid.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Feature
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
