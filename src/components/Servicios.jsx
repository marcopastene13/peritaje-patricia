
import { FaChild, FaUsers, FaUserAlt, FaHeart, FaBrain } from 'react-icons/fa'

const servicios = [
  {
    icon: <FaUserAlt color="#2a7c6f" size={28} />,
    title: 'Psicoterapia Individual',
    desc: 'Atención psicológica para adultos y jóvenes adultos en diversas problemáticas: ansiedad, depresión, duelo, trauma y más.',
    tags: ['Adultos', 'Adolescentes'],
  },
  {
    icon: <FaChild color="#2a7c6f" size={28} />,
    title: 'Atención Infanto-Juvenil',
    desc: 'Psicoterapia especializada para niños y adolescentes, con enfoque lúdico y adaptado a cada etapa del desarrollo.',
    tags: ['Niños', 'Adolescentes'],
  },
  {
    icon: <FaUsers color="#2a7c6f" size={28} />,
    title: 'Terapia de Familia',
    desc: 'Intervención familiar para mejorar la comunicación, resolver conflictos y fortalecer los vínculos relacionales.',
    tags: ['Familias', 'Parejas'],
  },
  {
    icon: <FaHeart color="#2a7c6f" size={28} />,
    title: 'Terapia de Pareja',
    desc: 'Espacio terapéutico para abordar dificultades en la relación de pareja: comunicación, crisis, infidelidad y separación.',
    tags: ['Parejas'],
  },
  {
    icon: <FaBrain color="#2a7c6f" size={28} />,
    title: 'Psicodiagnóstico',
    desc: 'Evaluación psicológica completa mediante entrevistas clínicas y tests psicológicos estandarizados.',
    tags: ['Niños', 'Adultos'],
  },
]

export default function Servicios() {
  return (
    <section id="servicios" style={{ background: '#ffffff', padding: '5rem 1.5rem' }}>
      <div className="container-custom">
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <span style={{ color: '#2a7c6f', fontWeight: 700, fontSize: '0.85rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Servicios Clínicos</span>
          <h2 style={{ fontSize: '2.2rem', fontWeight: 700, color: '#1a2e2b', margin: '0.5rem 0 1rem' }}>Atención psicológica integral</h2>
          <p style={{ color: '#4a6b66', fontSize: '1rem', maxWidth: '560px', margin: '0 auto', lineHeight: 1.7 }}>
            Brindo atención psicológica personalizada a personas de todas las edades, con un enfoque humano, profesional y basado en evidencia.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
          {servicios.map(s => (
            <div key={s.title} className="card" style={{ borderTop: '3px solid #2a7c6f' }}>
              <div style={{ marginBottom: '1rem' }}>{s.icon}</div>
              <h3 style={{ fontWeight: 700, color: '#1a2e2b', marginBottom: '0.6rem', fontSize: '1.1rem' }}>{s.title}</h3>
              <p style={{ color: '#4a6b66', fontSize: '0.9rem', lineHeight: 1.7, marginBottom: '1rem' }}>{s.desc}</p>
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                {s.tags.map(t => (
                  <span key={t} style={{ background: '#e8f4f1', color: '#2a7c6f', padding: '0.2rem 0.7rem', borderRadius: '2rem', fontSize: '0.78rem', fontWeight: 600 }}>{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <a href="#contacto" className="btn-primary">Agendar una consulta</a>
        </div>
      </div>
    </section>
  )
}
