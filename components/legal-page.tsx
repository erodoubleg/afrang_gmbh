import type { ReactNode } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export function LegalPage({
  title,
  children,
}: {
  title: string
  children: ReactNode
}) {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="container mx-auto px-4 lg:px-8 pt-28 pb-16 max-w-3xl">
        <h1 className="text-2xl md:text-3xl mb-10 font-medium tracking-tight">{title}</h1>
        <div className="space-y-8 text-muted-foreground leading-relaxed">{children}</div>
      </main>

      <Footer />
    </div>
  )
}
