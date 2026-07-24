import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";

const GLYPHS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789/#%*+=<>_";

// Resolves text out of noise, one settling character at a time.
const Decode = ({ text, className = "", as: Tag = "span", delay = 0 }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const reduce = useReducedMotion();
  const [output, setOutput] = useState(reduce ? text : "");

  useEffect(() => {
    if (!inView || reduce) {
      if (reduce) setOutput(text);
      return;
    }
    let raf;
    let frame = 0;
    const startFrame = Math.round((delay / 1000) * 60);
    const perChar = 3;

    const run = () => {
      const active = Math.floor((frame - startFrame) / perChar);
      let out = "";
      for (let i = 0; i < text.length; i++) {
        const ch = text[i];
        if (ch === " ") {
          out += " ";
        } else if (i < active) {
          out += ch;
        } else if (i < active + 6 && frame >= startFrame) {
          out += GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
        } else {
          out += frame >= startFrame ? " " : "";
        }
      }
      setOutput(out);
      frame += 1;
      if (active <= text.length) raf = requestAnimationFrame(run);
      else setOutput(text);
    };
    raf = requestAnimationFrame(run);
    return () => cancelAnimationFrame(raf);
  }, [inView, reduce, text, delay]);

  return (
    <Tag ref={ref} className={className} aria-label={text}>
      <span aria-hidden="true">{output || "\u00A0"}</span>
    </Tag>
  );
};

export default Decode;
