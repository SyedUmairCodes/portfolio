import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { Download, ArrowUpRight } from "lucide-react";

const EXPERIENCES = [
  {
    id: 1,
    date: "July 2025 - Present",
    role: "Junior Software Engineer",
    company: "Heptic",
    description:
      "Building and maintaing multiple client projects. Collaborated with design teams to implement pixel-perfect UI/UX designs and optimize backend queries.",
  },
];

// --- Animations ---
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function ExperienceSection() {
  return (
    <section className="min-h-screen bg-background text-white flex items-center justify-center py-20 px-6 sm:px-12">
      <div className="max-w-7xl w-full">
        {/* Header Row */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-16 gap-6"
        >
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight">
            Experience
          </h2>

          <button className="group flex items-center gap-2 px-5 py-2.5 rounded-full border border-gray-700 hover:border-accent text-white transition-colors duration-300">
            <a
              href="/umair-resume.pdf"
              download="umair-resume.pdf"
              className="text-sm font-medium group-hover:text-accent transition-colors"
            >
              Download CV
            </a>
            <Download className="w-4 h-4 group-hover:text-accentgroup-hover:translate-y-0.5 transition-all" />
          </button>
        </motion.div>

        {/* Experience List */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="flex flex-col"
        >
          {EXPERIENCES.map((exp) => (
            <ExperienceItem key={exp.id} data={exp} />
          ))}

          {/* Bottom Border */}
          <motion.div
            variants={itemVariants}
            className="w-full h-px bg-background"
          />
        </motion.div>
      </div>
    </section>
  );
}

function ExperienceItem({ data }: { data: (typeof EXPERIENCES)[0] }) {
  return (
    <motion.div variants={itemVariants} className="group relative">
      {/* Top Border */}
      <div className="w-full h-px absolute top-0 left-0 transition-colors duration-500 group-hover:bg-accent/50 bg-background" />

      <div className="grid grid-cols-1 md:grid-cols-12 gap-y-4 md:gap-8 py-12 px-2 transition-colors duration-300 hover:bg-white/5 rounded-sm">
        {/* Column 1: Date */}
        <div className="md:col-span-3">
          <span className="text-lg font-medium text-gray-400 group-hover:text-white transition-colors">
            {data.date}
          </span>
        </div>

        {/* Column 2: Role & Description */}
        <div className="md:col-span-6 flex flex-col gap-3">
          <h3 className="text-2xl font-semibold group-hover:text-accenttransition-colors flex items-center gap-2">
            {data.role}
            {/* Subtle arrow that appears on hover */}
            <ArrowUpRight className="w-5 h-5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-accent" />
          </h3>
          <p className="text-lg leading-relaxed font-light max-w-2xl text-white/70">
            {data.description}
          </p>
        </div>

        {/* Column 3: Company */}
        <div className="md:col-span-3 flex md:justify-end items-start">
          <span className="text-xl font-medium tracking-wide">
            {data.company}
          </span>
        </div>
      </div>
    </motion.div>
  );
}
