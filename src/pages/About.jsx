import Footer from "../components/Footer";
import Header from "../components/Header";
import { motion } from "motion/react";
const About = () => {
  return (
    <div className="bg-background text-white min-h-screen font-sans antialiased">
      <Header />
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-8 py-16 md:py-24"
      >
        <div className="grid grid-cols-1 md:grid-cols-5 md:gap-12 lg:gap-20 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="md:col-span-2 mb-10 md:mb-0"
          >
            <h2 className="text-4xl sm:text-5xl font-bold leading-tight">
              Engineering systems that users understand effortlessly.
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="md:col-span-3"
          >
            <p className="text-lg  leading-relaxed mb-6">
              I'm drawn to the core challenges of building high-quality digital
              products, especially those that scale. Much of my work focuses on
              creating web applications that deliver a smoother, smarter user
              experiences.
            </p>
            <p className="text-lg   leading-relaxed mb-6">
              I'm just starting my professional journey but I'm starting it
              right, taking advice from my mentors, growing, learning and
              building. I thrive in chaos and uncertinity. Reframing every
              hurdle as a learning opportunity.
            </p>
            <p className="text-lg   leading-relaxed">
              I always look for opportunities to grow myself. In everything I
              do, I strive to create an environment where people grow and learn
              together and everyone is leveraging each others' strengths.
            </p>
          </motion.div>
        </div>
      </motion.section>
      <Footer />
    </div>
  );
};

export default About;
