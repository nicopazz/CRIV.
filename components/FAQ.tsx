"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "¿Cuánto tiempo tarda un proyecto web?",
    answer: "Depende del alcance. Una Landing Page de alto impacto suele estar lista en 7-10 días hábiles. Proyectos más complejos como E-commerce o Webs Corporativas pueden tomar de 3 a 5 semanas. Siempre trabajamos con cronogramas claros desde el día 1."
  },
  {
    question: "¿Qué métodos de pago aceptan?",
    answer: "Aceptamos transferencias bancarias y efectivo. Para clientes internacionales, también operamos vía PayPal o Western Union. Solicitamos un 50% de anticipo para iniciar y el 50% restante contra entrega final."
  },
  {
    question: "¿Ofrecen mantenimiento mensual?",
    answer: "¡Sí! No te dejamos solo. Ofrecemos planes de soporte mensual que incluyen actualizaciones de seguridad, cambios de contenido y monitoreo de servidores para que tu web siempre vuele."
  },
  {
    question: "¿Incluyen el dominio y hosting?",
    answer: "Te asesoramos en la compra para que TÚ seas el dueño 100% de tus activos digitales. Nosotros nos encargamos de toda la configuración técnica (DNS, SSL, servidores), pero la propiedad legal del dominio siempre será tuya."
  },
  {
    question: "¿Hacen devoluciones si no me gusta?",
    answer: "Trabajamos con un proceso de aprobación por etapas (Wireframe > Diseño > Desarrollo). No avanzamos a la siguiente fase hasta que estes conforme con la actual. Esto garantiza que el resultado final sea exactamente lo que esperabas (o mejor)."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 px-6 bg-black text-white relative overflow-hidden">
       
       <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-criv-blue/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-7xl font-display font-bold uppercase mb-16 text-center"
        >
          Preguntas <span className="text-gray-600">Frecuentes</span>
        </motion.h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
                  isOpen 
                    ? "border-criv-yellow bg-zinc-900/50 shadow-[0_0_20px_rgba(252,211,77,0.1)]" 
                    : "border-white/10 bg-zinc-900/20 hover:border-white/30"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between p-6 md:p-8 text-left"
                >
                  <span className={`text-lg md:text-xl font-bold font-display uppercase tracking-wide transition-colors ${isOpen ? "text-criv-yellow" : "text-white"}`}>
                    {faq.question}
                  </span>
                  <div className={`p-2 rounded-full border transition-all ${isOpen ? "bg-criv-yellow text-black border-criv-yellow" : "border-white/20 text-white"}`}>
                    {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 md:px-8 pb-8 text-gray-400 font-body leading-relaxed border-t border-white/5 pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}