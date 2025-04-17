
import React, { useEffect, useState, useRef } from 'react';

const CustomCursor: React.FC = () => {
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const cursorRingRef = useRef<HTMLDivElement>(null);
  const [isActive, setIsActive] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      
      if (cursorDotRef.current && cursorRingRef.current) {
        cursorDotRef.current.style.transform = `translate(${clientX}px, ${clientY}px)`;
        
        // Add a slight delay to the ring for a trailing effect
        setTimeout(() => {
          if (cursorRingRef.current) {
            cursorRingRef.current.style.transform = `translate(${clientX}px, ${clientY}px)`;
          }
        }, 100);
      }
      
      // Show cursor after first movement
      if (!isVisible) setIsVisible(true);
    };
    
    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);
    
    const handleMouseEnter = () => {
      setIsActive(true);
      setIsVisible(true);
    };
    
    const handleMouseLeave = () => {
      setIsActive(false);
      setIsVisible(false);
    };
    
    const handleLinkHover = () => {
      setIsActive(true);
    };
    
    const handleLinkLeave = () => {
      setIsActive(false);
    };
    
    document.addEventListener('mousemove', moveCursor);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);
    
    // Add hover effect for links and buttons
    const links = document.querySelectorAll('a, button');
    links.forEach(link => {
      link.addEventListener('mouseenter', handleLinkHover);
      link.addEventListener('mouseleave', handleLinkLeave);
    });
    
    return () => {
      document.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      
      links.forEach(link => {
        link.removeEventListener('mouseenter', handleLinkHover);
        link.removeEventListener('mouseleave', handleLinkLeave);
      });
    };
  }, [isVisible]);

  return (
    <>
      <div 
        ref={cursorDotRef}
        className={`fixed top-0 left-0 w-2 h-2 bg-primary rounded-full pointer-events-none z-50 transition-transform will-change-transform ${
          isVisible ? 'opacity-100' : 'opacity-0'
        } ${isClicking ? 'scale-0' : 'scale-100'}`}
        style={{ transform: 'translate(-50%, -50%)' }}
      />
      <div 
        ref={cursorRingRef}
        className={`fixed top-0 left-0 w-6 h-6 border-2 border-primary rounded-full pointer-events-none z-50 transition-transform will-change-transform ${
          isVisible ? 'opacity-100' : 'opacity-0'
        } ${isActive ? 'w-12 h-12 border-accent' : ''} ${
          isClicking ? 'w-4 h-4 border-accent' : ''
        }`}
        style={{ transform: 'translate(-50%, -50%)' }}
      />
    </>
  );
};

export default CustomCursor;
