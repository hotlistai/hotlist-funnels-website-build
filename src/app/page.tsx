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

const industries = [
  {
    icon: Building2,
    name: "Real Estate",
    description: "Convert property leads into qualified buyers and sellers",
    href: "/real-estate",
  },
  {
    icon: Sun,
    name: "Solar",
    description: "Generate qualified solar installation appointments",
    href: "/solar",
  },
  {
    icon: Scale,
    name: "Legal",
    description: "Attract and qualify potential clients for your practice",
    href: "/legal",
  },
  {
    icon: UtensilsCrossed,
    name: "Restaurants",
    description: "Build a pipeline of qualified kitchen and service staff",
    href: "/restaurants",
  },
  {
    icon: Hammer,
    name: "Contractors",
    description: "Fill your calendar with ready-to-buy homeowners",
    href: "/contractors",
  },
  {
    icon: HardHat,
    name: "Blue Collar",
    description: "Recruit reliable workers for manufacturing and warehousing",
    href: "/blue-collar",
  },
  {
    icon: Heart,
    name: "Nonprofits",
    description: "Convert visitors into monthly donors and volunteers",
    href: "/nonprofits",
  },
  {
    icon: Dumbbell,
    name: "Fitness",
    description: "Turn trial members into long-term gym commitments",
    href: "/fitness",
  },
]

const features = [
  {
    icon: Sparkles,
    title: "Landing Pages",
    description: "Custom-built conversion funnels designed for your industry",
  },
  {
    icon: Target,
    title: "AI Qualification",
    description: "Intelligent lead scoring to prioritize your best opportunities",
  },
  {
    icon: TrendingUp,
    title: "Ad Management",
    description: "Expert campaign optimization across all major platforms",
  },
  {
    icon: Zap,
    title: "CRM Integration",
    description: "Seamless connection with your existing sales tools",
  },
  {
    icon: BarChart,
    title: "Reporting",
    description: "Real-time dashboards showing exactly what's working",
  },
  {
    icon: Settings,
    title: "Optimization",
    description: "Continuous improvement based on performance data",
  },
]

const pricingFeatures = [
  "Custom landing page design",
  "AI-powered lead qualification",
  "Multi-channel ad management",
  "CRM integration setup",
  "Real-time analytics dashboard",
  "Monthly strategy calls",
  "A/B testing & optimization",
  "Dedicated account manager",
]

