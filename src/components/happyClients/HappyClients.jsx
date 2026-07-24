import Marquee from "react-fast-marquee";

const techStack = [
  { id: 1, name: "PostgreSQL", icon: "icons/postgresql.svg" },
  { id: 2, name: "Python", icon: "icons/python.svg" },
  { id: 3, name: "BigQuery", icon: "icons/bigquery.svg" },
  { id: 4, name: "dbt", icon: "icons/dbt.svg" },
  { id: 5, name: "Apache Airflow", icon: "icons/airflow.svg" },
  { id: 6, name: "Power BI", icon: "icons/powerbi.svg" },
  { id: 7, name: "Tableau", icon: "icons/tableau.svg" },
  { id: 8, name: "Looker", icon: "icons/looker.svg" },
  { id: 9, name: "AWS", icon: "icons/aws.svg" },
  { id: 10, name: "Excel", icon: "icons/excel.svg" },
];

const TechStack = () => {
  return (
    <section className="bg-soft-white py-20" id="stack">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl font-semibold sm:text-3xl">Tech stack</h2>
        <p className="mx-auto mb-12 mt-4 max-w-xl text-gray-600">
          Tools I use to design, build, and maintain modern analytics and data
          engineering systems.
        </p>

        <Marquee pauseOnHover={true} speed={50} gradient={false}>
          <div className="flex items-center gap-8 px-4">
            {techStack.map((tool) => (
              <div
                key={tool.id}
                className="flex min-w-[120px] flex-col items-center justify-center opacity-80 transition hover:opacity-100"
              >
                <img
                  src={tool.icon}
                  alt={tool.name}
                  className="mb-3 h-10 w-auto"
                />
                <span className="whitespace-nowrap text-sm text-gray-700">
                  {tool.name}
                </span>
              </div>
            ))}
          </div>
        </Marquee>
      </div>
    </section>
  );
};

export default TechStack;
