import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import MainNav from '../components/mainNav/MainNav';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Octopus',
  description: 'Octopus assignment for frontend developer role',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <MainNav />
        {children}
      </body>
    </html>
  );
}
