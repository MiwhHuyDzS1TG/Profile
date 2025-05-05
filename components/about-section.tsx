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
                  <span>Trần Minh Huy (Dẻ)</span>
                </p>
                <p className="flex justify-between">
                  <span className="font-medium">Date of Birth:</span>
                  <span>24/01/20**</span>
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
                Between long nights of debugging and fleeting moments of breakthrough, code became more than a skill — it became a compass. A way to navigate not just digital spaces, but personal growth.
              </p>
              <p>
                From early days with Python to diving deep into JavaScript, PHP, and MySQL, each language opened a door — to logic, to creativity, to control in a world full of noise.
              </p>
              <p>
                Not just chasing perfect algorithms, but also chasing the feeling of building something real. In the silence of syntax, there's a kind of clarity. A place where problems can be solved — and where, sometimes, a version of peace can be compiled.
              </p>

              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
