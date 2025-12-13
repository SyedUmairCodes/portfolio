import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
const THEME = {
  colors: {
    cardBg: "#252a33",
    cardHover: "#2d333e",
  },
};

const TOOLS = [
  { name: "React", category: "Javascript Library" },
  { name: "Next.js", category: "Full Stack Framework" },
  { name: "Tailwind CSS", category: "CSS Framework" },
  { name: "TypeScript", category: "Programming Language" },
  { name: "Python", category: "Programming Language" },
  { name: "FastAPI", category: "API Framework" },
  { name: "PostgreSQL", category: "Database" },
  { name: "MySQL", category: "Database" },
  { name: "Astro", category: "Web Framework" },
  { name: "Shadcn/ui", category: "Component Library" },
  { name: "Docker", category: "Containerization Platform" },
  { name: "Figma", category: "Design Platform" },
];

// --- Animations ---
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const cardVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 50, damping: 15 },
  },
};

export default function ToolsStack() {
  return (
    <section className="min-h-screen py-20 px-6 flex justify-center text-white bg-background">
      <div className="max-w-7xl w-full">
        {/* Header */}
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-6xl font-bold tracking-tight mb-16"
        >
          Tools & Stack
        </motion.h2>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {TOOLS.map((tool, index) => (
            <ToolCard key={index} tool={tool} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function ToolCard({ tool }: { tool: (typeof TOOLS)[0] }) {
  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ scale: 1.02, backgroundColor: THEME.colors.cardHover }}
      className="relative p-6 rounded-xl flex flex-col justify-center group overflow-hidden border border-transparent hover:border-accent/30 transition-all duration-300 min-h-[120px]"
      style={{ backgroundColor: THEME.colors.cardBg }}
    >
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 0, transparent 10px)`,
        }}
      />

      {/* Content */}
      <div className="z-10 flex flex-col gap-1">
        <h3 className="text-2xl font-bold text-white group-hover:text-accent transition-colors duration-300">
          {tool.name}
        </h3>
        <span className="text-xs uppercase tracking-wider font-semibold text-gray-500 group-hover:text-gray-400 transition-colors">
          {tool.category}
        </span>
      </div>

      {/* Decorative Accent Line on Hover */}
      <div className="absolute bottom-0 left-0 h-1 w-0 bg-accent group-hover:w-full transition-all duration-500 ease-out" />
    </motion.div>
  );
}
