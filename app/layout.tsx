import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Abercio Cafe — Where Coffee Becomes an Experience',
  description:
    'Exceptional coffee, curated ambiance, and unforgettable moments in the heart of Semarang, Indonesia. Reserve your table today.',
  keywords: [
    'cafe Semarang',
    'coffee Semarang',
    'Abercio Cafe',
    'specialty coffee',
    'luxury cafe Indonesia',
    'cafe premium Semarang',
  ],
  authors: [{ name: 'Abercio' }],
  openGraph: {
    title: 'Abercio Cafe — Where Coffee Becomes an Experience',
    description:
      'Exceptional coffee, curated ambiance, and unforgettable moments in the heart of Semarang.',
    type: 'website',
    locale: 'id_ID',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Abercio Cafe — Where Coffee Becomes an Experience',
    description: 'Exceptional coffee & curated ambiance in the heart of Semarang.',
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className={`${playfair.variable} ${inter.variable}`}>
      <body className="font-inter bg-cafe-black text-cafe-cream antialiased grain">
        {children}
      </body>
    </html>
  )
}
