import Hero from './components/Hero'
import Services from './components/Services'
import ForWhom from './components/ForWhom'
import WhyChoose from './components/WhyChoose'
import Gallery from './components/Gallery'
import Contact from './components/Contact'

const ORANGE = '#FF6A1A'

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 inset-x-0 z-40 backdrop-blur bg-white/70 border-b border-black/[0.06]">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="font-extrabold tracking-tight text-[#111] text-lg">StenenzagenOpLocatie.nl</a>
          <nav className="hidden md:flex items-center gap-6 text-sm font-semibold text-[#111]">
            <a href="#diensten" className="hover:opacity-70">Diensten</a>
            <a href="#projecten" className="hover:opacity-70">Projecten</a>
            <a href="#contact" className="hover:opacity-70">Contact</a>
            <a href="tel:0629270956" className="inline-flex items-center px-3 py-1.5 rounded-lg text-white" style={{ backgroundColor: ORANGE }}>06-29270956</a>
          </nav>
        </div>
      </header>

      <main className="pt-16">
        <Hero />
        <Services />
        <ForWhom />
        <WhyChoose />
        <div id="projecten"><Gallery /></div>
        <Contact />
      </main>

      {/* Footer */}
      <footer className="border-t border-black/[0.06] py-10 text-center text-sm text-black/60">
        <p>© {new Date().getFullYear()} StenenzagenOpLocatie.nl – Professioneel stenen zagen op locatie</p>
      </footer>
    </div>
  )
}

export default App
