# v0.dev Prompts — HNG Portfolio Revamp

Paste these sequentially into v0.dev to transform an existing template into a clean backend portfolio.

---

## Prompt 1 — Layout & Profile Section

```
I have an existing portfolio template. Revamp it with a clean, readable layout for a backend engineer portfolio. The design should be straight-to-the-point — no flashy animations, no buzzwords.

Create a Profile section with:
- Name
- Role/Title (e.g. "Backend Engineer")
- Short bio (2-3 sentences max, focused on backend skills)
- Location or timezone
- Contact details (email, GitHub, LinkedIn, Twitter)

Use a clean sidebar or top-card layout. Font: system-ui or Inter. Colors: neutral dark/light mode friendly. Keep it professional and minimal.
```

---

## Prompt 2 — HNG Projects List

```
Add a section titled "Projects" that lists every significant project from the HNG internship. Each project card must show:

- Project name
- Short description (1-2 lines)
- Tech stack (tags/chips)
- What I personally built (2-3 bullet points)
- Proof: screenshot thumbnail, demo note, or deployment link if available

Layout: responsive grid of cards. If a screenshot exists, show a small thumbnail; if not, show a placeholder with the project initials. Keep text concise — no filler.
```

---

## Prompt 3 — Backend Skills Section

```
Add a "Skills" section showing backend skills with project references. Each skill must link back to a specific project where it was used.

Skills list (only include those with project evidence):
- API Design & RESTful APIs
- Authentication & Authorization
- Databases (SQL / NoSQL)
- Background Jobs & Queues
- Testing & Debugging
- Logging & Monitoring
- Deployment & DevOps
- Caching
- Documentation

Display as a grid of skill items. Each item shows the skill name and the project(s) that demonstrate it. If a skill has no project backing, leave it out entirely.
```

---

## Prompt 4 — Featured Project Deep Dive

```
Add a "Featured Project" section for a deep dive into one project. Structure it as:

- **Problem**: What problem did this project solve? (2-3 sentences)
- **Architecture**: Describe the request flow or system architecture. Include a simple architecture diagram placeholder (can be ASCII or a clean SVG box flow).
- **Key Endpoints / Modules**: List the main API endpoints or modules with brief descriptions.
- **Challenge**: One specific technical challenge faced and how I solved it.

Use a clean, readable layout — maybe a two-column or stacked section. Keep language precise and technical.
```

---

## Prompt 5 — Learning Reflection

```
Add a "What I Learned" section. This is a short, honest reflection on my growth during the HNG internship as a backend developer.

Style: paragraph form, 3-5 sentences. Specific and genuine — no generic claims. Example topics: debugging under pressure, designing better APIs, working with queues, writing tests, etc.

Keep typography readable (good line-height, max width ~60ch).
```

---

## Prompt 6 — Contact & Footer

```
Add a "Contact" section (if not already present in the profile) and a simple footer.

Contact should include: email, GitHub, LinkedIn, and optionally a contact form. Make it easy to reach me — all links should open in new tabs.

Footer: "Built during HNG Internship" with a link to HNG. Keep it minimal.
```

---

## Prompt 7 — Polish & Navigation

```
Tie everything together:
- Smooth scroll navigation (anchor links to each section)
- Sticky nav bar or sidebar with section links
- Light/dark mode toggle (optional but nice)
- Mobile responsive (cards stack, text reflows)
- 3-5 minute readability — no long paragraphs, use bullet points and short blocks
- If the layout uses a template, remove any placeholder/dummy content and keep only the real project data

The reviewer should open the page, scan it quickly, and immediately understand what I can build.
```
