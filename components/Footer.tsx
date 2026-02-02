"use client";
import Link from "next/link";
import { ArrowUpRight, ArrowUp } from "lucide-react"; 

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const links = [
    { name: "Home", href: "/" },
    { name: "Servicios", href: "#servicios" },
    { name: "Proyectos", href: "#proyectos" },
    { name: "Planes", href: "#planes" },
  ];

  const socials = [
    { name: "Instagram", href: "https://www.instagram.com/crivmarketing/?igsh=MTNwNzRiazJmMmkxNg%3D%3D#" },
    { name: "LinkedIn", href: "https://linkedin.com" },
    { name: "WhatsApp", href: "https://wa.me/tu_numero" },
    { name: "Behance", href: "https://behance.net" },
  ];

  // Función para volver arriba
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    // CAMBIO 1: bg-black -> bg-white, text-white -> text-dark
    <footer className="bg-white text-dark pt-20 md:pt-32 overflow-hidden relative">
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 mb-12 md:mb-32">
          
          {/* CTA Principal */}
          <div className="md:col-span-6 flex flex-col justify-between">
            <div>
              <h3 className="text-4xl md:text-6xl font-display font-bold uppercase leading-tight mb-6">
                ¿Listo para <br />
                <span className="text-criv-yellow">escalar?</span>
              </h3>
              {/* CAMBIO 2: text-gray-400 -> text-gray-600 */}
              <p className="text-gray-600 font-body max-w-md text-lg">
                No dejes que tu marca se quede estancada. Hablemos hoy y definamos el futuro de tu proyecto.
              </p>
            </div>
            <div className="mt-8 md:mt-0">
                <a 
                    href="#contacto" 
                    className="inline-flex items-center gap-2 border-b border-criv-yellow pb-1 text-xl font-bold uppercase tracking-wider hover:text-criv-yellow transition-colors group"
                >
                    Iniciar Proyecto 
                    <ArrowUpRight className="w-5 h-5 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                </a>
            </div>
          </div>

          {/* Links de Navegación (OCULTO EN MÓVIL) */}
          <div className="md:col-span-3 hidden md:block">
            <h4 className="text-gray-500 font-bold uppercase tracking-widest text-sm mb-6">Menu</h4>
            <ul className="space-y-4">
              {links.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="text-lg font-body hover:text-criv-yellow transition-colors block hover:translate-x-2 duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links Sociales */}
          <div className="md:col-span-3">
            <h4 className="text-gray-500 font-bold uppercase tracking-widest text-sm mb-6">Social</h4>
            <ul className="space-y-4">
              {socials.map((social) => (
                <li key={social.name}>
                  <a 
                    href={social.href} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-lg font-body hover:text-criv-yellow transition-colors block hover:translate-x-2 duration-300 items-center gap-2 group"
                  >
                    {social.name}
                    <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* BOTÓN VOLVER AL PRINCIPIO (SOLO MÓVIL) */}
        <div className="md:hidden flex justify-center pb-12">
            <button 
                onClick={scrollToTop}
                // CAMBIO 3: text-white/50 -> text-gray-400
                className="group flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-gray-400 hover:text-criv-yellow transition-colors"
            >
                <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
                Volver al principio
            </button>
        </div>

        {/* Copyright */}
        {/* CAMBIO 4: border-white/10 -> border-gray-200 */}
        <div className="border-t border-gray-200 py-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 font-body">
            <p>© {currentYear} CRIV. Todos los derechos reservados.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
                {/* CAMBIO 5: hover:text-white -> hover:text-black */}
                <a href="/privacidad" className="hover:text-black transition-colors">Privacy Policy</a>
                <a href="/terminos" className="hover:text-black transition-colors">Terms & Conditions</a>
            </div>
        </div>

      </div>

      {/* Marca de agua */}
      <div className="absolute inset-x-0 bottom-0 md:top-0 md:bottom-auto flex justify-center items-end md:items-start pointer-events-none select-none z-0">
        {/* CAMBIO 6: Color gris muy claro para fondo blanco (text-gray-100) */}
        <h1 className="text-[25vw] py-5 leading-none font-display font-black text-gray-200 tracking-tighter">
            CRIV.
        </h1>
      </div>

    </footer>
  );
}