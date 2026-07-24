import { Link } from "react-scroll";
import person from "../../assets/images/person.jpeg";
import { cvLink } from "../../data/projects";
import "./introduction.css";

const Introduction = () => {
  return (
    <section className="hero-shell" id="introduction">
      <div className="hero-media" aria-hidden="true">
        <img
          src={person}
          alt=""
          className="hero-media__image"
        />
        <div className="hero-media__veil" />
      </div>

      <div className="content hero-content">
        <div className="hero-copy animate-hero-rise">
          <p className="hero-brand">Abdulrahman Aruna</p>
          <h1 className="hero-role">Data &amp; Analytics Engineer</h1>
          <p className="hero-support">
            I build reliable pipelines and analytics-ready warehouses that turn
            operational data into decisions.
          </p>
          <div className="hero-actions">
            <Link
              to="featured"
              smooth={true}
              duration={800}
              offset={-100}
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
