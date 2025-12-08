"use client"

import { useState } from "react"
import { X } from "lucide-react"

export function ProfileImage() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <img
        src="/rituraj.png"
        alt="Ritu Raj Singh"
        className="w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 rounded-full border-2 border-accent object-cover flex-shrink-0 cursor-pointer hover:opacity-90 hover:scale-105 transition-all duration-300"
        onClick={() => setIsOpen(true)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            setIsOpen(true)
          }
        }}
      />

      {/* Modal/Lightbox */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 sm:p-8 animate-fade-in"
          onClick={() => setIsOpen(false)}
        >
          <div className="relative max-w-4xl w-full max-h-[90vh] flex items-center justify-center">
            {/* Close button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-0 right-0 sm:top-4 sm:right-4 p-2 text-white hover:text-accent transition-colors bg-black/50 rounded-full"
              aria-label="Close"
            >
              <X className="w-6 h-6 sm:w-8 sm:h-8" />
            </button>

            {/* Image */}
            <img
              src="/rituraj.png"
              alt="Ritu Raj Singh - Full Size"
              className="max-w-full max-h-[85vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />

            {/* Caption */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 sm:p-6 rounded-b-lg">
              <p className="text-white text-center text-sm sm:text-base font-semibold">
                Ritu Raj Singh
              </p>
              <p className="text-gray-300 text-center text-xs sm:text-sm">
                Oracle Certified DevOps Professional | VIT Bhopal University
              </p>
            </div>
          </div>

          {/* Instruction text */}
          <div className="absolute bottom-4 left-0 right-0 text-center text-gray-400 text-xs sm:text-sm">
            Click anywhere to close
          </div>
        </div>
      )}
    </>
  )
}
