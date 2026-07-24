import { useState } from "react";
import { SectionShell, SectionHeader } from "../layout/Section";
import Reveal from "../fx/Reveal";
import ProjectModal from "./ProjectModal";
import { projects } from "../../data/portfolio";

const Builds = () => {
  const [openId, setOpenId] = useState(null);
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);
  const open = projects.find((p) => p.id === openId) || null;

  return (
    <SectionShell id="builds">
      <SectionHeader
        index="03"
        label="Builds"
        title="Systems, not screenshots."
        kicker="A selection of pipelines and platforms. Inspect any node to read the problem, the build, and what it produced."
      />

      <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {featured.map((p, i) => (
          <Reveal
            as="button"
            key={p.id}
            delay={i * 0.08}
            onClick={() => setOpenId(p.id)}
            data-probe="inspect"
            className="group relative flex flex-col overflow-hidden rounded-2xl border border-line bg-panel text-left transition-colors duration-500 hover:border-line-2"
          >
            <div className="relative aspect-[16/10] overflow-hidden">
              <img
                src={p.image}
                alt={p.title}
                loading="lazy"
                className="h-full w-full object-cover opacity-70 grayscale transition-all duration-700 group-hover:scale-[1.05] group-hover:opacity-90 group-hover:grayscale-0"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(180deg, transparent 30%, rgba(12,16,23,0.7) 78%, rgba(12,16,23,0.98))",
                }}
              />
              <span className="absolute right-3 top-3 chip border-signal/40 text-signal">
                {p.metric.value}
                <span className="text-mist"> {p.metric.label}</span>
              </span>
            </div>

            <div className="flex flex-1 flex-col p-6">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-mist">
                {p.category}
              </p>
              <h3 className="mt-2 font-display text-xl font-semibold text-chalk">
                {p.title}
              </h3>
              <p className="mt-1 text-sm text-mist">{p.subtitle}</p>

              <div className="mt-auto flex items-center justify-between pt-6">
                <div className="flex flex-wrap gap-1.5">
                  {p.tools.slice(0, 3).map((t) => (
                    <span
                      key={t}
                      className="rounded-md border border-line px-2 py-0.5 font-mono text-[10px] uppercase text-haze"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-signal opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  Inspect →
                </span>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <div className="mt-5 overflow-hidden rounded-2xl border border-line">
        {rest.map((p, i) => (
          <Reveal
            as="button"
            key={p.id}
            delay={i * 0.06}
            onClick={() => setOpenId(p.id)}
            data-probe="inspect"
            className="group flex w-full items-center gap-4 border-b border-line bg-panel px-5 py-5 text-left transition-colors duration-300 last:border-b-0 hover:bg-panel-2 sm:gap-6 sm:px-7"
          >
            <span className="font-mono text-xs text-mist">
              {String(featured.length + i + 1).padStart(2, "0")}
            </span>
            <div className="min-w-0 flex-1">
              <h3 className="truncate font-display text-lg font-semibold text-chalk">
                {p.title}
              </h3>
              <p className="truncate text-xs text-mist">{p.category} · {p.subtitle}</p>
            </div>
            <span className="hidden shrink-0 font-mono text-[10px] uppercase tracking-[0.14em] text-haze sm:inline">
              {p.metric.value} {p.metric.label}
            </span>
            <span className="shrink-0 font-mono text-signal transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Reveal>
        ))}
      </div>

      <ProjectModal project={open} onClose={() => setOpenId(null)} />
    </SectionShell>
  );
};

export default Builds;
