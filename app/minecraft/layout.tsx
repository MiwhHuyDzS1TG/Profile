import type React from "react"
import Navigation from "@/components/navigation"
import StatisticsDisplay from "@/components/statistics-display"
import StatisticsUpdater from "@/components/statistics-updater"

export default function MinecraftLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <Navigation />
      {children}
      <StatisticsDisplay />
      <StatisticsUpdater />
    </>
  )
}
