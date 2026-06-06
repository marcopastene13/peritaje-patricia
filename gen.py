import os

C = 'src/components'

files = {}

# ── vite.config.js ──────────────────────────────────────────────
files['vite.config.js'] = '''
import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import tailwindcss from "@tailwindcss/vite"

export default defineConfig({
  plugins: [tailwindcss(), react()],
})
'''.strip()

# ── index.css ───────────────────────────────────────────────────
files['src/index.css'] = '''
@import "tailwindcss";
'''.strip()

# ── index.html title ─────────────────────────────────────────────
files['index.html'] = open('index.html').read().replace(
    '<title>Vite + React</title>',
    '<title>Patricia Santander | Psicologa Clinica y Perito Forense</title>'
)

# ── main.jsx ────────────────────────────────────────────────────
files['src/main.jsx'] = '''
import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./index.css"
import App from "./App.jsx"
createRoot(document.getElementById("root")).render(
  <StrictMode><App /></StrictMode>
)
'''.strip()

# ── App.jsx ─────────────────────────────────────────────────────
files['src/App.jsx'] = '''
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Sobre from "./components/Sobre"
import Servicios from "./components/Servicios"
import Peritajes from "./components/Peritajes"
import Trayectoria from "./components/Trayectoria"
import Formacion from "./components/Formacion"
import Contacto from "./components/Contacto"
import Footer from "./components/Footer"

export default function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <Hero />
      <Sobre />
      <Servicios />
      <Peritajes />
      <Trayectoria />
      <Formacion />
      <Contacto />
      <Footer />
    </div>
  )
}
'''.strip()

print('Variables base OK')


# ── Navbar ─────────────────────────────────────────────────────
files[C+'/Navbar.jsx'] = '''
import { useState, useEffect } from "react"

const links = [
  { label: "Sobre mi", href: "#sobre" },
  { label: "Servicios", href: "#servicios" },
  { label: "Peritajes", href: "#peritajes" },
  { label: "Trayectoria", href: "#trayectoria" },
  { label: "Formacion", href: "#formacion" },
  { label: "Contacto", href: "#contacto" },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", fn)
    return () => window.removeEventListener("scroll", fn)
  }, [])

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
    }`}>
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <a href="#inicio" className="flex flex-col leading-tight">
          <span className="text-lg font-bold text-[#2a7c6f]">Patricia Santander</span>
          <span className="text-xs text-[#4a6b66] font-medium">Psicologa Clinica & Perito Forense</span>
        </a>
        <nav className="hidden md:flex gap-7">
          {links.map(l => (
            <a key={l.href} href={l.href}
              className="text-sm font-medium text-[#1a2e2b] hover:text-[#2a7c6f] transition-colors">
              {l.label}
            </a>
          ))}
        </nav>
        <a href="https://wa.me/56912345678?text=Hola Patricia, quisiera agendar una hora"
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
          <a href="https://wa.me/56912345678"
            className="bg-[#2a7c6f] text-white text-sm font-semibold px-5 py-2.5 rounded-full text-center hover:bg-[#1f5e54]">
            Agendar hora
          </a>
        </div>
      )}
    </header>
  )
}
'''.strip()

print('Navbar OK')


