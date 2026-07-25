import card1 from "../assets/images/portfolio-images/data_architecture.png";
import card2 from "../assets/images/portfolio-images/bitcoin.jpg";
import card3 from "../assets/images/portfolio-images/fraud.jpeg";
import card4 from "../assets/images/portfolio-images/credit.jpg";

export const featuredProject = {
  id: 2,
  image: card2,
  category: "ANALYTICS ENGINEERING",
  title: "Automated Bitcoin Analytics Pipeline",
  problem:
    "Market data needed to land daily in a reporting-ready shape without manual refreshes.",
  built: "API ingestion into BigQuery, dbt transformations, and Airflow orchestration with Looker-ready outputs.",
  outcome: "A scheduled ELT pipeline that delivers daily Bitcoin market analytics automatically.",
  description:
    "Built an automated ELT pipeline using API ingestion, BigQuery, dbt transformations, and scheduled orchestration to deliver daily Bitcoin market analytics in a reporting-ready format.",
  link: "https://github.com/raymanwaytt/bitcoin_daily_price",
  tools: ["Python", "BigQuery", "dbt", "Airflow", "Looker"],
};

export const projectData = [
  {
    id: 1,
    image: card1,
    category: "DATA ENGINEERING",
    title: "Modern Data Warehouse (Medallion Architecture)",
    description:
      "Designed and implemented a SQL Server data warehouse using Bronze, Silver, and Gold layers. Built ingestion pipelines from ERP and CRM CSV sources and modeled analytics-ready fact and dimension tables.",
    link: "https://github.com/raymanwaytt/datawarehouse_project_sql",
    tools: ["SQL Server", "ETL", "Data Modeling"],
  },
  {
    id: 5,
    image: card3,
    category: "BUSINESS INTELLIGENCE",
    title: "Fraud Detection for PaySwift",
    description:
      "End-to-end fraud detection pipeline with synthetic data generation, SMOTE-balanced modeling, threshold tuning, and an executive Tableau dashboard. ROC-AUC: 0.88.",
    link: "https://github.com/raymanwaytt/PaySwift_Fraud_Detection",
    tools: ["Python", "SQL", "Tableau"],
  },
  {
    id: 6,
    image: card4,
    category: "ANALYTICS ENGINEERING",
    title: "Credit Risk Analytics Pipeline",
    description:
      "Built a layered analytics pipeline for credit risk data, focusing on data quality checks, transformations, and analytics-ready outputs for downstream risk analysis.",
    link: "https://github.com/raymanwaytt/credit-risk-analytics",
    tools: ["Python", "PostgreSQL", "dbt", "Power BI"],
  },
];

export const cvLink =
  "https://drive.google.com/file/d/1UDZBecinCyYGvSxAvXDO5W_oqY3jkMvM/view?usp=sharing";
