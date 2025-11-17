import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Github } from "lucide-react";
import { staticProjects, Project } from "@/data/projects";
import { fetchGitHubRepos } from "@/lib/github";

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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="bg-[#1a1d2e] p-6 rounded-2xl border border-gray-800 animate-pulse"
              >
                <div className="h-4 bg-gray-700 rounded w-3/4 mb-4" />
                <div className="h-3 bg-gray-700 rounded w-full mb-2" />
                <div className="h-3 bg-gray-700 rounded w-5/6" />
              </div>
            ))}
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <motion.div
                  whileHover={{ y: -4 }}
                  className="bg-[#1a1d2e] p-6 rounded-2xl border border-gray-800 hover:border-primary/50 transition-all h-full flex flex-col relative group"
                >
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute top-6 right-6 text-gray-400 hover:text-primary transition-colors z-10"
                  >
                    <Github size={24} />
                  </a>

                  <h3 className="text-xl font-semibold mb-3 break-words pr-10">{project.title}</h3>
                  <p className="text-gray-400 text-sm mb-4 flex-grow leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="text-primary text-xs font-mono"
                      >
                        #{tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
