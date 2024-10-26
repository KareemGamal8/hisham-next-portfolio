
import AboutUs from "../../components/AboutUs";
import Categories from "../../components/Categories";
import Clients from "../../components/Clients";
import Features from "../../components/Features";
import Hero from "../../components/Hero";
import Services from "../../components/Services";
import Testimonials from "../../components/Testimonials";

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutUs />
      <Features />
      <Services />
      <Clients />
      <Testimonials />
    </>
  );
}
