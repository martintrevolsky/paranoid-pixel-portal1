
import React, { useEffect, useRef } from 'react';

interface ParallaxEffectProps {
  children: React.ReactNode;
}

const ParallaxEffect: React.FC<ParallaxEffectProps> = ({ children }) => {
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!parallaxRef.current) return;

      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      // Calculate mouse position as a percentage of the screen
      const xPos = (clientX / innerWidth - 0.5) * 2; // -1 to 1
      const yPos = (clientY / innerHeight - 0.5) * 2; // -1 to 1

      // Apply transformation based on mouse position
      parallaxRef.current.style.transform = `translate(${xPos * -30}px, ${yPos * -30}px)`;
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div ref={parallaxRef} className="transition-transform duration-1000 ease-out">
      {children}
    </div>
  );
};

export default ParallaxEffect;
