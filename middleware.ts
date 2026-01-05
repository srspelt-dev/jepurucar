import { NextRequest, NextResponse } from 'next/server'

// Rate limiting simple en memoria (para producción, considera usar Redis)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>()

// Configuración de rate limiting
const RATE_LIMIT_WINDOW = 60 * 1000 // 1 minuto
const RATE_LIMIT_MAX_REQUESTS = 100 // Máximo de requests por minuto por IP
const RATE_LIMIT_API_MAX = 20 // Máximo de requests por minuto para APIs

// Limpiar entradas antiguas cada 5 minutos
setInterval(() => {
  const now = Date.now()
  for (const [key, value] of rateLimitMap.entries()) {
    if (value.resetTime < now) {
      rateLimitMap.delete(key)
    }
  }
}, 5 * 60 * 1000)

function getRateLimitKey(request: NextRequest): string {
  // Usar IP del cliente o X-Forwarded-For si está detrás de un proxy
  const forwarded = request.headers.get('x-forwarded-for')
  const ip = forwarded ? forwarded.split(',')[0].trim() : 
             request.headers.get('x-real-ip') || 
             'unknown'
  return ip
}

function checkRateLimit(key: string, maxRequests: number): boolean {
  const now = Date.now()
  const record = rateLimitMap.get(key)

  if (!record || record.resetTime < now) {
    // Nueva ventana de tiempo
    rateLimitMap.set(key, {
      count: 1,
      resetTime: now + RATE_LIMIT_WINDOW
    })
    return true
  }

  if (record.count >= maxRequests) {
    return false // Rate limit excedido
  }

  record.count++
  return true
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  const rateLimitKey = getRateLimitKey(request)

  // Rate limiting más estricto para APIs
  if (pathname.startsWith('/api/')) {
    if (!checkRateLimit(rateLimitKey, RATE_LIMIT_API_MAX)) {
      return NextResponse.json(
        { error: 'Demasiadas solicitudes. Por favor, intenta más tarde.' },
        { 
          status: 429,
          headers: {
            'Retry-After': '60',
            'X-RateLimit-Limit': String(RATE_LIMIT_API_MAX),
            'X-RateLimit-Remaining': '0',
          }
        }
      )
    }
  } else {
    // Rate limiting general para otras rutas
    if (!checkRateLimit(rateLimitKey, RATE_LIMIT_MAX_REQUESTS)) {
      return NextResponse.json(
        { error: 'Demasiadas solicitudes. Por favor, intenta más tarde.' },
        { 
          status: 429,
          headers: {
            'Retry-After': '60',
            'X-RateLimit-Limit': String(RATE_LIMIT_MAX_REQUESTS),
            'X-RateLimit-Remaining': '0',
          }
        }
      )
    }
  }

  // Headers de seguridad
  const response = NextResponse.next()
  
  // Security headers
  response.headers.set('X-Content-Type-Options', 'nosniff')
  response.headers.set('X-Frame-Options', 'DENY')
  response.headers.set('X-XSS-Protection', '1; mode=block')
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin')
  response.headers.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=()')
  
  // Prevenir clickjacking
  response.headers.set('Content-Security-Policy', 
    "default-src 'self'; " +
    "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.tiktok.com https://*.tiktok.com https://pagead2.googlesyndication.com; " +
    "style-src 'self' 'unsafe-inline'; " +
    "img-src 'self' data: https:; " +
    "font-src 'self' data:; " +
    "connect-src 'self' https://maps.googleapis.com https://*.googleapis.com; " +
    "frame-src 'self' https://www.tiktok.com https://*.tiktok.com;"
  )

  // Rate limit headers informativos
  const record = rateLimitMap.get(rateLimitKey)
  if (record) {
    const remaining = pathname.startsWith('/api/') 
      ? Math.max(0, RATE_LIMIT_API_MAX - record.count)
      : Math.max(0, RATE_LIMIT_MAX_REQUESTS - record.count)
    
    response.headers.set('X-RateLimit-Limit', 
      pathname.startsWith('/api/') ? String(RATE_LIMIT_API_MAX) : String(RATE_LIMIT_MAX_REQUESTS)
    )
    response.headers.set('X-RateLimit-Remaining', String(remaining))
    response.headers.set('X-RateLimit-Reset', String(Math.ceil(record.resetTime / 1000)))
  }

  return response
}

// Configurar qué rutas deben pasar por el middleware
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public files (public folder)
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
}

