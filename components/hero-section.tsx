import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <Image
          src="/industrial-port-container-yard(1).jpg"
          alt="Containerterminal mit LKWs und Logistik"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
          quality={75}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/55 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/40" />
      </div>

      <div className="relative z-10 container mx-auto px-4 lg:px-8 pt-28 pb-20">
        <div className="max-w-4xl">
          <p className="section-label">Seriöser Fahrzeugankauf</p>

          <h1 className="text-4xl md:text-5xl lg:text-6xl leading-[1.05] mb-6 font-medium">
            <span className="text-foreground">Wir kaufen Ihre LKWs</span>
            <br />
            <span className="gold-text">& Baumaschinen</span>
          </h1>

          <p className="text-base md:text-lg text-muted-foreground max-w-xl mb-10 leading-snug">
            Afrang GmbH ist Ihr Ansprechpartner für den fairen Ankauf von
            Nutzfahrzeugen und Baumaschinen. Schnelle Bewertung, transparente
            Konditionen und unkomplizierte Abwicklung aus Bad Homburg.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="#contact" className="btn-primary text-center">
              Fahrzeug verkaufen
            </Link>
            <Link
              href="#process"
              className="btn-outline text-center inline-flex items-center justify-center gap-2"
            >
              So funktioniert der Ankauf
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
