import { forwardRef } from "react"

const skills = [
  {
    name: "API Design",
    description: "RESTful versioned endpoints with validation pipelines, normalization rules, and rate-limited public access",
    project: "Profiles API + Open Profile",
  },
  {
    name: "Databases",
    description: "PostgreSQL with Prisma ORM, SQLite with better-sqlite3, schema design with compound indexes",
    project: "Retry Engine + Profiles API + Open Profile",
  },
  {
    name: "Rate Limiting",
    description: "Redis-backed rate limiting with graceful degradation fallback during cache outages",
    project: "Open Profile",
  },
  {
    name: "Background Jobs",
    description: "Worker-based polling loop for retry execution with configurable intervals",
    project: "Retry Engine",
  },
  {
    name: "Testing",
    description: "Jest unit tests for validators, backoff algorithms, executor logic, and end-to-end scenarios",
    project: "Retry Engine",
  },
  {
    name: "Logging",
    description: "Structured logging with Pino, request-level logging middleware, log levels per environment",
    project: "Retry Engine",
  },
  {
    name: "Queues",
    description: "Exponential backoff retry queue with jitter, lock-based scheduling, and due-request polling",
    project: "Retry Engine",
  },
  {
    name: "Documentation",
    description: "API docs with endpoint tables, error reference, natural language parsing logic, and troubleshooting guides",
    project: "Profiles API + Retry Engine",
  },
  {
    name: "Deployment",
    description: "Live API deployment on Vercel with environment configuration and CORS setup",
    project: "Profiles API",
  },
]

const SkillsSection = forwardRef<HTMLElement>((props, ref) => {
  return (
    <section
      id="skills"
      ref={ref}
      className="py-24 sm:py-32 opacity-0"
    >
      <div className="space-y-12">
        <div className="flex items-end justify-between">
          <h2 className="text-2xl sm:text-3xl font-light">Skills</h2>
          <div className="text-sm text-muted-foreground font-mono">BACKED BY PROJECTS</div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="p-4 border border-border rounded-lg"
            >
              <div className="text-sm font-medium mb-1">{skill.name}</div>
              <p className="text-xs text-muted-foreground leading-relaxed mb-2">{skill.description}</p>
              <div className="text-xs text-accent font-mono">{skill.project}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
})

SkillsSection.displayName = "SkillsSection"

export default SkillsSection