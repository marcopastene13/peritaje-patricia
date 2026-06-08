const exp = [
  {
    periodo: "2015 - Actualidad",
    cargo: "Psicologa Clinica",
    lugar: "Centro Psicologico Centenario, Maipú",
    desc: "Atencion psicologica individual, infantil y familiar. Psicodiagnostico, psicoterapia y orientacion a padres. Coordinacion con equipo multidisciplinario."
  },
  {
    periodo: "2018 - Actualidad",
    cargo: "Perito Judicial Forense Independiente",
    lugar: "Tribunales de Familia y Juzgados de Garantia, Region Metropolitana",
    desc: "Elaboracion de informes psicologicos periciales. Evaluacion de dano psicologico, competencias parentales, credibilidad de testimonio y estado mental. Declaracion como testigo experto."
  },
  {
    periodo: "2012 - 2015",
    cargo: "Psicologa Clinica",
    lugar: "CESFAM, Municipalidad de Maipú",
    desc: "Atencion en salud mental primaria. Psicoterapia breve, crisis y derivacion. Trabajo con programas de violencia intrafamiliar y salud mental comunitaria."
  },
]

export default function Trayectoria() {
  return (
    <section id="trayectoria" className="py-24 bg-[#f5f0eb]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-[#2a7c6f] font-semibold text-sm uppercase tracking-widest">Experiencia</span>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-[#1a2e2b]">Trayectoria profesional</h2>
        </div>
        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-[#2a7c6f]/30 hidden md:block"></div>
          <div className="space-y-10">
            {exp.map((e, i) => (
              <div key={i} className="md:flex gap-8 items-start">
                <div className="hidden md:flex flex-col items-center">
                  <div className="w-4 h-4 rounded-full bg-[#2a7c6f] border-4 border-[#f5f0eb] mt-1 z-10"></div>
                </div>
                <div className="bg-white rounded-2xl p-7 flex-1 shadow-sm">
                  <span className="inline-block bg-[#e8f4f1] text-[#2a7c6f] text-xs font-bold px-3 py-1 rounded-full mb-3">{e.periodo}</span>
                  <h3 className="text-lg font-bold text-[#1a2e2b]">{e.cargo}</h3>
                  <p className="text-[#2a7c6f] font-medium text-sm mb-3">{e.lugar}</p>
                  <p className="text-[#4a6b66] text-sm leading-relaxed">{e.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}