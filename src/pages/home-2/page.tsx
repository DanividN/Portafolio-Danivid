import About from "@/components/about";
import BlogList from "@/components/blogs/blogList";
import Hero from "@/components/hero";
import Portfolio from "@/components/portfolio";
import Services from "@/components/services/services";
import Skills from "@/components/skills";
import Testimonial from "@/components/testimonial";

const HomeTwo = () => {
  return (
    <main>
      <Hero />
      <Skills />
      <About />
      <Portfolio />
      <Services />
      <Testimonial />
      <BlogList />
    </main>
  );
};

export default HomeTwo;
