import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import AboutImage from "../assets/about.webp";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const textVariants: Variants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 60, damping: 20 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, rotate: -15, y: 100 },
  visible: {
    opacity: 1,
    rotate: -6,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 20,
      delay: 0.2,
    },
  },
  hover: {
    rotate: 0,
    scale: 1.02,
    transition: { type: "spring", stiffness: 200, damping: 25 },
  },
};

export default function AboutSection() {
  return (
    <section className="min-h-screen flex items-center justify-center py-20 px-6 overflow-hidden relative bg-background text-white">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full blur-[150px] opacity-5 pointer-events-none bg-accent" />

      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center z-10">
        <div className="flex justify-center md:justify-end perspective-1000">
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            viewport={{ once: true, margin: "-100px" }}
            className="relative bg-white p-4 pb-6 shadow-2xl max-w-sm w-full cursor-pointer group"
          >
            {/* Image Container */}
            <div className="relative aspect-3/4 overflow-hidden bg-gray-100 mb-4 grayscale group-hover:grayscale-0 transition-all duration-500 ease-out">
              <img
                src={AboutImage}
                alt="Professional Portrait"
                className="w-full h-full object-cover"
              />

              {/* Overlay Flash Effect on Hover */}
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none" />
            </div>

            {/* Card Footer Text */}
            <div className="flex justify-between items-end">
              <div>
                <h1 className="text-xl font-bold text-black leading-none mb-1">
                  Syed Umair Ali
                </h1>
                <p className="text-sm text-gray-500">@syedumaircodes</p>
              </div>
            </div>

            {/* Absolute accent border for detail on hover */}
            <div className="absolute bottom-0 left-0 h-1 bg-black w-0 group-hover:w-full transition-all duration-500" />
          </motion.div>
        </div>

        {/* --- Right Column: Typography Content --- */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col gap-8 md:pr-10"
        >
          <motion.h2
            variants={textVariants}
            className="text-5xl md:text-6xl lg:text-7xl font-medium leading-[1.1] tracking-tight"
          >
            Shaping ideas with <span className="text-accent">clarity</span> and
            impact
          </motion.h2>

          <div className="space-y-6 text-lg text-gray-400 font-light leading-relaxed max-w-xl">
            <motion.p variants={textVariants}>
              I help turn rough concepts into polished digital experiences. My
              focus is simple: build solutions that work, communicate clearly,
              and stand the test of time.
            </motion.p>

            <motion.p variants={textVariants}>
              Whether it’s a product, a system, or a complete brand presence, I
              approach every project with structure, intention, and respect for
              the craft. Strong fundamentals, thoughtful execution, and a clear
              sense of purpose.
            </motion.p>
          </div>

          <motion.div variants={textVariants} className="pt-4">
            <button className="group flex items-center gap-3 text-white font-medium hover:gap-5 transition-all duration-300">
              <a
                href="https://linkedin.com/in/syedumaircodes"
                target="_blank"
                rel="noopener noreferrer"
                className="border-b border-transparent group-hover:border-white transition-colors"
                aria-label="View my LinkedIn Profile"
              >
                View my LinkedIn Profile
              </a>
              <ArrowUpRight className="w-5 h-5 transition-colors text-accent" />
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
