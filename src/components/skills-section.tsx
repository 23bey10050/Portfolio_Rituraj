export function SkillsSection() {
  const skills = {
    languages: ["Java", "Python", "C++ (Basic)"],
    webTech: ["HTML", "CSS"],
    databases: ["MySQL", "MongoDB"],
    tools: ["Git", "GitHub", "Docker", "AWS", "Streamlit", "n8n (Workflow Automation)"],
  }

  return (
    <section className="mb-8 md:mb-16 animate-fade-in-up">
      <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 flex items-center text-white">
        <span className="text-accent mr-2">*</span> Skills
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
        <div>
          <h3 className="text-xs sm:text-sm font-semibold text-gray-300 mb-2 sm:mb-3">
            Programming Languages
          </h3>
          <div className="flex flex-wrap gap-2">
            {skills.languages.map((skill, index) => (
              <span
                key={index}
                className="px-2 sm:px-3 py-1 bg-gray-800 text-gray-300 text-xs sm:text-sm rounded"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-gray-300 mb-3">Web Technologies</h3>
          <div className="flex flex-wrap gap-2">
            {skills.webTech.map((skill, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-gray-800 text-gray-300 text-sm rounded"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-gray-300 mb-3">Databases</h3>
          <div className="flex flex-wrap gap-2">
            {skills.databases.map((skill, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-gray-800 text-gray-300 text-sm rounded"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-gray-300 mb-3">Tools & Platforms</h3>
          <div className="flex flex-wrap gap-2">
            {skills.tools.map((skill, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-gray-800 text-gray-300 text-sm rounded"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
