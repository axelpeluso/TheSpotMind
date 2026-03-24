export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex items-center">
      <div className="max-w-5xl mx-auto px-6 py-24">
        <h1 className="text-6xl font-semibold leading-tight">
          Turn your audience into a scalable revenue community.
        </h1>

        <p className="mt-6 text-lg text-zinc-400 max-w-2xl">
          We help creators grow, engage, and monetize their communities using
          proven systems and AI automation.
        </p>

        <div className="mt-10 flex gap-4">
          <a href="/contact" className="bg-white text-black px-6 py-3 rounded-full">
            Book a Call
          </a>
          <a href="/solutions" className="border border-zinc-700 px-6 py-3 rounded-full">
            Explore Solutions
          </a>
        </div>
      </div>
    </main>
  );
}