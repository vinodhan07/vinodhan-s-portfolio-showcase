import { motion } from "framer-motion";
import { useRef, useState } from "react";
import antigravityLogo from "@/assets/antigravity-logo.png";
import { ParallaxSection, TextReveal } from "./animations";

// Custom SVG Icons
const MetaSVG = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M17.07 7.02c-1.39 0-2.6.72-3.32 1.83-.72-1.11-1.93-1.83-3.32-1.83-2.68 0-4.85 2.17-4.85 4.85 0 2.68 2.17 4.85 4.85 4.85 1.39 0 2.6-.72 3.32-1.83.72 1.11 1.93 1.83 3.32 1.83 2.68 0 4.85-2.17 4.85-4.85 0-2.68-2.17-4.85-4.85-4.85zm-6.64 8c-1.74 0-3.15-1.41-3.15-3.15s1.41-3.15 3.15-3.15c.67 0 1.29.21 1.8.57-.96.96-1.57 2.29-1.57 3.75s.61 2.79 1.57 3.75c-.51.36-1.13.57-1.8.57zm6.64 0c-.67 0-1.29-.21-1.8-.57.96-.96 1.57-2.29 1.57-3.75s-.61-2.79-1.57-3.75c.51-.36 1.13-.57 1.8-.57 1.74 0 3.15 1.41 3.15 3.15s-1.41 3.15-3.15 3.15z"/>
  </svg>
);

const SparklesSVG = (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275Z"/>
    <path d="m5 3 1 2.5L8.5 6 6 7 5 9.5 4 7 1.5 6 4 5.5Z"/>
    <path d="m19 17 1 2.5 2.5.5-2.5 1-1 2.5-1-2.5-2.5-1 2.5-1Z"/>
  </svg>
);

