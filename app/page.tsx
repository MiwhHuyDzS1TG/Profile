import type { Metadata } from "next"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import SkillsSection from "@/components/skills-section"
import LearningSection from "@/components/learning-section"
import DetailedStatistics from "@/components/detailed-statistics"
import ContactSection from "@/components/contact-section"
import Navigation from "@/components/navigation"
import StatisticsDisplay from "@/components/statistics-display"
import StatisticsUpdater from "@/components/statistics-updater"

export const metadata: Metadata = {
  title: "Trần Minh Huy (Dẻ) - Personal Website",
  description: "Personal website of Trần Minh Huy (Dẻ), showcasing skills, interests, and more.",
}

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <Navigation />
      <HeroSection />
      <div className="container mx-auto px-4 py-8 space-y-24">
        <AboutSection />
        <SkillsSection />
        <LearningSection />
        <DetailedStatistics />
        <ContactSection />
      </div>
      <StatisticsDisplay />
      <StatisticsUpdater />
    </main>
  )
}
