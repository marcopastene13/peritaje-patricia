const academica = [
  { titulo: "Psicologa", inst: "Universidad de Santiago de Chile (USACH)", anno: "2012" },
]
const posgrado = [
  { titulo: "Diplomado en Psicologia Juridica y Pericia Forense", inst: "Universidad Andres Bello (UNAB)", anno: "2019" },
  { titulo: "Diplomado en Psicoterapia Infanto-Juvenil", inst: "ADIPA", anno: "2017" },
  { titulo: "Diplomado en Terapia Cognitivo Conductual", inst: "Instituto Virtus", anno: "2016" },
  { titulo: "Seminario Internacional de Psicodiagnostico", inst: "Sociedad Chilena de Psicologia Clinica", anno: "2020" },
  { titulo: "Curso: Evaluacion de Competencias Parentales", inst: "ADIPA", anno: "2021" },
  { titulo: "Curso: Intervencion en Crisis y Primeros Auxilios Psicologicos", inst: "OPS/OMS Chile", anno: "2022" },
]

export default function Formacion() {
  return (
    <section id="formacion" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-[#2a7c6f] font-semibold text-sm uppercase tracking-widest">Formacion</span>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-[#1a2e2b]">Educacion y certificaciones</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-bold text-[#1a2e2b] mb-6 flex items-center gap-2">
              <span className="w-8 h-1 bg-[#2a7c6f] rounded inline-block"></span>
              Titulo universitario
            </h3>
            {academica.map((f,i) => (
              <div key={i} className="bg-[#f5f0eb] rounded-xl p-6 mb-4">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-bold text-[#1a2e2b]">{f.titulo}</p>
                    <p className="text-[#4a6b66] text-sm mt-1">{f.inst}</p>
                  </div>
                  <span className="bg-[#2a7c6f] text-white text-xs font-bold px-3 py-1 rounded-full">{f.anno}</span>
                </div>
              </div>
            ))}
          </div>
          <div>
            <h3 className="text-xl font-bold text-[#1a2e2b] mb-6 flex items-center gap-2">
              <span className="w-8 h-1 bg-[#2a7c6f] rounded inline-block"></span>
              Diplomados y cursos
            </h3>
            <div className="space-y-3">
              {posgrado.map((f,i) => (
                <div key={i} className="flex gap-4 items-start border-b border-gray-100 pb-3">
                  <span className="text-[#2a7c6f] font-bold text-sm min-w-12">{f.anno}</span>
                  <div>
                    <p className="font-medium text-[#1a2e2b] text-sm">{f.titulo}</p>
                    <p className="text-[#4a6b66] text-xs mt-0.5">{f.inst}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}