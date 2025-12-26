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
    name: "The FUNNELS Starter",
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
    answer: "Our FUNNELS deploy in 7 days or less. We handle the technical lift while you focus on closing deals.",
  },
  {
    question: "What's included in Lead Intelligence?",
    answer: "Full Lyft Lead Intelligence includes homeowner verification, equity analysis, distress signals, and B2B intent mapping based on hiring signals and tech-stack data.",
  },
  {
    question: "Can I upgrade later?",
    answer: "Absolutely. Start with the FUNNELS Starter and upgrade to Growth Accelerator anytime. We'll prorate your setup fee.",
  },
  {
    question: "What CRMs do you integrate with?",
    answer: "We connect with all major CRMs including Salesforce, HubSpot, Pipedrive, and can build custom integrations on the Growth Accelerator plan.",
  },
]

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30">
      <Navigation />

      <section className="relative overflow-hidden pt-24 pb-32 border-b border-border">
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
              Simple, Transparent Pricing
            </motion.div>
            <motion.h1
              variants={fadeIn}
              className="text-5xl md:text-7xl lg:text-9xl font-bold tracking-tighter mb-8 leading-[0.85] text-[#121212]"
            >
              The Pricing <br /><span className="text-primary italic">FUNNELS</span>
            </motion.h1>
            <motion.p
              variants={fadeIn}
              className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl leading-relaxed"
            >
              No complexity. Just conversion. One setup fee to forge your FUNNELS, one monthly fee to keep them redlined.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="py-32 border-b border-border bg-slate-50">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-px bg-border border border-border shadow-2xl">
            {plans.map((plan, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ ...springTransition, delay: i * 0.1 }}
                className="bg-white"
              >
                <div className={`h-full p-12 relative overflow-hidden ${
                  plan.highlight ? "ring-2 ring-primary ring-inset" : ""
                }`}>
                  {plan.highlight && (
                    <div className="absolute top-0 right-0 bg-primary text-white text-[10px] font-bold px-4 py-1 uppercase tracking-widest">
                      Popular
                    </div>
                  )}
                  <div className="text-center mb-12">
                    <div className="text-[10px] uppercase font-bold tracking-widest text-muted-foreground mb-4">
                      {plan.name}
                    </div>
                    <div className="text-6xl font-bold tracking-tighter mb-2 text-[#121212]">
                      {plan.price}<span className="text-lg text-muted-foreground font-normal">/mo</span>
                    </div>
                    <div className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                      + {plan.setup} Setup
                    </div>
                    <p className="mt-6 text-sm text-muted-foreground font-medium max-w-xs mx-auto">
                      {plan.description}
                    </p>
                  </div>
                  <ul className="space-y-4 mb-12">
                    {plan.features.map((feature, j) => (
                      <li key={j} className="flex items-center gap-3">
                        <Check className={`h-4 w-4 flex-shrink-0 ${plan.highlight ? "text-primary" : "text-muted-foreground"}`} />
                        <span className="text-sm font-medium text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact">
                    <Button className={`w-full h-16 rounded-none font-bold tracking-tight text-sm uppercase ${
                      plan.highlight
                        ? "bg-accent hover:bg-accent/90 text-white"
                        : "bg-primary hover:bg-primary/90 text-white"
                    }`}>
                      Get Started <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 border-b border-border">
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
              className="text-4xl md:text-6xl font-bold tracking-tighter mb-4 uppercase text-[#121212]"
            >
              Frequently Asked <br /><span className="text-primary italic">Questions</span>
            </motion.h2>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="space-y-px bg-border border border-border overflow-hidden shadow-xl"
          >
            {faqs.map((faq, i) => (
              <motion.div key={i} variants={fadeIn} className="bg-white">
                <div className="p-8 hover:bg-slate-50 transition-colors">
                  <h3 className="text-lg font-bold uppercase tracking-tight text-[#121212] mb-4">{faq.question}</h3>
                  <p className="text-muted-foreground text-sm font-medium leading-relaxed">{faq.answer}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

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
              className="text-5xl md:text-8xl font-bold tracking-tighter mb-8 uppercase text-[#121212]"
            >
              Ready to <span className="text-accent italic">Ignite</span>?
            </motion.h2>
            <motion.p variants={fadeIn} className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
              Book a demo to see how we can recover your lost revenue.
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