const techIcons = [
  // AI & Agentic AI
  { name: "LangGraph", logo: "https://registry.npmmirror.com/@lobehub/icons-static-png/latest/files/light/langgraph-color.png", color: "#E25A38" },
  { name: "FAISS", logo: MetaSVG, color: "#0668E1" },
  { name: "OpenAI", logo: "https://avatars.githubusercontent.com/u/14957082?s=200&v=4", color: "#10A37F" },
  { name: "Anthropic", logo: "https://avatars.githubusercontent.com/u/76263028?s=200&v=4", color: "#E57B4E" },
  { name: "Gemini", logo: "https://upload.wikimedia.org/wikipedia/commons/8/8f/Google-gemini-icon.svg", color: "#1A73E8" },
  { name: "Ollama", logo: "https://avatars.githubusercontent.com/u/151674099?s=200&v=4", color: "#7F7F7F" },
  { name: "Prompt Engineering", logo: SparklesSVG, color: "#A855F7" },

  // Full-Stack
  { name: "React.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", color: "#61DAFB" },
  { name: "FastAPI", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg", color: "#009688" },
  { name: "Tailwind", logo: "https://cdn.jsdelivr.net/gh/devicons@latest/icons/tailwindcss/tailwindcss-original.svg", color: "#06B6D4" },
  { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", color: "#F7DF1E" },
  { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", color: "#3178C6" },
  { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", color: "#3776AB" },
  { name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", color: "#4169E1" },
  { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", color: "#47A248" },
  { name: "Supabase", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg", color: "#3ECF8E" },
  { name: "HTML5", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", color: "#E34F26" },
  { name: "CSS3", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", color: "#1572B6" },

  // Cloud & Infra
  { name: "AWS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg", color: "#FF9900" },
  { name: "Lambda", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/awslambda.svg", color: "#FF9900" },
  { name: "Cognito", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/amazoncognito.svg", color: "#FF9900" },
  { name: "DynamoDB", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/amazondynamodb.svg", color: "#4053F2" },
  { name: "Amplify", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/awsamplify.svg", color: "#FF5A5F" },
  { name: "S3", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/amazons3.svg", color: "#569A80" },
  { name: "Google Cloud", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg", color: "#4285F4" },
  { name: "n8n", logo: "https://avatars.githubusercontent.com/u/45487711?s=200&v=4", color: "#FF6D5A" },
  { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", color: "#2496ED" },
  { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", color: "#F05032" },
  { name: "GitHub", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", invertDark: true, color: "#7F7F7F" },
  { name: "Postman", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-plain.svg", color: "#FF6C37" },
  { name: "Antigravity", logo: antigravityLogo, invertDark: true, color: "#00D2FF" },

  // Creative Design & UI/UX
  { name: "Photoshop", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-original.svg", color: "#31A8FF" },
  { name: "Illustrator", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg", color: "#FF9A00" },
  { name: "Canva", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/canva.svg", color: "#00C4CC" },
  { name: "Figma", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg", color: "#F24E1E" },
];

const categories = [
  {
    title: "AI & Agentic AI",
    desc: "Architecting autonomous LLM agents, cognitive workflows, and semantic search.",
    skills: ["LangGraph", "FAISS", "OpenAI", "Anthropic", "Gemini", "Ollama", "Prompt Engineering"],
    glowColor: "rgba(168, 85, 247, 0.12)", // purple glow
    floatDuration: 5,
    delay: 0,
  },
  {
    title: "Full-Stack Development",
    desc: "Designing responsive frontend layouts and robust backend systems.",
    skills: ["React.js", "FastAPI", "Tailwind", "JavaScript", "TypeScript", "Python", "PostgreSQL", "MongoDB", "Supabase", "HTML5", "CSS3"],
    glowColor: "rgba(6, 182, 212, 0.12)", // cyan glow
    floatDuration: 6,
    delay: 0.5,
  },
  {
    title: "Cloud & Infrastructure",
    desc: "Deploying serverless infrastructure, integrations, and automated pipelines.",
    skills: ["AWS", "Lambda", "Cognito", "DynamoDB", "Amplify", "S3", "Google Cloud", "n8n", "Docker", "Git", "GitHub", "Postman", "Antigravity"],
    glowColor: "rgba(255, 153, 0, 0.12)", // amber glow
    floatDuration: 5.5,
    delay: 1,
  },
  {
    title: "Creative Design & UI/UX",
    desc: "Crafting visually striking posters, marketing assets, and modern interface mockups.",
    skills: ["Photoshop", "Illustrator", "Canva", "Figma"],
    glowColor: "rgba(0, 196, 204, 0.12)", // teal glow
    floatDuration: 4.8,
    delay: 1.5,
  },
];

function SkillPill({ tech }: { tech: typeof techIcons[number] }) {
  const [isHovered, setIsHovered] = useState(false);

  const hoverStyle = isHovered
    ? {
        borderColor: `${tech.color}45`,
        backgroundColor: `${tech.color}0D`, // ~8% opacity
        color: tech.color,
        boxShadow: `0 0 16px -2px ${tech.color}20`,
      }
    : {};

  return (
    <motion.div
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      style={hoverStyle}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      className="flex items-center gap-2.5 px-4 py-2.5 rounded-full border border-border/40 bg-background/30 backdrop-blur-md text-sm font-semibold text-muted-foreground hover:text-foreground transition-all duration-300 cursor-pointer"
    >
      {typeof tech.logo === "string" ? (
        <img
          src={tech.logo}
          alt={tech.name}
          className={`w-5 h-5 object-contain transition-all duration-300 ${
            isHovered ? "grayscale-0 scale-110" : "grayscale opacity-80"
          } ${tech.invertDark ? "dark:invert" : ""}`}
        />
      ) : (
        <div
          className={`w-5 h-5 flex items-center justify-center transition-all duration-300 ${
            isHovered ? "scale-110" : "opacity-80"
          }`}
          style={isHovered ? { color: tech.color } : {}}
        >
          {tech.logo}
        </div>
      )}
      <span className="select-none tracking-wide text-xs sm:text-sm">{tech.name}</span>
    </motion.div>
  );
}

export function Skills() {
  const ref = useRef(null);

  return (
    <section id="skills" className="py-24 relative overflow-hidden" ref={ref}>
      {/* Cloud-like soft ambient background glow */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none" />

      <ParallaxSection speed={0.03} className="container mx-auto px-4 max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-primary text-sm font-bold tracking-[0.4em] uppercase mb-4 block">
            EXPERTISE
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black mt-2 mb-8 tracking-tighter">
            <TextReveal splitBy="chars" variant="slide">Skills.</TextReveal>
          </h2>
          <div className="max-w-4xl">
            <TextReveal variant="blur" delay={0.4} className="text-muted-foreground text-xl leading-relaxed" splitBy="words">
              As a versatile engineer, I bridge the gap between complex AI agents, cloud architectures, and visual design. Specialized in building intelligent workflows using FastAPI, LangGraph, and n8n, deploying cloud-native serverless systems, and creating visually striking designs that captivate audiences.
            </TextReveal>
          </div>
        </motion.div>

        {/* Section-Wise Cloud Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mt-12">
          {categories.map((cat) => {
            const categorySkills = techIcons.filter((t) => cat.skills.includes(t.name));

            return (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                animate={{ y: [0, -6, 0] }}
                transition={{
                  y: {
                    repeat: Infinity,
                    duration: cat.floatDuration,
                    ease: "easeInOut",
                    delay: cat.delay,
                  },
                  opacity: { duration: 0.6 }
                }}
                whileHover={{ y: -10, transition: { duration: 0.2 } }}
                className="relative group overflow-hidden rounded-[2rem] p-8 bg-card/10 backdrop-blur-xl border border-border/20 shadow-[0_8px_30px_rgb(0,0,0,0.02)] transition-all duration-300"
              >
                {/* Background Cloud Glow */}
                <div
                  className="absolute -right-20 -top-20 w-48 h-48 rounded-full blur-[85px] pointer-events-none opacity-40 group-hover:opacity-75 transition-opacity duration-500"
                  style={{ backgroundColor: cat.glowColor }}
                />

                <h3 className="text-xl font-extrabold text-foreground tracking-tight flex items-center gap-3">
                  {cat.title}
                </h3>
                <p className="text-sm text-muted-foreground mt-2 mb-6 leading-relaxed">
                  {cat.desc}
                </p>

                <div className="flex flex-wrap gap-2.5">
                  {categorySkills.map((tech) => (
                    <SkillPill key={tech.name} tech={tech} />
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </ParallaxSection>
    </section>
  );
}
