import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 py-4 bg-black/80 backdrop-blur-md border-b border-white/10">
      {/* Logo */}
      <Link href="/">
        <div className="relative w-28 h-10">
          {/* Asegúrate de que tu imagen esté en la carpeta public como logo.png */}
          <Image 
            src="/logo.png" 
            alt="CRIV Logo" 
            fill
            className="object-contain object-left"
          />
        </div>
      </Link>

      {/* Menú Desktop */}
      <div className="hidden md:flex gap-8 items-center">
        <Link href="#servicios" className="text-sm font-body uppercase tracking-widest text-gray-400 hover:text-white transition-colors">
          Servicios
        </Link>
        <Link href="#proyectos" className="text-sm font-body uppercase tracking-widest text-gray-400 hover:text-white transition-colors">
          Proyectos
        </Link>
        
        {/* Botón CTA */}
        <Link 
          href="#contacto" 
          className="px-6 py-2 bg-white text-black font-bold font-body rounded-full hover:bg-criv-blue hover:text-white transition-all duration-300"
        >
          HABLEMOS
        </Link>
      </div>
    </nav>
  );
}