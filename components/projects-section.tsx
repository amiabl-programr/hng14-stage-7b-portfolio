import Link from "next/link"
import { ExternalLink } from "lucide-react"
import { forwardRef } from "react"

const projects = [
  {
    name: "Retry Engine",
    initials: "RE",
    description: "Resilient HTTP request retry engine with exponential backoff, attempt tracking, and SQLite persistence.",
    tech: ["TypeScript", "Express", "SQLite", "Zod", "Axios"],
    contributions: [
      "Built request lifecycle management with full status transition state machine",
      "Implemented exponential backoff with jitter for retry scheduling",
      "Designed SQLite schema with compound indexes for efficient due-request polling",
      "Built worker-based polling loop with lock mechanism to prevent double-execution",
    ],
    liveUrl: "https://github.com/amiabl-programr/hng14-stage-8a-retry-engine",
  },
  {
    name: "Portfolio Website",
    initials: "PW",
    description: "Minimalist backend portfolio built with Next.js, featuring project showcase and skills mapping.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui"],
    contributions: [
      "Designed clean, readable layout optimized for 3-5 minute reviewer scans",
      "Built component-based architecture with intersection observer animations",
      "Integrated dark/light theme toggle with system preference detection",
    ],
    liveUrl: null,
  },
  {
    name: "Profiles API",
    initials: "PA",
    description: "Intelligence query engine with rule-based natural language parsing, filtering, and pagination over 2000+ demographic profiles.",
    tech: ["TypeScript", "Express", "PostgreSQL", "Prisma", "UUID v7"],
    contributions: [
      "Built rule-based NLP parser that translates plain English queries (e.g. 'young males from nigeria') into structured filters",
      "Designed PostgreSQL schema with Prisma ORM supporting combined filter, sort, and pagination queries",
      "Implemented idempotent database seeding for 2026 profiles with UUID v7 primary keys",
      "Deployed live API endpoint with CORS, comprehensive error handling, and full README documentation",
    ],
    liveUrl: "https://hng14-stage-2-task-intelligence-que.vercel.app",
  },
]

const ProjectsSection = forwardRef<HTMLElement>((props, ref) => {
  return (
    <section
      id="projects"
      ref={ref}
      className="py-24 sm:py-32 opacity-0"
    >
      <div className="space-y-12">
        <div className="flex items-end justify-between">
          <h2 className="text-2xl sm:text-3xl font-light">Projects</h2>
          <div className="text-sm text-muted-foreground font-mono">HNG INTERNSHIP</div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group p-6 border border-border rounded-lg hover:border-muted-foreground/50 transition-colors"
            >
              <div className="flex gap-4">
                <div className="w-12 h-12 shrink-0 bg-muted rounded-lg flex items-center justify-center text-sm font-medium text-muted-foreground">
                  {project.initials}
                </div>
                <div className="space-y-3 flex-1 min-w-0">
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-base font-medium">{project.name}</h3>
                      {project.liveUrl && (
                        <Link
                          href={project.liveUrl}
                          className="text-muted-foreground hover:text-foreground transition-colors"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                        </Link>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">{project.description}</p>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 text-xs border border-border rounded-full text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="space-y-1.5 pt-2">
                    <div className="text-xs text-muted-foreground font-mono">BUILT</div>
                    <ul className="space-y-1">
                      {project.contributions.map((item, i) => (
                        <li key={i} className="text-xs text-muted-foreground leading-relaxed flex gap-2">
                          <span className="text-border">-</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
})

ProjectsSection.displayName = "ProjectsSection"

export default ProjectsSection
