const stats = [
  { value: "48h", label: "Rückmeldung nach Anfrage" },
  { value: "15+", label: "Jahre Branchenerfahrung" },
  { value: "DE", label: "Ankauf bundesweit" },
  { value: "100%", label: "Transparente Abwicklung" },
]

export function StatsSection() {
  return (
    <section className="py-16 border-y border-border/50 bg-card/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center lg:text-left">
              <p className="text-2xl md:text-3xl lg:text-4xl font-medium gold-text mb-2 tracking-tight">
                {stat.value}
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
