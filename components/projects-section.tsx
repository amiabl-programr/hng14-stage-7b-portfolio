import Link from "next/link"
import { ExternalLink } from "lucide-react"
import { forwardRef } from "react"

const projects = [
  {
    name: "DevLinks",
    initials: "DL",
    description: "Link-sharing platform for developers to consolidate and share profile links.",
    tech: ["TypeScript", "NestJS", "PostgreSQL", "Redis"],
    contributions: [
      "Built RESTful API for link CRUD operations with drag-and-drop ordering",
      "Implemented user authentication with JWT and refresh tokens",
      "Designed database schema with optimized queries for link retrieval",
    ],
    liveUrl: "https://devlinks-demo.vercel.app",
  },
  {
    name: "TeamSync API",
    initials: "TS",
    description: "Real-time collaboration backend for team task management and notifications.",
    tech: ["Python", "Express", "Redis", "WebSocket"],
    contributions: [
      "Architected WebSocket server handling 1000+ concurrent connections",
      "Built task assignment and notification microservice",
      "Implemented Redis pub/sub for real-time event broadcasting",
    ],
    liveUrl: null,
  },
  {
    name: "E-Commerce Backend",
    initials: "EC",
    description: "Scalable API for product catalog, cart management, and order processing.",
    tech: ["TypeScript", "Express", "PostgreSQL", "Stripe"],
    contributions: [
      "Designed inventory management system with stock tracking",
      "Integrated Stripe payment processing with webhook handlers",
      "Built order fulfillment pipeline with status notifications",
    ],
    liveUrl: "https://ecom-api-docs.vercel.app",
  },
  {
    name: "Auth Service",
    initials: "AS",
    description: "Centralized authentication microservice with OAuth2 and role-based access.",
    tech: ["NestJS", "Redis", "PostgreSQL", "JWT"],
    contributions: [
      "Implemented OAuth2 flows for Google and GitHub providers",
      "Built role-based access control with granular permissions",
      "Designed session management with Redis-backed token storage",
    ],
    liveUrl: null,
  },
  {
    name: "File Upload Service",
    initials: "FU",
    description: "High-performance file upload API with image processing and CDN integration.",
    tech: ["TypeScript", "Express", "AWS S3", "Sharp"],
    contributions: [
      "Built chunked upload system for large files (up to 5GB)",
      "Implemented image resizing and format conversion pipeline",
      "Designed presigned URL system for secure direct uploads",
    ],
    liveUrl: null,
  },
  {
    name: "Analytics Dashboard API",
    initials: "AD",
    description: "Backend for tracking user events and generating aggregated metrics.",
    tech: ["Python", "Redis", "PostgreSQL", "TimescaleDB"],
    contributions: [
      "Built event ingestion endpoint handling 10K+ events/minute",
      "Designed time-series aggregation queries for dashboard metrics",
      "Implemented caching layer reducing query latency by 60%",
    ],
    liveUrl: "https://analytics-demo.vercel.app",
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
