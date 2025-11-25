import { ScrambleText } from "@/components/scramble-text"
import { MapPin, Building2 } from "lucide-react"

export function Header() {
  return (
    <header className="mb-16 space-y-4">
      <h1 className="text-4xl font-bold mb-4 animate-fade-in" style={{ color: 'rgb(255, 107, 53)' }}>
        <span className="inline-block">
          <ScrambleText text="RITU RAJ SINGH" />
        </span>
      </h1>
      <div className="flex flex-col gap-2 text-gray-400">
        <div className="flex items-center gap-2">
          <MapPin className="w-4 h-4" style={{ color: 'rgb(255, 107, 53)' }} />
          Auraiya, Uttar Pradesh, India
        </div>
        <div className="flex items-center gap-2">
          <Building2 className="w-4 h-4" style={{ color: 'rgb(255, 107, 53)' }} />
          Student @ VIT Bhopal University
        </div>
      </div>
      <p className="leading-relaxed animate-fade-in-up">
        I&apos;m A CS Undergrad Specializing In E-Commerce Technology At VIT Bhopal (GPA: 8.3). Passionate About Full-Stack Development, AI/ML, And Building Innovative Solutions. Core Member Of GSOC Innovators Club And E-Commerce Club. When I&apos;m Not Coding, I&apos;m Exploring Tech Entrepreneurship, UI/UX Design, And Web App Optimization.
      </p>
    </header>
  )
}
