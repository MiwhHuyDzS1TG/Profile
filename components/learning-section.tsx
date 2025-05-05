"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { BookOpen, Code2 } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import SectionTitle from "@/components/section-title"

type LearningItem = {
  name: string
  icon: JSX.Element
  description: string
  color: string
}

export default function LearningSection() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })

  const learningItems: LearningItem[] = [
    {
      name: "Java",
      icon: <Code2 className="h-10 w-10" />,
      description: "Currently diving into React Native and Node.js for cross-platform apps and scalable backend systems.",
      color: "bg-gradient-to-br from-orange-600 to-red-600",
    },
    {
      name: "C++",
      icon: <Code2 className="h-10 w-10" />,
      description: "Mastering medium-level control and algorithmic thinking. Focused on performance, precision, and problem-solving.",
      color: "bg-gradient-to-br from-blue-600 to-indigo-600",
    },
    {
      name: "Python",
      icon: <Code2 className="h-10 w-10" />,
      description: "Building intelligent solutions with Python — from algorithms to automation, and a growing interest in AI and data.",
      color: "bg-gradient-to-br from-yellow-600 to-yellow-600",
    },
  ]

  // Staggered animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  }

  return (
    <section id="learning" className="py-16" ref={sectionRef}>
      <SectionTitle>Currently Learning</SectionTitle>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {learningItems.map((item) => (
          <motion.div key={item.name} variants={itemVariants} whileHover={{ y: -10 }} className="will-change-transform">
            <Card className="h-full shadow-lg hover:shadow-xl transition-all duration-300 border-none bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm overflow-hidden">
              <div className={`h-2 ${item.color}`} />
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className={`p-4 rounded-full text-white mb-4 ${item.color}`}>{item.icon}</div>

                <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-3">{item.name}</h3>

                <p className="text-slate-600 dark:text-slate-400">{item.description}</p>

                <div className="mt-4 flex items-center text-purple-600 dark:text-purple-400">
                  <BookOpen className="h-4 w-4 mr-1" />
                  <span className="text-sm font-medium">In progress</span>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
