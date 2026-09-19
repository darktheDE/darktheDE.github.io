/**
 * Selected core projects.
 * Focuses on actual technical architecture and practical implementation details.
 */

export const projects = [
  {
    id: 1,
    title: "Vietnamese Banking Financial Analytics Platform",
    image: "/assets/project/vn-banking-de.webp",
    featuredBadge: "Featured Project",
    description: "An end-to-end financial data warehouse analyzing 20+ years of Vietnamese banking performance on Google BigQuery. Automated ELT pipelines clean and transform financial datasets into a Star Schema, coupled with a Random Forest credit-risk classification model and interactive analytics dashboards.",
    highlights: [
      "Ingested and transformed 20+ years of banking financial statements and metrics into Google BigQuery using automated ELT workflows.",
      "Designed Star Schema dimensional models (fact tables for financial metrics, dimension tables for banks, time, and indicators) optimized for analytical SQL queries.",
      "Trained a Random Forest classifier to detect early credit risk and distress signals from financial ratios (achieving 0.9752 AUC-ROC).",
      "Built interactive dashboards in Looker Studio and Streamlit for multi-year trend analysis and comparative bank performance metrics."
    ],
    tags: ["Google BigQuery", "Python", "SQL", "Star Schema", "Random Forest", "Looker Studio", "Streamlit"],
    liveUrl: "https://datastudio.google.com/u/0/reporting/340892d5-4366-4e40-9403-47901040b1d7/page/v1e2F",
    repoUrl: "https://github.com/darktheDE/vn-banking-dwh-analytics"
  },
  {
    id: 2,
    title: "UTE Phone Hub (E-Commerce Platform)",
    image: "/assets/project/ute-phone-hub-SW.webp",
    description: "Full-stack e-commerce web platform for browsing and purchasing mobile devices and tech accessories. Built with Next.js and Spring Boot, featuring user authentication, product catalogs, shopping cart management, order checkout, and administrative dashboard.",
    highlights: [
      "Developed responsive frontend user interface with Next.js, React, and Tailwind CSS for seamless catalog browsing and shopping.",
      "Built robust backend REST APIs with Spring Boot 3, handling product inventory, customer accounts, and order processing.",
      "Implemented secure authentication with JWT tokens and Redis session management with role-based permissions (Admin, Staff, Customer).",
      "Configured PostgreSQL database with relational schema, foreign key constraints, and transactional consistency for checkout flows."
    ],
    tags: ["Spring Boot 3", "Next.js", "PostgreSQL", "Redis", "JWT", "Tailwind CSS", "REST API"],
    liveUrl: "https://github.com/darktheDE/ute-phonehub",
    repoUrl: "https://github.com/darktheDE/ute-phonehub"
  },
  {
    id: 3,
    title: "Olist E-Commerce Lakehouse",
    image: "/assets/project/SYSARCH_OLIST-DE.webp",
    description: "A modern Data Lakehouse pipeline processing 100K+ Brazilian e-commerce transaction records from the Olist public dataset. Built using PySpark and Delta Lake following the Medallion Architecture (Bronze -> Silver -> Gold), orchestrated by Apache Airflow with MinIO S3 object storage.",
    highlights: [
      "Implemented Medallion Architecture: Bronze layer for raw ingestion, Silver layer for cleaning & deduplication, and Gold layer for business analytics aggregations.",
      "Utilized PySpark for scalable distributed data transformations and Delta Lake for ACID transaction logging and reliable schema enforcement.",
      "Scheduled and monitored automated pipeline execution with Apache Airflow DAGs, including error logging and notifications.",
      "Deployed the entire data stack locally in containerized Docker environments with MinIO serving as S3-compatible object storage."
    ],
    tags: ["PySpark", "Delta Lake", "Apache Airflow", "MinIO (S3)", "Docker", "Python", "Data Lakehouse"],
    liveUrl: "https://sites.plane.so/issues/fb4056e1975041fb96f169aff25798e6",
    repoUrl: "https://github.com/darktheDE/Olist-E-Commerce-Lakehouse"
  },
  {
    id: 4,
    title: "Vietnamese LLM KV Cache Compression Benchmark",
    image: "/assets/project/vietllm-ml.webp",
    description: "An experimental benchmarking suite evaluating memory optimization and compression techniques (KV Cache compression and TurboQuant) on Vietnamese Large Language Models. Measures real-world tradeoffs across inference throughput, VRAM usage, latency, and language quality.",
    highlights: [
      "Built reproducible benchmark pipelines across open-source Vietnamese LLMs using vLLM and PyTorch frameworks.",
      "Analyzed KV Cache quantization and compression methods to reduce GPU VRAM consumption during long-context generation.",
      "Collected quantitative metrics: token generation throughput, latency per token, memory allocation, and perplexity changes.",
      "Documented practical efficiency benchmarks to inform cost-effective model serving on various GPU hardware tiers."
    ],
    tags: ["Python", "vLLM", "PyTorch", "Hugging Face", "KV Cache", "TurboQuant", "LLM Benchmarking"],
    liveUrl: "https://github.com/darktheDE/viet-llm-kvcache-benchmark",
    repoUrl: "https://github.com/darktheDE/viet-llm-kvcache-benchmark"
  }
];
