import { BrickWall, Hammer, Ruler } from "lucide-react"

const ORANGE = "#FF6A1A"

const cards = [
  {
    title: "Metselstenen zagen",
    icon: BrickWall,
    img: "/images/service-metsel.jpg",
    text: "Snel en strak maatwerk voor metselwerk, gevelrenovatie en sparingen.",
  },
  {
    title: "Straatstenen zagen",
    icon: Hammer,
    img: "/images/service-straat.jpg",
    text: "Nauwkeurige pasvormen voor sierbestrating, inritten en projectstraten.",
  },
  {
    title: "Steenstrips & maatwerk",
    icon: Ruler,
    img: "/images/service-maatwerk.jpg",
    text: "Exacte strips, hoekstukken en specials – stofarm en consistent.",
  },
]

export default function Services() {
  return (
    <section className="w-full py-20 bg-white" id="diensten">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-end justify-between mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[#111]">Diensten</h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((c) => (
            <div key={c.title} className="group rounded-2xl overflow-hidden border border-black/[0.06] bg-white shadow-[0_10px_30px_-20px_rgba(0,0,0,0.4)] hover:shadow-[0_20px_50px_-20px_rgba(0,0,0,0.5)] transition-all">
              <div className="relative aspect-[16/10] overflow-hidden">
                <img src={c.img} alt={c.title} className="w-full h-full object-cover scale-100 group-hover:scale-[1.03] transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                <div className="absolute top-3 left-3 inline-flex items-center justify-center w-10 h-10 rounded-lg" style={{ backgroundColor: ORANGE }}>
                  <c.icon className="w-5 h-5 text-white" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#111]">{c.title}</h3>
                <p className="mt-2 text-sm text-black/70 leading-relaxed">{c.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
