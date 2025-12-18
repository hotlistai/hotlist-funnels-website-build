"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import {
  Building2,
  Sun,
  Scale,
  UtensilsCrossed,
  Hammer,
  HardHat,
  Heart,
  Dumbbell,
  Sparkles,
  Target,
  TrendingUp,
  Zap,
  BarChart,
  Settings,
  Check,
  ArrowRight,
} from "lucide-react"

const springTransition = {
  type: "spring",
  stiffness: 500,
  damping: 35,
  mass: 1,
}

const fadeIn = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  transition: springTransition,
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.05,
    },
  },
}

const industries = [
  {
    icon: Building2,
    name: "Real Estate",
    description: "High-velocity valuation funnels that capture sellers before they browse Zillow.",
    href: "/real-estate",
  },
  {
    icon: Sun,
    name: "Solar",
    description: "Psychological savings assessments that convert skepticism into signatures.",
    href: "/solar",
  },
  {
    icon: Scale,
    name: "Legal",
    description: "Rapid merit-check funnels that filter high-value cases in seconds.",
    href: "/legal",
  },
  {
    icon: UtensilsCrossed,
    name: "Restaurants",
    description: "Frictionless hiring systems that solve staffing shortages overnight.",
    href: "/restaurants",
  },
  {
    icon: Hammer,
    name: "Contractors",
    description: "Urgency-based project estimators that lock in homeowners instantly.",
    href: "/contractors",
  },
  {
    icon: HardHat,
    name: "Blue Collar",
    description: "Mobile-first trade assessments that identify skilled labor at scale.",
    href: "/blue-collar",
  },
  {
    icon: Heart,
    name: "Nonprofits",
    description: "Value-alignment funnels that turn passive observers into recurring donors.",
    href: "/nonprofits",
  },
  {
    icon: Dumbbell,
    name: "Fitness",
    description: "Commitment-triggering assessments that fill gym floors on autopilot.",
    href: "/fitness",
  },
]

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30">
      <Navigation />

      <section className="relative overflow-hidden pt-20 pb-32 border-b border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,122,255,0.05),transparent_50%)]" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerContainer}
            className="max-w-4xl"
          >
            <motion.div
              variants={fadeIn}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium mb-8"
            >
              <span className="flex h-2 w-2 rounded-full bg-accent animate-pulse" />
              Speed over Sprawl. Clarity over Complexity.
            </motion.div>
            <motion.h1
              variants={fadeIn}
              className="text-6xl md:text-8xl font-bold tracking-tighter mb-8 leading-[0.9]"
            >
              HIGH VELOCITY <span className="text-primary">CONVERSION</span> ENGINES
            </motion.h1>
            <motion.p
              variants={fadeIn}
              className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl leading-relaxed"
            >
              We don't build websites. We forge precision-engineered quiz funnels that leverage loss aversion and instant interaction to capture your ideal clientele.
            </motion.p>
            <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <Button size="lg" className="text-base h-14 px-10 bg-primary hover:bg-primary/90 rounded-none font-bold tracking-tight">
                  START THE ENGINE <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/how-it-works">
                <Button size="lg" variant="outline" className="text-base h-14 px-10 border-white/10 hover:bg-white/5 rounded-none font-bold tracking-tight">
                  VIEW ARCHITECTURE
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="py-32 border-b border-white/5 bg-[#0D0D0D]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-24 items-start">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.h2 variants={fadeIn} className="text-4xl md:text-6xl font-bold tracking-tighter mb-8 uppercase">
                The Foundry <br />Philosophy
              </motion.h2>
              <motion.p variants={fadeIn} className="text-xl text-muted-foreground mb-12">
                Every millisecond is a leak. Our architecture is stripped of fluff and optimized for psychological momentum.
              </motion.p>
              
              <div className="space-y-8">
                {[
                  { title: "Mobile-First Architecture", desc: "Thumb-driven interfaces designed for the modern attention span." },
                  { title: "Psychological Triggers", desc: "Using Loss Aversion and Perspective logic to drive instant commitments." },
                  { title: "Glassmorphism UI", desc: "Deep atmospheric depth without the visual noise of traditional layouts." }
                ].map((item, i) => (
                  <motion.div key={i} variants={fadeIn} className="flex gap-6">
                    <div className="text-primary font-mono text-sm">0{i+1}</div>
                    <div>
                      <h4 className="font-bold text-lg mb-2 uppercase tracking-tight">{item.title}</h4>
                      <p className="text-muted-foreground">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={springTransition}
              viewport={{ once: true }}
              className="glass-card p-1 rounded-none aspect-square relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20" />
              <div className="relative h-full w-full bg-[#0A0A0A] p-12 flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <Zap className="h-12 w-12 text-primary" />
                  <div className="text-right">
                    <div className="text-sm font-mono text-muted-foreground">LATENCY</div>
                    <div className="text-4xl font-bold">142ms</div>
                  </div>
                </div>
                <div>
                  <div className="text-sm font-mono text-muted-foreground mb-4">CONVERSION RATE</div>
                  <div className="text-8xl font-bold tracking-tighter text-accent">38.4%</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-32 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="mb-16"
          >
            <motion.h2
              variants={fadeIn}
              className="text-4xl md:text-6xl font-bold tracking-tighter mb-4 uppercase"
            >
              Industry Modules
            </motion.h2>
            <motion.p variants={fadeIn} className="text-xl text-muted-foreground">
              Forged for specific conversion outcomes.
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-1">
            {industries.map((industry) => (
              <motion.div
                key={industry.href}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.2 }}
              >
                <Link href={industry.href}>
                  <Card className="h-full rounded-none border-white/5 bg-[#0A0A0A] hover:bg-white/5 transition-all duration-100 group cursor-pointer border">
                    <CardHeader>
                      <industry.icon className="h-8 w-8 mb-6 text-primary group-hover:text-accent transition-colors" />
                      <CardTitle className="text-xl uppercase font-bold tracking-tight">{industry.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base leading-relaxed group-hover:text-foreground transition-colors">
                        {industry.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 bg-accent/5">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2
              variants={fadeIn}
              className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 uppercase"
            >
              Ready to <span className="text-accent">Ignite</span>?
            </motion.h2>
            <motion.p variants={fadeIn} className="text-xl text-muted-foreground mb-12">
              Our onboarding is as fast as our funnels. Get your conversion engine live in 7 days or less.
            </motion.p>
            <motion.div variants={fadeIn}>
              <Link href="/contact">
                <Button size="lg" className="text-xl h-16 px-12 bg-accent hover:bg-accent/90 rounded-none font-bold tracking-tight">
                  BOOK THE DEMO
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
