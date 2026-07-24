import { SectionShell } from "../layout/Section";
import Reveal from "../fx/Reveal";
import { profile } from "../../data/portfolio";

const links = [
  { label: "LinkedIn", href: profile.linkedin, tag: "connect" },
  { label: "GitHub", href: profile.github, tag: "code" },
  { label: "Download CV", href: profile.cv, tag: "open" },
];

const Deliver = () => {
  return (
    <SectionShell id="deliver" className="pb-16">
      <div className="flex items-center gap-4">
        <span className="eyebrow whitespace-nowrap">06 / Deliver</span>
        <span className="hairline flex-1" />
      </div>

      <div className="mt-12 grid gap-14 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <Reveal>
            <p className="chip mb-6 border-signal/40 text-signal">
              <span className="h-1.5 w-1.5 rounded-full bg-signal" />
              Open to roles &amp; freelance builds
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="font-display text-[clamp(2.2rem,6vw,4.5rem)] font-semibold leading-[0.98] tracking-[-0.03em] text-chalk">
              Let&apos;s move a
              <br />
              <span className="signal-text">decision</span> forward.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-md text-base leading-relaxed text-haze">
              If you have messy data and a decision waiting on it — a pipeline to
              build, a warehouse to model, or dashboards people can trust — I'd
              like to hear about it.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <a
              href={`mailto:${profile.email}`}
              data-probe="email"
              className="link-underline mt-10 inline-block break-all font-display text-2xl font-semibold text-chalk hover:text-signal sm:text-3xl"
            >
              {profile.email}
            </a>
          </Reveal>
        </div>

        <div className="lg:pt-4">
          <Reveal className="overflow-hidden rounded-2xl border border-line">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                data-probe={l.tag}
                className="group flex items-center justify-between border-b border-line bg-panel px-6 py-6 transition-colors duration-300 last:border-b-0 hover:bg-panel-2"
              >
                <span className="font-display text-lg font-semibold text-chalk">
                  {l.label}
                </span>
                <span className="font-mono text-signal transition-transform duration-300 group-hover:translate-x-1">
                  ↗
                </span>
              </a>
            ))}
          </Reveal>

          <Reveal delay={0.1} className="mt-6 grid grid-cols-2 gap-4">
            <div className="rounded-2xl border border-line bg-panel p-5">
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-mist">
                Based in
              </p>
              <p className="mt-2 font-display text-base text-chalk">
                {profile.location}
              </p>
            </div>
            <div className="rounded-2xl border border-line bg-panel p-5">
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-mist">
                Phone
              </p>
              <a
                href={`tel:${profile.phone}`}
                className="mt-2 block font-display text-base text-chalk hover:text-signal"
              >
                {profile.phone}
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </SectionShell>
  );
};

export default Deliver;
