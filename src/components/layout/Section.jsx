import Reveal from "../fx/Reveal";
import Decode from "../fx/Decode";

export const SectionShell = ({ id, children, className = "" }) => (
  <section id={id} className={`relative scroll-mt-20 py-24 md:py-32 ${className}`}>
    <div className="shell">{children}</div>
  </section>
);

export const SectionHeader = ({ index, label, title, kicker, className = "" }) => (
  <Reveal className={`max-w-3xl ${className}`}>
    <div className="flex items-center gap-4">
      <span className="eyebrow flex items-center gap-2 whitespace-nowrap">
        <span>{index} /</span>
        <Decode text={label} delay={200} />
      </span>
      <span className="hairline flex-1" />
    </div>
    <h2 className="mt-6 font-display text-[clamp(2rem,4.6vw,3.5rem)] font-semibold leading-[1.02] tracking-[-0.02em] text-chalk">
      {title}
    </h2>
    {kicker && (
      <p className="mt-5 max-w-xl text-base leading-relaxed text-haze sm:text-lg">
        {kicker}
      </p>
    )}
  </Reveal>
);
