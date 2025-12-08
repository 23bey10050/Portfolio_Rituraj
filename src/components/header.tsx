import { ScrambleText } from "@/components/scramble-text"
import { MapPin, Building2 } from "lucide-react"

export function Header() {
  return (
    <header className="mb-16 space-y-4">
      <div className="flex items-start gap-6 mb-6">
        <img
          src="/rituraj.png"
          alt="Ritu Raj Singh"
          className="w-24 h-24 rounded-full border-2 border-accent object-cover"
        />
        <div className="flex-1">
          <h1 className="text-4xl font-bold mb-4 animate-fade-in" style={{ color: 'rgb(255, 107, 53)' }}>
            <span className="inline-block">
              <ScrambleText text="RITU RAJ SINGH" />
            </span>
          </h1>
        </div>
      </div>
      <div className="flex flex-col gap-2 text-gray-400">
        <div className="flex items-center gap-2">
          <MapPin className="w-4 h-4" style={{ color: 'rgb(255, 107, 53)' }} />
          Ram Krishna Nagar, Dibiyapur, Auraiya, Uttar Pradesh, India - 206244
        </div>
        <div className="flex items-center gap-2">
          <Building2 className="w-4 h-4" style={{ color: 'rgb(255, 107, 53)' }} />
          Third-year Student @ VIT Bhopal University
        </div>
        </div>
      </div>
      <p className="leading-relaxed animate-fade-in-up">
        Third-year CS Undergrad At VIT Bhopal University | Oracle Certified DevOps Professional Engineer. Passionate About Full-Stack Development, AI/ML, Cloud Infrastructure, And Building Innovative Solutions. Core Member Of GSOC Innovators Club (PR And Outreach Team). When I&apos;m Not Coding, I&apos;m Exploring Tech Entrepreneurship, DevOps, And Cloud Technologies.
      </p>
    </header>
  )
}
