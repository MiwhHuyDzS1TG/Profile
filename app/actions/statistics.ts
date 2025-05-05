"use server"

import { cookies } from "next/headers"

// In a real implementation, this would be stored in a database
// For demo purposes, we'll use a simple in-memory store
const visitorStats = {
  activeUsers: 0,
  dailyRequests: 0,
  visitorIds: new Set<string>(),
}

// Reset daily stats at midnight
const resetTime = new Date()
resetTime.setHours(24, 0, 0, 0)
const timeUntilReset = resetTime.getTime() - Date.now()

if (typeof setTimeout !== "undefined") {
  setTimeout(() => {
    visitorStats.dailyRequests = 0
    // Reset every 24 hours
    setInterval(
      () => {
        visitorStats.dailyRequests = 0
      },
      24 * 60 * 60 * 1000,
    )
  }, timeUntilReset)
}

export async function trackVisitor() {
  const cookieStore = cookies()
  const visitorId = cookieStore.get("visitor_id")?.value || generateVisitorId()

  // Set or update the visitor cookie if it doesn't exist
  if (!cookieStore.has("visitor_id")) {
    cookies().set("visitor_id", visitorId, {
      maxAge: 60 * 60 * 24 * 365, // 1 year
      path: "/",
      sameSite: "lax",
    })
  }

  // Track this request
  visitorStats.dailyRequests++

  // If this is a new visitor for this session, increment active users
  if (!visitorStats.visitorIds.has(visitorId)) {
    visitorStats.visitorIds.add(visitorId)
    visitorStats.activeUsers++
  }

  return {
    activeUsers: visitorStats.activeUsers,
    dailyRequests: visitorStats.dailyRequests,
  }
}

export async function getStatistics() {
  // Track the visitor and return current stats
  return trackVisitor()
}

export async function reportUserLeaving(visitorId: string) {
  if (visitorStats.visitorIds.has(visitorId)) {
    visitorStats.visitorIds.delete(visitorId)
    visitorStats.activeUsers = Math.max(0, visitorStats.activeUsers - 1)
  }

  return {
    activeUsers: visitorStats.activeUsers,
    dailyRequests: visitorStats.dailyRequests,
  }
}

function generateVisitorId() {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
}
