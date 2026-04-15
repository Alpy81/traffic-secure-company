import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

export const metadata: Metadata = {
  title: "Sperrzone24 – Verkehrssicherung Frankfurt",
  description:
    "Professionelle Verkehrssicherung in Frankfurt und Umgebung. Halteverbotszone, Absperrung, Streckensperrung und mehr – 24/7 für Sie im Einsatz.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
