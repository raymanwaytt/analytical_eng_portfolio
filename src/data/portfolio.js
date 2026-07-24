import mdw from "../assets/images/portfolio-images/data_architecture.png";
import btc from "../assets/images/portfolio-images/bitcoin.jpg";
import seg from "../assets/images/portfolio-images/Customer Segmentati.jpg";
import crime from "../assets/images/portfolio-images/crime.jpg";
import fraud from "../assets/images/portfolio-images/fraud.jpeg";
import credit from "../assets/images/portfolio-images/credit.jpg";

export const profile = {
  name: "Abdulrahman Aruna",
  role: "Data & Analytics Engineer",
  location: "Lagos, Nigeria",
  email: "arunaabdulrahman01@gmail.com",
  phone: "+2348122249512",
  github: "https://github.com/raymanwaytt",
  linkedin: "https://www.linkedin.com/in/abdulrahman-aruna-4b564b327/",
  cv: "https://drive.google.com/file/d/1UDZBecinCyYGvSxAvXDO5W_oqY3jkMvM/view?usp=sharing",
  tagline: "I build the systems that turn raw, noisy data into decisions leaders can trust.",
};

// Headline numbers used across the hero + about, kept honest to the experience.
export const signals = [
  { value: 500, suffix: "K+", label: "daily transactions orchestrated" },
  { value: 99.9, suffix: "%", label: "pipeline uptime sustained", decimals: 1 },
  { value: 12, suffix: "+", label: "source systems unified" },
  { value: 50, suffix: "+", label: "predictive features engineered" },
];

export const stages = [
  {
    key: "ingest",
    index: "01",
    title: "Ingest & orchestrate",
    body: "Pull data from APIs, ERPs, files, and event streams on dependable schedules — with retries, alerting, and clear ownership when something breaks.",
    tags: ["Airflow", "Python", "APIs", "CDC"],
  },
  {
    key: "model",
    index: "02",
    title: "Transform & model",
    body: "Shape raw feeds into tested, documented warehouse layers. Star schemas and dbt models that stay trustworthy as the business changes.",
    tags: ["dbt", "BigQuery", "SQL", "Star schema"],
  },
  {
    key: "assure",
    index: "03",
    title: "Assure & govern",
    body: "Encode expectations, validate on every run, and treat data quality as a contract — not a spreadsheet someone remembers to check.",
    tags: ["Great Expectations", "Testing", "Lineage", "Governance"],
  },
  {
    key: "deliver",
    index: "04",
    title: "Model & deliver",
    body: "Ship analytics-ready datasets, features, and dashboards that answer real questions and load fast enough to actually get used.",
    tags: ["Power BI", "Looker", "Tableau", "Feature stores"],
  },
];

export const projects = [
  {
    id: "medallion",
    image: mdw,
    category: "DATA ENGINEERING",
    title: "Modern Data Warehouse",
    subtitle: "Medallion architecture on SQL Server",
    problem:
      "ERP and CRM exports lived in disconnected CSVs with no trustworthy source of truth for analytics.",
    build:
      "Designed Bronze / Silver / Gold layers, built ingestion from ERP + CRM sources, and modeled analytics-ready fact and dimension tables.",
    outcome:
      "A layered warehouse that turns raw operational exports into clean, query-ready models.",
    metric: { value: "3", label: "refinement layers" },
    tools: ["SQL Server", "ETL", "Data Modeling"],
    link: "https://github.com/raymanwaytt/datawarehouse_project_sql",
    featured: true,
  },
  {
    id: "bitcoin",
    image: btc,
    category: "ANALYTICS ENGINEERING",
    title: "Automated Bitcoin Analytics",
    subtitle: "Scheduled ELT from API to insight",
    problem:
      "Market data needed to land daily in a reporting-ready shape without any manual refresh.",
    build:
      "API ingestion into BigQuery, dbt transformations, and Airflow orchestration producing Looker-ready models.",
    outcome:
      "A hands-off ELT pipeline delivering daily Bitcoin market analytics automatically.",
    metric: { value: "24h", label: "refresh cadence" },
    tools: ["Python", "BigQuery", "dbt", "Airflow", "Looker"],
    link: "https://github.com/raymanwaytt/bitcoin_daily_price",
    featured: true,
  },
  {
    id: "fraud",
    image: fraud,
    category: "MACHINE LEARNING",
    title: "Fraud Detection for PaySwift",
    subtitle: "End-to-end detection pipeline",
    problem:
      "Fraud signals were rare and imbalanced, and ops needed a defensible way to act on them.",
    build:
      "Synthetic data generation, SMOTE-balanced modeling, threshold tuning, and an executive Tableau dashboard for decisioning.",
    outcome:
      "A tuned detection pipeline with an ops-ready dashboard for real decisions.",
    metric: { value: "0.88", label: "ROC-AUC" },
    tools: ["Python", "SQL", "Tableau"],
    link: "https://github.com/raymanwaytt/PaySwift_Fraud_Detection",
    featured: true,
  },
  {
    id: "credit",
    image: credit,
    category: "ANALYTICS ENGINEERING",
    title: "Credit Risk Analytics",
    subtitle: "Layered pipeline for risk data",
    problem:
      "Credit risk data needed quality controls and structure before any analysis could be trusted.",
    build:
      "Built a layered analytics pipeline with data-quality checks, transformations, and analytics-ready outputs.",
    outcome:
      "Reliable, risk-ready datasets for downstream analysis and reporting.",
    metric: { value: "4", label: "quality gates" },
    tools: ["Python", "PostgreSQL", "dbt", "Power BI"],
    link: "https://github.com/raymanwaytt/credit-risk-analytics",
    featured: false,
  },
  {
    id: "segmentation",
    image: seg,
    category: "DATA ANALYTICS",
    title: "Customer Segmentation",
    subtitle: "Behavioral clustering on transactions",
    problem:
      "Marketing needed to know which customers actually mattered, and why.",
    build:
      "Segmented customers from transactional data to surface behavioral patterns and high-value cohorts.",
    outcome:
      "Actionable segments supporting targeted marketing and sharper decisions.",
    metric: { value: "N", label: "value cohorts" },
    tools: ["Python", "SQL", "Power BI"],
    link: "https://github.com/raymanwaytt/oibsip_taskno/tree/master/PROJECT%202/Customer%20Segmentation%20Analysis",
    featured: false,
  },
  {
    id: "crime",
    image: crime,
    category: "DATA ANALYTICS",
    title: "Crime Data Analysis",
    subtitle: "Insight-driven visual storytelling",
    problem:
      "Raw crime data hid patterns across time, place, and category that mattered for reporting.",
    build:
      "Exploratory analysis and visual storytelling across time, location, and crime categories.",
    outcome:
      "A portfolio of insight-led visual reports rather than raw metric dumps.",
    metric: { value: "3", label: "analysis lenses" },
    tools: ["Python", "SQL", "Power BI"],
    link: "https://github.com/raymanwaytt/Crime-Data-Analysis-Portfolio/tree/main",
    featured: false,
  },
];

