"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "#servis", label: "Servis" },
  { href: "#tentang", label: "Tentang" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <Link href="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <Image src="/brand/logo.png" alt="Brojim Digital" width={140} height={70} priority className="h-10 w-auto" />
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-medium text-zinc-300 sm:flex">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="transition-colors hover:text-gold-bright">
              {link.label}
            </a>
          ))}
          <a
            href="https://support.brojimdigital.tech"
            className="rounded-full bg-gradient-to-r from-silver to-gold px-5 py-2 text-sm font-semibold text-black transition-opacity hover:opacity-90"
          >
            Portal Klien
          </a>
        </nav>

        <button
          type="button"
          aria-label="Buka menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-zinc-200 sm:hidden"
        >
          {open ? (
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          )}
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-white/10 bg-black/95 px-6 py-4 sm:hidden">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-2 text-sm font-medium text-zinc-300 transition-colors hover:bg-white/5 hover:text-gold-bright"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://support.brojimdigital.tech"
            className="mt-2 rounded-lg bg-gradient-to-r from-silver to-gold px-3 py-2 text-center text-sm font-semibold text-black"
          >
            Portal Klien
          </a>
        </nav>
      )}
    </header>
  );
}
