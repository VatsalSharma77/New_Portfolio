import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import resume from "../assests/Vatsal_Sharma_Resume.pdf";
import logo from "../assests/vs-logo.png";

const NAV_LINKS = [
  { label: "Home", href: "#home", ocid: "nav.home.link" },
  { label: "About", href: "#about", ocid: "nav.about.link" },
  { label: "Skills", href: "#skills", ocid: "nav.skills.link" },
  { label: "Projects", href: "#projects", ocid: "nav.projects.link" },
  { label: "Experience", href: "#experience", ocid: "nav.experience.link" },
  { label: "Education", href: "#education", ocid: "nav.education.link" },
  { label: "Contact", href: "#contact", ocid: "nav.contact.link" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      const sections = NAV_LINKS.map((l) => l.href);
      let current = "#home";
      for (const id of sections) {
        const el = document.querySelector(id);
        if (el && el.getBoundingClientRect().top <= 90) current = id;
      }
      setActive(current);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 72;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -72, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "backdrop-blur-md bg-background/70 shadow-nav" : "bg-transparent"
          }`}
      >
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-[68px]">
          {/* Logo */}
          <button
            type="button"
            onClick={() => handleNavClick("#home")}
            className="font-mono font-bold text-xl text-foreground hover:text-primary transition-colors tracking-tight"
          >
            <img
              src={logo}
              alt="Vatsal Sharma Logo"
              className="h-10 w-auto"
            />
          </button>

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <button
                  type="button"
                  data-ocid={link.ocid}
                  onClick={() => handleNavClick(link.href)}
                  className={`relative px-3 py-1.5 text-sm font-medium transition-colors rounded ${active === link.href
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                    }`}
                >
                  {link.label}
                  {active === link.href && (
                    <motion.span
                      layoutId="nav-indicator"
                      className="absolute bottom-0 left-3 right-3 h-0.5 rounded-full"
                      style={{ background: "oklch(0.72 0.16 215)" }}
                      transition={{
                        type: "spring",
                        stiffness: 350,
                        damping: 30,
                      }}
                    />
                  )}
                </button>
              </li>
            ))}
          </ul>

          {/* Hire Me CTA */}
          {/* Resume + Hire Me CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={resume}
              download
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-sm font-semibold rounded-md border border-border text-foreground hover:bg-muted transition-all"
            >
              Resume
            </a>

            <button
              type="button"
              onClick={() => handleNavClick("#contact")}
              className="px-4 py-2 text-sm font-semibold rounded-md border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all"
            >
              Hire Me
            </button>
          </div>

          {/* Mobile Hamburger */}
          <button
            type="button"
            data-ocid="nav.menu.button"
            onClick={() => setMobileOpen((o) => !o)}
            className="md:hidden p-2 rounded-md text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? (
              <X className="w-5 h-5" data-ocid="nav.menu.close_button" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </nav>
      </motion.header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed top-[68px] left-0 right-0 z-40 nav-bg border-b border-border md:hidden shadow-card"
          >
            <nav className="container mx-auto px-4 py-4">
              <ul className="flex flex-col gap-0.5">
                {NAV_LINKS.map((link, i) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04 }}
                  >
                    <button
                      type="button"
                      onClick={() => handleNavClick(link.href)}
                      className={`w-full text-left px-3 py-2.5 rounded-md font-medium text-sm transition-colors font-mono ${active === link.href
                        ? "text-primary bg-primary/10"
                        : "text-foreground hover:text-primary hover:bg-muted/60"
                        }`}
                    >
                      {link.label}
                    </button>
                  </motion.li>
                ))}
                <li className="mt-3 pt-3 border-t border-border">
                  <a
                    href={resume}
                    download
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full px-3 py-2.5 text-sm font-semibold border border-border rounded-md text-center hover:bg-muted transition-all"
                  >
                    Download Resume
                  </a>
                </li>
                <li className="mt-3 pt-3 border-t border-border">
                  <button
                    type="button"
                    onClick={() => handleNavClick("#contact")}
                    className="w-full px-3 py-2.5 text-sm font-semibold border border-primary text-primary rounded-md hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    Hire Me
                  </button>
                </li>
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
