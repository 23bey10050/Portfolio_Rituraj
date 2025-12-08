import type { Metadata } from "next"
import { Geist_Mono } from "next/font/google"
import "./globals.css"
import { Navbar } from "../components/navbar"

const geistMono = Geist_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist-mono",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://www.riturajsingh.me"),
  title: {
    default: "RITU RAJ SINGH",
    template: "%s | RITU RAJ SINGH",
  },
  description: "Third-year CS Student at VIT Bhopal University | Oracle Certified DevOps Professional | Full-Stack Developer & AI Enthusiast.",
  viewport: "width=device-width, initial-scale=1, maximum-scale=5",
  openGraph: {
    title: "RITU RAJ SINGH",
    description: "Third-year CS Student at VIT Bhopal University | Oracle Certified DevOps Professional | Full-Stack Developer & AI Enthusiast.",
    url: "https://www.riturajsingh.me",
    siteName: "RITU RAJ SINGH",
    locale: "en_US",
    type: "website",
    images: ["https://www.riturajsingh.me/og/home"],
  },
  robots: {
    index: true,
    follow: true,
    "max-video-preview": -1,
    "max-image-preview": "large",
    "max-snippet": -1,
  },
  twitter: {
    title: "RITU RAJ SINGH",
    card: "summary_large_image",
    creator: "@riturajsingh",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistMono.variable} antialiased min-h-screen font-mono`}
        suppressHydrationWarning
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 py-6 md:py-8">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  )
}
