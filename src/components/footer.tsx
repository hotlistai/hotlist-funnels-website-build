import Link from "next/link"

const solutions = [
  { name: "Real Estate", href: "/real-estate" },
  { name: "Solar", href: "/solar" },
  { name: "Legal", href: "/legal" },
  { name: "Restaurants", href: "/restaurants" },
  { name: "Contractors", href: "/contractors" },
  { name: "Blue Collar", href: "/blue-collar" },
  { name: "Nonprofits", href: "/nonprofits" },
  { name: "Fitness", href: "/fitness" },
]

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#0A0A0A] py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16">
          <div className="space-y-6">
            <div className="text-2xl font-bold tracking-tighter uppercase">
              HOTLIST <span className="text-primary">ENGINE</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              Forging high-velocity conversion systems. Speed over sprawl. Clarity over complexity.
            </p>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest mb-8 text-foreground">Solutions</h3>
            <ul className="space-y-4">
              {solutions.map((solution) => (
                <li key={solution.href}>
                  <Link
                    href={solution.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors uppercase tracking-tight font-medium"
                  >
                    {solution.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest mb-8 text-foreground">Architecture</h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/how-it-works"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors uppercase tracking-tight font-medium"
                >
                  Philosophy
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors uppercase tracking-tight font-medium"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors uppercase tracking-tight font-medium"
                >
                  Connect
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest mb-8 text-foreground">Status</h3>
            <div className="flex items-center gap-2 text-sm text-muted-foreground uppercase tracking-tight font-medium">
              <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              All Systems Operational
            </div>
          </div>
        </div>

        <div className="mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest">
            © {new Date().getFullYear()} HOTLIST ENGINE // PRECISION FORGED
          </p>
          <div className="flex gap-8">
            <Link href="/privacy" className="text-xs font-mono text-muted-foreground hover:text-primary uppercase tracking-widest">Privacy</Link>
            <Link href="/terms" className="text-xs font-mono text-muted-foreground hover:text-primary uppercase tracking-widest">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