# ── Hero ──────────────────────────────────────────────────────
files[C+'/Hero.jsx'] = '''
export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center"
      style={{background: "linear-gradient(135deg,#1a2e2b 0%,#2a7c6f 60%,#3a9e8e 100%)"}}>
      <div className="absolute inset-0 opacity-10"
        style={{backgroundImage:"url('data:image/svg+xml,%3Csvg width=60 height=60 viewBox=0 0 60 60 xmlns=http://www.w3.org/2000/svg%3E%3Cg fill=none fill-rule=evenodd%3E%3Cg fill=%23ffffff fill-opacity=0.4%3E%3Cpath d=M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')"}}>
      </div>
      <div className="relative max-w-6xl mx-auto px-6 py-32 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <span className="inline-block bg-white/20 text-white text-xs font-semibold px-4 py-1.5 rounded-full mb-6 tracking-wide">
            Psicologa Clinica | Perito Judicial Forense
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Patricia<br/>
            <span className="text-[#a8dfd5]">Santander</span>
          </h1>
          <p className="text-white/80 text-lg leading-relaxed mb-10">
            Atencion psicologica clinica y peritajes forenses en Maipo.
            Acompanamiento terapeutico, psicodiagnostico y elaboracion de
            informes psicologicos para tribunales de familia y causas penales.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="https://wa.me/56912345678?text=Hola Patricia, quisiera agendar una hora"
              target="_blank" rel="noreferrer"
              className="bg-white text-[#2a7c6f] font-bold px-8 py-3.5 rounded-full hover:bg-[#e8f4f1] transition-colors shadow-lg">
              Agendar hora
            </a>
            <a href="#sobre"
              className="border-2 border-white text-white font-semibold px-8 py-3.5 rounded-full hover:bg-white/10 transition-colors">
              Conocer mas
            </a>
          </div>
          <div className="mt-12 flex gap-8">
            <div>
              <p className="text-3xl font-bold text-white">+10</p>
              <p className="text-white/70 text-sm">Anos de experiencia</p>
            </div>
            <div className="w-px bg-white/20"></div>
            <div>
              <p className="text-3xl font-bold text-white">+500</p>
              <p className="text-white/70 text-sm">Pacientes atendidos</p>
            </div>
            <div className="w-px bg-white/20"></div>
            <div>
              <p className="text-3xl font-bold text-white">+100</p>
              <p className="text-white/70 text-sm">Peritajes realizados</p>
            </div>
          </div>
        </div>
        <div className="hidden md:flex justify-center">
          <div className="w-80 h-80 rounded-full bg-white/10 border-4 border-white/30 flex items-center justify-center">
            <div className="w-64 h-64 rounded-full bg-white/20 border-2 border-white/40 flex items-center justify-center">
              <svg className="w-32 h-32 text-white/60" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
'''.strip()

print('Hero OK')


# ── Sobre ──────────────────────────────────────────────────────
files[C+'/Sobre.jsx'] = '''
export default function Sobre() {
  const rasgos = [
    { icon: "\u2764", title: "Enfoque humanista", desc: "Cada persona es unica. Adapto el proceso terapeutico a tus necesidades reales." },
    { icon: "\u2696", title: "Experiencia forense", desc: "Peritajes psicologicos con rigurosidad tecnica y respaldo cientifico para tribunales." },
    { icon: "\U0001f91d", title: "Alianza terapeutica", desc: "Construyo un vinculo de confianza para que el proceso sea seguro y transformador." },
    { icon: "\U0001f4da", title: "Formacion continua", desc: "Actualizacion permanente en psicoterapia, psicodiagnostico y pericia judicial." },
  ]
  return (
    <section id="sobre" className="py-24 bg-[#f5f0eb]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-[#2a7c6f] font-semibold text-sm uppercase tracking-widest">Sobre mi</span>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold text-[#1a2e2b] leading-tight">
              Mas de una decada<br/>acompanando vidas
            </h2>
            <p className="mt-6 text-[#4a6b66] leading-relaxed">
              Soy Patricia Santander, psicologa clinica titulada con mas de 10 anos de experiencia
              en atencion psicologica y pericia forense. Trabajo con ninos, adolescentes, adultos
              y familias desde una perspectiva integradora y centrada en la persona.
            </p>
            <p className="mt-4 text-[#4a6b66] leading-relaxed">
              Mi labor clinica se desarrolla en el Centro Psicologico Centenario en Maipo,
              donde ofrezco psicoterapia individual y familiar, ademas de psicodiagnostico.
              En paralelo, ejerzo como perito judicial forense independiente en causas de
              familia y penales, elaborando informes tecnicos para tribunales de justicia.
            </p>
            <a href="#contacto"
              className="inline-block mt-8 bg-[#2a7c6f] text-white font-semibold px-8 py-3 rounded-full hover:bg-[#1f5e54] transition-colors">
              Contactar ahora
            </a>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {rasgos.map((r, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <span className="text-3xl">{r.icon}</span>
                <h3 className="mt-3 font-bold text-[#1a2e2b] text-sm">{r.title}</h3>
                <p className="mt-1 text-[#4a6b66] text-xs leading-relaxed">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
'''.strip()

