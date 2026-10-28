import { FlipChars, KineticHeading } from "./motion/Text";

type Props = {
  top: string;
  bottom: string;
  as?: "h1" | "h2";
  index?: string;
};

export default function BigHeading({ top, bottom, as = "h2", index }: Props) {
  if (as === "h1") return <FlipChars lines={[{ text: top }, { text: bottom, className: "text-faint" }]} />;
  return <KineticHeading top={top} bottom={bottom} index={index} />;
}
