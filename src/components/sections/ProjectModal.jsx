import { useEffect } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

const Row = ({ label, children }) => (
  <div className="border-t border-line py-4">
    <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-signal">
      {label}
    </p>
    <p className="mt-2 text-sm leading-relaxed text-haze">{children}</p>
  </div>
);

const ProjectModal = ({ project, onClose }) => {
  const reduce = useReducedMotion();

  useEffect(() => {
    if (!project) return;
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-[80] flex items-center justify-center p-4 sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div
            className="absolute inset-0 bg-void/85 backdrop-blur-md"
            onClick={onClose}
          />
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={project.title}
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: 30, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={reduce ? { opacity: 0 } : { opacity: 0, y: 20, scale: 0.98 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 grid max-h-[88svh] w-full max-w-4xl overflow-hidden overflow-y-auto rounded-2xl border border-line-2 bg-panel md:grid-cols-2"
          >
            <div className="relative min-h-56 md:min-h-full">
              <img
                src={project.image}
                alt={project.title}
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(5,7,10,0.2), rgba(5,7,10,0.75)), linear-gradient(90deg, transparent, rgba(12,16,23,0.6))",
                }}
              />
              <div className="absolute left-5 top-5 flex items-center gap-2">
                <span className="chip border-signal/40 text-signal">
                  {project.metric.value}
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-mist">
                  {project.metric.label}
                </span>
              </div>
            </div>

            <div className="p-6 sm:p-8">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-mist">
                    {project.category}
                  </p>
                  <h3 className="mt-2 font-display text-2xl font-semibold text-chalk">
                    {project.title}
                  </h3>
                  <p className="mt-1 text-sm text-mist">{project.subtitle}</p>
                </div>
                <button
                  type="button"
                  onClick={onClose}
                  aria-label="Close"
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-line-2 text-mist transition-colors hover:border-signal hover:text-signal"
                >
                  ✕
                </button>
              </div>

              <div className="mt-6">
                <Row label="Problem">{project.problem}</Row>
                <Row label="What I built">{project.build}</Row>
                <Row label="Outcome">{project.outcome}</Row>
              </div>

              <div className="mt-5 flex flex-wrap gap-1.5">
                {project.tools.map((t) => (
                  <span
                    key={t}
                    className="rounded-md border border-line px-2 py-1 font-mono text-[10px] uppercase tracking-[0.06em] text-haze"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-flex items-center gap-2 rounded-full bg-signal px-5 py-2.5 font-mono text-xs font-semibold uppercase tracking-[0.14em] text-void transition-transform duration-300 hover:scale-[1.03]"
              >
                View on GitHub →
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;
