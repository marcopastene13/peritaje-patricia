export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center"
      style={{background: "linear-gradient(135deg,#1a2e2b 0%,#2a7c6f 60%,#3a9e8e 100%)"}}>
      <div className="absolute inset-0 opacity-10"
        style={{backgroundImage:"url('data:image/svg+xml,%3Csvg width=60 height=60 viewBox=0 0 60 60 xmlns=http://www.w3.org/2000/svg%3E%3Cg fill=none fill-rule=evenodd%3E%3Cg fill=%23ffffff fill-opacity=0.4%3E%3Cpath d=M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')"}}>
      </div>
      <div className="relative max-w-6xl mx-auto px-6 py-32 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <span className="inline-block bg-white/20 text-white text-xs font-semibold px-4 py-1.5 rounded-full mb-6 tracking-wide">
            Psicologa Clinica | Perito Judicial Forense
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Patricia<br/>
            <span className="text-[#a8dfd5]">Santander</span>
          </h1>
          <p className="text-white/80 text-lg leading-relaxed mb-10">
            Atencion psicologica clinica y peritajes forenses en Maipo.
            Acompanamiento terapeutico, psicodiagnostico y elaboracion de
            informes psicologicos para tribunales de familia y causas penales.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="https://wa.me/56912345678?text=Hola Patricia, quisiera agendar una hora"
              target="_blank" rel="noreferrer"
              className="bg-white text-[#2a7c6f] font-bold px-8 py-3.5 rounded-full hover:bg-[#e8f4f1] transition-colors shadow-lg">
              Agendar hora
            </a>
            <a href="#sobre"
              className="border-2 border-white text-white font-semibold px-8 py-3.5 rounded-full hover:bg-white/10 transition-colors">
              Conocer mas
            </a>
          </div>
          <div className="mt-12 flex gap-8">
            <div>
              <p className="text-3xl font-bold text-white">+10</p>
              <p className="text-white/70 text-sm">Anos de experiencia</p>
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
          <div className="w-80 h-80 rounded-full bg-white/10 border-4 border-white/30 flex items-center justify-center">
            <div className="w-64 h-64 rounded-full bg-white/20 border-2 border-white/40 flex items-center justify-center">
              <svg className="w-32 h-32 text-white/60" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}