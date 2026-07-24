import Projects from "./Projects";
import { projectData } from "../../data/projects";

const Portfolio = () => {
  return (
    <div
      className="content mt-10 mb-10 max-xxl:p-2 md:mt-15 md:mb-25 xl:mt-25"
      id="portfolio"
    >
      <div className="mb-5 xl:mb-17.5">
        <div className="mx-auto max-w-144.25 text-center max-sm:px-2">
          <p className="section-title">Selected projects</p>
          <p className="pt-6 text-[18px] font-normal text-gray-400 max-sm:text-[14px]">
            A focused set of work across warehousing, analytics engineering, and
            insight delivery — from extraction and modeling to reporting.
          </p>
        </div>
      </div>
      <div className="mx-auto flex justify-center">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projectData.map((data) => (
            <Projects data={data} key={data.id} />
          ))}
        </div>
      </div>
      <div className="text-center">
        <a
          href="https://github.com/raymanwaytt?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary mt-12.5 px-6 py-3 text-center text-[16px] font-semibold text-white"
        >
          More on GitHub
        </a>
      </div>
    </div>
  );
};

export default Portfolio;
