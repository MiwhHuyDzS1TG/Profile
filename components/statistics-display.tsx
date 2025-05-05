"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Users, BarChart2 } from "lucide-react"
import { getStatistics } from "@/app/actions/statistics"
import { Card, CardContent } from "@/components/ui/card"
import Cookies from "js-cookie"

type Statistics = {
  activeUsers: number
  dailyRequests: number
}

export default function StatisticsDisplay() {
  const [stats, setStats] = useState<Statistics>({ activeUsers: 0, dailyRequests: 0 })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Initial fetch of statistics
    const fetchStats = async () => {
      try {
        const initialStats = await getStatistics()
        setStats(initialStats)
        setLoading(false)
      } catch (error) {
        console.error("Failed to fetch statistics:", error)
        setLoading(false)
      }
    }

    fetchStats()

    // Set up polling for real-time updates
    const interval = setInterval(async () => {
      try {
        const response = await fetch("/api/statistics")
        const updatedStats = await response.json()
        setStats(updatedStats)
      } catch (error) {
        console.error("Failed to update statistics:", error)
      }
    }, 10000) // Update every 10 seconds

    // Report when user leaves the page
    const handleBeforeUnload = () => {
      const visitorId = Cookies.get("visitor_id")
      if (visitorId) {
        // Use sendBeacon for more reliable delivery when page is unloading
        navigator.sendBeacon(
          "/api/statistics",
          JSON.stringify({
            action: "leave",
            visitorId,
          }),
        )
      }
    }

    window.addEventListener("beforeunload", handleBeforeUnload)

    return () => {
      clearInterval(interval)
      window.removeEventListener("beforeunload", handleBeforeUnload)
    }
  }, [])

  return (
    <div className="fixed bottom-4 right-4 z-30">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <Card className="overflow-hidden border-none shadow-lg bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm">
          <CardContent className="p-4">
            <div className="flex flex-col space-y-2">
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-amber-500 to-yellow-300 flex items-center justify-center text-white mr-3">
                  <Users className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Active Visitors</p>
                  {loading ? (
                    <div className="h-5 w-16 bg-slate-200 dark:bg-slate-700 animate-pulse rounded"></div>
                  ) : (
                    <p className="font-semibold text-slate-800 dark:text-slate-200">
                      {stats.activeUsers.toLocaleString()}
                    </p>
                  )}
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center text-white mr-3">
                  <BarChart2 className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Daily Requests</p>
                  {loading ? (
                    <div className="h-5 w-16 bg-slate-200 dark:bg-slate-700 animate-pulse rounded"></div>
                  ) : (
                    <p className="font-semibold text-slate-800 dark:text-slate-200">
                      {stats.dailyRequests.toLocaleString()}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}
