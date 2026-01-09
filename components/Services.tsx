"use client";
import { motion } from "framer-motion";
import { PenTool, Code, Smartphone } from "lucide-react";

// Definimos los datos de cada servicio para no repetir código
const services = [
  {
    title: "Diseño Gráfico",
    description: "Lenguaje visual que construye autoridad. Desde logotipos memorables hasta sistemas de diseño.",
    icon: <PenTool className="w-8 h-8" />,
    color: "text-criv-blue",
    borderColor: "group-hover:border-criv-blue",
    bgHover: "group-hover:bg-criv-blue/5",
    tags: ["Branding Kits", "Diseño Editorial", "Packaging"]
  },
  {
    title: "Desarrollo Web",
    description: "Sitios web que no solo se ven bien, venden. Optimización, velocidad y UX/UI de vanguardia.",
    icon: <Code className="w-8 h-8" />,
    color: "text-criv-yellow",
    borderColor: "group-hover:border-criv-yellow",
    bgHover: "group-hover:bg-criv-yellow/5",
    tags: ["E-Commerce", "Web Apps", "Landing Pages"]
  },
  {
    title: "Social Media",
    description: "Estrategias de contenido que crean comunidad y convierten seguidores en clientes fieles.",
    icon: <Smartphone className="w-8 h-8" />,
    color: "text-criv-pink",
    borderColor: "group-hover:border-criv-pink",
    bgHover: "group-hover:bg-criv-pink/5",
    tags: ["Reels & TikTok", "Copywriting", "Gestión de Ads"]
  }
];

// Animación para que aparezcan las tarjetas
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 } // Retraso entre cada tarjeta
  }
};

const item = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function Services() {
  return (
    <section id="servicios" className="py-24 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        
        {/* Título de la sección */}
        <motion.h2 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-8xl font-display font-bold text-white mb-20 uppercase"
        >
          Servi<span className="text-gray-600">cios</span>.
        </motion.h2>

        {/* Grilla de Servicios */}
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div 
              key={index}
              variants={item}
              className={`group relative p-8 rounded-[2rem] border border-white/10 bg-zinc-900/30 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 ${service.borderColor} ${service.bgHover}`}
            >
              {/* Icono Flotante */}
              <div className={`mb-6 p-4 rounded-full bg-white/5 w-fit ${service.color} ring-1 ring-white/10`}>
                {service.icon}
              </div>

              {/* Título */}
              <h3 className="text-3xl font-display font-bold text-white mb-4">
                {service.title}
              </h3>

              {/* Descripción */}
              <p className="text-gray-400 font-body leading-relaxed mb-8">
                {service.description}
              </p>

              {/* Lista de características (Tags) */}
              <ul className="space-y-3">
                {service.tags.map((tag, i) => (
                  <li key={i} className="flex items-center text-sm font-bold font-body text-gray-300">
                    <span className={`w-2 h-2 rounded-full mr-3 ${service.color.replace('text-', 'bg-')}`} />
                    {tag}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}