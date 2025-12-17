"use client"

import { motion } from "framer-motion"
import { ReactNode } from "react"

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

export function MotionDiv({ children, className, delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  return (
    <motion.div
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      variants={{
        ...fadeIn,
        animate: { ...fadeIn.animate, transition: { ...fadeIn.transition, delay } }
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function MotionSection({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      variants={staggerContainer}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function MotionFadeIn({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      variants={fadeIn}
      className={className}
    >
      {children}
    </motion.div>
  )
}
