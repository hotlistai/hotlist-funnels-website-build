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
    color: "from-emerald-500/10 to-emerald-600/5",
  },
  {
    id: "solar",
    label: "Solar",
    icon: Sun,
    headline: "Stop paying the 'Grid Tax.'",
    cta: "Calculate your solar savings in 30 seconds.",
    color: "from-amber-500/10 to-amber-600/5",
  },
  {
    id: "b2b-saas",
    label: "B2B SaaS",
    icon: Building2,
    headline: "Is your competition using AI to steal your market share?",
    cta: "Take the audit.",
    color: "from-violet-500/10 to-violet-600/5",
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
              Lead Intelligence Platform
            </motion.div>
            <motion.h1
              variants={fadeIn}
              className="text-5xl md:text-7xl lg:text-9xl font-bold tracking-tighter mb-8 leading-[0.85] text-[#121212]"
            >
              Stop Guessing. <br /><span className="text-primary italic">Start Closing.</span>
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
                className="text-base h-14 px-10 bg-accent hover:bg-accent/90 rounded-none font-bold tracking-tight text-white"
              >
                SEE YOUR REVENUE POTENTIAL <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Link href="/how-it-works">
                <Button size="lg" variant="outline" className="text-base h-14 px-10 border-border hover:bg-secondary rounded-none font-bold tracking-tight">
                  VIEW ARCHITECTURE
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Comparison Slider Section */}
      <section className="py-24 border-b border-border bg-slate-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-12"
          >
            <motion.h2 variants={fadeIn} className="text-3xl md:text-5xl font-bold tracking-tighter mb-4 uppercase text-[#121212]">
              The <span className="text-primary italic">1 Second</span> Difference
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
            className="relative h-[400px] md:h-[500px] border border-border rounded-none overflow-hidden shadow-2xl"
          >
            {/* Old Form Side */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200">
              <div className="p-8 h-full flex flex-col">
                <div className="text-gray-500 font-bold text-[10px] uppercase tracking-widest mb-4">LEGACY FORM (2005)</div>
                <div className="bg-white border border-gray-300 p-6 space-y-3 flex-1">
                  <div className="h-4 bg-gray-200 w-3/4 mb-4" />
                  <div className="grid grid-cols-2 gap-3">
                    <div className="h-10 border border-gray-200 bg-gray-50" />
                    <div className="h-10 border border-gray-200 bg-gray-50" />
                  </div>
                  <div className="h-10 border border-gray-200 bg-gray-50" />
                  <div className="h-10 border border-gray-200 bg-gray-50" />
                  <div className="h-10 border border-gray-200 bg-gray-50" />
                  <button className="bg-gray-400 text-white px-6 py-3 text-xs uppercase font-bold tracking-widest">Submit</button>
                </div>
                <div className="mt-4 text-gray-400 text-[10px] uppercase font-bold tracking-widest">Avg. completion: 4+ minutes</div>
              </div>
            </div>

            {/* Hotlist Engine Side */}
            <div
              className="absolute inset-0 bg-white overflow-hidden"
              style={{ clipPath: `inset(0 0 0 ${sliderPosition}%)` }}
            >
              <div className="p-8 h-full flex flex-col">
                <div className="text-primary font-bold text-[10px] uppercase tracking-widest mb-4 flex items-center gap-2">
                  <Zap className="h-3 w-3" /> HOTLIST ENGINE
                </div>
                <div className="glass-card p-6 flex-1 flex flex-col justify-center bg-slate-50/50">
                  <div className="mb-6">
                    <div className="h-1.5 bg-black/5 rounded-none overflow-hidden">
                      <motion.div
                        className="h-full bg-primary"
                        initial={{ width: "20%" }}
                        animate={{ width: "85%" }}
                        transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                      />
                    </div>
                    <div className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mt-2">Intelligence Phase 3</div>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold mb-6 text-[#121212]">What&apos;s holding your business back?</h3>
                  <div className="grid grid-cols-2 gap-2">
                    {["Not enough leads", "Low conversion", "High competition", "Budget constraints"].map((opt) => (
                      <button key={opt} className="p-4 border border-border bg-white hover:border-primary hover:bg-primary/5 transition-all text-left text-xs font-bold uppercase tracking-tight">
                        {opt}
                      </button>
                    ))}
                  </div>
                  <div className="mt-6 flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                    <motion.div
                      animate={{ opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                      className="flex items-center gap-2"
                    >
                      <Loader2 className="h-3 w-3 animate-spin text-primary" />
                      Scanning Data...
                    </motion.div>
                  </div>
                </div>
                <div className="mt-4 text-accent text-[10px] uppercase font-bold tracking-widest text-right">Avg. completion: 47 seconds</div>
              </div>
            </div>

            {/* Slider Handle */}
            <div
              className="absolute top-0 bottom-0 w-px bg-border cursor-ew-resize z-10"
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
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-12 h-12 bg-white border border-border rounded-none flex items-center justify-center shadow-xl">
                <ChevronRight className="h-4 w-4 text-black -mr-1" />
                <ChevronRight className="h-4 w-4 text-black rotate-180 -ml-1" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mobile-First Funnels Section */}
      <section className="py-32 border-b border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center mb-24">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.div
                variants={fadeIn}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-none bg-primary/10 border border-primary/20 text-[10px] font-bold uppercase tracking-widest mb-8 text-primary"
              >
                Conversion Engineering
              </motion.div>
              <motion.h2
                variants={fadeIn}
                className="text-4xl md:text-6xl font-bold tracking-tighter mb-8 leading-[0.9] text-[#121212]"
              >
                Mobile-First Funnels <br /><span className="text-primary italic">That Convert.</span>
              </motion.h2>
              <motion.div variants={fadeIn} className="space-y-6 text-lg text-muted-foreground leading-relaxed max-w-xl">
                <p>
                  <strong className="text-[#121212]">Speed is everything.</strong> We build the fastest funnels in the industry. Most funnels get abandoned within seconds because they&apos;re too slow. Users tap out before they even see the first question.
                </p>
                <p>
                  We use Next.js and React to build the fastest-loading funnels in the industry. Lightning-fast page transitions keep users engaged from start to finish.
                </p>
              </motion.div>

              <motion.div variants={fadeIn} className="grid grid-cols-2 gap-8 mt-12 border-t border-border pt-12">
                <div>
                  <div className="text-4xl font-bold text-primary tracking-tighter mb-1">&lt;1s</div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Load Time</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary tracking-tighter mb-1">3x</div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Better Engagement</div>
                </div>
              </motion.div>
              <motion.div variants={fadeIn} className="mt-12">
                <Button variant="link" className="p-0 h-auto font-bold uppercase tracking-widest text-[10px] text-[#121212] flex items-center gap-2">
                  Next: Psychology of FOMO <ArrowRight className="h-3 w-3" />
                </Button>
              </motion.div>
            </motion.div>

            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { title: "Appointment", bg: "bg-blue-600", color: "text-white" },
                  { title: "VSL Demo", bg: "bg-[#121212]", color: "text-white" },
                  { title: "Recruiting", bg: "bg-amber-500", color: "text-white" },
                  { title: "Lead Magnet", bg: "bg-blue-800", color: "text-white" },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ ...springTransition, delay: i * 0.1 }}
                    className={`${item.bg} aspect-[4/5] p-6 relative flex flex-col justify-between overflow-hidden group border border-border/10`}
                  >
                    <div className="z-10">
                      <div className={`text-[10px] font-bold uppercase tracking-widest opacity-80 ${item.color}`}>{item.title}</div>
                      <div className={`mt-2 text-xs font-bold leading-tight ${item.color}`}>
                        {i === 0 && "Showcase your offer, qualify leads."}
                        {i === 1 && "Guide potential clients through VSL."}
                        {i === 2 && "Showcase company culture & recruiting."}
                        {i === 3 && "Showcase lead magnet, capture details."}
                      </div>
                    </div>
                    {/* Mock Phone UI */}
                    <div className="relative mt-4 bg-white rounded-t-xl p-2 h-full translate-y-4 group-hover:translate-y-2 transition-transform shadow-2xl">
                      <div className="w-full h-full border border-slate-100 rounded-t-lg bg-slate-50 flex flex-col p-2 gap-2 overflow-hidden">
                        <div className="h-2 w-8 bg-slate-200 rounded-full mx-auto mb-2" />
                        <div className="h-1 bg-primary/20 w-full rounded-full" />
                        <div className="h-3 bg-slate-200 w-3/4 rounded-sm" />
                        <div className="grid grid-cols-2 gap-1">
                          <div className="h-12 bg-white border border-slate-100" />
                          <div className="h-12 bg-white border border-slate-100" />
                        </div>
                        <div className="h-8 bg-primary w-full rounded-none mt-auto" />
                      </div>
                    </div>
                    <div className="absolute top-4 right-4 h-5 w-5 rounded-full bg-white/20 flex items-center justify-center">
                      <Zap className="h-2 w-2 text-white" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Psychology of FOMO Section */}
      <section className="py-32 border-b border-border bg-[#121212] text-white overflow-hidden relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(0,122,255,0.15),transparent_70%)]" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.div
                variants={fadeIn}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-none bg-accent border border-accent/20 text-[10px] font-bold uppercase tracking-widest mb-8 text-white"
              >
                Behavioral Psychology
              </motion.div>
              <motion.h2
                variants={fadeIn}
                className="text-4xl md:text-6xl font-bold tracking-tighter mb-8 leading-[0.9]"
              >
                The Psychology <br /><span className="text-accent italic">of FOMO.</span>
              </motion.h2>
              <motion.p variants={fadeIn} className="text-xl text-white/60 mb-12 max-w-xl">
                We leverage Loss Aversion and Scarcity to drive immediate action.
              </motion.p>

              <div className="space-y-12">
                <motion.div variants={fadeIn} className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-accent/20 border border-accent/30 flex items-center justify-center">
                    <TrendingUp className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold uppercase tracking-tight mb-2">Loss Aversion</h4>
                    <p className="text-white/60 leading-relaxed">
                      Homeowners fear losing $50k in home value more than they desire saving $10k on repairs. We frame your offer to trigger this primal response.
                    </p>
                  </div>
                </motion.div>
                <motion.div variants={fadeIn} className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-accent/20 border border-accent/30 flex items-center justify-center">
                    <Clock className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold uppercase tracking-tight mb-2">Scarcity</h4>
                    <p className="text-white/60 leading-relaxed">
                      &quot;Only 3 assessment slots left in your area&quot; creates urgency that converts 3x better. Real-time data feeds make it authentic and powerful.
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={springTransition}
              className="relative aspect-square border border-white/10 bg-white/5 p-8 flex flex-col justify-center items-center text-center"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-accent" />
              <div className="mb-8">
                <Users className="h-16 w-16 text-accent mx-auto mb-6" />
                <div className="text-sm font-bold uppercase tracking-widest text-accent mb-2">LIVE DATA FEED</div>
                <div className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">
                  12 People Active
                </div>
                <p className="text-white/60">Currently viewing offers in <span className="text-white font-bold">your local area</span></p>
              </div>
              <div className="bg-white/5 border border-white/10 p-6 w-full max-w-sm">
                <div className="flex justify-between items-center mb-4">
                  <div className="text-[10px] font-bold uppercase tracking-widest">Available Slots</div>
                  <div className="text-accent font-bold">03/10</div>
                </div>
                <div className="h-2 bg-white/10 rounded-none overflow-hidden">
                  <motion.div
                    className="h-full bg-accent"
                    initial={{ width: "100%" }}
                    whileInView={{ width: "30%" }}
                    transition={{ duration: 2, delay: 0.5 }}
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Intelligence Feature Grid */}
      <section className="py-32 border-b border-border">
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
              className="text-4xl md:text-6xl font-bold tracking-tighter mb-4 uppercase text-[#121212]"
            >
              Lead <span className="text-primary italic">Intelligence</span>
            </motion.h2>
            <motion.p variants={fadeIn} className="text-xl text-muted-foreground max-w-2xl">
              Know more about your prospects than they know about themselves.
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-1 bg-border border border-border">
            {[
              {
                icon: HomeIcon,
                title: "Homeowner DNA",
                label: "B2C",
                description: "We verify equity, ownership length, and distress signals before you ever pick up the phone.",
                color: "text-emerald-500",
              },
              {
                icon: Target,
                title: "Intent Mapping",
                label: "B2B",
                description: "Identify decision-makers by revenue, hiring signals, and tech-stack.",
                color: "text-violet-500",
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
                <Card className="h-full rounded-none border-none bg-white hover:bg-slate-50 transition-all duration-100 group cursor-pointer relative overflow-hidden">
                  <div className="absolute top-6 right-6">
                    <span className={`text-[10px] font-bold uppercase tracking-widest ${card.color}`}>
                      {card.label}
                    </span>
                  </div>
                  <CardHeader className="pt-16">
                    <card.icon className={`h-10 w-10 mb-8 ${card.color}`} />
                    <CardTitle className="text-2xl uppercase font-bold tracking-tight text-[#121212]">{card.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="pb-16">
                    <CardDescription className="text-base leading-relaxed text-muted-foreground group-hover:text-[#121212] transition-colors">
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
      <section className="py-32 border-b border-border bg-slate-50">
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
              className="text-4xl md:text-6xl font-bold tracking-tighter mb-4 uppercase text-[#121212]"
            >
              Industry <span className="text-accent italic">Chameleon</span>
            </motion.h2>
            <motion.p variants={fadeIn} className="text-xl text-muted-foreground">
              One engine. Infinite applications.
            </motion.p>
          </motion.div>

          <div className="flex flex-wrap gap-1 mb-1 bg-border p-[1px] inline-flex">
            {industryTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-8 py-4 transition-all duration-300 font-bold uppercase text-[10px] tracking-widest ${
                  activeTab === tab.id
                    ? "bg-white text-primary shadow-sm"
                    : "bg-transparent text-muted-foreground hover:text-[#121212] hover:bg-white/50"
                }`}
              >
                <tab.icon className="h-3 w-3" />
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
              className={`p-8 md:p-20 bg-white border border-border shadow-2xl relative overflow-hidden`}
            >
              <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${activeIndustry.color} blur-[100px] -mr-32 -mt-32`} />
              <div className="max-w-2xl relative z-10">
                <activeIndustry.icon className="h-12 w-12 text-primary mb-8" />
                <h3 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6 text-[#121212] leading-none">
                  {activeIndustry.headline}
                </h3>
                <p className="text-xl text-muted-foreground mb-12">
                  {activeIndustry.cta}
                </p>
                <Button
                  onClick={() => setIsDemoOpen(true)}
                  size="lg"
                  className="rounded-none bg-primary hover:bg-primary/90 font-bold tracking-tight text-white h-16 px-12 text-lg"
                >
                  START THE QUIZ <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Pricing Engine Section */}
      <section className="py-32 border-b border-border">
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
              className="text-4xl md:text-6xl font-bold tracking-tighter mb-4 uppercase text-[#121212]"
            >
              The Pricing <span className="text-primary italic">Engine</span>
            </motion.h2>
            <motion.p variants={fadeIn} className="text-xl text-muted-foreground">
              Simple. Transparent. Results-driven.
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-px bg-border border border-border max-w-4xl mx-auto shadow-2xl">
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
                  </div>
                  <ul className="space-y-4 mb-12">
                    {plan.features.map((feature, j) => (
                      <li key={j} className="flex items-center gap-3">
                        <Zap className={`h-3 w-3 ${plan.highlight ? "text-primary" : "text-muted-foreground"}`} />
                        <span className="text-sm font-medium text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact">
                    <Button className={`w-full h-14 rounded-none font-bold tracking-tight text-sm uppercase ${
                      plan.highlight
                        ? "bg-accent hover:bg-accent/90 text-white"
                        : "bg-primary hover:bg-primary/90 text-white"
                    }`}>
                      Get Started
                    </Button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
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
              className="text-5xl md:text-8xl font-bold tracking-tighter mb-8 uppercase text-[#121212]"
            >
              Ready to <span className="text-accent italic">Ignite</span>?
            </motion.h2>
            <motion.p variants={fadeIn} className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
              Our onboarding is as fast as our funnels. Get your conversion engine live in 7 days or less.
            </motion.p>
            <motion.div variants={fadeIn}>
              <Button
                onClick={() => setIsDemoOpen(true)}
                size="lg"
                className="text-xl h-20 px-16 bg-accent hover:bg-accent/90 rounded-none font-bold tracking-tight text-white mb-4 shadow-xl"
              >
                CALCULATE YOUR RECOVERY
              </Button>
              <div className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                No credit card required. 60-second audit.
              </div>
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
            className="fixed inset-0 bg-black/60 backdrop-blur-md z-50 flex items-end md:items-center justify-center p-4"
            onClick={(e) => e.target === e.currentTarget && resetDemo()}
          >
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 100 }}
              transition={springTransition}
              className="bg-white w-full max-w-lg max-h-[90vh] overflow-auto relative shadow-2xl border border-border"
            >
              <button
                onClick={resetDemo}
                className="absolute top-4 right-4 p-2 hover:bg-slate-100 rounded-none transition-colors"
              >
                <X className="h-5 w-5 text-[#121212]" />
              </button>

              {/* Progress Bar - Starts at 20% */}
              <div className="p-10 pb-0">
                <div className="h-1 bg-slate-100 rounded-none overflow-hidden">
                  <motion.div
                    className="h-full bg-primary"
                    initial={{ width: "20%" }}
                    animate={{ width: `${progress}%` }}
                    transition={springTransition}
                  />
                </div>
                <div className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mt-4">
                  {isScanning ? "Intelligence Phase: Scanning" : `Intelligence Phase: 0${demoStep + 1}`}
                </div>
              </div>

              <div className="p-10">
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
                        className="inline-block mb-8"
                      >
                        <Loader2 className="h-12 w-12 text-primary" />
                      </motion.div>
                      <motion.p
                        animate={{ opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="text-2xl font-bold text-[#121212] tracking-tighter uppercase"
                      >
                        Scanning Hotlist Intelligence...
                      </motion.p>
                      <p className="text-muted-foreground mt-2 text-sm font-medium">Synchronizing with carrier data lakes</p>
                    </motion.div>
                  ) : demoStep === 0 ? (
                    <motion.div
                      key="step0"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={springTransition}
                    >
                      <h3 className="text-3xl font-bold mb-2 text-[#121212] tracking-tighter uppercase">Which industry are you dominating?</h3>
                      <p className="text-muted-foreground mb-8 text-sm font-medium">What opportunities are you currently missing?</p>
                      <div className="grid grid-cols-1 gap-2">
                        {["Real Estate", "Solar", "SaaS", "Professional Services", "Other"].map((opt) => (
                          <button
                            key={opt}
                            onClick={() => {
                              setDemoAnswers({ ...demoAnswers, industry: opt })
                              handleDemoNext()
                            }}
                            className={`p-5 border transition-all text-left font-bold uppercase text-xs tracking-widest ${
                              demoAnswers.industry === opt
                                ? "border-primary bg-primary/5 text-primary"
                                : "border-border hover:border-primary hover:bg-slate-50"
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
                      <h3 className="text-3xl font-bold mb-2 text-[#121212] tracking-tighter uppercase">What is the average value of a closed deal?</h3>
                      <p className="text-muted-foreground mb-10 text-sm font-medium">How much revenue is being left on the table?</p>
                      <div className="space-y-10">
                        <div className="text-center">
                          <div className="text-6xl font-bold text-[#121212] tracking-tighter mb-8">
                            ${demoAnswers.dealValue.toLocaleString()}
                            {demoAnswers.dealValue >= 100000 && "+"}
                          </div>
                          <input
                            type="range"
                            min="0"
                            max="6"
                            value={sliderValues.indexOf(demoAnswers.dealValue)}
                            onChange={(e) => setDemoAnswers({ ...demoAnswers, dealValue: sliderValues[parseInt(e.target.value)] })}
                            className="w-full h-1.5 bg-slate-100 appearance-none cursor-pointer accent-primary"
                          />
                          <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest text-muted-foreground mt-4">
                            <span>$1k</span>
                            <span>$100k+</span>
                          </div>
                        </div>
                        <Button
                          onClick={handleDemoNext}
                          className="w-full h-16 rounded-none bg-primary hover:bg-primary/90 font-bold uppercase tracking-widest text-xs py-4 text-white"
                        >
                          Continue Phase
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
                      <h3 className="text-3xl font-bold mb-2 text-[#121212] tracking-tighter uppercase">How many leads are currently &apos;ghosting&apos; you?</h3>
                      <p className="text-muted-foreground mb-8 text-sm font-medium">What conversations are slipping through the cracks?</p>
                      <div className="space-y-10">
                        <input
                          type="number"
                          value={demoAnswers.ghostingLeads}
                          onChange={(e) => setDemoAnswers({ ...demoAnswers, ghostingLeads: e.target.value })}
                          placeholder="Enter leads per month..."
                          className="w-full p-6 bg-slate-50 border border-border focus:border-primary focus:ring-0 focus:outline-none text-2xl font-bold text-[#121212]"
                        />
                        <Button
                          onClick={handleDemoNext}
                          disabled={!demoAnswers.ghostingLeads}
                          className="w-full h-16 rounded-none bg-primary hover:bg-primary/90 font-bold uppercase tracking-widest text-xs py-4 text-white disabled:opacity-50"
                        >
                          Calculate Final Value
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
                      className="text-center py-6"
                    >
                      <div className="inline-flex items-center justify-center w-20 h-20 rounded-none bg-accent/10 mb-8 border border-accent/20">
                        <TrendingUp className="h-10 w-10 text-accent" />
                      </div>
                      <h3 className="text-xl font-bold mb-2 text-muted-foreground uppercase tracking-widest">Revenue Recovery Potential</h3>
                      <div className="text-6xl md:text-7xl font-bold text-[#121212] tracking-tighter mb-4">
                        ${calculateRecovery()}
                      </div>
                      <p className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-12">in lost revenue per month</p>
                      <Link href="/contact">
                        <Button
                          size="lg"
                          className="w-full rounded-none bg-accent hover:bg-accent/90 font-bold uppercase tracking-widest text-xs h-16 text-white"
                        >
                          Book Deployment Demo
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
