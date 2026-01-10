"use client";
import { motion } from "framer-motion";

export default function Preloader() {
  const slideUp = {
    initial: { y: "0%" },
    exit: { 
      y: "-100%", 
      transition: { duration: 1, ease: [0.76, 0, 0.24, 1] } // Duración de 1s para más dramatismo
    }
  };

  return (
    <motion.div 
        variants={slideUp} 
        initial="initial" 
        exit="exit" 
        className="fixed inset-0 z-[99] flex items-center justify-center bg-criv-yellow overflow-hidden"
        style={{ originY: 0 }} 
    >
        <div className="relative">
            <h1 className="text-black text-6xl md:text-9xl font-display font-black tracking-tighter uppercase">
                CRIV.
            </h1>
        </div>
    </motion.div>
  );
}