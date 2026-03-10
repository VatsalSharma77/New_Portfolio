import { motion } from "motion/react";
import { useInView } from "../hooks/useInView";

const HIGHLIGHTS = [
  {
    emoji: "🏗️",
    title: "Scalable Platforms",
    description:
      "Built hiring platforms serving 1,000+ active users with real-time workflows.",
  },
  {
    emoji: "🗄️",
    title: "Database Design",
    description:
      "Designed 100+ database tables and 200+ PostgreSQL functions from scratch.",
  },
  {
    emoji: "🔌",
    title: "REST API Development",
    description:
      "Developed 150+ REST APIs supporting complex hiring and assessment workflows.",
  },
  {
    emoji: "💳",
    title: "Payment Integrations",
    description:
      "Integrated subscription billing, payment gateways, and Stripe payment flows.",
  },
  
];

export function AboutSection() {
  const [ref, inView] = useInView();

  return (
    <section id="about" className="py-20 md:py-28 bg-background">
      <div ref={ref} className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <span className="label-accent">About Me</span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mt-3">
            Passionate about building great products
          </h2>
          <div className="section-rule" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left — Bio */}
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{
              duration: 0.55,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="space-y-5"
          >
            <p className="text-muted-foreground leading-relaxed text-[0.95rem]">
              Full Stack MERN Developer with 1.5+ years of experience building scalable web applications, REST APIs, and backend systems using React.js, Node.js, Express.js, and PostgreSQL.
            </p>
            <p className="text-muted-foreground leading-relaxed text-[0.95rem]">
              Experienced in designing REST APIs, optimizing complex SQL queries, integrating payment systems like Stripe, and developing complete full-stack platforms for hiring and assessment workflows. Passionate about building efficient backend systems,
              clean UI experiences, and exploring AI-driven application
              features.
            </p>

            {/* Quick info pills */}
            <div className="flex flex-wrap gap-2 pt-2">
              {[
                "React",
                "Node.js",
                "TypeScript",
                "PostgreSQL",
                "MongoDB",
                "Stripe",
              ].map((tech) => (
                <span key={tech} className="tag-pill">
                  {tech}
                </span>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              {[
                { value: "1.5+", label: "Years Exp." },
                { value: "150+", label: "APIs Built" },
                { value: "500+", label: "Users" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="flex flex-col items-center py-4 rounded-xl border border-border bg-card card-glow text-center"
                >
                  <span className="font-display text-xl font-bold text-gradient leading-tight">
                    {stat.value}
                  </span>
                  <span className="text-[11px] text-muted-foreground mt-1 font-mono">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — Highlight cards */}
          <motion.div
            initial={{ opacity: 0, x: 28 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{
              duration: 0.55,
              delay: 0.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="grid sm:grid-cols-2 gap-4"
          >
            {HIGHLIGHTS.map((h, i) => (
              <motion.div
                key={h.title}
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.45, delay: 0.25 + i * 0.08 }}
                className="bg-card border border-border rounded-xl p-5 hover:border-primary/40 hover:card-glow-hover transition-all duration-300 group"
              >
                <div className="text-2xl mb-3">{h.emoji}</div>
                <h3 className="font-display font-semibold text-sm text-foreground mb-1.5 group-hover:text-primary transition-colors">
                  {h.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {h.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
