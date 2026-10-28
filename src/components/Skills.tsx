import { FiCode, FiDatabase, FiTool, FiPlus } from "react-icons/fi";
import { skills } from "@/data/portfolio";
import SectionHeading from "./SectionHeading";

const icons = [FiCode, FiDatabase, FiTool, FiPlus];

export default function Skills() {
  return (
    <section id="skills" className="border-y border-line bg-surface/40 py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading index="02" label="Skills" title="Tools I build with" />

        <div className="grid gap-5 sm:grid-cols-2">
          {skills.map((group, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div
                key={group.title}
                className="rounded-2xl border border-line bg-surface p-6 transition-colors hover:border-accent/40"
              >
                <div className="flex items-center gap-3">
                  <span className="grid size-9 place-items-center rounded-lg bg-accent/10 text-accent">
                    <Icon size={17} />
                  </span>
                  <h3 className="font-semibold">{group.title}</h3>
                </div>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-line bg-surface-2 px-3 py-1.5 text-sm text-ink/90"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
