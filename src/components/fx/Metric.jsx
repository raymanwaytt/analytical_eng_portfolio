import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";

const format = (n, decimals) =>
  decimals ? n.toFixed(decimals) : Math.round(n).toLocaleString("en-US");

// Counts up to a target when it enters view, easing out for a settled feel.
const Metric = ({ value, suffix = "", decimals = 0, className = "" }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const reduce = useReducedMotion();
  const [display, setDisplay] = useState(reduce ? value : 0);

  useEffect(() => {
    if (!inView || reduce) {
      if (reduce) setDisplay(value);
      return;
    }
    let raf;
    const duration = 1400;
    const start = performance.now();
    const tick = (now) => {
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      setDisplay(value * eased);
      if (t < 1) raf = requestAnimationFrame(tick);
      else setDisplay(value);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, reduce, value]);

  return (
    <span ref={ref} className={`tabnum ${className}`}>
      {format(display, decimals)}
      {suffix}
    </span>
  );
};

export default Metric;
