'use client'

export default function Reservas() {
  return (
    <div className="container mx-auto px-4 py-12 space-y-12">
      {/* Hero Section */}
      <section className="relative py-16 md:py-20 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl">
        <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-10 rounded-2xl"></div>
        <div className="relative container mx-auto text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Reserva tu Vehículo</h1>
          <p className="text-xl max-w-2xl mx-auto opacity-90">
            Completa el formulario a continuación para realizar tu reserva. 
            Nuestro equipo se pondrá en contacto contigo para confirmar los detalles.
          </p>
        </div>
      </section>

      {/* Formulario de Reserva */}
      <div className="bg-white p-8 rounded-xl shadow-lg">
        <div className="w-full">
          <iframe 
            style={{ width: '100%', height: '900px', border: 'none' }}
            src="https://rentsyst.com/es/settings/iframe-constructor/?token=rc4A1tLz6NEMdfKU-GBUU4XYYOPNs-t1&id=8881"
            title="Formulario de Reserva Rentsyst"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  )
}

