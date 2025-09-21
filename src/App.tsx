import Hero from "./components/Hero";
import ProjectsShowcase from "./components/Projects";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import Footer from "./components/Footer";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
    <>
      <Hero />
      <Services />
      <ProjectsShowcase />
      <Testimonials />
      <Footer />
    </>
  );
};

export default App;
