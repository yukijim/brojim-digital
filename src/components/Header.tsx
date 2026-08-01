import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b border-black/[.08] dark:border-white/[.145]">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5">
        <Link href="/" className="text-lg font-semibold tracking-tight">
          Brojim<span className="text-indigo-500">Digital</span>
        </Link>
        <nav className="flex items-center gap-6 text-sm font-medium text-zinc-600 dark:text-zinc-400">
          <a href="#servis" className="hover:text-foreground transition-colors">
            Servis
          </a>
          <a href="#tentang" className="hover:text-foreground transition-colors">
            Tentang
          </a>
          <a
            href="https://support.brojimdigital.tech"
            className="rounded-full bg-foreground px-4 py-2 text-background transition-colors hover:bg-indigo-500"
          >
            Portal Klien
          </a>
        </nav>
      </div>
    </header>
  );
}
