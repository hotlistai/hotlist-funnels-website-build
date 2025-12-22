"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
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
    <nav className="glass sticky top-0 z-50 border-b border-border bg-white/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="text-2xl font-bold tracking-tighter uppercase text-[#121212]">
            HOTLIST <span className="text-primary italic">ENGINE</span>
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
            <Link href="/contact">
              <Button className="rounded-none bg-primary hover:bg-primary/90 font-bold px-8 h-12 tracking-tight text-white text-xs uppercase letter-spacing-widest">
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
                <Link href="/contact" onClick={() => setMobileOpen(false)}>
                  <Button className="w-full rounded-none bg-primary hover:bg-primary/90 font-bold text-white text-xs uppercase py-6">Book a Demo</Button>
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  )
}
