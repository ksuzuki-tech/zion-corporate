export function SectionHeading({
  label,
  title,
  subtitle,
}: {
  label: string;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="mb-16 md:mb-20">
      <p className="text-[10px] tracking-[0.4em] text-black/25 mb-5">
        {label}
      </p>
      <h2
        className="text-3xl md:text-4xl font-bold text-black mb-5"
        style={{ letterSpacing: "-0.01em" }}
      >
        {title}
      </h2>
      <p className="text-[13px] md:text-[15px] text-black/35 max-w-xl">
        {subtitle}
      </p>
    </div>
  );
}
