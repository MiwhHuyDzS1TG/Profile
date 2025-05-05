"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { ArrowDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import Avatar from "@/components/avatar"

export default function HeroSection() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10 dark:from-purple-500/20 dark:to-blue-500/20"
        style={{
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      />

      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <Avatar />
          </motion.div>

          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400 mb-4"
          >
            Trần Minh Huy
          </motion.h1>

          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-xl md:text-2xl text-slate-700 dark:text-slate-300 mb-8"
          >
            (Dẻ)
          </motion.h2>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="max-w-2xl text-slate-600 dark:text-slate-400 text-lg md:text-xl mb-12"
          >
            The kind of mind that digs deep into tools, breaks things just to rebuild them better. 
            What starts as curiosity often becomes something others wish they had imagined. Not just coding — but crafting, experimenting, and quietly turning wild ideas into working realities.
          </motion.p>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            <Button
              variant="outline"
              size="lg"
              className="rounded-full border-purple-500 text-purple-600 hover:text-purple-700 hover:bg-purple-100 dark:border-purple-400 dark:text-purple-400 dark:hover:bg-purple-950/50"
              onClick={() => {
                document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
              }}
            >
              Learn more about me <ArrowDown className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </div>
      </div>

      <div
        className="absolute bottom-8 left-0 right-0 flex justify-center animate-bounce"
        style={{
          opacity: Math.max(0, 1 - scrollY / 300),
        }}
      >
        <ArrowDown className="h-8 w-8 text-slate-600 dark:text-slate-400" />
      </div>
    </section>
  )
}
