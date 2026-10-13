import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-outfit",
});

export const metadata = {
  metadataBase: new URL('https://www.apextechplus.com'),
  title: {
    default: "ApexTech+ | Elite Enterprise Web Architecture Agency",
    template: "%s"
  },
  description: "Partner with ApexTech+ for enterprise web architecture solutions that prioritize scalability, performance, security, and reliable digital infrastructure.",
  keywords: [
    "enterprise web architecture",
    "custom software development",
    "headless shopify agency",
    "Next.js development firm",
    "SaaS architecture",
    "WebGL 3D configurators",
    "cloud migration services",
    "AI automation"
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.apextechplus.com",
    siteName: "ApexTech+",
    title: "ApexTech+ | Elite Enterprise Web Architecture Agency",
    description: "Partner with ApexTech+ for enterprise web architecture solutions that prioritize scalability, performance, security, and reliable digital infrastructure.",
  },
  twitter: {
    card: "summary_large_image",
    title: "ApexTech+ | Elite Enterprise Web Architecture Agency",
    description: "Partner with ApexTech+ for enterprise web architecture solutions that prioritize scalability, performance, security, and reliable digital infrastructure.",
  }
};

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ConditionalCTA from "../components/ConditionalCTA";

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "ApexTech+",
              "url": "https://www.apextechplus.com",
              "description": "An elite enterprise web architecture and custom SaaS development agency. We build high-performance React, Next.js, and headless Shopify applications.",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+91-8693864378",
                "contactType": "technical support",
                "availableLanguage": "English"
              }
            })
          }}
        />
      </head>
      <body suppressHydrationWarning>
        <Navbar />
        <main id="main-content">
          {children}
        </main>
        <ConditionalCTA />
        <Footer />
      </body>
    </html>
  );
}
