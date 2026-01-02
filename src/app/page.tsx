import { Header } from "@/components/header"
import { Item, SectionList } from "@/components/section-list"
import { ResumeSection } from "@/components/resume-section"
import { LinksSection } from "@/components/links-section"
import { EducationSection } from "@/components/education-section"
import { SkillsSection } from "@/components/skills-section"
import { AchievementsSection } from "@/components/achievements-section"

const workItems: Item[] = [
  {
    title: "Edunet Foundation",
    role: "Intern",
    period: "January 2025 - February 2025",
    description: "AICTE Internship on AI: Transformative Learning with TechSaksham - Microsoft & SAP CSR Initiative. Developed an AI-powered health chatbot using Python and Streamlit with real-time user interaction. Worked on chatbot logic, UI integration, and basic deployment workflows.",
    href: "https://edunetfoundation.org",
  },
]

const projectItems = [
  {
    title: "Tax Quantum — Automated GST GSTR-1 Filing & Sales Analytics Platform",
    role: "Creator",
    description:
      "Full-stack GST automation platform for Indian e-commerce sellers. Built with Next.js, React, TypeScript, Node.js. Reduces GSTR-1 filing time from hours to under 2 minutes with multi-marketplace data processing.",
    href: "#",
  },
  {
    title: "Hostel Management System",
    role: "Creator",
    description:
      "Web-based role management platform with visual room allocation, separate dashboards for students, wardens, and staff. Features night canteen ordering system with online payment and real-time complaint tracking.",
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
