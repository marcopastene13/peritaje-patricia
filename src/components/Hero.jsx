import { FaWhatsapp, FaPhone } from 'react-icons/fa'

export default function Hero() {
  return (
    <section id="inicio" style={{
      background: 'linear-gradient(135deg, #1f5e54 0%, #2a7c6f 50%, #3a9e8e 100%)',
      minHeight: '92vh',
      display: 'flex',
      alignItems: 'center',
      padding: '4rem 1.5rem',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Decorative circles */}
      <div style={{ position: 'absolute', top: '-80px', right: '-80px', width: '400px', height: '400px', borderRadius: '50%', background: 'rgba(255,255,255,0.05)' }} />
      <div style={{ position: 'absolute', bottom: '-100px', left: '-60px', width: '300px', height: '300px', borderRadius: '50%', background: 'rgba(255,255,255,0.04)' }} />

      <div className="container-custom" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center', width: '100%' }}>
        {/* Text */}
        <div>
          <span style={{ background: 'rgba(255,255,255,0.15)', color: '#d4ede9', padding: '0.35rem 1rem', borderRadius: '2rem', fontSize: '0.82rem', fontWeight: 600, letterSpacing: '0.05em', display: 'inline-block', marginBottom: '1.5rem' }}>
            PSICÓLOGA CLÍNICA & PERITO JUDICIAL
          </span>

          <h1 style={{ color: '#ffffff', fontSize: 'clamp(2rem, 4vw, 3.2rem)', fontWeight: 800, lineHeight: 1.15, marginBottom: '1.2rem' }}>
            Ps. Patricia<br />
            <span style={{ color: '#a8d5cd' }}>Santander</span>
          </h1>

          <p style={{ color: '#d4ede9', fontSize: '1.1rem', lineHeight: 1.75, marginBottom: '2rem', maxWidth: '480px' }}>
            Psicóloga clínica con amplia experiencia en psicoterapia individual, familiar e infanto-juvenil.
            Especialista en peritajes psicológicos y psicosociales en el ámbito judicial.
          </p>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a href="https://wa.me/56912345678" target="_blank" rel="noreferrer"
              style={{ background: '#25d366', color: '#fff', padding: '0.85rem 1.8rem', borderRadius: '0.5rem', fontWeight: 700, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1rem' }}>
              <FaWhatsapp size={20} /> Agendar consulta
            </a>
            <a href="#sobre"
              style={{ background: 'rgba(255,255,255,0.15)', color: '#fff', padding: '0.85rem 1.8rem', borderRadius: '0.5rem', fontWeight: 600, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1rem', border: '1px solid rgba(255,255,255,0.3)' }}>
              Conocer más
            </a>
          </div>

          {/* Stats */}
          <div style={{ display: 'flex', gap: '2.5rem', marginTop: '3rem', flexWrap: 'wrap' }}>
            {[['10+', 'Años de experiencia'], ['500+', 'Pacientes atendidos'], ['100+', 'Peritajes realizados']].map(([n, l]) => (
              <div key={l}>
                <div style={{ color: '#ffffff', fontWeight: 800, fontSize: '1.8rem', lineHeight: 1 }}>{n}</div>
                <div style={{ color: '#a8d5cd', fontSize: '0.8rem', marginTop: '0.2rem' }}>{l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Card right */}
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div style={{ background: 'rgba(255,255,255,0.12)', backdropFilter: 'blur(10px)', borderRadius: '1.5rem', padding: '2.5rem', border: '1px solid rgba(255,255,255,0.2)', maxWidth: '380px', width: '100%' }}>
            <div style={{ width: '90px', height: '90px', borderRadius: '50%', background: 'rgba(255,255,255,0.2)', margin: '0 auto 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ fontSize: '2.5rem' }}>👩‍💼</span>
            </div>
            <h3 style={{ color: '#ffffff', fontWeight: 700, fontSize: '1.2rem', textAlign: 'center', marginBottom: '1.5rem' }}>Especialidades</h3>
            {[
              '🏥 Psicoterapia Individual y Familiar',
              '👶 Atención Infanto-Juvenil',
              '⚖️ Peritajes Psicosociales',
              '📝 Informes de Daño Psicológico',
              '👨‍👩‍👧 Competencias Parentales',
            ].map(item => (
              <div key={item} style={{ color: '#d4ede9', fontSize: '0.9rem', padding: '0.5rem 0', borderBottom: '1px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #inicio .container-custom { grid-template-columns: 1fr !important; gap: 2rem !important; }
        }
      `}</style>
    </section>
  )
}
