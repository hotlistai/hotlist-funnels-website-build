"use client"

import { motion } from "framer-motion"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
}

export default function BookADemoPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial="initial"
            animate="animate"
            variants={{
              animate: {
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
            className="text-center mb-12"
          >
            <motion.h1
              variants={fadeIn}
              className="font-serif text-5xl md:text-6xl font-semibold mb-6"
            >
              Book Your Demo
            </motion.h1>
            <motion.p variants={fadeIn} className="text-xl text-muted-foreground">
              Choose a time that works best for you to see Hotlist Funnels in action.
            </motion.p>
          </motion.div>

          <motion.div
            initial="initial"
            animate="animate"
            variants={fadeIn}
            className="bg-white border border-border overflow-hidden shadow-2xl min-h-[700px]"
          >
            {/* Calendly Inline Embed */}
            <iframe
              src="https://calendly.com/your-username/demo?hide_event_type_details=1&hide_gdpr_banner=1"
              width="100%"
              height="700"
              frameBorder="0"
              title="Select a Date & Time - Calendly"
            ></iframe>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
