import {
    FaReact, FaJs, FaHtml5, FaCss3Alt, FaPython,
    FaGitAlt, FaGithub, FaLinux, FaDocker, FaJava
} from 'react-icons/fa';
import {
    SiTypescript, SiTailwindcss, SiMongodb, SiPostgresql,
    SiExpress, SiVite, SiFirebase, SiVercel, SiApachespark,
    SiSpring, SiApache, SiPandas, SiNumpy, SiJupyter,
    SiFastapi, SiNextdotjs
} from 'react-icons/si';

// Icons for Shadcn likely generic or specialized. Using a code icon for now or just generic if not found.
// Actually Shadcn doesn't have a direct simple icon in si often. I will use SiRadixui as proxy or similar, or just omit icon?
// User asked to add it. I'll use a placeholder or generic.
// Let's use FaCode for generic or SiNextdotjs for simplicity if needed.
// Actually, let's use a clear icon.

export const skillCategories = [
    {
        title: "Backend & Server",
        skills: [
            { name: "Java", icon: FaJava, color: "text-red-500" },
            { name: "Spring Boot", icon: SiSpring, color: "text-green-500" },
            { name: "Python", icon: FaPython, color: "text-blue-500" },
            { name: "FastAPI", icon: SiFastapi, color: "text-teal-500" },
            { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-400" },
            { name: "MongoDB", icon: SiMongodb, color: "text-green-400" }
        ]
    },
    {
        title: "Frontend & UI",
        skills: [
            { name: "Next.js", icon: SiNextdotjs, color: "text-white" },
            { name: "React", icon: FaReact, color: "text-blue-400" },
            { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-teal-400" },
            { name: "shadcn/ui", icon: FaCode, color: "text-white" }, // Proxy icon
            { name: "Vite", icon: SiVite, color: "text-purple-400" },
            { name: "TypeScript", icon: SiTypescript, color: "text-blue-500" }
        ]
    },
    {
        title: "Data Engineering",
        skills: [
            { name: "Apache Spark", icon: SiApachespark, color: "text-orange-500" },
            { name: "Hadoop", icon: SiApache, color: "text-yellow-500" },
            { name: "Pandas", icon: SiPandas, color: "text-blue-400" },
            { name: "PySpark", icon: FaPython, color: "text-yellow-400" }
        ]
    },
    {
        title: "DevOps & Cloud",
        skills: [
            { name: "Docker", icon: FaDocker, color: "text-blue-500" },
            { name: "Git", icon: FaGitAlt, color: "text-orange-500" },
            { name: "GitHub", icon: FaGithub, color: "text-gray-200" },
            { name: "Linux", icon: FaLinux, color: "text-gray-200" },
            { name: "Maven", icon: SiApache, color: "text-red-500" }
        ]
    }
];

export const learningSkills = ['GraphQL', 'AWS', 'Kubernetes', 'Redis', 'Socket.io', 'AI Agents'];
import { FaCode } from 'react-icons/fa';
