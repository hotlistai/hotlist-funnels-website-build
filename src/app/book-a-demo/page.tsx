"use client"

import { motion } from "framer-motion"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Script from "next/script"

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
            variants={{
              animate: {
                transition: {
                  staggerChildren: 0.05,
                },
              },
            }}
            className="max-w-4xl"
          >
            <motion.div
              variants={fadeIn}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-none bg-secondary border border-border text-[10px] font-bold uppercase tracking-widest mb-8 text-black"
            >
              <span className="flex h-2 w-2 rounded-full bg-accent animate-pulse" />
              Live Revenue Audit
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
              Schedule your 20-minute Revenue Recovery Audit and see how much lost revenue we can recover for your business.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeIn}
            className="bg-white border border-border shadow-2xl"
          >
            <div 
              className="calendly-inline-widget" 
              data-url="https://calendly.com/hotlistai/hotlist-funnels-discovery-call?hide_gdpr_banner=1&primary_color=007aff" 
              style={{ minWidth: '320px', height: '700px' }}
            />
            <Script
              src="https://assets.calendly.com/assets/external/widget.js"
              strategy="afterInteractive"
            />
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
