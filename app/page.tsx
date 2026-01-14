'use client'

import { Requirements } from './components/requirements'
import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const carouselImages = [
  {
    src: '/images/carrousel/HYUNDAI NEW HB20 HATCHBACK-1.png',
    alt: 'Hyundai New HB20 Hatchback'
  },
  {
    src: '/images/carrousel/KIA SOLUTO-1.png',
    alt: 'Kia Soluto'
  },
  {
    src: '/images/carrousel/RAIZE-1.png',
    alt: 'Raize'
  },
  {
    src: '/images/carrousel/volkswagen GOL-1.png',
    alt: 'Volkswagen Gol'
  }
]

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((current) => (current + 1) % carouselImages.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const goToNext = () => {
    setCurrentIndex((current) => (current + 1) % carouselImages.length)
  }

  const goToPrevious = () => {
    setCurrentIndex((current) => (current - 1 + carouselImages.length) % carouselImages.length)
  }

  return (
    <div>
      <div className="container mx-auto px-4 py-8 md:py-12">
        {/* Carousel */}
        <div className="relative w-full h-[520px] md:h-[620px] lg:h-[720px] overflow-hidden rounded-2xl shadow-2xl bg-gray-900">
          {carouselImages.map((image, index) => (
            <div
              key={index}
              className={`absolute w-full h-full transition-transform duration-500 ease-in-out ${
                index === currentIndex ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
              }`}
              style={{ transform: `translateX(${(index - currentIndex) * 100}%)` }}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
                style={{ objectPosition: 'center 60%' }}
                priority={index === 0}
              />
              {/* Botón de Reservar */}
              <div className="absolute inset-0 flex items-end justify-center pb-6 md:pb-8">
                <Link
                  href="/reservas"
                  className="bg-orange-500 text-white px-6 py-2 md:px-8 md:py-3 rounded-full text-base md:text-lg font-semibold hover:bg-orange-600 transition duration-300 shadow-lg transform hover:scale-105 z-10"
                >
                  Reservar Ahora
                </Link>
              </div>
            </div>
          ))}
          
          {/* Botones de navegación */}
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/75 transition duration-300 z-10"
            aria-label="Slide anterior"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/75 transition duration-300 z-10"
            aria-label="Slide siguiente"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
          
          {/* Indicadores */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
            {carouselImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-white w-8' : 'bg-white/50'
                }`}
                aria-label={`Ir al slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Resto de las secciones */}
      <section className="bg-orange-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-orange-500 
                         transform transition-all duration-300 hover:scale-105">
            Tipos de Vehículos Disponibles
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Link 
              href="/vehicles?type=COMPACT" 
              className="group relative overflow-hidden rounded-xl shadow-lg 
                        transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-orange-500/10 to-orange-600/10
                            group-hover:from-orange-500/85 group-hover:to-orange-600/85 
                            transition-all duration-500 ease-in-out z-10" />
              <Image
                src="/images/autos_jepuru_nuevo/HYUNDAI NEW HB20 HATCHBACK-1.png"
                alt="Autos"
                width={400}
                height={300}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-6 z-20">
                <h3 className="text-2xl font-bold mb-4 transform transition-all duration-300 
                             group-hover:scale-110 group-hover:-translate-y-2 drop-shadow-lg">
                  Autos
                </h3>
                <p className="text-center opacity-0 group-hover:opacity-100 transition-all duration-300 
                            transform translate-y-4 group-hover:translate-y-0 drop-shadow-lg">
                  i10,Grand i10, HB20, HB20S, Soluto y más
                </p>
              </div>
            </Link>

            <Link 
              href="/vehicles?type=SUV" 
              className="group relative overflow-hidden rounded-xl shadow-lg 
                        transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-orange-500/10 to-orange-600/10
                            group-hover:from-orange-500/85 group-hover:to-orange-600/85 
                            transition-all duration-500 ease-in-out z-10" />
              <Image
                src="/images/autos_jepuru_nuevo/KGM Tivoli.JPG"
                alt="Camionetas"
                width={400}
                height={300}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-6 z-20">
                <h3 className="text-2xl font-bold mb-4 transform transition-all duration-300 
                             group-hover:scale-110 group-hover:-translate-y-2 drop-shadow-lg">
                  Camionetas
                </h3>
                <p className="text-center opacity-0 group-hover:opacity-100 transition-all duration-300 
                            transform translate-y-4 group-hover:translate-y-0 drop-shadow-lg">
                  HB20X, Tivoli, Coolray, JIM 4X4 y más
                </p>
              </div>
            </Link>

            <Link 
              href="/vehicles?type=SEDAN" 
              className="group relative overflow-hidden rounded-xl shadow-lg 
                        transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-orange-500/10 to-orange-600/10
                            group-hover:from-orange-500/85 group-hover:to-orange-600/85 
                            transition-all duration-500 ease-in-out z-10" />
              <Image
                src="/images/autos_jepuru_nuevo/HB20 Sedan.JPG"
                alt="Sedán"
                width={400}
                height={300}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-6 z-20">
                <h3 className="text-2xl font-bold mb-4 transform transition-all duration-300 
                             group-hover:scale-110 group-hover:-translate-y-2 drop-shadow-lg">
                  Sedán
                </h3>
                <p className="text-center opacity-0 group-hover:opacity-100 transition-all duration-300 
                            transform translate-y-4 group-hover:translate-y-0 drop-shadow-lg">
                  HB20S y Soluto
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>
      <Requirements />
    </div>
  )
}

