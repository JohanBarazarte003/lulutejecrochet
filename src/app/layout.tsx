import type { Metadata } from "next";
import { Inter } from 'next/font/google';
import "./globals.css";

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'lulutejecrochet | Zapatos de Bebé Tejidos a Crochet Estilo Converse',
  description: 'Zapatos de bebé únicos y hechos a mano con amor en Venezuela. El regalo perfecto para recién nacidos, estilo Converse, suave y cómodo. ¡Envíos a toda Venezuela!',
  keywords: 'zapatos crochet bebé, converse tejido bebé, lulutejecrochet, regalo recién nacido Venezuela, hecho a mano, calzado bebé, escarpines ganchillo',
  openGraph: {
    title: 'lulutejecrochet | Zapatos de Bebé Tejidos a Crochet Estilo Converse',
    description: 'Zapatos de bebé únicos y hechos a mano con amor en Venezuela. El regalo perfecto para recién nacidos, estilo Converse, suave y cómodo. ¡Envíos a toda Venezuela!',
    url: 'https://www.yourdomain.com', // Placeholder, user will replace
    images: 'https://www.yourdomain.com/og-image.jpg', // Placeholder, user will replace
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@lulutejecrochet', // Placeholder, user will replace
    title: 'lulutejecrochet | Zapatos de Bebé Tejidos a Crochet Estilo Converse',
    description: 'Zapatos de bebé únicos y hechos a mano con amor en Venezuela. El regalo perfecto para recién nacidos, estilo Converse, suave y cómodo. ¡Envíos a toda Venezuela!',
    images: 'https://www.yourdomain.com/twitter-image.jpg', // Placeholder, user will replace
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
