import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "Page Not Found | HOTLIST FUNNELS",
}

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Navigation />
      <main className="flex-1 flex items-center justify-center px-6">
        <div className="text-center max-w-lg">
          <p className="text-[10px] font-bold uppercase tracking-widest text-primary mb-6">404</p>
          <h1 className="font-serif text-5xl md:text-6xl font-semibold mb-6">
            Page not found.
          </h1>
          <p className="text-muted-foreground text-lg mb-10">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/">
              <Button className="rounded-none bg-primary hover:bg-primary/90 font-bold px-8 h-12 tracking-widest text-white text-xs uppercase">
                GO HOME
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" className="rounded-none font-bold px-8 h-12 tracking-widest text-xs uppercase">
                CONTACT US
              </Button>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
