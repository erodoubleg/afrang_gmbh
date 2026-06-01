"use client"

import { MapPin, Phone, Mail, Clock, Send } from "lucide-react"

export function ContactSection() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)

    const name = data.get("name") as string
    const company = data.get("company") as string
    const email = data.get("email") as string
    const phone = data.get("phone") as string
    const vehicle = data.get("vehicle") as string
    const message = data.get("message") as string

    const subject = encodeURIComponent(
      `Ankauf-Anfrage: ${vehicle || "Fahrzeug"} – ${name}`
    )
    const body = encodeURIComponent(
      `Name: ${name}\n` +
        (company ? `Firma: ${company}\n` : "") +
        `E-Mail: ${email}\n` +
        (phone ? `Telefon: ${phone}\n` : "") +
        `Fahrzeugtyp: ${vehicle || "–"}\n\n` +
        `Nachricht:\n${message}`
    )

    window.location.href = `mailto:info@afrang-gmbh.de?subject=${subject}&body=${body}`
  }

  const contactInfo = [
    {
      icon: MapPin,
      label: "Adresse",
      value: "Kaiser-Friedrich-Promenade 2",
      subValue: "61348 Bad Homburg v.d. Höhe",
    },
    {
      icon: Phone,
      label: "Telefon",
      value: "Auf Anfrage",
      subValue: "Mo–Fr 9:00 – 18:00",
    },
    {
      icon: Mail,
      label: "E-Mail",
      value: "info@afrang-gmbh.de",
      subValue: "elyaz@afrang-gmbh.de",
    },
    {
      icon: Clock,
      label: "Öffnungszeiten",
      value: "Mo – Fr: 9:00 – 18:00",
      subValue: "Sa – So: Geschlossen",
    },
  ]

  return (
    <section id="contact" className="py-24 lg:py-32 relative overflow-hidden bg-card/20">
      <div className="absolute top-0 left-0 right-0 h-px bg-border" />

      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="section-label">Kontakt</p>
          <h2 className="text-2xl md:text-4xl mb-6">Ankauf anfragen</h2>
          <p className="text-muted-foreground text-base leading-snug">
            Beschreiben Sie Ihr Fahrzeug – wir melden uns mit einem Angebot.
            Das Formular öffnet Ihr E-Mail-Programm mit vorausgefüllten Angaben.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="grid sm:grid-cols-2 gap-6">
            {contactInfo.map((item) => (
              <div key={item.label} className="glass-effect p-6 rounded-md">
                <div className="w-10 h-10 rounded-md bg-primary/15 border border-primary/25 flex items-center justify-center mb-4">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-xs font-medium text-primary mb-2">{item.label}</h3>
                <p className="text-foreground font-medium text-sm">{item.value}</p>
                <p className="text-muted-foreground text-xs mt-1">{item.subValue}</p>
              </div>
            ))}
          </div>

          <div className="glass-effect p-8 rounded-md">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 bg-background border border-border rounded-md focus:border-primary focus:ring-1 focus:ring-primary outline-none"
                    placeholder="Ihr Name"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium mb-2">
                    Firma
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    className="w-full px-4 py-3 bg-background border border-border rounded-md focus:border-primary focus:ring-1 focus:ring-primary outline-none"
                    placeholder="Ihre Firma"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    E-Mail *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 bg-background border border-border rounded-md focus:border-primary focus:ring-1 focus:ring-primary outline-none"
                    placeholder="ihre@email.de"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">
                    Telefon
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3 bg-background border border-border rounded-md focus:border-primary focus:ring-1 focus:ring-primary outline-none"
                    placeholder="+49 ..."
                  />
                </div>
              </div>

              <div>
                <label htmlFor="vehicle" className="block text-sm font-medium mb-2">
                  Fahrzeugtyp *
                </label>
                <select
                  id="vehicle"
                  name="vehicle"
                  required
                  className="w-full px-4 py-3 bg-background border border-border rounded-md focus:border-primary focus:ring-1 focus:ring-primary outline-none"
                >
                  <option value="">Bitte wählen...</option>
                  <option value="LKW / Sattelzugmaschine">LKW / Sattelzugmaschine</option>
                  <option value="Baumaschine">Baumaschine</option>
                  <option value="Nutzfahrzeug">Nutzfahrzeug</option>
                  <option value="Sonstiges">Sonstiges</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Fahrzeugbeschreibung *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full px-4 py-3 bg-background border border-border rounded-md focus:border-primary focus:ring-1 focus:ring-primary outline-none resize-none"
                  placeholder="Baujahr, Zustand, Kilometerstand, Besonderheiten..."
                />
              </div>

              <button type="submit" className="w-full btn-primary flex items-center justify-center gap-2">
                <Send className="w-5 h-5" />
                Per E-Mail senden
              </button>

              <p className="text-xs text-muted-foreground text-center">
                Beim Absenden öffnet sich Ihr E-Mail-Programm mit den eingegebenen Daten.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
