"use client"

import Link from 'next/link'

const sections = [
  {
    title: 'Datos y autorización',
    content: [
      'El cliente autoriza a JEPURU CAR EAS, conforme a la Ley 6534/2020 de Protección de Datos Personales Crediticios de Paraguay, a consultar información crediticia y patrimonial para evaluar su solvencia.'
    ]
  },
  {
    title: 'Obligaciones del cliente',
    content: [
      'Mantener la tenencia del vehículo durante todo el contrato. Las reservas web están sujetas a verificación; la autorización final queda a criterio de la empresa.',
      'No hay reembolso por devolución anticipada.',
      'Pagar íntegramente el alquiler al inicio. Para extensiones, avisar con 6 horas de anticipación y pagar antes del horario de devolución; de lo contrario, se cobra la totalidad de la garantía.',
      'Extensiones: hasta 3 horas adicionales (dentro de horarios de atención). Superado, se cobra tarifa diaria.',
      'Presentar documentación requerida: DNI/pasaporte, licencia vigente, edad 25+ (salvo autorización). Conductores adicionales deben registrarse al inicio.',
      'Ante desperfectos o incidentes, informar a la empresa; reparaciones solo en talleres autorizados.',
      'Se firma pagaré según valor del vehículo como garantía; se devuelve una vez verificado el estado (hasta 72 h hábiles).'
    ]
  },
  {
    title: 'Prohibiciones',
    content: [
      'Cruzar a Brasil (Foz de Iguazú, Ponta Porã) sin autorización previa. Máximo 35 km desde la frontera; incumplir implica Gs. 950.000 por día.',
      'Realizar mantenimiento o reparaciones por cuenta propia. Multa base Gs. 1.000.000 más costos de restitución.',
      'Fumar o generar olores fuertes en el interior. Puede cobrarse hasta la totalidad de la garantía (máx. USD 500).',
      'Devolver el vehículo con suciedad excesiva: se cobra limpieza según modelo.',
      'Perder llaves, documentos, chapas u objetos del vehículo se cobra al cliente. Multas de tránsito posteriores también pueden ser cobradas.',
      'Si el vehículo es demorado, el cliente asume gastos de liberación y tasas.'
    ]
  },
  {
    title: 'Seguro y siniestros',
    content: [
      'Comunicar siniestros al número provisto al entregar el vehículo.',
      'Realizar reporte policial con detalles de lugar, fecha y hora; plazo máximo de entrega de constancia: 6 horas.',
      'Tomar fotos del sitio y del estado del vehículo (4 lados y daños).',
      'Proveer información para peritaje; la cobertura aplica según confirmación de JEPURU CAR EAS.',
      'Si se constata mal uso y el vehículo queda fuera de servicio, el cliente paga canon diario por indisponibilidad (según modelo).',
      'La cobertura pierde validez si conduce una persona no autorizada o sin licencia válida.'
    ]
  },
  {
    title: 'Entrega y devolución',
    content: [
      'Al entregar y devolver se verifica estado, daños, faltantes, kilometraje y combustible con fotos.',
      'La verificación puede tardar hasta 72 h; si todo está conforme, se devuelve la garantía y documentación.',
      'Es obligatoria la presentación de facturas de combustible con octanaje correcto (97 gasolina o Diesel Podium). Incumplir puede implicar cobro total de la garantía.'
    ]
  },
  {
    title: 'Condiciones generales',
    content: [
      'Servicio de entrega a domicilio: se cotiza logística; la garantía se recibe como seña y no es reembolsable en caso de cancelación al llegar al destino.',
      'El valor de alquiler y logística puede abonarse en destino para entregas a domicilio.',
      'Reserva No Show: si el cliente no se presenta en fecha/hora acordadas, se cobra el total de la garantía. Aplica también si cancela luego de la reserva efectiva.',
      'Regreso anticipado: no se devuelve importe por días no usados.',
      'Tarifas con límite de km: se cobra monto por km excedido según modelo.'
    ]
  }
]

export default function TerminosPage() {
  return (
    <div className="bg-orange-50 min-h-screen">
      <header className="bg-gradient-to-r from-orange-500 to-orange-600 text-white py-12 shadow-lg">
        <div className="container mx-auto px-4">
          <p className="text-sm uppercase tracking-wide opacity-80 mb-2">
            Jepuru CAR EAS
          </p>
          <h1 className="text-3xl md:text-4xl font-bold">Términos y Condiciones</h1>
          <p className="mt-4 max-w-3xl text-white/90">
            Consulta y uso de datos, requisitos para alquiler y políticas generales
            vigentes para todos los vehículos.
          </p>
          <div className="mt-6 flex flex-wrap gap-3 text-sm">
            <span className="bg-white/15 px-3 py-1 rounded-full">Calle Fortín Galpón casi calle 8 de setiembre</span>
            <span className="bg-white/15 px-3 py-1 rounded-full">Paraguay</span>
            <span className="bg-white/15 px-3 py-1 rounded-full">Tel: +595 983 214 111</span>
            <span className="bg-white/15 px-3 py-1 rounded-full">reservas@jepurucar.com.py</span>
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="/reservas/TERMINOS_CONDI_2026.pdf"
              download
              className="inline-flex items-center gap-2 bg-white text-orange-600 font-semibold px-4 py-2 rounded-full shadow hover:shadow-md transition"
            >
              Descargar PDF
            </a>
            <Link
              href="/reservas"
              className="inline-flex items-center gap-2 border border-white/70 text-white font-semibold px-4 py-2 rounded-full hover:bg-white/10 transition"
            >
              Ir a reservas
            </Link>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="bg-white shadow-lg rounded-2xl p-6 md:p-10 space-y-10">
          {sections.map((section, idx) => (
            <section key={section.title} className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-orange-100 text-orange-600 font-bold flex items-center justify-center">
                  {idx + 1}
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-gray-900">{section.title}</h2>
                </div>
              </div>
              <ul className="space-y-3 pl-1 md:pl-4 text-gray-700 leading-relaxed">
                {section.content.map((item, itemIdx) => (
                  <li key={itemIdx} className="flex gap-2">
                    <span className="mt-1 text-orange-500">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          ))}

          <section className="rounded-xl bg-orange-50 border border-orange-100 p-6">
            <h3 className="text-lg font-semibold text-orange-700 mb-2">Cobertura geográfica y uso responsable</h3>
            <p className="text-gray-700 leading-relaxed">
              Toda circulación debe respetar las restricciones de frontera, las licencias de conducción
              autorizadas y las condiciones indicadas en este documento. El uso indebido puede
              implicar cobros adicionales, pérdida de cobertura y cargos por daños o indisponibilidad.
            </p>
          </section>
        </div>
      </main>
    </div>
  )
}
