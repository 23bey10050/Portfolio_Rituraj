import { ScrambleText } from "@/components/scramble-text"
import { MapPin, Building2 } from "lucide-react"

export function Header() {
  return (
    <header className="mb-16 space-y-4">
      <h1 className="text-4xl font-bold mb-4 animate-fade-in text-white">
        <span className="inline-block">
          <ScrambleText text="RITU RAJ SINGH" />
        </span>
      </h1>
      <div className="flex flex-col gap-2 text-gray-400">
        <div className="flex items-center gap-2">
          <MapPin className="w-4 h-4" />
          auraiya, uttar pradesh, india
        </div>
        <div className="flex items-center gap-2">
          <Building2 className="w-4 h-4" />
          student @ vit bhopal university
        </div>
      </div>
      <p className="leading-relaxed animate-fade-in-up">
        i&apos;m a cs undergrad specializing in e-commerce technology at vit bhopal (gpa: 8.3). passionate about full-stack development, ai/ml, and building innovative solutions. core member of gsoc innovators club and e-commerce club. when i&apos;m not coding, i&apos;m exploring tech entrepreneurship, ui/ux design, and web app optimization.
      </p>
    </header>
  )
}
