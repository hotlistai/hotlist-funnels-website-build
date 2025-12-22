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
    <footer className="border-t border-border bg-slate-50 py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16">
          <div className="space-y-6">
            <div className="text-2xl font-bold tracking-tighter uppercase text-[#121212]">
              HOTLIST <span className="text-primary italic">ENGINE</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs font-medium">
              Forging high-velocity conversion systems. Speed over sprawl. Clarity over complexity.
            </p>
          </div>

          <div>
            <h3 className="text-[10px] font-bold uppercase tracking-widest mb-8 text-[#121212]">Solutions</h3>
            <ul className="space-y-4">
              {solutions.map((solution) => (
                <li key={solution.href}>
                  <Link
                    href={solution.href}
                    className="text-xs text-muted-foreground hover:text-primary transition-colors uppercase tracking-widest font-bold"
                  >
                    {solution.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[10px] font-bold uppercase tracking-widest mb-8 text-[#121212]">Architecture</h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/how-it-works"
                  className="text-xs text-muted-foreground hover:text-primary transition-colors uppercase tracking-widest font-bold"
                >
                  Philosophy
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing"
                  className="text-xs text-muted-foreground hover:text-primary transition-colors uppercase tracking-widest font-bold"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-xs text-muted-foreground hover:text-primary transition-colors uppercase tracking-widest font-bold"
                >
                  Connect
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-[10px] font-bold uppercase tracking-widest mb-8 text-[#121212]">Status</h3>
            <div className="flex items-center gap-2 text-xs text-muted-foreground uppercase tracking-widest font-bold">
              <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              All Systems Operational
            </div>
          </div>
        </div>

        <div className="mt-24 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">
            © {new Date().getFullYear()} HOTLIST ENGINE // PRECISION FORGED
          </p>
          <div className="flex gap-8">
            <Link href="/privacy" className="text-[10px] font-bold text-muted-foreground hover:text-primary uppercase tracking-widest">Privacy</Link>
            <Link href="/terms" className="text-[10px] font-bold text-muted-foreground hover:text-primary uppercase tracking-widest">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
