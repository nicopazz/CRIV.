"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react"; // Quitamos MessageCircle

export default function Contact() {
  const [selectedInterest, setSelectedInterest] = useState<string | null>(null);
  const [name, setName] = useState("");

  const interests = ["Branding", "Web Dev", "Social Media", "Estrategia 360", "Ads / Paid Media"];

  const phoneNumber = "5493816382279"; 

  const handleWhatsAppClick = () => {
    const interestText = selectedInterest ? `estoy interesado en *${selectedInterest}*` : "quería consultar sobre sus servicios";
    const nameText = name ? `Soy *${name}* y` : "Hola,";
    const message = `${nameText} ${interestText}. Me gustaría recibir más información.`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
    window.open(url, '_blank');
  };

  return (
    <section id="contacto" className="py-16 md:py-24 px-4 md:px-6 bg-black text-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10 md:mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-6xl md:text-9xl font-display font-bold uppercase tracking-tighter mb-4"
          >
            Hablemos<span className="text-criv-blue"></span>
          </motion.h2>
          <p className="text-lg md:text-xl text-gray-400 font-body px-4">
            Contacto directo. Sin formularios de espera.
          </p>
        </div>

        {/* Tarjeta del Formulario */}
        <div className="space-y-8 md:space-y-12 bg-zinc-900/30 p-6 sm:p-8 md:p-12 rounded-[1.5rem] md:rounded-[2rem] border border-white/10 backdrop-blur-sm">
          
          {/* 1. Selección de Interés */}
          <div>
            <label className="block text-xs md:text-sm font-bold text-gray-500 uppercase tracking-widest mb-4 md:mb-6">
              ¿Qué estás buscando?
            </label>
            <div className="flex flex-wrap gap-3 md:gap-4">
              {interests.map((item) => (
                <button
                  key={item}
                  onClick={() => setSelectedInterest(item)}
                  className={`px-4 py-2 md:px-6 md:py-3 rounded-full border text-xs md:text-sm font-bold uppercase tracking-wider transition-all duration-300 ${
                    selectedInterest === item 
                      ? "bg-white text-black border-white scale-105" 
                      : "border-white/20 text-gray-400 hover:border-white hover:text-white"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* 2. Input Nombre */}
          <div className="group">
            <label className="block text-xs md:text-sm font-bold text-gray-500 uppercase tracking-widest mb-2">
              Tu nombre (Opcional)
            </label>
            <input 
              type="text" 
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Ej: Nicolás" 
              className="w-full bg-transparent border-b border-white/20 py-3 md:py-4 text-lg md:text-2xl font-display focus:border-criv-yellow focus:outline-none transition-colors placeholder:text-zinc-800" 
            />
          </div>

          {/* 3. Botón WhatsApp Oficial */}
          <div className="pt-2 md:pt-4">
            <button 
              onClick={handleWhatsAppClick}
              className="w-full group relative px-4 py-4 md:px-10 md:py-6 bg-[#25D366] text-white rounded-full font-display font-black text-sm sm:text-lg md:text-xl tracking-widest uppercase hover:bg-[#1ebc57] transition-all duration-300 flex justify-center items-center gap-2 md:gap-4 shadow-[0_0_20px_rgba(37,211,102,0.3)] hover:shadow-[0_0_30px_rgba(37,211,102,0.5)]"
            >
              {/* SVG Oficial WhatsApp */}
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 448 512" 
                className="w-5 h-5 md:w-8 md:h-8 flex-shrink-0 fill-white"
              >
                <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
              </svg>
              
              <span className="whitespace-nowrap">Consultar</span>
              
              <ArrowUpRight className="w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform opacity-70 flex-shrink-0" />
            </button>
            <p className="text-center text-gray-500 text-[10px] md:text-xs mt-4 font-body uppercase tracking-wider">
              Respuesta promedio: Menos de 15 minutos
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}