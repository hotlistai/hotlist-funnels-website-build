"use client"

import { useEffect } from "react"
import { motion } from "framer-motion"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
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
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ;(function (C: any, A: string, L: string) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const p = (a: any, ar: any) => { a.q.push(ar) }
      const d = C.document
      C.Cal = C.Cal || function (...args: unknown[]) {
        const cal = C.Cal
        if (!cal.loaded) {
          cal.ns = {}
          cal.q = cal.q || []
          const s = d.createElement("script")
          s.src = A
          d.head.appendChild(s)
          cal.loaded = true
        }
        if (args[0] === L) {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const api: any = (...a: unknown[]) => p(api, a)
          api.q = []
          const namespace = args[1]
          if (typeof namespace === "string") {
            cal.ns[namespace] = cal.ns[namespace] || api
            p(cal.ns[namespace], args)
            p(cal, ["-s", namespace])
          } else {
            p(cal, args)
          }
          return
        }
        p(cal, args)
      }
    })(window, "https://app.cal.com/embed/embed.js", "init")

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const Cal = (window as any).Cal
    Cal("init", "audit", { origin: "https://app.cal.com" })
    Cal.ns.audit("ui", {
      theme: "light",
      cssVarsPerTheme: {
        light: { "cal-brand": "#007AFF" },
        dark: { "cal-brand": "#007AFF" },
      },
      hideEventTypeDetails: true,
      layout: "month_view",
    })
  }, [])

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

            {/* Right: Cal.com popup trigger */}
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

              {/* Social proof */}
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

              {/* Blurred calendar preview — click triggers Cal.com popup */}
              <div className="relative border border-border overflow-hidden bg-white shadow-2xl">
                {/* Decorative blurred calendar */}
                <div className="blur-sm pointer-events-none select-none p-6 opacity-60" aria-hidden>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-bold text-[#121212]">March 2026</span>
                    <div className="flex gap-2">
                      <div className="w-6 h-6 bg-secondary border border-border" />
                      <div className="w-6 h-6 bg-secondary border border-border" />
                    </div>
                  </div>
                  <div className="grid grid-cols-7 gap-1 mb-2">
                    {["S","M","T","W","T","F","S"].map((d, i) => (
                      <div key={i} className="text-center text-[10px] font-bold uppercase tracking-widest text-muted-foreground py-1">{d}</div>
                    ))}
                  </div>
                  <div className="grid grid-cols-7 gap-1">
                    {[...Array(2)].map((_, i) => <div key={`e${i}`} />)}
                    {[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31].map((d) => (
                      <div
                        key={d}
                        className={`text-center text-xs py-2 font-medium ${
                          [18,19,20,25,26].includes(d)
                            ? "bg-primary text-white font-bold"
                            : d === 17
                            ? "bg-[#121212] text-white font-bold"
                            : "text-[#121212]"
                        }`}
                      >
                        {d}
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA overlay */}
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-white/70 backdrop-blur-[2px]">
                  <div className="text-center px-8">
                    <div className="flex h-3 w-3 rounded-full bg-accent animate-pulse mx-auto mb-4" />
                    <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2">Spots available this week</p>
                    <h3 className="text-2xl font-bold tracking-tighter text-[#121212] uppercase mb-6">Pick Your Time</h3>
                    <button
                      data-cal-namespace="audit"
                      data-cal-link="hotlist-digital/audit"
                      data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true","theme":"light"}'
                      className="inline-flex items-center gap-3 bg-primary hover:bg-primary/90 text-white font-bold text-xs uppercase tracking-widest px-10 py-4 transition-colors cursor-pointer"
                    >
                      <span className="flex h-2 w-2 rounded-full bg-white/60" />
                      BOOK YOUR FREE DEMO
                    </button>
                    <p className="text-[10px] text-muted-foreground uppercase tracking-widest mt-4">15 min · No commitment · Instant confirm</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
