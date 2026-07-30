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
                B.Tech. in Computer Science and Engineering (E-commerce technology)
              </p>
            </div>
            <span className="text-gray-400 text-xs sm:text-sm">Sep 2023 - Present</span>
          </div>
          <p className="text-gray-400 text-xs sm:text-sm">CGPA: 8.38/10</p>
        </div>
        <div className="mt-6">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2 gap-1 sm:gap-0">
            <div>
              <h3 className="font-semibold text-white text-base sm:text-lg">
                St. Joseph's Sr. Sec. School
              </h3>
              <p className="text-gray-400 text-xs sm:text-sm">
                Higher Secondary (12th) & Secondary (10th) Education
              </p>
            </div>
            <span className="text-gray-400 text-xs sm:text-sm">Jun 2020 - 2022</span>
          </div>
          <p className="text-gray-400 text-xs sm:text-sm">Auraiya, India</p>
        </div>
      </div>
    </section>
  )
}
