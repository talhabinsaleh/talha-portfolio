import { FiArrowUpRight } from "react-icons/fi";
import { about, profile } from "@/data/portfolio";
import SectionHeading from "./SectionHeading";

const facts = [
  { label: "Designation", value: profile.role },
  { label: "Stack", value: "Next.js · TypeScript · MongoDB" },
  { label: "Education", value: "B.Sc. CSE, Daffodil Institute of IT" },
  { label: "Based in", value: profile.location },
];

export default function About() {
  return (
    <section id="about" className="py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading index="01" label="About me" title="From WordPress sites to full-stack apps" />

        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          <div className="space-y-10">
            <div>
              <h3 className="font-mono text-sm text-accent">My programming journey</h3>
              <div className="mt-3 space-y-4 text-lg leading-relaxed text-muted">
                {about.journey.map((p) => (
                  <p key={p.slice(0, 24)}>{p}</p>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-mono text-sm text-accent">Work I enjoy</h3>
              <div className="mt-3 space-y-4 text-lg leading-relaxed text-muted">
                {about.work.map((p) => (
                  <p key={p.slice(0, 24)}>{p}</p>
                ))}
              </div>
            </div>

            {about.hobbies.length > 0 && (
              <div>
                <h3 className="font-mono text-sm text-accent">Outside of code</h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {about.hobbies.map((h) => (
                    <li key={h} className="rounded-full border border-line bg-surface px-4 py-2 text-sm">
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <a
              href={profile.seoPortfolio}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 text-accent hover:underline"
            >
              Looking for SEO work? See my SEO portfolio
              <FiArrowUpRight />
            </a>
          </div>

          <dl className="h-fit divide-y divide-line rounded-2xl border border-line bg-surface lg:sticky lg:top-24">
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
