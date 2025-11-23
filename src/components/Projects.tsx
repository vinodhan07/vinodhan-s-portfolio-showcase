import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { staticProjects } from "@/data/projects";
import { ProjectsGrid } from "./ProjectsGrid";

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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

        <ProjectsGrid projects={staticProjects} isInView={isInView} />
      </div>
    </section>
  );
}
