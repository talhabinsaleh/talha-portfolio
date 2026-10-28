import { experience } from "@/data/portfolio";
import SectionHeading from "./SectionHeading";
import Timeline from "./Timeline";

export default function Experience() {
  return (
    <section id="experience" className="border-y border-line bg-surface/40 py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading index="04" label="Experience" title="Where I've worked" />
        <Timeline items={experience} />
      </div>
    </section>
  );
}
