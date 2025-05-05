"use client"

import type React from "react"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Users, BarChart2, Clock, Activity } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import SectionTitle from "@/components/section-title"

export default function DetailedStatistics() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })

  return (
    <section id="statistics" className="py-16" ref={sectionRef}>
      <SectionTitle>Site Statistics</SectionTitle>

      <motion.div
        className="max-w-4xl mx-auto mt-8 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">
          Real-time analytics showing current site activity and performance metrics.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
        <StatCard
          icon={<Users className="h-6 w-6" />}
          title="Active Visitors"
          value="visitor-count"
          description="Current users viewing the site"
          color="from-amber-500 to-yellow-300"
          delay={0}
          isInView={isInView}
        />

        <StatCard
          icon={<BarChart2 className="h-6 w-6" />}
          title="Daily Requests"
          value="request-count"
          description="Total requests processed today"
          color="from-purple-500 to-blue-500"
          delay={0.1}
          isInView={isInView}
        />

        <StatCard
          icon={<Clock className="h-6 w-6" />}
          title="Avg. Response Time"
          value="120ms"
          description="Average server response time"
          color="from-green-500 to-emerald-400"
          delay={0.2}
          isInView={isInView}
        />

        <StatCard
          icon={<Activity className="h-6 w-6" />}
          title="Uptime"
          value="99.9%"
          description="Server availability this month"
          color="from-blue-500 to-cyan-400"
          delay={0.3}
          isInView={isInView}
        />
      </div>
    </section>
  )
}

interface StatCardProps {
  icon: React.ReactNode
  title: string
  value: string
  description: string
  color: string
  delay: number
  isInView: boolean
}

function StatCard({ icon, title, value, description, color, delay, isInView }: StatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay }}
      className="will-change-transform"
    >
      <Card className="h-full shadow-md hover:shadow-lg transition-all duration-300 border-none bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm">
        <CardContent className="p-6">
          <div className="flex flex-col items-center text-center">
            <div className={`p-3 rounded-full bg-gradient-to-r ${color} text-white mb-4`}>{icon}</div>

            <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-1">{title}</h3>

            {value === "visitor-count" ? (
              <p className="text-2xl font-bold text-slate-900 dark:text-white mb-2 visitor-count">
                <span className="loading-placeholder"></span>
              </p>
            ) : value === "request-count" ? (
              <p className="text-2xl font-bold text-slate-900 dark:text-white mb-2 request-count">
                <span className="loading-placeholder"></span>
              </p>
            ) : (
              <p className="text-2xl font-bold text-slate-900 dark:text-white mb-2">{value}</p>
            )}

            <p className="text-sm text-slate-500 dark:text-slate-400">{description}</p>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
