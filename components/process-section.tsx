const processSteps = [
  {
    number: "01",
    title: "Anfrage senden",
    description:
      "Teilen Sie uns Fahrzeugtyp, Baujahr, Zustand und Standort mit – per Formular oder E-Mail.",
  },
  {
    number: "02",
    title: "Bewertung erhalten",
    description:
      "Wir prüfen Ihr Angebot und unterbreiten Ihnen einen fairen, verbindlichen Ankaufspreis.",
  },
  {
    number: "03",
    title: "Übergabe & Abholung",
    description:
      "Nach Vereinbarung organisieren wir die Abholung oder treffen uns am Standort zur Übergabe.",
  },
  {
    number: "04",
    title: "Auszahlung",
    description:
      "Nach erfolgreicher Übergabe und Prüfung der Unterlagen erfolgt die vereinbarte Zahlung.",
  },
]

export function ProcessSection() {
  return (
    <section id="process" className="py-24 lg:py-32 relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <p className="section-label">Ankauf-Ablauf</p>
          <h2 className="text-2xl md:text-4xl mb-6">In vier Schritten zum Verkauf</h2>
          <p className="text-muted-foreground text-base leading-snug">
            Unkompliziert und transparent – so läuft der Ankauf bei der Afrang GmbH ab.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {processSteps.map((step) => (
            <div key={step.number} className="glass-effect rounded-md p-6">
              <span className="gold-text text-sm font-medium">
                {step.number}
              </span>
              <h3 className="text-xl mt-3 mb-3">{step.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
