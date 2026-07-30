import { Header } from "@/components/header"
import { Item, SectionList } from "@/components/section-list"
import { ResumeSection } from "@/components/resume-section"
import { LinksSection } from "@/components/links-section"
import { EducationSection } from "@/components/education-section"
import { SkillsSection } from "@/components/skills-section"
import { AchievementsSection } from "@/components/achievements-section"

const workItems: Item[] = [
  {
    title: "STAQO (By Sheela Foam)",
    role: "Full Stack Intern",
    period: "May 2026 - July 2026",
    description: "Built a Java (Quarkus) backend on the Timefold solver for an AI-optimized scheduling engine. Engineered a web-based Share of Search tool for Sleepwell & Kurlon. Developing STAQO's LMS platform with a CMS Dashboard for personalized training.",
    href: "https://drive.google.com/file/d/19oRnnuEDS06KMrZ_sAv9CvQagRsRof9s/view?usp=sharing",
  },
  {
    title: "EDUNET FOUNDATION",
    role: "Full Stack Intern",
    period: "May 2026 - July 2026",
    description: "AICTE Internship on AI: TechSaksham (Microsoft & SAP CSR Initiative). Developed an AI-powered health chatbot using Python and Streamlit with real-time user interaction. Worked on chatbot logic, UI integration, and deployment workflows.",
    href: "https://edunetfoundation.org",
  },
]

const projectItems = [
  {
    title: "GST Filing – Automated GSTR-1 Filing & Sales Analytics Platform",
    role: "Creator",
    description:
      "Full-stack GST automation platform reducing filing time from hours to under 2 minutes. Features multi-marketplace data processing (Amazon, Flipkart, Meesho) and multi-file merging with Excel/JSON export support. Built with Next.js, React, TypeScript, Node.js.",
    href: "https://gstfiling.app",
  },
  {
    title: "Hostel Management System",
    role: "Creator",
    description:
      "Role-based platform with visual room allocation (airline seat-booking style). Integrated a night-canteen ordering system with online payments, real-time complaint tracking, and dashboard-based notice broadcasting.",
    href: "#",
  },
]

export default function HomePage() {
  return (
    <>
      <Header />
      <EducationSection />
      <SectionList title="Work" items={workItems} />
      <SectionList
        title="Projects"
        items={projectItems}
        viewAllHref="/projects"
        viewAllText="All Projects"
      />
      <SkillsSection />
      <AchievementsSection />
      <ResumeSection />
      <LinksSection />
    </>
  )
}
