import { faArrowDown, faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-scroll";
import person from "../../assets/images/person.jpeg";
import { cvLink } from "../../data/projects";
import "./introduction.css";

const specs = [
  { label: "Based in", value: "Lagos, Nigeria" },
  { label: "Focus", value: "Pipelines & warehousing" },
  { label: "Core stack", value: "Python · SQL · dbt · Airflow" },
  { label: "Delivers", value: "Decision-ready analytics" },
];

const Introduction = () => {
  return (
    <section className="masthead" id="introduction">
      <div className="masthead__portrait" aria-hidden="true">
        <img src={person} alt="" fetchPriority="high" />
      </div>
      <div className="masthead__tint" aria-hidden="true" />
      <div className="masthead__glow" aria-hidden="true" />
      <div className="masthead__grid" aria-hidden="true" />

      <div className="masthead__body">
        <div className="shell">
          <div className="masthead__copy masthead__rise">
            <p className="masthead__status">
              <span className="masthead__status-dot" aria-hidden="true" />
              Open to new roles
            </p>
            <p className="masthead__kicker">Data &amp; Analytics Engineer</p>
            <h1 className="masthead__name">
              <span>Abdulrahman</span>
              <span>Aruna</span>
            </h1>
            <p className="masthead__lede">
              I build reliable pipelines and analytics-ready warehouses that turn
              operational data into decisions.
            </p>
            <div className="masthead__actions">
              <Link
                to="featured"
                smooth={true}
                duration={900}
                offset={-96}
                className="cta cta--primary"
              >
                View projects
                <FontAwesomeIcon
                  icon={faArrowDown}
                  className="cta__icon cta__icon--down text-xs"
                  aria-hidden="true"
                />
              </Link>
              <a
                href={cvLink}
                target="_blank"
                rel="noopener noreferrer"
                className="cta cta--glass"
              >
                Download CV
                <FontAwesomeIcon
                  icon={faArrowUpRightFromSquare}
                  className="text-xs"
                  aria-hidden="true"
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="masthead__specs">
        <div className="shell">
          <dl className="masthead__specs-grid">
            {specs.map((spec) => (
              <div className="masthead__spec" key={spec.label}>
                <dt>{spec.label}</dt>
                <dd>{spec.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
