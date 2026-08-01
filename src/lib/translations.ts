export type Locale = "ms" | "en";

export type Translations = {
  nav: { servis: string; tentang: string; portal: string };
  hero: {
    titleBefore: string;
    titleHighlight: string;
    titleAfter: string;
    subtitle: string;
    ctaContact: string;
    ctaServices: string;
  };
  services: {
    label: string;
    heading: string;
    items: { title: string; description: string }[];
  };
  clientCta: { heading: string; description: string; button: string };
  about: { label: string; description: string };
  footer: { support: string; rights: string };
};

export const translations: Record<Locale, Translations> = {
  ms: {
    nav: { servis: "Servis", tentang: "Tentang", portal: "Portal Klien" },
    hero: {
      titleBefore: "Membina ",
      titleHighlight: "ekosistem digital",
      titleAfter: " untuk bisnes anda",
      subtitle:
        "Brojim Digital merangka dan membina sistem digital tersuai — web apps, sistem syarikat, sistem agen, hingga sistem content creator — dalam satu ekosistem yang disokong.",
      ctaContact: "Hubungi Kami",
      ctaServices: "Lihat Servis",
    },
    services: {
      label: "Servis Teras",
      heading: "Apa yang kami bina untuk anda",
      items: [
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
      ],
    },
    clientCta: {
      heading: "Sudah Guna Servis Kami?",
      description:
        "Ada masalah nak dilaporkan atau idea untuk tambah baik sistem anda? Masuk ke portal support kami — dikendalikan AI Chatbot untuk respons pantas.",
      button: "Ke Portal Support",
    },
    about: {
      label: "Tentang Kami",
      description:
        "Brojim Digital ialah jenama yang merangka dan membina ekosistem digital tersuai untuk bisnes — dari sistem dalaman syarikat hingga platform sokongan pelanggan bertenagakan AI.",
    },
    footer: {
      support: "Support",
      rights: "Hak cipta terpelihara.",
    },
  },
  en: {
    nav: { servis: "Services", tentang: "About", portal: "Client Portal" },
    hero: {
      titleBefore: "Building a ",
      titleHighlight: "digital ecosystem",
      titleAfter: " for your business",
      subtitle:
        "Brojim Digital designs and builds custom digital systems — web apps, business systems, agent systems, and content creator systems — within one supported ecosystem.",
      ctaContact: "Contact Us",
      ctaServices: "View Services",
    },
    services: {
      label: "Core Services",
      heading: "What we build for you",
      items: [
        {
          title: "Web Apps",
          description: "Custom web application development — from internal systems to ready-to-use digital products.",
        },
        {
          title: "Business Systems",
          description: "Operational and management systems for companies — process automation, reporting, and centralized data.",
        },
        {
          title: "Agent Systems",
          description: "Management platform for agents and sales networks — performance and commission tracking.",
        },
        {
          title: "Content Creator System",
          description: "Support system for content creators — content management, scheduling, and client management.",
        },
      ],
    },
    clientCta: {
      heading: "Already Using Our Services?",
      description:
        "Have an issue to report or an idea to improve your system? Head to our support portal — handled by an AI Chatbot for fast response.",
      button: "Go to Support Portal",
    },
    about: {
      label: "About Us",
      description:
        "Brojim Digital is a brand that designs and builds custom digital ecosystems for businesses — from internal company systems to AI-powered customer support platforms.",
    },
    footer: {
      support: "Support",
      rights: "All rights reserved.",
    },
  },
};
