import Link from "next/link"

const achievements = [
  {
    title: "ArthNeeti 4.0",
    description: "finalist in national competition",
    href: "#",
  },
  {
    title: "Tata Group's Data Visualisation",
    description: "empowering business with effective insights simulation",
    href: "#",
  },
  {
    title: "Accenture UK Developer Simulation",
    description: "completed developer and technology job simulation",
    href: "#",
  },
  {
    title: "Google Digital Marketing Certificate",
    description:
      "fundamentals of digital marketing and e-commerce certification",
    href: "#",
  },
  {
    title: "ISRO Deep Learning Course",
    description: "deep learning in ecological studies - indian space research organization",
    href: "#",
  },
]

export function AchievementsSection() {
  return (
    <section className="mb-16 animate-fade-in-up">
      <h2 className="text-2xl font-bold mb-6 flex items-center text-white">
        <span className="text-accent mr-2">*</span> achievements
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
