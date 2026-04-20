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
  metadataBase: new URL('https://www.deinesteuern.com'),
  title: {
    default: "Steuerberater in Salzgitter | Deine Steuern – Steuerkanzlei & Lohnbuchhaltung",
    template: "%s | Deine Steuern"
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
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: 'https://www.deinesteuern.com',
  },
  openGraph: {
    title: "Steuerberater Salzgitter | Deine Steuern",
    description: "Steuerberatung, Buchhaltung & Lohnservice in Salzgitter für Unternehmen und Privatpersonen.",
    type: "website",
    url: "https://www.deinesteuern.com",
    siteName: "Deine Steuern",
    locale: "de_DE",
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'AccountingService',
  name: 'Deine Steuern',
  description: 'Steuerberatung, Lohnbuchhaltung und Finanzbuchhaltung in Salzgitter für Unternehmen und Privatpersonen.',
  url: 'https://www.deinesteuern.com',
  telephone: '+491556515 4140',
  email: 'dilovanabdo.steuer@gmail.com',
  founder: {
    '@type': 'Person',
    name: 'Dilovan Abdo',
  },
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Braunschweiger Str. 169',
    addressLocality: 'Salzgitter',
    postalCode: '38259',
    addressCountry: 'DE',
  },
  areaServed: [
    { '@type': 'City', name: 'Salzgitter' },
    { '@type': 'City', name: 'Hannover' },
    { '@type': 'City', name: 'Wolfsburg' },
    { '@type': 'City', name: 'Braunschweig' },
    { '@type': 'City', name: 'Magdeburg' },
    { '@type': 'City', name: 'Halberstadt' },
    { '@type': 'City', name: 'Wernigerode' },
    { '@type': 'City', name: 'Goslar' },
    { '@type': 'City', name: 'Einbeck' },
    { '@type': 'City', name: 'Bad Pyrmont' },
    { '@type': 'City', name: 'Hildesheim' },
    { '@type': 'City', name: 'Salzgitter-Bad' },
  ],
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '17:00',
    },
  ],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <MainLayout>
          {children}
        </MainLayout>
      </body>
    </html>
  );
}