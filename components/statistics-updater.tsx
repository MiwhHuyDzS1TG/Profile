"use client"

import { useEffect } from "react"

export default function StatisticsUpdater() {
  useEffect(() => {
    let visitorCountElements: NodeListOf<Element>
    let requestCountElements: NodeListOf<Element>

    const updateStatistics = async () => {
      try {
        const response = await fetch("/api/statistics")
        const stats = await response.json()

        // Update all visitor count elements
        visitorCountElements = document.querySelectorAll(".visitor-count")
        visitorCountElements.forEach((element) => {
          element.innerHTML = `<span class="counter-value">${stats.activeUsers.toLocaleString()}</span>`
        })

        // Update all request count elements
        requestCountElements = document.querySelectorAll(".request-count")
        requestCountElements.forEach((element) => {
          element.innerHTML = `<span class="counter-value">${stats.dailyRequests.toLocaleString()}</span>`
        })
      } catch (error) {
        console.error("Failed to update statistics:", error)
      }
    }

    // Initial update
    updateStatistics()

    // Set up polling for real-time updates
    const interval = setInterval(updateStatistics, 10000) // Update every 10 seconds

    return () => {
      clearInterval(interval)
    }
  }, [])

  return null
}
