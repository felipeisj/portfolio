"use client";

import { UserRound } from "lucide-react";
import { STACK } from "@/lib/data";
import { useLanguage } from "@/context/LanguageContext";
import Reveal from "./Reveal";

export default function About() {
  const { language, t } = useLanguage();

  return (
    <section id="about" className="py-16 md:py-20">
      <div className="mx-auto max-w-3xl px-6">
        <Reveal className="flex items-center gap-2.5">
          <UserRound size={18} className="text-accent" />
          <h2 className="font-display font-semibold text-xl tracking-tight">
            {t("about.title")}
          </h2>
        </Reveal>

        <Reveal delay={0.05} className="mt-6 space-y-4 max-w-xl">
          <p className="text-sm md:text-base text-ink-soft leading-relaxed">
            {t("about.paragraph1")}
          </p>
          
          {language === "es" ? (
            <p className="text-sm md:text-base text-ink-soft leading-relaxed">
              Viví y trabajé un año en Australia, así que tengo{" "}
              <span className="font-medium text-ink">inglés C1</span> y me siento
              cómodo trabajando en equipo.
            </p>
          ) : (
            <p className="text-sm md:text-base text-ink-soft leading-relaxed">
              I lived and worked in Australia for a year, so I have{" "}
              <span className="font-medium text-ink">C1 level English</span> and feel
              comfortable working in a team.
            </p>
          )}
        </Reveal>

        <Reveal group delay={0.1} className="mt-6 flex flex-wrap gap-1.5">
          {STACK.map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-paper-alt px-3 py-1 text-xs text-ink-soft"
            >
              {tech}
            </span>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
