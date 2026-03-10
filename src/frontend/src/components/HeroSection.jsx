import { ArrowRight, ChevronDown } from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import image from "../assests/Screenshot.png";
import resume from "../assests/Vatsal_Sharma_Resume.pdf";


const ROLES = [
  "Full Stack Developer",
  "MERN Stack Developer",
  "React Developer",
  "Node.js Developer",
  "Backend Developer",
];

function TypewriterText({ texts }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    const current = texts[currentIndex];
    const speed = isDeleting ? 45 : 85;

    timerRef.current = setTimeout(() => {
      if (!isDeleting) {
        setDisplayed(current.slice(0, displayed.length + 1));
        if (displayed.length + 1 === current.length) {
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        setDisplayed(current.slice(0, displayed.length - 1));
        if (displayed.length - 1 === 0) {
          setIsDeleting(false);
          setCurrentIndex((i) => (i + 1) % texts.length);
        }
      }
    }, speed);

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [displayed, isDeleting, currentIndex, texts]);

  return (
    <span className="text-primary font-medium font-mono">
      {displayed}
      <span className="animate-blink text-primary/60 ml-0.5">|</span>
    </span>
  );
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

function handleScrollTo(id) {
  const el = document.querySelector(id);
  if (el) {
    const top = el.getBoundingClientRect().top + window.scrollY - 72;
    window.scrollTo({ top, behavior: "smooth" });
  }
}

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-background overflow-hidden"
    >
      {/* Animated background blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Sky-blue blob — top left */}
        <div
          className="hero-blob animate-glow-pulse"
          style={{
            width: "600px",
            height: "600px",
            top: "-100px",
            left: "-150px",
            background:
              "radial-gradient(circle, oklch(0.72 0.16 215 / 0.08) 0%, transparent 70%)",
          }}
        />
        {/* Green blob — bottom right */}
        <div
          className="hero-blob animate-glow-pulse"
          style={{
            width: "500px",
            height: "500px",
            bottom: "-80px",
            right: "-100px",
            background:
              "radial-gradient(circle, oklch(0.65 0.18 148 / 0.07) 0%, transparent 70%)",
            animationDelay: "1.5s",
          }}
        />
        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(oklch(0.28 0.03 264 / 0.15) 1px, transparent 1px), linear-gradient(90deg, oklch(0.28 0.03 264 / 0.15) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20">
        <div className="max-w-6xl flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-16">
          {/* Right: Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="flex-shrink-0 flex justify-center w-full lg:w-auto"
          >
            <div className="relative">
              {/* Glow ring */}
              <div
                className="absolute -inset-1 rounded-full animate-glow-pulse"
                style={{
                  background:
                    "radial-gradient(circle, oklch(0.72 0.16 215 / 0.25) 0%, transparent 70%)",
                }}
              />
              <div
                className="absolute -inset-0.5 rounded-full"
                style={{
                  background:
                    "linear-gradient(135deg, oklch(0.72 0.16 215 / 0.5), oklch(0.65 0.18 148 / 0.5))",
                }}
              />
              <img
                src={image}
                alt="Vatsal Sharma"
                className="relative w-52 h-52 sm:w-64 sm:h-64 lg:w-72 lg:h-72 rounded-full object-cover object-top border-4 border-background"
              />
            </div>
          </motion.div>

          {/* Left: Text content */}
          <div className="flex-1 min-w-0">
            <motion.div
              variants={stagger}
              initial="hidden"
              animate="visible"
              className="space-y-6"
            >
              {/* Available label + Location */}
              <motion.div
                variants={item}
                className="flex flex-wrap items-center gap-3"
              >
                <span className="label-accent">Available for Work</span>
                <span className="inline-flex items-center gap-1.5 font-mono text-xs text-muted-foreground bg-muted/60 px-2.5 py-1 rounded-full border border-border">
                  📍 Kota, Rajasthan, India
                </span>
              </motion.div>

              {/* Main heading */}
              <motion.h1
                variants={item}
                className="font-display text-5xl sm:text-6xl md:text-7xl font-bold leading-[1.05] tracking-tight text-foreground"
              >
                Hi, I'm <span className="text-gradient">Vatsal Sharma</span>
              </motion.h1>

              {/* Typewriter role */}
              <motion.div
                variants={item}
                className="text-xl sm:text-2xl min-h-[2rem] flex items-center"
              >
                <TypewriterText texts={ROLES} />
              </motion.div>

              {/* Bio */}
              <motion.p
                variants={item}
                className="text-base md:text-lg text-muted-foreground max-w-2xl leading-relaxed"
              >
               Full Stack MERN Developer specializing in building scalable web applications, REST APIs, and backend systems using React, Node.js, and PostgreSQL.
              </motion.p>

              {/* CTAs */}
              <motion.div
                variants={item}
                className="flex flex-wrap items-center gap-4 pt-2"
              >
                <button
                  type="button"
                  data-ocid="hero.view_projects.primary_button"
                  onClick={() => handleScrollTo("#projects")}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold text-sm rounded-lg hover:opacity-90 transition-all duration-200 shadow-primary-glow"
                >
                  View Projects
                  <ArrowRight className="w-4 h-4" />
                </button>
                <a
                  href={resume}
                  download
                  className="inline-flex items-center gap-2 px-6 py-3 border border-primary text-primary font-semibold text-sm rounded-lg hover:bg-primary/10 transition-all duration-200"
                >
                  Download Resume
                </a>
              </motion.div>

              {/* Stats row */}
              <motion.div
                variants={item}
                className="pt-4 flex flex-wrap items-center gap-x-8 gap-y-4"
              >
                {[
                  { value: "1.5+", label: "Yrs Exp" },
                  { value: "150+", label: "APIs Built" },
                  { value: "500+", label: "Users Served" },
                ].map((stat, i) => (
                  <div key={stat.label} className="flex items-center gap-3">
                    {i > 0 && (
                      <span
                        className="hidden sm:block w-px h-8"
                        style={{ background: "oklch(0.28 0.03 264)" }}
                      />
                    )}
                    <div className="flex items-baseline gap-1.5">
                      <span className="font-display text-2xl font-bold text-gradient">
                        {stat.value}
                      </span>
                      <span className="text-sm text-muted-foreground font-mono">
                        {stat.label}
                      </span>
                    </div>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
      >
        <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-[0.2em]">
          scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{
            duration: 1.6,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        >
          <ChevronDown
            className="w-5 h-5"
            style={{ color: "oklch(0.72 0.16 215 / 0.5)" }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
