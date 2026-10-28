import { journey } from "@/data/portfolio";
import SectionHeading from "./SectionHeading";

export default function Journey() {
  return (
    <section id="journey" className="border-y border-line bg-surface/40 py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading index="04" label="Journey" title="Experience & education" />

        <ol className="relative ml-1 border-l border-line">
          {journey.map((item) => (
            <li key={item.title} className="relative pb-12 pl-8 last:pb-0">
              <span className="absolute -left-[5px] top-1.5 size-2.5 rounded-full bg-accent ring-4 ring-bg" />
              <p className="font-mono text-xs text-muted">{item.period}</p>
              <h3 className="mt-2 text-xl font-semibold">{item.title}</h3>
              <p className="text-accent">{item.place}</p>
              <p className="mt-2 max-w-2xl leading-relaxed text-muted">{item.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
