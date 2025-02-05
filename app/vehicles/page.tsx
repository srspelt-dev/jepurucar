'use client'

import { Suspense } from 'react'
import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import Image from 'next/image'

const phoneNumbers = [
  "+595961590627", // Mara
  "+595974302500", // Marcelo
  "+595971951077"  // Eliana
]

const vehicles = [
  { 
    id: 1, 
    name: 'Toyota Etios', 
    type: 'COMPACT', 
    features: ['5 Pasajeros', 'Manual', 'Aire Acondicionado'], 
    image: '/images/vehiculos/etios.jpeg'
  },
  { 
    id: 2, 
    name: 'Volkswagen Gol', 
    type: 'COMPACT', 
    features: ['5 Pasajeros', 'Manual', 'Bluetooth'], 
    image: '/images/vehiculos/gol.png'
  },
  { 
    id: 3, 
    name: 'HB20 Hatchback', 
    type: 'COMPACT', 
    features: ['5 Pasajeros', 'Manual', 'Bluetooth', 'USB'], 
    image: '/images/vehiculos/hb20-hatch.jpeg'
  },
  { 
    id: 4, 
    name: 'Hyundai HB20S', 
    type: 'SEDAN', 
    features: ['5 Pasajeros', 'Automático', 'GPS'], 
    image: '/images/vehiculos/hb20s.jpeg'
  },
  { 
    id: 5, 
    name: 'Kia Soluto', 
    type: 'SEDAN', 
    features: ['Amplia baulera', 'Versátil', 'Ideal ciudad y viajes'], 
    image: '/images/vehiculos/soluto.jpeg'
  },
  { 
    id: 6, 
    name: 'GX3 PRO', 
    type: 'SEDAN', 
    features: ['5 Pasajeros', 'Automático', 'Cámara'], 
    image: '/images/vehiculos/gx3.jpeg'
  },
  { 
    id: 7, 
    name: 'Geely Coolray', 
    type: 'SUV', 
    features: ['5 Pasajeros', 'Automático', 'Full Extras'], 
    image: '/images/vehiculos/coolray.jpeg'
  },
  { 
    id: 8, 
    name: 'Hyundai HB20X', 
    type: 'SUV', 
    features: ['5 Pasajeros', 'Automático'], 
    image: '/images/vehiculos/hb20x.jpeg'
  },
  { 
    id: 9, 
    name: 'JIM', 
    type: 'SUV', 
    features: ['4 Pasajeros', 'Manual', '4x4'], 
    image: '/images/vehiculos/jim.jpeg'
  },
  { 
    id: 10, 
    name: 'Ssangyong Tivoli', 
    type: 'SUV', 
    features: ['5 Pasajeros', 'Automático', 'Full Extras'], 
    image: '/images/vehiculos/tivoli.jpeg'
  },
  { 
    id: 11, 
    name: 'Hyundai H1', 
    type: 'VAN', 
    features: ['12 Pasajeros', 'Manual', 'Aire Acondicionado'], 
    image: '/images/vehiculos/h1.jpeg'
  },
  {
    id: 12,
    name: 'ALL NEW TUCSON',
    brand: 'Hyundai',
    type: 'SUV',
    features: [
      'Alta tecnología',
      'Máxima seguridad',
      'Automático'
    ],
    image: '/images/vehiculos/tucson.jpg'
  },
  {
    id: 13,
    name: 'Grand i10 hatchback',
    type: 'COMPACT',
    features: [
      'Consumo equilibrado',
      'Económico',
      'Línea básica'
    ],
    image: '/images/vehiculos/grand-i10.jpeg'
  },
  {
    id: 14,
    name: 'New Grand i10 hatchback',
    type: 'COMPACT',
    features: [
      'Tecnología de vanguardia',
      'Rendimiento elegante',
      'Seguridad'
    ],
    image: '/images/vehiculos/new-grand-i10.jpeg'
  },
  {
    id: 15,
    name: 'i10',
    type: 'COMPACT',
    features: [
      'Bajo consumo',
      'Línea económica',
      'Ideal para ciudad'
    ],
    image: '/images/vehiculos/i10.jpeg'
  }
]

