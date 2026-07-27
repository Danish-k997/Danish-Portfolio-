
type SkillGroup = {
  title: string;
  icon: string; 
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  { title: "Frontend", icon: "devices", skills: ["React", "JavaScript", "Tailwind CSS", "Next.js", "TypeScript"] },
  { title: "Backend", icon: "dns", skills: ["Node.js", "Express.js", "Python", "PostgreSQL", "Prisma ORM","MongoDB"] },
  { title: "DevOps", icon: "cloud", skills: ["Docker", "Kubernetes", "AWS", "CI/CD"] },
];