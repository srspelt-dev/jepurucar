/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configuración para Docker
  output: 'standalone',
  
  env: {
    NEXT_PUBLIC_GOOGLE_PLACES_API_KEY: process.env.NEXT_PUBLIC_GOOGLE_PLACES_API_KEY,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',  // Para las fotos de perfil de Google
      },
      {
        protocol: 'https',
        hostname: 'maps.googleapis.com',         // Para imágenes de Places API
      },
      {
        protocol: 'https',
        hostname: 'cdn.cdnlogo.com',
      },
      {
        protocol: 'https',
        hostname: 'www.tiktok.com',
      },
    ],
  },
  // Optimizaciones para mejorar el rendimiento del filesystem
  experimental: {
    // Optimiza el manejo de archivos estáticos
    optimizePackageImports: ['lucide-react', 'react-icons'],
  },
  // Configuración de Turbopack (requerido en Next.js 16)
  turbopack: {},
  // Configuración de webpack para optimizar el build (solo cuando se use explícitamente con --webpack)
  webpack: (config, { dev, isServer }) => {
    if (dev && !isServer) {
      // Optimizaciones específicas para desarrollo
      config.watchOptions = {
        poll: 1000,
        aggregateTimeout: 300,
        ignored: ['**/node_modules', '**/.git', '**/.next'],
      }
    }
    return config
  },
  // Headers de seguridad adicionales
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains; preload',
          },
        ],
      },
    ]
  },
}

module.exports = nextConfig 