// Componente principal de vehículos
function VehiclesContent() {
  const searchParams = useSearchParams()
  const typeFromUrl = searchParams.get('type')
  const [selectedType, setSelectedType] = useState<string | null>(typeFromUrl)

  // Actualizar el filtro cuando cambie el parámetro de la URL
  useEffect(() => {
    setSelectedType(typeFromUrl)
  }, [typeFromUrl])

  const [currentPhoneIndex, setCurrentPhoneIndex] = useState(0)

  const handleReserveClick = (e: React.MouseEvent<HTMLAnchorElement>, vehicleName: string) => {
    e.preventDefault()
    // Cambia al siguiente número, volviendo al primero si llega al final
    setCurrentPhoneIndex((prev) => (prev + 1) % phoneNumbers.length)
    // Abre WhatsApp con el número actual y el mensaje personalizado
    const message = `Hola, quiero consultar si está disponible el ${vehicleName} para alquilar`
    window.open(
      `https://wa.me/${phoneNumbers[currentPhoneIndex]}?text=${encodeURIComponent(message)}`,
      '_blank'
    )
  }

  const filteredVehicles = selectedType 
    ? vehicles.filter(vehicle => vehicle.type === selectedType)
    : vehicles

  return (
    <div className="container mx-auto px-4 py-8 md:py-12 space-y-16 md:space-y-24">
      {/* Hero Section */}
      <section className="relative py-16 md:py-20 bg-gradient-to-r from-orange-500 to-orange-600 -mx-4 px-4">
        <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-10"></div>
        <div className="relative container mx-auto text-center text-white">
          <h1 className="text-5xl font-bold mb-6">Nuestra Flota de Vehículos</h1>
          <p className="text-xl max-w-3xl mx-auto opacity-90">
            Descubre nuestra amplia selección de vehículos para todas tus necesidades. 
            Desde económicos compactos hasta lujosas SUVs.
          </p>
        </div>
      </section>

      {/* Contenido Principal */}
      <section className="container mx-auto -mt-12 md:-mt-20">
        {/* Filtros de Categoría */}
        <div className="bg-white p-8 rounded-xl shadow-lg mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Categorías de Vehículos</h2>
          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => setSelectedType(null)}
              className={`px-6 py-2 rounded-full transition-colors ${
                selectedType === null 
                  ? 'bg-orange-500 text-white' 
                  : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
              }`}
            >
              Todos
            </button>
            {['COMPACT', 'SEDAN', 'SUV', 'VAN'].map(type => (
              <button
                key={type}
                onClick={() => setSelectedType(type)}
                className={`px-6 py-2 rounded-full transition-colors ${
                  selectedType === type 
                    ? 'bg-orange-500 text-white' 
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                }`}
              >
                {type === 'COMPACT' ? 'Compacto' :
                 type === 'SEDAN' ? 'Sedán' :
                 type === 'SUV' ? 'SUV' : 'Van'}
              </button>
            ))}
          </div>
        </div>

        {/* Grid de Vehículos */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {filteredVehicles.map((vehicle) => (
            <div 
              key={vehicle.id} 
              className="bg-white shadow-lg rounded-lg overflow-hidden 
                         transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <div className="relative">
                <Image
                  src={vehicle.image}
                  alt={vehicle.name}
                  width={300}
                  height={200}
                  className="w-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm
                                transform transition-all duration-300 hover:-translate-y-1">
                  {vehicle.type === 'COMPACT' ? 'Compacto' :
                   vehicle.type === 'SEDAN' ? 'Sedán' :
                   vehicle.type === 'SUV' ? 'SUV' : 'Van'}
                </div>
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-2 transition-colors duration-300 hover:text-orange-500">
                  {vehicle.name}
                </h2>
                <div className="mb-4">
                  {vehicle.features.map((feature, index) => (
                    <span 
                      key={index} 
                      className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold 
                                 text-gray-700 mr-2 mb-2 transition-all duration-300 
                                 hover:bg-orange-100 hover:text-orange-700 transform hover:-translate-y-1"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
                <div className="flex justify-end">
                  <a 
                    href="#"
                    onClick={(e) => handleReserveClick(e, vehicle.name)}
                    className="bg-orange-500 text-white px-6 py-2 rounded-full 
                     transform transition-all duration-300 
                     hover:bg-orange-600 hover:scale-105 hover:shadow-lg
                     active:scale-95"
                  >
                    Reservar
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

// Página principal envuelta en Suspense
export default function Vehicles() {
  return (
    <Suspense fallback={
      <div className="container mx-auto px-4 py-8 text-center">
        <p className="text-gray-600">Cargando vehículos...</p>
      </div>
    }>
      <VehiclesContent />
    </Suspense>
  )
}

