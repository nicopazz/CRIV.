"use client";
import { motion, Variants, Easing } from "framer-motion"; 

const easeOutExpo: Easing = [0.76, 0, 0.24, 1];

export default function Preloader() {

  const slideUp: Variants = {
    initial: { y: 0 },
    exit: { 
      y: "-100vh", 
      transition: { 
        duration: 0.8, 
        ease: easeOutExpo
      } 
    }
  };

  return (
    <motion.div 
      variants={slideUp} 
      initial="initial" 
      exit="exit" 
      className="fixed inset-0 z-[999] flex items-center justify-center bg-criv-yellow"
    >
      <div className="relative flex items-center gap-4 md:gap-8 overflow-hidden px-4">
        <h1 className="text-black text-6xl md:text-9xl font-display font-black tracking-tighter uppercase leading-none">
          CRIV.
        </h1>
      </div>
    </motion.div>
  );
}
