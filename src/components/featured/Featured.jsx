import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { featuredProject } from "../../data/projects";
import Reveal from "../common/reveal/Reveal";
import SectionHeading from "../common/sectionHeading/SectionHeading";

const Featured = () => {
  const project = featuredProject;

  const rows = [
    { label: "Problem", value: project.problem },
    { label: "What I built", value: project.built },
    { label: "Outcome", value: project.outcome },
  ];

  return (
    <section className="section bg-paper" id="featured">
      <div className="shell">
        <SectionHeading
          eyebrow="Featured project"
          title={project.title}
          lede="A flagship end-to-end pipeline that shows how I move data from source to decision-ready analytics."
        />

        <Reveal delay={120} className="mt-12 md:mt-16">
          <article className="panel group overflow-hidden lg:grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
            <div className="relative overflow-hidden bg-ink-900">
              <img
                src={project.image}
                alt={`${project.title} preview`}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.05] max-lg:aspect-[16/10]"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-ink-950/60 via-transparent to-transparent"
                aria-hidden="true"
              />
              <p className="absolute bottom-4 left-4 inline-flex items-center rounded-md border border-white/15 bg-ink-950/65 px-2.5 py-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-brand-200 backdrop-blur-sm">
                {project.category}
              </p>
            </div>

            <div className="p-6 sm:p-9 lg:p-11">
              <dl className="divide-y divide-slate-200/70 border-y border-slate-200/70">
                {rows.map((row) => (
                  <div
                    key={row.label}
                    className="grid gap-1.5 py-4 sm:grid-cols-[7.5rem_1fr] sm:gap-6"
                  >
                    <dt className="pt-0.5 font-mono text-[10px] uppercase tracking-[0.18em] text-faint">
                      {row.label}
                    </dt>
                    <dd className="text-[15px] leading-relaxed text-slate-soft">
                      {row.value}
                    </dd>
                  </div>
                ))}
                <div className="grid gap-2.5 py-4 sm:grid-cols-[7.5rem_1fr] sm:gap-6">
                  <dt className="pt-1 font-mono text-[10px] uppercase tracking-[0.18em] text-faint">
                    Stack
                  </dt>
                  <dd className="flex flex-wrap gap-2">
                    {project.tools.map((tool) => (
                      <span className="tool-chip" key={tool}>
                        {tool}
                      </span>
                    ))}
                  </dd>
                </div>
              </dl>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="cta cta--primary mt-7"
              >
                View on GitHub
                <FontAwesomeIcon
                  icon={faArrowUpRightFromSquare}
                  className="cta__icon text-xs"
                  aria-hidden="true"
                />
              </a>
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  );
};

export default Featured;
