import type { Metadata } from "next"
import MinecraftContent from "@/components/minecraft-content"

export const metadata: Metadata = {
  title: "Minecraft Server - Tahn",
  description: "Information about Tahn's Minecraft server, features, and how to connect.",
}

export default function MinecraftPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 pt-20">
      <div className="container mx-auto px-4 py-8">
        <MinecraftContent />
      </div>
    </main>
  )
}
