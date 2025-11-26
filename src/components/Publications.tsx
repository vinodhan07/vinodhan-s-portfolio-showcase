import { motion } from "framer-motion";
import { BookOpen, ExternalLink } from "lucide-react";
import { Button } from "./ui/button";

const publications = [
  {
    title: "A Flexible Multi-Task Structure Contextual Modality Attention Based Emotion Recognition",
    type: "Published Paper",
    link: "#", // Replace with actual publication link when available
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
              className="border border-border rounded-lg p-6 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all group"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {pub.title}
                  </h3>
                  <p className="text-muted-foreground italic">{pub.type}</p>
                </div>
                <Button
                  asChild
                  variant="outline"
                  className="flex items-center gap-2 whitespace-nowrap"
                >
                  <a href={pub.link} target="_blank" rel="noopener noreferrer">
                    View Publication
                    <ExternalLink size={16} />
                  </a>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
