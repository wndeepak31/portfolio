import "./globals.css";

export const metadata = {
  metadataBase: new URL('https://www.apextechplus.com'),
  title: "ApexTech+ - Portfolio",
  description: "Full-Stack Web Developer Portfolio",
};

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ConditionalCTA from "../components/ConditionalCTA";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <Navbar />
        {children}
        <ConditionalCTA />
        <Footer />
      </body>
    </html>
  );
}
