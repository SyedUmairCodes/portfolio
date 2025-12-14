import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { ArrowUpRight, Mail } from "lucide-react";

const socials = [
  { name: "X (Twitter)", href: "https://x.com/syedumaircodes" },
  { name: "LinkedIn", href: "https://linkedin.com/in/syedumaircodes" },
  { name: "GitHub", href: "https://github.com/syedumaircodes" },
];

// --- Animations ---
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
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

export default function FooterSection() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-20 px-6 sm:px-12 relative overflow-hidden bg-background text-white">
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 mb-20"
        >
          {/* --- Left Column: CTA --- */}
          <div className="flex flex-col items-start gap-6">
            <motion.h2
              variants={itemVariants}
              className="text-5xl md:text-6xl font-bold tracking-tight"
            >
              Let's Connect
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-lg font-light text-gray-400 max-w-sm"
            >
              I’m always open to a chat. Connect with me online to follow my
              process or reach out directly for a collaboration.
            </motion.p>

            <motion.div variants={itemVariants} className="mt-4">
              <button className="group relative px-8 py-3 bg-white text-background font-semibold rounded-lg overflow-hidden transition-transform active:scale-95">
                <div className="absolute inset-0 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
                <a
                  href="mailto:syedumairali.617@gmail.com"
                  className="relative z-10 flex items-center gap-2 group-hover:text-white transition-colors duration-300"
                >
                  <Mail className="w-4 h-4" />
                  Get in Touch
                </a>
              </button>
            </motion.div>
          </div>

          {/* --- Right Column: Social Links --- */}
          <div className="flex flex-col items-start md:items-end justify-center gap-6">
            {socials.map((social) => (
              <motion.a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                variants={itemVariants}
                className="group flex items-center gap-3 text-xl md:text-2xl font-medium cursor-pointer"
              >
                <span className="group-hover:text-accent transition-colors duration-300">
                  {social.name}
                </span>
                <ArrowUpRight className="w-6 h-6 text-gray-500 group-hover:text-accent group-hover:-translate-y-1 group-hover:translate-x-1 transition-all duration-300" />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* --- Divider --- */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="w-full h-px origin-left mb-8 bg-background"
        />

        {/* --- Bottom: Copyright --- */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500"
        >
          <p>© Copyright {currentYear}. All rights Reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
}
