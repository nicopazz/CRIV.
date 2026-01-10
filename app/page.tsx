import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Pricing from "@/components/Pricing"; 
import Contact from "@/components/Contact"; 
import Footer from "@/components/Footer";   

export default function Home() {
  return (
    <main className="bg-dark min-h-screen text-white selection:bg-criv-yellow selection:text-black">
      <Navbar />
      <Hero />
     
      <Services />
      <Projects />
      <Pricing />
      <Contact />
      <Footer />
    </main>
  );
}