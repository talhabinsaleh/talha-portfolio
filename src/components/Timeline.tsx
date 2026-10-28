import type { TimelineItem } from "@/data/portfolio";

export default function Timeline({ items }: { items: TimelineItem[] }) {
  return (
    <ol className="mt-10 divide-y divide-line border-y border-line">
      {items.map((item) => (
        <li key={item.title} className="group grid gap-2 py-7 sm:grid-cols-[1fr_auto] sm:gap-8">
          <div>
            <h3 className="font-display text-xl font-semibold transition-colors group-hover:text-accent">{item.title}</h3>
            <p className="mt-1 font-medium text-ink/80">{item.place}</p>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">{item.text}</p>
          </div>
          <p className="order-first font-mono text-xs tracking-wider text-accent uppercase sm:order-none sm:pt-1.5 sm:text-right">
            {item.period}
          </p>
        </li>
      ))}
    </ol>
  );
}
