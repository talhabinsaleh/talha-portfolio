type Props = {
  top: string;
  bottom: string;
  as?: "h1" | "h2";
};

export default function BigHeading({ top, bottom, as: Tag = "h2" }: Props) {
  return (
    <Tag className="font-display text-[2.6rem] leading-[0.95] font-extrabold tracking-tight uppercase sm:text-6xl lg:text-7xl">
      <span className="block">{top}</span>
      <span className="block text-faint">{bottom}</span>
    </Tag>
  );
}
