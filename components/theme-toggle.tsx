"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import { motion, AnimatePresence } from "framer-motion"
import { Sun, Moon, Laptop } from "lucide-react"

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const toggleMenu = () => setIsOpen(!isOpen)
  const closeMenu = () => setIsOpen(false)

  const currentIcon =
    theme === "light" ? (
      <Sun className="h-5 w-5" />
    ) : theme === "dark" ? (
      <Moon className="h-5 w-5" />
    ) : (
      <Laptop className="h-5 w-5" />
    )

  return (
    <div className="fixed top-4 right-4 z-50">
      <motion.button
        onClick={toggleMenu}
        className="flex items-center justify-center w-10 h-10 rounded-full bg-white/90 dark:bg-slate-800/90 shadow-lg backdrop-blur-md text-slate-700 dark:text-slate-200 hover:bg-white dark:hover:bg-slate-700 transition-colors"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Toggle theme"
      >
        {currentIcon}
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop for closing the menu when clicking outside */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40"
              onClick={closeMenu}
            />

            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute top-12 right-0 p-2 bg-white dark:bg-slate-800 rounded-lg shadow-xl z-50 min-w-[180px] backdrop-blur-md border border-slate-200 dark:border-slate-700"
            >
              <div className="space-y-1">
                <ThemeOption
                  label="Light"
                  icon={<Sun className="h-4 w-4" />}
                  onClick={() => {
                    setTheme("light")
                    closeMenu()
                  }}
                  active={theme === "light"}
                />
                <ThemeOption
                  label="Dark"
                  icon={<Moon className="h-4 w-4" />}
                  onClick={() => {
                    setTheme("dark")
                    closeMenu()
                  }}
                  active={theme === "dark"}
                />
                <ThemeOption
                  label="System"
                  icon={<Laptop className="h-4 w-4" />}
                  onClick={() => {
                    setTheme("system")
                    closeMenu()
                  }}
                  active={theme === "system"}
                />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}

interface ThemeOptionProps {
  label: string
  icon: React.ReactNode
  onClick: () => void
  active: boolean
}

function ThemeOption({ label, icon, onClick, active }: ThemeOptionProps) {
  return (
    <motion.button
      className={`flex items-center w-full px-3 py-2 rounded-md text-sm ${
        active
          ? "bg-gradient-to-r from-purple-500/20 to-blue-500/20 text-purple-600 dark:text-purple-400"
          : "hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300"
      }`}
      onClick={onClick}
      whileHover={{ x: 5 }}
      whileTap={{ scale: 0.98 }}
    >
      <span className="mr-2">{icon}</span>
      {label}
      {active && (
        <motion.div
          layoutId="activeIndicator"
          className="ml-auto h-2 w-2 rounded-full bg-gradient-to-r from-purple-600 to-blue-600"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
        />
      )}
    </motion.button>
  )
}
