"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  const isHomePage = pathname === "/"

  const navItems = [
    { id: "home", label: "Home", path: "/" },
    { id: "about", label: "About", path: "/#about" },
    { id: "skills", label: "Skills", path: "/#skills" },
    { id: "learning", label: "Learning", path: "/#learning" },
    { id: "statistics", label: "Statistics", path: "/#statistics" },
    { id: "contact", label: "Contact", path: "/#contact" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      // Set scrolled state for styling
      setScrolled(window.scrollY > 50)

      // Only track sections on home page
      if (isHomePage) {
        // Determine active section based on scroll position
        const sections = ["home", "about", "skills", "learning", "statistics", "contact"]
          .map((id) => document.getElementById(id))
          .filter(Boolean)

        for (let i = sections.length - 1; i >= 0; i--) {
          const section = sections[i]
          if (section) {
            const rect = section.getBoundingClientRect()
            if (rect.top <= 150) {
              setActiveSection(section.id)
              break
            }
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [isHomePage])

  // Set active section based on current path
  useEffect(() => {
    if (pathname === "/") {
      setActiveSection("home")
    } else if (pathname === "/minecraft") {
      setActiveSection("minecraft")
    }
  }, [pathname])

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled ? "py-2 bg-white/80 dark:bg-slate-900/80 shadow-md backdrop-blur-md" : "py-4"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/">
          <motion.div className="text-xl font-bold text-slate-800 dark:text-slate-200" whileHover={{ scale: 1.05 }}>
            Minh Huy
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-1">
          {navItems.map((item) => (
            <Link
              key={item.id}
              href={item.path}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                activeSection === item.id
                  ? "text-amber-600 dark:text-amber-400"
                  : "text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-slate-100"
              }`}
              onClick={(e) => {
                // Only handle scroll behavior for hash links on the home page
                if (item.path.includes("#") && isHomePage) {
                  e.preventDefault()
                  const targetId = item.path.split("#")[1]
                  document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth" })
                }
              }}
            >
              {item.label}
              {activeSection === item.id && (
                <motion.div
                  layoutId="activeIndicator"
                  className="h-0.5 bg-gradient-to-r from-amber-500 to-yellow-300 mt-0.5"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-slate-800 dark:text-slate-200 focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div
          className="md:hidden bg-white dark:bg-slate-900 shadow-lg absolute top-full left-0 right-0"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="container mx-auto px-4 py-2">
            {navItems.map((item) => (
              <Link
                key={item.id}
                href={item.path}
                className={`block py-2 px-4 text-sm ${
                  activeSection === item.id
                    ? "text-amber-600 dark:text-amber-400 font-medium"
                    : "text-slate-600 dark:text-slate-300"
                }`}
                onClick={(e) => {
                  // Only handle scroll behavior for hash links on the home page
                  if (item.path.includes("#") && isHomePage) {
                    e.preventDefault()
                    const targetId = item.path.split("#")[1]
                    document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth" })
                  }
                  setIsOpen(false)
                }}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  )
}
