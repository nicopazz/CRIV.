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
    border: "group-hover:border-criv-mint" 
  }
];

export default function Process() {
  return (
    // CAMBIO 1: bg-black -> bg-white, text-white -> text-dark
    <section className="py-24 px-6 bg-white text-dark relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Título */}
        <div className="mb-20 md:text-center">
            <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl sm:text-5xl md:text-8xl font-display font-bold uppercase tracking-tight"
            >
               Work<span className="text-criv-yellow">flow</span> {/* CAMBIO 2: gray-600 -> gray-300 */}
            </motion.h2>
            <p className="text-gray-600 font-body mt-4 text-lg max-w-2xl mx-auto"> {/* CAMBIO 3: gray-400 -> gray-600 */}
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
                    // CAMBIO 4: 
                    // - border-white/10 -> border-gray-200
                    // - bg-zinc-900/20 -> bg-white
                    // - hover:border-gray-300 (opcional, para dar feedback)
                    className={`group relative p-8 rounded-[2rem] border border-gray-200 bg-white backdrop-blur-sm hover:-translate-y-2 transition-all duration-500 hover:border-gray-300 ${step.border}`}
                >
                    {/* Número Gigante de Fondo */}
                    <div className={`text-6xl md:text-8xl font-display font-bold  mb-6 ${step.color} transition-opacity group-hover:opacity-100`}>
                        {step.number}
                    </div>

                    {/* CAMBIO 5: Eliminado 'group-hover:text-white' para que no desaparezca en fondo blanco */}
                    <h3 className="text-2xl font-display font-bold uppercase mb-4 text-dark transition-colors">
                        {step.title}
                    </h3>
                    
                    {/* CAMBIO 6: text-gray-400 -> text-gray-600 */}
                    <p className="text-gray-600 font-body leading-relaxed text-sm">
                        {step.description}
                    </p>
                </motion.div>
            ))}
        </div>

      </div>
    </section>
  );
}