import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Sobre from './components/Sobre'
import Servicios from './components/Servicios'
import Peritajes from './components/Peritajes'
import Trayectoria from './components/Trayectoria'
import Formacion from './components/Formacion'
import Contacto from './components/Contacto'
import Footer from './components/Footer'
import './index.css'

function App() {
  return (
    <div className="min-h-screen">
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

export default App