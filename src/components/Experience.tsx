import { experience } from "@/data/portfolio";
import BigHeading from "./BigHeading";
import Timeline from "./Timeline";

export default function Experience() {
  return (
    <section id="experience">
      <BigHeading top="Work" bottom="Experience" />
      <Timeline items={experience} />
    </section>
  );
}
