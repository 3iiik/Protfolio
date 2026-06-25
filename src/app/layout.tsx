import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
    "Web design and development for Algerian businesses. Fast, professional, mobile-friendly websites that build trust and attract customers.",
  keywords: [
    "web development",
    "Algeria",
    "business websites",
    "freelance web developer",
    "3iik Studio",
    "web design Algeria",
    "website designer Algeria",
  ],
  openGraph: {
    title: "3iik Studio | Web Design & Development",
    description:
      "Modern websites for Algerian businesses. Professional web design and development services.",
    type: "website",
    locale: "en_DZ",
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
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body className="min-h-screen bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
