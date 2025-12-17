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

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const timeline = [
  {
    phase: "Phase 1: Discovery & Strategy",
    duration: "Week 1",
    icon: MessageSquare,
    steps: [
      "Kickoff call to understand your business, goals, and target market",
      "Competitive analysis of your industry and market",
      "Customer avatar development and messaging framework",
      "Conversion funnel strategy and tech stack planning",
    ],
  },
  {
    phase: "Phase 2: Build & Design",
    duration: "Weeks 2-3",
    icon: Settings,
    steps: [
      "Custom landing page design optimized for conversions",
      "Lead qualification workflow and AI scoring setup",
      "CRM integration and automation configuration",
      "Ad creative development (copy, images, targeting)",
    ],
  },
  {
    phase: "Phase 3: Launch",
    duration: "Week 4",
    icon: Rocket,
    steps: [
      "Quality assurance testing across all devices",
      "Ad campaign launch across chosen platforms",
      "Initial monitoring and rapid optimization",
      "Dashboard setup and reporting access",
    ],
  },
  {
    phase: "Phase 4: Optimize & Scale",
    duration: "Ongoing",
    icon: TrendingUp,
    steps: [
      "Daily campaign monitoring and bid adjustments",
      "A/B testing of landing pages and ad creative",
      "Monthly strategy calls to review performance",
      "Continuous scaling of winning campaigns",
    ],
  },
]

const features = [
  {
    icon: Target,
    title: "Strategic Planning",
    description: "Data-driven strategy tailored to your market and goals",
  },
  {
    icon: CheckCircle2,
    title: "Expert Execution",
    description: "Professional design, copywriting, and campaign management",
  },
  {
    icon: BarChart3,
    title: "Performance Tracking",
    description: "Real-time dashboards and monthly performance reviews",
  },
  {
    icon: Zap,
    title: "Continuous Improvement",
    description: "Ongoing testing and optimization to maximize ROI",
  },
]

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="relative overflow-hidden border-b border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24 md:py-32">
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerContainer}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.h1
              variants={fadeIn}
              className="font-serif text-5xl md:text-7xl font-semibold tracking-tight mb-6"
            >
              How It Works
            </motion.h1>
            <motion.p
              variants={fadeIn}
              className="text-xl md:text-2xl text-muted-foreground mb-8"
            >
              From strategy to scale, we handle everything so you can focus on closing deals
            </motion.p>
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
