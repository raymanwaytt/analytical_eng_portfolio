import { useEffect, useRef } from "react";

// Hand-written Canvas 2D "refinery": particles enter as wide, muted noise on
// the left and funnel into tight, luminous signal lanes on the right — a
// literal picture of the work. Cursor acts as a probe that parts the stream.
// Chosen over WebGL for a lighter bundle, broad reliability, and easy
// reduced-motion + visibility pausing.
const NOISE = [139, 151, 168];
const SIGNAL = [200, 255, 45];
const LANES = 7;

const lerp = (a, b, t) => a + (b - a) * t;
const mix = (c1, c2, t) => [
  Math.round(lerp(c1[0], c2[0], t)),
  Math.round(lerp(c1[1], c2[1], t)),
  Math.round(lerp(c1[2], c2[2], t)),
];

const RefineryCanvas = () => {
  const canvasRef = useRef(null);
  const rafRef = useRef(0);
  const stateRef = useRef({
    w: 0,
    h: 0,
    dpr: 1,
    particles: [],
    lanes: [],
    pointer: { x: -9999, y: -9999, active: false },
    running: false,
    reduce: false,
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    const S = stateRef.current;
    S.reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const buildLanes = () => {
      S.lanes = [];
      const top = S.h * 0.16;
      const span = S.h * 0.68;
      for (let i = 0; i < LANES; i++) {
        S.lanes.push(top + (span * i) / (LANES - 1));
      }
    };

    const spawn = (fromLeft) => {
      const lane = S.lanes[(Math.random() * LANES) | 0] || S.h / 2;
      const x = fromLeft ? -Math.random() * S.w * 0.1 : Math.random() * S.w;
      return {
        x,
        y: lane + (Math.random() - 0.5) * S.h * 0.7,
        px: x,
        py: lane,
        laneY: lane,
        scatter: (Math.random() - 0.5) * S.h * 0.62,
        speed: 0.4 + Math.random() * 1.1,
        amp: 6 + Math.random() * 26,
        phase: Math.random() * Math.PI * 2,
        phaseSpeed: 0.0006 + Math.random() * 0.0018,
        size: 0.6 + Math.random() * 1.4,
      };
    };

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      S.dpr = Math.min(window.devicePixelRatio || 1, 2);
      S.w = rect.width;
      S.h = rect.height;
      canvas.width = Math.max(1, Math.floor(S.w * S.dpr));
      canvas.height = Math.max(1, Math.floor(S.h * S.dpr));
      ctx.setTransform(S.dpr, 0, 0, S.dpr, 0, 0);
      buildLanes();
      const density = Math.round((S.w * S.h) / 8200);
      const count = Math.max(70, Math.min(240, density));
      S.particles = Array.from({ length: count }, () => spawn(false));
      if (S.reduce) drawStatic();
    };

    const drawStatic = () => {
      ctx.clearRect(0, 0, S.w, S.h);
      drawGuides();
      for (const p of S.particles) {
        const t = p.x / S.w;
        const y = p.laneY + p.scatter * (1 - t);
        const [r, g, b] = mix(NOISE, SIGNAL, Math.pow(t, 1.3));
        ctx.fillStyle = `rgba(${r},${g},${b},${0.2 + t * 0.6})`;
        ctx.beginPath();
        ctx.arc(p.x, y, p.size * (0.7 + t), 0, Math.PI * 2);
        ctx.fill();
      }
      drawSinks(0);
    };

    const drawGuides = () => {
      ctx.save();
      ctx.strokeStyle = "rgba(39,50,65,0.5)";
      ctx.lineWidth = 1;
      for (let i = 1; i <= 3; i++) {
        const x = S.w * (0.32 + i * 0.16);
        ctx.beginPath();
        ctx.moveTo(x, S.h * 0.1);
        ctx.lineTo(x, S.h * 0.9);
        ctx.stroke();
      }
      ctx.restore();
    };

    const drawSinks = (now) => {
      for (const laneY of S.lanes) {
        const pulse = 0.5 + 0.5 * Math.sin(now * 0.002 + laneY);
        ctx.beginPath();
        ctx.arc(S.w - 6, laneY, 1.6 + pulse * 1.4, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(200,255,45,${0.4 + pulse * 0.5})`;
        ctx.fill();
      }
    };

    const frame = (now) => {
      if (!S.running) return;
      // Trail: fade the previous frame instead of clearing hard.
      ctx.fillStyle = "rgba(5,7,10,0.22)";
      ctx.fillRect(0, 0, S.w, S.h);
      drawGuides();

      const P = S.pointer;
      const R = 130;

      for (const p of S.particles) {
        p.px = p.x;
        p.py = p.y;
        p.x += p.speed;
        const t = Math.max(0, Math.min(1, p.x / S.w));
        const wobble = Math.sin(now * p.phaseSpeed + p.phase) * p.amp * (1 - t);
        let y = p.laneY + p.scatter * (1 - t) + wobble;

        if (P.active) {
          const dx = p.x - P.x;
          const dy = y - P.y;
          const dist = Math.hypot(dx, dy);
          if (dist < R && dist > 0.01) {
            const force = (1 - dist / R) * 26;
            y += (dy / dist) * force;
          }
        }
        p.y = y;

        if (p.x > S.w + 4) {
          Object.assign(p, spawn(true));
          continue;
        }

        const easeT = Math.pow(t, 1.3);
        const [r, g, b] = mix(NOISE, SIGNAL, easeT);
        const alpha = 0.14 + easeT * 0.72;
        ctx.strokeStyle = `rgba(${r},${g},${b},${alpha})`;
        ctx.lineWidth = p.size * (0.55 + easeT * 1.1);
        ctx.beginPath();
        ctx.moveTo(p.px, p.py);
        ctx.lineTo(p.x, p.y);
        ctx.stroke();

        if (easeT > 0.62) {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size * (1 + easeT), 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${r},${g},${b},${(easeT - 0.5) * 0.35})`;
          ctx.fill();
        }
      }

      drawSinks(now);
      rafRef.current = requestAnimationFrame(frame);
    };

    const start = () => {
      if (S.running || S.reduce) return;
      S.running = true;
      rafRef.current = requestAnimationFrame(frame);
    };
    const stop = () => {
      S.running = false;
      cancelAnimationFrame(rafRef.current);
    };

    const onPointerMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      S.pointer.x = e.clientX - rect.left;
      S.pointer.y = e.clientY - rect.top;
      S.pointer.active =
        S.pointer.x >= 0 &&
        S.pointer.x <= S.w &&
        S.pointer.y >= 0 &&
        S.pointer.y <= S.h;
    };
    const onPointerLeave = () => {
      S.pointer.active = false;
    };

    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !document.hidden) start();
        else stop();
      },
      { threshold: 0.05 }
    );
    io.observe(canvas);

    const onVisibility = () => {
      if (document.hidden) stop();
      else start();
    };

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("pointerout", onPointerLeave);
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      stop();
      ro.disconnect();
      io.disconnect();
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerout", onPointerLeave);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="absolute inset-0 h-full w-full"
    />
  );
};

export default RefineryCanvas;
