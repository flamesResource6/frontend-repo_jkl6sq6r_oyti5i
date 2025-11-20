import { Building2, Users, Square } from "lucide-react"

export default function ForWhom() {
  const items = [
    { title: "Aannemers", icon: Building2, img: "/images/for-aannemers.jpg" },
    { title: "Metselaars", icon: Users, img: "/images/for-metselaars.jpg" },
    { title: "Stratenmakers", icon: Square, img: "/images/for-stratenmakers.jpg" },
  ]

  return (
    <section className="w-full py-20 bg-[#0b0b0b]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-end justify-between mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white">Voor wie wij werken</h2>
        </div>

        <div className="grid sm:grid-cols-3 gap-8">
          {items.map((it) => (
            <div key={it.title} className="text-center">
              <div className="mx-auto w-24 h-24 rounded-full ring-1 ring-white/15 overflow-hidden mb-4">
                <img src={it.img} alt={it.title} className="w-full h-full object-cover" />
              </div>
              <div className="inline-flex items-center gap-2 text-white/90">
                <it.icon className="w-5 h-5" />
                <span className="font-semibold tracking-wide">{it.title}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
