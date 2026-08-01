import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";

const services = [
  {
    title: "Web Apps",
    description: "Pembangunan aplikasi web tersuai — dari sistem dalaman hingga produk digital siap pakai.",
  },
  {
    title: "Sistem Syarikat",
    description: "Sistem operasi & pengurusan untuk syarikat — automasi proses, laporan, dan data terpusat.",
  },
  {
    title: "Sistem Agen",
    description: "Platform pengurusan untuk agen dan rangkaian jualan — tracking prestasi dan komisen.",
  },
  {
    title: "Content Creator System",
    description: "Sistem sokongan untuk content creator — pengurusan kandungan, jadual, dan pelanggan.",
  },
];

export default function Home() {
  return (
    <div className="flex flex-1 flex-col bg-zinc-50 dark:bg-black">
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="mx-auto max-w-5xl px-6 py-24 text-center sm:py-32">
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Membina ekosistem digital untuk bisnes anda
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Brojim Digital merangka dan membina sistem digital tersuai — web apps, sistem syarikat,
            sistem agen, hingga sistem content creator — dalam satu ekosistem yang disokong.
          </p>
          <div className="mt-10 flex items-center justify-center gap-4">
            <a
              href="mailto:hello@brojimdigital.tech"
              className="rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-colors hover:bg-indigo-500"
            >
              Hubungi Kami
            </a>
            <a
              href="#servis"
              className="rounded-full border border-black/[.08] px-6 py-3 text-sm font-medium transition-colors hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-white/[.06]"
            >
              Lihat Servis
            </a>
          </div>
        </section>

        {/* Servis Teras */}
        <section id="servis" className="mx-auto max-w-5xl px-6 py-16">
          <h2 className="text-2xl font-semibold tracking-tight">Servis Teras</h2>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {services.map((service) => (
              <ServiceCard key={service.title} title={service.title} description={service.description} />
            ))}
          </div>
        </section>

        {/* Untuk Klien Sedia Ada */}
        <section className="border-y border-black/[.08] bg-white dark:border-white/[.145] dark:bg-zinc-950">
          <div className="mx-auto max-w-5xl px-6 py-16 text-center">
            <h2 className="text-2xl font-semibold tracking-tight">Sudah Guna Servis Kami?</h2>
            <p className="mx-auto mt-4 max-w-xl text-zinc-600 dark:text-zinc-400">
              Ada masalah nak dilaporkan atau idea untuk tambah baik sistem anda? Masuk ke portal
              support kami — dikendalikan AI Chatbot untuk respons pantas.
            </p>
            <a
              href="https://support.brojimdigital.tech"
              className="mt-8 inline-block rounded-full bg-indigo-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-indigo-600"
            >
              Ke Portal Support
            </a>
          </div>
        </section>

        {/* Tentang */}
        <section id="tentang" className="mx-auto max-w-5xl px-6 py-16">
          <h2 className="text-2xl font-semibold tracking-tight">Tentang Brojim Digital</h2>
          <p className="mt-4 max-w-2xl text-zinc-600 dark:text-zinc-400">
            Brojim Digital ialah jenama yang merangka dan membina ekosistem digital tersuai untuk
            bisnes — dari sistem dalaman syarikat hingga platform sokongan pelanggan bertenagakan AI.
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
}
