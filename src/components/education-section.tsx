export function EducationSection() {
  return (
    <section className="mb-16 animate-fade-in-up">
      <h2 className="text-2xl font-bold mb-6 flex items-center text-white">
        <span className="text-accent mr-2">*</span> Education
      </h2>
      <div className="space-y-4">
        <div>
          <div className="flex justify-between items-start mb-2">
            <div>
              <h3 className="font-semibold text-white">
                VIT Bhopal University
              </h3>
              <p className="text-gray-400 text-sm">
                Bachelor Of Technology In Computer Science (E-Commerce Technology)
              </p>
            </div>
            <span className="text-gray-400 text-sm">Sehore, Bhopal</span>
          </div>
          <p className="text-accent text-sm">Cumulative GPA: 8.3</p>
          <div className="mt-2 text-sm text-gray-400">
            <p>• Core Member - GSOC Innovators Club (PR And Outreach Team)</p>
            <p>• Core Member - Ecommerce Club (Creative / Design Team)</p>
          </div>
        </div>
      </div>
    </section>
  )
}
