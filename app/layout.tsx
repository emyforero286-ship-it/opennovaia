import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Inter } from "next/font/google";
import { siteConfig } from "@/config/site";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter"
});

export const metadata: Metadata = {
  title: "OpenNovaIA | Agentes de IA que automatizan ventas, soporte y operaciones",
  description:
    "Implementa agentes de IA con identidad neural para vender mas, responder 24/7 y automatizar procesos empresariales sin aumentar tu equipo.",
  metadataBase: new URL(`https://${siteConfig.domain}`),
  icons: {
    icon: "/icon.svg"
  },
  openGraph: {
    title: "OpenNovaIA | Neural AI Agents",
    description:
      "Agentes de IA para empresas que buscan mas ventas, atencion 24/7, eficiencia operativa y automatizacion premium.",
    url: `https://${siteConfig.domain}`,
    siteName: siteConfig.siteName,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "OpenNovaIA neural infinity logo"
      }
    ],
    locale: "es_ES",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "OpenNovaIA | Neural AI Agents",
    description:
      "Automatiza ventas, soporte y operaciones con agentes de IA conectados a tu negocio.",
    images: ["/opengraph-image"]
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={inter.variable}>{children}</body>
    </html>
  );
}
