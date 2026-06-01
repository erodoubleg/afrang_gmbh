"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowUp, Mail, MapPin } from "lucide-react"

const footerLinks = {
  navigation: [
    { name: "Über uns", href: "#about" },
    { name: "Ankauf", href: "#categories" },
    { name: "Ablauf", href: "#process" },
    { name: "FAQ", href: "#faq" },
    { name: "Kontakt", href: "#contact" },
  ],
  ankauf: [
    { name: "LKW Ankauf", href: "#categories" },
    { name: "Baumaschinen", href: "#categories" },
    { name: "Nutzfahrzeuge", href: "#categories" },
    { name: "Anfrage senden", href: "#contact" },
  ],
}

export function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" })

  return (
    <footer className="relative bg-card/50 border-t border-border">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/logo.png"
                alt="Afrang GmbH Logo"
                width={120}
                height={120}
                className="h-12 w-auto"
              />
            </Link>
            <p className="text-muted-foreground mb-6 leading-relaxed text-sm">
              Afrang GmbH – Ihr seriöser Partner für den Ankauf von LKWs,
              Baumaschinen und Nutzfahrzeugen aus Bad Homburg.
            </p>
            <div className="space-y-3 text-sm">
              <a
                href="mailto:info@afrang-gmbh.de"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="w-4 h-4" />
                info@afrang-gmbh.de
              </a>
              <div className="flex items-start gap-3 text-muted-foreground">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>
                  Kaiser-Friedrich-Promenade 2
                  <br />
                  61348 Bad Homburg v.d. Höhe
                </span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-medium text-primary mb-6">Navigation</h3>
            <ul className="space-y-3">
              {footerLinks.navigation.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-medium text-primary mb-6">Ankauf</h3>
            <ul className="space-y-3">
              {footerLinks.ankauf.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-medium text-primary mb-6">Kontakt</h3>
            <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
              Sie möchten ein Fahrzeug verkaufen? Wir freuen uns auf Ihre Anfrage.
            </p>
            <Link href="#contact" className="btn-primary text-sm inline-block px-6 py-3">
              Ankauf anfragen
            </Link>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Afrang GmbH. Alle Rechte vorbehalten.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/impressum"
              className="text-muted-foreground hover:text-foreground text-sm transition-colors"
            >
              Impressum
            </Link>
            <Link
              href="/datenschutz"
              className="text-muted-foreground hover:text-foreground text-sm transition-colors"
            >
              Datenschutz
            </Link>
            <button
              onClick={scrollToTop}
              className="w-10 h-10 rounded-md border border-border hover:border-primary flex items-center justify-center text-muted-foreground hover:text-primary transition-colors"
              aria-label="Nach oben scrollen"
            >
              <ArrowUp className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
