import { useEffect, useRef, useState } from "react";
import { useMediaQuery } from "../../hooks/useMediaQuery";

// A "data probe" cursor: a precise ring that reads coordinates and locks
// onto interactive targets. Desktop / fine-pointer only.
const Cursor = () => {
  const fine = useMediaQuery("(pointer: fine)");
  const reduce = useMediaQuery("(prefers-reduced-motion: reduce)");
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const [label, setLabel] = useState("");
  const [hidden, setHidden] = useState(true);

  const state = useRef({
    x: 0,
    y: 0,
    rx: 0,
    ry: 0,
    active: false,
  });

  useEffect(() => {
    if (!fine || reduce) return;
    document.documentElement.classList.add("probe-active");

    const onMove = (e) => {
      const s = state.current;
      s.x = e.clientX;
      s.y = e.clientY;
      if (hidden) setHidden(false);

      const target = e.target.closest?.("[data-probe]");
      if (target) {
        if (!s.active) {
          s.active = true;
          setLabel(target.getAttribute("data-probe") || "");
        } else {
          const next = target.getAttribute("data-probe") || "";
          setLabel((prev) => (prev === next ? prev : next));
        }
      } else if (s.active) {
        s.active = false;
        setLabel("");
      }
    };

    const onLeave = () => setHidden(true);
    const onDown = () => ringRef.current?.classList.add("is-down");
    const onUp = () => ringRef.current?.classList.remove("is-down");

    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerdown", onDown);
    window.addEventListener("pointerup", onUp);
    document.addEventListener("mouseleave", onLeave);

    let raf;
    const loop = () => {
      const s = state.current;
      s.rx += (s.x - s.rx) * 0.18;
      s.ry += (s.y - s.ry) * 0.18;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${s.x}px, ${s.y}px, 0)`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${s.rx}px, ${s.ry}px, 0) translate(-50%, -50%)`;
      }
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    return () => {
      document.documentElement.classList.remove("probe-active");
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerdown", onDown);
      window.removeEventListener("pointerup", onUp);
      document.removeEventListener("mouseleave", onLeave);
      cancelAnimationFrame(raf);
    };
  }, [fine, reduce, hidden]);

  if (!fine || reduce) return null;

  return (
    <div
      aria-hidden="true"
      style={{ opacity: hidden ? 0 : 1 }}
      className="pointer-events-none fixed inset-0 z-[9999] transition-opacity duration-300"
    >
      <div
        ref={dotRef}
        className="fixed left-0 top-0 -ml-[2px] -mt-[2px] h-1 w-1 rounded-full bg-signal"
      />
      <div
        ref={ringRef}
        className={`probe-ring fixed left-0 top-0 flex items-center justify-center rounded-full border transition-[width,height,background-color,border-color] duration-300 ${
          label
            ? "h-16 w-16 border-signal bg-signal/10"
            : "h-8 w-8 border-mist/50 bg-transparent"
        }`}
      >
        {label ? (
          <span className="font-mono text-[8px] uppercase tracking-[0.18em] text-signal">
            {label}
          </span>
        ) : null}
      </div>
    </div>
  );
};

export default Cursor;
