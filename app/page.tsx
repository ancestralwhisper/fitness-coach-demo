import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import IntegrationsShowcase from "./components/IntegrationsShowcase";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Testimonials />
      <Contact />
      <IntegrationsShowcase />
    </>
  );
}
