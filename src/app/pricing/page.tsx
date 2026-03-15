"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Check, ArrowRight, Shield, Zap } from "lucide-react"

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
    description: "One funnel. Done in 7 days. Leads hitting your CRM by day 8.",
    features: [
      { text: "1 Core Funnel (built for you)", note: "We do the work" },
      { text: "Basic Lead Intel & scoring", note: "Know who's worth calling" },
      { text: "CRM Sync & lead routing", note: "Straight to your pipeline" },
      { text: "Email & SMS notifications", note: "Know the instant a lead comes in" },
      { text: "Mobile-optimized design", note: "47-second completion rate" },
      { text: "7-Day launch guarantee", note: "Or setup is waived" },
    ],
    highlight: false,
  },
  {
    name: "The Growth Accelerator",
    price: "$995",
    setup: "$995",
    description: "Unlimited funnels. Full intelligence. The system that scales with you.",
    features: [
      { text: "Unlimited Funnels", note: "Every offer, every vertical" },
      { text: "Full HOTLIST Lead Intelligence", note: "Homeowner DNA, intent mapping, B2B signals" },
      { text: "5,000 Outreach Contacts/mo", note: "We bring the audience" },
      { text: "Advanced Analytics Dashboard", note: "Real-time revenue visibility" },
      { text: "A/B Testing Engine", note: "Continuous conversion improvement" },
      { text: "Priority Support", note: "Same-day response" },
      { text: "Custom Integrations", note: "Any CRM, any stack" },
      { text: "Dedicated Success Manager", note: "Your team's growth partner" },
    ],
    highlight: true,
  },
]

const diyComparison = [
  { item: "Agency copywriter", cost: "$3,000/mo" },
  { item: "Funnel builder (contractor)", cost: "$2,500/mo" },
  { item: "CRM setup & maintenance", cost: "$1,200/mo" },
  { item: "Lead intel tool (e.g. Data Axle)", cost: "$500/mo" },
  { item: "A/B testing software", cost: "$300/mo" },
  { item: "Success manager (fractional)", cost: "$2,000/mo" },
]

const faqs = [
  {
    question: "How fast can I launch?",
    answer: "7 days or less. Guaranteed. We handle the strategy, copy, build, and CRM integration. You focus on closing the leads we send you.",
  },
  {
    question: "What's included in Lead Intelligence?",
    answer: "Full HOTLIST Lead Intelligence includes homeowner verification, equity analysis, distress signals, B2B intent mapping based on hiring signals and tech-stack data, and real-time lead scoring before anything hits your CRM.",
  },
  {
    question: "What if it doesn't work?",
    answer: "That has never happened when clients follow up within 5 minutes of a lead coming in. But if after 60 days you haven't generated ROI that justifies the investment, we'll rebuild your funnel at no additional cost and optimize until it converts. We don't win unless you do.",
  },
  {
    question: "Can I upgrade later?",
    answer: "Yes. Start with the FUNNELS Starter and upgrade to Growth Accelerator anytime. We'll prorate your setup fee based on what you've already paid.",
  },
  {
    question: "What CRMs do you integrate with?",
    answer: "Salesforce, HubSpot, Pipedrive, GoHighLevel, Close.io, and most webhook-compatible platforms. Custom integrations available on Growth Accelerator.",
  },
  {
    question: "Do I need to run ads?",
    answer: "The funnels are built to convert traffic from any source — organic, paid, referral, or outreach. On Growth Accelerator, we also provide 5,000 outreach contacts monthly so you're not starting from zero.",
  },
]

