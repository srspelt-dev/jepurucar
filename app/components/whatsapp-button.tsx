'use client'

import { useState } from 'react'
import { MessageCircle } from 'lucide-react'

const phoneNumbers = [
  '+595961590627',
  '+595981123456',
  '+595971234567',
  '+595991234567'
]

export function WhatsAppButton() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
    // Cambia al siguiente número, volviendo al primero si llega al final
    setCurrentIndex((prev) => (prev + 1) % phoneNumbers.length)
    // Abre WhatsApp con el número actual
    window.open(`https://wa.me/${phoneNumbers[currentIndex]}`, '_blank')
  }

  return (
    <a
      href={`https://wa.me/${phoneNumbers[currentIndex]}`}
      onClick={handleClick}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
    </a>
  )
}

