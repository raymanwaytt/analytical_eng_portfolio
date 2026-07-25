import Reveal from "../common/reveal/Reveal";
import SectionHeading from "../common/sectionHeading/SectionHeading";
import ToolStack from "../portfolio/ToolStack";

const steps = [
  {
    id: 1,
    title: "Ingest & orchestrate",
    description:
      "Pull data from APIs, files, and operational systems on a reliable schedule with clear failure handling.",
    tools: ["Python", "Airflow", "APIs"],
  },
  {
    id: 2,
    title: "Transform & model",
    description:
      "Shape raw feeds into layered warehouses with tested transformations, quality checks, and analytics-ready models.",
    tools: ["dbt", "SQL", "BigQuery"],
  },
  {
    id: 3,
    title: "Deliver insights",
    description:
      "Expose trustworthy datasets and dashboards so teams can make decisions without hunting for source truth.",
    tools: ["Power BI", "Tableau", "Looker"],
  },
];

const Approach = () => {
  return (
    <section className="section dark-band grid-texture" id="approach">
      <div className="shell relative">
        <SectionHeading
          eyebrow="How I work"
          title="One pipeline, three dependable stages"
          lede="A practical analytics engineering loop that carries data from source systems all the way to decision-ready outputs."
          tone="light-text"
        />

        <ol className="mt-14 grid gap-10 md:mt-20 md:grid-cols-3 md:gap-8">
          {steps.map((step, index) => (
            <Reveal
              as="li"
              key={step.id}
              delay={index * 130}
              className="relative flex h-full flex-col border-t border-white/15 pt-8"
            >
              <span
                className="absolute -top-[4.5px] left-0 h-2.5 w-2.5 rounded-full bg-brand-300 shadow-[0_0_0_4px_rgba(110,215,198,0.16)]"
                aria-hidden="true"
              />
              <p className="font-mono text-xs tracking-[0.2em] text-brand-300">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-4 font-display text-2xl font-semibold tracking-[-0.02em] text-white">
                {step.title}
              </h3>
              <p className="mt-3 max-w-md text-[15px] leading-relaxed text-white/65">
                {step.description}
              </p>
              <ToolStack tools={step.tools} tone="light" className="mt-auto pt-6" />
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Approach;
