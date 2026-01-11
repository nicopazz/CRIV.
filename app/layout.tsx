import type { Metadata } from "next";
import { Syne, Manrope } from "next/font/google";
import "./globals.css";
import WhatsAppButton from "@/components/WhatsAppButton";

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
  title: "CRIV | Impacto Digital Real",
  description:
    "Agencia de diseño web, branding y estrategia digital. Transformamos marcas con tecnología y creatividad de alto nivel.",
  keywords: [
    "Agencia Marketing",
    "Diseño Web",
    "Branding",
    "Desarrollo Web",
    "Argentina",
    "Growth Partner",
  ],
  icons: {
    icon: "/criv-criv.png",
    apple: "/criv-criv.png",
  },

  openGraph: {
    title: "CRIV | Impacto Digital Real",
    description: "Transformamos marcas con estrategia, diseño y tecnología.",
    url: "https://criv.vercel.app/",
    siteName: "CRIV Agency",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "CRIV Agency Cover",
      },
    ],
    locale: "es_AR",
    type: "website",
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${syne.variable} ${manrope.variable} bg-dark text-white antialiased`}
      >
        {children}

        <WhatsAppButton />
       
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MarketingAgency", 
              name: "CRIV Agency",
              image: "https://criv.vercel.app/_next/image?url=%2Flogo.png&w=1920&q=75", 
              url: "https://criv.vercel.app/",
              telephone: "+5493816382279",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Tucumán",
                addressCountry: "AR",
              },
              priceRange: "$$$",
              description:
                "Agencia de diseño web y marketing digital enfocada en crecimiento y branding.",
            }),
          }}
        />
      </body>
    </html>
  );
}
