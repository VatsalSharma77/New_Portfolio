import { motion } from "motion/react";
import { useInView } from "../hooks/useInView";

const ACHIEVEMENTS = [
  {
    icon: "🚀",
    text: "Built and maintained a hiring platform serving 1,000+ users",
  },
  {
    icon: "🔌",
    text: "Developed 150+ REST APIs supporting complex hiring workflows",
  },
  {
    icon: "⚡",
    text: "Improved backend API response time by ~30% through SQL optimization",
  },
  {
    icon: "🔐",
    text: "Implemented Google and LinkedIn SSO authentication",
  },
  {
    icon: "💳",
    text: "Integrated subscription billing and Stripe payment flows",
  },
];

export function AchievementsSection() {
  const [ref, inView] = useInView();

  return (
    <section id="achievements" className="py-20 md:py-28 bg-section-alt">
      <div ref={ref} className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <span className="label-accent">Achievements</span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mt-3">
            Key Highlights
          </h2>
          <div className="section-rule" />
        </motion.div>

        {/* Achievement cards — 2 columns on md+ */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-auto">
          {ACHIEVEMENTS.map((achievement, i) => (
            <motion.div
              key={achievement.text}
              data-ocid={`achievements.item.${i + 1}`}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.09, duration: 0.45 }}
              className="group bg-card border border-border border-l-4 border-l-primary rounded-xl p-5 flex items-start gap-4 hover:border-primary/40 hover:card-glow-hover transition-all duration-300"
            >
              {/* Icon */}
              <span className="text-2xl flex-shrink-0 mt-0.5">
                {achievement.icon}
              </span>

              {/* Text */}
              <p className="text-[0.95rem] text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors">
                {achievement.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
