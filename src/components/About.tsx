import { FiArrowUpRight } from "react-icons/fi";
import { about, profile } from "@/data/portfolio";
import SectionHeading from "./SectionHeading";

const facts = [
  { label: "Focus", value: "Full-stack web apps" },
  { label: "Stack", value: "Next.js · TypeScript · MongoDB" },
  { label: "Education", value: "B.Sc. CSE, Daffodil Institute of IT" },
  { label: "Based in", value: profile.location },
];

export default function About() {
  return (
    <section id="about" className="py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading index="01" label="About" title="Developer who cares how the web performs" />

        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          <div className="space-y-5 text-lg leading-relaxed text-muted">
            {about.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
            <a
              href={profile.seoPortfolio}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 text-base text-accent hover:underline"
            >
              Looking for SEO work? See my SEO portfolio
              <FiArrowUpRight />
            </a>
          </div>

          <dl className="h-fit divide-y divide-line rounded-2xl border border-line bg-surface">
            {facts.map((f) => (
              <div key={f.label} className="flex flex-col gap-1 px-6 py-5">
                <dt className="font-mono text-xs uppercase tracking-wider text-muted">{f.label}</dt>
                <dd className="font-medium">{f.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
