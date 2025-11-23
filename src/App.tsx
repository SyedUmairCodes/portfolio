import Experience from "./componenets/Experience";
import Footer from "./componenets/Footer";
import Hero from "./componenets/Hero";
import Projects from "./componenets/Projects";
import Skills from "./componenets/Skills";

const App = () => {
  return (
    <main className="font-sans bg-black">
      <Hero />
      <Experience />
      <Skills />
      <Projects />
      <Footer />
    </main>
  );
};

export default App;
