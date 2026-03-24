export default function ContactPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="mx-auto max-w-4xl px-6 py-24">
        <p className="text-sm uppercase tracking-[0.2em] text-zinc-400">
          Contact
        </p>

        <h1 className="mt-4 text-5xl font-semibold md:text-6xl">
          Let’s build your growth system
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-zinc-400">
          Tell us about your audience, community, and goals. We’ll help you map
          the next move.
        </p>

        <form className="mt-10 space-y-5">
          <input
            type="text"
            placeholder="Your name"
            className="w-full rounded-xl border border-zinc-800 bg-black p-3"
          />
          <input
            type="email"
            placeholder="Your email"
            className="w-full rounded-xl border border-zinc-800 bg-black p-3"
          />
          <textarea
            rows={5}
            placeholder="Tell us about your project..."
            className="w-full rounded-xl border border-zinc-800 bg-black p-3"
          />
          <button className="rounded-full bg-white px-6 py-3 text-black">
            Send Request
          </button>
        </form>
      </section>
    </main>
  );
}