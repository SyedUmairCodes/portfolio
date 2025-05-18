import { motion } from "motion/react";
import blockforgeImage from "../assets/blockforge.png";
const portfolioData = [
  {
    id: 1,
    title: "Blockforge",
    subtitle: "Blockchain service provider for Web3 projects",
    imageUrl: blockforgeImage,
    linkUrl: "https://blockchainforge.netlify.app",
    altText: "Screenshot of Blockforge project",
  },
];

const PortfolioCard = ({ study }) => {
  return (
    <article className="mb-12 md:mb-16">
      <a
        href={study.linkUrl}
        target={
          study.linkUrl !== "#" && !study.linkUrl.startsWith("mailto:")
            ? "_blank"
            : undefined
        }
        rel={
          study.linkUrl !== "#" && !study.linkUrl.startsWith("mailto:")
            ? "noopener noreferrer"
            : undefined
        }
        className="block group"
      >
        <div className="overflow-hidden rounded-lg mb-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <img
            src={study.imageUrl}
            alt={study.altText}
            className="w-full h-auto object-cover aspect-[16/9] md:aspect-[2.2/1] group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <h3 className="text-2xl font-semibold text-disco mb-1 group-hover:text-neutral-100 transition-colors">
          {study.title}
        </h3>
        <p className="text-lg  mb-3">{study.subtitle}</p>
      </a>
    </article>
  );
};

const Portfolio = () => {
  return (
    <motion.section
      className="container mx-auto px-8 py-12 md:py-16"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
    >
      <motion.h2
        className="text-2xl font-medium mb-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        Portfolio
      </motion.h2>
      <div>
        {portfolioData.map((study, index) => (
          <motion.div
            key={study.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
          >
            <PortfolioCard study={study} />
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Portfolio;
