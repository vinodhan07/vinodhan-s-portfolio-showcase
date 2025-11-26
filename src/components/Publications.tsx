import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";

const publications = [
  {
    title: "Deep Learning Approaches in Computer Vision",
    venue: "International Journal of Computer Science",
    description: "Exploring advanced neural network architectures for image recognition and classification tasks.",
  },
  {
    title: "Scalable Microservices Architecture Patterns",
    venue: "Tech Conference 2024",
    description: "Best practices for building and deploying distributed systems at scale.",
  },
  {
    title: "Modern Web Development with React and TypeScript",
    venue: "Web Development Journal",
    description: "A comprehensive guide to building type-safe, performant web applications.",
  },
];

export function Publications() {
  return (
    <section id="publications" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-4">
            <BookOpen className="w-8 h-8 text-primary" />
            <h2 className="text-4xl font-bold text-foreground">Publications</h2>
          </div>
        </motion.div>

        <div className="space-y-6">
          {publications.map((pub, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="border border-border rounded-lg p-6 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all"
            >
              <h3 className="text-xl font-bold text-foreground mb-2">{pub.title}</h3>
              <p className="text-muted-foreground mb-3 italic">{pub.venue}</p>
              <p className="text-foreground/80">{pub.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
