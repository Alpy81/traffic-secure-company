import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import CookieBanner from "../components/CookieBanner/CookieBanner";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "SperrZone24 – Verkehrssicherung Frankfurt",
    template: "%s | Sperrzone24",
  },
  description:
    "Professionelle Verkehrssicherung in Frankfurt und Umgebung. Halteverbotszone, Absperrung, Streckensperrung und mehr – 24/7 für Sie im Einsatz.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    locale: "de_DE",
    siteName: "Sperrzone24",
    title: "Sperrzone24 – Verkehrssicherung Frankfurt",
    description:
      "Professionelle Verkehrssicherung in Frankfurt und Umgebung – Halteverbotszonen, Baustellenabsicherung, Straßensperrungen. 24/7 erreichbar.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Sperrzone24 – Verkehrssicherung Frankfurt",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sperrzone24 – Verkehrssicherung Frankfurt",
    description:
      "Professionelle Verkehrssicherung in Frankfurt und Umgebung – 24/7 erreichbar.",
    images: ["/og-image.jpg"],
  },
  metadataBase: new URL("https://sperrzone24.de"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={inter.variable} data-scroll-behavior="smooth">
      <body>
        <Navbar />
        {children}
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
