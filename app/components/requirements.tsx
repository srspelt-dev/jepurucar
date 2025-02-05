

import { CircleUserRound, ScrollText, CreditCard } from 'lucide-react'

export function Requirements() {
  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center mb-12">Requisitos para Alquilar</h2>
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12">
          <div className="flex flex-col items-center text-center p-8 bg-white rounded-xl shadow-lg 
                        transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
            <div className="bg-orange-50 p-4 rounded-full mb-6 
                          transform transition-all duration-500 hover:rotate-6 hover:scale-110">
              <CircleUserRound className="w-20 h-20 text-orange-500" />
            </div>
            <h3 className="text-2xl font-semibold mb-4 transition-colors duration-300 hover:text-orange-500">
              Tener 22 años
            </h3>
            <p className="text-gray-600 text-lg">
              Debes tener al menos 22 años de edad para poder alquilar un vehículo.
            </p>
          </div>

          <div className="flex flex-col items-center text-center p-8 bg-white rounded-xl shadow-lg 
                        transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
            <div className="bg-orange-50 p-4 rounded-full mb-6 
                          transform transition-all duration-500 hover:rotate-6 hover:scale-110">
              <ScrollText className="w-20 h-20 text-orange-500" />
            </div>
            <h3 className="text-2xl font-semibold mb-4 transition-colors duration-300 hover:text-orange-500">
              Registro de conducir al día
            </h3>
            <p className="text-gray-600 text-lg">
              Es indispensable presentar un registro de conducir vigente.
            </p>
          </div>

          <div className="flex flex-col items-center text-center p-8 bg-white rounded-xl shadow-lg 
                        transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
            <div className="bg-orange-50 p-4 rounded-full mb-6 
                          transform transition-all duration-500 hover:rotate-6 hover:scale-110">
              <CreditCard className="w-20 h-20 text-orange-500" />
            </div>
            <h3 className="text-2xl font-semibold mb-4 transition-colors duration-300 hover:text-orange-500">
              Tarjeta de crédito o depósito en efectivo
            </h3>
            <p className="text-gray-600 text-lg">
              Debes contar con una tarjeta de crédito o hacer un depósito en efectivo como garantía.
            </p>
          </div>
        </div>
      </div>
      
      {/* Texto adicional */}
      <p className="text-sm text-gray-600 text-center mt-12 italic">
        * Sujeto a análisis según el perfil de cada cliente, pudiendo solicitar documentaciones adicionales para el efecto.
      </p>
    </section>
  )
}

