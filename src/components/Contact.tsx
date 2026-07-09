import { Mail, MessageCircle } from "lucide-react";
import { PERSONAL } from "@/lib/data";
import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section id="contact" className="py-16 md:py-20">
      <div className="mx-auto max-w-3xl px-6">
        <Reveal className="flex items-center gap-2.5">
          <MessageCircle size={18} className="text-accent" />
          <h2 className="font-display font-semibold text-xl tracking-tight">
            Contacto
          </h2>
        </Reveal>

        <Reveal delay={0.05} className="mt-5 flex flex-wrap items-center gap-4">
          <p className="text-sm md:text-base text-ink-soft">
            ¿Un proyecto en mente? Escríbeme.
          </p>
          <a
            href={`mailto:${PERSONAL.email}`}
            className="inline-flex items-center gap-2 rounded-full bg-ink text-paper px-4 py-2 text-sm font-medium hover:bg-accent transition-colors"
          >
            <Mail size={15} />
            {PERSONAL.email}
          </a>
        </Reveal>
      </div>
    </section>
  );
}
