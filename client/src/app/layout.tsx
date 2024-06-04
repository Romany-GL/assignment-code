import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import styles from './page.module.css';
import MainNav from '../components/mainNav/MainNav';
import MainFooter from '@/components/mainfooter/MainFooter';
import Head from 'next/head';

import { CartProvider } from '@/contexts/CartContext';

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
      <Head>
        <link
          rel='stylesheet'
          type='text/css'
          href='https://static.octopuscdn.com/fonts/Gotham/fonts.min.css'
        />
        <link
          rel='icon'
          type='image/png'
          href='https://static.octopuscdn.com/favicons/favicon-32x32.png'
          sizes='32x32'
        ></link>
      </Head>
      <body className={inter.className}>
        <CartProvider>
          <MainNav />
          {children}
          <MainFooter />
        </CartProvider>
      </body>
    </html>
  );
}
