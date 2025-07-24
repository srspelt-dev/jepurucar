'use client'

import { useEffect, useRef, useState } from 'react'
import { Play, Pause, Volume2, VolumeX, Maximize2, Minimize2 } from 'lucide-react'

export function ImprovedVideoHero() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(true)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)

  // URLs optimizadas de Cloudinary
  const videoSources = {
    hd: 'https://res.cloudinary.com/doblti2c5/video/upload/c_scale,h_720,q_auto,w_1280/v1753361556/jepuru/videos/jepuru.mp4',
    sd: 'https://res.cloudinary.com/doblti2c5/video/upload/c_scale,h_480,q_auto,w_854/v1753361556/jepuru/videos/jepuru.mp4'
  }

  const posterUrl = 'https://res.cloudinary.com/doblti2c5/video/upload/c_scale,h_720,q_auto,w_1280/v1753361556/jepuru/videos/jepuru'

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const handleTimeUpdate = () => setCurrentTime(video.currentTime)
    const handleLoadedMetadata = () => setDuration(video.duration)
    const handlePlay = () => setIsPlaying(true)
    const handlePause = () => setIsPlaying(false)
    const handleFullscreenChange = () => setIsFullscreen(!!document.fullscreenElement)

    video.addEventListener('timeupdate', handleTimeUpdate)
    video.addEventListener('loadedmetadata', handleLoadedMetadata)
    video.addEventListener('play', handlePlay)
    video.addEventListener('pause', handlePause)
    document.addEventListener('fullscreenchange', handleFullscreenChange)

    return () => {
      video.removeEventListener('timeupdate', handleTimeUpdate)
      video.removeEventListener('loadedmetadata', handleLoadedMetadata)
      video.removeEventListener('play', handlePlay)
      video.removeEventListener('pause', handlePause)
      document.removeEventListener('fullscreenchange', handleFullscreenChange)
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

  const toggleFullscreen = () => {
    if (videoRef.current) {
      if (!document.fullscreenElement) {
        videoRef.current.requestFullscreen()
      } else {
        document.exitFullscreen()
      }
    }
  }

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes}:${seconds.toString().padStart(2, '0')}`
  }

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (videoRef.current) {
      const newTime = (parseFloat(e.target.value) / 100) * duration
      videoRef.current.currentTime = newTime
      setCurrentTime(newTime)
    }
  }

  return (
    <div className="relative w-full h-full bg-black rounded-xl overflow-hidden group">
      {/* Video principal con proporciones correctas */}
      <div className="relative w-full h-full flex items-center justify-center">
        <video
          ref={videoRef}
          className="max-w-full max-h-full w-auto h-auto rounded-xl"
          autoPlay
          muted={isMuted}
          loop
          playsInline
          poster={posterUrl}
        >
          <source src={videoSources.hd} type="video/mp4" />
          <source src={videoSources.sd} type="video/mp4" />

          Tu navegador no soporta el elemento de video.
        </video>
      </div>

      {/* Overlay de controles */}
      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
        <div className="bg-black/50 backdrop-blur-sm rounded-full p-4">
          <button
            onClick={togglePlay}
            className="text-white hover:text-orange-400 transition-colors"
          >
            {isPlaying ? (
              <Pause className="w-8 h-8" />
            ) : (
              <Play className="w-8 h-8 ml-1" />
            )}
          </button>
        </div>
      </div>

      {/* Barra de controles inferior */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        {/* Barra de progreso */}
        <div className="mb-3">
          <input
            type="range"
            min="0"
            max="100"
            value={duration > 0 ? (currentTime / duration) * 100 : 0}
            onChange={handleSeek}
            className="w-full h-1 bg-white/30 rounded-full appearance-none cursor-pointer slider"
          />
        </div>

        <div className="flex items-center justify-between text-white text-sm">
          <div className="flex items-center gap-4">
            <button
              onClick={togglePlay}
              className="hover:text-orange-400 transition-colors"
            >
              {isPlaying ? (
                <Pause className="w-5 h-5" />
              ) : (
                <Play className="w-5 h-5" />
              )}
            </button>

            <button
              onClick={toggleMute}
              className="hover:text-orange-400 transition-colors"
            >
              {isMuted ? (
                <VolumeX className="w-5 h-5" />
              ) : (
                <Volume2 className="w-5 h-5" />
              )}
            </button>

            <span className="text-xs">
              {formatTime(currentTime)} / {formatTime(duration)}
            </span>
          </div>

          <button
            onClick={toggleFullscreen}
            className="hover:text-orange-400 transition-colors"
          >
            {isFullscreen ? (
              <Minimize2 className="w-5 h-5" />
            ) : (
              <Maximize2 className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Indicador de calidad */}
      <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm rounded-full px-3 py-1">
        <span className="text-white text-xs font-medium">HD</span>
      </div>

      {/* Estilos para el slider */}
      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          height: 12px;
          width: 12px;
          border-radius: 50%;
          background: #f97316;
          cursor: pointer;
        }
        
        .slider::-moz-range-thumb {
          height: 12px;
          width: 12px;
          border-radius: 50%;
          background: #f97316;
          cursor: pointer;
          border: none;
        }
      `}</style>
    </div>
  )
} 