import { SectionShell, SectionHeader } from "../layout/Section";
import Reveal from "../fx/Reveal";
import { stages } from "../../data/portfolio";

const Pipeline = () => {
  return (
    <SectionShell id="pipeline">
      <SectionHeader
        index="02"
        label="Pipeline"
        title="How raw data becomes a decision."
        kicker="Every project runs the same loop. Four stages, each with a job to do — and a way to prove it did it."
      />

      <div className="relative mt-16">
        {/* Connective spine */}
        <div
          aria-hidden="true"
          className="absolute left-0 right-0 top-[46px] hidden h-px bg-gradient-to-r from-line via-line-2 to-signal/50 lg:block"
        />
        <div
          aria-hidden="true"
          className="absolute bottom-2 left-[23px] top-2 w-px bg-gradient-to-b from-line via-line-2 to-signal/50 lg:hidden"
        />

        <ol className="grid gap-10 lg:grid-cols-4 lg:gap-6">
          {stages.map((s, i) => (
            <Reveal
              as="li"
              key={s.key}
              delay={i * 0.1}
              className="group relative pl-16 lg:pl-0"
              data-probe={s.key}
            >
              <div className="relative mb-6 flex items-center lg:mb-8">
                <span className="absolute left-[-64px] flex h-12 w-12 items-center justify-center rounded-full border border-line-2 bg-panel font-mono text-xs text-mist transition-all duration-500 group-hover:border-signal group-hover:text-signal lg:static lg:h-[46px] lg:w-[46px]">
                  {s.index}
                </span>
              </div>

              <h3 className="font-display text-xl font-semibold text-chalk">
                {s.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-mist">{s.body}</p>

              <div className="mt-5 flex flex-wrap gap-1.5">
                {s.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-md border border-line px-2 py-1 font-mono text-[10px] uppercase tracking-[0.06em] text-haze transition-colors duration-500 group-hover:border-line-2"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </SectionShell>
  );
};

export default Pipeline;
