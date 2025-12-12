import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { ArrowDown, Mail } from "lucide-react";

// --- Animation Variants ---
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0, scale: 0.95 },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: { type: "spring", stiffness: 100, damping: 20 },
  },
};

const imageVariants: Variants = {
  hidden: { scale: 0, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { type: "spring", stiffness: 200, damping: 15 },
  },
};

export default function HeroSection() {
  return (
    <div className="min-h-screen flex items-center justify-center w-full overflow-hidden relative bg-background text-accent">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full blur-[120px] opacity-10 pointer-events-none bg-accent" />

      <motion.div
        className="max-w-3xl px-6 flex flex-col items-center text-center z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Profile Avatar */}
        <motion.div variants={imageVariants} className="mb-8 relative group">
          <div className="absolute inset-0 rounded-full blur-md opacity-40 group-hover:opacity-70 bg-accent transition-opacity duration-500" />
          <img
            src="/profile.webp"
            alt="Side portrait of syed umair ali"
            className="relative w-24 h-24 md:w-28 md:h-28 rounded-full object-cover border-4 border-accent shadow-2xl"
          />
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={itemVariants}
          className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.2] mb-10 text-white font-sans"
        >
          Hello, I'm Umair, a Karachi based{" "}
          <span className="relative inline-block">
            Software Engineer
            <motion.span
              className="absolute -bottom-1 left-0 w-full h-1 rounded-full opacity-60 bg-accent"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ delay: 1, duration: 0.8 }}
            />
          </span>{" "}
          creating amazing digital experiences
        </motion.h1>

        {/* Action Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
        >
          {/* Primary Action - "See my work" (Light on Dark) */}
          <button className="group relative px-8 py-3.5 rounded-full font-medium text-background bg-white overflow-hidden w-full sm:w-auto transition-transform active:scale-95">
            <span className="absolute inset-0 w-full h-full bg-linear-to-r from-gray-100 to-white opacity-0 group-hover:opacity-100 transition-opacity" />
            <span className="relative flex items-center justify-center gap-2">
              See my work
              <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-1" />
            </span>
          </button>
          <button
            className="group px-8 py-3.5 rounded-full font-medium border border-[#3b414d] hover:border-accent text-white w-full sm:w-auto transition-all duration-300 active:scale-95"
            style={{ backgroundColor: "transparent" }}
          >
            <span className="flex items-center justify-center gap-2 group-hover:text-accent transition-colors">
              <Mail className="w-4 h-4" />
              Let's collaborate
            </span>
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
}
