import { ArrowUp } from "lucide-react";
import { motion } from "motion/react";

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="py-6 border-t border-border"
      style={{ background: "oklch(0.1 0.02 264)" }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Logo + Copyright */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground font-mono">
            
            <span>© {year} Vatsal Sharma. All rights reserved.</span>
          </div>

          {/* Attribution */}
          <div className="text-xs text-muted-foreground font-mono">
            Built with{" "}
            <a
              
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline font-medium transition-colors"
            >
              Built with React & Tailwind CSS
            </a>
          </div>

          {/* Back to top */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-8 h-8 rounded-md bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 hover:bg-primary/10 transition-colors"
            aria-label="Back to top"
          >
            <ArrowUp className="w-3.5 h-3.5" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
