import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FiAlertTriangle, FiArrowLeft, FiArrowUpRight, FiCheck, FiGithub, FiTrendingUp } from "react-icons/fi";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { projects } from "@/data/portfolio";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/projects/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: `${project.title} — Talha Bin Saleh`,
    description: project.summary,
    openGraph: { images: [{ url: project.image, width: 1200, height: 630 }] },
  };
}

export default async function ProjectPage({ params }: PageProps<"/projects/[slug]">) {
  const { slug } = await params;
  const index = projects.findIndex((p) => p.slug === slug);
  if (index === -1) notFound();
  const p = projects[index];
  const next = projects[(index + 1) % projects.length];

  return (
    <>
      <Navbar />
      <main className="flex-1 pt-28 pb-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <Link href="/#projects" className="inline-flex items-center gap-2 text-sm text-muted hover:text-ink">
            <FiArrowLeft /> All projects
          </Link>

          <header className="mt-8">
            <p className="font-mono text-sm text-accent">
              {p.date} · {p.tagline}
            </p>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">{p.title}</h1>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={p.live}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 font-medium text-accent-ink transition hover:brightness-110"
              >
                Live project <FiArrowUpRight />
              </a>
              <a
                href={p.code}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-line px-6 py-3 font-medium transition hover:border-muted"
              >
                <FiGithub /> GitHub repository (client)
              </a>
            </div>
          </header>

          <div className="mt-12 rounded-3xl border border-line bg-surface-2 p-3 sm:p-5">
            <div className="relative aspect-[1200/630] overflow-hidden rounded-2xl border border-line">
              <Image src={p.image} alt={`${p.title} screenshot`} fill priority sizes="(min-width: 1024px) 984px, 100vw" className="object-cover" />
            </div>
          </div>

          <div className="mt-16 grid gap-12 lg:grid-cols-[1.6fr_1fr]">
            <div className="space-y-14">
              <section>
                <h2 className="text-2xl font-semibold">Overview</h2>
                <p className="mt-4 text-lg leading-relaxed text-muted">{p.description}</p>
                <ul className="mt-6 space-y-3">
                  {p.features.map((f) => (
                    <li key={f} className="flex gap-3">
                      <FiCheck className="mt-1 shrink-0 text-accent" />
                      <span className="text-ink/90">{f}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <section>
                <h2 className="flex items-center gap-3 text-2xl font-semibold">
                  <FiAlertTriangle className="text-amber-300" /> Challenges I faced
                </h2>
                <ol className="mt-6 space-y-4">
                  {p.challenges.map((c, i) => (
                    <li key={c} className="flex gap-4 rounded-2xl border border-line bg-surface p-5">
                      <span className="font-mono text-sm text-accent">{String(i + 1).padStart(2, "0")}</span>
                      <span className="leading-relaxed text-muted">{c}</span>
                    </li>
                  ))}
                </ol>
              </section>

              <section>
                <h2 className="flex items-center gap-3 text-2xl font-semibold">
                  <FiTrendingUp className="text-accent" /> Improvements & future plans
                </h2>
                <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                  {p.future.map((f) => (
                    <li key={f} className="rounded-2xl border border-dashed border-line p-5 text-muted">
                      {f}
                    </li>
                  ))}
                </ul>
              </section>
            </div>

            <aside className="h-fit space-y-6 rounded-3xl border border-line bg-surface p-6 lg:sticky lg:top-24">
              <div>
                <h2 className="font-mono text-xs uppercase tracking-wider text-muted">Main tech stack</h2>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <li key={s} className="rounded-full border border-line bg-surface-2 px-3 py-1.5 text-sm">
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-3 border-t border-line pt-6 text-sm">
                <a href={p.live} target="_blank" rel="noreferrer" className="flex items-center justify-between gap-2 hover:text-accent">
                  <span className="truncate">{p.live.replace(/^https:\/\//, "")}</span> <FiArrowUpRight className="shrink-0" />
                </a>
                <a href={p.code} target="_blank" rel="noreferrer" className="flex items-center justify-between gap-2 hover:text-accent">
                  <span className="truncate">{p.code.replace(/^https:\/\//, "")}</span> <FiGithub className="shrink-0" />
                </a>
              </div>
            </aside>
          </div>

          <Link
            href={`/projects/${next.slug}`}
            className="group mt-20 flex items-center justify-between gap-4 rounded-3xl border border-line bg-surface p-6 transition hover:border-accent/40 sm:p-8"
          >
            <span>
              <span className="block font-mono text-xs text-muted">Next project</span>
              <span className="mt-1 block text-xl font-semibold sm:text-2xl">{next.title}</span>
            </span>
            <FiArrowUpRight className="size-6 text-muted transition group-hover:text-accent" />
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
