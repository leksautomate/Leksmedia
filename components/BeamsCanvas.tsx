"use client";

import React, { useEffect, useRef } from "react";

export function BeamsCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    // Beams parameters
    interface Beam {
      x: number;
      y: number;
      speed: number;
      angle: number;
      length: number;
      opacity: number;
      width: number;
      hue: number;
    }

    const beams: Beam[] = Array.from({ length: 18 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      speed: 0.2 + Math.random() * 0.4,
      angle: (Math.PI / 4) + (Math.random() - 0.5) * 0.2, // ~45 deg
      length: 150 + Math.random() * 300,
      opacity: 0.05 + Math.random() * 0.15,
      width: 1 + Math.random() * 2.5,
      hue: 38 + Math.random() * 10, // warm gold
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Radial base ambient glow
      const radialGradient = ctx.createRadialGradient(
        width * 0.5,
        height * 0.2,
        50,
        width * 0.5,
        height * 0.2,
        width * 0.6
      );
      radialGradient.addColorStop(0, "rgba(184, 150, 90, 0.08)");
      radialGradient.addColorStop(0.5, "rgba(184, 150, 90, 0.02)");
      radialGradient.addColorStop(1, "rgba(8, 8, 10, 0)");
      ctx.fillStyle = radialGradient;
      ctx.fillRect(0, 0, width, height);

      beams.forEach((beam) => {
        beam.y -= beam.speed * 1.5;
        beam.x += beam.speed * 1.2;

        if (beam.y < -beam.length || beam.x > width + beam.length) {
          beam.y = height + Math.random() * 100;
          beam.x = Math.random() * width - 100;
        }

        const endX = beam.x + Math.cos(beam.angle) * beam.length;
        const endY = beam.y - Math.sin(beam.angle) * beam.length;

        const grad = ctx.createLinearGradient(beam.x, beam.y, endX, endY);
        grad.addColorStop(0, `hsla(${beam.hue}, 45%, 54%, 0)`);
        grad.addColorStop(0.5, `hsla(${beam.hue}, 48%, 56%, ${beam.opacity})`);
        grad.addColorStop(1, `hsla(${beam.hue}, 50%, 60%, 0)`);

        ctx.beginPath();
        ctx.strokeStyle = grad;
        ctx.lineWidth = beam.width;
        ctx.lineCap = "round";
        ctx.moveTo(beam.x, beam.y);
        ctx.lineTo(endX, endY);
        ctx.stroke();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none filter blur-[10px] opacity-80"
    />
  );
}
