import { NextResponse } from 'next/server'

const GOOGLE_PLACES_API_KEY = process.env.NEXT_PUBLIC_GOOGLE_PLACES_API_KEY
const PLACE_ID = 'ChIJXbiqv8ipXZQRKXb8v-RMw2A'

interface GoogleReview {
  author_name: string
  rating: number
  text: string
  profile_photo_url?: string
  relative_time_description: string
}

export async function GET() {
  if (!GOOGLE_PLACES_API_KEY) {
    return NextResponse.json({ error: 'API Key no configurada' }, { status: 500 })
  }

  try {
    const url = `https://maps.googleapis.com/maps/api/place/details/json?` + 
      `place_id=${PLACE_ID}` +
      `&fields=name,rating,reviews,formatted_address` +
      `&language=es` +
      `&key=${GOOGLE_PLACES_API_KEY}`

    const response = await fetch(url)
    const data = await response.json()

    if (data.error_message) {
      return NextResponse.json({ error: data.error_message }, { status: 400 })
    }

    if (!data.result?.reviews) {
      return NextResponse.json({ error: 'No se encontraron reseñas' }, { status: 404 })
    }

    const reviews = data.result.reviews.map((review: GoogleReview) => ({
      author: review.author_name,
      rating: review.rating,
      text: review.text,
      photo: review.profile_photo_url || '/images/reviews/default-avatar.png',
      time: review.relative_time_description,
      source: "Google Reviews"
    }))

    return NextResponse.json(reviews)
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : 'Error desconocido'
    return NextResponse.json({ error: errorMessage }, { status: 500 })
  }
} 