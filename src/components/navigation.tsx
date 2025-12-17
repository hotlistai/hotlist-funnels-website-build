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
    <nav className="border-b border-border bg-background sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="font-serif text-xl font-semibold">
            Hotlist Engine
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent">
                    Solutions
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                      {solutions.map((solution) => (
                        <NavigationMenuLink key={solution.href} asChild>
                          <Link
                            href={solution.href}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">
                              {solution.name}
                            </div>
                          </Link>
                        </NavigationMenuLink>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <Link
              href="/how-it-works"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              How It Works
            </Link>
            <Link
              href="/pricing"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Pricing
            </Link>
            <Link href="/contact">
              <Button>Book a Demo</Button>
            </Link>
          </div>

          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px]">
              <div className="flex flex-col gap-6 mt-6">
                <div className="flex flex-col gap-4">
                  <div className="font-medium text-sm text-muted-foreground">
                    Solutions
                  </div>
                  <div className="flex flex-col gap-2 pl-4">
                    {solutions.map((solution) => (
                      <Link
                        key={solution.href}
                        href={solution.href}
                        className="text-sm hover:text-foreground transition-colors"
                        onClick={() => setMobileOpen(false)}
                      >
                        {solution.name}
                      </Link>
                    ))}
                  </div>
                </div>
                <Link
                  href="/how-it-works"
                  className="text-sm font-medium"
                  onClick={() => setMobileOpen(false)}
                >
                  How It Works
                </Link>
                <Link
                  href="/pricing"
                  className="text-sm font-medium"
                  onClick={() => setMobileOpen(false)}
                >
                  Pricing
                </Link>
                <Link href="/contact" onClick={() => setMobileOpen(false)}>
                  <Button className="w-full">Book a Demo</Button>
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  )
}
