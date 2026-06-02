import { forwardRef } from "react"

const endpoints = [
  { method: "POST", path: "/request", desc: "Submit a new request for retry processing" },
  { method: "GET", path: "/requests/:id", desc: "Retrieve request with full attempt history" },
  { method: "GET", path: "/requests", desc: "List all requests, optionally filtered by status" },
]

const architectureDiagram = `┌──────────┐     ┌─────────────┐
│  Client  │────▶│  Express    │
│  (curl)  │     │   App       │
└──────────┘     └──────┬──────┘
                        │
              ┌─────────▼─────────┐
              │   Controller      │
              │   (validation)    │
              └─────────┬─────────┘
                        │
              ┌─────────▼─────────┐
              │    Service        │
              │  (business logic) │
              └─────────┬─────────┘
                        │
              ┌─────────▼─────────┐
              │     SQLite        │
              │  requests +       │
              │  attempts tables  │
              └─────────┬─────────┘
                        │
              ┌─────────▼─────────┐
              │  Worker (500ms)   │
              │  polls due →      │
              │  execute via Axios│
              └───────────────────┘`

const FeaturedSection = forwardRef<HTMLElement>((props, ref) => {
  return (
    <section
      id="featured"
      ref={ref}
      className="py-24 sm:py-32 opacity-0"
    >
      <div className="space-y-12">
        <div className="flex items-end justify-between">
          <h2 className="text-2xl sm:text-3xl font-light">Featured Project</h2>
          <div className="text-sm text-muted-foreground font-mono">DEEP DIVE</div>
        </div>

        <div className="space-y-10">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-muted rounded-lg flex items-center justify-center text-lg font-medium text-muted-foreground">
              RE
            </div>
            <div>
              <h3 className="text-xl font-medium">Retry Engine</h3>
              <p className="text-sm text-muted-foreground">Resilient HTTP request retry engine</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="space-y-3">
                <div className="text-sm text-muted-foreground font-mono">PROBLEM</div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  External API calls fail unpredictably — timeouts, 5xx errors, transient network blips. 
                  A naive caller either gives up too early or spins in a tight loop burning resources. 
                  Needed a resilient system that automatically retries failed requests with sane backoff, 
                  tracks every attempt with full visibility, and surfaces failures when they're truly terminal.
                </p>
              </div>

              <div className="space-y-3">
                <div className="text-sm text-muted-foreground font-mono">CHALLENGE</div>
                <div className="space-y-2">
                  <p className="text-sm font-medium">Preventing double-execution in a polling worker</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    The worker polls every 500ms for due requests. If a request execution takes longer 
                    than the poll interval, the same request could be picked up twice. Solved with a 
                    lock mechanism — before executing, the request's nextRetryAt is set 30s into the 
                    future (LOCK_DURATION), removing it from the due set. The lock is released when 
                    execution finishes and the next retry is scheduled with the real computed delay.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="space-y-3">
                <div className="text-sm text-muted-foreground font-mono">ARCHITECTURE</div>
                <div className="bg-muted/50 border border-border rounded-lg p-4 font-mono text-xs text-muted-foreground">
                  <pre className="overflow-x-auto">{architectureDiagram}</pre>
                </div>
              </div>

              <div className="space-y-3">
                <div className="text-sm text-muted-foreground font-mono">KEY ENDPOINTS</div>
                <div className="space-y-2">
                  {endpoints.map((endpoint, i) => (
                    <div key={i} className="flex items-start gap-3 text-sm">
                      <code className={`px-1.5 py-0.5 rounded text-xs font-mono shrink-0 ${
                        endpoint.method === "POST" 
                          ? "bg-blue-500/10 text-blue-600 dark:text-blue-400"
                          : "bg-muted text-muted-foreground"
                      }`}>
                        {endpoint.method}
                      </code>
                      <div className="min-w-0">
                        <code className="text-xs font-mono text-foreground">{endpoint.path}</code>
                        <p className="text-xs text-muted-foreground mt-0.5">{endpoint.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
})

FeaturedSection.displayName = "FeaturedSection"

export default FeaturedSection
