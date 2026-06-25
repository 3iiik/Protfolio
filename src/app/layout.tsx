import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { LanguageProvider } from "@/context/LanguageContext";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "3iik Studio | Web Design & Development — Modern Websites for Algerian Businesses",
  description:
    "Professional web design and development for Algerian businesses. Fast, modern, mobile-friendly websites that build trust and attract customers.",
  keywords: [
    "web development",
    "web design Algeria",
    "Algeria",
    "business websites",
    "freelance web developer",
    "3iik Studio",
    "website designer Algeria",
    "création site web Algérie",
    "développeur web Algérie",
  ],
  alternates: {
    languages: {
      fr: "/",
      en: "/",
    },
  },
  openGraph: {
    title: "3iik Studio | Web Design & Development",
    description:
      "Modern websites for Algerian businesses. Professional web design and development services.",
    type: "website",
    locale: "fr_DZ",
    siteName: "3iik Studio",
  },
  twitter: {
    card: "summary_large_image",
    title: "3iik Studio | Web Design & Development",
    description:
      "Modern websites for Algerian businesses. Professional web design and development services.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <head>
        <link rel="alternate" hrefLang="fr" href="/" />
        <link rel="alternate" hrefLang="en" href="/" />
        <link rel="alternate" hrefLang="x-default" href="/" />
      </head>
      <body className="min-h-screen bg-background text-foreground">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
