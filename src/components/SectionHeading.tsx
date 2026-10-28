type Props = {
  index: string;
  label: string;
  title: string;
};

export default function SectionHeading({ index, label, title }: Props) {
  return (
    <div className="mb-12">
      <p className="font-mono text-sm text-accent">
        {index} <span className="text-muted">/ {label}</span>
      </p>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>
    </div>
  );
}
