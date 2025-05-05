"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import SectionTitle from "@/components/section-title"

type Skill = {
  name: string
  level: number
  color: string
}

export default function SkillsSection() {
  const skills: Skill[] = [
    { name: "Python", level: 90, color: "from-blue-600 to-blue-400" },
    { name: "JavaScript", level: 85, color: "from-yellow-600 to-yellow-400" },
    { name: "HTML/CSS", level: 80, color: "from-orange-600 to-orange-400" },
    { name: "React", level: 75, color: "from-cyan-600 to-cyan-400" },
    { name: "Node.js", level: 70, color: "from-green-600 to-green-400" },
    { name: "Git", level: 85, color: "from-red-600 to-red-400" },
  ]

  // Use a ref for the entire section
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })

  // Staggered animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  // Optimized bar animation
  const barVariants = {
    hidden: { width: 0 },
    visible: (level: number) => ({
      width: `${level}%`,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 0.2,
      },
    }),
  }

  return (
    <section id="skills" className="py-16" ref={sectionRef}>
      <SectionTitle>Primary Skills</SectionTitle>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {skills.map((skill) => (
          <motion.div key={skill.name} variants={itemVariants} className="will-change-transform">
            <Card className="shadow-md hover:shadow-lg transition-shadow duration-300 border-none bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-lg font-medium text-slate-800 dark:text-slate-200">{skill.name}</h3>
                  <span className="text-sm font-medium text-slate-600 dark:text-slate-400">{skill.level}%</span>
                </div>

                <div className="w-full h-3 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                  <motion.div
                    className={`h-full rounded-full bg-gradient-to-r ${skill.color} will-change-transform`}
                    variants={barVariants}
                    custom={skill.level}
                  />
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
