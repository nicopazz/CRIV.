"use client";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const reviews = [
  {
    client: "Esmae",
    role: "E-commerce",
    text: "El cambio de imagen fue radical. Nuestras ventas online aumentaron un 40% el primer mes.",
    color: "text-criv-blue",
  },
  {
    client: "Terra Bean",
    role: "Coffee Shop",
    text: "Captaron la esencia de la marca al instante. El diseño del packaging es otro nivel.",
    color: "text-criv-yellow",
  },
  {
    client: "Cyber Chic",
    role: "Ecommerce",
    text: "La web vuela y las ventas automáticas nos ahorraron horas de trabajo. Recomendados.",
    color: "text-criv-pink",
  },
];

export default function Testimonials() {
  return (
    // CAMBIO 1: bg-black -> bg-white
    <section className="py-24 px-6 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Título de la Sección */}
        <motion.h2 
           initial={{ opacity: 0, x: -30 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           // CAMBIO 2: text-white -> text-dark
           className="text-5xl md:text-8xl font-display font-bold text-dark mb-20 uppercase"
        >
           Lo que dicen <br />
           {/* CAMBIO 3: text-gray-700 -> text-gray-300 (Gris claro para contraste sutil) */}
           <span className="text-criv-yellow">de nosotros</span>
        </motion.h2>

        {/* Grilla de Testimonios */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              // CAMBIO 4: 
              // - border-white/10 -> border-gray-200
              // - bg-zinc-900/20 -> bg-white
              // - hover:border-white/20 -> hover:border-gray-300
              className="group relative p-8 rounded-[2rem] border border-gray-200 bg-white backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:border-gray-300"
            >
              {/* Icono Comilla */}
              <Quote className={`w-10 h-10 mb-6 opacity-50 ${review.color}`} />
              
              {/* Texto del Review */}
              {/* CAMBIO 5: text-gray-300 -> text-gray-600 */}
              <p className="text-gray-600 font-body text-lg mb-8 leading-relaxed">
                &quot;{review.text}&quot;
              </p>
              
              {/* Datos del Cliente */}
              <div>
                {/* CAMBIO 6: text-white -> text-dark */}
                <h4 className="font-bold text-dark uppercase tracking-wider font-display text-xl">
                  {review.client}
                </h4>
                <span className={`text-sm font-bold uppercase ${review.color}`}>
                  {review.role}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}