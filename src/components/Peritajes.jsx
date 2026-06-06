import { FaGavel, FaFileAlt, FaSearch, FaClipboardList, FaChild, FaUsers } from 'react-icons/fa'

const peritajes = [
  { icon: <FaFileAlt size={24} color="#fff" />, title: 'Informe de Daño Psicológico', desc: 'Evaluación y cuantificación del daño psicológico en víctimas de delitos, violencia intrafamiliar y agresiones sexuales.' },
  { icon: <FaUsers size={24} color="#fff" />, title: 'Competencias Parentales', desc: 'Evaluación de las capacidades parentales en procesos de tuición, cuidado personal y relación directa y regular.' },
  { icon: <FaChild size={24} color="#fff" />, title: 'Evaluación de NNA', desc: 'Evaluación psicológica de niños, niñas y adolescentes en contextos de vulneración de derechos y procesos judiciales.' },
  { icon: <FaSearch size={24} color="#fff" />, title: 'Credibilidad de Testimonio', desc: 'Análisis de la credibilidad del relato en causas de abuso sexual infantil y otros delitos contra las personas.' },
  { icon: <FaClipboardList size={24} color="#fff" />, title: 'Informe Psicosocial', desc: 'Evaluación integral del contexto familiar, social y psicológico del peritado para distintos tribunales de justicia.' },
  { icon: <FaGavel size={24} color="#fff" />, title: 'Declaración en Juicio Oral', desc: 'Presentación y defensa técnica de peritajes ante el Tribunal de Juicio Oral en lo Penal y otros tribunales.' },
]

export default function Peritajes() {
  return (
    <section id="peritajes" style={{ background: '#1f5e54', padding: '5rem 1.5rem' }}>
      <div className="container-custom">
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <span style={{ color: '#a8d5cd', fontWeight: 700, fontSize: '0.85rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Peritaje Forense</span>
          <h2 style={{ fontSize: '2.2rem', fontWeight: 700, color: '#ffffff', margin: '0.5rem 0 1rem' }}>Peritajes Psicológicos Judiciales</h2>
          <p style={{ color: '#a8d5cd', fontSize: '1rem', maxWidth: '560px', margin: '0 auto', lineHeight: 1.7 }}>
            Elaboración de informes técnicos y psicosociales para el ámbito judicial, con rigurosidad metodológica y respaldo científico.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
          {peritajes.map(p => (
            <div key={p.title} style={{ background: 'rgba(255,255,255,0.08)', borderRadius: '0.75rem', padding: '1.8rem', border: '1px solid rgba(255,255,255,0.12)', transition: 'background 0.2s' }}>
              <div style={{ width: '48px', height: '48px', background: 'rgba(255,255,255,0.15)', borderRadius: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                {p.icon}
              </div>
              <h3 style={{ color: '#ffffff', fontWeight: 700, fontSize: '1rem', marginBottom: '0.6rem' }}>{p.title}</h3>
              <p style={{ color: '#a8d5cd', fontSize: '0.88rem', lineHeight: 1.7 }}>{p.desc}</p>
            </div>
          ))}
        </div>

        {/* Info box */}
        <div style={{ background: 'rgba(255,255,255,0.1)', borderRadius: '1rem', padding: '2rem', border: '1px solid rgba(255,255,255,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1.5rem' }}>
          <div>
            <h3 style={{ color: '#ffffff', fontWeight: 700, fontSize: '1.2rem', marginBottom: '0.4rem' }}>Tribunales donde me desempeño</h3>
            <p style={{ color: '#a8d5cd', fontSize: '0.9rem', lineHeight: 1.6 }}>
              Tribunal de Juicio Oral en lo Penal • Juzgados de Familia • Fiscales del Ministerio Público • Defensoría Penal Pública
            </p>
          </div>
          <a href="#contacto" style={{ background: '#ffffff', color: '#1f5e54', padding: '0.8rem 2rem', borderRadius: '0.5rem', fontWeight: 700, textDecoration: 'none', fontSize: '0.95rem', whiteSpace: 'nowrap' }}>
            Solicitar peritaje
          </a>
        </div>
      </div>
    </section>
  )
}