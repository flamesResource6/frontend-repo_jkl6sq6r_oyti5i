const ORANGE = "#FF6A1A"

export default function Contact() {
  return (
    <section className="w-full py-24 bg-white" id="contact">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[#111] mb-4">Project waar stenen gezaagd moeten worden?</h2>
          <p className="text-black/70 mb-8 max-w-prose">Vertel kort wat er gezaagd moet worden en wanneer. We reageren snel met beschikbaarheid, doorlooptijd en scherpe tarieven.</p>

          <div className="space-y-3">
            <a
              href="tel:0629270956"
              className="inline-flex items-center justify-center px-6 py-3 rounded-xl font-semibold text-white shadow-lg"
              style={{ backgroundColor: ORANGE }}
            >
              Neem contact op
            </a>
            <p className="text-sm text-black/60">Of bel/WhatsApp: <a href="tel:0629270956" className="font-semibold text-[#111] hover:underline">06-29270956</a></p>
          </div>
        </div>

        <form onSubmit={(e) => e.preventDefault()} className="bg-[#f8f8f8] p-6 rounded-2xl border border-black/[0.06]">
          <div className="grid grid-cols-1 gap-4">
            <div>
              <label className="text-sm font-semibold text-[#111]">Naam</label>
              <input className="mt-1 w-full px-3 py-2 rounded-lg border border-black/10 bg-white focus:outline-none focus:ring-2 focus:ring-black/10" placeholder="Uw naam" />
            </div>
            <div>
              <label className="text-sm font-semibold text-[#111]">E-mail</label>
              <input type="email" className="mt-1 w-full px-3 py-2 rounded-lg border border-black/10 bg-white focus:outline-none focus:ring-2 focus:ring-black/10" placeholder="naam@bedrijf.nl" />
            </div>
            <div>
              <label className="text-sm font-semibold text-[#111]">Telefoon</label>
              <input className="mt-1 w-full px-3 py-2 rounded-lg border border-black/10 bg-white focus:outline-none focus:ring-2 focus:ring-black/10" placeholder="06-..." />
            </div>
            <div>
              <label className="text-sm font-semibold text-[#111]">Project omschrijving</label>
              <textarea rows={4} className="mt-1 w-full px-3 py-2 rounded-lg border border-black/10 bg-white focus:outline-none focus:ring-2 focus:ring-black/10" placeholder="Wat moet er gezaagd worden? Locatie? Deadline?" />
            </div>
            <button type="submit" className="mt-2 inline-flex items-center justify-center px-6 py-3 rounded-xl font-semibold text-white" style={{ backgroundColor: ORANGE }}>
              Offerte aanvragen
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}
