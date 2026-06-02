import Link from "next/link"
import { Mail, Github, Linkedin, Twitter, MapPin } from "lucide-react"
import { forwardRef } from "react"

const ProfileSection = forwardRef<HTMLElement>((props, ref) => {
  return (
    <header
      id="profile"
      ref={ref}
      className="min-h-screen flex items-center opacity-0"
    >
      <div className="w-full space-y-8">
        <div className="space-y-4">
          <div className="text-sm text-muted-foreground font-mono tracking-wider">BACKEND ENGINEER</div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight">
            Alex Chen
          </h1>
        </div>

        <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
          I build reliable backend systems and APIs. Focused on distributed systems, database optimization, and writing code that scales without drama.
        </p>

        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            Open to work
          </div>
          <span className="text-border">|</span>
          <span className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5" />
            GMT+1 / Lagos
          </span>
        </div>

        <div className="pt-4 space-y-3">
          <div className="text-sm text-muted-foreground font-mono">CONTACT</div>
          <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm">
            <Link 
              href="mailto:alex@example.com" 
              className="flex items-center gap-2 text-foreground hover:text-muted-foreground transition-colors"
            >
              <Mail className="w-4 h-4" />
              alex@example.com
            </Link>
            <Link 
              href="https://github.com/alexchen" 
              className="flex items-center gap-2 text-foreground hover:text-muted-foreground transition-colors"
            >
              <Github className="w-4 h-4" />
              alexchen
            </Link>
            <Link 
              href="https://linkedin.com/in/alexchen" 
              className="flex items-center gap-2 text-foreground hover:text-muted-foreground transition-colors"
            >
              <Linkedin className="w-4 h-4" />
              alexchen
            </Link>
            <Link 
              href="https://twitter.com/alexchen" 
              className="flex items-center gap-2 text-foreground hover:text-muted-foreground transition-colors"
            >
              <Twitter className="w-4 h-4" />
              @alexchen
            </Link>
          </div>
        </div>

        <div className="pt-4 space-y-3">
          <div className="text-sm text-muted-foreground font-mono">STACK</div>
          <div className="flex flex-wrap gap-2">
            {["JavaScript", "TypeScript", "Python", "Express", "NestJS", "Redis"].map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 text-xs border border-border rounded-full"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </header>
  )
})

ProfileSection.displayName = "ProfileSection"

export default ProfileSection
