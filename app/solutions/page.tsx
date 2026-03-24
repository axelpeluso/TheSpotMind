export default function SolutionsPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="mx-auto max-w-6xl px-6 py-24">
        <p className="text-sm uppercase tracking-[0.2em] text-zinc-400">
          Solutions
        </p>

        <h1 className="mt-4 text-5xl font-semibold md:text-6xl">
          Growth systems for creators
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-zinc-400">
          We design systems that turn your audience into an engaged,
          monetizable community powered by strategy and automation.
        </p>
      </section>

      <section className="mx-auto grid max-w-6xl gap-6 px-6 pb-24 md:grid-cols-3">
        <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6">
          <h2 className="text-xl font-semibold">Community Growth</h2>
          <p className="mt-3 text-zinc-400">
            Engagement systems, retention loops, and structured communities.
          </p>
        </div>

        <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6">
          <h2 className="text-xl font-semibold">Monetization</h2>
          <p className="mt-3 text-zinc-400">
            Funnels, paid communities, and conversion-driven systems.
          </p>
        </div>

        <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6">
          <h2 className="text-xl font-semibold">AI Automation</h2>
          <p className="mt-3 text-zinc-400">
            Automated onboarding, DMs, and scalable workflows.
          </p>
        </div>
      </section>
    </main>
  );
}