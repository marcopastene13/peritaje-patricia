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
      <Peritajes />
      <Servicios />
      <Trayectoria />
      <Formacion />
      <Contacto />
      <Footer />
    </div>
  )
}