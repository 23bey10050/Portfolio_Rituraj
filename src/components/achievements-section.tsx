import Link from "next/link"

const achievements = [
  {
    title: "Oracle Cloud Infrastructure 2025 Certified DevOps Professional",
    description: "Oracle Certified DevOps Professional Engineer",
    href: "#",
  },
  {
    title: "Indo-Dutch Cyber Security School",
    description: "Seventh Edition - Cyber Security Certification",
    href: "#",
  },
  {
    title: "Deep Learning In Ecological Studies",
    description: "ISRO - Indian Space Research Organization",
    href: "#",
  },
  {
    title: "Geodata Processing Using Python And Machine Learning",
    description: "Advanced Data Processing And ML Techniques",
    href: "#",
  },
  {
    title: "Tata Group - Data Visualisation",
    description: "Empowering Business With Effective Insights Job Simulation",
    href: "#",
  },
]

export function AchievementsSection() {
  return (
    <section className="mb-8 md:mb-16 animate-fade-in-up">
      <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 flex items-center text-white">
        <span className="text-accent mr-2">*</span> Achievements
      </h2>
      <div className="space-y-3 sm:space-y-4">
        {achievements.map((achievement, index) => (
          <div key={index} className="border-l-2 border-accent pl-3 sm:pl-4">
            <h3 className="font-semibold text-white text-sm sm:text-base">{achievement.title}</h3>
            <p className="text-xs sm:text-sm text-gray-400">{achievement.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
