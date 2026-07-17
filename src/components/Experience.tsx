"use client";

import { Briefcase } from "lucide-react";
import { EXPERIENCE } from "@/lib/data";
import { useLanguage } from "@/context/LanguageContext";
import Reveal from "./Reveal";

export default function Experience() {
  const { language, t } = useLanguage();

  const getOrgId = (org: string) => {
    if (org.includes("Pololitos")) return "pololitos";
    if (org.includes("Flöid")) return "floid";
    if (org.includes("AltaVenta")) return "altaventa";
    return "";
  };

  const translatePeriod = (period: string, lang: string) => {
    if (lang === "es") return period;
    return period
      .replace("Ago", "Aug")
      .replace("Presente", "Present")
      .replace("Ene", "Jan")
      .replace("Dic", "Dec")
      .replace("Jul", "Jul");
  };

  return (
    <section id="experience" className="py-16 md:py-20">
      <div className="mx-auto max-w-3xl px-6">
        <Reveal className="flex items-center gap-2.5">
          <Briefcase size={18} className="text-accent" />
          <h2 className="font-display font-semibold text-xl tracking-tight">
            {t("experience.title")}
          </h2>
        </Reveal>

        <Reveal group className="mt-8 space-y-8">
          {EXPERIENCE.map((item) => {
            const orgId = getOrgId(item.org);
            const translation = t(`experience.items.${orgId as any}` as any) as any;
            const role = (translation && translation.role) || item.role;
            const description = (translation && translation.description) || item.description;

            return (
              <div
                key={item.org}
                className="grid sm:grid-cols-[180px_minmax(0,1fr)] gap-2 sm:gap-6 relative pl-5 sm:pl-0"
              >
                <span className="absolute left-0 top-1.5 h-2 w-2 rounded-full bg-accent sm:hidden" />
                <div>
                  <p className="font-medium text-ink text-sm">
                    {role}
                  </p>
                  <p className="text-sm text-ink-soft">{item.org}</p>
                  <p className="mt-0.5 text-xs text-ink-faint">
                    {translatePeriod(item.period, language)}
                  </p>
                </div>
                <p className="text-sm text-ink-soft leading-relaxed">
                  {description}
                </p>
              </div>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
