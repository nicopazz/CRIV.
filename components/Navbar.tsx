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
      <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 py-4 bg-black/80 backdrop-blur-md border-b border-white/10">
        {/* Logo */}
        <Link href="/" className="relative w-24 h-10 z-50">
          <Image 
            src="/logo.png" 
            alt="CRIV Logo" 
            fill
            className="object-contain object-left"
          />
        </Link>
         

        {/* Menú Desktop (Se oculta en móvil) */}
        <div className="hidden md:flex gap-8 items-center">
          <Link href="#servicios" className="text-sm font-body uppercase tracking-widest text-gray-400 hover:text-criv-yellow">
            Servicios
          </Link>
          <Link href="#proyectos" className="text-sm font-body uppercase tracking-widest text-gray-400 hover:text-criv-pink">
            Proyectos
          </Link>
          <Link 
            href="#faq" 
            className="text-sm font-body uppercase tracking-widest text-gray-400 hover:text-criv-mint"
          >
            Preguntas Frecuentes
          </Link>
          <Link 
            href="#contacto" 
            className="text-sm font-body uppercase tracking-widest text-gray-400 hover:text-criv-blue"
          >
            Hablemos
          </Link>
        </div>

        {/* Botón Hamburguesa*/}
        <button onClick={toggleMenu} className="md:hidden z-50 text-white">
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
            className="fixed inset-0 z-40 bg-black flex flex-col items-center justify-center gap-10 md:hidden"
          >
            <Link onClick={toggleMenu} href="#servicios" className="text-3xl font-display font-bold text-white uppercase hover:text-criv-yellow">
              Servicios
            </Link>
            <Link onClick={toggleMenu} href="#proyectos" className="text-3xl font-display font-bold text-white uppercase hover:text-criv-pink">
              Proyectos
            </Link>
             <Link onClick={toggleMenu} href="#faq" className="text-3xl font-display font-bold text-white uppercase hover:text-criv-mint">
              Dudas
            </Link>
            <Link onClick={toggleMenu} href="#contacto" className="text-3xl font-display font-bold text-white uppercase hover:text-criv-blue">
              Hablemos
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}