import { forwardRef } from "react"

const endpoints = [
  { method: "WS", path: "/ws/connect", desc: "Establish WebSocket with JWT auth" },
  { method: "POST", path: "/tasks", desc: "Create task, broadcast to assignees" },
  { method: "PATCH", path: "/tasks/:id/status", desc: "Update status, notify watchers" },
  { method: "POST", path: "/tasks/:id/comments", desc: "Add comment, push to thread subscribers" },
  { method: "GET", path: "/notifications", desc: "Fetch missed events (offline sync)" },
]

const architectureDiagram = `┌─────────────┐     ┌─────────────┐
│   Client    │────▶│   Nginx     │
│  WebSocket  │     │   (LB)      │
└─────────────┘     └──────┬──────┘
                           │
            ┌──────────────┼──────────────┐
            ▼              ▼              ▼
     ┌───────────┐  ┌───────────┐  ┌───────────┐
     │  Server   │  │  Server   │  │  Server   │
     │    A      │  │    B      │  │    C      │
     └─────┬─────┘  └─────┬─────┘  └─────┬─────┘
           │              │              │
           └──────────────┼──────────────┘
                          ▼
                   ┌─────────────┐
                   │    Redis    │
                   │   Pub/Sub   │
                   └──────┬──────┘
                          ▼
                   ┌─────────────┐
                   │  PostgreSQL │
                   └─────────────┘`

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
              TS
            </div>
            <div>
              <h3 className="text-xl font-medium">TeamSync API</h3>
              <p className="text-sm text-muted-foreground">Real-time collaboration backend</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="space-y-3">
                <div className="text-sm text-muted-foreground font-mono">PROBLEM</div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Teams needed real-time task updates without constant polling. The existing REST API created 
                  unnecessary load with clients checking for changes every few seconds. We needed sub-second 
                  delivery for task assignments, status changes, and mentions across distributed team members.
                </p>
              </div>

              <div className="space-y-3">
                <div className="text-sm text-muted-foreground font-mono">CHALLENGE</div>
                <div className="space-y-2">
                  <p className="text-sm font-medium">Scaling WebSocket connections across multiple server instances</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Single-server WebSocket worked fine in dev, but production needed horizontal scaling. 
                    Connections on Server A needed to receive events triggered on Server B. Solved with 
                    Redis pub/sub as the message broker—each server subscribes to relevant channels and 
                    broadcasts to its local connections. Added connection affinity via consistent hashing 
                    to reduce cross-server chatter for team-specific events.
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
                        endpoint.method === "WS" 
                          ? "bg-green-500/10 text-green-600 dark:text-green-400" 
                          : endpoint.method === "POST" 
                            ? "bg-blue-500/10 text-blue-600 dark:text-blue-400"
                            : endpoint.method === "PATCH"
                              ? "bg-amber-500/10 text-amber-600 dark:text-amber-400"
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
