/**
 * Centralized configuration for personal information, external links, and assets.
 */

export const PERSONAL_INFO = {
    name: 'DO KIEN HUNG',
    vietnameseName: 'Đỗ Kiến Hưng',
    nickname: 'darktheDE',
    title: 'IT Data Analyst',
    tagline: 'IT Data Analyst at Deloitte Vietnam and Data Engineering student at HCM-UTE.',
    description: 'Kien Hung is a Data Engineering student at HCMUTE and an IT Data Analyst at Deloitte Vietnam. His work focuses on building data systems and using IT data analytics to assess technology risks. Alongside his work at Deloitte, he runs his family\'s company, where he manages business operations and tech projects. Kien Hung is also the Co-founder and Vice President of HCMUTE RTIC, leading technical workshops and student software initiatives.',
    location: 'Thu Duc City, Ho Chi Minh City, Vietnam',
    specialties: [
        'IT Data Analytics',
        'Controls & Compliance',
        'SQL & Database Systems',
        'Enterprise Data Flows',
    ],
    metrics: [
        { label: 'Current GPA', value: '8.41' },
        { label: 'Certifications', value: '11' },
        { label: 'Core Projects', value: '5' },
        { label: 'Co-Founder', value: 'RTIC' },
    ],
};

export const EDUCATION = [
    {
        institution: 'HCMC University of Technology and Engineering',
        degree: 'Bachelor of Engineering — Data Engineering',
        period: 'Oct 2023 — Oct 2027',
        detail: 'Current GPA: 8.41 / 10.0',
    },
    {
        institution: 'Hung Vuong High School, HCMC',
        degree: 'High School Diploma — English-Specialized Class',
        period: 'Aug 2020 — Jul 2023',
        detail: 'Advanced English Curriculum',
    },
];

export const SOCIAL_LINKS = {
    github: 'https://github.com/darktheDE',
    linkedin: 'https://www.linkedin.com/in/darkthede/',
    facebook: 'https://www.facebook.com/dkh1105/',
    email: 'mailto:dkh1105.work@gmail.com',
};

export const RTIC_INFO = {
    name: 'HCMUTE RTIC',
    fullName: 'HCMUTE Research on Technology & Innovation Club',
    role: 'Vice Leader & Co-Founder',
    memberCount: '40+',
    projectCount: '15+',
    webProjects: [
        { name: 'hcmutertic.com', role: 'Lead BA' },
        { name: '25nam.fit.hcmute.edu.vn', role: 'BA / Frontend' },
        { name: 'wellness.hcmutertic.com', role: 'BA / Frontend' },
    ],
    fanpage: 'https://www.facebook.com/hcmute.rtic',
    github: 'https://github.com/HCMUTE-RTIC',
    website: 'https://hcmutertic.com/',
};

export const ASSETS = {
    profileImage: '/assets/profile/profile01.webp',
    certificatesBundle: '/docs/Certificates_Bundle_DO_KIEN_HUNG.pdf',
};

export const CONTACT_CONFIG = {
    web3formsAccessKey: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || '',
    recipientEmail: 'dkh1105.work@gmail.com',
    location: 'Thu Duc City, Ho Chi Minh City, Vietnam',
    topics: [
        'General Inquiry / Saying Hello',
        'Project Collaboration',
        'Career / Professional Opportunity',
        'Technical Discussion',
    ],
};
