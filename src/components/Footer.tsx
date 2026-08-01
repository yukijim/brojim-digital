export default function Footer() {
  return (
    <footer className="border-t border-black/[.08] dark:border-white/[.145]">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-zinc-600 dark:text-zinc-400 sm:flex-row">
        <p>&copy; {new Date().getFullYear()} Brojim Digital. Hak cipta terpelihara.</p>
        <div className="flex gap-6">
          <a href="https://support.brojimdigital.tech" className="hover:text-foreground transition-colors">
            Support
          </a>
          <a href="mailto:hello@brojimdigital.tech" className="hover:text-foreground transition-colors">
            hello@brojimdigital.tech
          </a>
        </div>
      </div>
    </footer>
  );
}
