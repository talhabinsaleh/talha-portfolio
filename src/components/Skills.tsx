import { learning, skills } from "@/data/portfolio";
import BigHeading from "./BigHeading";

export default function Skills() {
  return (
    <section id="skills">
      <BigHeading top="Skills &" bottom="Tools" />

      <div className="mt-10 space-y-10">
        {skills.map((group) => (
          <div key={group.title}>
            <h3 className="mb-4 flex items-center gap-3 font-display font-semibold">
              {group.title}
              <span className="h-px flex-1 bg-line" />
              <span className="font-mono text-xs font-normal text-muted">{String(group.items.length).padStart(2, "0")}</span>
            </h3>
            <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 xl:grid-cols-4">
              {group.items.map(({ name, icon: Icon, color }) => (
                <li
                  key={name}
                  className="group flex items-center gap-3 rounded-2xl border border-line bg-surface p-3 transition hover:-translate-y-0.5 hover:border-accent/40"
                >
                  <span
                    className="grid size-11 shrink-0 place-items-center rounded-xl transition-transform group-hover:scale-110"
                    style={{ backgroundColor: `${color}1f`, color }}
                  >
                    <Icon size={22} />
                  </span>
                  <span className="text-sm leading-tight font-medium">{name}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-10 flex flex-col gap-3 rounded-3xl border border-dashed border-lime/40 bg-lime/5 p-6 sm:flex-row sm:items-center">
        <p className="shrink-0 font-display text-sm font-semibold text-lime uppercase">Currently learning →</p>
        <ul className="flex flex-wrap gap-2">
          {learning.map((item) => (
            <li key={item} className="rounded-full border border-line bg-surface px-3 py-1.5 text-sm text-muted">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
