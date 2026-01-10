"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

// Datos de ejemplo (Inspirados en el video: Cyber Chic, Terra Bean, etc.)
const projects = [
  {
    id: 1,
    title: "CYBER CHIC",
    category: "Web3 / Digital Fashion",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop", 
    size: "md:col-span-1", // Ocupa 1 columna
  },
  {
    id: 2,
    title: "TERRA BEAN",
    category: "Packaging / Strategy",
    image: "https://images.unsplash.com/photo-1590856029826-c7a73142bbf1?q=80&w=1000&auto=format&fit=crop", 
    size: "md:col-span-1",
  },
  {
    id: 3,
    title: "SONAR FEST",
    category: "Campaign / Visuals",
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1000&auto=format&fit=crop", 
    size: "md:col-span-2", 
  },
  {
    id: 4,
    title: "Esmae",
    category: "App Dev / UI/UX",
    image: "/esmae.png", 
    size: "md:col-span-1",
  },
  {
    id: 5,
    title: "RollingVet",
    category: "App Dev ",
    image: "/rollingvet.png", 
    size: "md:col-span-1",
  }
];

export default function Projects() {
  return (
    <section id="proyectos" className="py-24 px-6 bg-black text-white">
      <div className="max-w-7xl mx-auto">
        
        {/* Cabecera de la sección */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-8xl font-display font-bold uppercase leading-none"
            >
              Nuestros <br />
              <span className="text-gray-600">Trabajos</span>
            </motion.h2>
          </div>
          
          <div className="mb-2">
            <a href="#" className="group flex items-center gap-2 text-sm font-bold uppercase tracking-widest hover:text-criv-blue transition-colors">
              Ver Portfolio Completo
              <ArrowUpRight className="w-5 h-5 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

        {/* Grilla de Proyectos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
              className={`group relative flex flex-col gap-4 ${project.size}`}
            >
              {/* Contenedor de la Imagen (con efecto Zoom) */}
              <div className="relative w-full aspect-[4/3] overflow-hidden rounded-[2rem] border border-white/10">
                
                {/* Overlay oscuro al hacer hover */}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 z-10 transition-colors duration-500" />
                
                {/* Botón flotante que aparece al centro */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 opacity-0 group-hover:opacity-100 transition-all duration-300 scale-50 group-hover:scale-100">
                  <div className="w-24 h-24 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20">
                    <span className="text-xs font-bold uppercase tracking-widest text-white">Ver</span>
                  </div>
                </div>

                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Info del Proyecto */}
              <div className="flex justify-between items-start px-2">
                <div>
                  <h3 className="text-2xl font-display font-bold uppercase group-hover:text-criv-blue transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-500 font-body text-sm mt-1 uppercase tracking-wider">
                    {project.category}
                  </p>
                </div>
                {/* Flecha discreta */}
                <div className="opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-300">
                  <ArrowUpRight className="w-6 h-6 text-criv-blue" />
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}