export const experience = [
  {
    id: "riskgratis",
    company: "Riskgratis Technologies",
    role: "Data Analyst",
    location: "Lagos, Nigeria",
    period: "Apr 2026 — Present",
    status: "running",
    summary:
      "Owning ERP analytics and executive reporting straight to the COO and CTO.",
    highlights: [
      "Design and maintain Odoo / Juniper ERP dashboards and analytical systems for executive leadership.",
      "Build ETL pipelines extracting financial and operational data from ERP systems into the analytics warehouse.",
      "Develop dbt models transforming raw ERP data into analytics-ready datasets for BI.",
      "Automate executive dashboards tracking KPIs across finance, operations, and sales.",
      "Implement data-quality frameworks and optimize query performance for fast reporting.",
    ],
    stack: ["Odoo", "Juniper ERP", "dbt", "SQL", "Power BI"],
  },
  {
    id: "mim",
    company: "Money In Minutes (MIM Finance)",
    role: "Senior Data Analyst & Analytics Engineer",
    location: "Lagos, Nigeria",
    period: "Jun 2024 — Mar 2026",
    status: "success",
    summary:
      "Architected the enterprise data platform behind lending, payments, and credit-risk analytics.",
    highlights: [
      "Architected an enterprise warehouse consolidating loan origination, payments, customer, and behavioral data into BigQuery / PostgreSQL.",
      "Designed star-schema models supporting financial reporting and credit-risk analytics across 8 product lines.",
      "Built Airflow-orchestrated ETL processing 500K+ daily transactions from 12+ source systems at 99.9% uptime.",
      "Engineered 50+ predictive features for credit-risk and fraud models, with dbt models tested and documented.",
      "Enforced data quality with Great Expectations and governed compliance with CBN and data-protection requirements.",
    ],
    stack: ["BigQuery", "PostgreSQL", "Airflow", "dbt", "Great Expectations", "Power BI"],
  },
  {
    id: "smartedge",
    company: "SmartEdge Consulting & Analytics",
    role: "Data Research (Contract)",
    location: "Remote",
    period: "Jul 2025 — Mar 2026",
    status: "success",
    summary:
      "Automated the data backbone for market-research projects.",
    highlights: [
      "Designed data collection and transformation pipelines for market-research projects.",
      "Built Python scripts automating extraction from multiple sources and APIs.",
      "Developed QA processes ensuring research-dataset accuracy.",
    ],
    stack: ["Python", "APIs", "SQL"],
  },
  {
    id: "peercheck",
    company: "Peercheck Africa",
    role: "Data Analyst & Analytics Engineer",
    location: "Remote",
    period: "Mar 2024 — Dec 2024",
    status: "success",
    summary:
      "Turned user-submitted salary and workplace data into B2B workforce insight.",
    highlights: [
      "Built ETL pipelines ingesting salary and workplace-review data from web / mobile apps into PostgreSQL.",
      "Implemented validation frameworks ensuring accuracy of financial submissions before processing.",
      "Wrote Python for transformation, standardization, and QA.",
      "Created analytical datasets and dashboards visualizing workforce insights for B2B clients.",
    ],
    stack: ["Python", "PostgreSQL", "ETL", "Dashboards"],
  },
];

export const stack = [
  { name: "Python", icon: "icons/python.svg" },
  { name: "PostgreSQL", icon: "icons/postgresql.svg" },
  { name: "BigQuery", icon: "icons/bigquery.svg" },
  { name: "dbt", icon: "icons/dbt.svg" },
  { name: "Apache Airflow", icon: "icons/airflow.svg" },
  { name: "Databricks", icon: "icons/databricks.svg" },
  { name: "PySpark", icon: "icons/pyspark.svg" },
  { name: "AWS", icon: "icons/aws.svg" },
  { name: "Power BI", icon: "icons/powerbi.svg" },
  { name: "Tableau", icon: "icons/tableau.svg" },
  { name: "Looker", icon: "icons/looker.svg" },
  { name: "Excel", icon: "icons/excel.svg" },
];

export const sections = [
  { id: "source", index: "00", label: "Source" },
  { id: "signal", index: "01", label: "Signal" },
  { id: "pipeline", index: "02", label: "Pipeline" },
  { id: "builds", index: "03", label: "Builds" },
  { id: "trace", index: "04", label: "Trace" },
  { id: "stack", index: "05", label: "Stack" },
  { id: "deliver", index: "06", label: "Deliver" },
];
