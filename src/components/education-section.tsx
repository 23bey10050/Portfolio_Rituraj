export function EducationSection() {
  return (
    <section className="mb-16 animate-fade-in-up">
      <h2 className="text-2xl font-bold mb-6 flex items-center text-white">
        <span className="text-accent mr-2">*</span> education
      </h2>
      <div className="space-y-4">
        <div>
          <div className="flex justify-between items-start mb-2">
            <div>
              <h3 className="font-semibold text-white">
                vit bhopal university
              </h3>
              <p className="text-gray-400 text-sm">
                bachelor of technology in computer science (e-commerce technology)
              </p>
            </div>
            <span className="text-gray-400 text-sm">sehore, bhopal</span>
          </div>
          <p className="text-accent text-sm">cumulative gpa: 8.3</p>
          <div className="mt-2 text-sm text-gray-400">
            <p>• core member - gsoc innovators club (pr and outreach team)</p>
            <p>• core member - ecommerce club (creative / design team)</p>
          </div>
        </div>
      </div>
    </section>
  )
}
