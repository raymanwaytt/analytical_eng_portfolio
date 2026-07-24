import { SectionShell, SectionHeader } from "../layout/Section";
import Reveal from "../fx/Reveal";
import { experience } from "../../data/portfolio";

const StatusDot = ({ status }) => {
  if (status === "running") {
    return (
      <span className="relative flex h-3 w-3">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-signal opacity-70" />
        <span className="relative inline-flex h-3 w-3 rounded-full bg-signal" />
      </span>
    );
  }
  return <span className="block h-3 w-3 rounded-full border-2 border-signal-dim bg-void" />;
};

const Trace = () => {
  return (
    <SectionShell id="trace" className="dot-matrix">
      <SectionHeader
        index="04"
        label="Trace"
        title="Where the work has run."
        kicker="A career read like an execution log — each role a run, with the systems it shipped and the scale it held."
      />

      <div className="relative mt-16">
        <div
          aria-hidden="true"
          className="absolute bottom-0 left-[7px] top-1 w-px bg-gradient-to-b from-signal via-line-2 to-transparent"
        />

        <ol className="flex flex-col gap-4">
          {experience.map((job, i) => (
            <Reveal as="li" key={job.id} delay={i * 0.06} className="relative pl-10">
              <span className="absolute left-0 top-1.5 flex items-center justify-center">
                <StatusDot status={job.status} />
              </span>

              <div className="rounded-2xl border border-line bg-panel p-6 transition-colors duration-500 hover:border-line-2 sm:p-7">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                  <h3 className="font-display text-xl font-semibold text-chalk">
                    {job.company}
                  </h3>
                  <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-mist">
                    {job.period}
                  </span>
                </div>

                <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1">
                  <span className="text-sm font-medium text-signal">{job.role}</span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-mist">
                    {job.location}
                  </span>
                  <span
                    className={`font-mono text-[10px] uppercase tracking-[0.14em] ${
                      job.status === "running" ? "text-signal" : "text-mist"
                    }`}
                  >
                    · {job.status === "running" ? "active" : "shipped"}
                  </span>
                </div>

                <p className="mt-4 text-sm leading-relaxed text-haze">{job.summary}</p>

                <ul className="mt-4 flex flex-col gap-2">
                  {job.highlights.map((h, hi) => (
                    <li key={hi} className="flex gap-3 text-sm leading-relaxed text-mist">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-signal-dim" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap gap-1.5">
                  {job.stack.map((t) => (
                    <span
                      key={t}
                      className="rounded-md border border-line px-2 py-1 font-mono text-[10px] uppercase tracking-[0.06em] text-haze"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </SectionShell>
  );
};

export default Trace;
