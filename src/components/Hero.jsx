import { motion } from "motion/react";

const socialLinks = [
  { name: "Email", href: "mailto:example@example.com" },
  {
    name: "Threads",
    href: "https://threads.com/syedumaircodes",
    target: "_blank",
    rel: "noopener noreferrer",
  },
  {
    name: "GitHub",
    href: "https://github.com/syedumaircodes",
    target: "_blank",
    rel: "noopener noreferrer",
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/syedumaircodes",
    target: "_blank",
    rel: "noopener noreferrer",
  },
];

const Hero = () => {
  return (
    <motion.main
      className="container mx-auto px-8 py-12 md:py-16"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <motion.h1
        className="text-2xl md:text-5xl font-bold mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        Hey, I'm Syed Umair Ali
      </motion.h1>
      <motion.p
        className="text-xl md:text-3xl mb-10 max-w-3xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        A multidisciplinary developer with a passion for creating beautiful and
        functional web applications.
      </motion.p>
      <motion.div
        className="flex flex-wrap gap-x-4 md:gap-x-6 lg:gap-x-8 gap-y-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        {socialLinks.map((link, index) => (
          <motion.a
            key={link.name}
            href={link.href}
            target={link.target}
            rel={link.rel}
            className="text-lg md:text-xl lg:text-2xl text-white hover:text-white/80 transition-colors duration-300"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 + index * 0.1, duration: 0.5 }}
          >
            {link.name}
          </motion.a>
        ))}
      </motion.div>
    </motion.main>
  );
};

export default Hero;
