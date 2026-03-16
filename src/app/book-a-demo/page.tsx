"use client"

import { motion } from "framer-motion"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Script from "next/script"
import { Check, Clock, Users, Zap, Star } from "lucide-react"

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

const whatToExpect = [
  {
    icon: Clock,
    title: "15 minutes",
    description: "That's all it takes. We don't do hour-long sales calls. We show you what your funnel looks like, what it'll cost, and what you'll get back.",
  },
  {
    icon: Users,
    title: "You'll speak with a strategist",
    description: "Not a closer. Someone who has built hundreds of funnels and will tell you honestly if HOTLIST is the right fit for your business.",
  },
  {
    icon: Zap,
    title: "Come ready to move",
    description: "If it's a fit, we can kick off your funnel the same day. Have your target market, average deal size, and current lead source in mind.",
  },
]

const prepList = [
  "Your primary industry or niche",
  "Your average deal size (rough estimate is fine)",
  "How leads currently find you (ads, referrals, organic)",
  "Your biggest bottleneck right now (leads, conversions, or both)",
]

export default function BookADemoPage() {
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
              Live Revenue Audit — 15 Minutes
            </motion.div>
            <motion.h1
              variants={fadeIn}
              className="text-5xl md:text-7xl lg:text-9xl font-bold tracking-tighter mb-8 leading-[0.85] text-[#121212]"
            >
              Book Your <br /><span className="text-primary italic">DEMO</span>
            </motion.h1>
            <motion.p
              variants={fadeIn}
              className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl leading-relaxed"
            >
              15 minutes. We&apos;ll show you exactly what your funnel looks like, what it costs to not have one, and how fast we can have it live.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 border-b border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-start">

            {/* Left: What to expect + prep */}
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.h2 variants={fadeIn} className="text-3xl font-bold tracking-tighter mb-12 uppercase text-[#121212]">
                What happens on the call.
              </motion.h2>

              <div className="space-y-10 mb-16">
                {whatToExpect.map((item, i) => (
                  <motion.div key={i} variants={fadeIn} className="flex gap-6">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/5 border border-primary/10 flex items-center justify-center">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold uppercase tracking-widest text-[#121212] mb-2">{item.title}</h3>
                      <p className="text-sm text-muted-foreground font-medium leading-relaxed">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div variants={fadeIn} className="bg-slate-50 border border-border p-8">
                <h3 className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-6">Come prepared with:</h3>
                <ul className="space-y-4">
                  {prepList.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm font-bold text-[#121212]">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>

            {/* Right: Cal.com */}
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeIn}
              className="space-y-4"
            >
              {/* Trust badge */}
              <div className="flex items-center justify-between px-4 py-3 bg-accent/5 border border-accent/20">
                <div className="flex items-center gap-2">
                  <span className="flex h-2 w-2 rounded-full bg-accent animate-pulse" />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-accent">300+ funnels deployed · 7-day launch guarantee</span>
                </div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Free · 15 min</span>
              </div>

              {/* Social proof above calendar */}
              <div className="bg-[#121212] p-6">
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="h-3 w-3 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-white/80 text-sm leading-relaxed mb-4 font-medium">&ldquo;I was hemorrhaging $40k/mo in ghosted real estate leads. HOTLIST recovered most of it within 60 days.&rdquo;</p>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-white text-xs font-bold uppercase tracking-widest">Derek M.</div>
                    <div className="text-white/40 text-[10px] uppercase tracking-widest mt-1">Real Estate Broker, California</div>
                  </div>
                  <div className="text-accent text-xs font-bold uppercase tracking-widest">$40k recovered/mo</div>
                </div>
              </div>

              {/* Calendar */}
              <div className="bg-white border border-border shadow-2xl overflow-hidden">
                <div
                  id="cal-booking"
                  style={{ minWidth: "320px", height: "700px" }}
                />
                <Script
                  src="https://cal.com/embed.js"
                  strategy="afterInteractive"
                  onLoad={() => {
                    // @ts-expect-error Cal is loaded via script
                    window.Cal?.("init", "hvac-deployment", { origin: "https://cal.com" })
                    // @ts-expect-error Cal is loaded via script
                    window.Cal?.("inline", {
                      elementOrSelector: "#cal-booking",
                      calLink: "hotlistai/hvac-deployment",
                      config: {
                        layout: "month_view",
                        theme: "light",
                        cssVarsPerTheme: {
                          light: { "cal-brand": "#007aff" },
                        },
                      },
                    })
                  }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
