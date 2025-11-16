import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Briefcase, GraduationCap, Trophy } from "lucide-react";

const experiences = [
  {
    icon: Briefcase,
    title: "Full Stack Developer",
    description: "Building scalable web applications with modern technologies",
  },
  {
    icon: Code2,
    title: "Open Source Contributor",
    description: "Contributing to various open-source projects on GitHub",
  },
  {
    icon: GraduationCap,
    title: "Continuous Learner",
    description: "Always exploring new technologies and best practices",
  },
  {
    icon: Trophy,
    title: "Problem Solver",
    description: "Passionate about tackling complex technical challenges",
  },
];

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 relative" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold tracking-wider uppercase">
            Introduction
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4">About Me</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            I'm a passionate full-stack developer with a strong foundation in both frontend and
            backend technologies. I love turning complex problems into simple, beautiful solutions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {experiences.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <motion.div
                whileHover={{ y: -8 }}
                className="bg-card p-6 rounded-xl border border-border hover:border-primary transition-colors h-full"
              >
                <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <item.icon className="text-primary" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 bg-card p-8 rounded-xl border border-border"
        >
          <h3 className="text-2xl font-semibold mb-4">My Journey</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            As a versatile software engineer, I specialize in end-to-end product development—from
            intuitive UI/UX design to robust backend architecture. I build scalable and maintainable
            applications using modern technologies like React, TypeScript, Node.js, and various
            databases.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            My holistic approach integrates performance optimization, clean code practices, and
            user-centric design to deliver impactful digital solutions. I'm always excited to take
            on new challenges and collaborate on innovative projects.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
