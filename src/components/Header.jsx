import { motion } from "motion/react";
const Header = () => {
  return (
    <motion.header
      className="container mx-auto px-8 py-10"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.3 }}
    >
      <nav className="flex justify-between items-center">
        <motion.a
          href="/"
          className="text-lg md:text-xl lg:text-2xl font-bold text-platinum hover:text-ash"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Syed Umair Ali
        </motion.a>
        <motion.a
          href="/about"
          className="text-lg md:text-xl lg:text-2xl font-medium text-platinum hover:text-ash"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          whileHover={{ scale: 1.05 }}
        >
          About
        </motion.a>
      </nav>
    </motion.header>
  );
};

export default Header;
