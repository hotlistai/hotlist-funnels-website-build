"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Check, X } from "lucide-react"

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

const included = [
  "Custom landing page design & development",
  "AI-powered lead qualification system",
  "Multi-channel ad campaign management",
  "CRM integration & automation setup",
  "Real-time analytics dashboard",
  "Monthly strategy & performance calls",
  "Continuous A/B testing & optimization",
  "Dedicated account manager",
  "Email & SMS nurture sequences",
  "Lead routing & notification setup",
  "Campaign creative development",
  "Conversion rate optimization",
]

const notIncluded = [
  "Ad spend budget (paid directly to platforms)",
  "Third-party software subscriptions",
  "Phone system or call tracking services",
]

const faqs = [
  {
    question: "What's included in the setup fee?",
    answer:
      "The $2,500 setup covers strategy development, landing page design, funnel configuration, ad creative, CRM integration, and all technical setup to get your system running.",
  },
  {
    question: "What does the monthly fee cover?",
    answer:
      "The $750/month covers ongoing campaign management, ad optimization, A/B testing, monthly strategy calls, reporting, and continuous improvements to maximize your ROI.",
  },
  {
    question: "How much should I budget for ad spend?",
    answer:
      "We typically recommend starting with $1,500-3,000/month in ad spend, depending on your industry and goals. You pay ad costs directly to Facebook, Google, etc.",
  },
  {
    question: "Is there a contract or commitment?",
    answer:
      "We require a 3-month minimum commitment to allow time for testing and optimization. After that, it's month-to-month with 30 days notice to cancel.",
  },
  {
    question: "What kind of results can I expect?",
    answer:
      "Results vary by industry, but our clients typically see 50-100+ qualified leads per month with 3-5x return on ad spend after the first 60-90 days of optimization.",
  },
  {
    question: "Do you work with businesses outside the US?",
    answer:
      "Yes, we work with clients globally. However, our campaigns perform best in English-speaking markets where our targeting and conversion tactics are proven.",
  },
]

export default function PricingPage() {
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
              Simple, Transparent Pricing
            </motion.h1>
            <motion.p
              variants={fadeIn}
              className="text-xl md:text-2xl text-muted-foreground mb-8"
            >
              One price, everything included. No hidden fees or surprises.
            </motion.p>
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
