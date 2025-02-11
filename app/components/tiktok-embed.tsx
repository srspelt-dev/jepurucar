'use client'

export function TikTokEmbed() {
  return (
    <div className="relative w-full h-full">
      <iframe
        src="https://www.tiktok.com/embed/v2/7437173755367148855?hideControls=1"
        className="w-full h-full rounded-xl shadow-lg"
        allowFullScreen
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      ></iframe>
    </div>
  )
} 