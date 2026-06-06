import { useState } from 'react'
import { FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaClock, FaPhone } from 'react-icons/fa'

export default function Contacto() {
  const [form, setForm] = useState({ nombre: '', email: '', telefono: '', motivo: '', mensaje: '' })
  const [enviado, setEnviado] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setEnviado(true)
  }

  return (
    <section id="contacto" style={{ background: '#f5f0eb', padding: '5rem 1.5rem' }}>
      <div className="container-custom">
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <span style={{ color: '#2a7c6f', fontWeight: 700, fontSize: '0.85rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Contacto</span>
          <h2 style={{ fontSize: '2.2rem', fontWeight: 700, color: '#1a2e2b', margin: '0.5rem 0 1rem' }}>Agenda tu consulta</h2>
          <p style={{ color: '#4a6b66', fontSize: '1rem', maxWidth: '500px', margin: '0 auto', lineHeight: 1.7 }}>
            Puedes contactarme directamente por WhatsApp o completar el formulario y te responderé a la brevedad.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.6fr', gap: '3rem', alignItems: 'start' }}>
          {/* Info */}
          <div>
            {[
              { icon: <FaWhatsapp color="#25d366" size={22} />, label: 'WhatsApp', value: '+56 9 1234 5678', href: 'https://wa.me/56912345678' },
              { icon: <FaPhone color="#2a7c6f" size={20} />, label: 'Teléfono', value: '+56 9 1234 5678', href: 'tel:+56912345678' },
              { icon: <FaEnvelope color="#2a7c6f" size={20} />, label: 'Email', value: 'patricia@psicologia.cl', href: 'mailto:patricia@psicologia.cl' },
              { icon: <FaMapMarkerAlt color="#2a7c6f" size={20} />, label: 'Ubicación', value: 'Maipú, Santiago, Chile', href: null },
              { icon: <FaClock color="#2a7c6f" size={20} />, label: 'Horarios', value: 'Lunes a Viernes 9:00 - 19:00', href: null },
            ].map(({ icon, label, value, href }) => (
              <div key={label} className="card" style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '1rem', padding: '1rem 1.2rem' }}>
                <div style={{ width: '42px', height: '42px', background: '#e8f4f1', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  {icon}
                </div>
                <div>
                  <div style={{ color: '#4a6b66', fontSize: '0.78rem', marginBottom: '0.1rem' }}>{label}</div>
                  {href ? (
                    <a href={href} style={{ color: '#1a2e2b', fontWeight: 600, fontSize: '0.95rem', textDecoration: 'none' }}>{value}</a>
                  ) : (
                    <span style={{ color: '#1a2e2b', fontWeight: 600, fontSize: '0.95rem' }}>{value}</span>
                  )}
                </div>
              </div>
            ))}

            <a href="https://wa.me/56912345678" target="_blank" rel="noreferrer"
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.6rem', background: '#25d366', color: '#fff', padding: '1rem', borderRadius: '0.5rem', fontWeight: 700, textDecoration: 'none', fontSize: '1rem', marginTop: '0.5rem' }}>
              <FaWhatsapp size={22} /> Escribir por WhatsApp
            </a>
          </div>

          {/* Form */}
          <div className="card">
            {enviado ? (
              <div style={{ textAlign: 'center', padding: '3rem 1rem' }}>
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>✅</div>
                <h3 style={{ color: '#1a2e2b', fontWeight: 700, fontSize: '1.3rem', marginBottom: '0.5rem' }}>Mensaje enviado</h3>
                <p style={{ color: '#4a6b66' }}>Te contactaré a la brevedad. ¡Gracias!</p>
                <button onClick={() => setEnviado(false)} className="btn-primary" style={{ marginTop: '1.5rem' }}>Enviar otro mensaje</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <h3 style={{ fontWeight: 700, color: '#1a2e2b', fontSize: '1.2rem', marginBottom: '1.5rem' }}>Formulario de contacto</h3>
                {[['nombre', 'Nombre completo', 'text'], ['email', 'Correo electrónico', 'email'], ['telefono', 'Teléfono (opcional)', 'tel']].map(([field, label, type]) => (
                  <div key={field} style={{ marginBottom: '1rem' }}>
                    <label style={{ display: 'block', color: '#1a2e2b', fontWeight: 600, fontSize: '0.88rem', marginBottom: '0.4rem' }}>{label}</label>
                    <input type={type} value={form[field]} onChange={e => setForm({ ...form, [field]: e.target.value })}
                      required={field !== 'telefono'}
                      style={{ width: '100%', padding: '0.7rem 1rem', borderRadius: '0.4rem', border: '1.5px solid #d4ede9', outline: 'none', fontSize: '0.95rem', color: '#1a2e2b', background: '#fafafa', fontFamily: 'inherit' }} />
                  </div>
                ))}
                <div style={{ marginBottom: '1rem' }}>
                  <label style={{ display: 'block', color: '#1a2e2b', fontWeight: 600, fontSize: '0.88rem', marginBottom: '0.4rem' }}>Motivo de consulta</label>
                  <select value={form.motivo} onChange={e => setForm({ ...form, motivo: e.target.value })} required
                    style={{ width: '100%', padding: '0.7rem 1rem', borderRadius: '0.4rem', border: '1.5px solid #d4ede9', outline: 'none', fontSize: '0.95rem', color: '#1a2e2b', background: '#fafafa', fontFamily: 'inherit' }}>
                    <option value="">Seleccionar...</option>
                    <option>Psicoterapia individual</option>
                    <option>Psicoterapia infanto-juvenil</option>
                    <option>Terapia familiar o de pareja</option>
                    <option>Psicodiagnóstico</option>
                    <option>Peritaje psicológico</option>
                    <option>Otro</option>
                  </select>
                </div>
                <div style={{ marginBottom: '1.5rem' }}>
                  <label style={{ display: 'block', color: '#1a2e2b', fontWeight: 600, fontSize: '0.88rem', marginBottom: '0.4rem' }}>Mensaje (opcional)</label>
                  <textarea value={form.mensaje} onChange={e => setForm({ ...form, mensaje: e.target.value })} rows={3}
                    style={{ width: '100%', padding: '0.7rem 1rem', borderRadius: '0.4rem', border: '1.5px solid #d4ede9', outline: 'none', fontSize: '0.95rem', color: '#1a2e2b', background: '#fafafa', fontFamily: 'inherit', resize: 'vertical' }} />
                </div>
                <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>Enviar mensaje</button>
              </form>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #contacto .container-custom > div:last-child { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}