import { Header } from "@/components/header"
import { Item, SectionList } from "@/components/section-list"
import { BlogSection } from "@/components/blog-section"
import { LinksSection } from "@/components/links-section"
import { EducationSection } from "@/components/education-section"
import { SkillsSection } from "@/components/skills-section"
import { AchievementsSection } from "@/components/achievements-section"

const workItems: Item[] = [
  {
    title: "GSOC Innovators",
    role: "Core Member (PR and Outreach Team)",
    period: "February 2025 - September 2025",
    description: "Core Member Of The PR And Outreach Team For The GSOC Innovators Club For The 25-26 Tenure At VIT Bhopal University",
    href: "#",
  },
  {
    title: "Edunet Foundation",
    role: "Intern",
    period: "January 2025 - February 2025",
    description: "AICTE Internship On AI: Transformative Learning With TechSaksham - A Joint CSR Initiative Of Microsoft & SAP (Phase 3)",
    href: "https://edunetfoundation.org",
  },
]

const projectItems = [
  {
    title: "Healthcare AI Chatbot",
    role: "Creator",
    description:
      "AI-Powered Chatbot Providing Real-Time Healthcare Responses Using RoBERTa And NLTK. Built With Python, Streamlit, And Hugging Face Transformers",
    href: "https://github.com/23bey10050/healtcareAI",
  },
  {
    title: "E-Commerce Platform With AI Price Negotiation",
    role: "Creator",
    description:
      "Full-Stack MERN Platform With AI-Driven Chatbot For Real-Time Price Negotiation. Features Rental Furniture And Renewed Electronics Sections",
    href: "https://github.com/23bey10050/ecommerce-ai",
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
      <BlogSection />
      <LinksSection />
    </>
  )
}
