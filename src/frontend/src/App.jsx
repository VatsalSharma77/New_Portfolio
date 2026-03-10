import { Toaster } from "@/components/ui/sonner";
import { AboutSection } from "./components/AboutSection";
import { AchievementsSection } from "./components/AchievementsSection";
import { ContactSection } from "./components/ContactSection";
import { EducationSection } from "./components/EducationSection";
import { ExperienceSection } from "./components/ExperienceSection";
import { Footer } from "./components/Footer";
import { HeroSection } from "./components/HeroSection";
import { Navbar } from "./components/Navbar";
import { PersonalProjectsSection } from "./components/PersonalProjectsSection";
import { ProfessionalProjectsSection } from "./components/ProfessionalProjectsSection";
import { ScrollProgress } from "./components/ScrollProgress";
import { SkillsSection } from "./components/SkillsSection";

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <ScrollProgress />
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <AchievementsSection />
        <SkillsSection />
        <ProfessionalProjectsSection />
        <PersonalProjectsSection />
        <ExperienceSection />
        <EducationSection />
        <ContactSection />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}
