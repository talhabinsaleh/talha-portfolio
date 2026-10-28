import { education } from "@/data/portfolio";
import BigHeading from "./BigHeading";
import Timeline from "./Timeline";

export default function Education() {
  return (
    <section id="education">
      <BigHeading top="Education" bottom="& Learning" index="03" />
      <Timeline items={education} />
    </section>
  );
}
