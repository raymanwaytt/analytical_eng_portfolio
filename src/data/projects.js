import card1 from "../assets/images/portfolio-images/data_architecture.png";
import card2 from "../assets/images/portfolio-images/bitcoin.jpg";
import card3 from "../assets/images/portfolio-images/fraud.jpeg";
import card4 from "../assets/images/portfolio-images/credit.jpg";

export const featuredProject = {
  id: 6,
  image: card4,
  category: "ANALYTICS ENGINEERING",
  title: "Credit Risk Analytics Pipeline",
  synthetic: true,
  lede: "Synthetic lending data lands in PostgreSQL, then dbt builds tested marts for risk, vintage, customer value, and channel. A dashboard is planned, not live.",
  problem:
    "Portfolio risk, vintage performance, customer value, and channel economics need conformed tables and data-quality checks. Raw lending extracts are not that model.",
  built:
    "Python generates the synthetic lending data. It loads into a PostgreSQL bronze layer, then dbt builds staging, core, analytics, and data-quality models — including PAR, vintage, CLV, and channel marts.",
  outcome:
    "Those marts and data-quality views are built in PostgreSQL. Power BI is planned; no dashboard is in the project yet.",
  description:
    "Synthetic lending data in PostgreSQL bronze, transformed with dbt across staging, core, analytics, and data-quality layers into PAR, vintage, CLV, and channel marts.",
  link: "https://github.com/raymanwaytt/credit-risk-analytics",
  tools: ["Python", "PostgreSQL", "dbt"],
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
    id: 2,
    image: card2,
    category: "ANALYTICS ENGINEERING",
    title: "Automated Bitcoin Analytics Pipeline",
    description:
      "Built an automated ELT pipeline using API ingestion, BigQuery, dbt transformations, and scheduled orchestration to deliver daily Bitcoin market analytics in a reporting-ready format.",
    link: "https://github.com/raymanwaytt/bitcoin_daily_price",
    tools: ["Python", "BigQuery", "dbt", "Airflow", "Looker"],
  },
  {
    id: 5,
    image: card3,
    category: "BUSINESS INTELLIGENCE",
    title: "Fraud Detection for PaySwift",
    synthetic: true,
    description:
      "End-to-end fraud detection pipeline with synthetic data generation, SMOTE-balanced modeling, threshold tuning, and an executive Tableau dashboard. ROC-AUC: 0.88.",
    link: "https://github.com/raymanwaytt/PaySwift_Fraud_Detection",
    tools: ["Python", "SQL", "Tableau"],
  },
];

export const cvLink =
  "https://drive.google.com/file/d/1UDZBecinCyYGvSxAvXDO5W_oqY3jkMvM/view?usp=sharing";
