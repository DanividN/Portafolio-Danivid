import About from "@/components/about";
import Hero from "@/components/hero";
import Portfolio from "@/components/portfolio";
import Services from "@/components/services/services";
import Skills from "@/components/skills";


const Home = () => {
  return (
    <main>
      <Hero />
      <Skills />
      <About />
      <Portfolio />
      <Services />
    </main>
  );
};

export default Home;
