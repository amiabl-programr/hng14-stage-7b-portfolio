import { forwardRef } from "react"

const LearnedSection = forwardRef<HTMLElement>((props, ref) => {
  return (
    <section
      id="learned"
      ref={ref}
      className="py-24 sm:py-32 opacity-0"
    >
      <div className="space-y-8">
        <h2 className="text-2xl sm:text-3xl font-light">What I Learned</h2>

        <div className="max-w-[60ch]">
          <p className="text-muted-foreground leading-[1.75]">
            HNG taught me that production debugging is a different skill than writing code. When a webhook 
            starts failing at 2 AM with 500 users waiting, you learn to read logs faster, write better error 
            messages, and instrument everything that matters. I got comfortable designing APIs before writing 
            them—sketching endpoints, thinking through edge cases, arguing about response formats in PRs. 
            Working with Redis queues changed how I think about decoupling services; now I reach for async 
            processing by default instead of blocking requests. The biggest shift was learning to write tests 
            not as an afterthought but as a way to think through what the code should actually do.
          </p>
        </div>
      </div>
    </section>
  )
})

LearnedSection.displayName = "LearnedSection"

export default LearnedSection
