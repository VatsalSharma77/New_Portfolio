import { Mail, Phone } from "lucide-react";
import { motion } from "motion/react";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { useInView } from "../hooks/useInView";

const CONTACT_ITEMS = [
  {
    icon: Mail,
    label: "Email",
    value: "vatsalsharma0217@gmail.com",
    href: "mailto:vatsalsharma0217@gmail.com",
    ocid: "contact.email.link",
    description: "Drop me a message anytime",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 8003995381",
    href: "tel:+918003995381",
    ocid: "contact.phone.link",
    description: "Available for calls or WhatsApp",
  },
  {
    icon: SiGithub,
    label: "GitHub",
    value: "github.com/VatsalSharma77",
    href: "https://github.com/VatsalSharma77",
    ocid: "contact.github.link",
    description: "Explore my repositories",
  },
  {
    icon: SiLinkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/vatsal-sharma",
    href: "https://www.linkedin.com/in/vatsal-sharma-261801240/",
    ocid: "contact.linkedin.link",
    description: "Let's connect professionally",
  },
];

export function ContactSection() {
  const [ref, inView] = useInView();

  return (
    <section id="contact" className="py-20 md:py-28 bg-background">
      <div ref={ref} className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-14 max-w-2xl"
        >
          <span className="label-accent">Contact</span>

          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mt-3">
            Get In Touch
          </h2>

          <div className="section-rule" />

          <p className="mt-6 text-muted-foreground leading-relaxed">
            Open to new opportunities, collaborations, and interesting
            projects. Feel free to reach out — I typically respond within
            24 hours.
          </p>
        </motion.div>

        {/* Contact cards */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl">

          {CONTACT_ITEMS.map((item, i) => (
            <motion.a
              key={item.label}
              href={item.href}
              target={
                item.href.startsWith("mailto") || item.href.startsWith("tel")
                  ? undefined
                  : "_blank"
              }
              rel={
                item.href.startsWith("mailto") || item.href.startsWith("tel")
                  ? undefined
                  : "noopener noreferrer"
              }
              data-ocid={item.ocid}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.08, duration: 0.5 }}
              className="group bg-card border border-border rounded-xl p-5 hover:border-primary/50 hover:card-glow-hover transition-all duration-300 hover:-translate-y-1"
            >

              {/* Icon */}
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
                style={{
                  background: "oklch(0.72 0.16 215 / 0.1)",
                  border: "1px solid oklch(0.72 0.16 215 / 0.2)",
                }}
              >
                <item.icon className="w-5 h-5 text-primary group-hover:scale-110 transition-transform duration-300" />
              </div>

              {/* Label */}
              <p className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest mb-1">
                {item.label}
              </p>

              {/* Value */}
              <p className="font-semibold text-sm text-foreground group-hover:text-primary transition-colors mb-1 truncate">
                {item.value}
              </p>

              {/* Description */}
              <p className="text-xs text-muted-foreground">
                {item.description}
              </p>

            </motion.a>
          ))}

        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-12 max-w-6xl"
        >
          <div
            className="rounded-xl p-6 border"
            style={{
              background:
                "linear-gradient(135deg, oklch(0.72 0.16 215 / 0.05) 0%, oklch(0.65 0.18 148 / 0.05) 100%)",
              borderColor: "oklch(0.72 0.16 215 / 0.2)",
            }}
          >
            <p className="font-display text-lg md:text-xl font-semibold text-foreground text-center">
              <span className="text-gradient">
                Let's build something amazing together.
              </span>
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}