export const projects = [
  {
    id: 1,
    title: "Healthcare Data Lakehouse: COVID-19 Analytics",
    image: "/assets/project/SYSARCH_HEALTHCARE-DE.jpg",
    categoryTag: "Data Engineering",
    description: "Architected a decoupled Data Lakehouse environment using Docker to process 100K+ simulated patient records. Engineered Medallion Architecture with Iceberg format and Trino for high-speed BI serving.",
    tags: ["Spark", "Iceberg", "Airflow", "Trino", "MinIO"],
    liveUrl: "https://sites.plane.so/issues/b18b3636a9c44636aea91add184a8ed9",
    repoUrl: "https://github.com/darktheDE/healthcare-lakehouse-covid19"
  },
  {
    id: 2,
    title: "Olist E-Commerce Lakehouse",
    image: "/assets/project/SYSARCH_OLIST-DE.jpg",
    categoryTag: "Data Engineering",
    description: "Built a Medallion Architecture on a Dockerized Spark cluster processing 100K+ Brazilian e-commerce records. Implemented automated ETL pipelines with Airflow, Delta Lake, and Superset dashboards.",
    tags: ["Spark", "Delta Lake", "Airflow", "Superset", "MinIO"],
    liveUrl: "https://sites.plane.so/issues/fb4056e1975041fb96f169aff25798e6",
    repoUrl: "https://github.com/darktheDE/Olist-E-Commerce-Lakehouse"
  },
  {
    id: 3,
    title: "Airline Operations & Asset Health DWH",
    image: "/assets/project/airline-DE.png",
    categoryTag: "Data Engineering",
    description: "Enterprise Data Warehouse correlating 2015 U.S. flight logs with FAA Registry data. Built using Kimball methodology with SSIS incremental loading and SSAS OLAP cubes for sub-second analysis.",
    tags: ["SQL Server", "SSIS", "SSAS", "Power BI", "Kimball"],
    liveUrl: "https://sites.plane.so/issues/a203be26250d4345ac261041dca5f80b",
    repoUrl: "https://github.com/darktheDE/airline-dwh"
  },
  {
    id: 4,
    title: "NYC Taxi Trip Analysis",
    image: "/assets/project/nyctriptaxi-DE.png",
    categoryTag: "Data Engineering",
    description: "Big Data processing pipeline using PySpark with Medallion Architecture for analyzing NYC taxi trip data. Features Spark Structured Streaming and a data quality framework.",
    tags: ["PySpark", "Apache Spark", "Python", "Data Engineering"],
    liveUrl: "https://github.com/QuangDuyReal/nyc-taxi-trip-analysis",
    repoUrl: "https://github.com/QuangDuyReal/nyc-taxi-trip-analysis"
  },
  {
    id: 5,
    title: "UTE Phone Hub (E-commerce Platform)",
    image: "/assets/project/ute-phone-hub-SW.png",
    categoryTag: "Software Engineering",
    description: "As Project Manager, I led the development of this e-commerce platform, implementing JWT Auth, Google OAuth2, and Product Reviews & Ratings systems using Spring Boot and Next.js.",
    tags: ["Spring Boot 3.5", "Next.js 16", "PostgreSQL", "Redis", "Docker"],
    liveUrl: "https://github.com/darktheDE/ute-phonehub",
    repoUrl: "https://github.com/darktheDE/ute-phonehub"
  },
  {
    id: 6,
    title: "Gene Expression Clustering",
    image: "/assets/project/gene-expression-ML.png",
    categoryTag: "Machine Learning",
    description: "ML architecture combining K-Means++, Hierarchical, and DBSCAN clustering using adaptive weighting to classify cancer subtypes from high-dimensional RNA-Seq data.",
    tags: ["Python", "Scikit-learn", "PCA", "Machine Learning"],
    liveUrl: "https://geneexenclug1.streamlit.app/",
    repoUrl: "https://github.com/darktheDE/gene-expression-ensemble-clustering"
  }
];
