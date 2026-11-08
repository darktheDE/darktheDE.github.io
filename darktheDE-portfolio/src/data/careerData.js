/**
 * Career timeline and experience data.
 * Sourced directly from verified profile experience.
 */

export const careerExperiences = [
    {
        id: 'deloitte-vietnam',
        role: 'IT Data Analyst',
        company: 'Deloitte Vietnam',
        division: 'Audit & Assurance',
        location: 'Ho Chi Minh City, Vietnam',
        period: 'Sep 2026 — Present',
        isCurrent: true,
        summary: 'IT Data Analyst at Deloitte Vietnam, focusing on controls testing, IT data analytics, and risk assessments.',
        responsibilities: [
            'Perform IT General Controls testing on access, security, and system changes.',
            'Use IT Data Analytics to analyze client data and detect operational risks.',
            'Help the audit team test controls and write workpaper notes.',
            'Collaborate with cross-functional teams to ensure systems are safe and compliant.',
        ],
        competencies: ['IT Data Analytics', 'Controls Testing', 'SQL Querying', 'Workpaper Documentation', 'Compliance'],
    },
    {
        id: 'kien-hung-company',
        role: 'Founder & Managing Director',
        company: 'Kien Hung Distribution & Trading Co., Ltd.',
        division: 'Management & Technology Solutions',
        location: 'Ho Chi Minh City, Vietnam',
        period: 'Jul 2025 — Present',
        isCurrent: true,
        summary: 'Manage business operations, legal contracts, and lead technology planning and testing for client software systems.',
        responsibilities: [
            'Manage business operations, sign legal contracts, and coordinate with the development team.',
            'Consult with clients to analyze business needs and plan software features.',
            'Test final software products to verify stability and quality before official release.',
            'Delivered systems: banthuocsi.vn (E-commerce) and dinkybinhduong.vn (Restaurant System).',
        ],
        competencies: ['Business Management', 'Software Planning', 'Requirements Analysis', 'Acceptance Testing (UAT)'],
    },
    {
        id: 'hcmute-rtic',
        role: 'Co-Founder & Vice President',
        company: 'HCM UTE Research on Technology and Innovation Club - HCMUTE RTIC',
        division: 'Academic & Technical Leadership',
        location: 'Thu Duc City, HCMC, Vietnam',
        period: 'May 2025 — Present',
        isCurrent: true,
        summary: 'Co-founded HCMUTE RTIC to organize technical workshops, mentor members, and build academic software solutions.',
        responsibilities: [
            'Lead academic initiatives and manage internal technical projects.',
            'Organize hands-on software workshops and mentor members in algorithms, backend development, and business analysis.',
            'Serve as Lead BA for hcmutertic.com, and BA/FE for 25nam.fit.hcmute.edu.vn and wellness.hcmutertic.com.',
        ],
        competencies: ['Technical Leadership', 'Workshop Mentoring', 'Business Analysis (BA)', 'Frontend Development'],
    },
    {
        id: 'aura-group',
        role: 'Data Engineer',
        company: 'AURA GROUP',
        division: 'Enterprise Data Platform & ERP',
        location: 'HCMC, Vietnam',
        period: 'Apr 2026 — Jun 2026',
        isCurrent: false,
        summary: 'Researched and mapped enterprise data flows across internal tools and pipelines to support new ERP architecture.',
        responsibilities: [
            'Researched and mapped enterprise data flows from sources (Supabase, Lark) through Airbyte, Airflow, and BigQuery to n8n, Google Sheets, and Lark to support new ERP system design.',
            'Created technical documentation and designed dashboard wireframes to visualize key business metrics.',
            'Worked with System Admin, monitored Airflow, Airbyte, and BigQuery pipelines, troubleshooting Lark synchronization failures by investigating query logs.',
        ],
        competencies: ['Airflow', 'Airbyte', 'BigQuery', 'Data Flow Mapping', 'Troubleshooting'],
    },
    {
        id: 'hcmute-ta',
        role: 'Teaching Assistant',
        company: 'HCMC University of Technology and Engineering',
        division: 'Faculty of Information Technology',
        location: 'HCMC, Vietnam',
        period: 'Jan 2026 — Apr 2026',
        isCurrent: false,
        summary: 'Assisted in teaching relational database design, normalization, and SQL optimization for undergraduate students.',
        responsibilities: [
            'Assist in teaching relational database design, normalization, and SQL optimization for 200+ students.',
            'Guide students in implementing complex queries and understanding internal database execution plans.',
            'Grade assignments, lab exercises, and provide constructive feedback to improve student understanding of database concepts.',
        ],
        competencies: ['Database Design (ERD)', 'Normalization', 'SQL Optimization', 'Execution Plans', 'Student Mentoring'],
    },
];
