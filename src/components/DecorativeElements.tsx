
import React from 'react';

export const GridPattern: React.FC = () => {
  return (
    <div className="absolute inset-0 opacity-10 z-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 grid grid-cols-12 gap-4 transform rotate-6 scale-125">
        {Array.from({ length: 24 }).map((_, i) => (
          <div key={i} className="h-full w-full">
            <div className="h-full w-px bg-primary/30 mx-auto"></div>
          </div>
        ))}
      </div>
      <div className="absolute inset-0 grid grid-rows-12 gap-4 transform -rotate-6 scale-125">
        {Array.from({ length: 24 }).map((_, i) => (
          <div key={i} className="h-px w-full bg-accent/30"></div>
        ))}
      </div>
    </div>
  );
};

export const FloatingOrbs: React.FC = () => {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      {Array.from({ length: 5 }).map((_, i) => (
        <div 
          key={i}
          className="absolute rounded-full bg-gradient-to-br from-primary/20 to-accent/20 blur-xl animate-float"
          style={{
            width: `${Math.random() * 300 + 100}px`,
            height: `${Math.random() * 300 + 100}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${i * 0.5}s`,
            animationDuration: `${Math.random() * 10 + 10}s`,
            opacity: 0.3
          }}
        />
      ))}
    </div>
  );
};

export const GlitchLines: React.FC = () => {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      {Array.from({ length: 10 }).map((_, i) => (
        <div 
          key={i}
          className="absolute h-px w-full bg-primary/50 opacity-30"
          style={{
            top: `${Math.random() * 100}%`,
            animationDelay: `${i * 2}s`,
            animation: `glitch ${Math.random() * 2 + 0.5}s ease-in-out ${Math.random() * 10}s infinite`
          }}
        />
      ))}
    </div>
  );
};

export const HexagonPattern: React.FC = () => {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden opacity-5 pointer-events-none">
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="hexagonPattern" width="60" height="52" patternUnits="userSpaceOnUse">
            <path 
              d="M30 0L60 15V45L30 60L0 45V15L30 0Z" 
              fill="none" 
              stroke="url(#gradient)" 
              strokeWidth="2"
            />
          </pattern>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--primary))" />
            <stop offset="100%" stopColor="hsl(var(--accent))" />
          </linearGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#hexagonPattern)" />
      </svg>
    </div>
  );
};
