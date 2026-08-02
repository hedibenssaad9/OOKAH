"use client";

import { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  r: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  hue: number;
};

export function SmokeCanvas({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduceMotion) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = 0;
    let height = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let particles: Particle[] = [];
    let frame = 0;
    let raf = 0;
    let visible = true;

    function resize() {
      const rect = canvas!.parentElement!.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas!.width = width * dpr;
      canvas!.height = height * dpr;
      canvas!.style.width = `${width}px`;
      canvas!.style.height = `${height}px`;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function spawn() {
      particles.push({
        x: width * (0.3 + Math.random() * 0.4),
        y: height * (0.7 + Math.random() * 0.3),
        r: 40 + Math.random() * 60,
        vx: (Math.random() - 0.5) * 0.18,
        vy: -0.25 - Math.random() * 0.35,
        life: 0,
        maxLife: 500 + Math.random() * 400,
        hue: Math.random() > 0.5 ? 42 : 18,
      });
    }

    resize();
    for (let i = 0; i < 14; i++) spawn();

    const onResize = () => resize();
    window.addEventListener("resize", onResize);

    const io = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
      },
      { threshold: 0 }
    );
    io.observe(canvas);

    function tick() {
      raf = requestAnimationFrame(tick);
      if (!visible) return;
      frame++;
      if (frame % 2 !== 0) return;

      ctx!.clearRect(0, 0, width, height);
      ctx!.globalCompositeOperation = "lighter";

      particles.forEach((p) => {
        p.life++;
        p.x += p.vx;
        p.y += p.vy;
        p.r += 0.12;

        const t = p.life / p.maxLife;
        const alpha = Math.sin(Math.PI * t) * 0.05;

        if (alpha > 0.001) {
          const gradient = ctx!.createRadialGradient(
            p.x,
            p.y,
            0,
            p.x,
            p.y,
            p.r
          );
          gradient.addColorStop(0, `hsla(${p.hue}, 60%, 65%, ${alpha})`);
          gradient.addColorStop(1, `hsla(${p.hue}, 60%, 55%, 0)`);
          ctx!.fillStyle = gradient;
          ctx!.beginPath();
          ctx!.arc(p.x, p.y, p.r, 0, Math.PI * 2);
          ctx!.fill();
        }
      });

      particles = particles.filter((p) => p.life < p.maxLife);
      while (particles.length < 14) spawn();
    }

    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      io.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      aria-hidden="true"
    />
  );
}
