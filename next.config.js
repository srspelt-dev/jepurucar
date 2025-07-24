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
      'www.tiktok.com',
      'res.cloudinary.com'           // Para imágenes optimizadas de Cloudinary
    ],
  },
  // Optimizaciones para mejorar el rendimiento del filesystem
  experimental: {
    // Optimiza el manejo de archivos estáticos
    optimizePackageImports: ['lucide-react', 'react-icons'],
    // Mejora el rendimiento de la compilación
    turbo: {
      rules: {
        '*.svg': {
          loaders: ['@svgr/webpack'],
          as: '*.js',
        },
      },
    },
  },
  // Configuración de webpack para optimizar el build
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