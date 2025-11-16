export interface Project {
  title: string;
  description: string;
  tech: string[];
  repoUrl: string;
  demoUrl?: string;
  image?: string;
  featured?: boolean;
}

export const staticProjects: Project[] = [
  {
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with payment integration, product management, and order tracking.",
    tech: ["React", "Node.js", "MongoDB", "Stripe"],
    repoUrl: "https://github.com/vinodhan07",
    demoUrl: "https://example.com",
    featured: true,
  },
  {
    title: "Task Management App",
    description: "Collaborative task management tool with real-time updates and team collaboration features.",
    tech: ["TypeScript", "React", "Firebase", "Tailwind CSS"],
    repoUrl: "https://github.com/vinodhan07",
    featured: true,
  },
  {
    title: "Weather Dashboard",
    description: "Real-time weather tracking application with location-based forecasts and interactive maps.",
    tech: ["React", "OpenWeather API", "Chart.js"],
    repoUrl: "https://github.com/vinodhan07",
    demoUrl: "https://example.com",
  },
  {
    title: "Portfolio Builder",
    description: "SaaS platform for developers to create and customize their portfolio websites without coding.",
    tech: ["Next.js", "PostgreSQL", "Prisma", "Vercel"],
    repoUrl: "https://github.com/vinodhan07",
  },
];
