'use client'

import { useEffect, useRef, useState } from 'react'

export function SmartVideoHero() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)
  const [videoAspectRatio, setVideoAspectRatio] = useState<number | null>(null)
  const [isMuted, setIsMuted] = useState(true)
  const [showControls, setShowControls] = useState(false)
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && videoRef.current?.paused) {
          videoRef.current?.play().catch(() => {
            console.log('Autoplay prevented')
          })
        } else if (!entry.isIntersecting && !videoRef.current?.paused) {
          videoRef.current?.pause()
        }
      })
    }, options)

    if (videoRef.current) {
      observer.observe(videoRef.current)
    }

    return () => {
      observer.disconnect()
    }
  }, [])

  const handleVideoLoad = () => {
    setIsLoading(false)
    
    // Calcular la proporción real del video
    if (videoRef.current) {
      const { videoWidth, videoHeight } = videoRef.current
      const aspectRatio = videoWidth / videoHeight
      setVideoAspectRatio(aspectRatio)
    }
  }

  const handleVideoError = () => {
    setHasError(true)
    setIsLoading(false)
  }

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  const handleVideoClick = () => {
    setShowControls(!showControls)
    // Ocultar controles después de 3 segundos
    setTimeout(() => setShowControls(false), 3000)
  }

  // Calcular el estilo del contenedor basado en la proporción del video
  const getContainerStyle = () => {
    if (!videoAspectRatio) return { width: '100%', height: '100%' }
    
    // Calcular el tamaño exacto del contenedor basado en las proporciones del video
    const containerAspectRatio = 0.5625 // Proporción del contenedor padre (9:16)
    
    if (videoAspectRatio < containerAspectRatio) {
      // Video más delgado que el contenedor - usar todo el ancho
      return {
        width: '100%',
        height: `${(containerAspectRatio / videoAspectRatio) * 100}%`,
        maxHeight: '100%'
      }
    } else {
      // Video más ancho que el contenedor - usar toda la altura  
      return {
        width: `${(videoAspectRatio / containerAspectRatio) * 100}%`,
        height: '100%',
        maxWidth: '100%'
      }
    }
  }

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Contenedor que se adapta exactamente al video - sin fondo naranja */}
      <div 
        className="relative rounded-xl overflow-hidden transition-all duration-500"
        style={getContainerStyle()}
      >
        {/* Loading overlay */}
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl z-20">
            <div className="text-white text-center">
              <div className="w-8 h-8 border-2 border-white border-t-transparent rounded-full animate-spin mx-auto mb-2"></div>
              <p className="text-sm">Cargando video...</p>
            </div>
          </div>
        )}
        
        {/* Error fallback */}
        {hasError && (
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl z-20">
            <div className="text-white text-center p-6">
              <h3 className="text-xl font-bold mb-2">¡Bienvenido a Jepuru Car!</h3>
              <p className="text-sm opacity-90">La mejor experiencia en alquiler de vehículos</p>
            </div>
          </div>
        )}

        {/* Video que llena exactamente el contenedor */}
        <video
          ref={videoRef}
          className="w-full h-full rounded-xl transition-all duration-300 cursor-pointer"
          autoPlay
          muted={isMuted}
          loop
          playsInline
          onLoadedData={handleVideoLoad}
          onError={handleVideoError}
          onClick={handleVideoClick}
          poster="https://res.cloudinary.com/doblti2c5/video/upload/w_400,q_auto,f_auto/v1753361556/jepuru/videos/jepuru.jpg"
          style={{
            objectFit: 'contain',
            objectPosition: 'center center'
          }}
        >
          {/* Video original con dimensiones proporcionales - mantiene el logo */}
          <source 
            src="https://res.cloudinary.com/doblti2c5/video/upload/w_400,q_auto,f_auto/v1753361556/jepuru/videos/jepuru.mp4" 
            type="video/mp4"
            media="(max-width: 768px)"
          />
          {/* Versión HD para desktop - respeta proporciones originales */}
          <source 
            src="https://res.cloudinary.com/doblti2c5/video/upload/w_600,q_auto,f_auto/v1753361556/jepuru/videos/jepuru.mp4" 
            type="video/mp4"
            media="(min-width: 769px)"
          />
          {/* Fallback local */}
          <source src="/videos/jepuru.mp4" type="video/mp4" />
          Tu navegador no soporta el elemento de video.
        </video>

        {/* Controles de sonido */}
        {showControls && (
          <div className="absolute top-4 right-4 z-30">
            <button
              onClick={toggleMute}
              className="bg-black/50 hover:bg-black/70 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
              aria-label={isMuted ? "Activar sonido" : "Silenciar"}
            >
              {isMuted ? (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"/>
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
                </svg>
              )}
            </button>
          </div>
        )}

        {/* Indicador de clic para activar sonido */}
        {!showControls && (
          <div className="absolute bottom-4 right-4 z-30 opacity-70 hover:opacity-100 transition-opacity">
            <div className="bg-black/30 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">
              {isMuted ? "🔇 Toca para sonido" : "🔊 Con sonido"}
            </div>
          </div>
        )}

        {/* Overlay sutil que no interfiere */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent pointer-events-none rounded-xl"></div>
      </div>
    </div>
  )
} 