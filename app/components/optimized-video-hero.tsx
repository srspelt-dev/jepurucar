'use client'

import { useEffect, useRef, useState } from 'react'
import { Play, Pause, Volume2, VolumeX } from 'lucide-react'

export function OptimizedVideoHero() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(true)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)

  // URLs optimizadas de Cloudinary para diferentes resoluciones
  const videoSources = {
    hd: 'https://res.cloudinary.com/doblti2c5/video/upload/c_scale,h_720,q_auto,w_1280/v1753361556/jepuru/videos/jepuru.mp4',
    sd: 'https://res.cloudinary.com/doblti2c5/video/upload/c_scale,h_480,q_auto,w_854/v1753361556/jepuru/videos/jepuru.mp4',
    fallback: '/videos/jepuru.mp4'
  }

  // Poster optimizado
  const posterUrl = 'https://res.cloudinary.com/doblti2c5/video/upload/c_scale,h_720,q_auto,w_1280/v1753361556/jepuru/videos/jepuru'

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const handleTimeUpdate = () => setCurrentTime(video.currentTime)
    const handleLoadedMetadata = () => setDuration(video.duration)
    const handlePlay = () => setIsPlaying(true)
    const handlePause = () => setIsPlaying(false)

    video.addEventListener('timeupdate', handleTimeUpdate)
    video.addEventListener('loadedmetadata', handleLoadedMetadata)
    video.addEventListener('play', handlePlay)
    video.addEventListener('pause', handlePause)

    return () => {
      video.removeEventListener('timeupdate', handleTimeUpdate)
      video.removeEventListener('loadedmetadata', handleLoadedMetadata)
      video.removeEventListener('play', handlePlay)
      video.removeEventListener('pause', handlePause)
    }
  }, [])

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.3
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

    return () => observer.disconnect()
  }, [])

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
    }
  }

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes}:${seconds.toString().padStart(2, '0')}`
  }

  return (
    <div className="relative w-full h-full flex items-center justify-center group">
      {/* Video principal */}
      <video
        ref={videoRef}
        className="w-full h-full rounded-xl shadow-lg object-cover"
        autoPlay
        muted={isMuted}
        loop
        playsInline
        poster={posterUrl}
      >
        <source src={videoSources.hd} type="video/mp4" />
        <source src={videoSources.sd} type="video/mp4" />
        <source src={videoSources.fallback} type="video/mp4" />
        Tu navegador no soporta el elemento de video.
      </video>

      {/* Overlay de controles */}
      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
        <div className="bg-black/50 backdrop-blur-sm rounded-full p-4">
          <button
            onClick={togglePlay}
            className="text-white hover:text-blue-400 transition-colors"
          >
            {isPlaying ? (
              <Pause className="w-8 h-8" />
            ) : (
              <Play className="w-8 h-8 ml-1" />
            )}
          </button>
        </div>
      </div>

      {/* Controles de volumen */}
      <div className="absolute bottom-4 right-4 bg-black/50 backdrop-blur-sm rounded-full p-2">
        <button
          onClick={toggleMute}
          className="text-white hover:text-blue-400 transition-colors"
        >
          {isMuted ? (
            <VolumeX className="w-5 h-5" />
          ) : (
            <Volume2 className="w-5 h-5" />
          )}
        </button>
      </div>

      {/* Indicador de progreso */}
      {duration > 0 && (
        <div className="absolute bottom-4 left-4 right-20 bg-black/50 backdrop-blur-sm rounded-full p-2">
          <div className="w-full bg-white/30 rounded-full h-1">
            <div 
              className="bg-blue-500 h-1 rounded-full transition-all duration-100"
              style={{ width: `${(currentTime / duration) * 100}%` }}
            />
          </div>
          <div className="text-white text-xs mt-1 text-center">
            {formatTime(currentTime)} / {formatTime(duration)}
          </div>
        </div>
      )}

      {/* Indicador de calidad */}
      <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm rounded-full px-3 py-1">
        <span className="text-white text-xs font-medium">HD</span>
      </div>
    </div>
  )
} 