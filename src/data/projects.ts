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
    title: "FinAI HackOps",
    description: "AI-powered financial operations and automation platform for intelligent financial workflows and decision-making.",
    tech: ["Python", "TensorFlow", "FastAPI", "React"],
    repoUrl: "https://github.com/vinodhan07/finai-hackops",
    featured: true,
  },
  {
    title: "Gen AI Model",
    description: "Advanced generative AI model implementation with cutting-edge machine learning techniques and neural networks.",
    tech: ["Python", "PyTorch", "Transformers", "Hugging Face"],
    repoUrl: "https://github.com/vinodhan07/gen-ai-model",
    featured: true,
  },
];
