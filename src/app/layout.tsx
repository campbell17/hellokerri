import './globals.css';
import { Lato, Cormorant_Garamond } from 'next/font/google';

const lato = Lato({
  weight: ['400', '700', '900'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lato',
});

const cormorantGaramond = Cormorant_Garamond({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-cormorant',
});

export const metadata = {
  title: 'Hello Kerri',
  description: "Let's embark on a quest...",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${lato.className} ${cormorantGaramond.variable}`}>{children}</body>
    </html>
  );
}
