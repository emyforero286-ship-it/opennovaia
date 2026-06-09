type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function SectionHeader({ eyebrow, title, description }: SectionHeaderProps) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p className="text-sm font-black uppercase tracking-[0.32em] text-nova-bright">{eyebrow}</p>
      <h2 className="mt-4 text-3xl font-semibold leading-tight sm:text-5xl">{title}</h2>
      <div className="mx-auto mt-4 h-1 w-12 rounded-full bg-gradient-to-r from-nova-gold to-nova-amber" />
      <p className="mt-5 text-base leading-7 opacity-70 sm:text-lg">{description}</p>
    </div>
  );
}
