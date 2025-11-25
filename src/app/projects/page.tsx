import { ScrambleText } from "@/components/scramble-text"
import { ProjectCard } from "@/components/project-card"
import { Metadata } from "next"

const projects = [
  {
    title: "healthcare ai chatbot",
    description:
      "ai-powered chatbot providing real-time healthcare responses using nlp and machine learning",
    role: "creator",
    period: "2024",
    achievements: [
      "developed using roberta (deepset/roberta-base-squad2) for accurate healthcare query understanding",
      "implemented nltk-based text preprocessing with tokenization and stopword removal",
      "designed interactive ui with streamlit for user-friendly interactions",
      "integrated predefined healthcare responses for symptoms, medications, and appointments",
      "scalable architecture for future enhancements like speech-to-text and database integration",
    ],
    technologies: [
      "python",
      "streamlit",
      "hugging face transformers",
      "nltk",
      "roberta",
    ],
    href: "https://github.com/riturajsingh/healthcare-chatbot",
  },
  {
    title: "e-commerce platform with ai price negotiation",
    description: "full-stack e-commerce platform with ai-driven real-time price negotiation chatbot",
    role: "creator",
    period: "2024",
    achievements: [
      "designed and developed using mern stack (mongodb, express.js, react, node.js)",
      "engineered ai-driven chatbot improving user engagement and conversion rates",
      "built rental furniture and renewed electronic gadgets sections with optimized inventory handling",
      "implemented secure authentication, payment gateways, and responsive ui",
      "optimized backend apis and database performance, reducing load time",
      "integrated real-time chat support improving customer satisfaction",
    ],
    technologies: [
      "mongodb",
      "express.js",
      "react.js",
      "node.js",
      "ai/ml",
      "rest apis",
      "authentication",
      "payment integration",
    ],
    href: "https://github.com/riturajsingh/ecommerce-ai",
  },
]

export default function ProjectsPage() {
  return (
    <main className="animate-fade-in-up">
      <h1 className="text-4xl font-bold mb-8 text-white">
        <span className="text-accent mr-2">*</span>
        <ScrambleText text="projects" />
      </h1>

      <p className="text-gray-400 mb-12 leading-relaxed">
        here are some of the projects i&apos;ve worked on. i&apos;m passionate about building ai-powered solutions, full-stack applications, and tools that solve real-world problems.
      </p>

      <div className="space-y-12">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </main>
  )
}

export const metadata: Metadata = {
  title: "Projects",
  description: "Projects by Ritu Raj Singh - Full-Stack & AI/ML Applications.",
  openGraph: {
    images: [
      {
        url: "https://www.riturajsingh.dev/og/home?title=projects",
      },
    ],
  },
}
