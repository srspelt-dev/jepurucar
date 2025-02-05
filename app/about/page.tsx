import Image from 'next/image'
import { Heart, Target, Phone, Mail, Clock, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react'

const teamMembers = [
  { 
    name: 'Mara Benítez', 
    role: 'CEO', 
    description: 'Con más de 15 años de experiencia en la industria automotriz',
    image: '/images/equipo/mara.jpg'
  },
  { 
    name: 'Marcelo González', 
    role: 'Gerente de Operaciones', 
    description: 'Especialista en logística y gestión de flotas',
    image: '/images/equipo/marcelo.jpg'
  },
  { 
    name: 'Maria Santos', 
    role: 'Atención al Cliente', 
    description: 'Dedicada a brindar la mejor experiencia a nuestros clientes',
    image: '/images/equipo/chica1.jpg'
  },
  { 
    name: 'Juan Perez', 
    role: 'Gerente de Flota', 
    description: 'Experto en mantenimiento y gestión de vehículos',
    image: '/images/equipo/chico1.jpg'
  },
  { 
    name: 'Laura Martinez', 
    role: 'Directora de Marketing', 
    description: 'Especialista en estrategias digitales y comunicación',
    image: '/images/equipo/chica2.jpg'
  },
  { 
    name: 'Diego Lopez', 
    role: 'Supervisor de Mantenimiento', 
    description: 'Responsable de mantener nuestra flota en óptimas condiciones',
    image: '/images/equipo/chico2.jpg'
  },
  { 
    name: 'Sofia Ramirez', 
    role: 'Gerente Financiera', 
    description: 'Experta en gestión financiera y planificación estratégica',
    image: '/images/equipo/chica3.jpg'
  },
  { 
    name: 'Pedro Gonzalez', 
    role: 'Especialista IT', 
    description: 'Encargado de la infraestructura tecnológica y sistemas',
    image: '/images/equipo/chico3.jpg'
  }
]

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
            Brindar soluciones de movilidad accesibles y seguras, superando las expectativas 
            de nuestros clientes a través de un servicio personalizado y una flota de 
            vehículos moderna y bien mantenida.
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
                src="/images/team/grupal-funcionarios.jpg"
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
                src="/images/team/grupal-lavadero.jpg"
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

      {/* Hero Section del Equipo */}
      <section className="relative py-20 bg-gradient-to-r from-orange-500 to-orange-600 -mx-4 px-4">
        <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-10"></div>
        <div className="relative container mx-auto text-center text-white">
          <h1 className="text-5xl font-bold mb-6">Nuestro Equipo</h1>
          <p className="text-xl max-w-3xl mx-auto opacity-90">
            Conoce a los profesionales apasionados que trabajan día a día para brindarte la mejor experiencia en alquiler de vehículos en Paraguay.
          </p>
        </div>
      </section>

      {/* Grid del Equipo */}
      <section className="container mx-auto -mt-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl shadow-xl p-6 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative w-full aspect-square mb-6 rounded-xl overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transform hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <p className="text-white text-sm">{member.description}</p>
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-orange-500 font-medium mb-3">{member.role}</p>
                <div className="flex justify-center space-x-3">
                  <button className="p-2 hover:bg-orange-50 rounded-full transition-colors">
                    <svg className="w-5 h-5 text-orange-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22.162 5.656a8.384 8.384 0 0 1-2.402.658A4.196 4.196 0 0 0 21.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814 11.874 11.874 0 0 1-8.62-4.37 4.168 4.168 0 0 0-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 0 1-1.894-.523v.052a4.185 4.185 0 0 0 3.355 4.101 4.21 4.21 0 0 1-1.89.072A4.185 4.185 0 0 0 7.97 16.65a8.394 8.394 0 0 1-6.191 1.732 11.83 11.83 0 0 0 6.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 0 0 2.087-2.165z"/>
                    </svg>
                  </button>
                  <button className="p-2 hover:bg-orange-50 rounded-full transition-colors">
                    <svg className="w-5 h-5 text-orange-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12c0-5.523-4.477-10-10-10z"/>
                    </svg>
                  </button>
                  <button className="p-2 hover:bg-orange-50 rounded-full transition-colors">
                    <svg className="w-5 h-5 text-orange-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M16.98 0a6.9 6.9 0 0 1 5.08 1.98A6.94 6.94 0 0 1 24 7.02v9.96c0 2.08-.68 3.87-1.98 5.13A7.14 7.14 0 0 1 16.94 24H7.06a7.06 7.06 0 0 1-5.03-1.89A6.96 6.96 0 0 1 0 16.94V7.02C0 2.8 2.8 0 7.02 0h9.96zm.05 2.23H7.06c-1.45 0-2.7.43-3.53 1.25a4.82 4.82 0 0 0-1.3 3.54v9.92c0 1.5.43 2.7 1.3 3.58a5 5 0 0 0 3.53 1.25h9.88a5 5 0 0 0 3.53-1.25 4.73 4.73 0 0 0 1.4-3.54V7.02a5 5 0 0 0-1.3-3.49 4.82 4.82 0 0 0-3.54-1.3zM12 5.76c3.39 0 6.2 2.8 6.2 6.2a6.2 6.2 0 0 1-12.4 0 6.2 6.2 0 0 1 6.2-6.2zm0 2.22a3.99 3.99 0 0 0-3.97 3.97A3.99 3.99 0 0 0 12 15.92a3.99 3.99 0 0 0 3.97-3.97A3.99 3.99 0 0 0 12 7.98z"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
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

