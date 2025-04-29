import React from 'react';
import { motion } from 'framer-motion';

const PhoneModel = () => {
  return (
    <div className="relative w-[300px] h-[600px] perspective-1000">
      <motion.div
        className="relative w-full h-full preserve-3d"
        animate={{ 
          rotateY: [-5, 5, -5],
          rotateX: [-3, 3, -3],
          rotateZ: [-2, 2, -2]
        }}
        transition={{
          duration: 8,
          ease: "easeInOut",
          repeat: Infinity,
        }}
      >
        {/* Phone Frame */}
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 to-zinc-800 rounded-[45px] border-[8px] border-zinc-800 shadow-2xl">
          {/* Screen */}
          <div className="absolute inset-0 bg-black rounded-[35px] overflow-hidden">
            {/* Screen Content */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10">
              {/* Mini Webpage */}
              <div className="absolute inset-x-0 top-14 bottom-4 px-4">
                {/* Browser Bar */}
                <div className="relative h-8 bg-zinc-900/80 rounded-t-lg flex items-center px-3 gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                  </div>
                  <div className="flex-1 mx-2">
                    <div className="w-full h-5 bg-zinc-800/80 rounded-md px-2 py-1 text-[8px] text-zinc-400 flex items-center">
                      amiparanoid.com
                    </div>
                  </div>
                </div>

                {/* Webpage Content */}
                <div className="h-full bg-zinc-900/80 rounded-b-lg p-4">
                  <motion.div 
                    className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-primary to-accent"
                    animate={{ 
                      scale: [1, 1.1, 1],
                      rotate: [0, 360]
                    }}
                    transition={{ 
                      duration: 4,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />
                  
                  <motion.h1
                    className="text-center text-sm font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2"
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    Am I Paranoid?
                  </motion.h1>

                  {/* Animated Text Lines */}
                  {[...Array(4)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="h-2 bg-white/10 rounded-full mb-2"
                      initial={{ width: "60%" }}
                      animate={{ 
                        width: ["60%", "80%", "60%"],
                        x: [0, 2, 0]
                      }}
                      transition={{
                        duration: 2,
                        delay: i * 0.2,
                        repeat: Infinity
                      }}
                    />
                  ))}

                  {/* Action Button */}
                  <motion.button
                    className="mt-4 w-full py-2 rounded-lg bg-gradient-to-r from-primary to-accent text-[10px] font-medium text-white"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Get Started
                  </motion.button>
                </div>
              </div>

              {/* Animated Particles */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(15)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-white/20 rounded-full"
                    initial={{ 
                      x: Math.random() * 300,
                      y: Math.random() * 600
                    }}
                    animate={{ 
                      y: [null, -20, 20],
                      x: [null, -20, 20]
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
