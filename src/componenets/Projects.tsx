import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import Blockforge from "../assets/blockforge.png";
const PROJECTS = [
  {
    id: "01",
    title: "Blockforge",
    category: "Web Development",
    description:
      "Pioneering smart contract integrity and cutting-edge data solutions for Web3",
    image: Blockforge,
    href: "https://blockchainforge.netlify.app",
  },
];

// --- Animations ---
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants: Variants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function ProjectsSection() {
  return (
    <section className="min-h-screen py-24 px-6 sm:px-12 flex justify-center text-white bg-background">
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
            <h2 className="text-6xl md:text-7xl font-bold tracking-tight mb-6">
              Works
            </h2>
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
        <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/30 to-black/10 group-hover:opacity-90 transition-opacity duration-500" />
      </div>

      {/* Content Overlay */}
      <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-end">
          {/* Left: Number & Title */}
          <div className="md:col-span-7 flex flex-col gap-2">
            <span className="text-lg md:text-xl font-mono opacity-80 mb-2 text-accent">
              / {project.id}
            </span>
            <h3 className="text-3xl md:text-5xl font-bold leading-tight group-hover:translate-x-2 transition-transform duration-300">
              <a href={project.href}>{project.title}</a>
            </h3>
            <p className="text-sm font-bold tracking-wider uppercase text-gray-400 mt-1">
              {project.category}
            </p>
          </div>
          <div className="md:col-span-5 md:pl-8">
            <p className="text-base md:text-lg text-gray-300 line-clamp-3 group-hover:text-white transition-colors duration-300">
              {project.description}
            </p>

            {/* Hover Indicator Line */}
            <div className="h-px w-0 group-hover:w-full mt-6 transition-all duration-700 ease-in-out bg-accent" />
          </div>
        </div>
      </div>

      <div className="absolute inset-0 border border-white/10 rounded-2xl pointer-events-none group-hover:border-accent/30 transition-colors duration-300" />
    </motion.div>
  );
}
