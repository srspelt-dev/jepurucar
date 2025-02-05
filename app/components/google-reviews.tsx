"use client"

import { Star } from 'lucide-react'
import Image from 'next/image'
import useEmblaCarousel from 'embla-carousel-react'
import { useEffect, useState } from 'react'

interface Review {
  author: string
  rating: number
  text: string
  photo: string
  time: string
  source: string
}

export function GoogleReviews() {
  const [reviews, setReviews] = useState<Review[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetch('/api/google-reviews')
      .then(res => res.json())
      .then(data => {
        if (data.error) {
          setError(data.error)
          setLoading(false)
          return
        }
        setReviews(Array.isArray(data) ? data : [])
        setLoading(false)
      })
      .catch(error => {
        console.error('Error fetching reviews:', error)
        setError('Error al cargar las reseñas')
        setLoading(false)
      })
  }, [])

  const [emblaRef] = useEmblaCarousel({ 
    loop: true,
    align: 'start',
    slidesToScroll: 1,
    breakpoints: {
      '(min-width: 768px)': { slidesToScroll: 2 },
      '(min-width: 1024px)': { slidesToScroll: 3 }
    }
  })

  if (loading) {
    return (
      <div className="py-16 text-center">
        <p className="text-gray-600">Cargando reseñas...</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className="py-16 text-center">
        <p className="text-red-600">{error}</p>
      </div>
    )
  }

  if (reviews.length === 0) {
    return (
      <div className="py-16 text-center">
        <p className="text-gray-600">No hay reseñas disponibles</p>
      </div>
    )
  }

  return (
    <section className="py-12 md:py-16 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-2 mb-8 md:mb-12">
          <Image 
            src="https://cdn.cdnlogo.com/logos/g/35/google-icon.svg"
            alt="Google Reviews"
            width={32}
            height={32}
            className="object-contain w-6 h-6 md:w-8 md:h-8"
          />
          <h2 className="text-2xl md:text-3xl font-bold text-center">Lo que dicen nuestros clientes</h2>
        </div>
        
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {reviews.map((review, index) => (
              <div key={index} className="flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33.33%] px-4">
                <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow h-full">
                  <div className="flex items-center gap-4 mb-4">
                    <Image 
                      src={review.photo}
                      alt={review.author}
                      width={48}
                      height={48}
                      className="rounded-full"
                    />
                    <div>
                      <h3 className="font-semibold">{review.author}</h3>
                      <div className="flex items-center gap-1">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-orange-400 text-orange-400" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">{review.text}</p>
                  <div className="flex justify-between items-center text-sm text-gray-500">
                    <span>{review.time}</span>
                    <span className="flex items-center gap-1">
                      <Image 
                        src="https://cdn.cdnlogo.com/logos/g/35/google-icon.svg"
                        alt="Google"
                        width={20}
                        height={20}
                        className="object-contain"
                      />
                      {review.source}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <a 
            href="https://search.google.com/local/reviews?placeid=ChIJ1biqqcipXZQRKXb8v-RMw2A"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-orange-500 hover:text-orange-600 font-medium"
          >
            Ver todas las reseñas en Google
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
} 