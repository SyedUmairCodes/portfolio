import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { Globe, ArrowRight } from "lucide-react";

import blockforge from "../assets/blockforge.webp";

const PROJECTS = [
  {
    id: 1,
    title: "Blockforge",
    tag: "Web Dev",
    description:
      "Marketing website design for web3 service provider company with markdown based blogging functionality.",
    image: blockforge,
  },
];

// --- Animations ---
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants: Variants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function DetailedProjects() {
  return (
    <section
      className="min-h-screen py-24 px-6 flex justify-center bg-background text-white"
      id="projects"
    >
      <div className="max-w-7xl w-full">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-4">
            Selected Works
          </h2>
        </motion.div>

        {/* 2-Column Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {PROJECTS.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: (typeof PROJECTS)[0] }) {
  return (
    <motion.div
      variants={cardVariants}
      className="group rounded-2xl overflow-hidden border border-white/20 hover:border-accent/30 transition-all duration-300 bg-background"
    >
      {/* Image Section */}
      <div className="relative aspect-4/3 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
      </div>

      {/* Content Section */}
      <div className="p-6 md:p-8 flex flex-col gap-6">
        {/* Title & Tag Row */}
        <div className="flex flex-wrap justify-between items-start gap-4">
          <h3 className="text-2xl font-bold leading-tight flex-1 group-hover:text-accent transition-colors duration-300">
            {project.title}
          </h3>
          <span className="px-3 py-1 rounded-full text-xs font-medium tracking-wide bg-white/5 border border-white/10 text-gray-300 flex items-center gap-1.5 whitespace-nowrap">
            <Globe className="w-3 h-3 text-accent" />
            {project.tag}
          </span>
        </div>

        {/* Description */}
        <p className="text-gray-400 leading-relaxed line-clamp-3">
          {project.description}
        </p>

        {/* Action Button */}
        <button className="w-full mt-2 py-3.5 rounded-lg bg-white text-background font-bold text-sm tracking-wide hover:bg-accent transition-colors duration-300 flex items-center justify-center gap-2 group/btn">
          Live Preview
          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
        </button>
      </div>
    </motion.div>
  );
}
