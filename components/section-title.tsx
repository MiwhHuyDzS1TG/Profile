"use client"

import type React from "react"
import { useRef } from "react"
import { motion, useInView } from "framer-motion"

interface SectionTitleProps {
  children: React.ReactNode
}

export default function SectionTitle({ children }: SectionTitleProps) {
  const titleRef = useRef(null)
  const isInView = useInView(titleRef, { once: true, amount: 0.5 })

  return (
    <motion.div
      ref={titleRef}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      className="text-center"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-slate-200 inline-block relative">
        {children}
        <motion.span
          className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-amber-500 to-yellow-300"
          initial={{ width: 0 }}
          animate={isInView ? { width: "100%" } : { width: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        />
      </h2>
    </motion.div>
  )
}
