"use client"

import { useEffect, useRef, useState } from "react"
import SiteNav from "@/components/site-nav"
import ProfileSection from "@/components/profile-section"
import ProjectsSection from "@/components/projects-section"
import FeaturedSection from "@/components/featured-section"
import LearnedSection from "@/components/learned-section"
import ContactSection from "@/components/contact-section"
import SiteFooter from "@/components/site-footer"

export default function Home() {
  const [isDark, setIsDark] = useState(true)
  const [activeSection, setActiveSection] = useState("")
  const sectionsRef = useRef<(HTMLElement | null)[]>([])

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark)
  }, [isDark])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up")
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.3, rootMargin: "0px 0px -20% 0px" },
    )

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section)
    })

    return () => observer.disconnect()
  }, [])

  const toggleTheme = () => {
    setIsDark(!isDark)
  }

  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <SiteNav activeSection={activeSection} />

      <main className="max-w-3xl mx-auto px-6 sm:px-8 lg:px-12">
        <ProfileSection ref={(el) => (sectionsRef.current[0] = el)} />
        <FeaturedSection ref={(el) => (sectionsRef.current[1] = el)} />
        <ProjectsSection ref={(el) => (sectionsRef.current[2] = el)} />
        <LearnedSection ref={(el) => (sectionsRef.current[3] = el)} />
        <ContactSection ref={(el) => (sectionsRef.current[4] = el)} />
        <SiteFooter isDark={isDark} toggleTheme={toggleTheme} />
      </main>

      <div className="fixed bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background via-background/80 to-transparent pointer-events-none"></div>
    </div>
  )
}