export default function Home() {
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
              Quiz Funnels That Create Instant Engagement
            </motion.h1>
            <motion.p
              variants={fadeIn}
              className="text-xl md:text-2xl text-muted-foreground mb-8"
            >
              We build FOMO-driven quiz funnels using lead intelligence to target your exact clientele—creating emotional connections that drive immediate action
            </motion.p>
            <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="text-lg h-12 px-8">
                  Book a Demo
                </Button>
              </Link>
              <Link href="/how-it-works">
                <Button size="lg" variant="outline" className="text-lg h-12 px-8">
                  How It Works
                </Button>
              </Link>
            </motion.div>
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
            className="text-center mb-16"
          >
            <motion.h2
              variants={fadeIn}
              className="font-serif text-4xl md:text-5xl font-semibold mb-4"
            >
              How It Works
            </motion.h2>
            <motion.p variants={fadeIn} className="text-xl text-muted-foreground">
              From lead intelligence to conversion—fully automated
            </motion.p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              {
                step: "01",
                title: "Custom Build",
                description: "We design a conversion system tailored to your industry, target market, and goals",
              },
              {
                step: "02",
                title: "Launch & Run",
                description: "Your funnel goes live with optimized ad campaigns across multiple channels",
              },
              {
                step: "03",
                title: "Scale on Autopilot",
                description: "We continuously test, optimize, and scale what works best for your business",
              },
            ].map((item, i) => (
              <motion.div key={i} variants={fadeIn}>
                <Card className="h-full">
                  <CardHeader>
                    <div className="text-6xl font-serif font-semibold text-muted-foreground/20 mb-4">
                      {item.step}
                    </div>
                    <CardTitle className="text-2xl">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">{item.description}</CardDescription>
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
              Industry Solutions
            </motion.h2>
            <motion.p variants={fadeIn} className="text-xl text-muted-foreground">
              Proven conversion systems for your market
            </motion.p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {industries.map((industry) => (
              <motion.div key={industry.href} variants={fadeIn}>
                <Link href={industry.href}>
                  <Card className="h-full hover:border-foreground/20 transition-colors cursor-pointer">
                    <CardHeader>
                      <industry.icon className="h-8 w-8 mb-4" />
                      <CardTitle className="text-xl">{industry.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription>{industry.description}</CardDescription>
                    </CardContent>
                  </Card>
                </Link>
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
            className="text-center mb-16"
          >
            <motion.h2
              variants={fadeIn}
              className="font-serif text-4xl md:text-5xl font-semibold mb-4"
            >
              What's Included
            </motion.h2>
            <motion.p variants={fadeIn} className="text-xl text-muted-foreground">
              Everything you need to generate qualified leads
            </motion.p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {features.map((feature) => (
              <motion.div key={feature.title} variants={fadeIn}>
                <Card className="h-full">
                  <CardHeader>
                    <feature.icon className="h-8 w-8 mb-4" />
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

      <section className="py-24 bg-muted/50 border-b border-border">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center"
          >
            <motion.h2
              variants={fadeIn}
              className="font-serif text-4xl md:text-5xl font-semibold mb-4"
            >
              Simple, Transparent Pricing
            </motion.h2>
            <motion.p variants={fadeIn} className="text-xl text-muted-foreground mb-12">
              One price, everything included
            </motion.p>

            <motion.div variants={fadeIn}>
              <Card className="border-2">
                <CardHeader className="text-center pb-8">
                  <div className="mb-4">
                    <div className="text-5xl font-serif font-semibold mb-2">$2,500</div>
                    <div className="text-muted-foreground">One-time setup</div>
                  </div>
                  <div className="text-4xl font-serif font-semibold mb-2">$750/mo</div>
                  <CardDescription className="text-lg">Full service management</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {pricingFeatures.map((feature) => (
                    <div key={feature} className="flex items-start gap-3">
                      <Check className="h-5 w-5 mt-0.5 flex-shrink-0" />
                      <span className="text-left">{feature}</span>
                    </div>
                  ))}
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
              Ready to Fill Your Pipeline?
            </motion.h2>
            <motion.p variants={fadeIn} className="text-xl text-muted-foreground mb-8">
              Book a free demo to see how our conversion systems can transform your lead generation
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

const industries = [
  {
    icon: Building2,
    name: "Real Estate",
    description: "Convert property leads into qualified buyers and sellers",
    href: "/real-estate",
  },
  {
    icon: Sun,
    name: "Solar",
    description: "Generate qualified solar installation appointments",
    href: "/solar",
  },
  {
    icon: Scale,
    name: "Legal",
    description: "Attract and qualify potential clients for your practice",
    href: "/legal",
  },
  {
    icon: UtensilsCrossed,
    name: "Restaurants",
    description: "Build a pipeline of qualified kitchen and service staff",
    href: "/restaurants",
  },
  {
    icon: Hammer,
    name: "Contractors",
    description: "Fill your calendar with ready-to-buy homeowners",
    href: "/contractors",
  },
  {
    icon: HardHat,
    name: "Blue Collar",
    description: "Recruit reliable workers for manufacturing and warehousing",
    href: "/blue-collar",
  },
  {
    icon: Heart,
    name: "Nonprofits",
    description: "Convert visitors into monthly donors and volunteers",
    href: "/nonprofits",
  },
  {
    icon: Dumbbell,
    name: "Fitness",
    description: "Turn trial members into long-term gym commitments",
    href: "/fitness",
  },
]

const features = [
  {
    icon: Sparkles,
    title: "FOMO Quiz Funnels",
    description: "Emotionally-charged quizzes that trigger fear, urgency, and instant action from your target audience",
  },
  {
    icon: Target,
    title: "Lead Intelligence Targeting",
    description: "Precision targeting and remarketing to reach your exact ideal clientele with laser accuracy",
  },
  {
    icon: TrendingUp,
    title: "Brand-Specific Engagement",
    description: "Custom quiz themes that connect deeply with your brand and hit your audience's heartstrings",
  },
  {
    icon: Zap,
    title: "Irresistible Incentives",
    description: "Strategic offers like discounts, free guides, and exclusive deals that drive quiz completion",
  },
  {
    icon: BarChart,
    title: "Instant Interaction Analytics",
    description: "Real-time data showing engagement rates, quiz completions, and conversion metrics",
  },
  {
    icon: Settings,
    title: "Continuous Optimization",
    description: "We test and refine your funnels to maximize emotional impact and conversion rates",
  },
]

const pricingFeatures = [
  "Custom landing page design",
  "AI-powered lead qualification",
  "Multi-channel ad management",
  "CRM integration setup",
  "Real-time analytics dashboard",
  "Monthly strategy calls",
  "A/B testing & optimization",
  "Dedicated account manager",
]

export default function Home() {
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
              Quiz Funnels That Create Instant Engagement
            </motion.h1>
            <motion.p
              variants={fadeIn}
              className="text-xl md:text-2xl text-muted-foreground mb-8"
            >
              We build FOMO-driven quiz funnels using lead intelligence to target your exact clientele—creating emotional connections that drive immediate action
            </motion.p>
            <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="text-lg h-12 px-8">
                  Book a Demo
                </Button>
              </Link>
              <Link href="/how-it-works">
                <Button size="lg" variant="outline" className="text-lg h-12 px-8">
                  How It Works
                </Button>
              </Link>
            </motion.div>
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
            className="text-center mb-16"
          >
            <motion.h2
              variants={fadeIn}
              className="font-serif text-4xl md:text-5xl font-semibold mb-4"
            >
              How It Works
            </motion.h2>
            <motion.p variants={fadeIn} className="text-xl text-muted-foreground">
              From lead intelligence to conversion—fully automated
            </motion.p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              {
                step: "01",
                title: "Custom Build",
                description: "We design a conversion system tailored to your industry, target market, and goals",
              },
              {
                step: "02",
                title: "Launch & Run",
                description: "Your funnel goes live with optimized ad campaigns across multiple channels",
              },
              {
                step: "03",
                title: "Scale on Autopilot",
                description: "We continuously test, optimize, and scale what works best for your business",
              },
            ].map((item, i) => (
              <motion.div key={i} variants={fadeIn}>
                <Card className="h-full">
                  <CardHeader>
                    <div className="text-6xl font-serif font-semibold text-muted-foreground/20 mb-4">
                      {item.step}
                    </div>
                    <CardTitle className="text-2xl">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">{item.description}</CardDescription>
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
              Industry Solutions
            </motion.h2>
            <motion.p variants={fadeIn} className="text-xl text-muted-foreground">
              Proven conversion systems for your market
            </motion.p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {industries.map((industry) => (
              <motion.div key={industry.href} variants={fadeIn}>
                <Link href={industry.href}>
                  <Card className="h-full hover:border-foreground/20 transition-colors cursor-pointer">
                    <CardHeader>
                      <industry.icon className="h-8 w-8 mb-4" />
                      <CardTitle className="text-xl">{industry.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription>{industry.description}</CardDescription>
                    </CardContent>
                  </Card>
                </Link>
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
            className="text-center mb-16"
          >
            <motion.h2
              variants={fadeIn}
              className="font-serif text-4xl md:text-5xl font-semibold mb-4"
            >
              What's Included
            </motion.h2>
            <motion.p variants={fadeIn} className="text-xl text-muted-foreground">
              Everything you need to generate qualified leads
            </motion.p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {features.map((feature) => (
              <motion.div key={feature.title} variants={fadeIn}>
                <Card className="h-full">
                  <CardHeader>
                    <feature.icon className="h-8 w-8 mb-4" />
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

      <section className="py-24 bg-muted/50 border-b border-border">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center"
          >
            <motion.h2
              variants={fadeIn}
              className="font-serif text-4xl md:text-5xl font-semibold mb-4"
            >
              Simple, Transparent Pricing
            </motion.h2>
            <motion.p variants={fadeIn} className="text-xl text-muted-foreground mb-12">
              One price, everything included
            </motion.p>

            <motion.div variants={fadeIn}>
              <Card className="border-2">
                <CardHeader className="text-center pb-8">
                  <div className="mb-4">
                    <div className="text-5xl font-serif font-semibold mb-2">$2,500</div>
                    <div className="text-muted-foreground">One-time setup</div>
                  </div>
                  <div className="text-4xl font-serif font-semibold mb-2">$750/mo</div>
                  <CardDescription className="text-lg">Full service management</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {pricingFeatures.map((feature) => (
                    <div key={feature} className="flex items-start gap-3">
                      <Check className="h-5 w-5 mt-0.5 flex-shrink-0" />
                      <span className="text-left">{feature}</span>
                    </div>
                  ))}
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
              Ready to Fill Your Pipeline?
            </motion.h2>
            <motion.p variants={fadeIn} className="text-xl text-muted-foreground mb-8">
              Book a free demo to see how our conversion systems can transform your lead generation
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
