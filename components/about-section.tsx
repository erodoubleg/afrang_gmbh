import Image from "next/image"
import { Scale, FileCheck, Banknote } from "lucide-react"

const pillars = [
  {
    icon: Scale,
    title: "Faire Bewertung",
    description:
      "Wir bewerten Ihr Fahrzeug oder Ihre Maschine marktgerecht und nachvollziehbar – ohne versteckte Abzüge.",
  },
  {
    icon: FileCheck,
    title: "Klare Abwicklung",
    description:
      "Vom ersten Kontakt bis zur Übergabe begleiten wir Sie persönlich durch alle formalen Schritte.",
  },
  {
    icon: Banknote,
    title: "Schnelle Auszahlung",
    description:
      "Nach Vereinbarung erfolgt die Zahlung zügig und zuverlässig – Sie wissen genau, wann was passiert.",
  },
]

export function AboutSection() {
  return (
    <section id="about" className="py-24 lg:py-32 relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative aspect-[4/3] rounded-md overflow-hidden border border-primary/20">
            <Image
              src="/images/port-yard.jpg"
              alt="Containerterminal und Logistik"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              quality={70}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
          </div>

          <div>
            <p className="section-label">Über uns</p>
            <h2 className="text-2xl md:text-3xl mb-6 leading-tight">
              Seriöser Ankauf aus Bad Homburg
            </h2>
            <p className="text-muted-foreground text-base leading-snug mb-6">
              Die Afrang GmbH kauft LKWs, Baumaschinen und Nutzfahrzeuge direkt
              an – fair, diskret und ohne Umwege. Wir sind kein Vermittler, sondern
              Ihr direkter Ansprechpartner für den Verkauf Ihrer Fahrzeuge.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-10">
              Ob Einzelfahrzeug oder kleine Flotte: Wir prüfen Ihr Angebot
              zeitnah und melden uns mit einem konkreten Ankaufsvorschlag.
            </p>

            <div className="space-y-6">
              {pillars.map((pillar) => (
                <div key={pillar.title} className="flex gap-4">
                  <div className="w-12 h-12 rounded-md bg-primary/10 border border-border flex items-center justify-center flex-shrink-0">
                    <pillar.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-foreground mb-1">
                      {pillar.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
