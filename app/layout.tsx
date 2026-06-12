import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Inter } from "next/font/google";
import { GoogleAnalytics } from "@/components/GoogleAnalytics";
import { JsonLd } from "@/components/JsonLd";
import { siteConfig } from "@/config/site";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter"
});

export const metadata: Metadata = {
  title: "OpenNovaIA | Agentes de IA para Automatizar Empresas 24/7",
  description:
    "Automatizamos ventas, atención al cliente y procesos empresariales mediante agentes de inteligencia artificial disponibles 24/7.",
  keywords: [
    "agentes de IA",
    "automatización empresarial",
    "chatbots IA",
    "inteligencia artificial para empresas",
    "automatización WhatsApp",
    "asistentes virtuales IA",
    "IA para negocios",
    "OpenNovaIA"
  ],
  creator: "OpenNovaIA",
  publisher: "OpenNovaIA",
  metadataBase: new URL("https://opennovaia.com"),
  alternates: {
    canonical: "https://opennovaia.com"
  },
  robots: {
    index: true,
    follow: true
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png"
  },
  openGraph: {
    title: "OpenNovaIA | Agentes de IA para Automatizar Empresas 24/7",
    description:
      "Automatizamos ventas, atención al cliente y procesos empresariales mediante agentes de inteligencia artificial disponibles 24/7.",
    url: "https://opennovaia.com",
    siteName: siteConfig.siteName,
    images: [
      {
        url: "/logo.svg",
        width: 240,
        height: 160,
        alt: "OpenNovaIA Logo"
      }
    ],
    locale: "es_ES",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "OpenNovaIA | Agentes de IA para Automatizar Empresas 24/7",
    description:
      "Automatizamos ventas, atención al cliente y procesos empresariales mediante agentes de inteligencia artificial disponibles 24/7.",
    images: ["/logo.svg"]
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={inter.variable}>
        <GoogleAnalytics />
        <JsonLd />
        {children}
      </body>
    </html>
  );
}
