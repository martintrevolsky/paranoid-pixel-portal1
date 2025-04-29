import React from 'react';

const AnimatedBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-background"></div>
      
      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-[25%] -left-[25%] w-[150%] h-[150%] animate-slow-spin">
          <div className="absolute top-[40%] left-[40%] w-[30%] h-[30%] rounded-full bg-primary/20 blur-3xl"></div>
          <div className="absolute top-[15%] left-[60%] w-[25%] h-[25%] rounded-full bg-purple-600/20 blur-3xl"></div>
          <div className="absolute top-[60%] left-[25%] w-[35%] h-[35%] rounded-full bg-blue-600/20 blur-3xl"></div>
        </div>
      </div>
      
      {/* Noise overlay */}
      <div className="absolute inset-0 bg-noise opacity-[0.015]"></div>
      
      {/* Vignette effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/20"></div>
    </div>
  );
};

export default AnimatedBackground;
