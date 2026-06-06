import { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

const links = [
  { label: 'Sobre mí', href: '#sobre' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Peritajes', href: '#peritajes' },
  { label: 'Trayectoria', href: '#trayectoria' },
  { label: 'Contacto', href: '#contacto' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav style={{ background: '#1f5e54', position: 'sticky', top: 0, zIndex: 50, boxShadow: '0 2px 8px rgba(0,0,0,0.15)' }}>
      <div className="container-custom" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1rem 1.5rem' }}>
        <a href="#inicio" style={{ textDecoration: 'none' }}>
          <div>
            <span style={{ color: '#ffffff', fontWeight: 700, fontSize: '1.1rem', display: 'block', lineHeight: 1.2 }}>Ps. Patricia Santander</span>
            <span style={{ color: '#a8d5cd', fontSize: '0.78rem', fontWeight: 400 }}>Psicóloga Clínica & Perito Judicial</span>
          </div>
        </a>

        {/* Desktop */}
        <ul style={{ display: 'flex', gap: '2rem', listStyle: 'none', margin: 0, padding: 0 }} className="hidden-mobile">
          {links.map(l => (
            <li key={l.href}>
              <a href={l.href} style={{ color: '#d4ede9', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 500, transition: 'color 0.2s' }}
                onMouseEnter={e => e.target.style.color = '#ffffff'}
                onMouseLeave={e => e.target.style.color = '#d4ede9'}>
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a href="https://wa.me/56912345678" target="_blank" rel="noreferrer"
          style={{ background: '#25d366', color: '#fff', padding: '0.5rem 1.2rem', borderRadius: '0.4rem', fontWeight: 600, fontSize: '0.85rem', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.4rem' }}
          className="hidden-mobile">
          WhatsApp
        </a>

        {/* Mobile button */}
        <button onClick={() => setOpen(!open)} style={{ background: 'none', border: 'none', color: '#fff', fontSize: '1.4rem', cursor: 'pointer', display: 'none' }} className="show-mobile">
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div style={{ background: '#1f5e54', borderTop: '1px solid rgba(255,255,255,0.1)', padding: '1rem 1.5rem' }}>
          {links.map(l => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}
              style={{ display: 'block', color: '#d4ede9', textDecoration: 'none', padding: '0.6rem 0', fontSize: '1rem', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
              {l.label}
            </a>
          ))}
          <a href="https://wa.me/56912345678" target="_blank" rel="noreferrer"
            style={{ display: 'inline-block', marginTop: '1rem', background: '#25d366', color: '#fff', padding: '0.6rem 1.4rem', borderRadius: '0.4rem', fontWeight: 600, textDecoration: 'none' }}>
            WhatsApp
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: block !important; }
        }
        @media (min-width: 769px) {
          .show-mobile { display: none !important; }
        }
      `}</style>
    </nav>
  )
}
