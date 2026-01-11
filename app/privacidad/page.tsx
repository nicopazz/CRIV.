import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function Privacidad() {
  return (
    <section className="py-24 px-6 bg-black text-white min-h-screen font-body">
      <div className="max-w-3xl mx-auto">
        
        <Link href="/" className="inline-flex items-center gap-2 text-gray-500 hover:text-criv-yellow mb-12 transition-colors">
            <ArrowLeft size={20} /> Volver al inicio
        </Link>

        <h1 className="text-4xl md:text-6xl font-display font-bold uppercase mb-8">Política de Privacidad</h1>
        
        <div className="space-y-6 text-gray-400 leading-relaxed">
            <p>Última actualización: {new Date().toLocaleDateString()}</p>
            
            <p>En <strong>CRIV Agency</strong>, valoramos tu privacidad. Esta política explica cómo manejamos tu información cuando visitas nuestro sitio web o te comunicas con nosotros.</p>

            <h3 className="text-2xl text-white font-bold mt-8 mb-4">1. Información que Recopilamos</h3>
            <p>No recopilamos datos personales automáticamente. Solo recibimos la información que tú decides compartir voluntariamente al contactarnos a través de WhatsApp o correo electrónico (como tu nombre o número de teléfono).</p>

            <h3 className="text-2xl text-white font-bold mt-8 mb-4">2. Uso de la Información</h3>
            <p>Utilizamos tus datos únicamente para responder a tus consultas y brindarte información sobre nuestros servicios. No vendemos ni compartimos tus datos con terceros.</p>

            <h3 className="text-2xl text-white font-bold mt-8 mb-4">3. Cookies</h3>
            <p>Este sitio puede utilizar cookies técnicas esenciales para su funcionamiento y rendimiento. No utilizamos cookies de rastreo publicitario intrusivo sin tu consentimiento.</p>

            <h3 className="text-2xl text-white font-bold mt-8 mb-4">4. Contacto</h3>
            <p>Si tienes dudas sobre nuestra política, contáctanos directamente a través de nuestros canales oficiales.</p>
        </div>
      </div>
    </section>
  );
}