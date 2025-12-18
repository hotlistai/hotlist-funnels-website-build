"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Check, Zap, ArrowRight } from "lucide-react"

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

const plans = [
  {
    name: "The Engine Starter",
    price: "$495",
    setup: "$495",
    description: "Perfect for businesses ready to capture their first high-intent leads.",
    features: [
      "1 Core Funnel",
      "Basic Lead Intel",
      "CRM Sync",
      "Email Notifications",
      "Mobile-Optimized Design",
      "7-Day Onboarding",
    ],
    highlight: false,
  },
  {
    name: "The Growth Accelerator",
    price: "$995",
    setup: "$995",
    description: "For teams ready to dominate their market with full intelligence.",
    features: [
      "Unlimited Funnels",
      "Full Lyft Lead Intelligence",
      "5k Outreach Contacts",
      "Advanced Analytics Dashboard",
      "A/B Testing Engine",
      "Priority Support",
      "Custom Integrations",
      "Dedicated Success Manager",
    ],
    highlight: true,
  },
]

const faqs = [
  {
    question: "How fast can I launch?",
    answer: "Our Engine deploys in 7 days or less. We handle the technical lift while you focus on closing deals.",
  },
  {
    question: "What's included in Lead Intelligence?",
    answer: "Full Lyft Lead Intelligence includes homeowner verification, equity analysis, distress signals, and B2B intent mapping based on hiring signals and tech-stack data.",
  },
  {
    question: "Can I upgrade later?",
    answer: "Absolutely. Start with the Engine Starter and upgrade to Growth Accelerator anytime. We'll prorate your setup fee.",
  },
  {
    question: "What CRMs do you integrate with?",
    answer: "We connect with all major CRMs including Salesforce, HubSpot, Pipedrive, and can build custom integrations on the Growth Accelerator plan.",
  },
]

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      <section className="relative overflow-hidden pt-24 pb-32 border-b border-white/5">
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
              Simple, Transparent Pricing
            </motion.div>
            <motion.h1
              variants={fadeIn}
              className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-8 uppercase leading-[0.9]"
            >
              The Pricing <br /><span className="text-primary">Engine</span>
            </motion.h1>
            <motion.p
              variants={fadeIn}
              className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl"
            >
              No complexity. Just conversion. One setup fee to forge the engine, one monthly fee to keep it redlined.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="py-32 border-b border-white/5 bg-[#0D0D0D]">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-1">
            {plans.map((plan, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ ...springTransition, delay: i * 0.1 }}
              >
                <Card className={`h-full rounded-none bg-[#0A0A0A] border relative overflow-hidden ${
                  plan.highlight ? "border-accent/50 border-2" : "border-white/5"
                }`}>
                  {plan.highlight && (
                    <div className="absolute top-0 right-0 bg-accent text-white text-[10px] font-bold px-4 py-1 uppercase tracking-widest">
                      Popular
                    </div>
                  )}
                  <CardHeader className="pt-12 pb-8">
                    <CardTitle className="text-lg uppercase tracking-widest text-muted-foreground mb-4">
                      {plan.name}
                    </CardTitle>
                    <div className="text-5xl font-bold tracking-tighter mb-2">
                      {plan.price}<span className="text-xl text-muted-foreground">/mo</span>
                    </div>
                    <div className="text-sm text-muted-foreground mb-4">
                      + {plan.setup} Setup
                    </div>
                    <CardDescription className="text-base">
                      {plan.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pb-12">
                    <ul className="space-y-4 mb-8">
                      {plan.features.map((feature, j) => (
                        <li key={j} className="flex items-center gap-3">
                          <Check className={`h-4 w-4 flex-shrink-0 ${plan.highlight ? "text-accent" : "text-primary"}`} />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Link href="/contact">
                      <Button className={`w-full rounded-none font-bold tracking-tight h-14 text-base ${
                        plan.highlight
                          ? "bg-accent hover:bg-accent/90"
                          : "bg-primary hover:bg-primary/90"
                      }`}>
                        GET STARTED <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 border-b border-white/5">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="mb-16"
          >
            <motion.h2
              variants={fadeIn}
              className="text-4xl md:text-5xl font-bold tracking-tighter mb-4 uppercase"
            >
              Frequently Asked <span className="text-primary">Questions</span>
            </motion.h2>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="space-y-1"
          >
            {faqs.map((faq, i) => (
              <motion.div key={i} variants={fadeIn}>
                <Card className="rounded-none border-white/5 bg-[#0A0A0A] hover:bg-white/5 transition-all">
                  <CardHeader>
                    <CardTitle className="text-lg font-bold uppercase tracking-tight">{faq.question}</CardTitle>
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
              Book a demo to see how we can recover your lost revenue.
            </motion.p>
            <motion.div variants={fadeIn}>
              <Link href="/contact">
                <Button size="lg" className="text-xl h-16 px-12 bg-accent hover:bg-accent/90 rounded-none font-bold tracking-tight">
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
