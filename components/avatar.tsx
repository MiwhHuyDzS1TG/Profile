"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { motion, useAnimation } from "framer-motion"
import Image from "next/image"

export default function Avatar() {
  const [isHovered, setIsHovered] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)
  const controls = useAnimation()

  // Pulse animation for the border
  useEffect(() => {
    controls.start({
      scale: [1, 1.02, 1],
      opacity: [0.7, 1, 0.7],
      transition: {
        duration: 3,
        ease: "easeInOut",
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "reverse",
      },
    })
  }, [controls])

  return (
    <motion.div
      className="relative"
      whileHover={{ scale: 1.03 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Outer glow effect */}
      <motion.div
        className="absolute -inset-3 rounded-full bg-gradient-to-r from-purple-500/30 to-indigo-500/30 blur-md z-0"
        animate={controls}
      />

      {/* Inner border with animated gradient */}
      <div className="absolute -inset-1.5 rounded-full purple-gradient-border z-0"></div>

      {/* Main container */}
      <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-2 border-white/20 dark:border-slate-800/20 shadow-xl z-10">
        <Image
          src="https://i.imgur.com/AVAg3mf.jpeg"
          alt="Avatar"
          fill
          className="object-cover"
          priority
          onLoad={() => setIsLoaded(true)}
        />

        {/* Overlay effect on hover */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-tr from-purple-600/40 to-indigo-600/40"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />

        {/* Animated particles effect */}
        {isLoaded && (
          <div className="absolute inset-0 overflow-hidden">
            <div className="particles-container">
              {[...Array(15)].map((_, i) => (
                <div
                  key={i}
                  className="particle"
                  style={
                    {
                      "--x": `${Math.random() * 100}%`,
                      "--y": `${Math.random() * 100}%`,
                      "--duration": `${3 + Math.random() * 5}s`,
                      "--delay": `${Math.random() * 2}s`,
                      "--size": `${3 + Math.random() * 4}px`,
                      "--opacity": `${0.1 + Math.random() * 0.3}`,
                    } as React.CSSProperties
                  }
                ></div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Subtle reflection effect */}
      <motion.div
        className="absolute -bottom-4 -inset-x-4 h-12 bg-white/10 dark:bg-white/5 blur-md rounded-full"
        animate={{
          opacity: isHovered ? 0.7 : 0.3,
        }}
        transition={{ duration: 0.3 }}
      />

      {/* Animated corner accents */}
      <div className="corner-accent top-0 right-0"></div>
      <div className="corner-accent top-0 left-0" style={{ transform: "scaleX(-1)" }}></div>
      <div className="corner-accent bottom-0 right-0" style={{ transform: "scaleY(-1)" }}></div>
      <div className="corner-accent bottom-0 left-0" style={{ transform: "scale(-1)" }}></div>
    </motion.div>
  )
}
