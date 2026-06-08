const WA = 'https://wa.me/56986431293'

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center"
      style={{background: 'linear-gradient(135deg,#1a2e2b 0%,#2a7c6f 60%,#3a9e8e 100%)'}}>
      <div className="relative max-w-6xl mx-auto px-6 py-32 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <span className="inline-block bg-white/20 text-white text-xs font-semibold px-4 py-1.5 rounded-full mb-6 tracking-wide uppercase">
            Psicóloga Clínica | Perito Judicial Forense
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Patricia<br/>
            <span className="text-[#a8dfd5]">Santander</span>
          </h1>
          <p className="text-white/80 text-lg leading-relaxed mb-10">
            Atención psicológica clínica y peritajes forenses en Maipú.
            Acompañamiento terapéutico, psicodiagnóstico y elaboración de
            informes psicológicos para tribunales de familia y causas penales.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href={`${WA}?text=Hola Patricia, quisiera agendar una hora`}
              target="_blank" rel="noreferrer"
              className="bg-white text-[#2a7c6f] font-bold px-8 py-3.5 rounded-full hover:bg-[#e8f4f1] transition-colors shadow-lg">
              Agendar hora
            </a>
            <a href="#sobre"
              className="border-2 border-white text-white font-semibold px-8 py-3.5 rounded-full hover:bg-white/10 transition-colors">
              Conocer más
            </a>
          </div>
          <div className="mt-12 flex gap-8">
            <div>
              <p className="text-3xl font-bold text-white">+10</p>
              <p className="text-white/70 text-sm">Años de experiencia</p>
            </div>
            <div className="w-px bg-white/20"></div>
            <div>
              <p className="text-3xl font-bold text-white">+500</p>
              <p className="text-white/70 text-sm">Pacientes atendidos</p>
            </div>
            <div className="w-px bg-white/20"></div>
            <div>
              <p className="text-3xl font-bold text-white">+100</p>
              <p className="text-white/70 text-sm">Peritajes realizados</p>
            </div>
          </div>
        </div>
        <div className="hidden md:flex justify-center">
          <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-white/30 shadow-2xl">
            <img
              src="/images/patty.jpg"
              alt="Patricia Santander - Psicóloga Clínica"
              className="w-full h-full object-cover object-top"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
