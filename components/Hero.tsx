"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Marquee from "@/components/Marquee";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[100dvh] flex flex-col justify-center items-center bg-dark overflow-hidden px-4 pt-20 pb-32 md:pb-40">
      
      {/* Fondo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150vw] h-[100vh] md:w-[80vw] md:h-[80vh] bg-gradient-to-tr from-criv-blue/20 via-criv-pink/20 to-criv-yellow/20 rounded-full blur-[80px] md:blur-[150px] pointer-events-none opacity-60 md:opacity-100" />
      
      {/* Contenido Principal */}
      <div className="z-10 relative flex flex-col items-center justify-center w-full max-w-7xl">
        <motion.h1 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="font-display font-black uppercase tracking-tighter text-white text-center w-full flex flex-col items-center gap-0 leading-[0.9] md:leading-[0.85]"
        >
          
          <span className="block text-[12vw] lg:text-[9vw] 2xl:text-[9rem]">
            IMPACTO
          </span>

          <span className="block text-[12vw] lg:text-[9vw] 2xl:text-[9rem] text-transparent bg-clip-text bg-gradient-to-r from-criv-blue via-criv-pink to-criv-orange pb-1 md:pb-0">
            DIGITAL
          </span>
          
          
          {/* 1. Quitamos 'gap' para controlar la unión manualmente */}
          <div className="flex items-center justify-center">
            
            {/* z-0 para el texto */}
            <span className="block text-[12vw] lg:text-[9vw] 2xl:text-[9rem] relative z-0">
              REAL<span className="text-criv-yellow"></span>
            </span>

            <motion.div 
              initial={{ scale: 0, rotate: -20 }}
              animate={{ scale: 1, rotate: 12 }} // Rotación de 12 grados para que parezca apoyada
              transition={{ delay: 0.6, type: "spring", stiffness: 200 }}
              
              
              className="relative z-10 w-[22vw] h-[22vw] lg:w-[11vw] lg:h-[11vw] 2xl:w-[11rem] 2xl:h-[11rem] -ml-4 md:-ml-8 -mt-2 -translate-y-2 md:-translate-y-4"
            >
              <Image 
                src="/criv-criv.png" 
                alt="Mascota CRIV" 
                fill 
                className="object-contain"
              />
            </motion.div>

          </div>
          

        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="py-6 mt-4 md:mt-6 text-gray-400 text-base sm:text-lg md:text-xl font-body text-center max-w-xs sm:max-w-lg md:max-w-2xl px-4 leading-relaxed"
        >
          Somos CRIV. Fusionamos <strong className="text-white font-bold">estrategia, diseño y tecnología</strong> para escalar marcas.
        </motion.p>
      </div>

      {/* MARQUEE INTEGRADO */}
      <motion.div 
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.10, ease: "easeOut" }}
        className="absolute bottom-24 md:bottom-16 left-0 w-full z-20"
      >
        <Marquee />
      </motion.div>

    </section>
  );
}