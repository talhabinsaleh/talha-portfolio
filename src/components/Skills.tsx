import { learning, skills } from "@/data/portfolio";
import BigHeading from "./BigHeading";
import Tile from "./motion/Tile";

const spans = ["lg:col-span-7", "lg:col-span-5", "lg:col-span-7", "lg:col-span-5"];

export default function Skills() {
  return (
    <section id="skills">
      <BigHeading top="Skills &" bottom="Tools" index="02" />

      <div className="mt-10 grid grid-cols-6 gap-3 lg:grid-cols-12">
        {skills.map((group, gi) => (
          <Tile key={group.title} delay={gi * 0.06} className={`col-span-6 p-6 sm:p-7 ${spans[gi]}`}>
            <div className="flex items-baseline justify-between">
              <h3 className="font-display text-xl font-semibold">{group.title}</h3>
              <span className="font-mono text-xs text-muted">{String(group.items.length).padStart(2, "0")}</span>
            </div>
            <ul className="mt-6 grid grid-cols-3 gap-2 sm:grid-cols-4">
              {group.items.map(({ name, icon: Icon, color }) => (
                <li
                  key={name}
                  className="group/skill flex flex-col items-center gap-2 rounded-2xl border border-line bg-bg/40 px-1 py-4 text-center transition-colors hover:border-[var(--c)]"
                  style={{ ["--c" as string]: color }}
                >
                  <Icon
                    size={26}
                    style={{ color }}
                    className="transition-transform duration-300 group-hover/skill:-translate-y-1 group-hover/skill:scale-110"
                  />
                  <span className="text-xs leading-tight text-ink/80">{name}</span>
                </li>
              ))}
            </ul>
          </Tile>
        ))}

        <Tile delay={0.1} className="col-span-6 flex flex-col gap-4 border-lime/30 bg-lime/[0.06] p-6 sm:flex-row sm:items-center lg:col-span-12">
          <p className="shrink-0 font-display text-sm font-semibold text-lime uppercase">Currently learning →</p>
          <ul className="flex flex-wrap gap-2">
            {learning.map((item) => (
              <li key={item} className="rounded-full border border-lime/20 px-3 py-1.5 text-sm text-ink/80">
                {item}
              </li>
            ))}
          </ul>
        </Tile>
      </div>
    </section>
  );
}
