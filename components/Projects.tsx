"use client";
import { motion } from "framer-motion";
import Image from "next/image";

// Lista de marcas (Sin duplicados, solo las reales)
const brands = [
  { id: 1, name: "Terra Bean", logo: "/logo.png" },
  { id: 2, name: "Terra Bean", logo: "/logo.png" },
  { id: 3, name: "Terra Bean", logo: "/logo.png" },
  { id: 4, name: "Cyber Chic", logo: "/logo.png" }, 
  { id: 5, name: "Sonar Fest", logo: "/logo.png" }, 
];

export default function Projects() {
  return (
    <section id="proyectos" className="py-24 bg-white relative">
      
      <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-display font-bold uppercase text-dark mb-4"
        >
          Confían en <span className="text-criv-orange">Nosotros</span>
        </motion.h2>
        <p className="text-gray-600 font-body max-w-2xl mx-auto">
          Marcas que ya están escalando con nuestra estrategia.
        </p>
      </div>

      {/* CONTENEDOR FLEXIBLE / GRILLA FIJA */}
      <div className="max-w-6xl mx-auto flex flex-wrap justify-center items-center gap-12 md:gap-20 px-6">
        {brands.map((brand, index) => (
          <motion.div
            key={brand.id}
            // Animación de entrada escalonada (cada logo aparece un poco después del anterior)
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            
            // Estilos: Escala de grises por defecto, color al pasar el mouse
            className="relative w-32 h-16 md:w-44 md:h-24 flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100 cursor-pointer"
          >
            <Image
              src={brand.logo}
              alt={brand.name}
              fill
              className="object-contain"
            />
          </motion.div>
        ))}
      </div>

    </section>
  );
}