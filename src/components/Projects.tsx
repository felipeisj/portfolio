import { ArrowUpRight, FolderGit2 } from "lucide-react";
import { PROJECTS } from "@/lib/data";
import Reveal from "./Reveal";

export default function Projects() {
  const [featured, ...rest] = PROJECTS;

  return (
    <section id="work" className="py-16 md:py-20 bg-paper-alt">
      <div className="mx-auto max-w-3xl px-6">
        <Reveal className="flex items-center gap-2.5">
          <FolderGit2 size={18} className="text-accent" />
          <h2 className="font-display font-semibold text-xl tracking-tight">
            Proyectos
          </h2>
        </Reveal>

        {/* Featured project */}
        <Reveal delay={0.05} className="mt-8">
          <div className="rounded-2xl border border-line bg-white p-6 md:p-7">
            <div className="flex flex-wrap items-center gap-2">
              <h3 className="font-display font-semibold text-lg text-ink">
                {featured.name}
              </h3>
              <span className="text-xs text-ink-faint">
                · {featured.category}
              </span>
              <span className="text-xs text-ink-faint">
                · {featured.period}
              </span>
            </div>
            <p className="mt-2.5 text-sm text-ink-soft leading-relaxed max-w-xl">
              {featured.description}
            </p>

            <ul className="mt-4 space-y-1.5">
              {(featured.highlights ?? []).map((h) => (
                <li
                  key={h}
                  className="flex gap-2 text-sm text-ink-soft leading-relaxed"
                >
                  <span className="text-accent mt-1">–</span>
                  {h}
                </li>
              ))}
            </ul>

            <div className="mt-4 flex flex-wrap gap-1.5">
              {featured.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-paper-alt px-2.5 py-1 text-xs text-ink-soft"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Other projects */}
        <Reveal group delay={0.1} className="mt-2 divide-y divide-line">
          {rest.map((project) => (
            <div key={project.slug} className="flex items-start gap-4 py-5">
              <span
                className="mt-1.5 h-2 w-2 shrink-0 rounded-full"
                style={{ backgroundColor: project.accent }}
                aria-hidden
              />
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  {project.url ? (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 font-display font-semibold text-base text-ink hover:text-accent transition-colors"
                    >
                      {project.name}
                      <ArrowUpRight
                        size={14}
                        className="text-ink-faint group-hover:text-accent"
                      />
                    </a>
                  ) : (
                    <span className="font-display font-semibold text-base text-ink">
                      {project.name}
                    </span>
                  )}
                  <span className="text-xs text-ink-faint">
                    · {project.category}
                  </span>
                </div>
                <p className="mt-1.5 text-sm text-ink-soft leading-relaxed">
                  {project.description}
                </p>
                <div className="mt-2.5 flex flex-wrap gap-1.5">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-white border border-line px-2.5 py-0.5 text-xs text-ink-soft"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
