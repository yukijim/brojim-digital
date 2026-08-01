import type { ReactNode } from "react";

type ServiceCardProps = {
  icon: ReactNode;
  title: string;
  description: string;
};

export default function ServiceCard({ icon, title, description }: ServiceCardProps) {
  return (
    <div className="group rounded-2xl border border-white/10 bg-surface p-6 transition-all hover:-translate-y-1 hover:border-gold/50 hover:shadow-[0_0_30px_-10px_rgba(212,161,61,0.4)]">
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-silver/20 to-gold/20 text-gold-bright">
        {icon}
      </div>
      <h3 className="mt-4 text-lg font-semibold text-white">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-zinc-400">{description}</p>
    </div>
  );
}
