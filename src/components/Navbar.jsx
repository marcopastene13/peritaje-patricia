import { useState, useEffect } from 'react'

const links = [
  { href: '#sobre', label: 'Sobre mí' },
  { href: '#servicios', label: 'Servicios' },
  { href: '#peritajes', label: 'Peritajes' },
  { href: '#trayectoria', label: 'Trayectoria' },
  { href: '#formacion', label: 'Formación' },
  { href: '#contacto', label: 'Contacto' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
    }`}>
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <a href="#inicio" className="flex flex-col leading-tight">
          <span className="text-lg font-bold text-[#2a7c6f]">Patricia Santander</span>
          <span className="text-xs text-[#4a6b66]">Psicóloga Clínica &amp; Perito Forense</span>
        </a>

        <nav className="hidden md:flex gap-7">
          {links.map(l => (
            <a key={l.href} href={l.href}
              className="text-sm font-medium text-[#1a2e2b] hover:text-[#2a7c6f] transition-colors">
              {l.label}
            </a>
          ))}
        </nav>

        <a href="https://wa.me/56986431293?text=Hola Patricia, quisiera agendar una hora"
          target="_blank" rel="noreferrer"
          className="hidden md:inline-block bg-[#2a7c6f] hover:bg-[#1f6459] text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-colors">
          Agendar hora
        </a>

        <button className="md:hidden text-[#1a2e2b]" onClick={() => setOpen(!open)}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d={open ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white px-6 pb-4 shadow-lg">
          {links.map(l => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}
              className="block py-2 text-sm font-medium text-[#1a2e2b] hover:text-[#2a7c6f]">
              {l.label}
            </a>
          ))}
        </div>
      )}
    </header>
  )
}
