import './globals.css';
import type { Metadata } from 'next';
import { lato } from './fonts';

export const metadata: Metadata = {
  title: "Hello, Kerri",
  description: "A personal site",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={lato.variable}>
      <body className={`${lato.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
