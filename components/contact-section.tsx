import Link from "next/link"
import { Github, Linkedin } from "lucide-react"
import { forwardRef } from "react"
import { useForm, ValidationError } from "@formspree/react"

const ContactSection = forwardRef<HTMLElement>((props, ref) => {
  const [state, handleSubmit] = useForm("maqkrpqq")

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
            <div className="text-sm text-accent font-mono">DIRECT CONTACT</div>
            <div className="space-y-4">
              <Link
                href="https://github.com/amiabl-programr"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-foreground hover:text-accent transition-colors"
              >
                <Github className="w-5 h-5" />
                <span>github.com/amiabl-programr</span>
              </Link>
              <Link
                href="https://linkedin.com/in/victor-oluwayemi"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-foreground hover:text-accent transition-colors"
              >
                <Linkedin className="w-5 h-5" />
                <span>linkedin.com/in/victor-oluwayemi</span>
              </Link>
            </div>
          </div>

          <div className="space-y-6">
            <div className="text-sm text-accent font-mono">SEND A MESSAGE</div>
            {state.succeeded ? (
              <p className="text-sm text-green-600 dark:text-green-400">Thanks for reaching out. I'll get back to you soon.</p>
            ) : (
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm text-muted-foreground">Your email</label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    required
                    className="w-full px-3 py-2 text-sm bg-transparent border border-border rounded-lg focus:outline-none focus:border-accent transition-colors"
                  />
                  <ValidationError field="email" errors={state.errors} />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm text-muted-foreground">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="w-full px-3 py-2 text-sm bg-transparent border border-border rounded-lg resize-none focus:outline-none focus:border-accent transition-colors"
                  />
                  <ValidationError field="message" errors={state.errors} />
                </div>
                <button
                  type="submit"
                  disabled={state.submitting}
                  className="px-4 py-2 text-sm border border-accent/50 text-accent rounded-lg hover:bg-accent/10 transition-colors disabled:opacity-50"
                >
                  {state.submitting ? "Sending..." : "Send message"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
})

ContactSection.displayName = "ContactSection"

export default ContactSection
