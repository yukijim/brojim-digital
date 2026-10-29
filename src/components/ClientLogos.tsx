"use client";

/* eslint-disable @next/next/no-img-element -- small static logos, no optimisation needed */
import { useEffect, useRef, useState } from "react";
import { CLIENTS_HEADING, clients } from "@/lib/clients";
import { useLanguage } from "@/lib/LanguageContext";

export default function ClientLogos() {
  const { locale } = useLanguage();
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  // Play the entrance once, the first time the section scrolls into view.
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section ref={ref} className="mx-auto max-w-6xl py-10 sm:px-6 sm:py-12">
      <h2
        className={`client-heading px-6 text-center text-lg font-semibold tracking-tight sm:px-0 sm:text-2xl ${visible ? "is-visible" : ""}`}
      >
        <span className="text-gold-gradient">{CLIENTS_HEADING[locale]}</span>
      </h2>

      {/* Mobile: one auto-scrolling row, duplicated for a seamless loop */}
      <div className={`client-marquee mt-6 sm:hidden ${visible ? "is-visible" : ""}`}>
        <ul className="client-marquee-track">
          {[...clients, ...clients].map((c, i) => (
            <li key={`${c.name}-${i}`} aria-hidden={i >= clients.length || undefined}>
              <div className="flex h-16 w-32 items-center justify-center rounded-xl border border-white/10 bg-white p-2.5">
                <img src={c.logo} alt={c.name} className="max-h-full max-w-full object-contain" />
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Tablet & desktop: grid with staggered entrance, float and hover shine */}
      <ul className="mt-8 hidden grid-cols-3 gap-4 sm:grid lg:grid-cols-6">
        {clients.map((c, i) => (
          <li
            key={c.name}
            className={`client-tile ${visible ? "is-visible" : ""}`}
            style={{ "--i": i } as React.CSSProperties}
          >
            <div className="client-float">
              <div className="client-card flex h-24 items-center justify-center rounded-2xl border border-white/10 bg-white p-3">
                <img src={c.logo} alt={c.name} title={c.name} loading="lazy" className="client-logo max-h-full max-w-full object-contain" />
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