print('Sobre OK')


# ── Servicios ─────────────────────────────────────────────────
files[C+'/Servicios.jsx'] = '''
const items = [
  { icon:"\U0001f9d1", title:"Psicoterapia Individual", desc:"Proceso terapeutico personalizado para adultos y jovenes adultos. Abordamos ansiedad, depresion, duelo, autoestima y desarrollo personal." },
  { icon:"\U0001f9d2", title:"Psicoterapia Infantil", desc:"Atencion especializada para ninos y adolescentes con dificultades emocionales, conductuales o del desarrollo." },
  { icon:"\U0001f46a", title:"Terapia Familiar", desc:"Intervencion familiar para mejorar la comunicacion, resolver conflictos y fortalecer los vinculos afectivos." },
  { icon:"\U0001f9e0", title:"Psicodiagnostico", desc:"Evaluacion psicologica completa mediante test y entrevistas clinicas para comprender el funcionamiento mental y emocional." },
  { icon:"\U0001f4cb", title:"Orientacion y Consejeria", desc:"Apoyo en momentos de crisis, toma de decisiones y situaciones de cambio vital. Sesiones breves y focalizadas." },
  { icon:"\U0001f4de", title:"Atencion Online", desc:"Sesiones de psicoterapia y orientacion mediante plataformas digitales, con la misma calidad de la atencion presencial." },
]

export default function Servicios() {
  return (
    <section id="servicios" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-[#2a7c6f] font-semibold text-sm uppercase tracking-widest">Atencion clinica</span>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-[#1a2e2b]">Servicios psicologicos</h2>
          <p className="mt-4 text-[#4a6b66] max-w-2xl mx-auto">Ofrezco atencion psicologica integral con enfoque humanista e integrativo, adaptada a cada etapa de la vida.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((s,i) => (
            <div key={i} className="group bg-[#f5f0eb] rounded-2xl p-7 hover:bg-[#2a7c6f] transition-colors duration-300 cursor-default">
              <span className="text-4xl">{s.icon}</span>
              <h3 className="mt-4 text-lg font-bold text-[#1a2e2b] group-hover:text-white transition-colors">{s.title}</h3>
              <p className="mt-2 text-sm text-[#4a6b66] group-hover:text-white/80 leading-relaxed transition-colors">{s.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <a href="https://wa.me/56912345678" target="_blank" rel="noreferrer"
            className="inline-flex items-center gap-2 bg-[#2a7c6f] text-white font-semibold px-8 py-3.5 rounded-full hover:bg-[#1f5e54] transition-colors">
            Solicitar hora de atencion
          </a>
        </div>
      </div>
    </section>
  )
}
'''.strip()

print('Servicios OK')


