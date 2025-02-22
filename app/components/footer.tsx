import { MapPin, Phone, Mail, Facebook, Instagram, Linkedin } from 'lucide-react'
import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-orange-500 to-orange-600 text-white">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {/* Sucursal 1 */}
          <div className="space-y-4 bg-white/10 p-6 rounded-xl backdrop-blur-sm flex flex-col">
            <h3 className="text-2xl font-bold mb-4 border-b border-orange-400 pb-2">Local 1</h3>
            <div className="flex-1">
              <div className="flex items-start space-x-2 mb-4">
                <MapPin className="w-5 h-5 text-orange-200 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium">Calle 18 de Julio</p>
                  <p className="text-orange-100">Asunción, Paraguay</p>
                  <Link 
                    href="https://maps.google.com/?q=-25.324583775414606,-57.62834331691925"
                    target="_blank"
                    className="text-orange-200 hover:text-white text-sm inline-flex items-center gap-1 mt-1
                             transition-colors duration-300"
                  >
                    <MapPin className="w-4 h-4" /> Ver en Google Maps
                  </Link>
                </div>
              </div>
              <div className="flex items-start space-x-2">
                <Phone className="w-5 h-5 text-orange-200 mt-1 flex-shrink-0" />
                <div className="space-y-2">
                  <Link 
                    href="https://wa.me/595961590627"
                    target="_blank"
                    className="hover:text-orange-200 transition-colors flex items-center gap-2 group"
                  >
                    +595 961 590 627
                  </Link>
                </div>
              </div>
            </div>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3606.393481526346!2d-57.6309557887817!3d-25.324574077535853!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x945da9c8bfaab85d%3A0x60c34ce4bffc7629!2sJepuru%20Car%20-%20Rent%20a%20Car!5e0!3m2!1ses!2spy!4v1739066163206!5m2!1ses!2spy"
              className="w-full h-48 rounded-lg mt-auto"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Sucursal 2 */}
          <div className="space-y-4 bg-white/10 p-6 rounded-xl backdrop-blur-sm flex flex-col">
            <h3 className="text-2xl font-bold mb-4 border-b border-orange-400 pb-2">Local 2</h3>
            <div className="flex-1">
              <div className="flex items-start space-x-2 mb-4">
                <MapPin className="w-5 h-5 text-orange-200 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium">Paseo Die Ecke</p>
                  <p className="text-orange-100">Zona Aeropuerto Silvio Pettirossi</p>
                  <Link 
                    href="https://maps.google.com/?q=-25.283241877655648,-57.55996512399201"
                    target="_blank"
                    className="text-orange-200 hover:text-white text-sm inline-flex items-center gap-1 mt-1
                             transition-colors duration-300"
                  >
                    <MapPin className="w-4 h-4" /> Ver en Google Maps
                  </Link>
                </div>
              </div>
              <div className="flex items-start space-x-2">
                <Phone className="w-5 h-5 text-orange-200 mt-1 flex-shrink-0" />
                <div className="space-y-2">
                  <Link 
                    href="https://wa.me/595974302500"
                    target="_blank"
                    className="hover:text-orange-200 transition-colors flex items-center gap-2 group"
                  >
                    +595 974 302 500
                  </Link>
                </div>
              </div>
            </div>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3607.623674830587!2d-57.55996512399201!3d-25.283241877655648!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x945da9e4f37b49cb%3A0x5bcce673dd30f826!2sJepuru%20Car%20-%20Paseo%20Die%20Ecke!5e0!3m2!1ses!2spy!4v1738714060226!5m2!1ses!2spy"
              className="w-full h-48 rounded-lg mt-auto"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Información de Contacto y Redes Sociales */}
          <div className="space-y-8 bg-white/10 p-6 rounded-xl backdrop-blur-sm">
            <div>
              <h3 className="text-2xl font-bold mb-4 border-b border-orange-400 pb-2">Contacto</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Mail className="w-5 h-5 text-orange-200" />
                  <a href="mailto:reservas@jepurucar.com.py" className="hover:text-orange-200 transition-colors">
                    reservas@jepurucar.com.py
                  </a>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Horario de Atención</h4>
                  <p className="text-orange-100">Lunes a Viernes: 08:00 a 17:30</p>
                  <p className="text-orange-100">Sábados: 08:00 a 12:00 hs</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Síguenos en</h3>
              <div className="flex space-x-4">
                <a 
                  href="https://www.facebook.com/jepurucar" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-orange-200 transition-transform hover:scale-110" 
                  aria-label="Facebook"
                >
                  <Facebook className="w-6 h-6" />
                </a>
                <a 
                  href="https://www.instagram.com/jepurucar" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-orange-200 transition-transform hover:scale-110" 
                  aria-label="Instagram"
                >
                  <Instagram className="w-6 h-6" />
                </a>
                <a 
                  href="https://x.com/jepurucar" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-orange-200 transition-transform hover:scale-110" 
                  aria-label="X (Twitter)"
                >
                  <svg 
                    className="w-5 h-5" 
                    fill="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
                <a 
                  href="https://www.linkedin.com/company/jepurucar-rent-a-car" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-orange-200 transition-transform hover:scale-110" 
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a 
                  href="https://www.tiktok.com/@jepururentacar" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-orange-200 transition-transform hover:scale-110" 
                  aria-label="TikTok"
                >
                  <svg 
                    className="w-6 h-6" 
                    fill="currentColor" 
                    viewBox="0 0 448 512"
                  >
                    <path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="mt-12 pt-8 border-t border-orange-400/30">
          <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-orange-100">
            <p>Reservas a: <a href="mailto:reservas@jepurucar.com.py" 
                             className="text-orange-200 hover:text-white transition-colors">
                             reservas@jepurucar.com.py
                           </a>
            </p>
            <p>&copy; {new Date().getFullYear()} Jepuru Car. Todos los derechos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  )
} 