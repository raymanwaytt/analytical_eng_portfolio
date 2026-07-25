import { useEffect, useState } from "react";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { animateScroll } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 600);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <button
      type="button"
      aria-label="Back to top"
      onClick={() => animateScroll.scrollToTop({ duration: 600, smooth: true })}
      className={`fixed bottom-6 right-5 z-40 flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-ink-900/90 text-white shadow-[0_18px_36px_-16px_rgba(7,16,29,0.9)] backdrop-blur-sm transition-[opacity,transform,background-color] duration-300 hover:bg-brand-700 md:bottom-8 md:right-8 ${
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-3 opacity-0"
      }`}
    >
      <FontAwesomeIcon icon={faArrowUp} className="text-sm" aria-hidden="true" />
    </button>
  );
};

export default ScrollToTop;
