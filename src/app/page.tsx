"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import {
  Home as HomeIcon,
  Sun,
  Building2,
  Zap,
  Clock,
  Users,
  Target,
  TrendingUp,
  ArrowRight,
  X,
  ChevronRight,
  Loader2,
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

const industryTabs = [
  {
    id: "real-estate",
    label: "Real Estate",
    icon: HomeIcon,
    headline: "Is your home losing $200/day in equity?",
    cta: "Find out now.",
    color: "from-emerald-500/20 to-emerald-600/5",
  },
  {
    id: "solar",
    label: "Solar",
    icon: Sun,
    headline: "Stop paying the 'Grid Tax.'",
    cta: "Calculate your solar savings in 30 seconds.",
    color: "from-amber-500/20 to-amber-600/5",
  },
  {
    id: "b2b-saas",
    label: "B2B SaaS",
    icon: Building2,
    headline: "Is your competition using AI to steal your market share?",
    cta: "Take the audit.",
    color: "from-violet-500/20 to-violet-600/5",
  },
]

const sliderValues = [1000, 5000, 10000, 25000, 50000, 75000, 100000]

export default function Home() {
  const [activeTab, setActiveTab] = useState("real-estate")
  const [sliderPosition, setSliderPosition] = useState(50)
  const [isDemoOpen, setIsDemoOpen] = useState(false)
  const [demoStep, setDemoStep] = useState(0)
  const [demoAnswers, setDemoAnswers] = useState({
    industry: "",
    dealValue: 25000,
    ghostingLeads: "",
  })
  const [isScanning, setIsScanning] = useState(false)

  const activeIndustry = industryTabs.find((t) => t.id === activeTab)!

  const calculateRecovery = () => {
    const leads = parseInt(demoAnswers.ghostingLeads) || 0
    return (demoAnswers.dealValue * leads * 0.2).toLocaleString()
  }

  const handleDemoNext = () => {
    if (demoStep === 2) {
      setIsScanning(true)
      setTimeout(() => {
        setIsScanning(false)
        setDemoStep(3)
      }, 2500)
    } else if (demoStep < 3) {
      setDemoStep(demoStep + 1)
    }
  }

  const resetDemo = () => {
    setDemoStep(0)
    setDemoAnswers({ industry: "", dealValue: 25000, ghostingLeads: "" })
    setIsDemoOpen(false)
    setIsScanning(false)
  }

  const progress = demoStep === 0 ? 20 : 20 + (demoStep * 25)

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30">
      <Navigation />

      {/* Hero Section */}
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
              Lead Intelligence Platform
            </motion.div>
            <motion.h1
              variants={fadeIn}
              className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-8 leading-[0.9]"
            >
              Stop Guessing. <br /><span className="text-primary">Start Closing.</span>
            </motion.h1>
            <motion.p
              variants={fadeIn}
              className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl leading-relaxed"
            >
              Most funnels are leaky buckets. Hotlist Engine is a high-velocity capture system that uses Lead Intelligence to identify, qualify, and convert your best customers in under 60 seconds.
            </motion.p>
            <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={() => setIsDemoOpen(true)}
                size="lg"
                className="text-base h-14 px-10 bg-accent hover:bg-accent/90 rounded-none font-bold tracking-tight"
              >
                SEE YOUR REVENUE POTENTIAL <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Link href="/how-it-works">
                <Button size="lg" variant="outline" className="text-base h-14 px-10 border-white/10 hover:bg-white/5 rounded-none font-bold tracking-tight">
                  VIEW ARCHITECTURE
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Comparison Slider Section */}
      <section className="py-24 border-b border-white/5 bg-[#0D0D0D]">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-12"
          >
            <motion.h2 variants={fadeIn} className="text-3xl md:text-5xl font-bold tracking-tighter mb-4 uppercase">
              The <span className="text-primary">1 Second</span> Difference
            </motion.h2>
            <motion.p variants={fadeIn} className="text-muted-foreground text-lg">
              Drag to compare legacy forms vs. Hotlist Engine
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={springTransition}
            className="relative h-[400px] md:h-[500px] border border-white/10 rounded-none overflow-hidden"
          >
            {/* Old Form Side */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300">
              <div className="p-8 h-full flex flex-col">
                <div className="text-gray-800 font-bold text-sm mb-4">LEGACY FORM (2005)</div>
                <div className="bg-white border-2 border-gray-400 p-6 space-y-4 flex-1">
                  <div className="h-4 bg-gray-300 w-3/4" />
                  <input className="w-full border-2 border-gray-400 p-3 text-sm text-gray-500" placeholder="First Name *" disabled />
                  <input className="w-full border-2 border-gray-400 p-3 text-sm text-gray-500" placeholder="Last Name *" disabled />
                  <input className="w-full border-2 border-gray-400 p-3 text-sm text-gray-500" placeholder="Email Address *" disabled />
                  <input className="w-full border-2 border-gray-400 p-3 text-sm text-gray-500" placeholder="Phone Number *" disabled />
                  <input className="w-full border-2 border-gray-400 p-3 text-sm text-gray-500" placeholder="Company Name" disabled />
                  <textarea className="w-full border-2 border-gray-400 p-3 text-sm text-gray-500 h-20" placeholder="Tell us about your needs..." disabled />
                  <button className="bg-blue-600 text-white px-6 py-2 text-sm">Submit Form</button>
                </div>
                <div className="mt-4 text-gray-600 text-xs">Average completion time: 4+ minutes</div>
              </div>
            </div>

            {/* Hotlist Engine Side */}
            <div
              className="absolute inset-0 bg-[#0A0A0A] overflow-hidden"
              style={{ clipPath: `inset(0 0 0 ${sliderPosition}%)` }}
            >
              <div className="p-8 h-full flex flex-col">
                <div className="text-primary font-bold text-sm mb-4 flex items-center gap-2">
                  <Zap className="h-4 w-4" /> HOTLIST ENGINE
                </div>
                <div className="glass-card p-6 flex-1 flex flex-col justify-center">
                  <div className="mb-6">
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-primary to-accent"
                        initial={{ width: "20%" }}
                        animate={{ width: "85%" }}
                        transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                      />
                    </div>
                    <div className="text-xs text-muted-foreground mt-2">Step 3 of 4</div>
                  </div>
                  <h3 className="text-xl font-bold mb-4">What&apos;s holding your business back?</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {["Not enough leads", "Low conversion", "High competition", "Budget constraints"].map((opt) => (
                      <button key={opt} className="p-4 border border-white/10 hover:border-primary/50 hover:bg-primary/5 transition-all text-left text-sm">
                        {opt}
                      </button>
                    ))}
                  </div>
                  <div className="mt-6 flex items-center gap-2 text-xs text-muted-foreground">
                    <motion.div
                      animate={{ opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                      className="flex items-center gap-2"
                    >
                      <Loader2 className="h-3 w-3 animate-spin" />
                      Scanning Data...
                    </motion.div>
                  </div>
                </div>
                <div className="mt-4 text-accent text-xs font-bold">Average completion time: 47 seconds</div>
              </div>
            </div>

            {/* Slider Handle */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize z-10"
              style={{ left: `${sliderPosition}%` }}
              onMouseDown={(e) => {
                const handleMouseMove = (e: MouseEvent) => {
                  const rect = (e.target as HTMLElement).closest("section")?.querySelector(".relative")?.getBoundingClientRect()
                  if (rect) {
                    const x = Math.max(0, Math.min(100, ((e.clientX - rect.left) / rect.width) * 100))
                    setSliderPosition(x)
                  }
                }
                const handleMouseUp = () => {
                  document.removeEventListener("mousemove", handleMouseMove)
                  document.removeEventListener("mouseup", handleMouseUp)
                }
                document.addEventListener("mousemove", handleMouseMove)
                document.addEventListener("mouseup", handleMouseUp)
              }}
            >
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg">
                <ChevronRight className="h-4 w-4 text-black -mr-1" />
                <ChevronRight className="h-4 w-4 text-black rotate-180 -ml-1" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Intelligence Feature Grid */}
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
              Lead <span className="text-primary">Intelligence</span>
            </motion.h2>
            <motion.p variants={fadeIn} className="text-xl text-muted-foreground max-w-2xl">
              Know more about your prospects than they know about themselves.
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-1">
            {[
              {
                icon: HomeIcon,
                title: "Homeowner DNA",
                label: "B2C",
                description: "We verify equity, ownership length, and distress signals before you ever pick up the phone.",
                color: "text-emerald-400",
              },
              {
                icon: Target,
                title: "Intent Mapping",
                label: "B2B",
                description: "Identify decision-makers by revenue, hiring signals, and tech-stack.",
                color: "text-violet-400",
              },
              {
                icon: Zap,
                title: "The 1s Edge",
                label: "SPEED",
                description: "In the time it takes a competitor's site to load, your prospect has already finished our quiz.",
                color: "text-accent",
              },
            ].map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ ...springTransition, delay: i * 0.1 }}
              >
                <Card className="h-full rounded-none border-white/5 bg-[#0A0A0A] hover:bg-white/5 transition-all duration-100 group cursor-pointer border relative overflow-hidden">
                  <div className="absolute top-4 right-4">
                    <span className={`text-[10px] font-bold uppercase tracking-widest ${card.color}`}>
                      {card.label}
                    </span>
                  </div>
                  <CardHeader className="pt-12">
                    <card.icon className={`h-10 w-10 mb-6 ${card.color}`} />
                    <CardTitle className="text-2xl uppercase font-bold tracking-tight">{card.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-relaxed group-hover:text-foreground transition-colors">
                      {card.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Chameleon Section */}
      <section className="py-32 border-b border-white/5 bg-[#0D0D0D]">
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
              Industry <span className="text-accent">Chameleon</span>
            </motion.h2>
            <motion.p variants={fadeIn} className="text-xl text-muted-foreground">
              One engine. Infinite applications.
            </motion.p>
          </motion.div>

          <div className="flex flex-wrap gap-2 mb-8">
            {industryTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-3 border transition-all duration-100 font-bold uppercase text-sm tracking-tight ${
                  activeTab === tab.id
                    ? "border-primary bg-primary/10 text-primary"
                    : "border-white/10 hover:border-white/20 text-muted-foreground hover:text-foreground"
                }`}
              >
                <tab.icon className="h-4 w-4" />
                {tab.label}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={springTransition}
              className={`glass-card p-8 md:p-12 bg-gradient-to-br ${activeIndustry.color}`}
            >
              <div className="max-w-2xl">
                <activeIndustry.icon className="h-12 w-12 text-primary mb-6" />
                <h3 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                  {activeIndustry.headline}
                </h3>
                <p className="text-xl text-muted-foreground mb-8">
                  {activeIndustry.cta}
                </p>
                <Button
                  onClick={() => setIsDemoOpen(true)}
                  size="lg"
                  className="rounded-none bg-primary hover:bg-primary/90 font-bold tracking-tight"
                >
                  START THE QUIZ <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Pricing Engine Section */}
      <section className="py-32 border-b border-white/5">
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
              className="text-4xl md:text-6xl font-bold tracking-tighter mb-4 uppercase"
            >
              The Pricing <span className="text-primary">Engine</span>
            </motion.h2>
            <motion.p variants={fadeIn} className="text-xl text-muted-foreground">
              Simple. Transparent. Results-driven.
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-1 max-w-4xl mx-auto">
            {[
              {
                name: "The Engine Starter",
                price: "$495",
                setup: "$495",
                features: ["1 Core Funnel", "Basic Lead Intel", "CRM Sync"],
                highlight: false,
              },
              {
                name: "The Growth Accelerator",
                price: "$995",
                setup: "$995",
                features: ["Unlimited Funnels", "Full Lyft Lead Intelligence", "5k Outreach Contacts"],
                highlight: true,
              },
            ].map((plan, i) => (
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
                  <CardHeader className="text-center pt-12 pb-8">
                    <CardTitle className="text-lg uppercase tracking-widest text-muted-foreground mb-4">
                      {plan.name}
                    </CardTitle>
                    <div className="text-5xl font-bold tracking-tighter mb-2">
                      {plan.price}<span className="text-xl text-muted-foreground">/mo</span>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      + {plan.setup} Setup
                    </div>
                  </CardHeader>
                  <CardContent className="pb-12">
                    <ul className="space-y-4 mb-8">
                      {plan.features.map((feature, j) => (
                        <li key={j} className="flex items-center gap-3">
                          <Zap className={`h-4 w-4 ${plan.highlight ? "text-accent" : "text-primary"}`} />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Link href="/contact">
                      <Button className={`w-full rounded-none font-bold tracking-tight ${
                        plan.highlight
                          ? "bg-accent hover:bg-accent/90"
                          : "bg-primary hover:bg-primary/90"
                      }`}>
                        GET STARTED
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
              <Button
                onClick={() => setIsDemoOpen(true)}
                size="lg"
                className="text-xl h-16 px-12 bg-accent hover:bg-accent/90 rounded-none font-bold tracking-tight"
              >
                CALCULATE YOUR RECOVERY
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Demo Funnel Modal */}
      <AnimatePresence>
        {isDemoOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-end md:items-center justify-center p-4"
            onClick={(e) => e.target === e.currentTarget && resetDemo()}
          >
            <motion.div
              initial={{ opacity: 0, y: 100, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 100, scale: 0.95 }}
              transition={springTransition}
              className="glass-card w-full max-w-lg max-h-[90vh] overflow-auto relative"
            >
              <button
                onClick={resetDemo}
                className="absolute top-4 right-4 p-2 hover:bg-white/10 rounded-full transition-colors"
              >
                <X className="h-5 w-5" />
              </button>

              {/* Progress Bar - Starts at 20% */}
              <div className="p-6 pb-0">
                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-primary to-accent"
                    initial={{ width: "20%" }}
                    animate={{ width: `${progress}%` }}
                    transition={springTransition}
                  />
                </div>
                <div className="text-xs text-muted-foreground mt-2">
                  {isScanning ? "Analyzing..." : `Step ${demoStep + 1} of 4`}
                </div>
              </div>

              <div className="p-6">
                <AnimatePresence mode="wait">
                  {isScanning ? (
                    <motion.div
                      key="scanning"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="py-16 text-center"
                    >
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="inline-block mb-6"
                      >
                        <Loader2 className="h-12 w-12 text-primary" />
                      </motion.div>
                      <motion.p
                        animate={{ opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="text-xl font-bold"
                      >
                        Scanning Hotlist Intelligence...
                      </motion.p>
                      <p className="text-muted-foreground mt-2">Analyzing market data</p>
                    </motion.div>
                  ) : demoStep === 0 ? (
                    <motion.div
                      key="step0"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={springTransition}
                    >
                      <h3 className="text-2xl font-bold mb-2">Which industry are you dominating?</h3>
                      <p className="text-muted-foreground mb-6 text-sm">What opportunities are you missing?</p>
                      <div className="grid grid-cols-2 gap-3">
                        {["Real Estate", "Solar", "SaaS", "Professional Services", "Other"].map((opt) => (
                          <button
                            key={opt}
                            onClick={() => {
                              setDemoAnswers({ ...demoAnswers, industry: opt })
                              handleDemoNext()
                            }}
                            className={`p-4 border transition-all text-left font-medium ${
                              demoAnswers.industry === opt
                                ? "border-primary bg-primary/10"
                                : "border-white/10 hover:border-primary/50 hover:bg-primary/5"
                            }`}
                          >
                            {opt}
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  ) : demoStep === 1 ? (
                    <motion.div
                      key="step1"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={springTransition}
                    >
                      <h3 className="text-2xl font-bold mb-2">What is the average value of a closed deal for you?</h3>
                      <p className="text-muted-foreground mb-6 text-sm">How much revenue are you leaving on the table?</p>
                      <div className="space-y-6">
                        <div className="text-center">
                          <div className="text-4xl font-bold text-primary mb-4">
                            ${demoAnswers.dealValue.toLocaleString()}
                            {demoAnswers.dealValue >= 100000 && "+"}
                          </div>
                          <input
                            type="range"
                            min="0"
                            max="6"
                            value={sliderValues.indexOf(demoAnswers.dealValue)}
                            onChange={(e) => setDemoAnswers({ ...demoAnswers, dealValue: sliderValues[parseInt(e.target.value)] })}
                            className="w-full accent-primary"
                          />
                          <div className="flex justify-between text-xs text-muted-foreground mt-2">
                            <span>$1k</span>
                            <span>$100k+</span>
                          </div>
                        </div>
                        <Button
                          onClick={handleDemoNext}
                          className="w-full rounded-none bg-primary hover:bg-primary/90 font-bold"
                        >
                          CONTINUE <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    </motion.div>
                  ) : demoStep === 2 ? (
                    <motion.div
                      key="step2"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={springTransition}
                    >
                      <h3 className="text-2xl font-bold mb-2">How many leads are currently &apos;ghosting&apos; you every month?</h3>
                      <p className="text-muted-foreground mb-6 text-sm">What conversations are slipping through the cracks?</p>
                      <div className="space-y-6">
                        <input
                          type="number"
                          value={demoAnswers.ghostingLeads}
                          onChange={(e) => setDemoAnswers({ ...demoAnswers, ghostingLeads: e.target.value })}
                          placeholder="Enter number of leads..."
                          className="w-full p-4 bg-white/5 border border-white/10 focus:border-primary focus:outline-none text-xl"
                        />
                        <Button
                          onClick={handleDemoNext}
                          disabled={!demoAnswers.ghostingLeads}
                          className="w-full rounded-none bg-primary hover:bg-primary/90 font-bold disabled:opacity-50"
                        >
                          CALCULATE MY RECOVERY <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="step3"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={springTransition}
                      className="text-center py-8"
                    >
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/20 mb-6">
                        <TrendingUp className="h-8 w-8 text-accent" />
                      </div>
                      <h3 className="text-2xl font-bold mb-4">Your Revenue Recovery Potential</h3>
                      <p className="text-muted-foreground mb-6">
                        Based on your numbers, the Engine can recover roughly
                      </p>
                      <div className="text-5xl md:text-6xl font-bold text-accent mb-8">
                        ${calculateRecovery()}
                      </div>
                      <p className="text-muted-foreground mb-8">in lost revenue per month</p>
                      <Link href="/contact">
                        <Button
                          size="lg"
                          className="w-full rounded-none bg-accent hover:bg-accent/90 font-bold text-lg h-14"
                        >
                          BOOK YOUR DEPLOYMENT DEMO
                        </Button>
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  )
}
