"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import { Mail } from "lucide-react";
import { PERSONAL } from "@/lib/data";
import { GithubIcon, LinkedinIcon } from "./icons";

export default function Hero() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        "[data-hero-item]",
        { opacity: 0, y: 16 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.08,
          ease: "power3.out",
        }
      );
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="top" ref={rootRef} className="pt-40 pb-20 md:pt-48 md:pb-24">
      <div className="mx-auto max-w-3xl px-6">
        <div data-hero-item className="flex items-center gap-3">
          <span className="relative flex h-28 w-28 shrink-0 overflow-hidden rounded-full ring-2 ring-accent-soft">
            <Image
              src="/avatar.jpg"
              alt={PERSONAL.name}
              fill
              sizes="72px"
              className="object-cover"
              priority
            />
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-line bg-white px-3.5 py-1.5 text-xs text-ink-soft">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            Disponible para nuevos proyectos
          </span>
        </div>

        <h1
          data-hero-item
          className="mt-8 font-display font-semibold text-3xl sm:text-4xl tracking-tight text-balance"
        >
          Hola, soy <span className="text-accent">{PERSONAL.firstName}</span>
        </h1>

        <p
          data-hero-item
          className="mt-4 max-w-xl text-base md:text-lg text-ink-soft leading-relaxed"
        >
          +4 años de experiencia como{" "}
          <span className="font-medium text-ink">
            Full-Stack Developer y Tech Lead
          </span>
          . Construyo productos de punta a punta: apps móviles en producción,
          APIs y la infraestructura en AWS que las sostiene.
        </p>

        <div data-hero-item className="mt-7 flex flex-wrap items-center gap-2.5">
          <a
            href={`mailto:${PERSONAL.email}`}
            className="inline-flex items-center gap-2 rounded-full bg-ink text-paper px-4 py-2 text-sm font-medium hover:bg-accent transition-colors"
          >
            <Mail size={15} />
            Contáctame
          </a>
          <a
            href={PERSONAL.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-4 py-2 text-sm text-ink hover:border-accent hover:text-accent transition-colors"
          >
            <LinkedinIcon size={15} />
            LinkedIn
          </a>
          <a
            href={PERSONAL.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-4 py-2 text-sm text-ink hover:border-accent hover:text-accent transition-colors"
          >
            <GithubIcon size={15} />
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
