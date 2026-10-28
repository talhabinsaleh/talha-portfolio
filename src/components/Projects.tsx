import Image from "next/image";
import Link from "next/link";
import { FiArrowRight, FiArrowUpRight } from "react-icons/fi";
import { projects } from "@/data/portfolio";
import BigHeading from "./BigHeading";
import Tile from "./motion/Tile";

export default function Projects() {
  return (
    <section id="projects">
      <BigHeading top="Recent" bottom="Projects" index="05" />

      <div className="mt-10 grid gap-3 md:grid-cols-2">
        {projects.map((p, i) => (
          <Tile key={p.slug} delay={(i % 2) * 0.08} className="flex flex-col">
            <Link href={`/projects/${p.slug}`} className="relative block overflow-hidden p-3">
              <span
                aria-hidden
                className={`absolute inset-3 rounded-[20px] ${i % 2 ? "bg-lime" : "bg-accent"} origin-bottom scale-y-[0.35] transition-transform duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover/tile:scale-y-100`}
              />
              <span className="relative block aspect-[1200/630] overflow-hidden rounded-[20px] transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/tile:scale-[0.94]">
                <Image
                  src={p.image}
                  alt={`${p.title} screenshot`}
                  fill
                  sizes="(min-width: 768px) 600px, 100vw"
                  className="object-cover object-left-top transition-transform duration-700 group-hover/tile:scale-110"
                />
              </span>
            </Link>

            <div className="flex flex-1 flex-col px-6 pt-3 pb-6">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="font-mono text-xs text-muted">
                    {p.date} · {p.tagline}
                  </p>
                  <h3 className="mt-2 font-display text-2xl font-bold tracking-tight sm:text-3xl">{p.title}</h3>
                </div>
                <span className="font-display text-sm font-bold text-faint">{String(i + 1).padStart(2, "0")}</span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted">{p.summary}</p>

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
                  className="group/btn inline-flex flex-1 items-center justify-center gap-1.5 rounded-full bg-ink px-4 py-3 text-sm font-semibold text-bg transition-colors hover:bg-accent"
                >
                  View Details <FiArrowRight className="transition-transform group-hover/btn:translate-x-1" />
                </Link>
                <a
                  href={p.live}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${p.title} live site`}
                  className="grid size-11 place-items-center rounded-full border border-line transition-colors hover:border-accent hover:text-accent"
                >
                  <FiArrowUpRight />
                </a>
              </div>
            </div>
          </Tile>
        ))}
      </div>
    </section>
  );
}
