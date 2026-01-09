"use client";
import { motion } from "framer-motion";

const words = [
  "MARKETING",
  "WEB DESIGN",
  "BRANDING",
  "SOCIAL MEDIA",
  "STRATEGY",
];

export default function Marquee() {
  return (
    <div className="relative w-full py-3 md:py-6 bg-criv-yellow overflow-hidden flex items-center -rotate-1 scale-105 border-y-2 md:border-y-4 border-black z-20">
      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: [0, -1000] }}
        transition={{ ease: "linear", duration: 20, repeat: Infinity }}
      >
        {/* Aumentamos las repeticiones a 8 para asegurar que cubra pantallas anchas al reducir el tamaño de letra */}
        {[...Array(8)].map((_, i) => (
          <div key={i} className="flex">
            {words.map((word, index) => (
              <div key={index} className="flex items-center mx-4 md:mx-8">
                <span className="text-2xl sm:text-4xl md:text-6xl font-display font-black text-black uppercase tracking-tight">
                  {word}
                </span>
                {/* Estrella separadora ajustada */}
                <span className="ml-4 md:ml-8 text-xl sm:text-3xl md:text-4xl text-black">
                  ✦
                </span>
              </div>
            ))}
          </div>
        ))}
      </motion.div>
    </div>
  );
}