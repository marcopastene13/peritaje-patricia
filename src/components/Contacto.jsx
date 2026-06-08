import { useState } from "react"

export default function Contacto() {
  const [form, setForm] = useState({ nombre: "", email: "", telefono: "", mensaje: "", tipo: "clinica" })
  const [enviado, setEnviado] = useState(false)

  const onChange = e => setForm({ ...form, [e.target.name]: e.target.value })

  const onSubmit = e => {
    e.preventDefault()
    const txt = encodeURIComponent(
      `Hola Patricia! Mi nombre es ${form.nombre}.%0AEmail: ${form.email}%0ATelefono: ${form.telefono}%0ATipo: ${form.tipo}%0AMensaje: ${form.mensaje}`
    )
    window.open(`https://wa.me/56986431293?text=${txt}`, "_blank")
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
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              </div>
              <div>
                <p className="font-bold text-[#1a2e2b]">WhatsApp</p>
                <a href="https://wa.me/56986431293" className="text-[#2a7c6f] hover:underline">+56 9 8643 1293</a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#2a7c6f] rounded-xl flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              </div>
              <div>
                <p className="font-bold text-[#1a2e2b]">Email</p>
                <a href="mailto:cconsultapsicologica@gmail.com" className="text-[#2a7c6f] hover:underline">cconsultapsicologica@gmail.com</a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#2a7c6f] rounded-xl flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              </div>
              <a
                href="https://maps.app.goo.gl/MJi24h5HhqhCsfcQ8"
                target="_blank"
                rel="noopener noreferrer"
                className="block transition hover:opacity-80"
              >
                <p className="font-bold text-[#1a2e2b]">Ubicación</p>
                <p className="text-[#4a6b66]">
                  Centro Psicológico Centenario
                  <br />
                  Maipú, Región Metropolitana
                </p>
              </a>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#2a7c6f] rounded-xl flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <div>
                <p className="font-bold text-[#1a2e2b]">Horario</p>
                <p className="text-[#4a6b66]">Lunes a Viernes: 09:00 - 19:00<br />Sabado: 09:00 - 13:00</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            {enviado ? (
              <div className="text-center py-8">
                <div className="text-5xl mb-4">✅</div>
                <h3 className="text-xl font-bold text-[#1a2e2b] mb-2">Mensaje enviado</h3>
                <p className="text-[#4a6b66]">Te redirigimos a WhatsApp. Patricia te respondera a la brevedad.</p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-[#1a2e2b] mb-1">Nombre completo</label>
                  <input name="nombre" value={form.nombre} onChange={onChange} required
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#2a7c6f] focus:ring-1 focus:ring-[#2a7c6f]"
                    placeholder="Tu nombre" />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-sm font-medium text-[#1a2e2b] mb-1">Email</label>
                    <input name="email" type="email" value={form.email} onChange={onChange} required
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#2a7c6f] focus:ring-1 focus:ring-[#2a7c6f]"
                      placeholder="tu@email.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#1a2e2b] mb-1">Telefono</label>
                    <input name="telefono" value={form.telefono} onChange={onChange}
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#2a7c6f] focus:ring-1 focus:ring-[#2a7c6f]"
                      placeholder="+56 9" />
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
                    placeholder="Cuentame brevemente tu consulta..." />
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