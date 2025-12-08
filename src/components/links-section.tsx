import Link from "next/link"

const links = [
  { title: "Phone", href: "tel:+917417515811" },
  { title: "Email", href: "mailto:ritu.23bey10050@vitbhopal.ac.in" },
  { title: "GitHub", href: "https://github.com/23bey10050" },
  { title: "LinkedIn", href: "https://www.linkedin.com/in/rituraj2027" },
]

export function LinksSection() {
  return (
    <section className="animate-fade-in-up">
      <h2 className="text-2xl font-bold mb-6 flex items-center text-white">
        <span className="text-accent mr-2">*</span> Links
      </h2>
      <div className="flex flex-wrap gap-4 text-sm">
        {links.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            className="text-gray-400 hover:text-accent transition-colors duration-200"
          >
            {link.title}
          </Link>
        ))}
      </div>
    </section>
  )
}
