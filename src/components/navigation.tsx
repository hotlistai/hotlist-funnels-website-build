"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

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

export function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 flex flex-col">
      {/* Trust Ticker */}
      <div className="bg-primary text-white text-[10px] font-bold uppercase tracking-widest py-2 text-center">
        7-Day Launch Guarantee&nbsp;&nbsp;·&nbsp;&nbsp;300+ Funnels Deployed&nbsp;&nbsp;·&nbsp;&nbsp;Rated 4.9 / 5
      </div>

      {/* Main Nav */}
      <nav className="border-b border-border bg-white/90 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            <Link href="/" className="flex items-center">
              <Image
                src="/hotlist-funnels-wordmark-transparent.png"
                alt="HOTLIST FUNNELS"
                width={200}
                height={44}
                className="h-10 w-auto object-contain mix-blend-multiply"
                priority
              />
            </Link>

            <div className="hidden md:flex items-center gap-12">
              <Link
                href="/how-it-works"
                className="text-[10px] font-bold uppercase tracking-widest text-[#121212] hover:text-primary transition-colors"
              >
                Architecture
              </Link>
              <Link
                href="/pricing"
                className="text-[10px] font-bold uppercase tracking-widest text-[#121212] hover:text-primary transition-colors"
              >
                Pricing
              </Link>
              <Link href="/book-a-demo">
                <Button className="rounded-none bg-primary hover:bg-primary/90 font-bold px-8 h-12 tracking-widest text-white text-xs uppercase">
                  BOOK DEMO
                </Button>
              </Link>
            </div>

            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon" className="text-[#121212]">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] bg-white">
                <div className="flex flex-col gap-6 mt-6">
                  <div className="flex flex-col gap-4">
                    <div className="font-bold text-[10px] uppercase tracking-widest text-muted-foreground">
                      Solutions
                    </div>
                    <div className="flex flex-col gap-2 pl-4">
                      {solutions.map((solution) => (
                        <Link
                          key={solution.href}
                          href={solution.href}
                          className="text-sm font-bold uppercase tracking-tight text-[#121212] hover:text-primary transition-colors"
                          onClick={() => setMobileOpen(false)}
                        >
                          {solution.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                  <Link
                    href="/how-it-works"
                    className="text-xs font-bold uppercase tracking-widest text-[#121212]"
                    onClick={() => setMobileOpen(false)}
                  >
                    Architecture
                  </Link>
                  <Link
                    href="/pricing"
                    className="text-xs font-bold uppercase tracking-widest text-[#121212]"
                    onClick={() => setMobileOpen(false)}
                  >
                    Pricing
                  </Link>
                  <Link href="/book-a-demo" onClick={() => setMobileOpen(false)}>
                    <Button className="w-full rounded-none bg-primary hover:bg-primary/90 font-bold text-white text-xs uppercase py-6">Book a Demo</Button>
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </header>
  )
}
