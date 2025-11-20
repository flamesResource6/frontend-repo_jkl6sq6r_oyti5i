import { Phone } from "lucide-react"

const ORANGE = "#FF6A1A"

export default function Hero() {
  return (
    <section className="relative w-full min-h-[78vh] lg:min-h-[86vh] grid place-items-center overflow-hidden">
      {/* Background image and overlay */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-center bg-cover"
          style={{
            backgroundImage:
              "url('/images/hero-trailer-saw.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        {/* Noise/texture */}
        <div className="absolute inset-0 opacity-[0.06] mix-blend-overlay" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, #fff 1px, transparent 1px)", backgroundSize: "12px 12px" }} />
      </div>

      <div className="relative z-10 w-full max-w-6xl px-6 py-16">
        <div className="max-w-3xl">
          <span className="inline-block text-sm tracking-widest uppercase font-semibold text-white/70 mb-4">StenenzagenOpLocatie.nl</span>
          <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
            Stenen zagen op locatie – snel, strak en professioneel
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-white/85 max-w-2xl">
            Mobiel zagen van metselstenen, straatstenen, steenstrips en maatwerkstenen – direct op uw bouwplaats.
          </p>

          <div className="mt-8 flex flex-wrap gap-4 items-center">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-6 py-3 rounded-xl font-semibold text-white shadow-lg transition-transform hover:-translate-y-0.5"
              style={{ backgroundColor: ORANGE }}
            >
              Offerte aanvragen
            </a>

            <a
              href="tel:0629270956"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-white bg-white/10 backdrop-blur border border-white/15 hover:bg-white/15 transition"
            >
              <Phone className="w-5 h-5 text-white" />
              <span>Bel of WhatsApp 06-29270956</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
