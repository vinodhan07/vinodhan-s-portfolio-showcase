import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, FileText, Briefcase, Mail, User } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Message {
  role: "bot" | "user";
  content: string;
}

const presetQuestions = [
  { label: "About Vinodhan", icon: User, query: "Tell me about Vinodhan" },
  { label: "View Projects", icon: Briefcase, query: "Show me projects" },
  { label: "Contact Info", icon: Mail, query: "How can I contact you?" },
  { label: "Download Resume", icon: FileText, query: "Download resume" },
];

const getResponse = (query: string): string => {
  const lowerQuery = query.toLowerCase();
  
  if (lowerQuery.includes("about") || lowerQuery.includes("who") || lowerQuery.includes("vinodhan")) {
    return "Vinodhan is a passionate Full Stack Developer and AI enthusiast currently pursuing B.Tech in Information Technology at Sri Sairam Engineering College. He has expertise in Python, Java, React, and AI/ML technologies. He's also a Google Student Ambassador and has led the Rotaract Club as Secretary!";
  }
  
  if (lowerQuery.includes("project") || lowerQuery.includes("work") || lowerQuery.includes("portfolio")) {
    return "Vinodhan has worked on exciting projects including:\n\n• **Translator-Model** - NLP-based language translation\n• **Automated Report Generation** - AI-powered document automation\n• **Multi-Agent RAG System** - Advanced AI research project\n\nScroll down to the Projects section to see more, or check out his GitHub!";
  }
  
  if (lowerQuery.includes("contact") || lowerQuery.includes("reach") || lowerQuery.includes("email") || lowerQuery.includes("connect")) {
    return "You can reach Vinodhan through:\n\n📧 Email: vinodhan.tech@gmail.com\n💼 LinkedIn: linkedin.com/in/vinodhan07\n🐙 GitHub: github.com/vinodhan07\n\nOr scroll down to the Contact section to send a message directly!";
  }
  
  if (lowerQuery.includes("resume") || lowerQuery.includes("cv") || lowerQuery.includes("download")) {
    window.open("/resume.pdf", "_blank");
    return "I've opened Vinodhan's resume in a new tab for you! 📄";
  }
  
  if (lowerQuery.includes("skill") || lowerQuery.includes("tech") || lowerQuery.includes("stack")) {
    return "Vinodhan's technical skills include:\n\n**Languages:** Python, Java, JavaScript, TypeScript\n**Frontend:** React, HTML, CSS, Tailwind\n**Backend:** Node.js, Express\n**AI/ML:** TensorFlow, NLP, RAG Systems\n**Tools:** Git, Docker, Supabase";
  }
  
  if (lowerQuery.includes("education") || lowerQuery.includes("study") || lowerQuery.includes("college")) {
    return "Vinodhan is currently pursuing B.Tech in Information Technology at Sri Sairam Engineering College, Chennai (2023-2027). He's in his 4th semester with a CGPA of 7.5!";
  }
  
  if (lowerQuery.includes("hi") || lowerQuery.includes("hello") || lowerQuery.includes("hey")) {
    return "Hello! 👋 I'm Vinodhan's AI assistant. How can I help you today? Feel free to ask about his skills, projects, or how to get in touch!";
  }
  
  return "I can help you learn more about Vinodhan! Try asking about his projects, skills, education, or how to contact him. You can also use the quick buttons below!";
};

export const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: "bot", content: "Hi! 👋 I'm Vinodhan's AI assistant. Ask me about his skills, projects, or contact info!" }
  ]);
  const [input, setInput] = useState("");

  const handleSend = (query: string) => {
    if (!query.trim()) return;
    
    const userMessage: Message = { role: "user", content: query };
    const botResponse: Message = { role: "bot", content: getResponse(query) };
    
    setMessages(prev => [...prev, userMessage, botResponse]);
    setInput("");
  };

  const handlePreset = (query: string) => {
    handleSend(query);
  };

  return (
    <>
      {/* Floating Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-primary text-primary-foreground shadow-lg flex items-center justify-center hover:scale-110 transition-transform"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-6 z-50 w-[350px] max-w-[calc(100vw-3rem)] bg-card border border-border rounded-2xl shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="bg-primary p-4">
              <h3 className="text-primary-foreground font-semibold">Chat with Vinodhan's AI</h3>
              <p className="text-primary-foreground/70 text-sm">Ask me anything!</p>
            </div>

            {/* Messages */}
            <div className="h-[300px] overflow-y-auto p-4 space-y-3 bg-background">
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-2xl text-sm whitespace-pre-line ${
                      msg.role === "user"
                        ? "bg-primary text-primary-foreground rounded-br-md"
                        : "bg-muted text-foreground rounded-bl-md"
                    }`}
                  >
                    {msg.content}
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Actions */}
            <div className="p-3 border-t border-border bg-background/50">
              <div className="flex flex-wrap gap-2 mb-3">
                {presetQuestions.map((preset, idx) => (
                  <button
                    key={idx}
                    onClick={() => handlePreset(preset.query)}
                    className="flex items-center gap-1.5 px-3 py-1.5 text-xs bg-muted hover:bg-muted/80 rounded-full transition-colors"
                  >
                    <preset.icon size={12} />
                    {preset.label}
                  </button>
                ))}
              </div>

              {/* Input */}
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSend(input)}
                  placeholder="Type a message..."
                  className="flex-1 px-4 py-2 rounded-full bg-muted text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <Button
                  size="icon"
                  onClick={() => handleSend(input)}
                  className="rounded-full"
                >
                  <Send size={16} />
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
