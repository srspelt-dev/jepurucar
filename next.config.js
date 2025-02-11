/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_PUBLIC_GOOGLE_PLACES_API_KEY: process.env.NEXT_PUBLIC_GOOGLE_PLACES_API_KEY,
  },
  images: {
    domains: [
      'lh3.googleusercontent.com',  // Para las fotos de perfil de Google
      'maps.googleapis.com',         // Para imágenes de Places API
      'cdn.cdnlogo.com',
      'www.tiktok.com'
    ],
  },
  // Agregar configuración de seguridad para TikTok
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.tiktok.com https://*.tiktok.com",
          },
        ],
      },
    ]
  },
}

module.exports = nextConfig 