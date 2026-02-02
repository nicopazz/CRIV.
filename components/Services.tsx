"use client";
import { motion, cubicBezier } from "framer-motion";
import { PenTool, Code, Smartphone, ArrowUpRight } from "lucide-react";

const services = [
  {
    title: "Diseño Gráfico",
    description: "Lenguaje visual que construye autoridad. Desde logotipos memorables hasta sistemas de diseño.",
    icon: <PenTool className="w-8 h-8" />,
    color: "text-criv-blue",
    borderColor: "group-hover:border-criv-blue",
    shadow: "group-hover:shadow-[0_0_30px_-10px_rgba(59,130,246,0.3)]",
    bgHover: "group-hover:bg-criv-blue/5",
    tags: ["Branding Kits", "Diseño Editorial", "Packaging"]
  },
  {
    title: "Desarrollo Web",
    description: "Sitios web que no solo se ven bien, venden. Optimización, velocidad y UX/UI de vanguardia.",
    icon: <Code className="w-8 h-8" />,
    color: "text-criv-yellow",
    borderColor: "group-hover:border-criv-yellow",
    shadow: "group-hover:shadow-[0_0_30px_-10px_rgba(252,211,77,0.3)]",
    bgHover: "group-hover:bg-criv-yellow/5",
    tags: ["E-Commerce", "Web Apps", "Landing Pages"]
  },
  {
    title: "Social Media",
    description: "Estrategias de contenido que crean comunidad y convierten seguidores en clientes fieles.",
    icon: <Smartphone className="w-8 h-8" />,
    color: "text-criv-pink",
    borderColor: "group-hover:border-criv-pink",
    shadow: "group-hover:shadow-[0_0_30px_-10px_rgba(249,168,212,0.3)]",
    bgHover: "group-hover:bg-criv-pink/5",
    tags: ["Reels & TikTok", "Copywriting", "Gestión de Ads"]
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: cubicBezier(0.25, 0.46, 0.45, 0.94) } }
};

export default function Services() {
  return (
    // CAMBIO 1: bg-black -> bg-white
    <section id="servicios" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        
        <motion.h2 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          // CAMBIO 2: text-white -> text-dark
          className="text-5xl md:text-8xl font-display font-bold text-dark mb-20 uppercase"
        >
          {/* CAMBIO 3: text-gray-600 -> text-gray-300 (Para mantener el efecto "dim" en fondo blanco) */}
          Servi<span className="text-criv-yellow">cios</span>
        </motion.h2>

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
              // CAMBIO 4: 
              // - border-white/10 -> border-gray-200
              // - bg-zinc-900/20 -> bg-white
              className={`group relative p-8 rounded-[2rem] border border-gray-200 bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 ${service.borderColor} ${service.bgHover} ${service.shadow}`}
            >
              <div className="flex justify-between items-start mb-6">
                {/* CAMBIO 5: bg-white/5 -> bg-gray-100, ring-white/10 -> ring-gray-200 */}
                <div className={`p-4 rounded-full bg-gray-100 w-fit ${service.color} ring-1 ring-gray-200 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3`}>
                  {service.icon}
                </div>
                <ArrowUpRight className={`w-6 h-6 ${service.color} opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300`} />
              </div>

              {/* CAMBIO 6: text-white -> text-dark */}
              <h3 className="text-3xl font-display font-bold text-dark mb-4">
                {service.title}
              </h3>

              {/* CAMBIO 7: text-gray-400 -> text-gray-600 */}
              <p className="text-gray-600 font-body leading-relaxed mb-8">
                {service.description}
              </p>

              <ul className="space-y-3">
                {service.tags.map((tag, i) => (
                  // CAMBIO 8: text-gray-300 -> text-gray-500
                  <li key={i} className="flex items-center text-sm font-bold font-body text-gray-500">
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