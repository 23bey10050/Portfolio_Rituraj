import { ScrambleText } from "@/components/scramble-text"
import { ProjectCard } from "@/components/project-card"
import { Metadata } from "next"

const projects = [
  {
    title: "Healthcare AI Chatbot",
    description:
      "AI-Powered Chatbot Providing Real-Time Healthcare Responses Using NLP And Machine Learning",
    role: "Creator",
    period: "2024",
    achievements: [
      "Developed Using RoBERTa (deepset/roberta-base-squad2) For Accurate Healthcare Query Understanding",
      "Implemented NLTK-Based Text Preprocessing With Tokenization And Stopword Removal",
      "Designed Interactive UI With Streamlit For User-Friendly Interactions",
      "Integrated Predefined Healthcare Responses For Symptoms, Medications, And Appointments",
      "Scalable Architecture For Future Enhancements Like Speech-To-Text And Database Integration",
    ],
    technologies: [
      "Python",
      "Streamlit",
      "Hugging Face Transformers",
      "NLTK",
      "RoBERTa",
    ],
    href: "https://github.com/23bey10050/healtcareAI",
  },
  {
    title: "E-Commerce Platform With AI Price Negotiation",
    description: "Full-Stack E-Commerce Platform With AI-Driven Real-Time Price Negotiation Chatbot",
    role: "Creator",
    period: "2024",
    achievements: [
      "Designed And Developed Using MERN Stack (MongoDB, Express.js, React, Node.js)",
      "Engineered AI-Driven Chatbot Improving User Engagement And Conversion Rates",
      "Built Rental Furniture And Renewed Electronic Gadgets Sections With Optimized Inventory Handling",
      "Implemented Secure Authentication, Payment Gateways, And Responsive UI",
      "Optimized Backend APIs And Database Performance, Reducing Load Time",
      "Integrated Real-Time Chat Support Improving Customer Satisfaction",
    ],
    technologies: [
      "MongoDB",
      "Express.js",
      "React.js",
      "Node.js",
      "AI/ML",
      "REST APIs",
      "Authentication",
      "Payment Integration",
    ],
    href: "https://github.com/23bey10050/ecommerce-ai",
  },
]

export default function ProjectsPage() {
  return (
    <main className="animate-fade-in-up">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 text-white">
        <span className="text-accent mr-2">*</span>
        <ScrambleText text="Projects" />
      </h1>

      <p className="text-sm sm:text-base text-gray-400 mb-8 sm:mb-12 leading-relaxed">
        Here Are Some Of The Projects I&apos;ve Worked On. I&apos;m Passionate About Building AI-Powered Solutions, Full-Stack Applications, And Tools That Solve Real-World Problems.
      </p>

      <div className="space-y-8 sm:space-y-12">
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
