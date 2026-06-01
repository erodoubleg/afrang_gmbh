import type { Metadata, Viewport } from 'next'
import { Inter_Tight } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const interTight = Inter_Tight({
  subsets: ['latin'],
  variable: '--font-inter-tight',
  weight: ['400', '500', '600'],
})

export const metadata: Metadata = {
  title: 'Ankauf von LKWs & Baumaschinen | Afrang GmbH Bad Homburg',
  description:
    'Afrang GmbH kauft LKWs, Baumaschinen und Nutzfahrzeuge fair und unkompliziert an. Seriöser Ankauf aus Bad Homburg – schnelle Bewertung, transparente Abwicklung.',
  keywords:
    'LKW Ankauf, Baumaschinen Ankauf, Nutzfahrzeuge verkaufen, Afrang GmbH, Bad Homburg, Fahrzeugankauf',
  icons: {
    icon: '/icon.svg',
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#050505',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="de" className="bg-background">
      <body className={`${interTight.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
