"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Check, X } from "lucide-react"

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

const included = [
  "Custom Foundry Landing Page Architecture",
  "Perspective.co Logic Implementation",
  "Loss Aversion Funnel Engineering",
  "High-Velocity Ad Campaign Management",
  "Precision Lead Routing & CRM Integration",
  "Real-Time Conversion Analytics Dashboard",
  "Iterative A/B Performance Forging",
  "Dedicated Conversion Strategist",
  "Rapid Onboarding (Under 7 Days)",
  "Psychological Trigger Copywriting",
]

export default function PricingPage() {
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
              INVESTMENT <br /><span className="text-primary">TIERS</span>
            </motion.h1>
            <motion.p
              variants={fadeIn}
              className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed max-w-2xl"
            >
              No complexity. Just conversion. One setup fee to forge the engine, one monthly fee to keep it redlined.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="py-32 border-b border-white/5 bg-[#0D0D0D]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <Card className="rounded-none border-primary/50 bg-[#0A0A0A] border-2 relative overflow-hidden group">
              <div className="absolute top-0 right-0 bg-primary text-white text-[10px] font-bold px-4 py-1 uppercase tracking-widest">
                High Velocity
              </div>
              <CardHeader className="text-center pb-12 pt-16">
                <div className="mb-8">
                  <div className="text-sm font-mono text-muted-foreground uppercase tracking-widest mb-4">ONE-TIME FORGE FEE</div>
                  <div className="text-7xl font-bold tracking-tighter text-foreground">$1,495</div>
                </div>
                <div className="text-sm font-mono text-muted-foreground uppercase tracking-widest mb-4">MONTHLY ENGINE FEE</div>
                <div className="text-5xl font-bold tracking-tighter text-primary">$1,495<span className="text-2xl text-muted-foreground">/MO</span></div>
              </CardHeader>
              <CardContent className="space-y-12 pb-16">
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-widest mb-8 text-center text-muted-foreground">Architecture Specifications</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {included.map((item) => (
                      <div key={item} className="flex items-start gap-3 group/item">
                        <Check className="h-5 w-5 mt-0.5 flex-shrink-0 text-primary" />
                        <span className="text-sm uppercase tracking-tight font-medium text-muted-foreground group-hover/item:text-foreground transition-colors">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-8">
                  <Link href="/contact">
                    <Button size="lg" className="w-full h-16 rounded-none bg-primary hover:bg-primary/90 text-xl font-bold tracking-tight uppercase">
                      IGNITE THE ENGINE
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      <section className="py-24 border-b border-border">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <Card className="border-2">
              <CardHeader className="text-center pb-8">
                <div className="mb-6">
                  <div className="text-6xl font-serif font-semibold mb-3">$2,500</div>
                  <div className="text-lg text-muted-foreground">One-time setup fee</div>
                </div>
                <div className="text-5xl font-serif font-semibold mb-3">$750/mo</div>
                <CardDescription className="text-xl">
                  Full service management & optimization
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="font-semibold text-lg mb-4">What's Included</h3>
                  <div className="space-y-3">
                    {included.map((item) => (
                      <div key={item} className="flex items-start gap-3">
                        <Check className="h-5 w-5 mt-0.5 flex-shrink-0 text-primary" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t">
                  <h3 className="font-semibold text-lg mb-4">Not Included</h3>
                  <div className="space-y-3">
                    {notIncluded.map((item) => (
                      <div key={item} className="flex items-start gap-3">
                        <X className="h-5 w-5 mt-0.5 flex-shrink-0 text-muted-foreground" />
                        <span className="text-muted-foreground">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6">
                  <Link href="/contact">
                    <Button size="lg" className="w-full">
                      Get Started
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-muted/50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-12"
          >
            <motion.h2
              variants={fadeIn}
              className="font-serif text-4xl md:text-5xl font-semibold mb-4"
            >
              Frequently Asked Questions
            </motion.h2>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="space-y-6"
          >
            {faqs.map((faq, i) => (
              <motion.div key={i} variants={fadeIn}>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl">{faq.question}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{faq.answer}</p>
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
