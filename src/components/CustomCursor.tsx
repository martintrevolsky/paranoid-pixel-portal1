import React, { useEffect, useRef, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

const isTouchDevice = () => {
  return (
    typeof window !== 'undefined' &&
    ('ontouchstart' in window || navigator.maxTouchPoints > 0)
  );
};

const CustomCursor = () => {
  const [isMobile, setIsMobile] = useState(false);
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);
  const hoverRef = useRef<HTMLDivElement>(null);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const followerX = useSpring(0, { stiffness: 200, damping: 20 });
  const followerY = useSpring(0, { stiffness: 200, damping: 20 });
  
  const hoverX = useSpring(0, { stiffness: 150, damping: 15 });
  const hoverY = useSpring(0, { stiffness: 150, damping: 15 });

  useEffect(() => {
    setIsMobile(isTouchDevice());
    if (isTouchDevice()) return;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      
      followerX.set(e.clientX);
      followerY.set(e.clientY);
      
      hoverX.set(e.clientX);
      hoverY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('button') || target.closest('a') || target.closest('[role="button"]')) {
        document.documentElement.classList.add('cursor-hover');
      }
    };

    const handleMouseOut = () => {
      document.documentElement.classList.remove('cursor-hover');
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);

    // Hide default cursor
    document.documentElement.classList.add('custom-cursor');

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
      document.documentElement.classList.remove('custom-cursor');
    };
  }, []);

  if (isMobile) return null;

  return (
    <>
      {/* Main cursor dot */}
      <motion.div
        ref={cursorRef}
        className="fixed pointer-events-none z-[9999] w-1.5 h-1.5 bg-white rounded-full mix-blend-difference"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: '-50%',
          translateY: '-50%'
        }}
      />

      {/* Follower ring */}
      <motion.div
        ref={followerRef}
        className="fixed pointer-events-none z-[9998] w-8 h-8 rounded-full border border-white/50 mix-blend-difference"
        style={{
          x: followerX,
          y: followerY,
          translateX: '-50%',
          translateY: '-50%'
        }}
      />

      {/* Hover effect */}
      <motion.div
        ref={hoverRef}
        className="fixed pointer-events-none z-[9997] w-16 h-16 rounded-full bg-white/10 opacity-0 scale-0 transition-all duration-300 ease-out cursor-hover:opacity-100 cursor-hover:scale-100"
        style={{
          x: hoverX,
          y: hoverY,
          translateX: '-50%',
          translateY: '-50%'
        }}
      />
    </>
  );
};

export default CustomCursor;
