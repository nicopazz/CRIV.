"use client";
import { motion } from "framer-motion";

const steps = [
  {
    number: "1",
    title: "Auditoría & Estrategia",
    description: "No adivinamos. Analizamos tu marca, tu competencia y tu audiencia para definir un plan de ataque claro.",
    color: "text-criv-blue",
    border: "group-hover:border-criv-blue"
  },
  {
    number: "2",
    title: "Diseño & Desarrollo",
    description: "Manos a la obra. Creamos la identidad visual, la web o el contenido con estándares estéticos de alto nivel.",
    color: "text-criv-yellow",
    border: "group-hover:border-criv-yellow"
  },
  {
    number: "3",
    title: "Lanzamiento",
    description: "El momento de la verdad. Publicamos, activamos campañas y nos aseguramos de que todo funcione como un reloj.",
    color: "text-criv-pink",
    border: "group-hover:border-criv-pink"
  },
  {
    number: "4",
    title: "Escalamiento",
    description: "No termina ahí. Medimos resultados, optimizamos lo que funciona y descartamos lo que no para crecer mes a mes.",
    color: "text-criv-mint",
    border: "group-hover:border-criv-mint" // Asegúrate de tener este color en tailwind o usa text-green-400
  }
];

export default function Process() {
  return (
    <section className="py-24 px-6 bg-black text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Título */}
        <div className="mb-20 md:text-center">
            <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
               className="text-4xl sm:text-5xl md:text-8xl font-display font-bold uppercase tracking-tight"
            >
                Work<span className="text-gray-600">flow</span>
            </motion.h2>
            <p className="text-gray-400 font-body mt-4 text-lg max-w-2xl mx-auto">
                Nuestro método probado para llevar marcas del punto A al punto B sin fricción.
            </p>
        </div>

        {/* Pasos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.2 }}
                    className={`group relative p-8 rounded-[2rem] border border-white/10 bg-zinc-900/20 backdrop-blur-sm hover:-translate-y-2 transition-all duration-500 ${step.border}`}
                >
                    {/* Número Gigante de Fondo */}
                    <div className={`text-6xl md:text-8xl font-display font-bold  mb-6 ${step.color} transition-opacity group-hover:opacity-100`}>
                        {step.number}
                    </div>

                    <h3 className="text-2xl font-display font-bold uppercase mb-4 group-hover:text-white transition-colors">
                        {step.title}
                    </h3>
                    
                    <p className="text-gray-400 font-body leading-relaxed text-sm">
                        {step.description}
                    </p>
                </motion.div>
            ))}
        </div>

      </div>
    </section>
  );
}