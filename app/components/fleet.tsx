"use client"

import Image from 'next/image'
import { Car } from 'lucide-react'

const vehicles = [
  {
    name: 'ALL NEW TUCSON',
    brand: 'Hyundai',
    description: 'Conduce una SUV que fusiona alta tecnología con estilo para asegurarte la mejor experiencia en el camino, sin dejar de lado tu seguridad y la de tus acompañantes.',
    image: '/images/fleet/tucson.jpg'
  },
  {
    name: 'Kia Soluto',
    description: 'Auto de amplia baulera, versátil para uso en ciudad y viajes largos.',
    image: '/images/fleet/soluto.jpg'
  },
  {
    name: 'HB20 Hatchback',
    description: 'Un hatchback moderno, versátil y con tecnología de punta. Potencia y eficiencia en consumo. Admite conexiones Bluetooth, USB.',
    image: '/images/fleet/hb20-hatch.jpg'
  },
  {
    name: 'GX3 PRO',
    description: 'Una Mini-SUV, compacta, diseño elegante, potente y tecnología de vanguardia. Para los que buscan recorrer caminos urbanos y sub-urbanos.',
    image: '/images/fleet/gx3.jpg'
  },
  {
    name: 'Grand i10 hatchback',
    description: 'Modelo que destaca por su consumo equilibrado de combustible en ciudad y carretera. Compacto de línea económica y básica.',
    image: '/images/fleet/grand-i10.jpg'
  },
  {
    name: 'New Grand i10 hatchback',
    description: 'El nuevo Grand i10 hatchback es una combinación irresistible de tecnología de vanguardia, rendimiento elegante y seguridad.',
    image: '/images/fleet/new-grand-i10.jpg'
  },
  {
    name: 'i10',
    description: 'Compacto, bajo consumo, línea económica estándar. Vehículo ideal para uso en ciudad.',
    image: '/images/fleet/i10.jpg'
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