import { Geist, Geist_Mono } from 'next/font/google';
import { Lato } from 'next/font/google';
import './globals.css';
import type { Metadata } from 'next';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const lato = Lato({ 
  weight: ['400', '700', '900'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Tim Kerri",
  description: "Personal website of Tim Kerri",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Boldonse&display=swap"
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} ${lato.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
