export function SkillsSection() {
  const skills = {
    frontend: ["React.js", "Tailwind CSS", "Redux"],
    backend: ["Node.js", "Express.js", "MongoDB"],
    aiml: ["Chatbot Development", "NLP", "TensorFlow"],
    cloud: ["Oracle Cloud Infrastructure", "Container Instances", "OCI Registry (OCIR)", "Kubernetes"],
    devops: ["Kubernetes", "Docker", "CI/CD", "DevOps"],
    other: ["REST APIs", "Firebase", "Authentication", "Payment Integration"],
    languages: ["Python", "C++", "Java", "JavaScript"],
  }

  return (
    <section className="mb-8 md:mb-16 animate-fade-in-up">
      <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 flex items-center text-white">
        <span className="text-accent mr-2">*</span> Skills
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
        <div>
          <h3 className="text-xs sm:text-sm font-semibold text-gray-300 mb-2 sm:mb-3">
            Frontend
          </h3>
          <div className="flex flex-wrap gap-2">
            {skills.frontend.map((skill, index) => (
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
          <h3 className="text-sm font-semibold text-gray-300 mb-3">Backend</h3>
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
          <h3 className="text-sm font-semibold text-gray-300 mb-3">AI/ML</h3>
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
          <h3 className="text-sm font-semibold text-gray-300 mb-3">Cloud & Infrastructure</h3>
          <div className="flex flex-wrap gap-2">
            {skills.cloud.map((skill, index) => (
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
          <h3 className="text-sm font-semibold text-gray-300 mb-3">DevOps</h3>
          <div className="flex flex-wrap gap-2">
            {skills.devops.map((skill, index) => (
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
            Languages
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
          <h3 className="text-sm font-semibold text-gray-300 mb-3">Other</h3>
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