# ── Peritajes ─────────────────────────────────────────────────
files[C+'/Peritajes.jsx'] = '''
const tipos = [
  { title:"Dano psicologico", desc:"Evaluacion del impacto psicologico en victimas de delitos, accidentes o situaciones traumaticas para causas penales y civiles." },
  { title:"Competencias parentales", desc:"Evaluacion de las habilidades y capacidades de progenitores en contexto de tuicion, visitas y cuidado personal de hijos." },
  { title:"Credibilidad del testimonio", desc:"Evaluacion de la coherencia, consistencia y veracidad del relato en victimas y testigos, especialmente en menores." },
  { title:"Estado mental", desc:"Evaluacion psicologica para determinar el estado mental al momento de los hechos en causas penales." },
  { title:"Evaluacion de menores", desc:"Entrevista y evaluacion psicologica especializada de ninos y adolescentes en contexto judicial." },
  { title:"Informes y declaracion en juicio", desc:"Elaboracion de informes periciales y participacion como testigo experto en audiencias de tribunales de familia y penal." },
]

export default function Peritajes() {
  return (
    <section id="peritajes" className="py-24 bg-[#1a2e2b]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-[#a8dfd5] font-semibold text-sm uppercase tracking-widest">Pericia forense</span>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-white">Peritaje Judicial Forense</h2>
          <p className="mt-4 text-white/60 max-w-2xl mx-auto">Elaboro informes periciales psicologicos con rigor tecnico-cientifico para tribunales de familia y juzgados de garantia.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {tipos.map((t,i) => (
            <div key={i} className="border border-white/10 rounded-2xl p-7 hover:border-[#2a7c6f] hover:bg-white/5 transition-all">
              <div className="w-10 h-1 bg-[#2a7c6f] rounded mb-5"></div>
              <h3 className="text-white font-bold text-base mb-2">{t.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">{t.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-16 bg-[#2a7c6f]/20 border border-[#2a7c6f]/30 rounded-2xl p-8 text-center">
          <h3 className="text-white font-bold text-xl mb-2">Necesitas un peritaje psicologico?</h3>
          <p className="text-white/70 mb-6">Contactame para evaluar tu caso y elaborar el informe pericial que necesitas.</p>
          <a href="https://wa.me/56912345678?text=Hola Patricia, necesito un peritaje psicologico"
            target="_blank" rel="noreferrer"
            className="inline-flex items-center gap-2 bg-[#2a7c6f] text-white font-semibold px-8 py-3.5 rounded-full hover:bg-[#3a9e8e] transition-colors">
            Consultar sobre peritaje
          </a>
        </div>
      </div>
    </section>
  )
}
'''.strip()

print('Peritajes OK')


# ── Trayectoria ────────────────────────────────────────────────
files[C+'/Trayectoria.jsx'] = '''
const exp = [
  {
    periodo: "2015 - Actualidad",
    cargo: "Psicologa Clinica",
    lugar: "Centro Psicologico Centenario, Maipo",
    desc: "Atencion psicologica individual, infantil y familiar. Psicodiagnostico, psicoterapia y orientacion a padres. Coordinacion con equipo multidisciplinario."
  },
  {
    periodo: "2018 - Actualidad",
    cargo: "Perito Judicial Forense Independiente",
    lugar: "Tribunales de Familia y Juzgados de Garantia, Region Metropolitana",
    desc: "Elaboracion de informes psicologicos periciales. Evaluacion de dano psicologico, competencias parentales, credibilidad de testimonio y estado mental. Declaracion como testigo experto."
  },
  {
    periodo: "2012 - 2015",
    cargo: "Psicologa Clinica",
    lugar: "CESFAM, Municipalidad de Maipo",
    desc: "Atencion en salud mental primaria. Psicoterapia breve, crisis y derivacion. Trabajo con programas de violencia intrafamiliar y salud mental comunitaria."
  },
]

export default function Trayectoria() {
  return (
    <section id="trayectoria" className="py-24 bg-[#f5f0eb]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-[#2a7c6f] font-semibold text-sm uppercase tracking-widest">Experiencia</span>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-[#1a2e2b]">Trayectoria profesional</h2>
        </div>
        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-[#2a7c6f]/30 hidden md:block"></div>
          <div className="space-y-10">
            {exp.map((e, i) => (
              <div key={i} className="md:flex gap-8 items-start">
                <div className="hidden md:flex flex-col items-center">
                  <div className="w-4 h-4 rounded-full bg-[#2a7c6f] border-4 border-[#f5f0eb] mt-1 z-10"></div>
                </div>
                <div className="bg-white rounded-2xl p-7 flex-1 shadow-sm">
                  <span className="inline-block bg-[#e8f4f1] text-[#2a7c6f] text-xs font-bold px-3 py-1 rounded-full mb-3">{e.periodo}</span>
                  <h3 className="text-lg font-bold text-[#1a2e2b]">{e.cargo}</h3>
                  <p className="text-[#2a7c6f] font-medium text-sm mb-3">{e.lugar}</p>
                  <p className="text-[#4a6b66] text-sm leading-relaxed">{e.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
'''.strip()

print('Trayectoria OK')


