const demos = [
  {
    title: "Demo Project — Restaurant Website",
    category: "Business Website",
    description:
      "Created to demonstrate a modern online restaurant experience with interactive menus, reservation system, and visual storytelling.",
  },
  {
    title: "Demo Project — Fitness Club Website",
    category: "Landing Page",
    description:
      "Created to showcase memberships, schedules, and lead generation for a modern fitness brand.",
  },
  {
    title: "Demo Project — Dental Clinic Website",
    category: "Healthcare Website",
    description:
      "Created to demonstrate appointment booking, professional healthcare branding, and patient education.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-surface py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold tracking-widest text-primary uppercase">
            Sample Projects
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Featured Work
          </h2>
          <p className="mt-4 text-lg text-muted">
            Demo projects showcasing the quality and range of websites I build.
            Replaceable with actual client work as it becomes available.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {demos.map((demo) => (
            <div
              key={demo.title}
              className="flex flex-col rounded-2xl border border-border bg-card p-8 transition-all hover:shadow-lg"
            >
              <span className="inline-block self-start rounded-full bg-primary-light px-3 py-1 text-xs font-semibold text-primary">
                {demo.category}
              </span>
              <h3 className="mt-4 text-lg font-semibold text-foreground">
                {demo.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                {demo.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
