/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_PUBLIC_GOOGLE_PLACES_API_KEY: process.env.NEXT_PUBLIC_GOOGLE_PLACES_API_KEY,
  },
  images: {
    domains: [
      'lh3.googleusercontent.com',  // Para las fotos de perfil de Google
      'maps.googleapis.com',         // Para imágenes de Places API
      'cdn.cdnlogo.com'
    ],
  }
}

module.exports = nextConfig 