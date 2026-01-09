"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle, ArrowUpRight } from "lucide-react";

export default function Contact() {
  const [selectedInterest, setSelectedInterest] = useState<string | null>(null);
  const [name, setName] = useState("");

  const interests = ["Branding", "Web Dev", "Social Media", "Estrategia 360", "Ads / Paid Media"];

  // ⚠️ IMPORTANTE: PON TU NÚMERO AQUÍ (Código país + Número)
  // Ejemplo Argentina: 549 + código de área + número (sin el 15 si es celular)
  const phoneNumber = "5493816382279"; 

  const handleWhatsAppClick = () => {
    // Creamos el mensaje personalizado
    const interestText = selectedInterest ? `estoy interesado en *${selectedInterest}*` : "quería consultar sobre sus servicios";
    const nameText = name ? `Soy *${name}* y` : "Hola,";
    
    const message = `${nameText} ${interestText}. Me gustaría recibir más información.`;
    
    // Generamos el link oficial de WhatsApp API
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
    // Abrimos en nueva pestaña
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

          {/* 3. Botón WhatsApp */}
          <div className="pt-2 md:pt-4">
            <button 
              onClick={handleWhatsAppClick}
              className="w-full group relative px-4 py-4 md:px-10 md:py-6 bg-[#25D366] text-black rounded-full font-display font-black text-sm sm:text-lg md:text-xl tracking-widest uppercase hover:bg-[#1ebc57] transition-all duration-300 flex justify-center items-center gap-2 md:gap-4"
            >
              <MessageCircle className="w-5 h-5 md:w-8 md:h-8 flex-shrink-0" />
              <span className="whitespace-nowrap">Consultá</span>
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