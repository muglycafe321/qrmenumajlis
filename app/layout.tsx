import type { Metadata } from "next";
import { Cormorant_Garamond, Nunito } from 'next/font/google';
import "./globals.css";

const cormorant = Cormorant_Garamond({
  weight: ['400', '600', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-cormorant',
});

const nunito = Nunito({
  weight: ['300', '400', '600', '700'],
  subsets: ['latin'],
  variable: '--font-nunito',
});

export const metadata: Metadata = {
  title: "Majlis Restaurant - Authentic Flavours, Royal Experience",
  description: "Every Meal Tells a Story. Experience royal Arabic cuisine at Majlis Restaurant in Kuthuparamba, Kannur.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${nunito.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
