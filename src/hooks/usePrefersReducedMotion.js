import { useEffect, useState } from "react";

const QUERY = "(prefers-reduced-motion: reduce)";

/**
 * Tracks the user's reduced-motion preference so JS-driven motion (the tech
 * stack marquee) can be stopped outright rather than sped up by the CSS
 * override.
 */
const usePrefersReducedMotion = () => {
  const [prefersReduced, setPrefersReduced] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) return;

    const media = window.matchMedia(QUERY);
    setPrefersReduced(media.matches);

    const onChange = (event) => setPrefersReduced(event.matches);
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  return prefersReduced;
};

export default usePrefersReducedMotion;
