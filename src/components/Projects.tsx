import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { staticProjects } from "@/data/projects";
import { ProjectsGrid } from "./ProjectsGrid";
import { ParallaxSection, TextReveal } from "./animations";

const filters = [
  { label: "All Projects", id: "all" },
  { label: "AI & Agents", id: "AI" },
  { label: "Full-Stack", id: "Full-Stack" },
];

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProjects = staticProjects.filter((project) => {
    if (activeFilter === "all") return true;
    return project.categories.includes(activeFilter);
  });

  return (
    <section id="projects" className="py-24 relative overflow-hidden" ref={ref}>
      {/* Cloud ambient glows */}
      <div className="absolute top-1/3 right-1/4 w-[450px] h-[450px] bg-primary/5 rounded-full blur-[110px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[450px] h-[450px] bg-secondary/3 rounded-full blur-[100px] pointer-events-none" />

      <ParallaxSection speed={0.03} className="container mx-auto px-4 max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-14"
        >
          <span className="text-primary text-xs font-black tracking-[0.4em] uppercase mb-4 block">
            SELECTED PROJECTS
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black mb-8 tracking-tighter">
            <TextReveal variant="slide">Projects.</TextReveal>
          </h2>
          <p className="text-muted-foreground text-xl leading-relaxed max-w-4xl font-medium">
            A showcase of my expertise through real-world applications. Each project represents a bridge between complex problems and elegant, scalable solutions.
          </p>
        </motion.div>

        {/* Filter Navigation */}
        <div className="flex justify-start mb-12 relative z-20">
          <div className="flex items-center gap-1.5 p-1.5 bg-card/10 backdrop-blur-md rounded-full border border-border/20">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`relative px-5 py-2 rounded-full text-sm font-semibold tracking-wide transition-colors duration-300 ${
                  activeFilter === filter.id
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {activeFilter === filter.id && (
                  <motion.div
                    layoutId="activeProjectTab"
                    className="absolute inset-0 bg-primary/10 rounded-full border border-primary/20"
                    transition={{ type: "spring", stiffness: 350, damping: 25 }}
                  />
                )}
                <span className="relative z-10">{filter.label}</span>
              </button>
            ))}
          </div>
        </div>

        <ProjectsGrid projects={filteredProjects} isInView={isInView} />
      </ParallaxSection>
    </section>
  );
}
