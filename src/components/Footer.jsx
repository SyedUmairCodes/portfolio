import { motion } from "motion/react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const footerLinks = [
    { name: "Email", href: "mailto:syedumairali.617@gmail.com" }, // Replace with actual email
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

  return (
    <footer className="container mx-auto px-8 pt-10 pb-12 md:pt-4 md:pb-16">
      <motion.div
        className="flex flex-col md:flex-row justify-between items-center gap-y-6 md:gap-x-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <motion.p
          className="text-lg md:text-xl lg:text-2xl text-white text-center md:text-left"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          © {currentYear} Syed Umair Ali.
        </motion.p>

        <motion.nav
          className="flex flex-wrap justify-center md:justify-end gap-x-6 gap-y-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          {footerLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.href}
              target={link.target}
              rel={link.rel}
              className="text-lg md:text-xl lg:text-2xl text-white hover:text-white/80 transition-colors"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 + index * 0.1 }}
            >
              {link.name}
            </motion.a>
          ))}
        </motion.nav>
      </motion.div>
    </footer>
  );
};

export default Footer;
