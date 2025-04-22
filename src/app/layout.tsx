import type { Metadata } from "next";
import { Geist, Geist_Mono,Montserrat } from "next/font/google";

import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "YTPR",
  description: "YTPR",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${montserrat.variable}`}>
      <head>
        <link rel="icon" type="image/x-icon" href="/Logo.png" />
      </head>
      <body
        className={`${montserrat.variable} antialiased bg-gray-800`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
