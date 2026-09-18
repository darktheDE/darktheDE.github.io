/**
 * Selected core projects (reduced from 9 to 4 projects according to refactor strategy).
 * Each project highlights both Technical Architecture and IT Audit / Technology Risk perspectives.
 */

export const projects = [
  {
    id: 1,
    title: "Vietnamese Banking Financial Analytics Platform",
    image: "/assets/project/vn-banking-de.png",
    categoryTag: "Data Integrity & Risk",
    auditBadge: "Data Assurance & Model Risk",
    description: "Architected a BigQuery financial data warehouse analyzing Vietnam's banking sector across 20+ years. Implemented Star Schema layers, automated ELT pipelines, and Machine Learning credit-risk warning systems (0.9752 AUC-ROC) served through Looker Studio and Streamlit.",
    auditPerspective: "Engineered Audit Columns (loaded_at, source_system, hash_diff) within the Star Schema to ensure full lineage traceability and data reconcilability. Evaluated the automated credit-risk classification pipeline against Model Risk Management principles (inspired by Fed SR 11-7), verifying model validation independence, feature stability, and mitigation of automated decision bias.",
    tags: ["BigQuery", "Star Schema", "Audit Columns", "Model Risk (SR 11-7)", "Random Forest (0.9752 AUC)", "Looker Studio"],
    liveUrl: "https://datastudio.google.com/u/0/reporting/340892d5-4366-4e40-9403-47901040b1d7/page/v1e2F",
    repoUrl: "https://github.com/darktheDE/vn-banking-dwh-analytics"
  },
  {
    id: 2,
    title: "UTE Phone Hub (E-Commerce Platform)",
    image: "/assets/project/ute-phone-hub-SW.png",
    categoryTag: "Access Control & Security",
    auditBadge: "ITGC Access Management",
    description: "Led development of a modular e-commerce platform using Next.js and Spring Boot. Architected the complete authentication, authorization, and session management infrastructure with PostgreSQL, Redis caching, and third-party payment gateways.",
    auditPerspective: "Designed role-based access control (RBAC) separating administrative, operational, and customer capabilities to enforce Segregation of Duties (SoD). Configured Spring Security with JWT token expiration, Redis-backed refresh token revocation, session hijacking prevention, and encrypted credential storage to satisfy enterprise access control benchmarks.",
    tags: ["Spring Boot 3.5", "Next.js 16", "RBAC & SoD", "JWT Lifecycle", "PostgreSQL", "Redis Security"],
    liveUrl: "https://github.com/darktheDE/ute-phonehub",
    repoUrl: "https://github.com/darktheDE/ute-phonehub"
  },
  {
    id: 3,
    title: "Olist E-Commerce Lakehouse",
    image: "/assets/project/SYSARCH_OLIST-DE.jpg",
    categoryTag: "Pipeline Governance",
    auditBadge: "Automated Data Controls",
    description: "Built an enterprise-grade Lakehouse processing 100K+ Brazilian e-commerce transaction records using PySpark and Delta Lake on a containerized infrastructure, orchestrated via Apache Airflow with MinIO S3 object storage.",
    auditPerspective: "Implemented stringent automated input controls and schema validation across the Medallion Architecture (Bronze -> Silver -> Gold). Developed PySpark idempotency checks, deduplication rules, and Delta Lake ACID transaction logs that prevent duplicate postings and data corruption. Configured Airflow automated alerting and audit logging for pipeline failure monitoring.",
    tags: ["PySpark", "Delta Lake (ACID)", "Input Validation", "Apache Airflow", "Data Governance", "MinIO S3"],
    liveUrl: "https://sites.plane.so/issues/fb4056e1975041fb96f169aff25798e6",
    repoUrl: "https://github.com/darktheDE/Olist-E-Commerce-Lakehouse"
  },
  {
    id: 4,
    title: "Vietnamese LLM KV Cache Compression Benchmark",
    image: "/assets/project/vietllm-ml.png",
    categoryTag: "AI System Governance",
    auditBadge: "Algorithmic Assurance",
    description: "Designed a reproducible benchmarking framework for TurboQuant and KV Cache compression techniques on Vietnamese Large Language Models. Evaluated throughput, VRAM consumption, latency, and perplexity across distributed inference engines.",
    auditPerspective: "Demonstrates practical acumen in Emerging Technology Risk and AI Governance. Established rigorous quantitative testing protocols to audit model accuracy degradation (perplexity shifts) versus computational efficiency trade-offs, providing objective technical evidence for high-stakes enterprise AI deployment audits.",
    tags: ["LLM Governance", "vLLM", "TurboQuant", "Algorithmic Risk", "Benchmarking", "NeMo Curator"],
    liveUrl: "https://github.com/darktheDE/viet-llm-kvcache-benchmark",
    repoUrl: "https://github.com/darktheDE/viet-llm-kvcache-benchmark"
  }
];
