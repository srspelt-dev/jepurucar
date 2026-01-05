import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Header } from './components/header'
import { Footer } from './components/footer'
import { WhatsAppButton } from './components/whatsapp-button'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://www.jepurucar.com.py'),
  title: 'Jepuru Car - Alquiler de Vehículos en Paraguay | Rent a Car',
  description: 'Alquiler de vehículos en Paraguay. Servicio de rent a car con la mejor flota de autos, SUVs y vans. Precios competitivos y atención personalizada en Asunción.',
  keywords: 'alquiler de autos paraguay, rent a car paraguay, alquiler de vehículos asunción, jepuru car, alquiler de coches paraguay, rental car asunción, alquiler de SUV paraguay, alquiler de van paraguay',
  openGraph: {
    title: 'Jepuru Car - Alquiler de Vehículos en Paraguay',
    description: 'La mejor opción en alquiler de vehículos en Paraguay. Flota moderna y servicio personalizado.',
    images: ['/images/jepurucar.png'],
    locale: 'es_PY',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.jepurucar.com.py'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'tu-código-de-verificación-de-google',
  },
  icons: {
    icon: '/images/jepurucar.png',
    apple: '/images/jepurucar.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <head>
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2295007712395032"
          crossOrigin="anonymous"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "CarRental",
              "name": "Jepuru Car",
              "image": "https://www.jepurucar.com.py/images/jepurucar.png",
              "description": "Servicio de alquiler de vehículos en Paraguay",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Calle 18 de Julio",
                "addressLocality": "Asunción",
                "addressCountry": "PY"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "-25.324583775414606",
                "longitude": "-57.62834331691925"
              },
              "priceRange": "$$",
              "telephone": "+595961590627"
            })
          }}
        />
      </head>
      <body className={`${inter.className} bg-white text-gray-800`}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}

