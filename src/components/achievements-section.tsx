import Link from "next/link"

const achievements = [
  {
    title: "Google IT Support Professional Certificate",
    description: "Google",
    href: "https://www.credly.com/badges/764a7d3d-807e-4b0b-8750-efbb2968ecee/linked_in_profile",
  },
  {
    title: "Oracle Cloud Infrastructure 2025 Certified DevOps Professional",
    description: "Oracle",
    href: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=01568A9DFA7F8236DD52404C920887B006B55F3710ECACA5A0B81311BDB77E2E",
  },
  {
    title: "Foundations of Digital Marketing & E-commerce",
    description: "Google",
    href: "https://www.coursera.org/account/accomplishments/verify/ZFOF9F5FA40M",
  },
  {
    title: "Indo-Dutch Cyber Security School (7th Edition)",
    description: "Cyber Security Certification",
    href: "https://epathra.com/verify-direct-doc/MjA3L0lONTEwMDEwMDM3OQ==",
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
