import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Pricing from "@/components/Pricing"; // Nuevo
import Contact from "@/components/Contact"; // Nuevo
import Footer from "@/components/Footer";   // Nuevo

export default function Home() {
  return (
    <main className="bg-dark min-h-screen text-white selection:bg-criv-yellow selection:text-black">
      <Navbar />
      <Hero />
      <Marquee />
      <Services />
      <Projects />
      <Pricing />
      <Contact />
      <Footer />
    </main>
  );
}