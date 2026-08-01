import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";

const services = [
  {
    title: "Web Apps",
    description: "Pembangunan aplikasi web tersuai — dari sistem dalaman hingga produk digital siap pakai.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 8l-4 4 4 4M15 8l4 4-4 4M13 5l-2 14" />
      </svg>
    ),
  },
  {
    title: "Sistem Syarikat",
    description: "Sistem operasi & pengurusan untuk syarikat — automasi proses, laporan, dan data terpusat.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 21V7l8-4 8 4v14M9 21v-6h6v6M4 21h16" />
      </svg>
    ),
  },
  {
    title: "Sistem Agen",
    description: "Platform pengurusan untuk agen dan rangkaian jualan — tracking prestasi dan komisen.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="8" cy="8" r="3" />
        <circle cx="17" cy="10" r="2.5" />
        <path strokeLinecap="round" d="M3 20c0-3 2.2-5 5-5s5 2 5 5M14.5 20c0-2.2 1.5-4 4-4s4 1.8 4 4" />
      </svg>
    ),
  },
  {
    title: "Content Creator System",
    description: "Sistem sokongan untuk content creator — pengurusan kandungan, jadual, dan pelanggan.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="3" y="6" width="13" height="12" rx="2" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 10.5l5-3v9l-5-3" />
      </svg>
    ),
  },
];

export default function Home() {
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
              Membina <span className="text-gold-gradient">ekosistem digital</span> untuk bisnes anda
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
              Brojim Digital merangka dan membina sistem digital tersuai — web apps, sistem syarikat,
              sistem agen, hingga sistem content creator — dalam satu ekosistem yang disokong.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="mailto:hello@brojimdigital.tech"
                className="w-full rounded-full bg-gradient-to-r from-silver to-gold px-6 py-3 text-sm font-semibold text-black transition-opacity hover:opacity-90 sm:w-auto"
              >
                Hubungi Kami
              </a>
              <a
                href="#servis"
                className="w-full rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-zinc-200 transition-colors hover:border-gold/50 hover:text-gold-bright sm:w-auto"
              >
                Lihat Servis
              </a>
            </div>
          </div>
        </section>

        {/* Servis Teras */}
        <section id="servis" className="mx-auto max-w-6xl px-6 py-16">
          <div className="text-center">
            <h2 className="text-sm font-semibold uppercase tracking-widest text-gold-bright">Servis Teras</h2>
            <p className="mt-2 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              Apa yang kami bina untuk anda
            </p>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <ServiceCard key={service.title} icon={service.icon} title={service.title} description={service.description} />
            ))}
          </div>
        </section>

        {/* Untuk Klien Sedia Ada */}
        <section className="border-y border-white/10 bg-surface">
          <div className="mx-auto max-w-5xl px-6 py-16 text-center">
            <h2 className="text-2xl font-semibold tracking-tight text-white">Sudah Guna Servis Kami?</h2>
            <p className="mx-auto mt-4 max-w-xl text-zinc-400">
              Ada masalah nak dilaporkan atau idea untuk tambah baik sistem anda? Masuk ke portal
              support kami — dikendalikan AI Chatbot untuk respons pantas.
            </p>
            <a
              href="https://support.brojimdigital.tech"
              className="mt-8 inline-block rounded-full bg-gradient-to-r from-silver to-gold px-6 py-3 text-sm font-semibold text-black transition-opacity hover:opacity-90"
            >
              Ke Portal Support
            </a>
          </div>
        </section>

        {/* Tentang */}
        <section id="tentang" className="mx-auto max-w-5xl px-6 py-20 text-center">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-gold-bright">Tentang Kami</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-zinc-300">
            Brojim Digital ialah jenama yang merangka dan membina ekosistem digital tersuai untuk
            bisnes — dari sistem dalaman syarikat hingga platform sokongan pelanggan bertenagakan AI.
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
}
