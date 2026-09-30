import "./globals.css";

export const metadata = {
  metadataBase: new URL('https://www.apextechplus.com'),
  title: {
    default: "ApexTech+ | Elite Enterprise Web Architecture Agency",
    template: "%s | ApexTech+"
  },
  description: "We partner with visionary founders and enterprises to build highly scalable Custom SaaS applications, Headless Shopify storefronts, and WebGL interactive experiences.",
  keywords: ["custom software development", "headless ecommerce agency", "Next.js development firm", "SaaS architecture", "WebGL 3D configurators"],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.apextechplus.com",
    siteName: "ApexTech+",
    title: "ApexTech+ | Elite Enterprise Web Architecture",
    description: "Enterprise-grade React, Next.js, and Node.js development.",
  },
  twitter: {
    card: "summary_large_image",
    title: "ApexTech+ | Elite Web Architecture",
    description: "Enterprise custom SaaS and headless ecommerce development.",
  }
};

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ConditionalCTA from "../components/ConditionalCTA";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
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
        {children}
        <ConditionalCTA />
        <Footer />
      </body>
    </html>
  );
}
