import Image from 'next/image'
import { Heart, Target, Phone, Mail, Clock, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react'

export default function About() {
  return (
    <div className="container mx-auto px-4 py-12 space-y-24">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-r from-orange-500 to-orange-600 -mx-4 px-4 overflow-hidden">
        {/* Patrón de fondo animado */}
        <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-10 
                        animate-[pulse_4s_ease-in-out_infinite]"></div>
        
        {/* Círculos decorativos */}
        <div className="absolute top-0 right-0 w-72 h-72 bg-orange-400/20 rounded-full 
                        -translate-y-1/2 translate-x-1/2 blur-3xl animate-[bounce_8s_ease-in-out_infinite]"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-400/20 rounded-full 
                        translate-y-1/2 -translate-x-1/2 blur-3xl animate-[bounce_6s_ease-in-out_infinite]"></div>

        {/* Contenido */}
        <div className="relative container mx-auto text-center text-white">
          <h1 className="text-6xl font-bold mb-8 
                         animate-[fadeIn_1s_ease-out] drop-shadow-lg">
            Conozca más sobre nosotros
          </h1>
          
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl mb-8 max-w-3xl mx-auto
                          animate-[slideUp_1s_ease-out]">
            <h2 className="text-2xl font-semibold mb-4">
              ¿Sabías que nuestro nombre está inspirado en el dulce idioma Guaraní?
            </h2>
            <p className="text-xl opacity-90">
              Combinamos &ldquo;Jepuru&rdquo; (prestar) y &ldquo;Car&rdquo; (auto), dando a conocer nuestra cultura al mundo.
            </p>
          </div>

          <p className="text-xl max-w-3xl mx-auto opacity-90 leading-relaxed
                        animate-[slideUp_1s_ease-out] drop-shadow">
            En Jepuru Car, nos enorgullece ofrecer un servicio de alquiler de vehículos que combina 
            la calidez paraguaya con estándares internacionales de calidad.
          </p>
        </div>

        {/* Decoración inferior */}
        <div className="absolute bottom-0 left-0 right-0 h-24 
                        bg-gradient-to-b from-transparent to-white/10"></div>
      </section>

      {/* Misión y Visión */}
      <section className="grid md:grid-cols-2 gap-12">
        <div className="bg-white p-8 rounded-xl shadow-lg">
          <div className="flex items-center gap-4 mb-6">
            <Heart className="w-8 h-8 text-orange-500" />
            <h2 className="text-2xl font-bold">Nuestra Misión</h2>
          </div>
          <p className="text-gray-600 leading-relaxed">
          Proporcionar vehículos de alta calidad que brinden seguridad y confort, mientras mantenemos un enfoque en la satisfacción del cliente.
          </p>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-lg">
          <div className="flex items-center gap-4 mb-6">
            <Target className="w-8 h-8 text-orange-500" />
            <h2 className="text-2xl font-bold">Nuestra Visión</h2>
          </div>
          <p className="text-gray-600 leading-relaxed">
            Ser la empresa líder de alquiler de vehículos paraguaya, reconocidos por nuestra 
            atención personalizada y vehículos seguros y confiables.
          </p>
        </div>
      </section>

      {/* Fotos Grupales */}
      <section className="space-y-12">
        <h2 className="text-3xl font-bold text-center mb-8">Nuestro Gran Equipo</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Foto Grupal Funcionarios */}
          <div className="space-y-4">
            <div className="relative h-[400px] rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/images/Equipo/equipo1.jpg"
                alt="Equipo de Funcionarios Jepuru"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h3 className="text-xl font-semibold text-center">
              Funcionarios de Jepuru Car
            </h3>
          </div>

          {/* Foto Grupal Lavadero */}
          <div className="space-y-4">
            <div className="relative h-[400px] rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/images/Equipo/lavadero.jpg"
                alt="Equipo de Lavadero"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h3 className="text-xl font-semibold text-center">
              Equipo de Lavadero
            </h3>
          </div>
        </div>
      </section>

     
   {/* Sección de Experiencias de Influencers */}
   <section className="py-16 bg-gradient-to-br from-orange-50 to-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-orange-500">
            Experiencias con Jepuru Car
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Video de Tana */}
            <div className="aspect-[9/16] h-[500px] md:h-[600px]">
              <iframe
                src="https://www.tiktok.com/embed/v2/7387513574626757894"
                className="w-full h-full rounded-xl shadow-lg"
                allowFullScreen
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              ></iframe>
            </div>

            {/* Video de Marcelo Gabriel */}
            <div className="aspect-[9/16] h-[500px] md:h-[600px]">
              <iframe
                src="https://www.tiktok.com/embed/v2/7437173755367148855"
                className="w-full h-full rounded-xl shadow-lg"
                allowFullScreen
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              ></iframe>
            </div>

            {/* Video de Miss */}
            <div className="aspect-[9/16] h-[500px] md:h-[600px]">
              <iframe
                src="https://www.tiktok.com/embed/v2/7437173755367148855"
                className="w-full h-full rounded-xl shadow-lg"
                allowFullScreen
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Otras formas de contacto */}
      <section className="bg-gradient-to-br from-orange-50 to-white rounded-2xl shadow-lg p-12">
        <h2 className="text-3xl font-bold text-center mb-12">Otras formas de contacto</h2>
        
        <div className="max-w-3xl mx-auto space-y-8">
          {/* Teléfonos */}
          <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <Phone className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Teléfonos:</h3>
              <p className="text-gray-600 space-y-2">
                <span className="block">📍 Local 18 de Julio - San Vicente: <br />
                  <a href="tel:+595961590627" className="hover:text-orange-500 transition-colors">
                    +595 961 590 627
                  </a>
                </span>
                <span className="block">📍 Local Paseo Die Ecke - Zona Aeropuerto: <br />
                  <a href="tel:+595974302500" className="hover:text-orange-500 transition-colors">
                    +595 974 302 500
                  </a>
                </span>
              </p>
            </div>
          </div>

          {/* Correo */}
          <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <Mail className="w-6 h-6 text-orange-500 flex-shrink-0" />
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Correo:</h3>
              <a 
                href="mailto:reservas@jepurucar.com.py"
                className="text-gray-600 hover:text-orange-500 transition-colors"
              >
                reservas@jepurucar.com.py
              </a>
            </div>
          </div>

          {/* Horarios */}
          <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <Clock className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Horarios de atención:</h3>
              <div className="text-gray-600 space-y-1">
                <p>Lunes a Viernes: 09:00 a 17:30</p>
                <p>Sábados: 09:00 a 13:00 hs</p>
              </div>
            </div>
          </div>

          {/* Redes Sociales */}
          <div className="pt-8 border-t border-gray-200">
            <h3 className="text-xl font-semibold text-center text-gray-800 mb-6">
              Encontranos en redes sociales
            </h3>
            <div className="flex flex-wrap gap-6 justify-center">
              <a 
                href="https://facebook.com/jepurucar" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white p-4 rounded-full shadow-sm hover:shadow-md hover:scale-110 transition-all duration-300"
              >
                <Facebook className="w-6 h-6 text-[#1877F2]" />
              </a>
              <a 
                href="https://instagram.com/jepurucar" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white p-4 rounded-full shadow-sm hover:shadow-md hover:scale-110 transition-all duration-300"
              >
                <Instagram className="w-6 h-6 text-[#E4405F]" />
              </a>
              <a 
                href="https://twitter.com/jepurucar" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white p-4 rounded-full shadow-sm hover:shadow-md hover:scale-110 transition-all duration-300"
              >
                <Twitter className="w-6 h-6 text-black" />
              </a>
              <a 
                href="https://linkedin.com/company/jepurucar" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white p-4 rounded-full shadow-sm hover:shadow-md hover:scale-110 transition-all duration-300"
              >
                <Linkedin className="w-6 h-6 text-[#0A66C2]" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

