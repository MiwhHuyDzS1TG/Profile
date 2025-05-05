"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Server, Users, Home, RotateCcw, Swords, ArrowRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import SectionTitle from "@/components/section-title"

type ServerFeature = {
  name: string
  icon: JSX.Element
  description: string
}

export default function MinecraftContent() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })

  const serverFeatures: ServerFeature[] = [
    {
      name: "TPA",
      icon: <Users className="h-6 w-6" />,
      description: "Teleport to other players with ease using simple commands.",
    },
    {
      name: "Sethome & Home",
      icon: <Home className="h-6 w-6" />,
      description: "Set multiple home locations and teleport back to them anytime.",
    },
    {
      name: "Back",
      icon: <RotateCcw className="h-6 w-6" />,
      description: "Return to your previous location after teleporting or dying.",
    },
    {
      name: "PVP",
      icon: <Swords className="h-6 w-6" />,
      description: "Engage in player versus player combat in designated areas.",
    },
  ]

  // Animation variants
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
    <div ref={sectionRef}>
      <SectionTitle>Minecraft Server</SectionTitle>

      <motion.div
        className="max-w-4xl mx-auto mt-8 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">
          Join our survival Minecraft server and experience a friendly community with enhanced gameplay features.
        </p>
      </motion.div>

      {/* Server Info Card */}
      <motion.div
        className="max-w-4xl mx-auto mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Card className="overflow-hidden border-none shadow-lg bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm">
          <div className="h-2 bg-gradient-to-r from-amber-500 to-yellow-300"></div>
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
              <div className="flex-shrink-0 w-24 h-24 bg-gradient-to-br from-green-500 to-emerald-700 rounded-lg flex items-center justify-center text-white">
                <Server className="h-12 w-12" />
              </div>

              <div className="flex-grow">
                <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-2">Server Details</h3>

                <div className="space-y-2 mb-4">
                  <p className="flex items-center text-slate-700 dark:text-slate-300">
                    <span className="font-semibold mr-2">Server IP:</span>
                    <code className="bg-slate-100 dark:bg-slate-700 px-2 py-1 rounded">mc.tahn.site</code>
                  </p>

                  <p className="flex items-center text-slate-700 dark:text-slate-300">
                    <span className="font-semibold mr-2">Version:</span>
                    Bedrock Edition 1.21.71
                  </p>

                  <p className="text-slate-700 dark:text-slate-300">
                    <span className="font-semibold">Compatibility:</span>
                    <span className="ml-2">Java Minecraft users can also connect!</span>
                  </p>
                </div>

                <Button className="bg-green-600 hover:bg-green-700 text-white">
                  Connect Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Server Features */}
      <div className="mt-12">
        <h3 className="text-xl font-semibold text-center text-slate-800 dark:text-slate-200 mb-8">
          Enhanced Survival Experience
        </h3>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {serverFeatures.map((feature) => (
            <motion.div key={feature.name} variants={itemVariants} className="will-change-transform">
              <Card className="h-full shadow-md hover:shadow-lg transition-all duration-300 border-none bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="p-3 rounded-full bg-gradient-to-br from-amber-500 to-yellow-300 text-white mb-4">
                    {feature.icon}
                  </div>

                  <h4 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-2">{feature.name}</h4>

                  <p className="text-slate-600 dark:text-slate-400">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Server Rules */}
      <motion.div
        className="mt-16 max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <Card className="border-none shadow-lg bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm">
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-4 text-center">Server Rules</h3>

            <ul className="space-y-2 text-slate-700 dark:text-slate-300">
              <li className="flex items-start">
                <span className="text-amber-500 mr-2">•</span>
                <span>Be respectful to all players</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-500 mr-2">•</span>
                <span>No griefing or stealing from other players</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-500 mr-2">•</span>
                <span>PVP is allowed but no spawn killing</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-500 mr-2">•</span>
                <span>Have fun and enjoy the community!</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}
