import { skills } from "@/data/portfolio";

const names = [...new Set(skills.flatMap((g) => g.items.map((i) => i.name)))];

export default function Marquee() {
  return (
    <div className="relative overflow-hidden border-y border-line py-5 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      <ul className="animate-marquee flex w-max gap-10">
        {[...names, ...names].map((n, i) => (
          <li key={i} className="flex items-center gap-10 font-display text-xl font-semibold whitespace-nowrap text-muted uppercase">
            {n}
            <span className="text-accent">✦</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
