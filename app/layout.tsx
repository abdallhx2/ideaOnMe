import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Portfolio | Creative Developer',
  description: 'Personal portfolio website showcasing creative development work and services',
  keywords: 'portfolio, developer, web development, react, nextjs',
  authors: [{ name: 'Your Name' }],
  openGraph: {
    title: 'Portfolio | Creative Developer',
    description: 'Personal portfolio website showcasing creative development work and services',
    url: 'https://your-domain.com',
    siteName: 'Portfolio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Portfolio Preview',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <main className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
          {children}
        </main>
      </body>
    </html>
  );
}