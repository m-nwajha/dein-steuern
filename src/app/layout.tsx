import type { Metadata } from "next";
import { Inter, Nunito } from "next/font/google";
import "@/styles/globals.css";
import MainLayout from '@/components/layouts/MainLayout';

const interSans = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin"],
});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
})


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
        className={`${interSans.variable} ${nunito.variable} antialiased`}
      >
        <MainLayout>
          {children}
        </MainLayout>
      </body>
    </html>
  );
}
