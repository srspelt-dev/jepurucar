import Image from 'next/image'
import { Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Mara Benítez',
    role: 'CEO',
    image: '/images/equipo/mara.jpg',
    text: 'Estamos comprometidos en brindar el mejor servicio de alquiler de vehículos en Paraguay. La satisfacción de nuestros clientes es nuestra prioridad.',
    rating: 5
  },
  {
    name: 'Marcelo González',
    role: 'Gerente de Operaciones',
    image: '/images/equipo/marcelo.jpg',
    text: 'Trabajamos constantemente para mantener nuestra flota en excelentes condiciones y brindar un servicio de primera calidad.',
    rating: 5
  },
  {
    name: 'Carlos Martínez',
    role: 'Cliente Frecuente',
    image: '/placeholder.svg?height=100&width=100',
    text: 'Gran experiencia de principio a fin. El auto estaba impecable y el servicio de atención al cliente es excepcional. ¡Altamente recomendado!',
    rating: 5
  }
]

export function Testimonials() {
  return (
    <section className="py-16 bg-orange-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Lo Que Dicen Nuestros Clientes</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Descubre por qué nuestros clientes confían en nosotros para sus necesidades de movilidad.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex flex-col items-center mb-6">
                <div className="relative w-20 h-20 mb-4">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="rounded-full object-cover"
                  />
                </div>
                <div className="text-center">
                  <h3 className="font-bold text-lg">{testimonial.name}</h3>
                  <p className="text-gray-500 text-sm mb-2">{testimonial.role}</p>
                  <div className="flex justify-center">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star 
                        key={i} 
                        className="w-5 h-5 fill-orange-500 text-orange-500" 
                      />
                    ))}
                  </div>
                </div>
              </div>
              <blockquote>
                <p className="text-gray-600 text-center italic">
                  {testimonial.text}
                </p>
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

