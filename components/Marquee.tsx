"use client";
import { motion } from "framer-motion";
const words = ["MARKETING", "WEB DESIGN", "BRANDING", "SOCIAL MEDIA", "STRATEGY"];
export default function Marquee() {
  return (
    <div className="relative w-full py-6 bg-criv-yellow overflow-hidden flex items-center -rotate-1 scale-105 border-y-4 border-black z-20">
      <motion.div className="flex whitespace-nowrap" animate={{ x: [0, -1000] }} transition={{ ease: "linear", duration: 15, repeat: Infinity }}>
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex">
            {words.map((word, index) => (
              <div key={index} className="flex items-center mx-8">
                <span className="text-4xl md:text-6xl font-display font-black text-black uppercase">{word}</span>
                <span className="ml-8 text-4xl text-black">✦</span>
              </div>
            ))}
          </div>
        ))}
      </motion.div>
    </div>
  );
}