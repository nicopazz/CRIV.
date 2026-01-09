"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[100dvh] flex flex-col justify-center items-center bg-dark overflow-hidden px-4 py-20">
      
      {/* Fondo con Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150vw] h-[100vh] md:w-[80vw] md:h-[80vh] bg-gradient-to-tr from-criv-blue/20 via-criv-pink/20 to-criv-yellow/20 rounded-full blur-[80px] md:blur-[150px] pointer-events-none opacity-60 md:opacity-100" />
      
      <div className="z-10 relative flex flex-col items-center justify-center w-full max-w-7xl">
        <motion.h1 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="font-display font-black uppercase tracking-tighter text-white text-center w-full flex flex-col items-center gap-0 md:gap-0"
        >
          
          <span className="block text-[12vw] sm:text-[13vw] md:text-[11rem] leading-[0.9] md:leading-[0.85]">
            IMPACTO
          </span>
          
          <span className="block text-[12vw] sm:text-[13vw] md:text-[11rem] leading-[0.9] md:leading-[0.85] text-transparent bg-clip-text bg-gradient-to-r from-criv-blue via-criv-pink to-criv-orange pb-2 md:pb-0">
            DIGITAL
          </span>
          
          <span className="block text-[12vw] sm:text-[13vw] md:text-[11rem] leading-[0.9] md:leading-[0.85]">
            REAL<span className="text-criv-yellow">.</span>
          </span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-8 md:mt-12 text-gray-400 text-sm sm:text-base md:text-xl font-body text-center max-w-xs sm:max-w-lg md:max-w-2xl px-4 leading-relaxed"
        >
          Somos CRIV. Fusionamos <strong className="text-white font-bold">estrategia, diseño y tecnología</strong> para escalar marcas.
        </motion.p>
      </div>
    </section>
  );
}