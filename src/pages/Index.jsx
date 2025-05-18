import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Portfolio from "../components/Portfolio";
import SideProjects from "../components/Projects";
const Index = () => {
  return (
    <div className="bg-background text-white min-h-screen font-sans antialiased">
      <Header />
      <Hero />
      <SideProjects />
      <Portfolio />
      <Footer />
    </div>
  );
};

export default Index;
