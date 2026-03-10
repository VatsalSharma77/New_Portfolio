import { ExternalLink, Github } from "lucide-react";
import { motion } from "motion/react";
import { useInView } from "../hooks/useInView";

const PERSONAL_PROJECTS = [
  {
    number: "01",
    title: "Task Management (Todo) App",
    subtitle: "MERN Stack",
    description:
      "A full-stack task management application with authentication and complete CRUD operations for managing user tasks.",
    features: [
      "User signup and login authentication system",
      "Complete CRUD operations for tasks (create, read, update, delete)",
      "RESTful APIs built with Node.js and Express.js",
      "MongoDB integration with user-based data isolation",
      "Basic authorization ensuring users access only their own tasks",
    ],
    tags: ["MongoDB", "Express.js", "React.js", "Node.js"],
    github: "https://github.com/VatsalSharma77/todo_app",
    demo: null,
  },
  {
    number: "02",
    title: "Walmart Clone",
    subtitle: "MERN Stack",
    description:
      "An early-stage e-commerce web application inspired by Walmart implementing core shopping functionalities.",
    features: [
      "Product listings, product detail pages, and category browsing",
      "Cart functionality to add, remove, and update product quantities",
      "Basic checkout flow to simulate order placement",
      "Hands-on implementation of full-stack architecture with REST APIs",
      "Database modeling for e-commerce product and user data",
    ],
    tags: ["MongoDB", "Express.js", "React.js", "Node.js"],
    github: "https://github.com/VatsalSharma77/walmart_clone",
    demo: null,
  },
  {
    number: "03",
    title: "YouTube Clone",
    subtitle: "React.js (Frontend)",
    description:
      "A responsive frontend clone of YouTube that fetches and displays videos dynamically using the YouTube Data API.",
    features: [
      "Video search using the YouTube Data API",
      "Dynamic pages for videos, channels, and search results",
      "Routing and reusable React components",
      "Responsive layouts for improved user experience",
      "Focus on UI/UX, performance optimization, and clean code structure",
    ],
    tags: ["React.js", "YouTube Data API", "Tailwind CSS"],
    github: "https://github.com/VatsalSharma77/Youtube_CLone",
    demo: null,
  },
];

const ocidMap = [
  {
    card: "personal-project.item.1",
    github: "personal-project.github.button.1",
    demo: "personal-project.demo.button.1",
  },
  {
    card: "personal-project.item.2",
    github: "personal-project.github.button.2",
    demo: "personal-project.demo.button.2",
  },
  {
    card: "personal-project.item.3",
    github: "personal-project.github.button.3",
    demo: "personal-project.demo.button.3",
  },
];

function PersonalProjectCard({ project, index, inView }) {
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
        <span className="tag-pill">Personal</span>
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
        {project.demo && (
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
        )}
      </div>
    </motion.article>
  );
}

export function PersonalProjectsSection() {
  const [ref, inView] = useInView();

  return (
    <section id="personal-projects" className="py-20 md:py-28 bg-section-alt">
      <div ref={ref} className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-14 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4"
        >
          <div>
            <span className="label-accent">Personal Projects</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mt-3">
              Side Projects & Learning
            </h2>
            <div className="section-rule" />
          </div>

          <a
            href="https://github.com/VatsalSharma77"
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
          {PERSONAL_PROJECTS.map((project, i) => (
            <PersonalProjectCard
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
