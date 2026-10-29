"use client";

import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";
import ClientLogos from "@/components/ClientLogos";
import { useLanguage } from "@/lib/LanguageContext";

const icons = [
  <svg key="web" viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 8l-4 4 4 4M15 8l4 4-4 4M13 5l-2 14" />
  </svg>,
  <svg key="biz" viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 21V7l8-4 8 4v14M9 21v-6h6v6M4 21h16" />
  </svg>,
  <svg key="agent" viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
    <circle cx="8" cy="8" r="3" />
    <circle cx="17" cy="10" r="2.5" />
    <path strokeLinecap="round" d="M3 20c0-3 2.2-5 5-5s5 2 5 5M14.5 20c0-2.2 1.5-4 4-4s4 1.8 4 4" />
  </svg>,
  <svg key="content" viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
    <rect x="3" y="6" width="13" height="12" rx="2" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M16 10.5l5-3v9l-5-3" />
  </svg>,
];

export default function Home() {
  const { t } = useLanguage();

  return (
    <div className="flex flex-1 flex-col bg-black">
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(212,161,61,0.12),_transparent_60%)]" />
          <div className="relative mx-auto max-w-5xl px-6 py-24 text-center sm:py-32">
            <Image
              src="/brand/logo.png"
              alt="Brojim Digital"
              width={220}
              height={110}
              priority
              className="mx-auto mb-8 h-20 w-auto sm:h-24"
            />
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              {t.hero.titleBefore}
              <span className="text-gold-gradient">{t.hero.titleHighlight}</span>
              {t.hero.titleAfter}
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-400">{t.hero.subtitle}</p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="mailto:hello@brojimdigital.tech"
                className="w-full rounded-full bg-gradient-to-r from-silver to-gold px-6 py-3 text-sm font-semibold text-black transition-opacity hover:opacity-90 sm:w-auto"
              >
                {t.hero.ctaContact}
              </a>
              <a
                href="#servis"
                className="w-full rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-zinc-200 transition-colors hover:border-gold/50 hover:text-gold-bright sm:w-auto"
              >
                {t.hero.ctaServices}
              </a>
            </div>
          </div>
        </section>

        <ClientLogos />

        {/* Servis Teras */}
        <section id="servis" className="mx-auto max-w-6xl px-6 py-16">
          <div className="text-center">
            <h2 className="text-sm font-semibold uppercase tracking-widest text-gold-bright">{t.services.label}</h2>
            <p className="mt-2 text-2xl font-semibold tracking-tight text-white sm:text-3xl">{t.services.heading}</p>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {t.services.items.map((service, i) => (
              <ServiceCard key={service.title} icon={icons[i]} title={service.title} description={service.description} />
            ))}
          </div>
        </section>

        {/* Untuk Klien Sedia Ada */}
        <section className="border-y border-white/10 bg-surface">
          <div className="mx-auto max-w-5xl px-6 py-16 text-center">
            <h2 className="text-2xl font-semibold tracking-tight text-white">{t.clientCta.heading}</h2>
            <p className="mx-auto mt-4 max-w-xl text-zinc-400">{t.clientCta.description}</p>
            <a
              href="https://support.brojimdigital.tech"
              className="mt-8 inline-block rounded-full bg-gradient-to-r from-silver to-gold px-6 py-3 text-sm font-semibold text-black transition-opacity hover:opacity-90"
            >
              {t.clientCta.button}
            </a>
          </div>
        </section>

        {/* Tentang */}
        <section id="tentang" className="mx-auto max-w-5xl px-6 py-20 text-center">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-gold-bright">{t.about.label}</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-zinc-300">{t.about.description}</p>
        </section>
      </main>

      <Footer />
    </div>
  );
}
