import "./globals.css";

export const metadata = {
  title: "Apex Tech - Portfolio",
  description: "Full-Stack Web Developer Portfolio",
};

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CTA from "../components/CTA";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <CTA />
        <Footer />
      </body>
    </html>
  );
}
