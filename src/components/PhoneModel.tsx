import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Lock, Sparkles, ChevronRight } from 'lucide-react';

const PhoneModel = () => {
  const [activeTab, setActiveTab] = useState(0);
  const tabs = ['Overview', 'Features', 'Pricing'];

  return (
    <div className="relative w-[300px] h-[600px] perspective-1000">
      <motion.div
        className="relative w-full h-full preserve-3d"
        animate={{ 
          rotateY: [-3, 3, -3],
          rotateX: [-2, 2, -2],
          rotateZ: [-1, 1, -1]
        }}
        transition={{
          duration: 10,
          ease: "easeInOut",
          repeat: Infinity,
        }}
      >
        {/* Phone Frame */}
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 to-zinc-800 rounded-[45px] border-[8px] border-zinc-800 shadow-2xl">
          {/* Screen */}
          <div className="absolute inset-0 bg-black rounded-[35px] overflow-hidden">
            {/* Screen Content */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5">
              {/* Mini Webpage */}
              <div className="absolute inset-x-0 top-14 bottom-4 px-4">
                {/* Browser Bar */}
                <motion.div 
                  className="relative h-8 bg-zinc-900/90 backdrop-blur-xl rounded-t-lg flex items-center px-3 gap-2 border-b border-white/5"
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="flex gap-1.5">
                    {[['#ef4444', '0.8'], ['#eab308', '1.2'], ['#22c55e', '1.6']].map(([color, delay], i) => (
                      <motion.div 
                        key={i}
                        className="w-2.5 h-2.5 rounded-full"
                        style={{ backgroundColor: color }}
                        whileHover={{ scale: 1.2 }}
                        animate={{
                          boxShadow: [
                            `0 0 0px ${color}`,
                            `0 0 10px ${color}`,
                            `0 0 0px ${color}`
                          ]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: Number(delay)
                        }}
                      />
                    ))}
                  </div>
                  <motion.div 
                    className="flex-1 mx-2 group"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="w-full h-5 bg-zinc-800/80 rounded-md px-2 py-1 text-[8px] text-zinc-400 flex items-center gap-1.5 group-hover:bg-zinc-800/90 transition-colors">
                      <Lock className="w-2.5 h-2.5" />
                      <motion.div
                        animate={{ opacity: [1, 0.5, 1] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="w-1.5 h-1.5 rounded-full bg-green-500/50"
                      />
                      amiparanoid.com
                    </div>
                  </motion.div>
                </motion.div>

                {/* Webpage Content */}
                <motion.div 
                  className="h-full bg-zinc-900/90 backdrop-blur-xl rounded-b-lg p-4 border-x border-b border-white/5"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  {/* Logo Section */}
                  <div className="relative mb-6">
                    <motion.div 
                      className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-r from-primary to-accent p-[2px]"
                      animate={{ 
                        rotate: [0, 360],
                        background: [
                          "linear-gradient(to right, hsl(var(--primary)), hsl(var(--accent)))",
                          "linear-gradient(to left, hsl(var(--primary)), hsl(var(--accent)))"
                        ]
                      }}
                      transition={{ 
                        duration: 8,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                    >
                      <div className="w-full h-full bg-zinc-900 rounded-2xl flex items-center justify-center">
                        <Sparkles className="w-8 h-8 text-primary" />
                      </div>
                      <motion.div
                        className="absolute -inset-2 rounded-3xl bg-primary/20 blur-xl"
                        animate={{
                          scale: [1, 1.2, 1],
                          opacity: [0.3, 0.1, 0.3]
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      />
                    </motion.div>
                  </div>

                  {/* Navigation Tabs */}
                  <div className="flex justify-center gap-2 mb-4">
                    {tabs.map((tab, index) => (
                      <motion.button
                        key={tab}
                        className={`px-2 py-1 rounded-md text-[10px] font-medium transition-colors ${
                          activeTab === index 
                            ? 'bg-primary/20 text-primary' 
                            : 'text-zinc-400 hover:text-zinc-300'
                        }`}
                        onClick={() => setActiveTab(index)}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {tab}
                      </motion.button>
                    ))}
                  </div>
                  
                  <motion.h1
                    className="text-center text-sm font-bold bg-gradient-to-r from-primary via-purple-500 to-accent bg-clip-text text-transparent mb-3"
                    animate={{ 
                      opacity: [0.8, 1, 0.8],
                      scale: [1, 1.02, 1]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    Am I Paranoid?
                  </motion.h1>

                  {/* Premium Features */}
                  <div className="space-y-3 mb-4">
                    {[
                      { icon: Shield, text: "Military-grade encryption" },
                      { icon: Lock, text: "End-to-end security" },
                      { icon: Sparkles, text: "Premium protection" }
                    ].map((feature, i) => (
                      <motion.div
                        key={i}
                        className="flex items-center gap-2 bg-white/5 rounded-lg p-2"
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: i * 0.1 }}
                        whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.08)" }}
                      >
                        <feature.icon className="w-3 h-3 text-primary" />
                        <span className="text-[9px] text-zinc-300">{feature.text}</span>
                        <ChevronRight className="w-3 h-3 text-zinc-500 ml-auto" />
                      </motion.div>
                    ))}
                  </div>

                  {/* Action Button */}
                  <motion.button
                    className="mt-2 w-full py-2.5 rounded-lg bg-gradient-to-r from-primary to-accent text-[10px] font-medium text-white relative overflow-hidden group"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
                      animate={{
                        x: ["-100%", "100%"]
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                    />
                    <span className="relative z-10 flex items-center justify-center gap-1">
                      Get Started
                      <ChevronRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                    </span>
                  </motion.button>

                  {/* Trust Indicators */}
                  <motion.div 
                    className="mt-4 flex items-center justify-center gap-3 text-[8px] text-zinc-400"
                    animate={{ opacity: [0.5, 0.8, 0.5] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    {[
                      { color: "emerald", text: "Secure" },
                      { color: "primary", text: "Encrypted" },
                      { color: "purple", text: "Private" }
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-1">
                        <motion.div
                          className={`w-1.5 h-1.5 rounded-full bg-${item.color}-500`}
                          animate={{ 
                            scale: [1, 1.2, 1],
                            opacity: [0.5, 1, 0.5]
                          }}
                          transition={{ 
                            duration: 2,
                            repeat: Infinity,
                            delay: i * 0.3
                          }}
                        />
                        {item.text}
                      </div>
                    ))}
                  </motion.div>
                </motion.div>
              </div>

              {/* Animated Particles */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(20)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-primary/20 rounded-full"
                    initial={{ 
                      x: Math.random() * 300,
                      y: Math.random() * 600,
                      scale: 0,
                      opacity: 0
                    }}
                    animate={{ 
                      y: [null, -20, 20],
                      x: [null, -20, 20],
                      scale: [0, 1, 0],
                      opacity: [0, 1, 0]
                    }}
                    transition={{
                      duration: 3 + Math.random() * 2,
                      repeat: Infinity,
                      repeatType: "reverse",
                      delay: Math.random() * 2,
                      ease: "easeInOut"
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120px] h-[35px] bg-black rounded-b-3xl">
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-4 bg-zinc-900 rounded-full">
                <motion.div 
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full"
                  animate={{
                    backgroundColor: ["#27272a", "#3f3f46", "#27272a"],
                    boxShadow: [
                      "0 0 0px #27272a",
                      "0 0 6px #3f3f46",
                      "0 0 0px #27272a"
                    ]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Reflections */}
        <motion.div 
          className="absolute inset-0 rounded-[45px] bg-gradient-to-tr from-white/5 to-transparent pointer-events-none"
          animate={{
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
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
          opacity: [0.2, 0.4, 0.2]
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
