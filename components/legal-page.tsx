import type { ReactNode } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export function LegalPage({
  title,
  children,
}: {
  title: string
  children: ReactNode
}) {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card/30">
        <div className="container mx-auto px-4 lg:px-8 py-6 flex items-center justify-between">
          <Link href="/" className="inline-block">
            <Image
              src="/logo.png"
              alt="Afrang GmbH"
              width={100}
              height={100}
              className="h-10 w-auto"
            />
          </Link>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Zur Startseite
          </Link>
        </div>
      </header>

      <main className="container mx-auto px-4 lg:px-8 py-16 max-w-3xl">
        <h1 className="text-2xl md:text-3xl mb-10 font-medium tracking-tight">{title}</h1>
        <div className="prose-legal space-y-6 text-muted-foreground leading-relaxed">
          {children}
        </div>
      </main>
    </div>
  )
}
