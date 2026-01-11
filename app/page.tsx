"use client";
import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Process from "@/components/Process";
import Projects from "@/components/Projects";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Preloader from "@/components/Preloader"; 

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      window.scrollTo(0, 0);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="bg-dark min-h-screen text-white selection:bg-criv-yellow selection:text-black">
      <AnimatePresence mode="wait">
        {isLoading && <Preloader />}
      </AnimatePresence>

      
      {!isLoading && (
        <>
          <Navbar />
          <Hero />
          <Services />
          <Testimonials />
          <Process />
          <Projects />
          <Pricing />
          <FAQ />
          <Contact />
          <Footer />
        </>
      )}
    </main>
  );
}