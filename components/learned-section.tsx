import { forwardRef } from "react"

const insights = [
  {
    title: "Production Debugging",
    text: "When a service fails at 2 AM with users waiting, you learn to read logs faster, write better error messages, and instrument everything that matters.",
  },
  {
    title: "API Design First",
    text: "Sketching endpoints and thinking through edge cases before writing code leads to cleaner contracts and fewer PR debates about response formats.",
  },
  {
    title: "Async by Default",
    text: "Working with retry queues and background jobs changed how I decouple services — I now reach for async processing instead of blocking on every request.",
  },
  {
    title: "Tests as Design",
    text: "Writing tests forces you to think through what the code should actually do. It's not an afterthought — it shapes the architecture from the start.",
  },
]

const LearnedSection = forwardRef<HTMLElement>((props, ref) => {
  return (
    <section
      id="learned"
      ref={ref}
      className="py-24 sm:py-32 opacity-0"
    >
      <div className="space-y-12">
        <div className="flex items-end justify-between">
          <h2 className="text-2xl sm:text-3xl font-light">What I Learned</h2>
          <div className="text-sm text-accent font-mono">REFLECTION</div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {insights.map((item) => (
            <div
              key={item.title}
              className="p-5 border border-border rounded-lg space-y-2"
            >
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                <h3 className="text-sm font-medium">{item.title}</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed pl-4">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
})

LearnedSection.displayName = "LearnedSection"

export default LearnedSection
