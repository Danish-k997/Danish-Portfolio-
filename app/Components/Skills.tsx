// components/Skills.tsx
import { skillGroups } from "../../data/Skills";
import ScrollReveal from "./ScrollReveal";
import SkillCard from "./SkillsCrat";

const Skills = () => {
  return (
    <ScrollReveal>
      <section
        id="skills"
        className="bg-background max-w-container-max mx-auto px-gutter py-10 md:py-16"
      >
        <div className="text-center mb-14">
          <p className="text-label-mono font-label-mono text-primary uppercase tracking-widest mb-4">
            Technical Arsenal
          </p>
          <h2 className="text-headline-lg font-headline-lg text-on-surface">
            Core Competencies
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillGroups.map((group) => (
            <SkillCard
              key={group.title}
              title={group.title}
              skills={group.skills}
            />
          ))}
        </div>
      </section>
    </ScrollReveal>
  );
};

export default Skills;
