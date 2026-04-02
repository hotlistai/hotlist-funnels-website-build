import Link from "next/link"
import Image from "next/image"
import { Shield, Zap } from "lucide-react"

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
    <footer className="border-t border-border bg-[#121212] text-white py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-16">
          <div className="space-y-6">
            <Image
              src="/hotlist-funnels-icon.png"
              alt="HOTLIST FUNNELS"
              width={48}
              height={48}
              className="h-12 w-12 object-contain"
            />
            <p className="text-sm text-white/50 leading-relaxed max-w-xs font-medium">
              Precision-engineered lead funnels. Built in 7 days. Guaranteed to convert or your setup is free.
            </p>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white/40">
              <Shield className="h-3 w-3 text-primary" />
              7-Day Launch Guarantee
            </div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white/40">
              <Zap className="h-3 w-3 text-accent" />
              300+ Funnels Deployed
            </div>
          </div>

          <div>
            <h3 className="text-[10px] font-bold uppercase tracking-widest mb-8 text-white/40">Solutions</h3>
            <ul className="space-y-4">
              {solutions.map((solution) => (
                <li key={solution.href}>
                  <Link
                    href={solution.href}
                    className="text-xs text-white/50 hover:text-white transition-colors uppercase tracking-widest font-bold"
                  >
                    {solution.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[10px] font-bold uppercase tracking-widest mb-8 text-white/40">Company</h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/how-it-works"
                  className="text-xs text-white/50 hover:text-white transition-colors uppercase tracking-widest font-bold"
                >
                  How It Works
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing"
                  className="text-xs text-white/50 hover:text-white transition-colors uppercase tracking-widest font-bold"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="/book-a-demo"
                  className="text-xs text-white/50 hover:text-white transition-colors uppercase tracking-widest font-bold"
                >
                  Book a Demo
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-xs text-white/50 hover:text-white transition-colors uppercase tracking-widest font-bold"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-[10px] font-bold uppercase tracking-widest mb-8 text-white/40">Status</h3>
            <div className="flex items-center gap-2 text-xs text-white/50 uppercase tracking-widest font-bold mb-6">
              <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              All Systems Operational
            </div>
            <div className="space-y-3">
              <div className="text-[10px] font-bold uppercase tracking-widest text-white/30">Avg. launch time</div>
              <div className="text-2xl font-bold tracking-tighter text-white">6.2 days</div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] font-bold text-white/30 uppercase tracking-widest">
            © {new Date().getFullYear()} HOTLIST FUNNELS // PRECISION FORGED // HOTLISTFUNNELS.COM
          </p>
          <div className="flex gap-8">
            <Link href="/privacy" className="text-[10px] font-bold text-white/30 hover:text-white uppercase tracking-widest transition-colors">Privacy</Link>
            <Link href="/terms" className="text-[10px] font-bold text-white/30 hover:text-white uppercase tracking-widest transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
