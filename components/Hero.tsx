"use client";
import { motion } from "framer-motion";


export default function Hero() {
  return (
    <section className="h-screen w-full flex flex-col justify-center items-center bg-dark relative overflow-hidden px-4">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vh] bg-gradient-to-r from-criv-peach/20 to-criv-blue/20 rounded-full blur-[150px] pointer-events-none" />
      <div className="z-10 text-center flex flex-col items-center max-w-5xl">
        <motion.h1 
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="font-display text-[13vw] md:text-[11rem] leading-[0.85] font-black uppercase tracking-tighter text-white text-center"
        >
          IMPACTO <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-criv-peach to-criv-lightpink">DIGITAL</span> <br />
          REAL<span className="text-criv-blue"></span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-8 text-gray-400 text-lg md:text-xl font-body max-w-2xl"
        >
          Somos CRIV. Fusionamos <strong className="text-white font-bold">estrategia, diseño y tecnología</strong> para escalar marcas.
        </motion.p>
      </div>
    </section>
  );
}