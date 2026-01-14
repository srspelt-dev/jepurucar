'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Menu } from 'lucide-react'
import { useState } from 'react'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-orange-500 text-white p-4">
      <nav className="container mx-auto">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex-shrink-0">
            <Image 
              src="/images/jepurucar.png"
              alt="Jepuru Car"
              width={240}
              height={80}
              priority
              className="object-contain p-2 rounded max-w-[180px] md:max-w-[240px]"
            />
          </Link>

          {/* Botón de menú móvil */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="w-6 h-6" />
          </button>

          {/* Menú desktop */}
          <ul className="hidden md:flex space-x-6">
            <li><Link href="/" className="hover:underline">Inicio</Link></li>
            <li><Link href="/services" className="hover:underline">Servicios</Link></li>
            <li><Link href="/vehicles" className="hover:underline">Vehículos</Link></li>
            <li><Link href="/reservas" className="hover:underline">Reservas</Link></li>
            <li><Link href="/contact" className="hover:underline">Contáctanos</Link></li>
            <li><Link href="/about" className="hover:underline">Sobre Nosotros</Link></li>
          </ul>
        </div>

        {/* Menú móvil */}
        {isMenuOpen && (
          <ul className="md:hidden py-4 space-y-4">
            <li><Link href="/" className="block hover:underline">Inicio</Link></li>
            <li><Link href="/services" className="block hover:underline">Servicios</Link></li>
            <li><Link href="/vehicles" className="block hover:underline">Vehículos</Link></li>
            <li><Link href="/reservas" className="block hover:underline">Reservas</Link></li>
            <li><Link href="/contact" className="block hover:underline">Contáctanos</Link></li>
            <li><Link href="/about" className="block hover:underline">Sobre Nosotros</Link></li>
          </ul>
        )}
      </nav>
    </header>
  )
} 