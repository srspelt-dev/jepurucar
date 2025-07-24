'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';

interface Vehicle {
  id: string;
  name: string;
  description: string;
  price: string;
  images: string[];
  video?: string;
  features: string[];
}

// Datos de vehículos con URLs de Cloudinary (ejemplo)
const vehicles: Vehicle[] = [
  {
    id: 'hb20',
    name: 'HB20',
    description: 'Compacto y eficiente para la ciudad',
    price: '$25.000',
    images: [
      'https://res.cloudinary.com/doblti2c5/image/upload/v1/jepuru/vehiculos/hb20',
      'https://res.cloudinary.com/doblti2c5/image/upload/v1/jepuru/vehiculos/hb20atras',
      'https://res.cloudinary.com/doblti2c5/image/upload/v1/jepuru/vehiculos/hb20costado'
    ],
    features: ['Aire acondicionado', 'Dirección asistida', 'ABS', 'Airbag']
  },
  {
    id: 'coolray',
    name: 'Coolray',
    description: 'SUV compacto con estilo deportivo',
    price: '$35.000',
    images: [
      'https://res.cloudinary.com/doblti2c5/image/upload/v1/jepuru/vehiculos/coolray',
      'https://res.cloudinary.com/doblti2c5/image/upload/v1/jepuru/vehiculos/coolrayatras',
      'https://res.cloudinary.com/doblti2c5/image/upload/v1/jepuru/vehiculos/coolraycostado'
    ],
    video: 'https://res.cloudinary.com/doblti2c5/video/upload/v1/jepuru/videos/jepuru',
    features: ['SUV', 'Tracción 4x4', 'Sistema multimedia', 'Cámara de reversa']
  },
  {
    id: 'gx3',
    name: 'GX3',
    description: 'Utilitario versátil para trabajo',
    price: '$20.000',
    images: [
      'https://res.cloudinary.com/doblti2c5/image/upload/v1/jepuru/vehiculos/gx3',
      'https://res.cloudinary.com/doblti2c5/image/upload/v1/jepuru/vehiculos/gx3atras',
      'https://res.cloudinary.com/doblti2c5/image/upload/v1/jepuru/vehiculos/gx3costado'
    ],
    features: ['Amplio espacio de carga', 'Motor confiable', 'Bajo consumo', 'Mantenimiento económico']
  }
];

interface OptimizedFleetProps {
  title?: string;
  subtitle?: string;
}

export default function OptimizedFleet({ 
  title = "Nuestra Flota de Vehículos", 
  subtitle = "Descubre la mejor opción para tus necesidades" 
}: OptimizedFleetProps) {
  const [selectedVehicle, setSelectedVehicle] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const currentVehicle = vehicles[selectedVehicle];

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === currentVehicle.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? currentVehicle.images.length - 1 : prev - 1
    );
  };

  const nextVehicle = () => {
    setSelectedVehicle((prev) => (prev + 1) % vehicles.length);
    setCurrentImageIndex(0);
    setIsVideoPlaying(false);
  };

  const prevVehicle = () => {
    setSelectedVehicle((prev) => (prev - 1 + vehicles.length) % vehicles.length);
    setCurrentImageIndex(0);
    setIsVideoPlaying(false);
  };

  // Función para obtener URL optimizada de Cloudinary
  const getOptimizedImageUrl = (url: string, width: number = 800) => {
    if (!url.includes('cloudinary.com')) return url;
    
    // Agregar transformaciones de Cloudinary para optimización
    return url.replace('/upload/', `/upload/w_${width},q_auto,f_auto/`);
  };

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">{title}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">{subtitle}</p>
        </div>

        {/* Contenido principal */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Galería de imágenes/video */}
          <div className="relative">
            <div className="aspect-video bg-gray-200 rounded-2xl overflow-hidden shadow-2xl">
              {currentVehicle.video && isVideoPlaying ? (
                <video
                  className="w-full h-full object-cover"
                  controls
                  autoPlay
                  muted
                  loop
                  src={currentVehicle.video}
                />
              ) : (
                <div className="relative w-full h-full">
                  <img
                    src={getOptimizedImageUrl(currentVehicle.images[currentImageIndex])}
                    alt={`${currentVehicle.name} - Vista ${currentImageIndex + 1}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  
                  {/* Controles de imagen */}
                  {currentVehicle.images.length > 1 && (
                    <>
                      <button
                        onClick={prevImage}
                        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all"
                      >
                        <ChevronLeft className="w-6 h-6" />
                      </button>
                      <button
                        onClick={nextImage}
                        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all"
                      >
                        <ChevronRight className="w-6 h-6" />
                      </button>
                    </>
                  )}
                  
                  {/* Botón de video si existe */}
                  {currentVehicle.video && !isVideoPlaying && (
                    <button
                      onClick={() => setIsVideoPlaying(true)}
                      className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/50 transition-all"
                    >
                      <div className="bg-white/90 p-4 rounded-full">
                        <Play className="w-8 h-8 text-blue-600 ml-1" />
                      </div>
                    </button>
                  )}
                </div>
              )}
            </div>

            {/* Miniaturas */}
            {currentVehicle.images.length > 1 && (
              <div className="flex gap-2 mt-4 justify-center">
                {currentVehicle.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-16 h-12 rounded-lg overflow-hidden border-2 transition-all ${
                      index === currentImageIndex 
                        ? 'border-blue-500' 
                        : 'border-gray-300 hover:border-gray-400'
                    }`}
                  >
                    <img
                      src={getOptimizedImageUrl(image, 100)}
                      alt={`Miniatura ${index + 1}`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Información del vehículo */}
          <div className="space-y-6">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">
                {currentVehicle.name}
              </h3>
              <p className="text-xl text-gray-600 mb-4">
                {currentVehicle.description}
              </p>
              <div className="text-2xl font-bold text-blue-600">
                {currentVehicle.price}
              </div>
            </div>

            {/* Características */}
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">
                Características principales
              </h4>
              <div className="grid grid-cols-2 gap-2">
                {currentVehicle.features.map((feature, index) => (
                  <div key={index} className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                    {feature}
                  </div>
                ))}
              </div>
            </div>

            {/* Controles de navegación */}
            <div className="flex gap-4 pt-6">
              <button
                onClick={prevVehicle}
                className="flex-1 bg-gray-800 hover:bg-gray-900 text-white py-3 px-6 rounded-lg font-semibold transition-colors flex items-center justify-center"
              >
                <ChevronLeft className="w-5 h-5 mr-2" />
                Anterior
              </button>
              <button
                onClick={nextVehicle}
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors flex items-center justify-center"
              >
                Siguiente
                <ChevronRight className="w-5 h-5 ml-2" />
              </button>
            </div>

            {/* Indicadores */}
            <div className="flex justify-center gap-2">
              {vehicles.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setSelectedVehicle(index);
                    setCurrentImageIndex(0);
                    setIsVideoPlaying(false);
                  }}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === selectedVehicle 
                      ? 'bg-blue-600' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 