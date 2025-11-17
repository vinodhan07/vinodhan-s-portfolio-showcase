import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const expertisePoints = [
  "Proficient in building interactive, user-friendly web and mobile applications using modern frameworks and libraries.",
  "Expert at integrating APIs and developing back-end solutions to support dynamic and scalable applications.",
  "Focused on crafting clean, maintainable code to ensure long-term app performance and reliability.",
  "Proficient in using version control systems like Git and deploying applications to cloud platforms, ensuring efficient collaboration and scalable, reliable delivery.",
  "Strong understanding of UI/UX principles to deliver visually appealing, functional designs that align with user needs."
];

const techIcons = [
  { name: "HTML5", icon: "🟧" },
  { name: "CSS3", icon: "🔷" },
  { name: "JavaScript", icon: "🟨" },
  { name: "React", icon: "⚛️" },
  { name: "Node.js", icon: "🟢" },
  { name: "MongoDB", icon: "🍃" },
  { name: "Redux", icon: "🟣" },
  { name: "Git", icon: "🔴" },
  { name: "Figma", icon: "🎨" },
  { name: "FL Studio", icon: "🎵" },
  { name: "Next.js", icon: "⬛" },
  { name: "Tailwind", icon: "💨" },
  { name: "TypeScript", icon: "🔷" },
  { name: "AWS", icon: "☁️" },
];

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-20" ref={ref}>
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-gray-400 text-sm font-light tracking-[0.3em] uppercase">
            EXPERTISE
          </span>
          <h2 className="text-5xl md:text-7xl font-bold mt-2 mb-8">SKILLS.</h2>
          <p className="text-gray-300 text-lg leading-relaxed max-w-5xl">
            As a versatile software engineer, I specialize in end-to-end product development—from intuitive UI/UX design to robust backend architecture. I build scalable and maintainable applications using HTML, CSS, JavaScript, React, React Native, Node.js, and MongoDB. With experience in design tools like Figma and a strong grasp of testing and CI/CD workflows, I ensure quality-driven development and seamless deployments. My holistic approach integrates performance optimization, clean code practices, and user-centric design to deliver impactful digital solutions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {expertisePoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-[#1a1d2e] p-6 rounded-2xl border border-gray-800 hover:border-primary/50 transition-colors"
            >
              <div className="flex items-start gap-3">
                <span className="text-primary text-xl mt-1">•</span>
                <p className="text-gray-300 text-sm leading-relaxed">{point}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-wrap justify-center gap-4"
        >
          {techIcons.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.3, delay: 0.6 + index * 0.05 }}
              className="bg-[#1a1d2e] w-16 h-16 rounded-2xl border border-gray-800 flex items-center justify-center text-3xl hover:border-primary/50 transition-colors"
              title={tech.name}
            >
              {tech.icon}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
