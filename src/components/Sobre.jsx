export default function Sobre() {
  const rasgos = [
    { icon: "❤", title: "Enfoque humanista", desc: "Cada persona es unica. Adapto el proceso terapeutico a tus necesidades reales." },
    { icon: "⚖", title: "Experiencia forense", desc: "Peritajes psicologicos con rigurosidad tecnica y respaldo cientifico para tribunales." },
    { icon: "🤝", title: "Alianza terapeutica", desc: "Construyo un vinculo de confianza para que el proceso sea seguro y transformador." },
    { icon: "📚", title: "Formacion continua", desc: "Actualizacion permanente en psicoterapia, psicodiagnostico y pericia judicial." },
  ]
  return (
    <section id="sobre" className="py-24 bg-[#f5f0eb]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-[#2a7c6f] font-semibold text-sm uppercase tracking-widest">Sobre mi</span>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold text-[#1a2e2b] leading-tight">
              Mas de una decada<br/>acompanando vidas
            </h2>
            <p className="mt-6 text-[#4a6b66] leading-relaxed">
              Soy Patricia Santander, psicologa clinica titulada con mas de 10 años de experiencia
              en atencion psicologica y pericia forense. Trabajo con ninos, adolescentes, adultos
              y familias desde una perspectiva integradora y centrada en la persona.
            </p>
            <p className="mt-4 text-[#4a6b66] leading-relaxed">
              Mi labor clinica se desarrolla en el Centro Psicologico Centenario en Maipu,
              donde ofrezco psicoterapia individual y familiar, ademas de psicodiagnostico.
              En paralelo, ejerzo como perito judicial forense independiente en causas de
              familia y penales, elaborando informes tecnicos para tribunales de justicia.
            </p>
            <a href="#contacto"
              className="inline-block mt-8 bg-[#2a7c6f] text-white font-semibold px-8 py-3 rounded-full hover:bg-[#1f5e54] transition-colors">
              Contactar ahora
            </a>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {rasgos.map((r, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <span className="text-3xl">{r.icon}</span>
                <h3 className="mt-3 font-bold text-[#1a2e2b] text-sm">{r.title}</h3>
                <p className="mt-1 text-[#4a6b66] text-xs leading-relaxed">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}