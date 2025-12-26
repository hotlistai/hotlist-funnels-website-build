"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import {
  MessageSquare,
  Rocket,
  Target,
  TrendingUp,
  CheckCircle2,
  Settings,
  BarChart3,
  Zap,
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

const timeline = [
  {
    phase: "01 // DISCOVERY",
    duration: "48 HOURS",
    icon: MessageSquare,
    steps: [
      "Psychological profiling of your ideal customer avatar",
      "Competitive vulnerability mapping",
      "HOTLIST FUNNELS blueprinting",
      "Loss aversion strategy development",
    ],
  },
  {
    phase: "02 // FORGING",
    duration: "72 HOURS",
    icon: Settings,
    steps: [
      "High-velocity landing page architecture",
      "Mobile-first interaction engineering",
      "Logic-driven funnel implementation",
      "Urgency-trigger copywriting",
    ],
  },
  {
    phase: "03 // IGNITION",
    duration: "24 HOURS",
    icon: Rocket,
    steps: [
      "Stress-testing conversion paths",
      "Multi-platform pixel deployment",
      "Low-latency infrastructure verification",
      "Live data stream monitoring",
    ],
  },
  {
    phase: "04 // OPTIMIZATION",
    duration: "ONGOING",
    icon: TrendingUp,
    steps: [
      "Real-time bid calibration",
      "Iterative A/B performance forging",
      "Revenue-driven scaling",
      "Weekly velocity reports",
    ],
  },
]

const features = [
  {
    title: "Psychological Edge",
    description: "Built on principles of loss aversion and urgency triggers.",
    icon: Target,
  },
  {
    title: "High Velocity",
    description: "Sub-1s load times designed for the mobile-first era.",
    icon: Zap,
  },
  {
    title: "Lead Intelligence",
    description: "Verify intent and data before the lead even hits your CRM.",
    icon: BarChart3,
  },
  {
    title: "Seamless Flow",
    description: "Frictionless transitions that maintain conversion momentum.",
    icon: Rocket,
  },
]

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30">
      <Navigation />

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-32 border-b border-border">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(0,122,255,0.08),transparent_70%)]" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerContainer}
            className="max-w-4xl"
          >
            <motion.div
              variants={fadeIn}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-none bg-secondary border border-border text-[10px] font-bold uppercase tracking-widest mb-8 text-black"
            >
              <span className="flex h-2 w-2 rounded-full bg-accent animate-pulse" />
              Operational Protocol
            </motion.div>
            <motion.h1
              variants={fadeIn}
              className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter mb-8 leading-[0.85] text-[#121212]"
            >
              System <br /><span className="text-primary italic">Architecture.</span>
            </motion.h1>
            <motion.p
              variants={fadeIn}
              className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl leading-relaxed"
            >
              Our process is stripped of bureaucracy and optimized for rapid deployment. We forge HOTLIST FUNNELS at high velocity, moving from insight to ignition in days, not months.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-32 border-b border-border bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="space-y-1"
          >
            {timeline.map((phase, i) => (
              <motion.div key={i} variants={fadeIn}>
                <Card className="rounded-none border-border bg-white hover:bg-slate-50 transition-all duration-100 group border shadow-sm">
                  <CardHeader className="py-10">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                      <div className="flex items-center gap-6">
                        <div className="text-primary group-hover:text-accent transition-colors">
                          <phase.icon className="h-8 w-8" />
                        </div>
                        <CardTitle className="text-3xl md:text-4xl font-bold uppercase tracking-tighter text-[#121212]">
                          {phase.phase}
                        </CardTitle>
                      </div>
                      <div className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest bg-slate-100 px-4 py-2 border border-border">
                        {phase.duration}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pb-10">
                    <ul className="grid md:grid-cols-2 gap-6">
                      {phase.steps.map((step, j) => (
                        <li key={j} className="flex items-start gap-4 text-muted-foreground group-hover:text-[#121212] transition-colors">
                          <CheckCircle2 className="h-5 w-5 mt-0.5 flex-shrink-0 text-primary group-hover:text-accent transition-colors" />
                          <span className="text-sm uppercase tracking-tight font-bold">{step}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-32 border-b border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-24"
          >
            <motion.h2
              variants={fadeIn}
              className="text-4xl md:text-6xl font-bold tracking-tighter mb-4 uppercase text-[#121212]"
            >
              What Sets Us <span className="text-primary italic">Apart</span>
            </motion.h2>
            <motion.p variants={fadeIn} className="text-xl text-muted-foreground">
              More than just lead capture. It&apos;s conversion engineering.
            </motion.p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border shadow-xl"
          >
            {features.map((feature) => (
              <motion.div key={feature.title} variants={fadeIn}>
                <Card className="h-full rounded-none border-none bg-white hover:bg-slate-50 transition-all duration-100 group p-4">
                  <CardHeader>
                    <div className="flex justify-center mb-8">
                      <div className="p-4 bg-primary/5 text-primary group-hover:text-accent transition-colors">
                        <feature.icon className="h-8 w-8" />
                      </div>
                    </div>
                    <CardTitle className="text-xl font-bold uppercase tracking-tight text-[#121212] leading-tight">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-sm font-medium leading-relaxed group-hover:text-[#121212] transition-colors">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2
              variants={fadeIn}
              className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 uppercase text-[#121212]"
            >
              Ready to <span className="text-accent italic">Ignite</span>?
            </motion.h2>
            <motion.p variants={fadeIn} className="text-xl text-muted-foreground mb-12">
              Book a deployment demo to see how we can build your high-velocity conversion system.
            </motion.p>
              <motion.div variants={fadeIn}>
                <Link href="/book-a-demo">
                  <Button size="lg" className="text-xl h-20 px-16 bg-accent hover:bg-accent/90 rounded-none font-bold tracking-tight text-white shadow-xl">
                    BOOK YOUR DEMO
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
