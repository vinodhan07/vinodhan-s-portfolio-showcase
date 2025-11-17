import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Award, Network } from "lucide-react";

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 relative overflow-hidden" ref={ref}>
      {/* Background blob */}
      <motion.div
        className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-900/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="container mx-auto px-4 md:px-8 lg:px-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="text-muted-foreground text-sm font-medium tracking-[0.2em] uppercase">
            INTRODUCTION
          </span>
          <h2 className="text-5xl md:text-6xl font-bold mt-2">About.</h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left side - Avatar */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="flex justify-center lg:justify-start"
          >
            <div className="relative">
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <span className="text-[280px] md:text-[320px] block">👨‍💻</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Right side - Cards */}
          <div className="space-y-6">
            {/* Education Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 hover:border-primary/50 transition-all"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-primary/10 p-2 rounded-lg">
                  <GraduationCap className="text-primary" size={24} />
                </div>
                <h3 className="text-2xl font-bold">Education</h3>
              </div>
              <div className="space-y-4 text-muted-foreground">
                <div>
                  <p className="text-foreground font-medium">Bachelor of Computer Science</p>
                  <p className="text-sm">Sri Eshwar College of Engineering, 2023 – 2027</p>
                </div>
                <div>
                  <p className="text-foreground font-medium">Higher Secondary Certificate (HSC)</p>
                  <p className="text-sm">PKD Matriculation Higher Secondary School, 2021 – 2023</p>
                </div>
                <div>
                  <p className="text-foreground font-medium">Secondary School Leaving Certificate (SSLC)</p>
                  <p className="text-sm">PKD Matriculation Higher Secondary School, 2020 – 2021</p>
                </div>
              </div>
            </motion.div>

            {/* Achievements Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 hover:border-primary/50 transition-all"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-primary/10 p-2 rounded-lg">
                  <Award className="text-primary" size={24} />
                </div>
                <h3 className="text-2xl font-bold">Achievements</h3>
              </div>
              <div className="space-y-3 text-muted-foreground">
                <div>
                  <p className="text-foreground font-medium">SIH - 2025 Finalist (Internal)</p>
                  <p className="text-sm">Smart India Hackathon 2025, Finalist (Internal)</p>
                </div>
                <div>
                  <p className="text-foreground font-medium">Second Runner-Up</p>
                  <p className="text-sm">Futurepreneur 2025, District Level, Rajalakshmi Institute of Technology (RIT)</p>
                </div>
              </div>
            </motion.div>

            {/* Experience Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 hover:border-primary/50 transition-all"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-primary/10 p-2 rounded-lg">
                  <Network className="text-primary" size={24} />
                </div>
                <h3 className="text-2xl font-bold">Experience</h3>
              </div>
              <div className="space-y-4 text-muted-foreground">
                <div>
                  <p className="text-foreground font-medium">Full Stack Developer Intern</p>
                  <p className="text-sm">RAMPeX Technologies (ongoing): Engaged in full-stack development, contributing to both front-end and back-end solutions.</p>
                </div>
                <div>
                  <p className="text-foreground font-medium">Freelance Developer</p>
                  <p className="text-sm">Specialized in delivering front-end, back-end, and mobile app solutions to clients.</p>
                </div>
                <div>
                  <p className="text-foreground font-medium">Founder, NETIZENS IT SOLUTION</p>
                  <p className="text-sm">Co-founder and partner, leading a technology solutions company focused on innovative services.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
