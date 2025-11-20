export default function Gallery() {
  const images = [
    "/images/gallery-1.jpg",
    "/images/gallery-2.jpg",
    "/images/gallery-3.jpg",
    "/images/gallery-4.jpg",
    "/images/gallery-5.jpg",
    "/images/gallery-6.jpg",
    "/images/gallery-7.jpg",
    "/images/gallery-8.jpg",
  ]

  return (
    <section className="w-full py-20 bg-[#0b0b0b]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-end justify-between mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white">Projecten</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((src, i) => (
            <div key={src} className="group relative overflow-hidden rounded-xl bg-white/5">
              <img src={src} alt={`Project ${i+1}`} className="w-full h-40 sm:h-44 md:h-48 object-cover group-hover:scale-105 transition" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
