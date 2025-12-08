export function EducationSection() {
  return (
    <section className="mb-8 md:mb-16 animate-fade-in-up">
      <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 flex items-center text-white">
        <span className="text-accent mr-2">*</span> Education
      </h2>
      <div className="space-y-4">
        <div>
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2 gap-1 sm:gap-0">
            <div>
              <h3 className="font-semibold text-white text-base sm:text-lg">
                VIT Bhopal University
              </h3>
              <p className="text-gray-400 text-xs sm:text-sm">
                Bachelor Of Technology - BTech, Computer Science And Engineering
              </p>
            </div>
            <span className="text-gray-400 text-xs sm:text-sm">August 2023 - May 2027</span>
          </div>
          <p className="text-gray-400 text-xs sm:text-sm">Sehore, Bhopal, Madhya Pradesh</p>
          <div className="mt-2 text-xs sm:text-sm text-gray-400">
            <p>• Core Member - GSOC Innovators Club (PR And Outreach Team)</p>
            <p>• Core Member - Ecommerce Club (Creative / Design Team)</p>
          </div>
        </div>
      </div>
    </section>
  )
}
