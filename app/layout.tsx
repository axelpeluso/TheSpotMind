import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "TheSpotMind",
  description:
    "We help creators grow, engage, and monetize their communities with systems and AI automation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-black text-white antialiased">
        <header className="sticky top-0 z-50 border-b border-zinc-900 bg-black/80 backdrop-blur">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
            <Link href="/" className="text-xl font-semibold tracking-tight">
              TheSpotMind
            </Link>

            <nav className="hidden items-center gap-6 text-sm text-zinc-300 md:flex">
              <Link href="/" className="transition hover:text-white">
                Home
              </Link>
              <Link href="/solutions" className="transition hover:text-white">
                Solutions
              </Link>
              <Link href="/contact" className="transition hover:text-white">
                Contact
              </Link>
            </nav>

            <Link
              href="/contact"
              className="rounded-full bg-white px-4 py-2 text-sm font-medium text-black transition hover:opacity-90"
            >
              Book a Call
            </Link>
          </div>
        </header>

        {children}
      </body>
    </html>
  );
}