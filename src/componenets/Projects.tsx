import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

// --- Configuration ---
const THEME = {
  colors: {
    bg: "#1f232a",
    text: "#ffffff",
    accent: "#60dafb",
    muted: "#94a3b8",
  },
};

const PROJECTS = [
  {
    id: "01",
    title: "Modern Living Space",
    category: "Residential Design",
    description:
      "This project involves the complete transformation of a contemporary apartment, focusing on creating an open, minimalist aesthetic with warm accents. The goal is to maximize natural light and optimize space flow.",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: "02",
    title: "Creative Workspace",
    category: "Office Interior",
    description:
      "In this project, we designed a dynamic office environment that fosters creativity and collaboration. This includes creating flexible work zones, incorporating biophilic design elements, and comfortable breakout areas.",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: "03",
    title: "Urban Retreat",
    category: "Commercial Space",
    description:
      "A boutique hotel lobby designed to serve as an urban sanctuary. The design merges industrial raw materials with soft, organic textures to create a welcoming yet sophisticated atmosphere for travelers.",
    image:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1600&auto=format&fit=crop",
  },
];

// --- Animations ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function ProjectsSection() {
  return (
    <section
      className="min-h-screen py-24 px-6 sm:px-12 flex justify-center"
      style={{ backgroundColor: THEME.colors.bg, color: THEME.colors.text }}
    >
      <div className="max-w-7xl w-full">
        {/* --- Header Section --- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20 items-end"
        >
          {/* Left: Title & Subtitle */}
          <div>
            <span
              className="text-sm font-bold tracking-widest uppercase mb-4 block"
              style={{ color: THEME.colors.accent }}
            >
              Transform Ideas Into Reality
            </span>
            <h2 className="text-6xl md:text-7xl font-bold tracking-tight mb-6">
              PROJECTS
            </h2>
          </div>

          {/* Right: Description & Button */}
          <div className="flex flex-col items-start gap-8">
            <p className="text-lg leading-relaxed text-gray-400 max-w-lg">
              Where creativity, craftsmanship, and vision unite to create
              stunning digital experiences. Discover our comprehensive portfolio
              of projects, each thoughtfully designed to transform ideas into
              impact.
            </p>

            <button className="group flex items-center gap-2 px-6 py-3 rounded-full border border-gray-700 hover:border-[#60dafb] bg-white/5 hover:bg-[#60dafb]/10 transition-all duration-300">
              <span className="font-medium group-hover:text-[#60dafb] transition-colors">
                View All Projects
              </span>
              <ArrowUpRight className="w-4 h-4 group-hover:text-[#60dafb] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </motion.div>

        {/* --- Projects List --- */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="flex flex-col gap-8"
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
      variants={itemVariants}
      className="group relative h-[400px] md:h-[500px] w-full rounded-2xl overflow-hidden cursor-pointer"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        {/* Dark Gradient Overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/30 group-hover:opacity-90 transition-opacity duration-500" />
      </div>

      {/* Content Overlay */}
      <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-end">
          {/* Left: Number & Title */}
          <div className="md:col-span-7 flex flex-col gap-2">
            <span
              className="text-lg md:text-xl font-mono opacity-80 mb-2"
              style={{ color: THEME.colors.accent }}
            >
              / {project.id}
            </span>
            <h3 className="text-3xl md:text-5xl font-bold leading-tight group-hover:translate-x-2 transition-transform duration-300">
              {project.title}
            </h3>
            <p className="text-sm font-bold tracking-wider uppercase text-gray-400 mt-1">
              {project.category}
            </p>
          </div>

          {/* Right: Description (Hidden on mobile initially, or styled differently) */}
          <div className="md:col-span-5 md:pl-8">
            <p className="text-base md:text-lg text-gray-300 line-clamp-3 group-hover:text-white transition-colors duration-300">
              {project.description}
            </p>

            {/* Hover Indicator Line */}
            <div
              className="h-px w-0 group-hover:w-full mt-6 transition-all duration-700 ease-in-out"
              style={{ backgroundColor: THEME.colors.accent }}
            />
          </div>
        </div>
      </div>

      {/* Border overlay for cleaner edge on dark bg */}
      <div className="absolute inset-0 border border-white/10 rounded-2xl pointer-events-none group-hover:border-[#60dafb]/30 transition-colors duration-300" />
    </motion.div>
  );
}
