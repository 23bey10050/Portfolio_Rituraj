import Link from "next/link"

const achievements = [
  {
    title: "ArthNeeti 4.0",
    description: "Finalist In National Competition",
    href: "#",
  },
  {
    title: "Tata Group's Data Visualisation",
    description: "Empowering Business With Effective Insights Simulation",
    href: "#",
  },
  {
    title: "Accenture UK Developer Simulation",
    description: "Completed Developer And Technology Job Simulation",
    href: "#",
  },
  {
    title: "Google Digital Marketing Certificate",
    description:
      "Fundamentals Of Digital Marketing And E-Commerce Certification",
    href: "#",
  },
  {
    title: "ISRO Deep Learning Course",
    description: "Deep Learning In Ecological Studies - Indian Space Research Organization",
    href: "#",
  },
]

export function AchievementsSection() {
  return (
    <section className="mb-16 animate-fade-in-up">
      <h2 className="text-2xl font-bold mb-6 flex items-center text-white">
        <span className="text-accent mr-2">*</span> Achievements
      </h2>
      <div className="space-y-4">
        {achievements.map((achievement, index) => (
          <div key={index} className="border-l-2 border-accent pl-4">
            <h3 className="font-semibold text-white">{achievement.title}</h3>
            <p className="text-sm text-gray-400">{achievement.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
