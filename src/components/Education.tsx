import { education } from "@/data/portfolio";
import BigHeading from "./BigHeading";
import Rows from "./Rows";

export default function Education() {
  return (
    <section id="education">
      <BigHeading top="Education" bottom="& Learning" index="03" />
      <Rows items={education} />
    </section>
  );
}
