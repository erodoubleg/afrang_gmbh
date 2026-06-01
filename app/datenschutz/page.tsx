import type { Metadata } from "next"
import Link from "next/link"
import { LegalPage } from "@/components/legal-page"

export const metadata: Metadata = {
  title: "Datenschutz | Afrang GmbH",
  description: "Datenschutzerklärung der Afrang GmbH.",
}

export default function DatenschutzPage() {
  return (
    <LegalPage title="Datenschutzerklärung">
      <section className="space-y-4">
        <h2 className="text-lg font-medium text-foreground">1. Verantwortlicher</h2>
        <p>
          Verantwortlich für die Datenverarbeitung auf dieser Website ist:
          <br />
          <br />
          Afrang GmbH
          <br />
          Kaiser-Friedrich-Promenade 2
          <br />
          61348 Bad Homburg v.d. Höhe
          <br />
          Deutschland
          <br />
          <br />
          Geschäftsführer: Elyaz Haidari
          <br />
          E-Mail:{" "}
          <a href="mailto:info@afrang-gmbh.de" className="text-primary hover:underline">
            info@afrang-gmbh.de
          </a>
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-medium text-foreground">
          2. Allgemeine Hinweise zur Datenverarbeitung
        </h2>
        <p>
          Wir nehmen den Schutz Ihrer persönlichen Daten ernst. Personenbezogene Daten
          sind alle Daten, mit denen Sie persönlich identifiziert werden können. Diese
          Datenschutzerklärung informiert Sie darüber, welche Daten wir erheben, wofür wir
          sie nutzen und welche Rechte Sie haben.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-medium text-foreground">
          3. Bereitstellung der Website und Logfiles
        </h2>
        <p>
          Beim Aufruf unserer Website werden durch den Hosting-Anbieter automatisch
          Informationen erfasst (z. B. IP-Adresse, Datum und Uhrzeit des Abrufs,
          Browsertyp, Betriebssystem). Die Verarbeitung erfolgt auf Grundlage von Art. 6
          Abs. 1 lit. f DSGVO (berechtigtes Interesse an einem sicheren und stabilen
          Betrieb der Website).
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-medium text-foreground">4. Kontaktaufnahme</h2>
        <p>
          Wenn Sie uns per E-Mail oder über das Kontaktformular auf der Website
          kontaktieren, verarbeiten wir die von Ihnen mitgeteilten Daten (z. B. Name,
          E-Mail-Adresse, Telefonnummer, Inhalt der Nachricht), um Ihre Anfrage zu
          bearbeiten.
        </p>
        <p>
          Das Kontaktformular öffnet Ihr E-Mail-Programm (mailto-Link). Die Übermittlung
          erfolgt über Ihren E-Mail-Anbieter; wir haben keinen Einfluss auf dessen
          Datenverarbeitung.
        </p>
        <p>
          Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO (Vertragsanbahnung) bzw. Art. 6
          Abs. 1 lit. f DSGVO (berechtigtes Interesse an der Beantwortung von Anfragen).
        </p>
        <p>
          Die Daten werden gelöscht, sobald die Anfrage abschließend bearbeitet ist und
          keine gesetzlichen Aufbewahrungspflichten entgegenstehen.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-medium text-foreground">5. Webanalyse (Vercel Analytics)</h2>
        <p>
          Auf dieser Website kann Vercel Analytics eingesetzt werden, ein
          datenschutzfreundliches Analysewerkzeug ohne Cookies. Es werden aggregierte,
          anonymisierte Nutzungsdaten erfasst (z. B. Seitenaufrufe, Herkunftsland).
          Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der
          Optimierung unseres Webangebots).
        </p>
        <p>
          Anbieter: Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, USA.
          Weitere Informationen:{" "}
          <a
            href="https://vercel.com/legal/privacy-policy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            https://vercel.com/legal/privacy-policy
          </a>
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-medium text-foreground">6. Externe Dienste und Links</h2>
        <p>
          Unsere Website kann eingebettete Karten oder Links zu externen Websites
          enthalten. Für die Datenverarbeitung auf externen Seiten sind die jeweiligen
          Betreiber verantwortlich.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-medium text-foreground">7. Ihre Rechte</h2>
        <p>Sie haben gegenüber uns folgende Rechte:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Auskunft über Ihre gespeicherten Daten (Art. 15 DSGVO)</li>
          <li>Berichtigung unrichtiger Daten (Art. 16 DSGVO)</li>
          <li>Löschung Ihrer Daten (Art. 17 DSGVO)</li>
          <li>Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
          <li>Datenübertragbarkeit (Art. 20 DSGVO)</li>
          <li>Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)</li>
          <li>
            Beschwerde bei einer Aufsichtsbehörde (Art. 77 DSGVO), z. B. beim Hessischen
            Beauftragten für Datenschutz und Informationsfreiheit
          </li>
        </ul>
        <p>
          Zur Ausübung Ihrer Rechte wenden Sie sich an:{" "}
          <a href="mailto:info@afrang-gmbh.de" className="text-primary hover:underline">
            info@afrang-gmbh.de
          </a>
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-medium text-foreground">8. Änderung dieser Datenschutzerklärung</h2>
        <p>
          Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit sie stets den
          aktuellen rechtlichen Anforderungen entspricht. Die jeweils aktuelle Version
          finden Sie auf dieser Seite.
        </p>
        <p className="text-sm">Stand: Juni 2026</p>
      </section>

      <p className="pt-4">
        <Link href="/impressum" className="text-primary hover:underline">
          Zum Impressum
        </Link>
      </p>
    </LegalPage>
  )
}
