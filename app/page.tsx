import Hero from "../components/Hero/Hero";
import About from "@/components/About/About";
import Services from "@/components/Services/Services";
import CTA from "@/components/CTA/CTA";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <CTA />
    </main>
  );
}
