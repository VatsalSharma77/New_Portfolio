import { GraduationCap } from "lucide-react";
import { motion } from "motion/react";
import { useInView } from "../hooks/useInView";

const EDUCATION = [
  {
    degree: "Full Stack Web Development",
    field: "MERN Stack",
    institution: "Masai School",
    duration: "2023 – 2024",
    highlight: "Professional Training",
    details: [
      "Intensive training in React, Node.js, Express, and MongoDB",
      "Built multiple full-stack applications using the MERN stack",
      "Learned REST API design, authentication systems, and database architecture",
    ],
  },
  {
    degree: "Bachelor of Technology",
    field: "Electrical Engineering",
    institution: "Amritsar College of Engineering & Technology",
    cgpa: "8.09",
    duration: "2019 – 2023",
    highlight: "Degree",
    details: [
      "4-year undergraduate engineering program",
      "Strong foundation in analytical thinking and problem solving",
      "Graduated with CGPA 8.09 / 10",
    ],
  },
];

export function EducationSection() {
  const [ref, inView] = useInView();

  return (
    <section id="education" className="py-20 md:py-28 bg-background">
      <div ref={ref} className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <span className="label-accent">Education</span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mt-3">
            Academic Background
          </h2>
          <div className="section-rule" />
        </motion.div>

        {/* Education cards */}
        <div className="space-y-8 max-w-3xl mx-auto">
          {EDUCATION.map((edu, index) => (
            <motion.div
              key={edu.institution}
              initial={{ opacity: 0, x: -32 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="bg-card border border-border border-l-4 border-l-secondary rounded-2xl p-6 md:p-8 card-glow hover:-translate-y-1 transition-all duration-300"
            >
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-6">

                <div className="flex items-start gap-4">

                  {/* Icon */}
                  <div
                    className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{
                      background: "oklch(0.65 0.18 148 / 0.12)",
                      border: "1px solid oklch(0.65 0.18 148 / 0.25)",
                    }}
                  >
                    <GraduationCap
                      className="w-6 h-6"
                      style={{ color: "oklch(0.65 0.18 148)" }}
                    />
                  </div>

                  <div>
                    <h3 className="font-display font-bold text-xl md:text-2xl text-foreground leading-snug">
                      {edu.degree}
                    </h3>

                    <p
                      className="text-base font-semibold mt-0.5"
                      style={{ color: "oklch(0.65 0.18 148)" }}
                    >
                      {edu.field}
                    </p>

                    <p className="text-primary font-semibold text-sm mt-1">
                      {edu.institution}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col items-start sm:items-end gap-2 flex-shrink-0 ml-16 sm:ml-0">
                  <span className="font-mono text-xs text-muted-foreground bg-muted px-3 py-1.5 rounded-md">
                    {edu.duration}
                  </span>

                  {edu.cgpa && (
                    <span className="tag-green">
                      CGPA: {edu.cgpa} / 10
                    </span>
                  )}
                </div>
              </div>

              {/* Details */}
              <div className="pt-5 border-t border-border">
                <ul className="space-y-2 text-xs text-muted-foreground">
                  {edu.details.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="text-secondary font-mono">✦</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}