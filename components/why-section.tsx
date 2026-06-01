import { Shield, Clock, Handshake } from "lucide-react"

const reasons = [
  {
    icon: Shield,
    title: "Vertrauen & Diskretion",
    description:
      "Ihre Anfrage behandeln wir vertraulich. Keine unnötigen Zwischenhändler, keine versteckten Gebühren.",
  },
  {
    icon: Clock,
    title: "Schnelle Entscheidung",
    description:
      "Wir melden uns zeitnah mit einem konkreten Angebot – damit Sie schnell Klarheit haben.",
  },
  {
    icon: Handshake,
    title: "Direkter Ansprechpartner",
    description:
      "Ein fester Kontakt begleitet Sie durch den gesamten Ankauf – persönlich und erreichbar.",
  },
]

export function WhySection() {
  return (
    <section id="why" className="py-24 lg:py-32 relative overflow-hidden bg-card/20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="section-label">Warum Afrang</p>
          <h2 className="text-2xl md:text-4xl mb-6">
            Warum Sie an uns verkaufen sollten
          </h2>
          <p className="text-muted-foreground text-base leading-snug">
            Wir kaufen an, statt zu vermitteln. Das bedeutet für Sie: weniger
            Aufwand, klare Konditionen und ein seriöser Partner an Ihrer Seite.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="glass-effect rounded-md p-8 text-center"
            >
              <div className="w-14 h-14 rounded-md bg-primary/10 border border-border flex items-center justify-center mx-auto mb-6">
                <reason.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl mb-3">{reason.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
