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
  weight: ["400"],
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Deine Steuern",
  description: "Dein Steuerkanzlei in Salzgitter-Bad",
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
