import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { staticProjects, Project } from "@/data/projects";
import { fetchGitHubRepos } from "@/lib/github";
import { ProjectsGrid } from "./ProjectsGrid";

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [projects, setProjects] = useState<Project[]>(staticProjects);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProjects = async () => {
      const githubProjects = await fetchGitHubRepos("vinodhan07");
      if (githubProjects.length > 0) {
        setProjects(githubProjects);
      }
      setLoading(false);
    };

    loadProjects();
  }, []);

  return (
    <section id="projects" className="py-20" ref={ref}>
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-gray-400 text-sm font-light tracking-[0.3em] uppercase">
            MY WORKS
          </span>
          <h2 className="text-5xl md:text-7xl font-bold mt-2 mb-8">Projects.</h2>
          <p className="text-gray-300 text-lg leading-relaxed max-w-4xl">
            The following projects showcase my skills and experience through real-world examples of my work. Each project is briefly described with links to code repositories and live demos. They reflect my ability to solve complex problems, work with different technologies, and manage projects effectively.
          </p>
        </motion.div>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="bg-card/50 backdrop-blur-sm p-6 rounded-2xl border border-border animate-pulse h-[280px] flex flex-col"
              >
                <div className="h-6 bg-muted/30 rounded w-3/4 mb-4" />
                <div className="h-4 bg-muted/30 rounded w-full mb-2" />
                <div className="h-4 bg-muted/30 rounded w-5/6 mb-4" />
                <div className="flex gap-2 mt-auto">
                  <div className="h-8 bg-muted/30 rounded w-16" />
                  <div className="h-8 bg-muted/30 rounded w-16" />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <ProjectsGrid projects={projects} isInView={isInView} />
        )}
      </div>
    </section>
  );
}
