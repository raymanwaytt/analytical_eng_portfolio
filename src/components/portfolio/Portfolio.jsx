import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Projects from "./Projects";
import { projectData } from "../../data/projects";
import Reveal from "../common/reveal/Reveal";
import SectionHeading from "../common/sectionHeading/SectionHeading";

const Portfolio = () => {
  return (
    <section className="section bg-white" id="portfolio">
      <div className="shell">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="Selected work"
            title="Projects that moved data to decisions"
            lede="A focused set of work across warehousing, analytics engineering, and insight delivery — from extraction and modeling to reporting."
            className="md:max-w-2xl"
          />
          <Reveal delay={120} className="md:pb-2">
            <a
              href="https://github.com/raymanwaytt?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="cta cta--outline"
            >
              More on GitHub
              <FontAwesomeIcon
                icon={faArrowUpRightFromSquare}
                className="cta__icon text-xs"
                aria-hidden="true"
              />
            </a>
          </Reveal>
        </div>

        <div className="mt-12 grid items-stretch gap-6 md:mt-16 md:grid-cols-2 xl:grid-cols-3">
          {projectData.map((data, index) => (
            <Reveal key={data.id} delay={index * 110} className="h-full">
              <Projects data={data} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
