export interface Project {
    id: string;
    title: string;
    description: string;
    image: string;
    tags: string[];
    demoUrl?: string;
    codeUrl?: string;
    technologies: string[];
}

export interface Experience {
    id: string;
    company: string;
    role: string;
    duration: string;
    description: string;
    logo: string;
}

export interface Skill {
    id: string;
    name: string;
    category: string[];
    level: number; // 1-5
    icon: string;
}

export interface Interest {
    id: string;
    name: string;
    level: number; // 0-100
    icon: string;
}

export interface Social {
    id: string;
    name: string;
    url: string;
    icon: string;
}

export interface NavItem {
    id: string;
    label: string;
    href: string;
}
