import { learning, skills } from "@/data/portfolio";
import SectionHeading from "./SectionHeading";

export default function Skills() {
  return (
    <section id="skills" className="border-y border-line bg-surface/40 py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading index="02" label="Skills" title="Tools I build with" />

        <div className="space-y-12">
          {skills.map((group) => (
            <div key={group.title}>
              <h3 className="mb-5 flex items-center gap-3 font-semibold">
                {group.title}
                <span className="h-px flex-1 bg-line" />
                <span className="font-mono text-xs font-normal text-muted">{group.items.length}</span>
              </h3>
              <ul className="grid grid-cols-3 gap-3 sm:grid-cols-4 lg:grid-cols-8">
                {group.items.map(({ name, icon: Icon, color }) => (
                  <li
                    key={name}
                    className="group flex flex-col items-center gap-3 rounded-2xl border border-line bg-surface px-2 py-5 text-center transition hover:-translate-y-1 hover:border-accent/40"
                  >
                    <span
                      className="grid size-12 place-items-center rounded-xl transition-transform group-hover:scale-110"
                      style={{ backgroundColor: `${color}1a`, color }}
                    >
                      <Icon size={26} />
                    </span>
                    <span className="text-xs leading-tight text-ink/90 sm:text-sm">{name}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-3 rounded-2xl border border-dashed border-line p-6 sm:flex-row sm:items-center">
          <p className="shrink-0 font-mono text-sm text-accent">Currently learning →</p>
          <ul className="flex flex-wrap gap-2">
            {learning.map((item) => (
              <li key={item} className="rounded-full border border-line px-3 py-1.5 text-sm text-muted">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
