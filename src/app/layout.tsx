import type { Metadata } from "next";
import { Inter, Nunito, Roboto, Poppins } from "next/font/google";
import "@/styles/globals.css";
import MainLayout from '@/components/layouts/MainLayout';

const interSans = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin"],
});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  weight: ["400"],
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["400", "700"],
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: {
    default: "Steuerberater in Salzgitter | Deine Steuern – Steuerkanzlei & Lohnbuchhaltung",
    template: "%s | Deine Steuern – Steuerkanzlei & Lohnbuchhaltung"
  },
  description: "Ihr Steuerberater in Salzgitter: Professionelle Steuerberatung, Lohnbuchhaltung und Finanzbuchhaltung für Unternehmen und Privatpersonen. Persönlich, digital und zuverlässig.",
  keywords: [
    "Steuerberater Salzgitter", "Steuerkanzlei Salzgitter", "Steuerbüro Salzgitter",
    "Lohnbuchhaltung Salzgitter", "Finanzbuchhaltung Salzgitter",
    "Steuerberatung Salzgitter", "Steuererklärung Hilfe Salzgitter",
    "Unternehmensberatung Steuern Salzgitter",
    "Buchhaltung Service Salzgitter", "Steueroptimierung Salzgitter",
    "Steuerberater Niedersachsen", "Lohnabrechnung Salzgitter",
    "Gehaltsabrechnung Salzgitter", "Jahresabschluss Salzgitter",
    "digitale Steuerkanzlei Salzgitter", "Steuerberatung Unternehmen Salzgitter",
    "Steuerberatung Selbstständige Salzgitter", "Dilovan Abdo"
  ],
  robots: "index, follow",
  openGraph: {
    title: "Steuerberater Salzgitter | Deine Steuern",
    description: "Steuerberatung, Buchhaltung & Lohnservice in Salzgitter für Unternehmen und Privatpersonen.",
    type: "website",
    url: "https://www.deinesteuern.com",
    siteName: "Deine Steuern",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body
        className={`${interSans.variable} ${nunito.variable} ${roboto.variable} ${poppins.variable} antialiased`}
      >
        <MainLayout>
          {children}
        </MainLayout>
      </body>
    </html>
  );
}
