"use client";

import Image from "next/image";
import { useLanguage } from "@/lib/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 py-10 sm:flex-row">
        <Image src="/brand/logo.png" alt="Brojim Digital" width={120} height={60} className="h-8 w-auto opacity-90" />
        <div className="flex flex-col items-center gap-2 text-sm text-zinc-400 sm:flex-row sm:gap-6">
          <a href="https://support.brojimdigital.tech" className="transition-colors hover:text-gold-bright">
            {t.footer.support}
          </a>
          <a href="mailto:hello@brojimdigital.tech" className="transition-colors hover:text-gold-bright">
            hello@brojimdigital.tech
          </a>
        </div>
        <p className="text-xs text-zinc-500">
          &copy; {new Date().getFullYear()} Brojim Digital. {t.footer.rights}
        </p>
      </div>
    </footer>
  );
}
