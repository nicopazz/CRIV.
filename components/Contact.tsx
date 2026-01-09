"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";

export default function Contact() {
  const [selectedInterest, setSelectedInterest] = useState<string | null>(null);
  const interests = ["Branding", "Web Dev", "Social Media", "Estrategia 360", "Ads / Paid Media"];

  return (
    <section id="contacto" className="py-24 px-6 bg-black text-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-6xl md:text-9xl font-display font-bold uppercase tracking-tighter mb-4"
          >
            Hablemos<span className="text-criv-blue">.</span>
          </motion.h2>
          <p className="text-xl text-gray-400 font-body">Tu próximo gran salto comienza con un &ldquo;Hola&rdquo;.</p>
        </div>

        <form className="space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="group">
              <label className="block text-sm font-bold text-gray-500 uppercase tracking-widest mb-2">Tu nombre</label>
              <input type="text" placeholder="Juan Pérez" className="w-full bg-transparent border-b border-white/20 py-4 text-2xl font-display focus:border-criv-yellow focus:outline-none transition-colors placeholder:text-zinc-800" />
            </div>
            <div className="group">
              <label className="block text-sm font-bold text-gray-500 uppercase tracking-widest mb-2">Email</label>
              <input type="email" placeholder="tu@email.com" className="w-full bg-transparent border-b border-white/20 py-4 text-2xl font-display focus:border-criv-yellow focus:outline-none transition-colors placeholder:text-zinc-800" />
            </div>
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-500 uppercase tracking-widest mb-6">Estoy interesado en...</label>
            <div className="flex flex-wrap gap-4">
              {interests.map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setSelectedInterest(item)}
                  className={`px-6 py-3 rounded-full border text-sm font-bold uppercase tracking-wider transition-all duration-300 ${
                    selectedInterest === item ? "bg-white text-black border-white scale-105" : "border-white/20 text-gray-400 hover:border-white hover:text-white"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <div className="pt-8 flex justify-center">
            <button className="px-10 py-5 bg-white text-black rounded-full font-display font-black text-xl tracking-widest uppercase hover:bg-criv-blue hover:text-white transition-all duration-300 flex items-center gap-4">
              Enviar Mensaje <Send className="w-5 h-5" />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}