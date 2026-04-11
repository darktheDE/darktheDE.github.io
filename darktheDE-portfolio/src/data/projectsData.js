export const projects = [
  {
    id: 1,
    title: "Healthcare Data Lakehouse: COVID-19 Analytics",
    image: "/assets/SYSARCH_HEALTHCARE.jpg",
    description: "Architected a decoupled Data Lakehouse environment using Docker to process 100K+ simulated patient records. Engineered Medallion Architecture with Iceberg format and Trino for high-speed BI serving.",
    tags: ["Spark", "Iceberg", "Airflow", "Trino", "MinIO"],
    liveUrl: "https://sites.plane.so/issues/b18b3636a9c44636aea91add184a8ed9",
    repoUrl: "https://github.com/darktheDE/healthcare-lakehouse-covid19"
  },
  {
    id: 2,
    title: "Olist E-Commerce Lakehouse",
    image: "/assets/SYSARCH_OLIST.jpg",
    description: "Built a Medallion Architecture on a Dockerized Spark cluster processing 100K+ Brazilian e-commerce records. Implemented automated ETL pipelines with Airflow, Delta Lake, and Superset dashboards.",
    tags: ["Spark", "Delta Lake", "Airflow", "Superset", "MinIO"],
    liveUrl: "https://sites.plane.so/issues/fb4056e1975041fb96f169aff25798e6",
    repoUrl: "https://github.com/darktheDE/Olist-E-Commerce-Lakehouse"
  },
  {
    id: 3,
    title: "UTE Phone Hub (Software Engineering)",
    image: "/assets/newutephonehub.png",
    description: "Advanced e-commerce platform built for Software Engineering course. Features comprehensive authorization system, modern UI with Shadcn, and high-performance backend.",
    tags: ["Next.js 16", "Spring Boot 3.5.8", "ShadcnUI", "PostgreSQL 15", "Docker", "Redis"],
    liveUrl: "https://github.com/darktheDE/ute-phonehub",
    repoUrl: "https://github.com/darktheDE/ute-phonehub"
  },
  {
    id: 4,
    title: "Gene Expression Ensemble Clustering",
    image: "/assets/gene.png",
    description: "Applied Weighted SCENA-based ensemble clustering on gene expression data to extract biological insights. Designed and deployed an interactive web application for data visualization using Streamlit.",
    tags: ["Python", "Machine Learning", "Streamlit", "Data Visualization"],
    liveUrl: "https://geneexenclug1.streamlit.app/",
    repoUrl: "#"
  },
  {
    id: 5,
    title: "NYC Taxi Trip Analysis",
    image: "/assets/nyctriptaxi.png",
    description: "Big Data processing pipeline using PySpark with Medallion Architecture (Bronze-Silver-Gold) for analyzing NYC taxi trip data. Includes streaming processing and data quality framework.",
    tags: ["PySpark", "Apache Spark", "Hadoop", "Python", "Pandas", "Data Engineering"],
    liveUrl: "https://github.com/QuangDuyReal/nyc-taxi-trip-analysis",
    repoUrl: "https://github.com/QuangDuyReal/nyc-taxi-trip-analysis"
  },
  {
    id: 6,
    title: "RTIC Club Backend System",
    image: "/assets/rtic-background.png",
    description: "Backend system for HCMUTE RTIC programming club with document and folder management modules. Built with Spring Boot and PostgreSQL, following enterprise architecture patterns.",
    tags: ["Java 17", "Spring Boot", "Maven", "PostgreSQL", "REST API"],
    liveUrl: "https://hcmutertic.com",
    repoUrl: "https://github.com/hcmute-rtic"
  }
];