import {
    FaReact, FaPython,
    FaGitAlt, FaGithub, FaLinux, FaDocker, FaJava, FaCode
} from 'react-icons/fa';
import {
    SiTailwindcss, SiPostgresql,
    SiVite, SiApachespark,
    SiSpring, SiApache, SiPandas,
    SiNextdotjs, SiApacheairflow, SiAmazonwebservices
} from 'react-icons/si';
import { VscAzureDevops } from 'react-icons/vsc';
import { DiMsqlServer } from 'react-icons/di';



// Icons for Portfolio
export const skillCategories = [
    {
        title: "Data Engineering",
        skills: [
            { name: "Apache Spark", icon: SiApachespark, color: "text-orange-500" },
            { name: "Airflow", icon: SiApacheairflow, color: "text-blue-500" },
            { name: "Trino", icon: SiApache, color: "text-blue-300" },
            { name: "Iceberg", icon: SiApache, color: "text-blue-400" },
            { name: "Delta Lake", icon: SiApache, color: "text-blue-600" },
            { name: "MS SQL Server", icon: DiMsqlServer, color: "text-red-400" },

            { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-400" }
        ]
    },
    {
        title: "Backend & Systems",
        skills: [
            { name: "Python", icon: FaPython, color: "text-blue-500" },
            { name: "Java", icon: FaJava, color: "text-red-500" },
            { name: "Spring Boot", icon: SiSpring, color: "text-green-500" },
            { name: "Pandas", icon: SiPandas, color: "text-blue-400" },
            { name: "PySpark", icon: FaPython, color: "text-yellow-400" },
            { name: "Maven", icon: SiApache, color: "text-red-500" }
        ]
    },
    {
        title: "Cloud & DataOps",
        skills: [
            { name: "AWS", icon: SiAmazonwebservices, color: "text-orange-400" },
            { name: "Docker", icon: FaDocker, color: "text-blue-500" },
            { name: "Git", icon: FaGitAlt, color: "text-orange-500" },
            { name: "GitHub", icon: FaGithub, color: "text-gray-200" },
            { name: "Linux", icon: FaLinux, color: "text-gray-200" },
            { name: "Agile/Scrum", icon: VscAzureDevops, color: "text-blue-500" }
        ]
    }
];

export const learningSkills = ['Data Lakehouse', 'Distributed Systems', 'Apache Iceberg', 'Trino', 'AI Agents', 'OpenOps'];


