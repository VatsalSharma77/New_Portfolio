# Vatsal Portfolio

## Current State

Dark-themed React portfolio with 6 sections: Hero (with photo), About, Skills (Tech Stack), Projects (3 placeholder projects), Experience (1 role), Contact (3 placeholder links), and Footer. All JSX. Uses motion/react for animations, InView hooks, and a dark OKLCH design system with sky-blue + green accents.

## Requested Changes (Diff)

### Add

- **Key Achievements section** between About and Tech Stack — 7 bullet-point achievements displayed as highlight cards
- **Professional Projects section** — 2 confidential work projects (Hiring Platform, Server Allocation Platform) with "Not Publicly Available" badge instead of GitHub/Demo buttons
- **Personal Projects section** — 3 personal projects (Task Management App, Walmart Clone, YouTube Clone) with GitHub/Live Demo buttons
- **Education section** — B.Tech (Electrical Engineering), Amritsar College of Engineering & Technology, CGPA 8.09, 2019–2023
- **Phone contact item** in Contact section (+91 8003995381)
- Updated **Navbar** with new section links: Achievements, Professional Projects, Personal Projects, Education

### Modify

- **Hero section**: Update subheading to exact text; add Location badge (Kota, Rajasthan, India); update stats row (1.5+ Yrs Exp, 150+ APIs, 1000+ Users)
- **About section**: Replace bio with full professional summary from request
- **Tech Stack / Skills section**: Expand all 5 categories — Frontend (React.js, Next.js, TypeScript, JavaScript, Material UI, Redux), Backend (Node.js, Express.js, REST APIs, Auth & Authorization), Databases (PostgreSQL, MongoDB, SQL), Integrations (Payment Gateway, Google SSO, LinkedIn SSO, NodeMailer, Notifications), Tools (Git, GitHub, pgAdmin, VS Code, Jira)
- **Projects section**: Rename to Personal Projects; replace 3 placeholder projects with Task Management App, Walmart Clone, YouTube Clone; Task Management App has GitHub button (https://github.com/VatsalSharma77), others show placeholder buttons
- **Experience section**: Update role to "Full Stack Developer", company to "Sogofy Biz Tech Pvt. Ltd.", duration to "Aug 2024 – Present", expand responsibilities to full 6-item list from request
- **Contact section**: Update email to vatsalsharma0217@gmail.com, GitHub to https://github.com/VatsalSharma77, LinkedIn to https://www.linkedin.com/in/vatsal-sharma-261801240/; add Phone card (+91 8003995381)
- **App.jsx**: Add all new sections in correct order: Hero → About → Achievements → TechStack → ProfessionalProjects → PersonalProjects → Experience → Education → Contact → Footer
- **Navbar**: Update links to cover all 9 sections

### Remove

- Placeholder/dummy project data
- Placeholder contact info (old email, old GitHub URL)

## Implementation Plan

1. Update `App.jsx` to include all sections in correct order
2. Update `Navbar.jsx` with new nav links for all sections
3. Update `HeroSection.jsx` — fix subheading, location badge, stats row
4. Update `AboutSection.jsx` — full bio from request, update highlight cards
5. Create `AchievementsSection.jsx` — 7 achievements as animated cards
6. Update `SkillsSection.jsx` — expand to 5 groups with all technologies
7. Create `ProfessionalProjectsSection.jsx` — 2 confidential projects with lock badge
8. Update `ProjectsSection.jsx` (rename to PersonalProjectsSection) — 3 personal projects with real data
9. Update `ExperienceSection.jsx` — correct role, company, dates, 6 responsibilities
10. Create `EducationSection.jsx` — single card for B.Tech
11. Update `ContactSection.jsx` — real contact info, add phone card
