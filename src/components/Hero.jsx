export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center bg-gradient-to-br from-[#1a4a3a] via-[#2a7c6f] to-[#1a4a3a] overflow-hidden"
    >
      {/* Fondo decorativo */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#c8a96e] rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 w-full">
        <div className="flex flex-col-reverse md:flex-row items-center gap-12">

          {/* Texto */}
          <div className="flex-1 text-center md:text-left">
            <span className="inline-block bg-white/20 text-white text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-6">
              Psicóloga Clínica &amp; Perito Judicial
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6">
              Patricia<br />
              <span className="text-[#c8a96e]">Santander</span><br />
              <span className="text-2xl md:text-3xl font-semibold text-white/80">Riquelme</span>
            </h1>
            <p className="text-white/80 text-lg md:text-xl leading-relaxed max-w-xl mb-10">
              Más de 15 años de experiencia en peritajes psicológicos forenses,
              evaluación clínica y asesoría judicial en Chile.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a
                href="#contacto"
                className="bg-[#c8a96e] hover:bg-[#b8996e] text-white font-bold px-8 py-4 rounded-xl transition-colors shadow-lg"
              >
                Solicitar Peritaje
              </a>
              <a
                href="#sobre"
                className="border-2 border-white/50 hover:border-white text-white font-semibold px-8 py-4 rounded-xl transition-colors"
              >
                Conocer más
              </a>
            </div>

            {/* Stats */}
            <div className="mt-12 flex gap-8 justify-center md:justify-start">
              <div>
                <p className="text-3xl font-bold text-[#c8a96e]">+15</p>
                <p className="text-white/70 text-sm">Años de experiencia</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-[#c8a96e]">+100</p>
                <p className="text-white/70 text-sm">Peritajes realizados</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-[#c8a96e]">100%</p>
                <p className="text-white/70 text-sm">Compromiso ético</p>
              </div>
            </div>
          </div>

          {/* Foto */}
          <div className="flex-shrink-0 flex justify-center">
            <div className="relative">
              <div className="w-64 h-80 md:w-80 md:h-96 rounded-3xl overflow-hidden border-4 border-white/30 shadow-2xl">
                <img
                  src="/images/patty.jpg"
                  alt="Patricia Santander - Psicóloga Clínica y Perito Judicial"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              {/* Badge decorativo */}
              <div className="absolute -bottom-4 -left-4 bg-[#c8a96e] text-white text-xs font-bold px-4 py-2 rounded-xl shadow-lg">
                Reg. Superintendencia<br />de Salud
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
