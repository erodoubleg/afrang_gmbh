"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, Mail } from "lucide-react"

const navLinks = [
  { name: "Über uns", href: "#about" },
  { name: "Ankauf", href: "#categories" },
  { name: "Ablauf", href: "#process" },
  { name: "FAQ", href: "#faq" },
  { name: "Kontakt", href: "#contact" },
]

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "glass-effect py-3" : "bg-background/80 py-5"
        }`}
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between">
            <Link href="/" className="relative z-10">
              <Image
                src="/logo.png"
                alt="Afrang GmbH Logo"
                width={140}
                height={56}
                className="h-10 w-auto md:h-12"
                priority
              />
            </Link>

            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-sm text-foreground/90 hover:text-primary transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            <div className="hidden lg:block">
              <Link href="#contact" className="btn-primary text-sm px-6 py-2.5">
                Fahrzeug verkaufen
              </Link>
            </div>

            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden relative z-10 p-2"
              aria-label="Menü öffnen"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </header>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-background/98 backdrop-blur-lg lg:hidden">
          <nav className="flex flex-col items-center justify-center h-full gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-xl text-foreground hover:text-primary transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="btn-primary mt-4"
            >
              Fahrzeug verkaufen
            </Link>
            <a
              href="mailto:info@afrang-gmbh.de"
              className="flex items-center gap-2 text-muted-foreground mt-4"
            >
              <Mail className="w-5 h-5" />
              info@afrang-gmbh.de
            </a>
          </nav>
        </div>
      )}
    </>
  )
}
