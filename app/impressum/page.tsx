import type { Metadata } from "next"
import { LegalPage } from "@/components/legal-page"

export const metadata: Metadata = {
  title: "Impressum | Afrang GmbH",
  description: "Impressum der Afrang GmbH – Ankauf von LKWs und Baumaschinen.",
}

export default function ImpressumPage() {
  return (
    <LegalPage title="Impressum">
      <section className="space-y-4">
        <h2 className="text-lg font-medium text-foreground">Angaben gemäß § 5 TMG</h2>
        <p>
          <strong className="text-foreground">Afrang GmbH</strong>
          <br />
          Kaiser-Friedrich-Promenade 2
          <br />
          61348 Bad Homburg v.d. Höhe
          <br />
          Deutschland
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-medium text-foreground">Vertreten durch</h2>
        <p>Geschäftsführer: Elyaz Haidari</p>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-medium text-foreground">Kontakt</h2>
        <p>
          E-Mail:{" "}
          <a href="mailto:info@afrang-gmbh.de" className="text-primary hover:underline">
            info@afrang-gmbh.de
          </a>
          <br />
          E-Mail:{" "}
          <a href="mailto:elyaz@afrang-gmbh.de" className="text-primary hover:underline">
            elyaz@afrang-gmbh.de
          </a>
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-medium text-foreground">Registereintrag</h2>
        <p>
          Eintragung im Handelsregister.
          <br />
          Registergericht: Amtsgericht Bad Homburg v.d. Höhe
          <br />
          Registernummer: HRB 16951
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-medium text-foreground">Umsatzsteuer-ID</h2>
        <p>
          Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:
          <br />
          DE363909350
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-medium text-foreground">
          Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
        </h2>
        <p>
          Elyaz Haidari
          <br />
          Kaiser-Friedrich-Promenade 2
          <br />
          61348 Bad Homburg v.d. Höhe
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-medium text-foreground">EU-Streitschlichtung</h2>
        <p>
          Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS)
          bereit:{" "}
          <a
            href="https://ec.europa.eu/consumers/odr/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            https://ec.europa.eu/consumers/odr/
          </a>
          . Unsere E-Mail-Adresse finden Sie oben im Impressum.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-medium text-foreground">
          Verbraucherstreitbeilegung / Universalschlichtungsstelle
        </h2>
        <p>
          Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
          Verbraucherschlichtungsstelle teilzunehmen.
        </p>
      </section>
    </LegalPage>
  )
}
