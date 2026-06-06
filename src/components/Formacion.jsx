import { FaGraduationCap, FaCertificate } from 'react-icons/fa'

const formacion = [
  { tipo: 'Pregrado', titulo: 'Licenciatura en Psicología', inst: 'Universidad de Santiago de Chile', anio: '2012' },
  { tipo: 'Diplomado', titulo: 'Diplomado en Psicología Forense y Peritaje Judicial', inst: 'Universidad Andrés Bello (UNAB)', anio: '2017' },
  { tipo: 'Diplomado', titulo: 'Diplomado en Psicoterapia Infanto-Juvenil', inst: 'ADIPA', anio: '2019' },
  { tipo: 'Diplomado', titulo: 'Diplomado en Terapia Cognitivo-Conductual', inst: 'Instituto Virtus', anio: '2021' },
  { tipo: 'Seminario', titulo: 'Seminario Evaluación de Credibilidad de Testimonio', inst: 'Fiscalía de Chile', anio: '2018' },
  { tipo: 'Curso', titulo: 'Evaluación de Competencias Parentales', inst: 'Servicio Nacional de Menores (SENAME)', anio: '2016' },
  { tipo: 'Curso', titulo: 'Intervención en Crisis y Trauma', inst: 'MINSAL', anio: '2020' },
]

export default function Formacion() {
  const colorTipo = { 'Pregrado': '#1f5e54', 'Diplomado': '#2a7c6f', 'Seminario': '#3a9e8e', 'Curso': '#4a6b66' }

  return (
    <section id="formacion" style={{ background: '#ffffff', padding: '5rem 1.5rem' }}>
      <div className="container-custom">
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <span style={{ color: '#2a7c6f', fontWeight: 700, fontSize: '0.85rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Formación Académica</span>
          <h2 style={{ fontSize: '2.2rem', fontWeight: 700, color: '#1a2e2b', margin: '0.5rem 0 1rem' }}>Preparación y Especialización</h2>
          <p style={{ color: '#4a6b66', fontSize: '1rem', maxWidth: '540px', margin: '0 auto', lineHeight: 1.7 }}>
            Formación continua en psicología clínica, forense e infanto-juvenil para brindar la mejor atención.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.2rem' }}>
          {formacion.map((f, i) => (
            <div key={i} className="card" style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
              <div style={{ width: '44px', height: '44px', borderRadius: '0.5rem', background: colorTipo[f.tipo] || '#2a7c6f', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                {f.tipo === 'Pregrado' ? <FaGraduationCap color="#fff" size={20} /> : <FaCertificate color="#fff" size={18} />}
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '0.5rem', marginBottom: '0.2rem' }}>
                  <span style={{ background: '#e8f4f1', color: colorTipo[f.tipo] || '#2a7c6f', padding: '0.15rem 0.6rem', borderRadius: '2rem', fontSize: '0.72rem', fontWeight: 700 }}>{f.tipo}</span>
                  <span style={{ color: '#4a6b66', fontSize: '0.78rem', fontWeight: 600 }}>{f.anio}</span>
                </div>
                <h4 style={{ fontWeight: 700, color: '#1a2e2b', fontSize: '0.95rem', marginBottom: '0.2rem', lineHeight: 1.4 }}>{f.titulo}</h4>
                <p style={{ color: '#4a6b66', fontSize: '0.82rem' }}>{f.inst}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}