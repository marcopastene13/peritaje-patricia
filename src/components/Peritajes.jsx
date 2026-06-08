const tipos = [
  { title:"Dano psicologico", desc:"Evaluacion del impacto psicologico en victimas de delitos, accidentes o situaciones traumaticas para causas penales y civiles." },
  { title:"Competencias parentales", desc:"Evaluacion de las habilidades y capacidades de progenitores en contexto de tuicion, visitas y cuidado personal de hijos." },
  { title:"Credibilidad del testimonio", desc:"Evaluacion de la coherencia, consistencia y veracidad del relato en victimas y testigos, especialmente en menores." },
  { title:"Estado mental", desc:"Evaluacion psicologica para determinar el estado mental al momento de los hechos en causas penales." },
  { title:"Evaluacion de menores", desc:"Entrevista y evaluacion psicologica especializada de ninos y adolescentes en contexto judicial." },
  { title:"Informes y declaracion en juicio", desc:"Elaboracion de informes periciales y participacion como testigo experto en audiencias de tribunales de familia y penal." },
]

export default function Peritajes() {
  return (
    <section id="peritajes" className="py-24 bg-[#1a2e2b]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-[#a8dfd5] font-semibold text-sm uppercase tracking-widest">Pericia forense</span>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-white">Peritaje Judicial Forense</h2>
          <p className="mt-4 text-white/60 max-w-2xl mx-auto">Elaboro informes periciales psicologicos con rigor tecnico-cientifico para tribunales de familia y juzgados de garantia.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {tipos.map((t,i) => (
            <div key={i} className="border border-white/10 rounded-2xl p-7 hover:border-[#2a7c6f] hover:bg-white/5 transition-all">
              <div className="w-10 h-1 bg-[#2a7c6f] rounded mb-5"></div>
              <h3 className="text-white font-bold text-base mb-2">{t.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">{t.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-16 bg-[#2a7c6f]/20 border border-[#2a7c6f]/30 rounded-2xl p-8 text-center">
          <h3 className="text-white font-bold text-xl mb-2">Necesitas un peritaje psicologico?</h3>
          <p className="text-white/70 mb-6">Contactame para evaluar tu caso y elaborar el informe pericial que necesitas.</p>
          <a href="https://wa.me/56986431293?text=Hola Patricia, necesito un peritaje psicologico"
            target="_blank" rel="noreferrer"
            className="inline-flex items-center gap-2 bg-[#2a7c6f] text-white font-semibold px-8 py-3.5 rounded-full hover:bg-[#3a9e8e] transition-colors">
            Consultar sobre peritaje
          </a>
        </div>
      </div>
    </section>
  )
}