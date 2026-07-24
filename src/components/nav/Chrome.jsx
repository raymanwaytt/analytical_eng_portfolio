import { useState } from "react";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { useActiveSection } from "../../hooks/useActiveSection";
import { profile, sections } from "../../data/portfolio";

const ids = sections.map((s) => s.id);

const Chrome = () => {
  const active = useActiveSection(ids);
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  const go = (id) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Top scroll-progress filament */}
      <motion.div
        aria-hidden="true"
        style={{ scaleX: progress }}
        className="fixed left-0 top-0 z-[70] h-[2px] w-full origin-left bg-signal"
      />

      {/* Top chrome */}
      <header className="fixed inset-x-0 top-0 z-[65]">
        <div className="shell flex items-center justify-between py-4">
          <button
            type="button"
            onClick={() => go("source")}
            data-probe="top"
            className="group flex items-center gap-2.5"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-signal opacity-70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-signal" />
            </span>
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-chalk">
              Aruna
              <span className="text-mist">/AA</span>
            </span>
          </button>

          <div className="flex items-center gap-5">
            <a
              href={profile.cv}
              target="_blank"
              rel="noopener noreferrer"
              data-probe="open"
              className="link-underline hidden font-mono text-xs uppercase tracking-[0.18em] text-haze hover:text-chalk sm:inline"
            >
              CV
            </a>
            <button
              type="button"
              onClick={() => go("deliver")}
              data-probe="reach"
              className="hidden rounded-full border border-line-2 px-4 py-1.5 font-mono text-xs uppercase tracking-[0.16em] text-haze transition-colors duration-300 hover:border-signal hover:text-signal sm:inline-block"
            >
              Contact
            </button>
            <button
              type="button"
              onClick={() => setMenuOpen((v) => !v)}
              aria-label="Toggle navigation"
              aria-expanded={menuOpen}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-line-2 lg:hidden"
            >
              <span className="relative block h-3 w-4">
                <span
                  className={`absolute left-0 h-[1.5px] w-full bg-chalk transition-all duration-300 ${
                    menuOpen ? "top-1/2 rotate-45" : "top-0"
                  }`}
                />
                <span
                  className={`absolute bottom-0 left-0 h-[1.5px] w-full bg-chalk transition-all duration-300 ${
                    menuOpen ? "bottom-1/2 -rotate-45" : ""
                  }`}
                />
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Desktop pipeline rail */}
      <nav
        aria-label="Sections"
        className="fixed right-6 top-1/2 z-[65] hidden -translate-y-1/2 lg:block"
      >
        <ul className="flex flex-col gap-1">
          {sections.map((s) => {
            const isActive = active === s.id;
            return (
              <li key={s.id}>
                <button
                  type="button"
                  onClick={() => go(s.id)}
                  data-probe={s.label.toLowerCase()}
                  className="group flex items-center justify-end gap-3 py-1.5"
                >
                  <span
                    className={`font-mono text-[10px] uppercase tracking-[0.2em] transition-all duration-300 ${
                      isActive
                        ? "text-signal opacity-100"
                        : "text-mist opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0"
                    }`}
                  >
                    {s.index} {s.label}
                  </span>
                  <span className="relative flex h-3 w-3 items-center justify-center">
                    <span
                      className={`block rounded-full transition-all duration-300 ${
                        isActive
                          ? "h-3 w-3 bg-signal"
                          : "h-1.5 w-1.5 bg-line-2 group-hover:bg-haze"
                      }`}
                    />
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Mobile fullscreen menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[64] bg-void/95 backdrop-blur-xl lg:hidden"
          >
            <div className="shell flex h-full flex-col justify-center">
              <ul className="flex flex-col gap-1">
                {sections.map((s, i) => (
                  <motion.li
                    key={s.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * i + 0.1 }}
                  >
                    <button
                      type="button"
                      onClick={() => go(s.id)}
                      className="flex w-full items-baseline gap-4 border-b border-line py-4 text-left"
                    >
                      <span className="font-mono text-xs text-mist">{s.index}</span>
                      <span
                        className={`font-display text-3xl font-semibold ${
                          active === s.id ? "text-signal" : "text-chalk"
                        }`}
                      >
                        {s.label}
                      </span>
                    </button>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chrome;
