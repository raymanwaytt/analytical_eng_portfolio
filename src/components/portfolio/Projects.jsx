import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ToolStack from "./ToolStack";

const Projects = ({ data }) => {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white transition-[transform,box-shadow,border-color] duration-500 ease-out hover:-translate-y-1.5 hover:border-brand-200 hover:shadow-[var(--shadow-lift-lg)]">
      <div className="relative aspect-[16/10] overflow-hidden border-b border-slate-200/80 bg-ink-900">
        <img
          src={data?.image}
          alt={`${data?.title} preview`}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.06]"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-ink-950/45 via-transparent to-transparent"
          aria-hidden="true"
        />
        <p className="absolute bottom-3 left-3 inline-flex items-center rounded-md border border-white/15 bg-ink-950/65 px-2 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-brand-200 backdrop-blur-sm">
          {data?.category}
        </p>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-lg font-bold leading-snug tracking-[-0.015em] text-ink">
          {data?.title}
        </h3>
        <p className="mt-3 text-[14.5px] leading-relaxed text-slate-soft">
          {data?.description}
        </p>

        {/* mt-auto keeps the chips and link on a shared baseline across cards. */}
        <div className="mt-auto pt-5">
          {data?.tools && <ToolStack tools={data.tools} />}

          <a
            href={data?.link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex w-fit items-center gap-2 border-b border-transparent pb-1 text-sm font-semibold text-ink transition-colors duration-300 hover:border-brand-500 hover:text-brand-700"
          >
            View project
            <FontAwesomeIcon
              icon={faArrowRight}
              className="text-xs transition-transform duration-300 group-hover:translate-x-1"
              aria-hidden="true"
            />
          </a>
        </div>
      </div>
    </article>
  );
};

export default Projects;
