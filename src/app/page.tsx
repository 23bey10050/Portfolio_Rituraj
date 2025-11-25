import { Header } from "@/components/header"
import { Item, SectionList } from "@/components/section-list"
import { BlogSection } from "@/components/blog-section"
import { LinksSection } from "@/components/links-section"
import { EducationSection } from "@/components/education-section"
import { SkillsSection } from "@/components/skills-section"
import { AchievementsSection } from "@/components/achievements-section"

const workItems: Item[] = [
  {
    title: "edunet foundation",
    role: "intern",
    period: "feb 2025 - march 2025",
    description: "aicte internship on ai: transformative learning with techsaksham - a joint csr initiative of microsoft & sap (phase 3)",
    href: "https://edunetfoundation.org",
  },
]

const projectItems = [
  {
    title: "healthcare ai chatbot",
    role: "creator",
    description:
      "ai-powered chatbot providing real-time healthcare responses using roberta and nltk. built with python, streamlit, and hugging face transformers",
    href: "https://github.com/riturajsingh/healthcare-chatbot",
  },
  {
    title: "e-commerce platform with ai price negotiation",
    role: "creator",
    description:
      "full-stack mern platform with ai-driven chatbot for real-time price negotiation. features rental furniture and renewed electronics sections",
    href: "https://github.com/riturajsingh/ecommerce-ai",
  },
]

export default function HomePage() {
  return (
    <>
      <Header />
      <EducationSection />
      <SectionList title="work" items={workItems} />
      <SectionList
        title="projects"
        items={projectItems}
        viewAllHref="/projects"
        viewAllText="all projects"
      />
      <SkillsSection />
      <AchievementsSection />
      <BlogSection />
      <LinksSection />
    </>
  )
}
