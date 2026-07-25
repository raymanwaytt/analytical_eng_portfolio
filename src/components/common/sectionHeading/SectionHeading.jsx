import Reveal from "../reveal/Reveal";

const SectionHeading = ({
  eyebrow,
  title,
  lede,
  align = "left",
  tone = "dark-text",
  className = "",
}) => {
  const light = tone === "light-text";

  return (
    <Reveal
      className={`section-head ${align === "center" ? "section-head--center" : ""} ${className}`.trim()}
    >
      {eyebrow && (
        <p className={`eyebrow ${light ? "eyebrow--light" : ""}`.trim()}>
          <span className="eyebrow__rule" aria-hidden="true" />
          {eyebrow}
        </p>
      )}
      <h2 className={`section-title ${light ? "text-white" : "text-ink"}`}>{title}</h2>
      {lede && <p className={`lede ${light ? "lede--light" : ""}`.trim()}>{lede}</p>}
    </Reveal>
  );
};

export default SectionHeading;
