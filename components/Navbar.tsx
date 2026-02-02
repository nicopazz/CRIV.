"use client"; 
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react"; 
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 py-4 bg-white/80 backdrop-blur-md border-b border-black/10">
        {/* Logo */}
        <Link href="/" className="relative w-24 h-10 z-50">
          <Image 
            src="/logo.png" 
            alt="CRIV Logo" 
            fill
            className="object-contain object-left"
          />
        </Link>
         

        {/* Menú Desktop */}
        <div className="hidden md:flex gap-8 items-center">
          {/* CAMBIO 1: text-gray-400 -> text-gray-600 (Más oscuro para fondo blanco) */}
          <Link href="#servicios" className="text-sm font-body uppercase tracking-widest text-gray-600 hover:text-criv-yellow">
            Servicios
          </Link>
          <Link href="#proyectos" className="text-sm font-body uppercase tracking-widest text-gray-600 hover:text-criv-orange">
            Marcas
          </Link>
          <Link 
            href="#planes" 
            className="text-sm font-body uppercase tracking-widest text-gray-600 hover:text-criv-mint"
          >
            Planes
          </Link>
          <Link 
            href="#faq" 
            className="text-sm font-body uppercase tracking-widest text-gray-600 hover:text-criv-pink"
          >
            Preguntas Frecuentes
          </Link>
          <Link 
            href="#contacto" 
            className="text-sm font-body uppercase tracking-widest text-gray-600 hover:text-criv-blue"
          >
            Hablemos
          </Link>
        </div>

        {/* Botón Hamburguesa */}
        {/* CAMBIO 2: text-white -> text-dark (Para que se vea el icono) */}
        <button onClick={toggleMenu} className="md:hidden z-50 text-dark">
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </nav>

      {/* Menú Móvil Desplegable */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            // CAMBIO 3: bg-black -> bg-white (Fondo blanco en móvil)
            className="fixed inset-0 z-40 bg-white flex flex-col items-center justify-center gap-10 md:hidden"
          >
            {/* CAMBIO 4: text-white -> text-dark (Texto oscuro en móvil) */}
            <Link onClick={toggleMenu} href="#servicios" className="text-3xl font-display font-bold text-dark uppercase hover:text-criv-yellow">
              Servicios
            </Link>
            <Link onClick={toggleMenu} href="#proyectos" className="text-3xl font-display font-bold text-dark uppercase hover:text-criv-orange">
              Proyectos
            </Link>
            <Link onClick={toggleMenu} href="#planes" className="text-3xl font-display font-bold text-dark uppercase hover:text-criv-mint">
              Planes
            </Link>
             <Link onClick={toggleMenu} href="#faq" className="text-3xl font-display font-bold text-dark uppercase hover:text-criv-pink">
              Dudas
            </Link>
            <Link onClick={toggleMenu} href="#contacto" className="text-3xl font-display font-bold text-dark uppercase hover:text-criv-blue">
              Hablemos
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}