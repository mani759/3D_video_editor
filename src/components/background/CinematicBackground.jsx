import { useEffect, useRef } from "react";

const CinematicBackground = () => {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    if (!ctx || !containerRef.current) return undefined;

    let animationFrameId;

    const mouse = {
      x: null,
      y: null,
      radius: 180,
    };

    const resizeCanvas = () => {
      const bounds = containerRef.current.getBoundingClientRect();

      canvas.width = bounds.width;
      canvas.height = bounds.height;
      canvas.style.width = `${bounds.width}px`;
      canvas.style.height = `${bounds.height}px`;
    };

    resizeCanvas();

    window.addEventListener("resize", resizeCanvas);

    const handleMouseMove = (event) => {
      const bounds = containerRef.current.getBoundingClientRect();
      mouse.x = event.clientX - bounds.left;
      mouse.y = event.clientY - bounds.top;
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    class Particle {
      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;

        this.baseX = this.x;
        this.baseY = this.y;

        this.size = Math.random() * 1.8 + 0.4;

        this.speedX = (Math.random() - 0.5) * 0.15;
        this.speedY = (Math.random() - 0.5) * 0.15;

        this.opacity = Math.random() * 0.6 + 0.2;

        this.twinkleSpeed = Math.random() * 0.02 + 0.005;
        this.twinkleDirection = Math.random() > 0.5 ? 1 : -1;
      }

      update() {
        this.baseX += this.speedX;
        this.baseY += this.speedY;

        if (this.baseX < 0) {
          this.baseX = canvas.width;
        }

        if (this.baseX > canvas.width) {
          this.baseX = 0;
        }

        if (this.baseY < 0) {
          this.baseY = canvas.height;
        }

        if (this.baseY > canvas.height) {
          this.baseY = 0;
        }

        this.opacity += this.twinkleSpeed * this.twinkleDirection;

        if (this.opacity >= 0.9 || this.opacity <= 0.15) {
          this.twinkleDirection *= -1;
        }

        let targetX = this.baseX;
        let targetY = this.baseY;

        if (mouse.x !== null && mouse.y !== null) {
          const dx = mouse.x - this.baseX;
          const dy = mouse.y - this.baseY;

          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < mouse.radius) {
            const force = (mouse.radius - distance) / mouse.radius;

            targetX -= dx * force * 0.08;
            targetY -= dy * force * 0.08;
          }
        }

        this.x += (targetX - this.x) * 0.04;
        this.y += (targetY - this.y) * 0.04;
      }

      draw() {
        ctx.beginPath();

        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);

        ctx.fillStyle = `rgba(255, 178, 56, ${this.opacity})`;

        ctx.shadowBlur = 8;
        ctx.shadowColor = "rgba(255, 178, 56, 0.8)";

        ctx.fill();

        ctx.shadowBlur = 0;
      }
    }

    let particles = [];

    const createParticles = () => {
      particles = [];

      const screenArea = canvas.width * canvas.height;

      let numberOfParticles = Math.floor(screenArea / 13000);

      numberOfParticles = Math.min(numberOfParticles, 140);

      for (let i = 0; i < numberOfParticles; i++) {
        particles.push(new Particle());
      }
    };

    createParticles();

    const drawConnections = () => {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;

          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            const opacity = (1 - distance / 100) * 0.08;

            ctx.beginPath();

            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);

            ctx.strokeStyle = `rgba(255, 178, 56, ${opacity})`;

            ctx.lineWidth = 0.5;

            ctx.stroke();
          }
        }
      }
    };

    const drawMouseGlow = () => {
      if (mouse.x === null || mouse.y === null) return;

      const gradient = ctx.createRadialGradient(
        mouse.x,
        mouse.y,
        0,
        mouse.x,
        mouse.y,
        280,
      );

      gradient.addColorStop(0, "rgba(255, 166, 35, 0.09)");

      gradient.addColorStop(0.4, "rgba(255, 166, 35, 0.035)");

      gradient.addColorStop(1, "rgba(255, 166, 35, 0)");

      ctx.fillStyle = gradient;

      ctx.fillRect(mouse.x - 280, mouse.y - 280, 560, 560);
    };

    const drawAmbientGlow = () => {
      const gradient = ctx.createRadialGradient(
        canvas.width / 2,
        canvas.height / 2,
        0,
        canvas.width / 2,
        canvas.height / 2,
        canvas.width * 0.6,
      );

      gradient.addColorStop(0, "rgba(255, 165, 30, 0.035)");

      gradient.addColorStop(1, "rgba(0, 0, 0, 0)");

      ctx.fillStyle = gradient;

      ctx.fillRect(0, 0, canvas.width, canvas.height);
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      drawAmbientGlow();

      drawMouseGlow();

      particles.forEach((particle) => {
        particle.update();
        particle.draw();
      });

      drawConnections();

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      resizeCanvas();
      createParticles();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);

      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
    >
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_25%,rgba(0,0,0,0.58)_100%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.025] [background-image:repeating-linear-gradient(0deg,rgba(255,255,255,0.4)_0px,rgba(255,255,255,0.4)_1px,transparent_1px,transparent_4px)]" />
    </div>
  );
};

export default CinematicBackground;
