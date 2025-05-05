import React, { useRef, useEffect } from 'react';

interface GradientBackgroundProps {
  className?: string;
}

const GradientBackground: React.FC<GradientBackgroundProps> = ({ className }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    let animationFrameId: number;
    
    // Set canvas dimensions
    const setCanvasDimensions = () => {
      if (canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }
    };
    
    setCanvasDimensions();
    window.addEventListener('resize', setCanvasDimensions);
    
    // Create gradient circles
    const circles = Array.from({ length: 5 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 300 + 100,
      vx: Math.random() * 0.2 - 0.1,
      vy: Math.random() * 0.2 - 0.1,
      hue: Math.random() * 60 + 330, // Pinks and purples
    }));
    
    // Animation function
    const render = () => {
      // Semi-transparent background to create trail effect
      ctx.fillStyle = 'rgba(255, 231, 231, 0.03)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Draw and update circles
      circles.forEach(circle => {
        // Create gradient
        const gradient = ctx.createRadialGradient(
          circle.x,
          circle.y,
          0,
          circle.x,
          circle.y,
          circle.radius
        );
        
        gradient.addColorStop(0, `hsla(${circle.hue}, 70%, 60%, 0.2)`);
        gradient.addColorStop(1, `hsla(${circle.hue}, 70%, 60%, 0)`);
        
        // Draw circle
        ctx.beginPath();
        ctx.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();
        
        // Update position
        circle.x += circle.vx;
        circle.y += circle.vy;
        
        // Bounce off edges
        if (circle.x < -circle.radius) circle.x = canvas.width + circle.radius;
        if (circle.x > canvas.width + circle.radius) circle.x = -circle.radius;
        if (circle.y < -circle.radius) circle.y = canvas.height + circle.radius;
        if (circle.y > canvas.height + circle.radius) circle.y = -circle.radius;
      });
      
      animationFrameId = requestAnimationFrame(render);
    };
    
    render();
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', setCanvasDimensions);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);
  
  return (
    <canvas
      ref={canvasRef}
      className={`fixed top-0 left-0 w-full h-full -z-10 ${className}`}
    />
  );
};

export default GradientBackground;