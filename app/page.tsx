import { ImageSlider } from './components/image-slider'
import { Requirements } from './components/requirements'
import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <ImageSlider />
      <div className="py-16 text-center">
        <h1 className="text-4xl font-bold mb-8 text-orange-500">Bienvenidos a Jepuru Car</h1>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Disfruta de la libertad de viajar con nuestro servicio premium de alquiler de vehículos.
          Ya sea para negocios o placer, tenemos el vehículo perfecto para ti.
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-4 mb-12">
          <Link 
            href="/vehicles" 
            className="bg-orange-500 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-orange-600 transition duration-300"
          >
            Ver Vehículos Disponibles
          </Link>
          <Link 
            href="/contact" 
            className="bg-white text-orange-500 border-2 border-orange-500 px-6 py-3 rounded-full text-lg font-semibold hover:bg-orange-50 transition duration-300"
          >
            Contactar Ahora
          </Link>
        </div>

      </div>
      <section className="bg-orange-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-orange-500 
                         transform transition-all duration-300 hover:scale-105">
            Tipos de Vehículos Disponibles
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Link 
              href="/vehicles?type=COMPACT" 
              className="group relative overflow-hidden rounded-xl shadow-lg 
                        transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-orange-500/10 to-orange-600/10
                            group-hover:from-orange-500/85 group-hover:to-orange-600/85 
                            transition-all duration-500 ease-in-out z-10" />
              <Image
                src="/images/vehiculos/hb20.jpeg"
                alt="Autos"
                width={400}
                height={300}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-6 z-20">
                <h3 className="text-2xl font-bold mb-4 transform transition-all duration-300 
                             group-hover:scale-110 group-hover:-translate-y-2 drop-shadow-lg">
                  Autos
                </h3>
                <p className="text-center opacity-0 group-hover:opacity-100 transition-all duration-300 
                            transform translate-y-4 group-hover:translate-y-0 drop-shadow-lg">
                  i10, HB20, Etios, Gol, Soluto y más
                </p>
              </div>
            </Link>

            <Link 
              href="/vehicles?type=SUV" 
              className="group relative overflow-hidden rounded-xl shadow-lg 
                        transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-orange-500/10 to-orange-600/10
                            group-hover:from-orange-500/85 group-hover:to-orange-600/85 
                            transition-all duration-500 ease-in-out z-10" />
              <Image
                src="/images/vehiculos/coolray.jpeg"
                alt="Camionetas"
                width={400}
                height={300}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-6 z-20">
                <h3 className="text-2xl font-bold mb-4 transform transition-all duration-300 
                             group-hover:scale-110 group-hover:-translate-y-2 drop-shadow-lg">
                  Camionetas
                </h3>
                <p className="text-center opacity-0 group-hover:opacity-100 transition-all duration-300 
                            transform translate-y-4 group-hover:translate-y-0 drop-shadow-lg">
                  HB20X, Tivoli, Coolray, JIM 4X4 y más
                </p>
              </div>
            </Link>

            <Link 
              href="/vehicles?type=VAN" 
              className="group relative overflow-hidden rounded-xl shadow-lg 
                        transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-orange-500/10 to-orange-600/10
                            group-hover:from-orange-500/85 group-hover:to-orange-600/85 
                            transition-all duration-500 ease-in-out z-10" />
              <Image
                src="/images/vehiculos/h1.jpeg"
                alt="Van"
                width={400}
                height={300}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-6 z-20">
                <h3 className="text-2xl font-bold mb-4 transform transition-all duration-300 
                             group-hover:scale-110 group-hover:-translate-y-2 drop-shadow-lg">
                  Van
                </h3>
                <p className="text-center opacity-0 group-hover:opacity-100 transition-all duration-300 
                            transform translate-y-4 group-hover:translate-y-0 drop-shadow-lg">
                  Hyundai H1
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>
      <Requirements />
    </div>
  )
}

