import { SectionShell, SectionHeader } from "../layout/Section";
import Reveal from "../fx/Reveal";
import { stack } from "../../data/portfolio";

const base = import.meta.env.BASE_URL;

const Stack = () => {
  return (
    <SectionShell id="stack">
      <SectionHeader
        index="05"
        label="Stack"
        title="The tools I reach for."
        kicker="Chosen for reliability and fit, not novelty — the kit behind the pipelines above."
      />

      <div className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-3 lg:grid-cols-4">
        {stack.map((tool, i) => (
          <Reveal
            key={tool.name}
            delay={(i % 4) * 0.05}
            className="group flex items-center gap-4 bg-panel p-6 transition-colors duration-500 hover:bg-panel-2"
            data-probe="tool"
          >
            <img
              src={`${base}${tool.icon}`}
              alt=""
              aria-hidden="true"
              loading="lazy"
              className="h-8 w-8 opacity-80 grayscale transition-all duration-500 group-hover:opacity-100 group-hover:grayscale-0"
            />
            <span className="font-mono text-sm text-haze transition-colors duration-500 group-hover:text-chalk">
              {tool.name}
            </span>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
};

export default Stack;
