import { motion, useReducedMotion } from "framer-motion";
import RefineryCanvas from "./RefineryCanvas";
import Metric from "../fx/Metric";
import { profile, signals } from "../../data/portfolio";

const rise = {
  hidden: { opacity: 0, y: 26, filter: "blur(8px)" },
  show: (i) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.9, delay: 0.15 + i * 0.12, ease: [0.16, 1, 0.3, 1] },
  }),
};

const Hero = () => {
  const reduce = useReducedMotion();
  const anim = (i) => (reduce ? {} : { custom: i, variants: rise, initial: "hidden", animate: "show" });

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: reduce ? "auto" : "smooth" });
  };

  return (
    <section id="source" className="relative min-h-[100svh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <RefineryCanvas />
      </div>

      {/* Readability wash: dark on the left where the copy lives. */}
      <div
        className="absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            "linear-gradient(90deg, #05070a 0%, rgba(5,7,10,0.86) 34%, rgba(5,7,10,0.34) 64%, rgba(5,7,10,0.05) 100%)",
        }}
      />
      <div
        className="absolute inset-x-0 bottom-0 h-40"
        aria-hidden="true"
        style={{ background: "linear-gradient(180deg, transparent, #05070a)" }}
      />

      {/* Stream axis labels */}
      <div className="pointer-events-none absolute inset-0 hidden md:block">
        <span className="absolute left-6 top-1/2 -translate-y-1/2 font-mono text-[10px] uppercase tracking-[0.3em] text-mist/70 [writing-mode:vertical-rl]">
          Noise
        </span>
        <span className="absolute right-6 top-1/2 -translate-y-1/2 font-mono text-[10px] uppercase tracking-[0.3em] text-signal/80 [writing-mode:vertical-rl]">
          Signal
        </span>
      </div>

      <div className="relative z-10 flex min-h-[100svh] items-center">
        <div className="shell w-full">
          <div className="max-w-3xl pt-24">
            <motion.p {...anim(0)} className="eyebrow mb-6">
              {profile.role} · {profile.location}
            </motion.p>

            <motion.h1
              {...anim(1)}
              className="font-display text-[clamp(2.6rem,7.2vw,6rem)] font-semibold leading-[0.95] tracking-[-0.03em] text-chalk"
            >
              I turn raw, noisy data
              <br />
              into <span className="signal-text">decisions</span> that hold up.
            </motion.h1>

            <motion.p
              {...anim(2)}
              className="mt-8 max-w-xl text-base leading-relaxed text-haze sm:text-lg"
            >
              {profile.name} — a data &amp; analytics engineer building the
              pipelines, warehouses, and models between messy source systems and
              trustworthy insight.
            </motion.p>

            <motion.div {...anim(3)} className="mt-10 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={() => scrollTo("pipeline")}
                data-probe="run"
                className="group inline-flex items-center gap-3 rounded-full bg-signal px-6 py-3 font-mono text-xs font-semibold uppercase tracking-[0.14em] text-void transition-transform duration-300 hover:scale-[1.03]"
              >
                Explore the pipeline
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </button>
              <a
                href={profile.cv}
                target="_blank"
                rel="noopener noreferrer"
                data-probe="open"
                className="inline-flex items-center gap-2 rounded-full border border-line-2 px-6 py-3 font-mono text-xs uppercase tracking-[0.14em] text-haze transition-colors duration-300 hover:border-signal hover:text-signal"
              >
                Download CV
              </a>
            </motion.div>

            <motion.dl
              {...anim(4)}
              className="mt-14 grid max-w-2xl grid-cols-2 gap-x-8 gap-y-6 border-t border-line pt-8 sm:grid-cols-4"
            >
              {signals.map((s) => (
                <div key={s.label}>
                  <dt className="font-display text-2xl font-semibold text-chalk sm:text-[1.7rem]">
                    <Metric
                      value={s.value}
                      suffix={s.suffix}
                      decimals={s.decimals || 0}
                    />
                  </dt>
                  <dd className="mt-1 font-mono text-[10px] uppercase leading-tight tracking-[0.1em] text-mist">
                    {s.label}
                  </dd>
                </div>
              ))}
            </motion.dl>
          </div>
        </div>
      </div>

      {!reduce && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 1 }}
          className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 md:flex"
        >
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-mist">
            Scroll
          </span>
          <motion.span
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="h-8 w-px bg-gradient-to-b from-signal to-transparent"
          />
        </motion.div>
      )}
    </section>
  );
};

export default Hero;
