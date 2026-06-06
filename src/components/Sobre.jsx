import { FaUserMd, FaHeart, FaGraduationCap, FaBalanceScale } from 'react-icons/fa'

export default function Sobre() {
  const valores = [
    { icon: <FaHeart color="#2a7c6f" size={22} />, title: 'Empatía', desc: 'Acompañamiento cercano y comprensivo en cada proceso terapéutico.' },
    { icon: <FaUserMd color="#2a7c6f" size={22} />, title: 'Profesionalismo', desc: 'Formación continua y aplicación de enfoques basados en evidencia.' },
    { icon: <FaGraduationCap color="#2a7c6f" size={22} />, title: 'Experiencia', desc: 'Más de 10 años trabajando en clínica, salud mental y contexto forense.' },
    { icon: <FaBalanceScale color="#2a7c6f" size={22} />, title: 'Rigor Técnico', desc: 'Peritajes elaborados con criterios técnicos, éticos y metodológicos.' },
  ]

  return (
    <section id="sobre" style={{ background: '#f5f0eb', padding: '5rem 1.5rem' }}>
      <div className="container-custom">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
          {/* Left */}
          <div>
            <span style={{ color: '#2a7c6f', fontWeight: 700, fontSize: '0.85rem', letterSpacing: '0.1em', textTransform: 'uppercase', display: 'block', marginBottom: '0.75rem' }}>
              Sobre mí
            </span>
            <h2 className="section-title" style={{ fontSize: '2.2rem', marginBottom: '1.2rem' }}>Psicóloga comprometida con tu bienestar</h2>
            <p style={{ color: '#4a6b66', lineHeight: 1.8, marginBottom: '1.2rem', fontSize: '1rem' }}>
              Soy Patricia Santander, psicóloga clínica titulada, con más de 10 años de experiencia atendiendo
              a niños, adolescentes, adultos y familias en diversas problemáticas de salud mental.
            </p>
            <p style={{ color: '#4a6b66', lineHeight: 1.8, marginBottom: '1.5rem', fontSize: '1rem' }}>
              Actualmente me desempeño en el <strong style={{ color: '#1a2e2b' }}>Centro Psicológico Centenario</strong> y
              en el ejercicio independiente como perito judicial, elaborando informes psicológicos y psicosociales
              en materias de familia y penal para tribunales de justicia.
            </p>
            <p style={{ color: '#4a6b66', lineHeight: 1.8, marginBottom: '2rem', fontSize: '1rem' }}>
              Mi enfoque integra modelos cognitivo-conductual, sistémico y humanista, adaptándome a las
              necesidades únicas de cada persona y contexto.
            </p>
            <a href="#contacto" className="btn-primary">Solicitar hora</a>
          </div>

          {/* Right - valores */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.2rem' }}>
            {valores.map(v => (
              <div key={v.title} className="card">
                <div style={{ marginBottom: '0.8rem' }}>{v.icon}</div>
                <h4 style={{ fontWeight: 700, color: '#1a2e2b', marginBottom: '0.4rem', fontSize: '1rem' }}>{v.title}</h4>
                <p style={{ color: '#4a6b66', fontSize: '0.88rem', lineHeight: 1.6 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #sobre .container-custom > div { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}