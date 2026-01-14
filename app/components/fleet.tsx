"use client"

import Image from 'next/image'
import { Car } from 'lucide-react'

const vehicles = [
  {
    name: 'Hyundai Tucson',
    brand: 'Hyundai',
    description: 'SUV amplia con tecnología y seguridad para viajes cómodos.',
    image: '/images/autos_jepuru_nuevo/Hyundai Tucson.JPG'
  },
  {
    name: 'Hyundai New HB20',
    description: 'Hatchback moderno con conectividad Apple Car y Android Auto.',
    image: '/images/autos_jepuru_nuevo/HYUNDAI NEW HB20 HATCHBACK-1.png'
  },
  {
    name: 'Hyundai HB20S',
    description: 'Sedán con amplia baulera y rendimiento eficiente para viajes largos.',
    image: '/images/autos_jepuru_nuevo/HB20 Sedan.JPG'
  },
  {
    name: 'New Grand i10 hatchback',
    description: 'Compacto renovado, eficiente y con conectividad completa.',
    image: '/images/autos_jepuru_nuevo/NEW GRAND i10-1.png'
  },
  {
    name: 'Hyundai i10',
    description: 'Ciudadano ágil y económico con opciones manual y automática.',
    image: '/images/autos_jepuru_nuevo/i10-1.png'
  },
  {
    name: 'Geely GX3',
    description: 'Mini SUV moderna, ideal para ciudad con estilo y comodidad.',
    image: '/images/autos_jepuru_nuevo/Geely GX3.JPG'
  },
  {
    name: 'Toyota Raize',
    description: 'SUV compacta con motor eficiente y conectividad completa.',
    image: '/images/autos_jepuru_nuevo/RAIZE-1.png'
  },
  {
    name: 'Suzuki XL7',
    description: 'SUV con 3 filas, espacio para 7 pasajeros y gran confort.',
    image: '/images/autos_jepuru_nuevo/XL7-1.png'
  }
]

export function Fleet() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Nuestra Flota</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {vehicles.map((vehicle, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="relative h-48">
                <Image
                  src={vehicle.image}
                  alt={vehicle.name}
                  fill
                  className="object-cover"
                  priority={index < 3} // Priorizar las primeras 3 imágenes
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Car className="w-5 h-5 text-orange-500" />
                  <h3 className="text-xl font-semibold">
                    {vehicle.name}
                    {vehicle.brand && (
                      <span className="text-sm text-gray-500 block">
                        {vehicle.brand}
                      </span>
                    )}
                  </h3>
                </div>
                <p className="text-gray-600">
                  {vehicle.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 