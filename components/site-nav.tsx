interface SiteNavProps {
  activeSection: string
}

const sections = ["profile", "featured", "skills", "projects", "learned", "contact"]

export default function SiteNav({ activeSection }: SiteNavProps) {
  return (
    <nav className="fixed left-8 top-1/2 -translate-y-1/2 z-10 hidden lg:block">
      <div className="flex flex-col gap-4">
        {sections.map((section) => (
          <button
            key={section}
            onClick={() => document.getElementById(section)?.scrollIntoView({ behavior: "smooth" })}
            className={`w-2 h-8 rounded-full transition-all duration-500 ${
              activeSection === section ? "bg-foreground" : "bg-muted-foreground/30 hover:bg-muted-foreground/60"
            }`}
            aria-label={`Navigate to ${section}`}
          />
        ))}
      </div>
    </nav>
  )
}
