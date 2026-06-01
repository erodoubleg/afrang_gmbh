import Link from "next/link"

export function CtaSection() {
  return (
    <section className="py-20 lg:py-24 bg-card/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="glass-effect rounded-md p-10 lg:p-16 text-center max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl mb-6">
            Bereit, Ihr Fahrzeug zu verkaufen?
          </h2>
          <p className="text-muted-foreground text-base mb-8 max-w-xl mx-auto leading-snug">
            Senden Sie uns noch heute Ihre Anfrage. Wir prüfen Ihr Angebot und
            melden uns mit einem fairen Ankaufsvorschlag.
          </p>
          <Link href="#contact" className="btn-primary inline-block">
            Jetzt Ankauf anfragen
          </Link>
        </div>
      </div>
    </section>
  )
}
