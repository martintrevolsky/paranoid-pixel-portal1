
import React, { useEffect, useRef } from 'react';

const AnimatedBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Full screen canvas
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Particle settings
    const particleCount = 150;
    const particles: Particle[] = [];
    const connectionDistance = 150; // Maximum distance for connecting particles
    const colorsPrimary = ['#9333EA', '#A855F7', '#7C3AED', '#8B5CF6']; // Purple shades
    const colorsAccent = ['#D946EF', '#E879F9']; // Pink shades
    const allColors = [...colorsPrimary, ...colorsAccent];

    interface Particle {
      x: number;
      y: number;
      radius: number;
      color: string;
      speed: number;
      directionX: number;
      directionY: number;
      opacity: number;
      opacityDirection: number;
    }

    // Create particles
    for (let i = 0; i < particleCount; i++) {
      const radius = Math.random() * 3 + 1;
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      const color = allColors[Math.floor(Math.random() * allColors.length)];
      const speed = Math.random() * 1 + 0.2;
      const directionX = (Math.random() - 0.5) * 2;
      const directionY = (Math.random() - 0.5) * 2;
      const opacity = Math.random() * 0.5 + 0.2;
      const opacityDirection = Math.random() > 0.5 ? 0.005 : -0.005;

      particles.push({
        x,
        y,
        radius,
        color,
        speed,
        directionX,
        directionY,
        opacity,
        opacityDirection,
      });
    }

    let animationFrameId: number;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        
        // Update opacity with pulsing effect
        p.opacity += p.opacityDirection;
        if (p.opacity > 0.7 || p.opacity < 0.2) {
          p.opacityDirection *= -1;
        }
        
        // Update position
        p.x += p.directionX * p.speed;
        p.y += p.directionY * p.speed;
        
        // Bounce off edges
        if (p.x < 0 || p.x > canvas.width) {
          p.directionX *= -1;
        }
        if (p.y < 0 || p.y > canvas.height) {
          p.directionY *= -1;
        }
        
        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color + Math.floor(p.opacity * 255).toString(16).padStart(2, '0');
        ctx.fill();
        
        // Connect nearby particles with lines
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < connectionDistance) {
            // Calculate opacity based on distance
            const opacity = 1 - (distance / connectionDistance);
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(147, 51, 234, ${opacity * 0.15})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }
      
      // Add occasional glitch effect
      if (Math.random() > 0.99) {
        // Draw glitch rectangles
        for (let i = 0; i < 5; i++) {
          const x = Math.random() * canvas.width;
          const y = Math.random() * canvas.height;
          const width = Math.random() * 100 + 50;
          const height = Math.random() * 10 + 2;
          ctx.fillStyle = 'rgba(147, 51, 234, 0.1)';
          ctx.fillRect(x, y, width, height);
        }
      }
      
      animationFrameId = requestAnimationFrame(animate);
    };
    
    animate();
    
    // Handle window resize
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', handleResize);
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
    />
  );
};

export default AnimatedBackground;
