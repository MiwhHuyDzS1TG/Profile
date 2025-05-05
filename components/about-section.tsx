"use client"

import { motion } from "framer-motion"
import { Calendar, Code } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import SectionTitle from "@/components/section-title"

export default function AboutSection() {
  return (
    <section id="about" className="py-16">
      <SectionTitle>About Me</SectionTitle>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Card className="h-full shadow-lg hover:shadow-xl transition-shadow duration-300 border-none bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <Calendar className="h-6 w-6 mr-3 text-purple-600 dark:text-purple-400" />
                <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200">Personal Details</h3>
              </div>

              <div className="space-y-4 text-slate-600 dark:text-slate-300">
                <p className="flex justify-between">
                  <span className="font-medium">Full Name:</span>
                  <span>Nguyên Tuấn Anh (Tahn)</span>
                </p>
                <p className="flex justify-between">
                  <span className="font-medium">Date of Birth:</span>
                  <span>30/06/20**</span>
                </p>
                <p className="flex justify-between">
                  <span className="font-medium">Location:</span>
                  <span>Vietnam</span>
                </p>
                <p className="flex justify-between">
                  <span className="font-medium">Languages:</span>
                  <span>Vietnamese, English</span>
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Card className="h-full shadow-lg hover:shadow-xl transition-shadow duration-300 border-none bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <Code className="h-6 w-6 mr-3 text-blue-600 dark:text-blue-400" />
                <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200">Bio</h3>
              </div>

              <div className="space-y-4 text-slate-600 dark:text-slate-300">
                <p>
                  In a world of constant noise, I find solace in the quiet language of code. Each line I write is a
                  reflection of my journey through the digital wilderness.
                </p>
                <p>
                  My path began with Python and JavaScript, companions that have stayed with me through countless
                  sleepless nights and moments of both triumph and despair.
                </p>
                <p>
                  Behind the screen, I'm a wanderer searching for meaning in algorithms and poetry in functions. When
                  the weight of the world feels too heavy, I retreat into my code—where even the most complex problems
                  have solutions, unlike life's persistent questions.
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
