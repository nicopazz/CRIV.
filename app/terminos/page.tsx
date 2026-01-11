import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function Terminos() {
  return (
    <section className="py-24 px-6 bg-black text-white min-h-screen font-body">
      <div className="max-w-3xl mx-auto">
        
        <Link href="/" className="inline-flex items-center gap-2 text-gray-500 hover:text-criv-yellow mb-12 transition-colors">
            <ArrowLeft size={20} /> Volver al inicio
        </Link>

        <h1 className="text-4xl md:text-6xl font-display font-bold uppercase mb-8">Términos y Condiciones</h1>
        
        <div className="space-y-6 text-gray-400 leading-relaxed">
            <p>Bienvenido a CRIV Agency. Al contratar nuestros servicios, aceptas los siguientes términos:</p>

            <h3 className="text-2xl text-white font-bold mt-8 mb-4">1. Servicios</h3>
            <p>CRIV Agency se compromete a entregar los servicios de diseño, desarrollo y estrategia según lo acordado en la propuesta comercial específica para cada cliente.</p>

            <h3 className="text-2xl text-white font-bold mt-8 mb-4">2. Pagos</h3>
            <p>Los proyectos requieren un anticipo para comenzar. Los pagos no son reembolsables una vez iniciado el trabajo, salvo incumplimiento comprobable por parte de la agencia.</p>

            <h3 className="text-2xl text-white font-bold mt-8 mb-4">3. Propiedad Intelectual</h3>
            <p>Una vez finalizado el proyecto y cubierto el pago total, el cliente obtiene los derechos de uso sobre los entregables finales. CRIV Agency se reserva el derecho de mostrar el trabajo en su portafolio.</p>

            <h3 className="text-2xl text-white font-bold mt-8 mb-4">4. Modificaciones</h3>
            <p>Nos reservamos el derecho de actualizar estos términos en cualquier momento. Se recomienda revisarlos periódicamente.</p>
        </div>
      </div>
    </section>
  );
}