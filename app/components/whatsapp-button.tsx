'use client'

import { useState } from 'react'
import { BsWhatsapp } from 'react-icons/bs'

const phoneNumbers = [
  // '+595961590627',
  // '+595974302500',
  // '+595971951077',
  '+595983214111'
]

const mensaje = encodeURIComponent('Hola Jepuru Car, estoy en la página web y quiero cotización')

export function WhatsAppButton() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
    // Cambia al siguiente número, volviendo al primero si llega al final
    setCurrentIndex((prev) => (prev + 1) % phoneNumbers.length)
    // Abre WhatsApp con el número actual
    window.open(`https://wa.me/${phoneNumbers[currentIndex]}?text=${mensaje}`, '_blank')
  }

  return (
    <a
      href={`https://wa.me/${phoneNumbers[currentIndex]}?text=${mensaje}`}
      onClick={handleClick}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg 
                hover:bg-[#20BA5C] transition-all duration-300 hover:scale-110"
      aria-label="Chat on WhatsApp"
    >
      <BsWhatsapp className="w-6 h-6" />
    </a>
  )
}

