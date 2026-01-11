import Projects from "./Projects";
import card1 from "../../assets/images/portfolio-images/data_architecture.png";
import card2 from "../../assets/images/portfolio-images/bitcoin.jpg";
import card3 from "../../assets/images/portfolio-images/Customer Segmentati.jpg";
import card4 from "../../assets/images/portfolio-images/crime.jpg";
import card5 from "../../assets/images/portfolio-images/fraud.jpeg";
import card6 from "../../assets/images/portfolio-images/credit.png";
import ToolStack from "./ToolStack";


const projectData = [
  {
    id: 1,
    image: card1,
    category: "DATA ENGINEERING",
    title: "Modern Data Warehouse (Medallion Architecture)",
    description:
      "Designed and implemented a SQL Server data warehouse using Bronze, Silver, and Gold layers. Built ingestion pipelines from ERP and CRM CSV sources and modeled analytics-ready fact and dimension tables.",
    link: "https://github.com/raymanwaytt/datawarehouse_project_sql",
     tools: ["SQL Server", "ETL", "Data Modeling"]
  },
  {
    id: 2,
    image: card2,
    category: "ANALYTICS ENGINEERING",
    title: "Automated Bitcoin Analytics Pipeline",
    description:
      "Built an automated ELT pipeline using API ingestion, BigQuery, dbt transformations, and scheduled orchestration to deliver daily Bitcoin market analytics in a reporting-ready format.",
    link: "https://github.com/raymanwaytt/bitcoin_daily_price",
    tools: ["Python", "BigQuery", "dbt", "Airflow", 'Looker']
  },
  {
    id: 3,
    image: card3,
    category: "DATA ANALYTICS",
    title: "Customer Segmentation Analysis",
    description:
      "Performed customer segmentation using transactional data to identify behavioral patterns and high-value segments, supporting targeted marketing and business decision-making.",
    link: "https://github.com/raymanwaytt/oibsip_taskno/tree/master/PROJECT%202/Customer%20Segmentation%20Analysis",
     tools: ["Python", "SQL", "Power BI"]
  },
  {
    id: 4,
    image: card4,
    category: "DATA ANALYTICS",
    title: "Crime Data Analysis & Visualization",
    description:
      "A collection of real-world crime data projects focused on uncovering patterns, trends, and insights through exploratory data analysis and visual storytelling. These projects analyze crime distribution across time, location, and categories, with an emphasis on insight-driven reporting rather than raw metrics.",
    link: "https://github.com/raymanwaytt/Crime-Data-Analysis-Portfolio/tree/main",
    tools: ["Python", "SQL", "Power BI"]
  },
  {
    id: 5,
    image: card5,
    category: "BUSINESS INTELLIGENCE",
    title: "FRAUD DETECTION for PaySwift",
    description:
      "End-to-end fraud detection pipeline built using Python, SQL (PostgreSQL), and Tableau. Includes synthetic data generation, SMOTE-balanced modeling, threshold tuning, and an executive dashboard for ops decision-making. ROC-AUC: 0.88.",
    link: "https://github.com/raymanwaytt/PaySwift_Fraud_Detection",
    tools: ["Python", "SQL", "Tableau"]
  },
  {
    id: 6,
    image: card6,
    category: "ANALYTICS ENGINEERING",
    title: "Credit Risk Analytics Pipeline",
    description:
      "Built a layered analytics pipeline for credit risk data, focusing on data quality checks, transformations, and analytics-ready outputs for downstream risk analysis.",
    link: "https://github.com/raymanwaytt/credit-risk-analytics",
     tools: ['Python', "PostgreSQL", 'dbt',"Power BI"]
  },
];

const Portfolio = () => {
  return (
    <div
      className="content mt-10 md:mt-15 xl:mt-25 mb-10 md:mb-25 max-xxl:p-2"
      id="portfolio"
    >
      <div className="xl:mb-17.5 mb-5">
        <div className="max-sm:px-2 text-center mx-auto max-w-144.25">
          <p className="section-title ">Projects</p>
          <p className="font-normal text-[18px] max-sm:text-[14px] pt-6 text-gray-400">
            Here’s a selection of my recent projects, showcasing my work across 
            data analysis, analytical engineering, and visualization — from data extraction 
            and transformation to insight-driven reporting using real-world datasets.
          </p>
        </div>
      </div>
      <div className="mx-auto flex justify-center">
        <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-6">
          {projectData.map((data, index) => (
            <Projects data={data} key={index} />
          ))}
        </div>
      </div>
      <div className="text-center">
        <a
          href="https://github.com/raymanwaytt?tab=repositories"
          className="btn btn-primary py-3 px-6 mt-12.5 text-center text-[16px] font-semibold"
        >
          More Project
        </a>
      </div>
    </div>
  );
};

export default Portfolio;
