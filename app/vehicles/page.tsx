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
  // Grupo Compacto
  { 
    id: 1, 
    name: 'i10', 
    type: 'COMPACT', 
    features: [
      'Bajo consumo',
      'Línea económica',
      'Manual y automática'
    ], 
    image: '/images/vehiculos/i10.jpg'
  },
  { 
    id: 2, 
    name: 'Grand i10 hatchback', 
    type: 'COMPACT', 
    features: [
      'Consumo equilibrado',
      'Línea económica',
      'Automática'
    ], 
    image: '/images/vehiculos/grand-i10.jpg'
  },
  { 
    id: 3, 
    name: 'HB20 Hatchback', 
    type: 'COMPACT', 
    features: [
      'Versátil',
      'Manual',
      'Línea intermedia',
      'Bluetooth, USB, Apple CAR y Android Auto'
    ], 
    image: '/images/vehiculos/hb20-hatch.jpg'
  },
  { 
    id: 4, 
    name: 'New HB20 Hatchback', 
    type: 'COMPACT', 
    features: [
      'Compacto',
      'Manual',
      'Línea intermedia',
      'WIFI, Bluetooth, USB, Apple CAR y Android Auto'
    ], 
    image: '/images/vehiculos/hb20-new-hatch.jpg'
  },
  { 
    id: 5, 
    name: 'New Grand i10 hatchback', 
    type: 'COMPACT', 
    features: [
      'Tecnología vanguardia',
      'Potente y económico',
      'WIFI, Bluetooth, USB, Apple CAR y Android Auto'
    ], 
    image: '/images/vehiculos/new-grand-i10.jpeg'
  },
  { 
    id: 6, 
    name: 'Etios hatchback', 
    type: 'COMPACT', 
    features: [
      'Automática',
      'Eficiente consumo',
      'Bluetooth, USB, Apple CAR y Android Auto'
    ], 
    image: '/images/vehiculos/etios.jpeg'
  },
  { 
    id: 7, 
    name: 'VW Gol hatchback', 
    type: 'COMPACT', 
    features: [
      'Automática',
      'Potente',
      'Bluetooth, USB'
    ], 
    image: '/images/vehiculos/gol.jpeg'
  },

  // Grupo Sedan
  { 
    id: 8, 
    name: 'New Hyundai HB20S', 
    type: 'SEDAN', 
    features: [
      'Amplia baulera',
      'Gran rendimiento',
      'Automática',
      'Ideal para viajes largos'
    ], 
    image: '/images/vehiculos/new-hb20s-true.jpeg'
  },
  { 
    id: 9, 
    name: 'Kia Soluto', 
    type: 'SEDAN', 
    features: [
      'Amplia baulera',
      'Ideal para uso urbano',
      'Perfecto para viajes'
    ], 
    image: '/images/vehiculos/soluto.jpeg'
  },

  // Grupo SUV
  { 
    id: 10, 
    name: 'Hyundai HB20X', 
    type: 'SUV', 
    features: [
      'Mini SUV compacta',
      '5 pasajeros',
      'Automático'
    ], 
    image: '/images/vehiculos/hb20x.jpeg'
  },
  { 
    id: 11, 
    name: 'GX3 PRO', 
    type: 'SUV', 
    features: [
      'Mini SUV moderna',
      '5 pasajeros',
      'Automático'
    ], 
    image: '/images/vehiculos/gx3.jpeg'
  },
  { 
    id: 12, 
    name: 'KGM Tivoli', 
    type: 'SUV', 
    features: [
      'Mini SUV',
      'Interior amplio',
      'Baulera compacta',
      '5 pasajeros',
      'Automático'
    ], 
    image: '/images/vehiculos/tivoli.jpg'
  },
  { 
    id: 13, 
    name: 'Geely Coolray', 
    type: 'SUV', 
    features: [
      'SUV amplia',
      'Turbo',
      'Automática',
      'Baulera amplia'
    ], 
    image: '/images/vehiculos/coolray.jpeg'
  },
  { 
    id: 14, 
    name: 'ALL NEW TUCSON', 
    type: 'SUV', 
    features: [
      'SUV amplia',
      'Turbo',
      'Automática',
      'Amplia baulera'
    ], 
    image: '/images/vehiculos/tucson.jpg'
  },
  { 
    id: 15, 
    name: 'JIM 4X4', 
    type: 'SUV', 
    features: [
      'Motor ISUZU',
      'Potente',
      'Turbo',
      'Automática'
    ], 
    image: '/images/vehiculos/jim.jpeg'
  },

  // Grupo VAN
  { 
    id: 16, 
    name: 'Carnival', 
    type: 'VAN', 
    features: [
      'Hasta 10 pasajeros',
      'Automática',
      'Turbo'
    ], 
    image: '/images/vehiculos/Carnival.jpg'
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
    <div className="container mx-auto px-4 py-8 md:py-12">
      {/* Hero Section */}
      <section className="relative py-16 md:py-20 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl mb-12">
        <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-10 rounded-2xl"></div>
        <div className="relative container mx-auto text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Nuestra Flota de Vehículos</h1>
          <p className="text-xl max-w-2xl mx-auto opacity-90">
            Descubre nuestra amplia selección de vehículos para todas tus necesidades. 
            Desde económicos compactos hasta lujosas SUVs.
          </p>
        </div>
      </section>

      {/* Filtros de Categoría */}
      <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg mb-12 max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">Categorías de Vehículos</h2>
        <div className="flex flex-wrap gap-4 justify-center">
          <button
            onClick={() => setSelectedType(null)}
            className={`px-6 py-2 rounded-full transition-all duration-300 ${
              selectedType === null 
                ? 'bg-orange-500 text-white transform scale-105 shadow-md' 
                : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
            }`}
          >
            Todos
          </button>
          {['COMPACT', 'SEDAN', 'SUV', 'VAN'].map(type => (
            <button
              key={type}
              onClick={() => setSelectedType(type)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                selectedType === type 
                  ? 'bg-orange-500 text-white transform scale-105 shadow-md' 
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
            className="bg-white shadow-lg rounded-xl overflow-hidden 
                       transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <div className="relative aspect-[4/3]">
              <Image
                src={vehicle.image}
                alt={vehicle.name}
                fill
                className="object-cover transition-transform duration-500 hover:scale-110"
              />
              <div className="absolute top-4 right-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm
                              transform transition-all duration-300 hover:-translate-y-1 shadow-md">
                {vehicle.type === 'COMPACT' ? 'Compacto' :
                 vehicle.type === 'SEDAN' ? 'Sedán' :
                 vehicle.type === 'SUV' ? 'SUV' : 'Van'}
              </div>
            </div>
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-4 transition-colors duration-300 hover:text-orange-500">
                {vehicle.name}
              </h2>
              <div className="mb-6">
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
              <div className="flex justify-center">
                <a 
                  href="#"
                  onClick={(e) => handleReserveClick(e, vehicle.name)}
                  className="bg-orange-500 text-white px-8 py-2 rounded-full w-full text-center
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

