const items = [
  { icon:"🧑", title:"Psicoterapia Individual", desc:"Proceso terapeutico personalizado para adultos y jovenes adultos. Abordamos ansiedad, depresion, duelo, autoestima y desarrollo personal." },
  { icon:"🧒", title:"Psicoterapia Infantil", desc:"Atencion especializada para ninos y adolescentes con dificultades emocionales, conductuales o del desarrollo." },
  { icon:"👪", title:"Terapia Familiar", desc:"Intervencion familiar para mejorar la comunicacion, resolver conflictos y fortalecer los vinculos afectivos." },
  { icon:"🧠", title:"Psicodiagnostico", desc:"Evaluacion psicologica completa mediante test y entrevistas clinicas para comprender el funcionamiento mental y emocional." },
  { icon:"📋", title:"Orientacion y Consejeria", desc:"Apoyo en momentos de crisis, toma de decisiones y situaciones de cambio vital. Sesiones breves y focalizadas." },
  { icon:"📞", title:"Atencion Online", desc:"Sesiones de psicoterapia y orientacion mediante plataformas digitales, con la misma calidad de la atencion presencial." },
]

export default function Servicios() {
  return (
    <section id="servicios" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-[#2a7c6f] font-semibold text-sm uppercase tracking-widest">Atencion clinica</span>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-[#1a2e2b]">Servicios psicologicos</h2>
          <p className="mt-4 text-[#4a6b66] max-w-2xl mx-auto">Ofrezco atencion psicologica integral con enfoque humanista e integrativo, adaptada a cada etapa de la vida.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((s,i) => (
            <div key={i} className="group bg-[#f5f0eb] rounded-2xl p-7 hover:bg-[#2a7c6f] transition-colors duration-300 cursor-default">
              <span className="text-4xl">{s.icon}</span>
              <h3 className="mt-4 text-lg font-bold text-[#1a2e2b] group-hover:text-white transition-colors">{s.title}</h3>
              <p className="mt-2 text-sm text-[#4a6b66] group-hover:text-white/80 leading-relaxed transition-colors">{s.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <a href="https://wa.me/56912345678" target="_blank" rel="noreferrer"
            className="inline-flex items-center gap-2 bg-[#2a7c6f] text-white font-semibold px-8 py-3.5 rounded-full hover:bg-[#1f5e54] transition-colors">
            Solicitar hora de atencion
          </a>
        </div>
      </div>
    </section>
  )
}