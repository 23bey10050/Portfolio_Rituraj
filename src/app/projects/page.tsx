import { ScrambleText } from "@/components/scramble-text"
import { ProjectCard } from "@/components/project-card"
import { Metadata } from "next"

const projects = [
  {
    title: "Tax Quantum — Automated GST GSTR-1 Filing & Sales Analytics Platform",
    description:
      "Full-Stack GST Automation Platform For Indian E-Commerce Sellers, Reducing GSTR-1 Filing Time From Hours To Under 2 Minutes",
    role: "Creator",
    period: "2024-2025",
    achievements: [
      "Developed A Full-Stack GST Automation Platform For Indian E-Commerce Sellers",
      "Implemented GST-Compliant Computation For B2CS, SUPECO, And DOC_ISSUE Sheets With Validation And Precision Rounding",
      "Built Multi-Marketplace Data Processing For Amazon, Flipkart, And Meesho With State-Wise And Platform-Wise Analytics",
      "Enabled Multi-File Merging For Monthly And Quarterly Filings With Excel And JSON Export Support",
      "Designed Logic To Handle Returns, Cancellations, Credit Notes, And Debit Notes Matching GST Portal Calculations",
    ],
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Node.js",
      "Excel/CSV Processing",
    ],
    href: "#",
  },
  {
    title: "Hostel Management System",
    description: "Web-Based Role Management Platform With Visual Room Allocation And Integrated Services",
    role: "Creator",
    period: "2024",
    achievements: [
      "Developed A Role-Based Hostel Management System With Visual Room Allocation Similar To Airline Seat Booking Interfaces",
      "Implemented Separate Dashboards For Students, Wardens, And Staff With Secure Role-Based Access Control",
      "Integrated A Night Canteen Ordering System With Online Payment Functionality",
      "Built Real-Time Complaint Tracking And Dashboard-Based Notice Broadcasting For Effective Hostel Communication",
    ],
    technologies: [
      "Web Technologies",
      "Role-Based Access Control",
      "Payment Integration",
      "Real-Time Systems",
    ],
    href: "#",
  },
]

export default function ProjectsPage() {
  return (
    <main className="animate-fade-in-up">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 text-white">
        <span className="text-accent mr-2">*</span>
        <ScrambleText text="Projects" />
      </h1>

      <p className="text-sm sm:text-base text-gray-400 mb-8 sm:mb-12 leading-relaxed">
        Here Are Some Of The Projects I&apos;ve Worked On. I&apos;m Passionate About Building AI-Powered Solutions, Full-Stack Applications, And Tools That Solve Real-World Problems.
      </p>

      <div className="space-y-8 sm:space-y-12">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </main>
  )
}

export const metadata: Metadata = {
  title: "Projects",
  description: "Projects by Ritu Raj Singh - Full-Stack & AI/ML Applications.",
  openGraph: {
    images: [
      {
        url: "https://www.riturajsingh.dev/og/home?title=projects",
      },
    ],
  },
}
