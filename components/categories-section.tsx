import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const categories = [
  {
    title: "LKWs & Sattelzugmaschinen",
    description:
      "Wir kaufen Nutzfahrzeuge aller Klassen an – von der Zugmaschine bis zum Kipper.",
    image: "/images/hero-truck.png",
  },
  {
    title: "Baumaschinen & Logistik",
    description:
      "Kräne, Hafenlogistik und schwere Maschinen – gebraucht oder neuwertig.",
    image: "/images/port-cranes.jpg",
  },
  {
    title: "Nutzfahrzeuge & Spezialfahrzeuge",
    description:
      "Transporter, Auflieger und Sonderfahrzeuge – sprechen Sie uns an.",
    image: "/images/port-yard.jpg",
  },
]

export function CategoriesSection() {
  return (
    <section id="categories" className="py-24 lg:py-32 relative overflow-hidden bg-card/20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="section-label">Ankauf-Bereiche</p>
          <h2 className="text-2xl md:text-4xl mb-6">Was wir ankaufen</h2>
          <p className="text-muted-foreground text-base leading-snug">
            Wir sind auf den Ankauf schwerer Nutzfahrzeuge und Baumaschinen
            spezialisiert. Senden Sie uns Ihre Fahrzeugdaten – wir prüfen jedes
            Angebot individuell.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <article
              key={category.title}
              className="group glass-effect rounded-md overflow-hidden"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={category.image}
                  alt={category.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  quality={65}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="text-xl mb-2 group-hover:text-primary transition-colors">
                  {category.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {category.description}
                </p>
                <Link
                  href="#contact"
                  className="inline-flex items-center gap-2 text-sm text-primary hover:gap-3 transition-all"
                >
                  Ankauf anfragen
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
