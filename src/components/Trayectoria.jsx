import { FaBriefcase } from 'react-icons/fa'

const experiencia = [
  {
    periodo: '2018 - Presente',
    cargo: 'Psicóloga Clínica',
    lugar: 'Centro Psicológico Centenario',
    desc: 'Atención psicológica individual, familiar e infanto-juvenil. Aplicación de evaluaciones psicodiagnósticas. Coordinación de intervenciones multidisciplinarias.',
    tipo: 'Clínico',
  },
  {
    periodo: '2016 - Presente',
    cargo: 'Perito Judicial Independiente',
    lugar: 'Ejercicio Independiente',
    desc: 'Elaboración de informes psicológicos y psicosociales para el Tribunal de Juicio Oral en lo Penal, Juzgados de Familia y Fiscalía. Declaración en juicio oral como perito.',
    tipo: 'Forense',
  },
  {
    periodo: '2014 - 2018',
    cargo: 'Psicóloga Clínica',
    lugar: 'CESFAM Maipú',
    desc: 'Atención de pacientes en programa de salud mental, intervenciones en crisis, grupos terapéuticos y apoyo a equipos de salud.',
    tipo: 'Clínico',
  },
  {
    periodo: '2013 - 2015',
    cargo: 'Psicóloga Infantojuvenil',
    lugar: 'OPD Maipú',
    desc: 'Atención psicológica a niños y adolescentes en situación de vulneración de derechos. Trabajo coordinado con el sistema judicial y protección de la infancia.',
    tipo: 'Social',
  },
]

export default function Trayectoria() {
  const colorTipo = { 'Clínico': '#2a7c6f', 'Forense': '#1f5e54', 'Social': '#3a9e8e' }

  return (
    <section id="trayectoria" style={{ background: '#f5f0eb', padding: '5rem 1.5rem' }}>
      <div className="container-custom">
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <span style={{ color: '#2a7c6f', fontWeight: 700, fontSize: '0.85rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Trayectoria</span>
          <h2 style={{ fontSize: '2.2rem', fontWeight: 700, color: '#1a2e2b', margin: '0.5rem 0 1rem' }}>Experiencia Profesional</h2>
          <p style={{ color: '#4a6b66', fontSize: '1rem', maxWidth: '540px', margin: '0 auto', lineHeight: 1.7 }}>
            Más de una década de trayectoria en salud mental clínica y el ámbito forense.
          </p>
        </div>

        <div style={{ position: 'relative', maxWidth: '750px', margin: '0 auto' }}>
          {/* Timeline line */}
          <div style={{ position: 'absolute', left: '20px', top: 0, bottom: 0, width: '2px', background: '#2a7c6f', opacity: 0.3 }} />

          {experiencia.map((e, i) => (
            <div key={i} style={{ display: 'flex', gap: '2rem', marginBottom: '2.5rem', position: 'relative' }}>
              {/* Dot */}
              <div style={{ width: '42px', height: '42px', borderRadius: '50%', background: colorTipo[e.tipo] || '#2a7c6f', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, zIndex: 1 }}>
                <FaBriefcase color="#fff" size={16} />
              </div>
              <div className="card" style={{ flex: 1 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.4rem' }}>
                  <div>
                    <h3 style={{ fontWeight: 700, color: '#1a2e2b', fontSize: '1.05rem' }}>{e.cargo}</h3>
                    <span style={{ color: '#2a7c6f', fontWeight: 600, fontSize: '0.9rem' }}>{e.lugar}</span>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '0.3rem' }}>
                    <span style={{ background: '#e8f4f1', color: '#2a7c6f', padding: '0.2rem 0.7rem', borderRadius: '2rem', fontSize: '0.75rem', fontWeight: 600 }}>{e.tipo}</span>
                    <span style={{ color: '#4a6b66', fontSize: '0.82rem' }}>{e.periodo}</span>
                  </div>
                </div>
                <p style={{ color: '#4a6b66', fontSize: '0.88rem', lineHeight: 1.7, marginTop: '0.5rem' }}>{e.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}