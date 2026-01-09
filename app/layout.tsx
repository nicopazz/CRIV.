import type { Metadata } from "next";
import { Syne, Manrope } from "next/font/google";
import "./globals.css";

const syne = Syne({ 
  subsets: ["latin"], 
  variable: "--font-syne",
  display: "swap",
});

const manrope = Manrope({ 
  subsets: ["latin"], 
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: "CRIV. | Agencia de Impacto Digital",
  description: "Diseño Web, Branding y Estrategia para marcas que desafían lo convencional.",
  keywords: ["Agencia Marketing", "Diseño Web", "Branding", "Next.js"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${syne.variable} ${manrope.variable} bg-dark text-white antialiased`}>
        {children}
      </body>
    </html>
  );
}