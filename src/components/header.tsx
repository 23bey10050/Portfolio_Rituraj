import { ScrambleText } from "@/components/scramble-text"
import { MapPin, Building2 } from "lucide-react"
import { ProfileImage } from "@/components/profile-image"

export function Header() {
  return (
    <header className="mb-8 md:mb-16 space-y-4">
      <div className="flex flex-col items-start gap-4 mb-4 sm:mb-6">
        <ProfileImage />
        <div className="w-full">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-4 animate-fade-in" style={{ color: 'rgb(255, 107, 53)' }}>
            <span className="inline-block">
              <ScrambleText text="RITU RAJ SINGH" />
            </span>
          </h1>
        </div>
      </div>
      <div className="flex flex-col gap-2 text-sm sm:text-base text-gray-400">
        <div className="flex items-start sm:items-center gap-2">
          <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5 sm:mt-0" style={{ color: 'rgb(255, 107, 53)' }} />
          <span className="break-words">Auraiya, Uttar Pradesh, India</span>
        </div>
        <div className="flex items-center gap-2">
          <Building2 className="w-4 h-4 flex-shrink-0" style={{ color: 'rgb(255, 107, 53)' }} />
          <span>B.Tech CSE (E-commerce Technology) @ VIT Bhopal University</span>
        </div>
      </div>
      <p className="leading-relaxed text-sm sm:text-base animate-fade-in-up">
        Fourth-year CS Undergrad at VIT Bhopal University | Oracle Certified DevOps Professional. Passionate about building full-stack applications, GST automation solutions, and web-based management systems. Experienced in Java, Python, React, Next.js, and Cloud Platforms.
      </p>
    </header>
  )
}
