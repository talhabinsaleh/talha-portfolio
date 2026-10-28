import { education } from "@/data/portfolio";
import SectionHeading from "./SectionHeading";
import Timeline from "./Timeline";

export default function Education() {
  return (
    <section id="education" className="py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading index="03" label="Education" title="Educational qualification" />
        <Timeline items={education} />
      </div>
    </section>
  );
}
