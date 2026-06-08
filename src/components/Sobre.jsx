export default function Sobre() {
  return (
    <section id="sobre" className="py-20 bg-[#f5f0e8]">
      <div className="max-w-6xl mx-auto px-6">

        {/* Layout dos columnas */}
        <div className="flex flex-col lg:flex-row items-center gap-14">

          {/* Foto con decoración */}
          <div className="flex-shrink-0 relative">
            <div className="w-72 h-96 lg:w-80 lg:h-[26rem] rounded-3xl overflow-hidden shadow-2xl border-4 border-[#2a7c6f]/20">
              <img
                src="/images/patty.jpg"
                alt="Patricia Santander Riquelme - Psicóloga Clínica"
                className="w-full h-full object-cover object-top"
              />
            </div>
            {/* Tarjeta flotante credencial */}
            <div className="absolute -bottom-6 -right-6 bg-[#2a7c6f] text-white rounded-2xl px-5 py-4 shadow-xl max-w-[180px]">
              <p className="text-xs font-semibold uppercase tracking-wide opacity-80">Registro</p>
              <p className="text-sm font-bold leading-snug mt-1">Superintendencia de Salud Chile</p>
            </div>
            {/* Acento decorativo */}
            <div className="absolute -top-4 -left-4 w-20 h-20 bg-[#c8a96e]/30 rounded-full blur-xl" />
          </div>

          {/* Texto */}
          <div className="flex-1">
            <span className="inline-block text-[#2a7c6f] text-sm font-semibold tracking-widest uppercase mb-3">
              Sobre mí
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#1a2e2b] mb-6 leading-tight">
              Psicóloga Clínica &amp;<br />
              <span className="text-[#2a7c6f]">Perito Judicial</span>
            </h2>
            <p className="text-[#4a6b66] text-lg leading-relaxed mb-5">
              Soy Patricia Santander Riquelme, psicóloga clínica con más de 15 años de trayectoria
              profesional en el ámbito de la salud mental y la psicología forense en Chile.
            </p>
            <p className="text-[#4a6b66] leading-relaxed mb-8">
              Me especializo en la realización de peritajes psicológicos para tribunales de familia,
              penales y civiles, aportando rigor técnico, ética profesional y una mirada humana
              a cada caso. Mi trabajo contribuye directamente a la administración de justicia,
              siempre con el bienestar de las personas como eje central.
            </p>

            {/* Datos destacados */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-white rounded-xl p-4 shadow-sm border border-[#2a7c6f]/10">
                <p className="text-2xl font-bold text-[#2a7c6f]">+15 años</p>
                <p className="text-sm text-[#4a6b66] mt-1">Experiencia clínica y forense</p>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-sm border border-[#2a7c6f]/10">
                <p className="text-2xl font-bold text-[#2a7c6f]">+100</p>
                <p className="text-sm text-[#4a6b66] mt-1">Peritajes en tribunales</p>
              </div>
            </div>

            <a
              href="#contacto"
              className="inline-block bg-[#2a7c6f] hover:bg-[#1f6459] text-white font-semibold px-8 py-3.5 rounded-xl transition-colors shadow-md"
            >
              Contactar ahora
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
