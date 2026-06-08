import { useState, useEffect } from 'react'

const WA = 'https://wa.me/56986431293'

const links = [
  { label: 'Sobre mí', href: '#sobre' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Peritajes', href: '#peritajes' },
  { label: 'Trayectoria', href: '#trayectoria' },
  { label: 'Formación', href: '#formacion' },
  { label: 'Contacto', href: '#contacto' },
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
          <span className="text-xs text-[#4a6b66] font-medium">Psicóloga Clínica & Perito Forense</span>
        </a>
        <nav className="hidden md:flex gap-7">
          {links.map(l => (
            <a key={l.href} href={l.href}
              className="text-sm font-medium text-[#1a2e2b] hover:text-[#2a7c6f] transition-colors">
              {l.label}
            </a>
          ))}
        </nav>
        <a href={`${WA}?text=Hola Patricia, quisiera agendar una hora`}
          target="_blank" rel="noreferrer"
          className="hidden md:inline-flex items-center gap-2 bg-[#2a7c6f] text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-[#1f5e54] transition-colors">
          Agendar hora
        </a>
        <button onClick={() => setOpen(!open)} className="md:hidden p-2 text-[#2a7c6f]">
          <span className="block w-6 h-0.5 bg-current mb-1"></span>
          <span className="block w-6 h-0.5 bg-current mb-1"></span>
          <span className="block w-6 h-0.5 bg-current"></span>
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-4">
          {links.map(l => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}
              className="text-sm font-medium text-[#1a2e2b] hover:text-[#2a7c6f]">
              {l.label}
            </a>
          ))}
          <a href={WA}
            className="bg-[#2a7c6f] text-white text-sm font-semibold px-5 py-2.5 rounded-full text-center hover:bg-[#1f5e54]">
            Agendar hora
          </a>
        </div>
      )}
    </header>
  )
}
