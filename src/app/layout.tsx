import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Lato } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const lato = Lato({
  weight: '900',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Hello Kerri",
  description: "Hello Kerri",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Boldonse&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} ${lato.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
