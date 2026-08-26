import { AnimatePresence, motion } from "framer-motion";
import { Project } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";

interface ProjectsGridProps {
  projects: Project[];
  isInView: boolean;
}

export function ProjectsGrid({ projects, isInView }: ProjectsGridProps) {
  return (
    <motion.div 
      layout
      className="grid grid-cols-1 md:grid-cols-2 gap-8"
      role="list"
      aria-label="Projects grid"
    >
      <AnimatePresence mode="popLayout">
        {projects.map((project, index) => (
          <motion.div
            layout
            initial={{ opacity: 0, scale: 0.9, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 15 }}
            transition={{ duration: 0.4 }}
            role="listitem"
            key={project.title}
          >
            <ProjectCard
              project={project}
              index={index}
              isInView={isInView}
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </motion.div>
  );
}
