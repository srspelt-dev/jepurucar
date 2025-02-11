'use client'

export function VideoHero() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <video
        className="w-full h-full rounded-xl shadow-lg object-contain bg-black"
        autoPlay
        loop
        controls
        playsInline
      >
        <source src="/videos/jepuru.mp4" type="video/mp4" />
        Tu navegador no soporta el elemento de video.
      </video>
    </div>
  )
} 