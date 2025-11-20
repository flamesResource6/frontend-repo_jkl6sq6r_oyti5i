import { CheckCircle2 } from "lucide-react"

export default function WhyChoose() {
  const usps = [
    "Wij komen direct naar uw bouwplaats",
    "Hoge aantallen in korte tijd",
    "Scherpe tarieven en betrouwbare planning",
    "Strak, nauwkeurig en stofarm zaagwerk",
    "Snel inzetbaar in heel Nederland",
  ]

  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-end justify-between mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[#111]">Waarom bedrijven ons kiezen</h2>
        </div>

        <ul className="grid md:grid-cols-2 gap-x-10 gap-y-4">
          {usps.map((u) => (
            <li key={u} className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-[#FF6A1A] mt-0.5" />
              <span className="text-black/80 leading-relaxed">{u}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
