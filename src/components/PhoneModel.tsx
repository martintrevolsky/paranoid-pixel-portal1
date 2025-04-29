import React from 'react';
import { motion } from 'framer-motion';

const PhoneModel = () => {
  return (
    <div className="relative w-[300px] h-[600px] perspective-1000">
      <motion.div
        className="relative w-full h-full preserve-3d"
        animate={{ 
          rotateY: [0, 10, 0],
          rotateX: [0, -5, 0]
        }}
        transition={{
          duration: 6,
          ease: "easeInOut",
          repeat: Infinity,
        }}
      >
        {/* Phone Frame */}
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 to-zinc-800 rounded-[45px] border-[8px] border-zinc-800 shadow-2xl">
          {/* Screen */}
          <div className="absolute inset-0 bg-black rounded-[35px] overflow-hidden">
            {/* Screen Content */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20">
              {/* Dynamic UI Elements */}
              <div className="absolute inset-x-0 top-12 flex flex-col items-center space-y-4">
                <motion.div 
                  className="w-16 h-16 rounded-full bg-gradient-to-r from-primary to-accent"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <motion.div 
                  className="w-32 h-2 rounded-full bg-white/10"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
              </div>

              {/* Animated Particles */}
              <div className="absolute inset-0 overflow-hidden">
                {[...Array(20)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-white/30 rounded-full"
                    initial={{ 
                      x: Math.random() * 300,
                      y: Math.random() * 600
                    }}
                    animate={{ 
                      y: [null, -10, 10],
                      x: [null, -10, 10]
                    }}
                    transition={{
                      duration: 3 + Math.random() * 2,
                      repeat: Infinity,
                      repeatType: "reverse"
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120px] h-[35px] bg-black rounded-b-3xl">
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-4 bg-zinc-900 rounded-full">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-zinc-800" />
              </div>
            </div>
          </div>
        </div>

        {/* Reflections */}
        <div className="absolute inset-0 rounded-[45px] bg-gradient-to-tr from-white/5 to-transparent pointer-events-none" />
        
        {/* Side Button */}
        <div className="absolute -right-2 top-24 w-1 h-12 bg-zinc-700 rounded-r-lg" />
        
        {/* Volume Buttons */}
        <div className="absolute -left-2 top-24 w-1 h-8 bg-zinc-700 rounded-l-lg" />
        <div className="absolute -left-2 top-36 w-1 h-8 bg-zinc-700 rounded-l-lg" />
      </motion.div>

      {/* Shadow */}
      <motion.div
        className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[80%] h-4 bg-black/20 rounded-full blur-xl"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{
          duration: 6,
          ease: "easeInOut",
          repeat: Infinity,
        }}
      />
    </div>
  );
};

export default PhoneModel; 