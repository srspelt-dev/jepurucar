"use client"

import Image from 'next/image'
import { Car } from 'lucide-react'

// Función para obtener URL optimizada de Cloudinary
const getOptimizedImageUrl = (imageName: string, width: number = 600) => {
  // Si ya es una URL de Cloudinary, optimizarla
  if (imageName.includes('cloudinary.com')) {
    return imageName.replace('/upload/', `/upload/w_${width},q_auto,f_auto/`);
  }
  
  // Si es una imagen local, usar la ruta original (se migrará después)
  return imageName;
};

const vehicles = [
  {
    name: 'ALL NEW TUCSON',
    brand: 'Hyundai',
    description: 'Conduce una SUV que fusiona alta tecnología con estilo para asegurarte la mejor experiencia en el camino, sin dejar de lado tu seguridad y la de tus acompañantes.',
    image: getOptimizedImageUrl('https://res.cloudinary.com/doblti2c5/image/upload/v1753360736/jepuru/vehiculos/tucson', 600),
    fallbackImage: '/images/vehiculos/tucson.jpg'
  },
  {
    name: 'Kia Soluto',
    description: 'Auto de amplia baulera, versátil para uso en ciudad y viajes largos.',
    image: getOptimizedImageUrl('https://res.cloudinary.com/doblti2c5/image/upload/v1753360726/jepuru/vehiculos/soluto', 600),
    fallbackImage: '/images/vehiculos/soluto.jpeg'
  },
  {
    name: 'HB20 Hatchback',
    description: 'Un hatchback moderno, versátil y con tecnología de punta. Potencia y eficiencia en consumo. Admite conexiones Bluetooth, USB.',
    image: getOptimizedImageUrl('https://res.cloudinary.com/doblti2c5/image/upload/v1753360686/jepuru/vehiculos/hb20-hatch', 600),
    fallbackImage: '/images/vehiculos/hb20-hatch.jpg'
  },
  {
    name: 'GX3 PRO',
    description: 'Una Mini-SUV, compacta, diseño elegante, potente y tecnología de vanguardia. Para los que buscan recorrer caminos urbanos y sub-urbanos.',
    image: getOptimizedImageUrl('https://res.cloudinary.com/doblti2c5/image/upload/v1753360678/jepuru/vehiculos/gx3', 600),
    fallbackImage: '/images/vehiculos/gx3.jpeg'
  },
  {
    name: 'Grand i10 hatchback',
    description: 'Modelo que destaca por su consumo equilibrado de combustible en ciudad y carretera. Compacto de línea económica y básica.',
    image: getOptimizedImageUrl('https://res.cloudinary.com/doblti2c5/image/upload/v1753360675/jepuru/vehiculos/grand-i10', 600),
    fallbackImage: '/images/vehiculos/grand-i10.jpg'
  },
  {
    name: 'New Grand i10 hatchback',
    description: 'El nuevo Grand i10 hatchback es una combinación irresistible de tecnología de vanguardia, rendimiento elegante y seguridad.',
    image: getOptimizedImageUrl('https://res.cloudinary.com/doblti2c5/image/upload/v1753360718/jepuru/vehiculos/new-grand-i10', 600),
    fallbackImage: '/images/vehiculos/new-grand-i10.jpeg'
  },
  {
    name: 'i10',
    description: 'Compacto, bajo consumo, línea económica estándar. Vehículo ideal para uso en ciudad.',
    image: getOptimizedImageUrl('https://res.cloudinary.com/doblti2c5/image/upload/v1753360710/jepuru/vehiculos/i10', 600),
    fallbackImage: '/images/vehiculos/i10.jpg'
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
                  onError={(e) => {
                    // Si falla la imagen de Cloudinary, usar la imagen local
                    const target = e.target as HTMLImageElement;
                    if (target.src !== vehicle.fallbackImage) {
                      target.src = vehicle.fallbackImage;
                    }
                  }}
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