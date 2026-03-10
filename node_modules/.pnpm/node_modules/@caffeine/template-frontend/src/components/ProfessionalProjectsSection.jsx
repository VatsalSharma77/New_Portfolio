import { Lock } from "lucide-react";
import { motion } from "motion/react";
import { useInView } from "../hooks/useInView";

const PROFESSIONAL_PROJECTS = [
  {
    number: "01",
    title: "Hiring Platform",
    subtitle: "Recruitment & Assessment System",
    description:
      "A full-stack recruitment platform enabling companies to create job assessments, evaluate candidates, and manage hiring workflows end-to-end.",
    features: [
      "Job creation and candidate assessment workflows",
      "AI-based candidate scoring improving recruiter screening speed",
      "Video-based candidate responses for remote evaluations",
      "Real-time notifications for recruiters and candidates",
      "Role-based access control with subscription plan management",
    ],
    tags: [
      "React.js",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Redux",
      "Material UI",
    ],
    confidential: true,
  },
  {
    number: "02",
    title: "Server Allocation Platform",
    subtitle: "Server Management Dashboard",
    description:
      "A server management platform that allows users to purchase and manage server resources through an integrated dashboard with billing and monitoring.",
    features: [
      "Server purchase and allocation workflow",
      "Integrated billing and payment system",
      "Automated email notifications for system events",
      "Responsive dashboard for resource monitoring",
      "REST APIs for server resource management",
    ],
    tags: ["TypeScript", "Next.js", "Node.js", "PostgreSQL"],
    confidential: true,
  },
];

const ocidMap = [
  { card: "prof-project.item.1" },
  { card: "prof-project.item.2" },
];

function ProfessionalProjectCard({ project, index, inView }) {
  const ocids = ocidMap[index];

  return (
    <motion.article
      data-ocid={ocids.card}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.14, duration: 0.55 }}
      className="group bg-card border border-border rounded-2xl p-6 flex flex-col hover:-translate-y-2 transition-all duration-300 hover:card-glow-hover hover:border-primary/30"
    >
      {/* Top row: number + Professional badge */}
      <div className="flex items-center justify-between mb-4">
        <span className="font-mono text-3xl font-bold text-muted-foreground/30 leading-none">
          {project.number}
        </span>
        <span className="tag-green">Professional</span>
      </div>

      {/* Title */}
      <div className="mb-3">
        <p className="text-[10px] font-mono text-muted-foreground uppercase tracking-[0.12em] mb-1">
          {project.subtitle}
        </p>
        <h3 className="font-display font-bold text-lg text-foreground group-hover:text-primary transition-colors leading-snug">
          {project.title}
        </h3>
      </div>

      {/* Description */}
      <p className="text-muted-foreground text-sm leading-relaxed mb-4">
        {project.description}
      </p>

      <p className="text-xs text-muted-foreground mb-3">
        Role: Full Stack Developer
      </p>

      {/* Features */}
      <ul className="space-y-1.5 mb-4 flex-1">
        {project.features.map((feature) => (
          <li
            key={feature}
            className="text-xs text-muted-foreground flex items-start gap-2"
          >
            <span className="text-primary mt-0.5 flex-shrink-0 font-mono">
              ✦
            </span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      {/* Tech tags */}
      <div className="flex flex-wrap gap-1.5 mb-5">
        {project.tags.map((tag) => (
          <span key={tag} className="tag-pill">
            {tag}
          </span>
        ))}
      </div>

      {/* Confidential notice */}
      {project.confidential && (
        <div
          className="flex items-start gap-3 rounded-lg px-4 py-3 border"
          style={{
            background: "oklch(0.62 0.16 55 / 0.07)",
            borderColor: "oklch(0.62 0.16 55 / 0.25)",
          }}
        >
          <Lock
            className="w-4 h-4 flex-shrink-0 mt-0.5"
            style={{ color: "oklch(0.72 0.15 55)" }}
          />
          <div>
            <span
              className="text-[10px] font-mono font-semibold uppercase tracking-widest block mb-0.5"
              style={{ color: "oklch(0.72 0.15 55)" }}
            >
              Confidential
            </span>
            <p className="text-xs text-muted-foreground">
              Source code not publicly available due to company policy.
            </p>
          </div>
        </div>
      )}
    </motion.article>
  );
}

export function ProfessionalProjectsSection() {
  const [ref, inView] = useInView();

  return (
    <section id="projects" className="py-20 md:py-28 bg-background">
      <div ref={ref} className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <span className="label-accent">Professional Experience</span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mt-3">
            Projects from Professional Experience
          </h2>
          <div className="section-rule" />
        </motion.div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6  mx-auto">
          {PROFESSIONAL_PROJECTS.map((project, i) => (
            <ProfessionalProjectCard
              key={project.title}
              project={project}
              index={i}
              inView={inView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
