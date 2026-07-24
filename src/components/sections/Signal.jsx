import portrait from "../../assets/images/personk.jpeg";
import { SectionShell, SectionHeader } from "../layout/Section";
import Reveal from "../fx/Reveal";

const principles = [
  {
    k: "reliability",
    title: "Reliability first",
    body: "Pipelines that recover, alert, and stay honest under load — built for the moment things break, not just the happy path.",
  },
  {
    k: "modeling",
    title: "Model for the question",
    body: "Schemas and layers that make the next analysis obvious instead of archaeological.",
  },
  {
    k: "quality",
    title: "Quality as a contract",
    body: "Expectations encoded and tested on every run, so trust in the numbers isn't a leap of faith.",
  },
  {
    k: "delivery",
    title: "Speed that ships",
    body: "Datasets and dashboards fast enough that people actually use them to decide.",
  },
];

const Signal = () => {
  return (
    <SectionShell id="signal" className="dot-matrix">
      <SectionHeader
        index="01"
        label="Signal"
        title={
          <>
            More than someone who
            <br className="hidden sm:block" /> lists projects.
          </>
        }
      />

      <div className="mt-14 grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
        <div>
          <Reveal>
            <p className="text-xl leading-relaxed text-chalk sm:text-2xl">
              I treat data like a product. That means owning it end to end — from
              the awkward source system nobody documented, to the model an
              executive stakes a decision on.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-haze">
              Across lending, payments, ERP, and research, I've built the
              platforms that make analytics trustworthy at scale: warehouses
              consolidating a dozen source systems, Airflow pipelines moving
              hundreds of thousands of transactions a day, and dbt models that
              stay documented and tested as the business shifts underneath them.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-2">
            {principles.map((p, i) => (
              <Reveal
                key={p.k}
                delay={i * 0.08}
                className="group bg-panel p-6 transition-colors duration-500 hover:bg-panel-2"
                data-probe={p.k}
              >
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-signal">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 font-display text-lg font-semibold text-chalk">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-mist">{p.body}</p>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={0.15} className="lg:pt-2">
          <figure className="group relative overflow-hidden rounded-2xl border border-line-2">
            <div
              className="pointer-events-none absolute inset-0 z-10 mix-blend-color"
              style={{
                background:
                  "linear-gradient(180deg, rgba(200,255,45,0.14), rgba(67,231,196,0.06) 60%, transparent)",
              }}
            />
            <div
              className="pointer-events-none absolute inset-0 z-10"
              style={{
                background:
                  "linear-gradient(180deg, transparent 40%, rgba(5,7,10,0.55) 78%, rgba(5,7,10,0.95))",
              }}
            />
            <img
              src={portrait}
              alt={"Abdulrahman Aruna"}
              loading="lazy"
              className="h-full max-h-[560px] w-full object-cover object-top grayscale transition-all duration-700 group-hover:grayscale-0"
            />
            <figcaption className="absolute inset-x-0 bottom-0 z-20 flex items-end justify-between p-5">
              <div>
                <p className="font-display text-lg font-semibold text-chalk">
                  Abdulrahman Aruna
                </p>
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-mist">
                  Lagos, Nigeria
                </p>
              </div>
              <span className="chip border-signal/40 text-signal">
                <span className="h-1.5 w-1.5 rounded-full bg-signal" />
                Available
              </span>
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </SectionShell>
  );
};

export default Signal;
