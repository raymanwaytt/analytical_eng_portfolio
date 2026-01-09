import React from 'react';
import Marquee from "react-fast-marquee";

const techStack = [
  { id: 0, name: "Excel", icon: "icons/excel.svg" },
  { id: 1, name: "PostgreSQL", icon: "icons/postgresql.svg" },
  { id: 2, name: "Python", icon: "icons/python.svg" },
  { id: 3, name: "Power BI", icon: "icons/powerbi.svg" },
  { id: 4, name: "Tableau", icon: "icons/tableau.svg" },
  { id: 5, name: "Looker", icon: "icons/looker.svg" },
  { id: 6, name: "BigQuery", icon: "icons/bigquery.svg" },
  { id: 7, name: "AWS", icon: "icons/aws.svg" },
  { id: 8, name: "dbt", icon: "icons/dbt.svg" },
  { id: 9, name: "Apache Airflow", icon: "icons/airflow.svg" }, // Fixed duplicate ID
  { id: 10, name: "Databricks", icon: "icons/databricks.svg" },
  { id: 11, name: "PySpark", icon: "icons/pyspark.svg" },
];

const TechStack = () => {
  return (
    <section className="py-20 bg-soft-white">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
          Tech Stack
        </h2>
        <p className="text-gray-600 mb-12 max-w-xl mx-auto">
          Tools and platforms I use to design, build, and maintain modern
          analytics and data engineering systems.
        </p>

        <Marquee pauseOnHover={true} speed={50} gradient={false}>
          <div className="flex items-center gap-8 px-4">
            {techStack.map((tool) => (
              <div
                key={tool.id}
                className="flex flex-col items-center justify-center opacity-80 hover:opacity-100 transition min-w-[120px]"
              >
                <img
                  src={tool.icon}
                  alt={tool.name}
                  className="h-10 w-auto mb-3"
                />
                <span className="text-sm text-gray-700 whitespace-nowrap">{tool.name}</span>
              </div>
            ))}
          </div>
        </Marquee>
      </div>
    </section>
  );
};

export default TechStack;