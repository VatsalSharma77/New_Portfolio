import { ExternalLink, Github } from "lucide-react";
import { motion } from "motion/react";
import { useInView } from "../hooks/useInView";

const PROJECTS = [
  {
    number: "01",
    title: "Payment SaaS Platform",
    subtitle: "Subscription & Payment Management",
    description:
      "A full-stack SaaS platform enabling users to manage subscriptions and payments with Stripe Connect. Features real-time payment history, webhook handling, and a clean admin dashboard.",
    features: [
      "Stripe payment integration",
      "Subscription management",
      "Secure backend APIs",
      "Payment history dashboard",
    ],
    tags: ["React", "Node.js", "PostgreSQL", "Stripe"],
    github: "https://github.com/vatsal-sharma",
    demo: "https://example.com",
  },
  {
    number: "02",
    title: "Job Assessment Platform",
    subtitle: "Talent Evaluation System",
    description:
      "A platform for companies to create structured job assessments with multi-step forms, video response questions, and AI-powered skill suggestions for candidate evaluation.",
    features: [
      "Multi-step job creation forms",
      "Video response questions",
      "AI-based skill suggestions",
      "Email notifications",
    ],
    tags: ["React", "Node.js", "MongoDB"],
    github: "https://github.com/vatsal-sharma",
    demo: "https://example.com",
  },
  {
    number: "03",
    title: "Invoice Analytics Dashboard",
    subtitle: "Data Insights & Reporting",
    description:
      "A data analytics dashboard built to analyze invoice records using complex PostgreSQL queries, data transformation pipelines, and interactive visualization with pagination.",
    features: [
      "PostgreSQL database design",
      "Data cleaning & transformation",
      "Pagination & analytics",
      "Insights dashboard",
    ],
    tags: ["React", "Node.js", "PostgreSQL"],
    github: "https://github.com/vatsal-sharma",
    demo: "https://example.com",
  },
];

const ocidMap = [
  {
    card: "project.item.1",
    github: "project.github.button.1",
    demo: "project.demo.button.1",
  },
  {
    card: "project.item.2",
    github: "project.github.button.2",
    demo: "project.demo.button.2",
  },
  {
    card: "project.item.3",
    github: "project.github.button.3",
    demo: "project.demo.button.3",
  },
];

function ProjectCard({ project, index, inView }) {
  const ocids = ocidMap[index];

  return (
    <motion.article
      data-ocid={ocids.card}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.12, duration: 0.55 }}
      className="group bg-card border border-border rounded-2xl p-6 flex flex-col hover:-translate-y-1 transition-all duration-300 hover:card-glow-hover hover:border-primary/30"
    >
      {/* Top row: number + badge */}
      <div className="flex items-center justify-between mb-4">
        <span className="font-mono text-3xl font-bold text-muted-foreground/30 leading-none">
          {project.number}
        </span>
        <span className="tag-green">Featured</span>
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

      {/* Buttons */}
      <div className="flex gap-2 pt-4 border-t border-border">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          data-ocid={ocids.github}
          className="flex-1 flex items-center justify-center gap-1.5 py-2 text-xs font-semibold text-muted-foreground hover:text-foreground border border-border rounded-lg hover:border-primary/40 transition-all duration-200"
        >
          <Github className="w-3.5 h-3.5" />
          GitHub
        </a>
        <a
          href={project.demo}
          target="_blank"
          rel="noopener noreferrer"
          data-ocid={ocids.demo}
          className="flex-1 flex items-center justify-center gap-1.5 py-2 text-xs font-semibold bg-primary/10 text-primary rounded-lg hover:bg-primary/20 transition-all duration-200 border border-primary/20"
        >
          <ExternalLink className="w-3.5 h-3.5" />
          Live Demo
        </a>
      </div>
    </motion.article>
  );
}

export function ProjectsSection() {
  const [ref, inView] = useInView();

  return (
    <section id="projects" className="py-20 md:py-28 bg-background">
      <div ref={ref} className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-14 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4"
        >
          <div>
            <span className="label-accent">Projects</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mt-3">
              Featured Work
            </h2>
            <div className="section-rule" />
          </div>

          <a
            href="https://github.com/vatsal-sharma"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 border border-border text-sm font-semibold text-muted-foreground rounded-lg hover:border-primary/40 hover:text-primary transition-all duration-200 self-start sm:self-auto"
          >
            <Github className="w-4 h-4" />
            GitHub Profile
          </a>
        </motion.div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((project, i) => (
            <ProjectCard
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
