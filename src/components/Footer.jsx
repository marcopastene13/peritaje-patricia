const links = [
  { label: "Sobre mi", href: "#sobre" },
  { label: "Servicios", href: "#servicios" },
  { label: "Peritajes", href: "#peritajes" },
  { label: "Trayectoria", href: "#trayectoria" },
  { label: "Formacion", href: "#formacion" },
  { label: "Contacto", href: "#contacto" },
]

export default function Footer() {
  return (
    <footer className="bg-[#1a2e2b] text-white/70">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          <div>
            <p className="text-xl font-bold text-white">Patricia Santander</p>
            <p className="text-sm mt-1 text-[#a8dfd5]">Psicologa Clinica | Perito Judicial Forense</p>
            <p className="text-sm mt-4 leading-relaxed">Atencion psicologica y pericia forense en Maipo, Region Metropolitana.</p>
          </div>
          <div>
            <p className="text-white font-semibold mb-4">Navegacion</p>
            <ul className="space-y-2">
              {links.map(l => (
                <li key={l.href}>
                  <a href={l.href} className="text-sm hover:text-white transition-colors">{l.label}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-white font-semibold mb-4">Contacto rapido</p>
            <div className="space-y-3">
              <a href="https://wa.me/56986431293" target="_blank" rel="noreferrer"
                className="flex items-center gap-3 text-sm hover:text-white transition-colors">
                <span className="text-[#2a7c6f]">•</span> WhatsApp: +56 9 8643 1293
              </a>
              <a href="mailto:cconsultapsicologica@gmail.com"
                className="flex items-center gap-3 text-sm hover:text-white transition-colors">
                <span className="text-[#2a7c6f]">•</span> cconsultapsicologica@gmail.com
              </a>
              <p className="flex items-center gap-3 text-sm">
                <span className="text-[#2a7c6f]">•</span> Maipu, Region Metropolitana
              </p>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm">&copy; {new Date().getFullYear()} Patricia Santander. Todos los derechos reservados.</p>
          <p className="text-xs">Psicologa Clinica | Reg. Superintendencia de Salud</p>
        </div>
      </div>
    </footer>
  )
}