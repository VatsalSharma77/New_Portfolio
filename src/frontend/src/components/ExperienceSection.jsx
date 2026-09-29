import { motion } from "motion/react";
import { useInView } from "../hooks/useInView";

const EXPERIENCES = [
  {
    role: "Senior Developer",
    company: "Dataabsolute Technologies Pvt. Ltd.",
    duration: "Mar 2026 – Present",
    type: "Full-time",
    responsibilities: [
      "Developed and enhanced the Grizzly MEP Employee Portal, a full-stack app using React.js, TypeScript, Node.js, and Express.js for employee directories, company content, document libraries, careers, and internal approval workflows",
      "Integrated Microsoft Graph API and SharePoint Online through backend services to manage employee directory data, organizational structures, documents, news, and career applications",
      "Worked with Azure SQL for employee authentication and application data, building REST APIs and backend services that securely connect frontend workflows with enterprise data sources",
      "Supported Azure deployments and CI/CD using Azure Static Web Apps, Azure App Service, and GitHub Actions with automated build, testing, and deployment workflows",
      "Monitored applications and infrastructure with Grafana, building and reviewing dashboards and analyzing metrics and logs to catch performance and operational issues",
    ],
    tech: [
      "React.js",
      "TypeScript",
      "Node.js",
      "Express.js",
      "Azure SQL",
      "SharePoint",
      "Microsoft Graph",
      "Azure",
      "GitHub Actions",
      "Grafana",
    ],
  },
  {
    role: "Full Stack Developer",
    company: "Sogofy Biz Tech Pvt. Ltd.",
    duration: "Aug 2024 – Feb 2026",
    type: "Full-time",
    responsibilities: [
      "Developed scalable REST APIs using Node.js and Express for recruitment workflows",
      "Designed PostgreSQL database schemas and optimized SQL queries",
      "Built responsive recruiter dashboards using React.js and Redux",
      "Integrated Stripe payment gateway and OAuth authentication systems",
      "Maintained production deployments and resolved production bugs",
      "Designed and maintained 100+ database tables, 200+ PostgreSQL functions, and 150+ REST APIs, and improved API response times by 30% through query and backend optimization",
      "Implemented secure authentication and access control with Google & LinkedIn SSO, OTP-based login, role-based permissions, and subscription-based feature controls",
      "Integrated automated email workflows, real-time and scheduled notifications, and AI APIs for candidate scoring, skill matching, and interview workflows",
      "Handled client communication across requirements, delivery, and enhancements",
    ],
    tech: [
      "React.js",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Stripe",
      "Redux",
      "REST APIs",
      "TypeScript",
      "AI APIs",
    ],
  },
  {
    role: "Maintenance Engineering Intern",
    company: "Adani Power",
    duration: "Jan 2023 – May 2023",
    type: "Internship",
    responsibilities: [
      "Assisted engineers in maintenance of electrical equipment in power plant operations",
      "Supported inspection and troubleshooting of electrical systems",
      "Worked with senior engineers to understand industrial safety and operational procedures",
    ],
    tech: ["Electrical Maintenance", "Equipment Diagnostics", "Industrial Safety"],
  },
];

export function ExperienceSection() {
  const [ref, inView] = useInView();

  return (
    <section id="experience" className="py-20 md:py-28 bg-section-alt">
      <div ref={ref} className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <span className="label-accent">Experience</span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mt-3">
            Work History
          </h2>
          <div className="section-rule" />
        </motion.div>

        {/* Experience timeline */}
        <div className="space-y-8 max-w-3xl mx-auto">
          {EXPERIENCES.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: -32 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="bg-card border border-border border-l-4 border-l-primary rounded-2xl p-6 md:p-8 card-glow hover:-translate-y-1 transition-all duration-300"
            >
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-6">
                <div>
                  <h3 className="font-display font-bold text-xl md:text-2xl text-foreground leading-snug">
                    {exp.role}
                  </h3>

                  <div className="flex flex-wrap items-center gap-2 mt-1.5">
                    <span className="text-primary font-semibold text-base">
                      {exp.company}
                    </span>
                  </div>
                </div>

                <div className="flex flex-col items-start sm:items-end gap-1.5 flex-shrink-0">
                  <span className="font-mono text-xs text-muted-foreground bg-muted px-3 py-1.5 rounded-md">
                    {exp.duration}
                  </span>
                  <span className="font-mono text-xs text-muted-foreground">
                    {exp.type}
                  </span>
                </div>
              </div>

              {/* Responsibilities */}
              <ul className="space-y-3 mb-6">
                {exp.responsibilities.map((resp, i) => (
                  <motion.li
                    key={resp}
                    initial={{ opacity: 0, x: -16 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.3 + i * 0.08, duration: 0.4 }}
                    className="flex items-start gap-3 text-sm text-muted-foreground"
                  >
                    <span
                      className="flex-shrink-0 w-5 h-5 rounded flex items-center justify-center mt-0.5 text-[10px] font-mono font-bold"
                      style={{
                        background: "oklch(0.72 0.16 215 / 0.12)",
                        color: "oklch(0.72 0.16 215)",
                        border: "1px solid oklch(0.72 0.16 215 / 0.2)",
                      }}
                    >
                      ✓
                    </span>
                    <span className="leading-relaxed">{resp}</span>
                  </motion.li>
                ))}
              </ul>

              {/* Tech stack */}
              <div className="pt-5 border-t border-border">
                <p className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest mb-2.5">
                  Tech Stack
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {exp.tech.map((tech) => (
                    <span key={tech} className="tag-pill">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}