import { useEffect, useRef } from 'react';

const ParticleBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const setSize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    setSize();

    const resizeObserver = new ResizeObserver(setSize);
    resizeObserver.observe(canvas);

    // Particle class
    class Particle {
      constructor(w, h) {
        this.reset(w, h);
        this.y = Math.random() * h; // start scattered
      }

      reset(w, h) {
        this.x = Math.random() * w;
        this.y = Math.random() * h;
        this.vx = (Math.random() - 0.5) * 0.4;
        this.vy = (Math.random() - 0.5) * 0.4;
        this.radius = Math.random() * 1.5 + 0.3;
        this.alpha = Math.random() * 0.5 + 0.1;
        this.alphaDir = (Math.random() - 0.5) * 0.003;
        this.color = Math.random() > 0.5 ? '96, 165, 250' : '59, 130, 246';
      }

      update(w, h) {
        this.x += this.vx;
        this.y += this.vy;
        this.alpha += this.alphaDir;
        if (this.alpha < 0.05 || this.alpha > 0.6) this.alphaDir *= -1;
        if (this.x < 0 || this.x > w || this.y < 0 || this.y > h) this.reset(w, h);
      }

      draw(ctx) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${this.color}, ${this.alpha})`;
        ctx.fill();
      }
    }

    const PARTICLE_COUNT = 100;
    let particles = Array.from({ length: PARTICLE_COUNT }, () => new Particle(canvas.width, canvas.height));
    let animId;

    // Connection lines
    const drawConnections = (particles, ctx, maxDist = 120) => {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < maxDist) {
            const alpha = (1 - dist / maxDist) * 0.12;
            ctx.strokeStyle = `rgba(59, 130, 246, ${alpha})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => { p.update(canvas.width, canvas.height); p.draw(ctx); });
      drawConnections(particles, ctx);
      animId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(animId);
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none' }}
    />
  );
};

export default ParticleBackground;
