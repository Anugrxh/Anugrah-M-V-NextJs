import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import ColorBends from "@/components/ColorBends";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Anugrah M V | Full Stack Engineer",
  description: "Portfolio of Anugrah M V - Full Stack Developer & AI Enthusiast specializing in modern web applications, AI-powered solutions, and scalable systems.",
  keywords: ["Full Stack Developer", "AI Engineer", "React", "Next.js", "TypeScript", "Portfolio"],
  authors: [{ name: "Anugrah M V" }],
  creator: "Anugrah M V",
  publisher: "Anugrah M V",
  metadataBase: new URL('https://your-domain.com'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://your-domain.com',
    title: 'Anugrah M V | Full Stack Engineer',
    description: 'Portfolio of Anugrah M V - Full Stack Developer & AI Enthusiast specializing in modern web applications, AI-powered solutions, and scalable systems.',
    siteName: 'Anugrah M V Portfolio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Anugrah M V - Full Stack Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Anugrah M V | Full Stack Engineer',
    description: 'Portfolio of Anugrah M V - Full Stack Developer & AI Enthusiast',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen relative`}
        suppressHydrationWarning
      >
        <div className="fixed inset-0 z-0 bg-black">
          <ColorBends
            colors={["#ff5c7a", "#8a5cff", "#00ffd1"]}
            rotation={30}
            speed={0.3}
            scale={1.2}
            frequency={1.4}
            warpStrength={1.2}
            mouseInfluence={0.8}
            parallax={0.6}
            noise={0.08}
            transparent
            className="w-full h-full"
          />
        </div>
        <div className="relative z-10">
          <Navbar />
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
