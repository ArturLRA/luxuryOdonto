import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Luxury Odonto | Odontologia Estética e Implantes no Estreito — Florianópolis",
  description:
    "Clínica odontológica Luxury no Estreito, Florianópolis. Implantes, lentes de contato dental (Natural Lux®), Invisalign, clareamento e harmonização orofacial. Estacionamento gratuito. Atendimento bilíngue. Agende sua avaliação.",
  keywords: [
    "dentista florianópolis",
    "dentista estreito",
    "implante dentário florianópolis",
    "lentes de contato dental",
    "natural lux",
    "invisalign florianópolis",
    "clareamento dental",
    "odontologia estética",
    "harmonização orofacial",
    "odontologia humanizada",
  ],
  authors: [{ name: "Luxury Odonto" }],
  creator: "Luxury Odonto",
  publisher: "Luxury Odonto",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Luxury Odonto | Odontologia Estética e Implantes no Estreito",
    description:
      "Especialistas em transformar vidas através de sorrisos. Odontologia humanizada e tecnológica no coração do Estreito, Florianópolis/SC.",
    url: "https://odontoluxury.com.br",
    siteName: "Luxury Odonto",
    type: "website",
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Luxury Odonto | Odontologia Estética e Implantes",
    description:
      "Especialistas em transformar vidas através de sorrisos. Estreito, Florianópolis/SC.",
  },
  alternates: {
    canonical: "https://odontoluxury.com.br",
    languages: {
      "pt-BR": "/",
      "en": "/en/",
    },
  },
  other: {
    "theme-color": "#0c5e6b",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${playfair.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