# ── Formacion ─────────────────────────────────────────────────
files[C+'/Formacion.jsx'] = '''
const academica = [
  { titulo: "Psicologa", inst: "Universidad de Santiago de Chile (USACH)", anno: "2012" },
]
const posgrado = [
  { titulo: "Diplomado en Psicologia Juridica y Pericia Forense", inst: "Universidad Andres Bello (UNAB)", anno: "2019" },
  { titulo: "Diplomado en Psicoterapia Infanto-Juvenil", inst: "ADIPA", anno: "2017" },
  { titulo: "Diplomado en Terapia Cognitivo Conductual", inst: "Instituto Virtus", anno: "2016" },
  { titulo: "Seminario Internacional de Psicodiagnostico", inst: "Sociedad Chilena de Psicologia Clinica", anno: "2020" },
  { titulo: "Curso: Evaluacion de Competencias Parentales", inst: "ADIPA", anno: "2021" },
  { titulo: "Curso: Intervencion en Crisis y Primeros Auxilios Psicologicos", inst: "OPS/OMS Chile", anno: "2022" },
]

export default function Formacion() {
  return (
    <section id="formacion" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-[#2a7c6f] font-semibold text-sm uppercase tracking-widest">Formacion</span>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-[#1a2e2b]">Educacion y certificaciones</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-bold text-[#1a2e2b] mb-6 flex items-center gap-2">
              <span className="w-8 h-1 bg-[#2a7c6f] rounded inline-block"></span>
              Titulo universitario
            </h3>
            {academica.map((f,i) => (
              <div key={i} className="bg-[#f5f0eb] rounded-xl p-6 mb-4">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-bold text-[#1a2e2b]">{f.titulo}</p>
                    <p className="text-[#4a6b66] text-sm mt-1">{f.inst}</p>
                  </div>
                  <span className="bg-[#2a7c6f] text-white text-xs font-bold px-3 py-1 rounded-full">{f.anno}</span>
                </div>
              </div>
            ))}
          </div>
          <div>
            <h3 className="text-xl font-bold text-[#1a2e2b] mb-6 flex items-center gap-2">
              <span className="w-8 h-1 bg-[#2a7c6f] rounded inline-block"></span>
              Diplomados y cursos
            </h3>
            <div className="space-y-3">
              {posgrado.map((f,i) => (
                <div key={i} className="flex gap-4 items-start border-b border-gray-100 pb-3">
                  <span className="text-[#2a7c6f] font-bold text-sm min-w-12">{f.anno}</span>
                  <div>
                    <p className="font-medium text-[#1a2e2b] text-sm">{f.titulo}</p>
                    <p className="text-[#4a6b66] text-xs mt-0.5">{f.inst}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
'''.strip()

print('Formacion OK')


