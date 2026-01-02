import Link from "next/link"
import { FileText, Download } from "lucide-react"

export function ResumeSection() {
  return (
    <section className="mb-8 md:mb-16 animate-fade-in-up">
      <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 flex items-center text-white">
        <span className="text-accent mr-2">*</span>
        Resume
      </h2>
      <div className="border border-gray-700 rounded-lg p-4 sm:p-6 hover:border-accent transition-colors duration-200">
        <div className="flex items-start gap-4">
          <div className="p-3 bg-accent/10 rounded-lg">
            <FileText className="w-6 h-6 text-accent" />
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-white text-base sm:text-lg mb-2">
              Download My Resume
            </h3>
            <p className="text-sm text-gray-400 mb-4">
              View my complete professional profile, experience, and skills
            </p>
            <Link
              href="/Ritu_Raj_Singh_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-accent text-white rounded-lg hover:bg-accent/90 transition-colors duration-200 text-sm font-medium"
            >
              <Download className="w-4 h-4" />
              Download PDF
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
