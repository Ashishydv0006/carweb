import React, { useEffect, useRef } from "react";
import "./SpiderCursor.css";

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

export default function SpiderCursor() {
  const canvasRef = useRef(null);
  const rafRef = useRef(null);
  const pointsRef = useRef([]);
  const cursorRef = useRef({ x: 0, y: 0, active: false });
  const lastSpawnRef = useRef(0);

  useEffect(() => {
    const prefersReduced = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
    const coarsePointer = window.matchMedia?.("(pointer: coarse)")?.matches;
    if (prefersReduced || coarsePointer) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const resize = () => {
      const dpr = clamp(window.devicePixelRatio || 1, 1, 2);
      canvas.width = Math.floor(window.innerWidth * dpr);
      canvas.height = Math.floor(window.innerHeight * dpr);
      canvas.style.width = "100%";
      canvas.style.height = "100%";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resize();

    const spawnPoint = (x, y, now) => {
      const points = pointsRef.current;
      const angle = Math.random() * Math.PI * 2;
      const speed = 0.35 + Math.random() * 0.75;
      points.push({
        x,
        y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        life: 1,
      });

      const maxPoints = 70;
      if (points.length > maxPoints) points.splice(0, points.length - maxPoints);

      lastSpawnRef.current = now;
    };

    const onMove = (e) => {
      const now = performance.now();
      cursorRef.current.active = true;
      cursorRef.current.x = e.clientX;
      cursorRef.current.y = e.clientY;

      const minInterval = 18;
      if (now - lastSpawnRef.current >= minInterval) {
        spawnPoint(e.clientX, e.clientY, now);
      }
    };

    const onLeave = () => {
      cursorRef.current.active = false;
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("resize", resize, { passive: true });
    window.addEventListener("blur", onLeave);
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("visibilitychange", onLeave);

    const tick = () => {
      const points = pointsRef.current;
      const cursor = cursorRef.current;

      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

      for (let i = points.length - 1; i >= 0; i -= 1) {
        const p = points[i];
        p.life -= 0.016;
        p.vx *= 0.92;
        p.vy *= 0.92;
        p.x += p.vx;
        p.y += p.vy;

        if (p.life <= 0) points.splice(i, 1);
      }

      const linkDist = 150;
      const linkDist2 = linkDist * linkDist;

      for (let i = 0; i < points.length; i += 1) {
        const a = points[i];

        if (cursor.active) {
          const dx = cursor.x - a.x;
          const dy = cursor.y - a.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < 190 * 190) {
            const t = 1 - Math.sqrt(d2) / 190;
            const alpha = 0.22 * t * a.life;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(cursor.x, cursor.y);
            ctx.strokeStyle = `rgba(212, 175, 55, ${alpha})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }

        for (let j = i + 1; j < points.length; j += 1) {
          const b = points[j];
          const dx = b.x - a.x;
          const dy = b.y - a.y;
          const d2 = dx * dx + dy * dy;
          if (d2 > linkDist2) continue;

          const t = 1 - Math.sqrt(d2) / linkDist;
          const alpha = 0.32 * t * Math.min(a.life, b.life);
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.strokeStyle = `rgba(99, 102, 241, ${alpha})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }

      for (let i = 0; i < points.length; i += 1) {
        const p = points[i];
        const alpha = 0.35 * p.life;
        ctx.beginPath();
        ctx.arc(p.x, p.y, 1.2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
        ctx.fill();
      }

      rafRef.current = window.requestAnimationFrame(tick);
    };

    rafRef.current = window.requestAnimationFrame(tick);

    return () => {
      if (rafRef.current) window.cancelAnimationFrame(rafRef.current);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("resize", resize);
      window.removeEventListener("blur", onLeave);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("visibilitychange", onLeave);
    };
  }, []);

  return <canvas ref={canvasRef} className="spider-cursor" aria-hidden="true" />;
}

