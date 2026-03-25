import "./globals.css";
import Link from "next/link";
import Image from "next/image";
import Footer from "./components/Footer";

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
        <header className="sticky top-0 z-50 border-b border-white/5 bg-black/70 backdrop-blur-xl">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/logo-icon.png"
                alt="TheSpotMind icon"
                width={32}
                height={32}
                className="h-8 w-8 object-contain"
                priority
              />
              <span className="text-xl font-semibold tracking-tight">
                TheSpot<span className="text-blue-400">Mind</span>
              </span>
            </Link>

            <nav className="hidden items-center gap-8 text-sm text-zinc-300 md:flex">
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
              className="rounded-full bg-white px-5 py-2.5 text-sm font-medium text-black transition hover:scale-[1.02]"
            >
              Book a Call
            </Link>
          </div>
        </header>

        {children}

        <Footer />
      </body>
    </html>
  );
}