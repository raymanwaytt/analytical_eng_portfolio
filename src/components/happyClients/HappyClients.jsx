import Marquee from "react-fast-marquee";
import SectionHeading from "../common/sectionHeading/SectionHeading";
import "./techStack.css";

const base = import.meta.env.BASE_URL;

const techStack = [
  { id: 1, name: "PostgreSQL", icon: "postgresql.svg" },
  { id: 2, name: "Python", icon: "python.svg" },
  { id: 3, name: "BigQuery", icon: "bigquery.svg" },
  { id: 4, name: "dbt", icon: "dbt.svg" },
  { id: 5, name: "Apache Airflow", icon: "airflow.svg" },
  { id: 6, name: "Power BI", icon: "powerbi.svg" },
  { id: 7, name: "Tableau", icon: "tableau.svg" },
  { id: 8, name: "Looker", icon: "looker.svg" },
  { id: 9, name: "AWS", icon: "aws.svg" },
  { id: 10, name: "Excel", icon: "excel.svg" },
];

const rows = [
  { items: techStack.slice(0, 5), direction: "left", speed: 34 },
  { items: techStack.slice(5), direction: "right", speed: 28 },
];

const Tile = ({ tool }) => (
  <div className="tool-tile">
    <img
      src={`${base}icons/${tool.icon}`}
      alt=""
      loading="lazy"
      aria-hidden="true"
    />
    <span>{tool.name}</span>
  </div>
);

const TechStack = () => {
  return (
    <section className="section bg-white" id="stack">
      <div className="shell">
        <SectionHeading
          eyebrow="Toolkit"
          title="The stack behind the work"
          lede="Tools I use to design, build, and maintain modern analytics and data engineering systems."
        />
      </div>

      <div className="mt-12 flex flex-col gap-4 md:mt-16">
        {rows.map((row) => (
          <div className="marquee-mask" key={row.direction}>
            <Marquee
              pauseOnHover={true}
              speed={row.speed}
              direction={row.direction}
              gradient={false}
              autoFill={true}
            >
              {row.items.map((tool) => (
                <Tile tool={tool} key={tool.id} />
              ))}
            </Marquee>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;
