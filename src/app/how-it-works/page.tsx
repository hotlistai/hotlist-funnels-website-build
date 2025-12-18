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
      "Conversion engine blueprinting",
      "Loss aversion strategy development",
    ],
  },
  {
    phase: "02 // FORGING",
    duration: "72 HOURS",
    icon: Settings,
    steps: [
      "High-velocity landing page architecture",
      "Perspective.co logic implementation",
      "Mobile-first interaction engineering",
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

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      <section className="relative overflow-hidden pt-24 pb-32 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerContainer}
            className="max-w-4xl"
          >
            <motion.h1
              variants={fadeIn}
              className="text-6xl md:text-8xl font-bold tracking-tighter mb-8 uppercase leading-[0.9]"
            >
              SYSTEM <br /><span className="text-primary">ARCHITECTURE</span>
            </motion.h1>
            <motion.p
              variants={fadeIn}
              className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed max-w-2xl"
            >
              Our process is stripped of bureaucracy and optimized for rapid deployment. We forge conversion engines at the speed of thought.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="py-32 border-b border-white/5 bg-[#0D0D0D]">
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
                <Card className="rounded-none border-white/5 bg-[#0A0A0A] hover:bg-white/5 transition-all duration-100 group border">
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                      <div className="flex items-center gap-6">
                        <div className="text-primary group-hover:text-accent transition-colors">
                          <phase.icon className="h-8 w-8" />
                        </div>
                        <CardTitle className="text-3xl font-bold uppercase tracking-tight">
                          {phase.phase}
                        </CardTitle>
                      </div>
                      <div className="text-sm font-mono text-muted-foreground uppercase tracking-widest bg-white/5 px-3 py-1 border border-white/10">
                        {phase.duration}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="grid md:grid-cols-2 gap-4">
                      {phase.steps.map((step, j) => (
                        <li key={j} className="flex items-start gap-4 text-muted-foreground group-hover:text-foreground transition-colors">
                          <CheckCircle2 className="h-5 w-5 mt-0.5 flex-shrink-0 text-primary group-hover:text-accent transition-colors" />
                          <span className="text-base uppercase tracking-tight font-medium">{step}</span>
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

      <section className="py-24 border-b border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="space-y-12"
          >
            {timeline.map((phase, i) => (
              <motion.div key={i} variants={fadeIn}>
                <Card>
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-primary/10">
                        <phase.icon className="h-6 w-6" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <CardTitle className="text-2xl">{phase.phase}</CardTitle>
                          <span className="text-sm font-medium text-muted-foreground">
                            {phase.duration}
                          </span>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {phase.steps.map((step, j) => (
                        <li key={j} className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 mt-0.5 flex-shrink-0 text-primary" />
                          <span>{step}</span>
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

      <section className="py-24 bg-muted/50 border-b border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2
              variants={fadeIn}
              className="font-serif text-4xl md:text-5xl font-semibold mb-4"
            >
              What Sets Us Apart
            </motion.h2>
            <motion.p variants={fadeIn} className="text-xl text-muted-foreground">
              More than just ad management
            </motion.p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {features.map((feature) => (
              <motion.div key={feature.title} variants={fadeIn}>
                <Card className="h-full text-center">
                  <CardHeader>
                    <div className="flex justify-center mb-4">
                      <div className="p-3 rounded-lg bg-primary/10">
                        <feature.icon className="h-6 w-6" />
                      </div>
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">{feature.description}</CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2
              variants={fadeIn}
              className="font-serif text-4xl md:text-5xl font-semibold mb-6"
            >
              Ready to Get Started?
            </motion.h2>
            <motion.p variants={fadeIn} className="text-xl text-muted-foreground mb-8">
              Book a demo to see how we can build your conversion system
            </motion.p>
            <motion.div variants={fadeIn}>
              <Link href="/contact">
                <Button size="lg" className="text-lg h-12 px-8">
                  Book Your Demo
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
