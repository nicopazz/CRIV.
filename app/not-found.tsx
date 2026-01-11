"use client";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function NotFound() {
  return (
    <div className="h-screen w-full bg-dark flex flex-col items-center justify-center text-white px-4 text-center relative overflow-hidden">
      
      {/* Fondo decorativo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-criv-blue/20 rounded-full blur-[120px] pointer-events-none" />

      <h1 className="text-[10rem] md:text-[15rem] font-display font-black leading-none text-transparent bg-clip-text bg-gradient-to-b from-white/20 to-transparent select-none">
        404
      </h1>
      
      <h2 className="text-2xl md:text-4xl font-bold mb-6 font-display uppercase">
        Te perdiste en el <span className="text-criv-yellow">espacio</span>
      </h2>
      
      <p className="text-gray-400 font-body max-w-md mb-10 text-lg">
        La página que buscas no existe o fue movida a otra dimensión.
      </p>

      <Link 
        href="/" 
        className="px-8 py-4 bg-white text-black rounded-full font-bold uppercase tracking-widest hover:bg-criv-yellow transition-colors flex items-center gap-2"
      >
        Volver a Casa
        <ArrowUpRight className="w-5 h-5" />
      </Link>
    </div>
  );
}