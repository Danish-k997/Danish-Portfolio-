// components/SkillCard.tsx
type SkillCardProps = {
  title: string;
  skills: string[];
};

const SkillCard = ({ title, skills }: SkillCardProps) => {
  return (
    <div className="group relative overflow-hidden rounded-[1.5rem] border border-outline-variant bg-surface-container p-8 min-h-[280px] transition-all duration-500 ease-out hover:-translate-y-1 hover:border-primary/80 hover:bg-surface-container-highest hover:shadow-[0_30px_90px_-50px_rgba(46,232,178,0.32)]">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      <h3 className="text-headline-md font-headline-md text-on-surface mb-6 transition-colors duration-500 group-hover:text-primary">
        {title}
      </h3>
      <ul className="flex flex-wrap gap-3">
        {skills.map((skill) => (
          <li
            key={skill}
            className="px-4 py-2 rounded-full bg-surface-container-high text-on-surface/80 font-label-mono text-[12px] uppercase tracking-[0.15em] transition-all duration-300 hover:bg-primary/10 hover:text-primary"
          >
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillCard;
