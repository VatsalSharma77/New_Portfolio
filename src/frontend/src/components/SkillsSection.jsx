import { motion } from "motion/react";
import { useInView } from "../hooks/useInView";

const SKILL_GROUPS = [
  {
    category: "Frontend",
    icon: "⬡",
    color: "text-primary",
    skills: [
      { name: "React.js", emoji: "⚛️" },
      { name: "Next.js", emoji: "▲" },
      { name: "TypeScript", emoji: "🔷" },
      { name: "JavaScript", emoji: "🟡" },
      { name: "Material UI", emoji: "🎨" },
      { name: "Redux", emoji: "🔄" },
      { name: "Tailwind CSS", emoji: "🎨" },
    ],
  },
  {
    category: "Backend",
    icon: "⬢",
    color: "text-secondary",
    skills: [
      { name: "Node.js", emoji: "🟢" },
      { name: "Express.js", emoji: "🚂" },
      { name: "REST API Design", emoji: "🔌" },
      { name: "JWT Authentication", emoji: "🔐" },
    ],
  },
  {
    category: "Databases",
    icon: "◉",
    color: "text-primary",
    skills: [
      { name: "PostgreSQL", emoji: "🐘" },
      { name: "MongoDB", emoji: "🍃" },
      { name: "SQL", emoji: "📊" },
    ],
  },
  {
    category: "Integrations",
    icon: "◈",
    color: "text-secondary",
    skills: [
      { name: "Stripe  Gateway", emoji: "💳" },
      { name: "Google OAuth", emoji: "🔑" },
      { name: "LinkedIn OAuth", emoji: "💼" },
      { name: "NodeMailer", emoji: "📧" },
      { name: "Real-time Notifications", emoji: "🔔" },
    ],
  },
  {
    category: "Tools",
    icon: "◇",
    color: "text-primary",
    skills: [
      { name: "Git", emoji: "🌿" },
      { name: "GitHub", emoji: "🐙" },
      {name: "Postman", emoji: "🐘"},
      { name: "pgAdmin", emoji: "🐘" },
      { name: "VS Code", emoji: "💻" },
      { name: "Jira", emoji: "📋" },
    ],
  },
];

export function SkillsSection() {
  const [ref, inView] = useInView();

  return (
    <section id="skills" className="py-20 md:py-28 bg-section-alt">
      <div ref={ref} className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <span className="label-accent">Tech Stack</span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mt-3">
            Technologies I Work With
          </h2>
          <div className="section-rule" />
        </motion.div>

        {/* Skills grid — responsive with 5 categories */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {SKILL_GROUPS.map((group, gi) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: gi * 0.1, duration: 0.5 }}
              className="bg-card border border-border rounded-xl p-6 hover:border-primary/40 hover:card-glow transition-all duration-300 group"
            >
              {/* Category header */}
              <div className="flex items-center gap-2 mb-4">
                <span className={`text-lg leading-none ${group.color}`}>
                  {group.icon}
                </span>
                <span className="text-xs font-mono font-semibold text-muted-foreground uppercase tracking-[0.12em]">
                  {group.category}
                </span>
              </div>

              {/* Tech badges */}
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className="tag-pill flex items-center gap-1.5 hover:scale-105 transition-transform"
                  >
                    <span className="text-xs">{skill.emoji}</span>
                    {skill.name}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
       {/* Bottom note */}
<motion.p
  initial={{ opacity: 0 }}
  animate={inView ? { opacity: 1 } : {}}
  transition={{ delay: 0.5, duration: 0.5 }}
  className="mt-10 text-xs font-mono text-muted-foreground text-center"
>
  <span className="text-primary">{"// "}</span>
  Always learning, always building
</motion.p>
      </div>
    </section>
  );
}