export default function PricingPage() {
  const diyTotal = diyComparison.reduce((sum, item) => {
    const match = item.cost.match(/\$([\d,]+)/)
    return sum + (match ? parseInt(match[1].replace(/,/g, "")) : 0)
  }, 0)

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30">
      <Navigation />

      {/* Hero */}
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
              No complexity. No retainer traps. One setup fee to launch your FUNNELS, one monthly fee to keep them converting.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* DIY Cost Anchor */}
      <section className="py-24 border-b border-border">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-12"
          >
            <motion.h2 variants={fadeIn} className="text-3xl md:text-5xl font-bold tracking-tighter mb-4 uppercase text-[#121212]">
              What this costs to<br /><span className="text-primary italic">build yourself.</span>
            </motion.h2>
            <motion.p variants={fadeIn} className="text-xl text-muted-foreground">
              Before you price us, price the alternative.
            </motion.p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="bg-slate-50 border border-border"
          >
            {diyComparison.map((row, i) => (
              <motion.div
                key={i}
                variants={fadeIn}
                className="flex items-center justify-between px-10 py-5 border-b border-border last:border-b-0"
              >
                <span className="text-sm font-bold text-[#121212] uppercase tracking-tight">{row.item}</span>
                <span className="text-sm font-bold text-muted-foreground">{row.cost}</span>
              </motion.div>
            ))}
            <motion.div
              variants={fadeIn}
              className="flex items-center justify-between px-10 py-6 bg-white border-t-2 border-border"
            >
              <span className="text-sm font-bold uppercase tracking-widest text-muted-foreground">DIY Monthly Total</span>
              <span className="text-2xl font-bold text-[#121212] line-through">${diyTotal.toLocaleString()}/mo</span>
            </motion.div>
            <motion.div
              variants={fadeIn}
              className="flex items-center justify-between px-10 py-6 bg-primary text-white"
            >
              <span className="text-sm font-bold uppercase tracking-widest">HOTLIST FUNNELS</span>
              <span className="text-2xl font-bold">From $495/mo</span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Plans */}
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
                      Most Popular
                    </div>
                  )}
                  <div className="text-center mb-12">
                    <div className="text-[10px] uppercase font-bold tracking-widest text-muted-foreground mb-4">
                      {plan.name}
                    </div>
                    <div className="text-6xl font-bold tracking-tighter mb-2 text-[#121212]">
                      {plan.price}<span className="text-lg text-muted-foreground font-normal">/mo</span>
                    </div>
                    <div className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-6">
                      + {plan.setup} Setup
                    </div>
                    <p className="text-sm text-muted-foreground font-medium max-w-xs mx-auto">
                      {plan.description}
                    </p>
                  </div>
                  <ul className="space-y-5 mb-12">
                    {plan.features.map((feature, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <Check className={`h-4 w-4 flex-shrink-0 mt-0.5 ${plan.highlight ? "text-primary" : "text-muted-foreground"}`} />
                        <div>
                          <div className="text-sm font-bold text-[#121212]">{feature.text}</div>
                          <div className="text-xs text-muted-foreground font-medium">{feature.note}</div>
                        </div>
                      </li>
                    ))}
                  </ul>

                  {/* Guarantee */}
                  <div className="mb-8 p-4 bg-slate-50 border border-border flex items-start gap-3">
                    <Shield className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-xs font-bold text-muted-foreground uppercase tracking-tight leading-snug">
                      7-day launch guarantee — live and converting, or setup is waived
                    </p>
                  </div>

                  <Link href="/book-a-demo">
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

      {/* FAQ */}
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
                  <h3 className="text-lg font-bold uppercase tracking-tight text-[#121212] mb-4 flex items-start gap-3">
                    <Zap className="h-4 w-4 text-primary flex-shrink-0 mt-1" />
                    {faq.question}
                  </h3>
                  <p className="text-muted-foreground text-sm font-medium leading-relaxed pl-7">{faq.answer}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-[#121212]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2
              variants={fadeIn}
              className="text-5xl md:text-8xl font-bold tracking-tighter mb-8 uppercase text-white"
            >
              Ready to <span className="text-accent italic">Ignite</span>?
            </motion.h2>
            <motion.p variants={fadeIn} className="text-xl text-white/60 mb-12 max-w-2xl mx-auto">
              Book a demo. We&apos;ll show you exactly what your funnel looks like and what it will cost you to not have one.
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
