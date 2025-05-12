import {
    Experience,
    Interest,
    NavItem,
    Project,
    Skill,
    Social,
} from "../types";

export const navItems: NavItem[] = [
    { id: "home", label: "Home", href: "#home" },
    { id: "about", label: "About", href: "#about" },
    { id: "projects", label: "Projects", href: "#projects" },
    { id: "experience", label: "Experience", href: "#experience" },
    { id: "skills", label: "Skills", href: "#skills" },
    { id: "contact", label: "Contact", href: "#contact" },
];

export const skills: Skill[] = [
    {
        id: "s1",
        name: "Python",
        category: ["Programming Languages"],
        level: 5,
        icon: "python",
    },
    {
        id: "s2",
        name: "JavaScript",
        category: ["Programming Languages"],
        level: 5,
        icon: "javascript",
    },
    {
        id: "s3",
        name: "Golang",
        category: ["Programming Languages"],
        level: 4,
        icon: "go",
    },
    {
        id: "s4",
        name: "TypeScript",
        category: ["Programming Languages"],
        level: 4,
        icon: "typescript",
    },
    {
        id: "s5",
        name: "Django Rest Framework",
        category: ["Frameworks"],
        level: 4,
        icon: "django",
    },
    {
        id: "s6",
        name: "Express.js",
        category: ["Frameworks"],
        level: 4,
        icon: "express",
    },
    {
        id: "s7",
        name: "React",
        category: ["Frameworks"],
        level: 4,
        icon: "react",
    },
    {
        id: "s8",
        name: "Wails",
        category: ["Frameworks"],
        level: 3,
        icon: "go",
    },
    {
        id: "s9",
        name: "AWS (EC2, S3, Lambda)",
        category: ["Cloud & DevOp"],
        level: 4,
        icon: "amazonwebservices",
    },
    {
        id: "s10",
        name: "Docker",
        category: ["Cloud & DevOp"],
        level: 4,
        icon: "docker",
    },
    {
        id: "s11",
        name: "PostgreSQL",
        category: ["Databases & Caching"],
        level: 5,
        icon: "postgresql",
    },
    {
        id: "s12",
        name: "MongoDB",
        category: ["Databases & Caching"],
        level: 4,
        icon: "mongodb",
    },
    {
        id: "s13",
        name: "MySQL",
        category: ["Databases & Caching"],
        level: 4,
        icon: "mysql",
    },
    {
        id: "s14",
        name: "Redis",
        category: ["Databases & Caching"],
        level: 4,
        icon: "redis",
    },
    {
        id: "s15",
        name: "Git/GitHub/Bitbucket",
        category: ["Version Control"],
        level: 4,
        icon: "git",
    },
    {
        id: "s16",
        name: "Jira",
        category: ["Version Control"],
        level: 3,
        icon: "jira",
    },
    {
        id: "s17",
        name: "Microservices",
        category: ["System Architecture"],
        level: 4,
        icon: "docker",
    },
    {
        id: "s18",
        name: "RESTful Architecture",
        category: ["System Architecture"],
        level: 4,
        icon: "express",
    },
];

export const experiences: Experience[] = [
    {
        id: "e1",
        company: "CodeNicely",
        role: "Software Developer",
        duration: "Apr 2024 – Present",
        description:
            "Developed microservices infrastructure for 1000+ APIs, reducing support tickets by 25%. Improved API performance with a 50% cut in response time, driving a 30% rise in daily active users.",
        logo: "https://codenicely.in/wp-content/uploads/2020/12/codenicely_name_w_small@2x.png", // Add logo if available
    },
    {
        id: "e2",
        company: "Nirvana Group",
        role: "Software Engineer",
        duration: "Mar 2023 – Apr 2024",
        description:
            "Implemented Flutter-based app templates to speed up project delivery by 20%. Refactored legacy code to reduce load time by 25% and increase session duration by 18%.",
        logo: "https://nirvanagroup.co.in/wp-content/uploads/2023/01/logo-nirvanagroup.jpeg", // Add logo if available
    },
];

export const projects: Project[] = [
    {
        id: "p1",
        title: "HealthPotli - Online Pharmacy",
        description:
            "Built a lab booking system for 10K+ users/month, generating ₹5L+ revenue/month. Integrated Razorpay with 99% success rate and reduced order processing time by 35%.",
        image: "https://codenicely.in//wp-content/uploads/2023/06/Healthpotli.jpg",
        tags: ["Web", "Healthcare"],
        demoUrl: "https://www.healthpotli.com/",
        codeUrl: "#",
        technologies: [
            "Django Rest Framework",
            "PostgreSQL",
            "Redis",
            "Razorpay",
        ],
    },
    {
        id: "p2",
        title: "NoteNest – Notes and Todo App",
        description:
            "Built a cross-platform desktop app using Go and React. Features include note formatting, export-to-PDF, and recovery mechanism.",
        image: "https://cdn2.vectorstock.com/i/1000x1000/79/36/empty-notes-isolated-vector-17057936.jpg",
        tags: ["Desktop", "Productivity"],
        demoUrl:
            "https://drive.google.com/file/d/1fHhjGXGODThpzVN_fNT2x_H7E0VTv3W0/view",
        codeUrl: "https://github.com/shubhanshu74156/WailsGoNotesDesktopApp",
        technologies: ["Wails", "Go", "React", "TypeScript"],
    },
    {
        id: "p3",
        title: "BOGO – Offer App",
        description:
            "Voucher platform handling 10K+ transactions/day. Added geo-based offers, improving user engagement. Optimized backend with Redis.",
        image: "https://cdn.prod.website-files.com/66d83d6c8164eadd7d627b82/66e18831b01605aaefe9345d_1726054435473-p-500.png",
        tags: ["Web", "Retail"],
        demoUrl: "https://www.thebogoapp.in/",
        codeUrl: "#",
        technologies: [
            "Django Rest Framework",
            "AWS",
            "PostgreSQL",
            "Razorpay",
            "Redis",
        ],
    },
    {
        id: "p4",
        title: "Music Library Management API",
        description:
            "RESTful API with 25+ endpoints and role-based access. Built with Node.js and PostgreSQL, featuring JWT auth and error handling.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVHJhiYt_ZgWMCJ443oD7UVPKVpTCOYw8FGQ&s",
        tags: ["API", "Music"],
        demoUrl: "#",
        codeUrl: "https://github.com/shubhanshu74156/music-library-api",
        technologies: ["Node.js", "Express", "PostgreSQL", "Render", "JWT"],
    },
];

export const interests: Interest[] = [
    { id: "i1", name: "Problem Solving", level: 90, icon: "lucide-brain" },
    { id: "i2", name: "Gaming", level: 85, icon: "lucide-users" },
    {
        id: "i3",
        name: "Anime",
        level: 80,
        icon: "lucide-git-pull-request",
    },
    {
        id: "i4",
        name: "Competitive Programming",
        level: 75,
        icon: "lucide-terminal",
    },
];

export const socials: Social[] = [
    {
        id: "social1",
        name: "GitHub",
        url: "https://github.com/shubhanshu74156",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    },
    {
        id: "social2",
        name: "LinkedIn",
        url: "https://linkedin.com/in/shubhanshu-tiwari-61b080217",
        icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/linkedin.svg",
    },
    {
        id: "social3",
        name: "LeetCode",
        url: "https://leetcode.com/u/RuruX2000/",
        icon: "https://leetcode.com/_next/static/images/logo-dark-c96c407d175e36c81e236fcfdd682a0b.png",
    },
];
