import Image from "next/image";
import Link from "next/link";
import { FiArrowRight, FiArrowUpRight } from "react-icons/fi";
import { projects } from "@/data/portfolio";
import SectionHeading from "./SectionHeading";

export default function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading index="05" label="Projects" title="Things I've built and shipped" />

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((p) => (
            <article
              key={p.slug}
              className="group flex flex-col overflow-hidden rounded-3xl border border-line bg-surface transition hover:-translate-y-1 hover:border-accent/40"
            >
              <Link href={`/projects/${p.slug}`} className="block bg-surface-2 p-4 sm:p-5">
                <span className="relative block aspect-[1200/630] overflow-hidden rounded-xl border border-line">
                  <Image
                    src={p.image}
                    alt={`${p.title} screenshot`}
                    fill
                    sizes="(min-width: 768px) 540px, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </span>
              </Link>

              <div className="flex flex-1 flex-col p-6">
                <p className="font-mono text-xs text-muted">
                  {p.date} · <span className="text-accent">{p.tagline}</span>
                </p>
                <h3 className="mt-2 text-2xl font-semibold tracking-tight">{p.title}</h3>
                <p className="mt-3 leading-relaxed text-muted">{p.summary}</p>

                <ul className="mt-5 flex flex-wrap gap-2">
                  {p.stack.slice(0, 4).map((s) => (
                    <li key={s} className="rounded-md bg-surface-2 px-2.5 py-1 font-mono text-xs text-muted">
                      {s}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto flex flex-wrap gap-3 pt-7">
                  <Link
                    href={`/projects/${p.slug}`}
                    className="inline-flex items-center gap-1.5 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-accent-ink transition hover:brightness-110"
                  >
                    View Details <FiArrowRight />
                  </Link>
                  <a
                    href={p.live}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full border border-line px-5 py-2.5 text-sm font-medium transition hover:border-muted"
                  >
                    Live <FiArrowUpRight />
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
