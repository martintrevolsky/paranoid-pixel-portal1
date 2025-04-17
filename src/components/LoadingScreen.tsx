
import React, { useState, useEffect } from 'react';

interface LoadingScreenProps {
  isLoading: boolean;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ isLoading }) => {
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [loadingText, setLoadingText] = useState('Establishing secure connection');
  const loadingTexts = [
    'Establishing secure connection',
    'Encrypting communication channel',
    'Verifying paranoia levels',
    'Deploying privacy shields',
    'Initializing anonymity protocol'
  ];

  useEffect(() => {
    if (isLoading) {
      // Start progress animation
      let progress = 0;
      const interval = setInterval(() => {
        progress += Math.random() * 15;
        if (progress > 100) progress = 100;
        setLoadingProgress(progress);
        
        // Change loading text periodically
        if (progress > 20 && progress < 90) {
          const textIndex = Math.floor((progress / 100) * loadingTexts.length);
          setLoadingText(loadingTexts[textIndex]);
        }
        
        if (progress === 100) clearInterval(interval);
      }, 200);
      
      return () => clearInterval(interval);
    }
  }, [isLoading]);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-50 bg-background/90 backdrop-blur-md flex flex-col items-center justify-center">
      <div className="w-full max-w-md px-8 flex flex-col items-center">
        {/* Logo */}
        <div className="text-2xl font-bold animate-pulse-glow mb-8">
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Am I Paranoid?
          </span>
        </div>
        
        {/* Progress indicator */}
        <div className="w-full h-1 bg-muted/30 rounded-full mb-4 overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
            style={{ width: `${loadingProgress}%`, transition: 'width 0.3s ease-out' }}
          ></div>
        </div>
        
        {/* Loading text */}
        <div className="text-sm text-foreground/70 font-mono">
          {loadingText}
          <span className="animate-pulse">...</span>
        </div>
        
        {/* Security notice */}
        <div className="mt-12 text-xs text-foreground/40 font-mono text-center">
          <div className="flex items-center justify-center space-x-2 mb-2">
            <span className="block w-2 h-2 rounded-full bg-accent animate-pulse"></span>
            <span>SECURE CONNECTION ESTABLISHED</span>
          </div>
          <div>No metadata stored // No logs kept // Complete anonymity</div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
