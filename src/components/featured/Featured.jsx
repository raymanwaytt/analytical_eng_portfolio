import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { featuredProject } from "../../data/projects";
import ToolStack from "../portfolio/ToolStack";

const Featured = () => {
  const project = featuredProject;

  return (
    <section className="bg-soft-white py-20 md:py-28" id="featured">
      <div className="content max-xxl:px-4">
        <p className="text-sm font-medium uppercase tracking-[0.18em] text-picto-primary">
          Featured project
        </p>
        <h2 className="section-title mt-3 max-w-3xl">{project.title}</h2>
        <p className="mt-4 max-w-2xl text-base text-soft-dark sm:text-lg">
          A flagship end-to-end pipeline that shows how I move data from source
          to decision-ready analytics.
        </p>

        <div className="mt-10 grid items-center gap-10 lg:grid-cols-2">
          <div className="overflow-hidden rounded-2xl bg-ink shadow-xl shadow-ink/10">
            <img
              src={project.image}
              alt={`${project.title} preview`}
              className="h-full min-h-72 w-full object-cover opacity-95"
            />
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-picto-primary">
              {project.category}
            </p>
            <dl className="mt-6 space-y-5">
              <div>
                <dt className="text-sm font-semibold text-ink">Problem</dt>
                <dd className="mt-1 text-[15px] leading-relaxed text-gray-600">
                  {project.problem}
                </dd>
              </div>
              <div>
                <dt className="text-sm font-semibold text-ink">What I built</dt>
                <dd className="mt-1 text-[15px] leading-relaxed text-gray-600">
                  {project.built}
                </dd>
              </div>
              <div>
                <dt className="text-sm font-semibold text-ink">Outcome</dt>
                <dd className="mt-1 text-[15px] leading-relaxed text-gray-600">
                  {project.outcome}
                </dd>
              </div>
            </dl>

            <ToolStack tools={project.tools} />

            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary mt-8 text-white"
            >
              View on GitHub
              <FontAwesomeIcon icon={faArrowRight} className="ms-2" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Featured;
