import { ReactNode } from "react";

import "./globals.css";

import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "Consulting Firm Template",
  description:
    "Polished website template tailored for consulting firms, financial advisors, and business strategists.",
};

import Header from "@/components/Header";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="bg-white text-black antialiased">
      <head>
        <style>
          {`
            :root {
              --font-inter: ${inter.style.fontFamily};
            }
          `}
        </style>
      </head>
      <body
        className={`${inter.variable} font-sans min-h-screen flex flex-col bg-white text-black`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
