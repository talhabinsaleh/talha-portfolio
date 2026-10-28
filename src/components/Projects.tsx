import Image from "next/image";
import { FiArrowUpRight, FiCheck, FiGithub } from "react-icons/fi";
import { projects } from "@/data/portfolio";
import SectionHeading from "./SectionHeading";

export default function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading index="03" label="Projects" title="Things I've built and shipped" />

        <div className="space-y-8">
          {projects.map((p, i) => (
            <article
              key={p.title}
              className="group grid overflow-hidden rounded-3xl border border-line bg-surface transition-colors hover:border-accent/40 lg:grid-cols-2"
            >
              <a
                href={p.live}
                target="_blank"
                rel="noreferrer"
                className={`flex items-center border-b border-line bg-surface-2 p-4 sm:p-8 lg:border-b-0 ${
                  i % 2 ? "lg:order-2 lg:border-l" : "lg:border-r"
                }`}
              >
                <span className="relative block aspect-[1200/630] w-full overflow-hidden rounded-xl border border-line shadow-2xl shadow-black/40">
                  <Image
                    src={p.image}
                    alt={`${p.title} screenshot`}
                    fill
                    sizes="(min-width: 1024px) 512px, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </span>
              </a>

              <div className="flex flex-col p-6 sm:p-8">
                <p className="font-mono text-xs text-muted">
                  {p.date} · <span className="text-accent">{p.tagline}</span>
                </p>
                <h3 className="mt-2 text-2xl font-semibold tracking-tight">{p.title}</h3>
                <p className="mt-3 leading-relaxed text-muted">{p.description}</p>

                <ul className="mt-5 space-y-2 text-sm">
                  {p.points.map((pt) => (
                    <li key={pt} className="flex gap-2">
                      <FiCheck className="mt-0.5 shrink-0 text-accent" />
                      <span className="text-ink/85">{pt}</span>
                    </li>
                  ))}
                </ul>

                <ul className="mt-6 flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <li key={s} className="rounded-md bg-surface-2 px-2.5 py-1 font-mono text-xs text-muted">
                      {s}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto flex gap-3 pt-8">
                  <a
                    href={p.live}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full bg-accent px-4 py-2 text-sm font-medium text-accent-ink transition hover:brightness-110"
                  >
                    Live site <FiArrowUpRight />
                  </a>
                  <a
                    href={p.code}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full border border-line px-4 py-2 text-sm font-medium transition hover:border-muted"
                  >
                    <FiGithub /> Code
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-10 text-center text-muted">
          More on{" "}
          <a href="https://github.com/talhabinsaleh" target="_blank" rel="noreferrer" className="text-accent hover:underline">
            GitHub
          </a>
        </p>
      </div>
    </section>
  );
}
