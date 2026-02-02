"use client";
import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";

const plans = [
  {
    name: "CRIV NIDO",
    price: "399",
    description: "Para marcas que inician.",
    features: ["10 Posteos Mensuales", "Estrategia Básica", "Reporte de Métricas"],
    color: "text-criv-blue",
    borderColor: "border-criv-blue",
    shadow: "shadow-[0_0_40px_rgba(59,130,246,0.15)]",
    // CAMBIO: hover:bg-black (para contraste en fondo blanco)
    buttonStyle: "bg-criv-blue text-white hover:bg-black hover:text-white"
  },
  {
    name: "MINI CRIV",
    price: "899",
    description: "El favorito de las Startups.",
    features: ["15 Posteos + Reels", "Community Manager", "Landing Page One-Page", "Setup de Ads"],
    color: "text-criv-yellow",
    borderColor: "border-criv-yellow",
    shadow: "shadow-[0_0_40px_rgba(252,211,77,0.15)]", 
    // CAMBIO: hover:bg-black
    buttonStyle: "bg-criv-yellow text-black hover:bg-black hover:text-white"
  },
  {
    name: "CRIV CRIV",
    price: "1,599",
    description: "Dominio total.",
    features: ["Contenido Diario", "Web Full Stack", "Branding Completo", "Consultoría Semanal"],
    color: "text-criv-pink",
    borderColor: "border-criv-pink",
    shadow: "shadow-[0_0_40px_rgba(249,168,212,0.15)]", 
    // CAMBIO: hover:bg-black
    buttonStyle: "bg-criv-pink text-black hover:bg-black hover:text-white"
  }
];

export default function Pricing() {
  
  const phoneNumber = "5493816382279"; 

  const handlePlanClick = (planName: string) => {
    const message = `Hola! Estoy interesado en contratar el plan *${planName}*. Me gustaría recibir más detalles.`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    // CAMBIO 1: bg-black -> bg-white, text-white -> text-dark
    <section id="planes" className="py-24 px-6 bg-white text-dark relative overflow-hidden">
      
      {/* Fondo decorativo (ajustado para que se vea sutil en blanco) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-criv-blue/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-8xl font-display font-bold uppercase mb-4"
          >
            Plan<span className="text-criv-mint">es</span>
          </motion.h2>
          {/* CAMBIO 2: text-gray-400 -> text-gray-600 */}
          <p className="text-gray-600 font-body">Modelos flexibles para crecimiento agresivo.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              // CAMBIO 3: 
              // - bg-zinc-900/80 -> bg-white
              // - Se mantienen los bordes de color y sombras
              className={`relative p-8 rounded-3xl backdrop-blur-md flex flex-col h-full bg-white border-2 ${plan.borderColor} ${plan.shadow}`}
            >
              
              {plan.name === "MINI CRIV" && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-criv-yellow text-black text-xs font-bold uppercase tracking-widest rounded-full flex items-center gap-2 z-20">
                  <Sparkles className="w-3 h-3" /> Mas conveniente
                </div>
              )}
              
              <div className="mb-8">
                <h3 className={`text-xl font-bold mb-2 ${plan.color}`}>{plan.name}</h3>
                {/* CAMBIO 4: text-white -> text-dark */}
                <div className="text-5xl font-display font-bold text-dark mb-2">${plan.price}</div>
                {/* CAMBIO 5: text-gray-500 -> text-gray-600 */}
                <p className="text-sm text-gray-600 font-body">{plan.description}</p>
              </div>

              <ul className="space-y-4 mb-8 flex-1">
                {plan.features.map((feat, i) => (
                  // CAMBIO 6: text-gray-300 -> text-gray-600
                  <li key={i} className="flex items-center gap-3 text-sm font-body text-gray-600">
                    <Check className={`w-4 h-4 ${plan.color}`} />
                    {feat}
                  </li>
                ))}
              </ul>

              <button 
                onClick={() => handlePlanClick(plan.name)}
                className={`w-full py-4 rounded-xl transition-all duration-300 font-bold uppercase tracking-wide ${plan.buttonStyle}`}
              >
                Seleccionar
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}