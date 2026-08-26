export interface Project {
  title: string;
  description: string;
  tech: string[];
  repoUrl: string;
  demoUrl?: string;
  image?: string;
  featured?: boolean;
  categories: string[];
}

export const staticProjects: Project[] = [
  {
    title: "AI-Based Image Similarity Detection & Web Scraping System",
    description: "An AI-powered image similarity system built using OpenCLIP embeddings and FAISS vector search to enable high-speed visual matching across large datasets. Includes automated web scraping pipelines, metadata processing, and a full-stack FastAPI + React implementation for real-time similarity comparison.",
    tech: ["Python", "FastAPI", "OpenCLIP", "FAISS", "Web Scraping", "SQLite"],
    repoUrl: "https://github.com/vinodhan07/AI-Based-Image-Similarity-WEB-Scrapping-tool.git",
    featured: true,
    categories: ["AI", "Full-Stack"],
  },
  {
    title: "DeepAgent LangChain – Cognitive Scaffolding for Advanced Reasoning",
    description: "Built a high-integrity AI agent system using Groq Llama 3.3, LangChain, and deepagents to support structured multi-step reasoning. Integrated Tavily Search for real-time validation, enabling the agent to verify claims and reduce hallucinations, and designed a strict output framework covering query understanding, assumptions, evidence, and confidence levels.",
    tech: ["Python", "LangChain", "Groq Llama 3.3", "Tavily Search", "deepagents"],
    repoUrl: "https://github.com/vinodhan07/Debugger_AI",
    featured: true,
    categories: ["AI"],
  },
  {
    title: "LLM-Powered HR Resume Screening Automation",
    description: "Developed an end-to-end recruitment automation system using n8n, OpenAI, Gemini, Gmail, Google Drive, Google Sheets, and REST APIs to parse resumes, evaluate candidates, and automate the hiring workflow. Gained hands-on experience in workflow automation, AI agent orchestration, API integration, and prompt engineering.",
    tech: ["n8n", "OpenAI", "Gemini", "Gmail", "Google Sheets", "REST APIs"],
    repoUrl: "https://github.com/vinodhan07/n8n-AI-Automation-Agents",
    featured: true,
    categories: ["AI"],
  },
  {
    title: "AutoCAD-drawings-and-generates-detailed-Bill-of-Quantities",
    description: "Developed an automated system that processes AutoCAD drawings to extract structural details and generate accurate Bills of Quantities (BOQ), reducing manual estimation effort and improving cost analysis efficiency.",
    tech: ["Python", "FastAPI", "AutoCAD API", "ODA Converter", "BOQ Generation", "Data Extraction", "Pandas", "Automation"],
    repoUrl: "https://github.com/vinodhan07/AutoCAD-drawings-and-generates-detailed-Bill-of-Quantities",
    categories: ["Full-Stack"],
  },
  {
    title: "FinAI HackOps",
    description: "Financial AI automation platform with intelligent data processing and analytics capabilities.",
    tech: ["TypeScript", "PLpgSQL", "AI/ML", "Financial Tech"],
    repoUrl: "https://github.com/vinodhan07/finai-hackops",
    categories: ["Full-Stack"],
  },
  {
    title: "Real-Time Annotation Using Videos",
    description: "Developed a real-time video annotation system that captures and labels video frames on the fly, enabling efficient labeling workflows for computer vision model training and dataset generation.",
    tech: ["Python", "OpenCV", "Real-Time Video Processing", "Computer Vision", "Machine Learning", "GUI/Visualization"],
    repoUrl: "https://github.com/vinodhan07/REAL-TIME-ANNOTATION-USING-VIDEOS.git",
    categories: ["Other"],
  },
];
