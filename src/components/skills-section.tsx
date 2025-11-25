export function SkillsSection() {
  const skills = {
    frontend: ["react.js", "tailwind css", "redux"],
    backend: ["node.js", "express.js", "mongodb"],
    aiml: ["chatbot development", "nlp", "tensorflow"],
    other: ["rest apis", "firebase", "authentication", "payment integration"],
    languages: ["python", "c++", "java", "javascript"],
  }

  return (
    <section className="mb-16 animate-fade-in-up">
      <h2 className="text-2xl font-bold mb-6 flex items-center text-white">
        <span className="text-accent mr-2">*</span> skills
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h3 className="text-sm font-semibold text-gray-300 mb-3">
            frontend
          </h3>
          <div className="flex flex-wrap gap-2">
            {skills.frontend.map((skill, index) => (
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
          <h3 className="text-sm font-semibold text-gray-300 mb-3">backend</h3>
          <div className="flex flex-wrap gap-2">
            {skills.backend.map((skill, index) => (
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
          <h3 className="text-sm font-semibold text-gray-300 mb-3">ai/ml</h3>
          <div className="flex flex-wrap gap-2">
            {skills.aiml.map((skill, index) => (
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
          <h3 className="text-sm font-semibold text-gray-300 mb-3">
            languages
          </h3>
          <div className="flex flex-wrap gap-2">
            {skills.languages.map((skill, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-gray-800 text-gray-300 text-sm rounded"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
        <div className="md:col-span-2">
          <h3 className="text-sm font-semibold text-gray-300 mb-3">other</h3>
          <div className="flex flex-wrap gap-2">
            {skills.other.map((skill, index) => (
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
