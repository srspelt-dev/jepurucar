'use client'

import { useEffect, useRef } from 'react'

export function SimpleVideoHero() {
  const videoRef = useRef<HTMLVideoElement>(null)

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

  return (
    <div className="relative w-full h-full bg-black rounded-xl overflow-hidden flex items-center justify-center">
      <video
        ref={videoRef}
        className="max-w-full max-h-full w-auto h-auto rounded-xl"
        autoPlay
        muted
        loop
        playsInline
        poster="https://res.cloudinary.com/doblti2c5/video/upload/c_scale,h_720,q_auto,w_1280/v1753361556/jepuru/videos/jepuru"
      >
        <source 
          src="https://res.cloudinary.com/doblti2c5/video/upload/c_scale,h_720,q_auto,w_1280/v1753361556/jepuru/videos/jepuru.mp4" 
          type="video/mp4" 
        />
        <source 
          src="https://res.cloudinary.com/doblti2c5/video/upload/c_scale,h_480,q_auto,w_854/v1753361556/jepuru/videos/jepuru.mp4" 
          type="video/mp4" 
        />
        Tu navegador no soporta el elemento de video.
      </video>
    </div>
  )
} 