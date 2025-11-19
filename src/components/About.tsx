import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Award, Network } from "lucide-react";
import profileImg from "@/assets/profile.png";

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 relative" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="flex gap-8">
          {/* Vertical accent line */}
          <motion.div
            initial={{ height: 0 }}
            animate={isInView ? { height: "100%" } : {}}
            transition={{ duration: 1, delay: 0.2 }}
            className="w-1 bg-primary rounded-full hidden md:block flex-shrink-0"
          />

          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <span className="text-muted-foreground text-sm font-medium tracking-wider uppercase">
                INTRODUCTION
              </span>
              <h2 className="text-5xl md:text-6xl font-bold mt-2">About.</h2>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Left side - Avatar */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative flex justify-center lg:justify-start"
              >
                <motion.div
                  animate={{ y: [0, -15, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="relative"
                >
                  <div className="absolute inset-0 bg-primary/10 rounded-full blur-3xl" />
                  <img 
                    src={profileImg} 
                    alt="Vinodhan - Full Stack Developer" 
                    className="relative z-10 w-[350px] h-[350px] object-contain"
                  />
                </motion.div>
              </motion.div>

              {/* Right side - Info Cards */}
              <div className="space-y-6">
                {/* Education Card */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="bg-card/50 backdrop-blur-sm p-8 rounded-2xl border border-border/50 hover:border-primary/50 transition-all"
                >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <GraduationCap className="text-primary" size={24} />
                </div>
                <h3 className="text-2xl font-bold">Education</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground">Bachelor of Computer Science</h4>
                  <p className="text-muted-foreground text-sm">
                    Sri Eshwar College of Engineering, 2023 – 2027
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Higher Secondary Certificate (HSC)</h4>
                  <p className="text-muted-foreground text-sm">
                    PKD Matriculation Higher Secondary School, 2021 – 2023
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Secondary School Leaving Certificate (SSLC)</h4>
                  <p className="text-muted-foreground text-sm">
                    PKD Matriculation Higher Secondary School, 2020 – 2021
                  </p>
                </div>
              </div>
            </motion.div>

                {/* Achievements Card */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="bg-card/50 backdrop-blur-sm p-8 rounded-2xl border border-border/50 hover:border-primary/50 transition-all"
                >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Award className="text-primary" size={24} />
                </div>
                <h3 className="text-2xl font-bold">Achievements</h3>
              </div>
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold text-foreground">SIH - 2025 Finalist (Internal)</h4>
                  <p className="text-muted-foreground text-sm">
                    Smart India Hackathon 2025, Finalist (Internal)
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Second Runner-Up</h4>
                  <p className="text-muted-foreground text-sm">
                    Futurepreneur 2025, District Level, Rajalakshmi Institute of Technology (RIT)
                  </p>
                </div>
              </div>
            </motion.div>

                {/* Experience Card */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="bg-card/50 backdrop-blur-sm p-8 rounded-2xl border border-border/50 hover:border-primary/50 transition-all"
                >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Network className="text-primary" size={24} />
                </div>
                <h3 className="text-2xl font-bold">Experience</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground">Full Stack Developer Intern</h4>
                  <p className="text-muted-foreground text-sm mb-1">
                    RAMPeX Technologies (ongoing)
                  </p>
                  <p className="text-muted-foreground text-sm">
                    Engaged in full-stack development, contributing to both front-end and back-end solutions.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Freelance Developer</h4>
                  <p className="text-muted-foreground text-sm">
                    Specialized in delivering front-end, back-end, and mobile app solutions to clients.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Founder, NETIZENS IT SOLUTION</h4>
                  <p className="text-muted-foreground text-sm">
                    Co-founder and partner, leading a technology solutions company focused on innovative services.
                  </p>
                </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
