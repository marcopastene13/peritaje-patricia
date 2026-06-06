import { FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaHeart } from 'react-icons/fa'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer style={{ background: '#111e1c', color: '#a8d5cd', padding: '3rem 1.5rem 1.5rem' }}>
      <div className="container-custom">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '2.5rem', paddingBottom: '2.5rem', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
          {/* Brand */}
          <div>
            <h3 style={{ color: '#ffffff', fontWeight: 700, fontSize: '1.1rem', marginBottom: '0.5rem' }}>Ps. Patricia Santander</h3>
            <p style={{ fontSize: '0.82rem', color: '#a8d5cd', marginBottom: '0.3rem' }}>Psicóloga Clínica & Perito Judicial</p>
            <p style={{ fontSize: '0.82rem', color: '#a8d5cd', marginBottom: '1.2rem' }}>Maipú, Santiago, Chile</p>
            <p style={{ fontSize: '0.82rem', lineHeight: 1.7, color: '#6e9e99' }}>
              Comprometida con el bienestar emocional y la salud mental de las personas, con la rigurosidad del ejercicio forense.
            </p>
          </div>

          {/* Nav */}
          <div>
            <h4 style={{ color: '#ffffff', fontWeight: 700, fontSize: '0.95rem', marginBottom: '1rem' }}>Navegación</h4>
            {['#sobre|Sobre mí', '#servicios|Servicios Clínicos', '#peritajes|Peritajes', '#trayectoria|Trayectoria', '#formacion|Formación', '#contacto|Contacto'].map(item => {
              const [href, label] = item.split('|')
              return (
                <a key={href} href={href} style={{ display: 'block', color: '#a8d5cd', textDecoration: 'none', fontSize: '0.88rem', marginBottom: '0.5rem', transition: 'color 0.2s' }}
                  onMouseEnter={e => e.target.style.color = '#ffffff'}
                  onMouseLeave={e => e.target.style.color = '#a8d5cd'}>
                  {label}
                </a>
              )
            })}
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ color: '#ffffff', fontWeight: 700, fontSize: '0.95rem', marginBottom: '1rem' }}>Contacto</h4>
            {[
              { icon: <FaWhatsapp size={14} />, text: '+56 9 1234 5678' },
              { icon: <FaEnvelope size={14} />, text: 'patricia@psicologia.cl' },
              { icon: <FaMapMarkerAlt size={14} />, text: 'Maipú, Santiago, Chile' },
            ].map(({ icon, text }) => (
              <div key={text} style={{ display: 'flex', gap: '0.6rem', alignItems: 'center', marginBottom: '0.7rem' }}>
                <span style={{ color: '#3a9e8e' }}>{icon}</span>
                <span style={{ fontSize: '0.85rem' }}>{text}</span>
              </div>
            ))}

            <a href="https://wa.me/56912345678" target="_blank" rel="noreferrer"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: '#25d366', color: '#fff', padding: '0.6rem 1.2rem', borderRadius: '0.4rem', fontWeight: 600, textDecoration: 'none', fontSize: '0.85rem', marginTop: '1rem' }}>
              <FaWhatsapp size={16} /> WhatsApp
            </a>
          </div>
        </div>

        <div style={{ paddingTop: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem' }}>
          <p style={{ fontSize: '0.8rem', color: '#4a6b66' }}>
            © {year} Patricia Santander — Todos los derechos reservados.
          </p>
          <p style={{ fontSize: '0.8rem', color: '#4a6b66', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
            Hecho con <FaHeart color="#2a7c6f" size={12} /> en Chile
          </p>
        </div>
      </div>
    </footer>
  )
}