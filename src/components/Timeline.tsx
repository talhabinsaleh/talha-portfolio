import type { TimelineItem } from "@/data/portfolio";

export default function Timeline({ items }: { items: TimelineItem[] }) {
  return (
    <ol className="relative ml-1 border-l border-line">
      {items.map((item) => (
        <li key={item.title} className="relative pb-12 pl-8 last:pb-0">
          <span className="absolute -left-[5px] top-1.5 size-2.5 rounded-full bg-accent ring-4 ring-bg" />
          <p className="font-mono text-xs text-muted">{item.period}</p>
          <h3 className="mt-2 text-xl font-semibold">{item.title}</h3>
          <p className="text-accent">{item.place}</p>
          <p className="mt-2 max-w-2xl leading-relaxed text-muted">{item.text}</p>
        </li>
      ))}
    </ol>
  );
}
