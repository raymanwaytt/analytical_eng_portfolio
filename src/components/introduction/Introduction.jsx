import { Link } from "react-scroll";
import person from "../../assets/images/person.jpeg";
import { cvLink } from "../../data/projects";
import "./introduction.css";

const Introduction = () => {
  return (
    <section className="hero-shell" id="introduction">
      <div className="hero-media" aria-hidden="true">
        <img src={person} alt="" className="hero-media__image" />
        <div className="hero-media__veil" />
      </div>

      <div className="content relative z-10 flex min-h-[78vh] items-end px-4 pb-16 pt-28 sm:pb-20 lg:items-center lg:pb-28 lg:pt-36">
        <div className="hero-copy max-w-2xl animate-hero-rise">
          <p className="hero-brand">Abdulrahman Aruna</p>
          <h1 className="hero-role">Data &amp; Analytics Engineer</h1>
          <p className="hero-support">
            I build reliable pipelines and analytics-ready warehouses that turn
            operational data into decisions.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="portfolio"
              smooth={true}
              duration={800}
              offset={-120}
              className="btn btn-primary btn-lg text-white"
            >
              View Projects
            </Link>
            <a
              href={cvLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-lg border border-white/40 bg-white/10 text-white backdrop-blur-sm hover:bg-white hover:text-ink"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
