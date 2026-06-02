import Link from "next/link"
import { Github, Linkedin } from "lucide-react"
import { forwardRef } from "react"

const ContactSection = forwardRef<HTMLElement>((props, ref) => {
  return (
    <section 
      id="contact" 
      ref={ref}
      className="py-24 sm:py-32 opacity-0"
    >
      <div className="space-y-8">
        <h2 className="text-2xl sm:text-3xl font-light">Get in Touch</h2>

        <p className="text-muted-foreground leading-relaxed max-w-lg">
          Open to backend engineering roles and consulting on distributed systems, API design, and database architecture.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="text-sm text-muted-foreground font-mono">DIRECT CONTACT</div>
            <div className="space-y-4">
              <Link
                href="https://github.com/amiabl-programr"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-foreground hover:text-muted-foreground transition-colors"
              >
                <Github className="w-5 h-5" />
                <span>github.com/amiabl-programr</span>
              </Link>
              <Link
                href="https://linkedin.com/in/victor-oluwayemi"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-foreground hover:text-muted-foreground transition-colors"
              >
                <Linkedin className="w-5 h-5" />
                <span>linkedin.com/in/victor-oluwayemi</span>
              </Link>
            </div>
          </div>

          <div className="space-y-6">
            <div className="text-sm text-muted-foreground font-mono">SEND A MESSAGE</div>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm text-muted-foreground">Your email</label>
                <input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  className="w-full px-3 py-2 text-sm bg-transparent border border-border rounded-lg focus:outline-none focus:border-muted-foreground transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm text-muted-foreground">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="What can I help you with?"
                  className="w-full px-3 py-2 text-sm bg-transparent border border-border rounded-lg resize-none focus:outline-none focus:border-muted-foreground transition-colors"
                />
              </div>
              <button
                type="submit"
                className="px-4 py-2 text-sm border border-border rounded-lg hover:border-muted-foreground/50 transition-colors"
              >
                Send message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
})

ContactSection.displayName = "ContactSection"

export default ContactSection
