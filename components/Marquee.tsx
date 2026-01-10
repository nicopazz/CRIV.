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
    <div className="relative w-full py-5 md:py-6 bg-criv-yellow overflow-hidden flex items-center -rotate-1 scale-105 border-y-4 border-black z-20">
      <motion.div
        className="flex whitespace-nowrap"
        
        animate={{ x: ["0%", "-50%"] }}
        transition={{ ease: "linear", duration: 35, repeat: Infinity }}
      >
        
        {[...Array(8)].map((_, i) => (
          <div key={i} className="flex">
            {words.map((word, index) => (
              <div key={index} className="flex items-center mx-6 md:mx-8">
                <span className="text-3xl sm:text-4xl md:text-6xl font-display font-black text-black uppercase tracking-tight">
                  {word}
                </span>
                <span className="ml-6 md:ml-8 text-2xl sm:text-3xl md:text-4xl text-black">
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