"use client";
import { motion } from "framer-motion";


export default function Preloader() {
  const slideUp = {
    initial: { y: 0 },
    exit: { 
      y: "-100vh", 
      transition: { 
        duration: 0.8, 
        
        ease: [0.76, 0, 0.24, 1] as [number, number, number, number] 
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
        {/* ENVOLTORIO FLEX: Para poner Logo e Imagen lado a lado */}
        <div className="relative flex items-center gap-4 md:gap-8 overflow-hidden px-4">
            
         

            {/* 2. EL TEXTO */}
            <h1 className="text-black text-6xl md:text-9xl font-display font-black tracking-tighter uppercase leading-none">
                CRIV<span className="text-black">.</span>
            </h1>

        </div>
    </motion.div>
  );
}