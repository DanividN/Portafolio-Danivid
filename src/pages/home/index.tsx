import About from "@/components/about";
import BlogList from "@/components/blogs/blogList";
import Brands from "@/components/brands";
import Hero from "@/components/hero";
import Marquee from "@/components/marquee";
import Portfolio from "@/components/portfolio";
import Pricing from "@/components/pricing";
import Services from "@/components/services/services";
import Skills from "@/components/skills";
import Testimonial from "@/components/testimonial";

const Home = () => {
  return (
    <main>
      <Hero />
      <Skills />
      <About />
      <Portfolio />
      <Services />
      <Testimonial />
      <Marquee />
      <Pricing />
      <Brands />
      <BlogList />
    </main>
  );
};

export default Home;
