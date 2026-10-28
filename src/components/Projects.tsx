import Image from "next/image";
import Link from "next/link";
import { FiArrowRight, FiArrowUpRight } from "react-icons/fi";
import { projects } from "@/data/portfolio";
import BigHeading from "./BigHeading";

export default function Projects() {
  return (
    <section id="projects">
      <BigHeading top="Recent" bottom="Projects" />

      <div className="mt-10 grid gap-5 sm:grid-cols-2">
        {projects.map((p, i) => (
          <article
            key={p.slug}
            className="group flex flex-col overflow-hidden rounded-3xl border border-line bg-surface transition hover:-translate-y-1 hover:border-accent/50"
          >
            <Link href={`/projects/${p.slug}`} className={`block p-3 ${i % 2 ? "bg-lime/90" : "bg-accent/90"}`}>
              <span className="relative block aspect-[1200/630] overflow-hidden rounded-2xl">
                <Image
                  src={p.image}
                  alt={`${p.title} screenshot`}
                  fill
                  sizes="(min-width: 1024px) 400px, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                />
              </span>
            </Link>

            <div className="flex flex-1 flex-col p-5">
              <p className="font-mono text-xs text-muted">
                {p.date} · {p.tagline}
              </p>
              <h3 className="mt-2 font-display text-2xl font-bold tracking-tight">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{p.summary}</p>

              <ul className="mt-4 flex flex-wrap gap-1.5">
                {p.stack.slice(0, 4).map((s) => (
                  <li key={s} className="rounded-full border border-line px-2.5 py-1 text-xs text-muted">
                    {s}
                  </li>
                ))}
              </ul>

              <div className="mt-auto flex items-center gap-2 pt-6">
                <Link
                  href={`/projects/${p.slug}`}
                  className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-full bg-ink px-4 py-2.5 text-sm font-semibold text-bg transition hover:bg-accent"
                >
                  View Details <FiArrowRight />
                </Link>
                <a
                  href={p.live}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${p.title} live site`}
                  className="grid size-10 place-items-center rounded-full border border-line transition hover:border-accent hover:text-accent"
                >
                  <FiArrowUpRight />
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