# ── Contacto ─────────────────────────────────────────────────
files[C+'/Contacto.jsx'] = '''
import { useState } from "react"

export default function Contacto() {
  const [form, setForm] = useState({ nombre: "", email: "", telefono: "", mensaje: "", tipo: "clinica" })
  const [enviado, setEnviado] = useState(false)

  const onChange = e => setForm({...form, [e.target.name]: e.target.value})

  const onSubmit = e => {
    e.preventDefault()
    const txt = encodeURIComponent(
      `Hola Patricia! Mi nombre es ${form.nombre}.%0AEmail: ${form.email}%0ATelefono: ${form.telefono}%0ATipo: ${form.tipo}%0AMensaje: ${form.mensaje}`
    )
    window.open(`https://wa.me/56912345678?text=${txt}`, "_blank")
    setEnviado(true)
  }

  return (
    <section id="contacto" className="py-24 bg-[#f5f0eb]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-[#2a7c6f] font-semibold text-sm uppercase tracking-widest">Contacto</span>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-[#1a2e2b]">Agenda tu hora</h2>
          <p className="mt-4 text-[#4a6b66] max-w-xl mx-auto">Completar el formulario y te contacto a la brevedad para coordinar tu primera sesion.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#2a7c6f] rounded-xl flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
              </div>
              <div>
                <p className="font-bold text-[#1a2e2b]">WhatsApp</p>
                <a href="https://wa.me/56912345678" className="text-[#2a7c6f] hover:underline">+56 9 1234 5678</a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#2a7c6f] rounded-xl flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
              </div>
              <div>
                <p className="font-bold text-[#1a2e2b]">Email</p>
                <a href="mailto:patricia.santander@psicologa.cl" className="text-[#2a7c6f] hover:underline">patricia.santander@psicologa.cl</a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#2a7c6f] rounded-xl flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
              </div>
              <div>
                <p className="font-bold text-[#1a2e2b]">Ubicacion</p>
                <p className="text-[#4a6b66]">Centro Psicologico Centenario<br/>Maipo, Region Metropolitana</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#2a7c6f] rounded-xl flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
              </div>
              <div>
                <p className="font-bold text-[#1a2e2b]">Horario</p>
                <p className="text-[#4a6b66]">Lunes a Viernes: 09:00 - 19:00<br/>Sabado: 09:00 - 13:00</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            {enviado ? (
              <div className="text-center py-8">
                <div className="text-5xl mb-4">\u2705</div>
                <h3 className="text-xl font-bold text-[#1a2e2b] mb-2">Mensaje enviado</h3>
                <p className="text-[#4a6b66]">Te redirigimos a WhatsApp. Patricia te respondera a la brevedad.</p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-[#1a2e2b] mb-1">Nombre completo</label>
                  <input name="nombre" value={form.nombre} onChange={onChange} required
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#2a7c6f] focus:ring-1 focus:ring-[#2a7c6f]"
                    placeholder="Tu nombre"/>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-sm font-medium text-[#1a2e2b] mb-1">Email</label>
                    <input name="email" type="email" value={form.email} onChange={onChange} required
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#2a7c6f] focus:ring-1 focus:ring-[#2a7c6f]"
                      placeholder="tu@email.com"/>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#1a2e2b] mb-1">Telefono</label>
                    <input name="telefono" value={form.telefono} onChange={onChange}
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#2a7c6f] focus:ring-1 focus:ring-[#2a7c6f]"
                      placeholder="+56 9"/>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#1a2e2b] mb-1">Tipo de consulta</label>
                  <select name="tipo" value={form.tipo} onChange={onChange}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#2a7c6f]">
                    <option value="clinica">Atencion clinica / psicoterapia</option>
                    <option value="psicodiagnostico">Psicodiagnostico</option>
                    <option value="peritaje">Peritaje judicial</option>
                    <option value="otro">Otro</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#1a2e2b] mb-1">Mensaje</label>
                  <textarea name="mensaje" value={form.mensaje} onChange={onChange} rows={4}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#2a7c6f] focus:ring-1 focus:ring-[#2a7c6f] resize-none"
                    placeholder="Cuentame brevemente tu consulta..."/>
                </div>
                <button type="submit"
                  className="w-full bg-[#2a7c6f] text-white font-bold py-3.5 rounded-xl hover:bg-[#1f5e54] transition-colors">
                  Enviar por WhatsApp
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
'''.strip()

print('Contacto OK')


# ── Footer ──────────────────────────────────────────────────────
files[C+'/Footer.jsx'] = '''
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
              <a href="https://wa.me/56912345678" target="_blank" rel="noreferrer"
                className="flex items-center gap-3 text-sm hover:text-white transition-colors">
                <span className="text-[#2a7c6f]">\u2022</span> WhatsApp: +56 9 1234 5678
              </a>
              <a href="mailto:patricia.santander@psicologa.cl"
                className="flex items-center gap-3 text-sm hover:text-white transition-colors">
                <span className="text-[#2a7c6f]">\u2022</span> patricia.santander@psicologa.cl
              </a>
              <p className="flex items-center gap-3 text-sm">
                <span className="text-[#2a7c6f]">\u2022</span> Maipo, Region Metropolitana
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
'''.strip()

print('Footer OK')

# ── ESCRIBIR TODOS LOS ARCHIVOS ────────────────────────────────────
for path, content in files.items():
    os.makedirs(os.path.dirname(path), exist_ok=True) if os.path.dirname(path) else None
    with open(path, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f'  Escrito: {path}')

print('\n\u2705 TODOS LOS ARCHIVOS GENERADOS CORRECTAMENTE')
