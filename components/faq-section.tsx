import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "Welche Fahrzeuge kaufen Sie an?",
    answer:
      "Wir kaufen LKWs, Sattelzugmaschinen, Baumaschinen und weitere Nutzfahrzeuge an. Senden Sie uns die wichtigsten Daten – wir prüfen jedes Angebot individuell.",
  },
  {
    question: "In welchem Zustand muss das Fahrzeug sein?",
    answer:
      "Sowohl gut erhaltene als auch ältere oder reparaturbedürftige Fahrzeuge können für uns interessant sein. Beschreiben Sie den Zustand ehrlich – das beschleunigt die Bewertung.",
  },
  {
    question: "Welche Unterlagen werden benötigt?",
    answer:
      "In der Regel benötigen wir Fahrzeugschein, Servicehistorie (falls vorhanden) und Angaben zu Besonderheiten oder Schäden. Wir informieren Sie nach Ihrer Anfrage über die genauen Anforderungen.",
  },
  {
    question: "Wie schnell erhalte ich ein Angebot?",
    answer:
      "In der Regel melden wir uns innerhalb von 48 Stunden mit einer Rückmeldung oder einem ersten Ankaufsvorschlag – abhängig von Vollständigkeit und Komplexität Ihrer Anfrage.",
  },
  {
    question: "Wie erfolgt die Zahlung?",
    answer:
      "Die Zahlungsmodalitäten besprechen wir transparent im Ankaufsprozess. Nach Vereinbarung und erfolgreicher Übergabe erfolgt die Auszahlung zu den vereinbarten Konditionen.",
  },
  {
    question: "Übernehmen Sie die Abholung?",
    answer:
      "Ja, nach Absprache organisieren wir die Abholung oder treffen uns am vereinbarten Standort. Details klären wir individuell mit Ihnen.",
  },
]

export function FaqSection() {
  return (
    <section id="faq" className="py-24 lg:py-32 relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
        <div className="text-center mb-12">
          <p className="section-label">Häufige Fragen</p>
          <h2 className="text-2xl md:text-4xl mb-6">Fragen zum Ankauf</h2>
          <p className="text-muted-foreground text-lg">
            Antworten auf die wichtigsten Fragen rund um den Verkauf an die Afrang GmbH.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-base font-medium text-foreground hover:no-underline hover:text-primary">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
