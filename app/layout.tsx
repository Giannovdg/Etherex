import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Footerdemo } from "@/components/ui/footer-section";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Etherex - Digital Excellence Across Every Discipline",
  description: "Transform your digital presence with our cutting-edge web development, app development, graphic design, and social media management services.",
  keywords: "web development, app development, graphic design, social media management, digital services",
  authors: [{ name: "Etherex Team" }],
  robots: "index, follow",
  openGraph: {
    title: "Etherex - Digital Excellence",
    description: "Transform your digital presence with our cutting-edge services",
    type: "website",
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preload" href="/modern-web-development-coding-screen-dark-theme.jpg" as="image" type="image/jpeg" />
        <link rel="preload" href="/mobile-app-development-smartphone-interface-dark.jpg" as="image" type="image/jpeg" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Footerdemo />
      </body>
    </html>
  );
}
