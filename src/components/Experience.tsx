import { experience } from "@/data/portfolio";
import BigHeading from "./BigHeading";
import Rows from "./Rows";

export default function Experience() {
  return (
    <section id="experience">
      <BigHeading top="Work" bottom="Experience" index="04" />
      <Rows items={experience} />
    </section>
  );
}
