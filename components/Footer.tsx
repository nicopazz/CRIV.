"use client";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
        <div className="flex flex-col items-center md:items-start gap-4">
          <div className="relative w-24 h-10 opacity-80">
            <Image src="/logo.png" alt="CRIV" fill className="object-contain object-left" />
          </div>
          <p className="text-gray-500 text-sm font-body">© 2024 CRIV Agency.</p>
        </div>
        <div className="flex gap-6 text-gray-400 font-body text-sm uppercase tracking-widest">
            <a href="#" className="hover:text-criv-yellow transition-colors">Instagram</a>
            <a href="#" className="hover:text-criv-yellow transition-colors">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}