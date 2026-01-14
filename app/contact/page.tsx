'use client'

import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    const emailBody = `
      Nombre: ${formData.name}
      Email: ${formData.email}
      Teléfono: ${formData.phone}
      Asunto: ${formData.subject}
      Mensaje: ${formData.message}
    `

    window.location.href = `mailto:reservas@jepurucar.com.py?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(emailBody)}`

    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    })
  }

  const handleWhatsAppClick = (phoneNumber: string) => {
    window.open(`https://wa.me/${phoneNumber}`, '_blank')
  }

  return (
    <div className="container mx-auto px-4 py-12 space-y-24">
      {/* Hero Section */}
      
      <section className="relative py-20 bg-gradient-to-r from-orange-500 to-orange-600 -mx-4 px-4">
        <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-10"></div>
        <div className="relative container mx-auto text-center text-white">
          <h1 className="text-5xl font-bold mb-6">Contáctanos</h1>
          <p className="text-xl max-w-3xl mx-auto opacity-90">
            Estamos aquí para ayudarte. Ponte en contacto con nuestro equipo y responderemos 
            todas tus consultas.
          </p>
        </div>
      </section>
      {/* Contenido Principal */}
      <section className="container mx-auto -mt-20">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Información de Contacto */}
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">Información de Contacto</h2>
            <div className="space-y-4">
              
              <div className="flex items-center space-x-3">
                <span className="text-orange-500 text-xl">📧</span>
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-gray-600">info@jepurucar.com</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-orange-500 text-xl">⏰</span>
                <div>
                  <p className="font-medium">Horario de Atención</p>
                  <p className="text-gray-600">Lunes a Viernes 8:00 - 17:30</p>
                  <p className="text-gray-600">Sábados: 8:00 - 12:00</p>
                  <p className="text-gray-600">Domingo: Cerrado</p>
                </div>
              </div>
              {/*Teléfono*/}
              <div className="flex items-center space-x-3">
                <span className="text-orange-500 text-xl">📞</span>
                <div>
                  <p className="font-medium">Teléfonos</p>
                  <button 
                    className="text-gray-600 hover:text-orange-500 transition-colors block w-full text-left py-1"
                    onClick={() => handleWhatsAppClick('595961590627')}
                  >
                    +595 961 590 627
                  </button>
                  <button 
                    className="text-gray-600 hover:text-orange-500 transition-colors block w-full text-left py-1"
                    onClick={() => handleWhatsAppClick('595974302500')}
                  >
                    +595 974 302 500
                  </button>
                  <button 
                    className="text-gray-600 hover:text-orange-500 transition-colors block w-full text-left py-1"
                    onClick={() => handleWhatsAppClick('595971951077')}
                  >
                    +595 971 951 077
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Formulario de Contacto */}
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">Envíanos un Mensaje</h2>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block mb-2 font-medium text-gray-700">Nombre Completo</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  required
                  placeholder="Ingresa tu nombre"
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 font-medium text-gray-700">Correo Electrónico</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  required
                  placeholder="tucorreo@ejemplo.com"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block mb-2 font-medium text-gray-700">Teléfono</label>
                <input 
                  type="tel" 
                  id="phone" 
                  name="phone" 
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  placeholder="(0981) 123-456"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block mb-2 font-medium text-gray-700">Asunto</label>
                <select 
                  id="subject" 
                  name="subject" 
                  value={formData.subject}
                  onChange={(e) => setFormData({...formData, subject: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  required
                >
                  <option value="">Selecciona una opción</option>
                  <option value="Alquiler de Vehículo">Alquiler de Vehículo</option>
                  <option value="info">Información General</option>
                  <option value="Otro">Otro</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block mb-2 font-medium text-gray-700">Mensaje</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows={4} 
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  required
                  placeholder="Escribe tu mensaje aquí..."
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition duration-300"
              >
                Enviar Mensaje
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}

  