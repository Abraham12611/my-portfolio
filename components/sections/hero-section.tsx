"use client"

import Link from "next/link"
import { PartnershipsSection } from "./partnerships-section"
import { useRouter } from "next/navigation"

export function HeroSection() {
  const router = useRouter()

  const handleWorkClick = (e: React.MouseEvent) => {
    e.preventDefault()
    const workSection = document.getElementById('work')
    if (workSection) {
      workSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleBookingClick = (e: React.MouseEvent) => {
    e.preventDefault()
    window.open('https://cal.com/abdahunsi/15min', '_blank', 'noopener,noreferrer')
  }

  return (
    <section id="home" className="relative h-screen overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-[#06141B]">
        <div className="absolute inset-0 bg-gradient-to-r from-[#06141B] to-transparent opacity-90" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#06141B] to-transparent opacity-70" />
        {/* Accent Light Effect */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#253745] opacity-20 blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center">
        <div className="max-w-7xl mx-auto px-8 w-full flex items-center">
          {/* Hero Content */}
          <div className="max-w-2xl space-y-6">
            <span className="text-[#4A5C6A] text-sm tracking-wider uppercase">
              Software Developer | Technical writer
            </span>
            <h1 className="text-[#CCD0CF] text-6xl font-bold tracking-tight">
              Hello, I&apos;m Abraham<br />
              Dahunsi
            </h1>
            <p className="text-[#9BA8AB] text-xl max-w-xl">
              Creative Developer & Digital Artist crafting immersive web experiences
            </p>
            <div className="pt-4 flex gap-4">
              <button
                onClick={handleWorkClick}
                className="inline-block px-8 py-4 bg-[#253745] text-[#CCD0CF] rounded-lg hover:bg-[#4A5C6A] transition-colors"
              >
                View My Work
              </button>
              <button
                onClick={handleBookingClick}
                className="inline-block px-8 py-4 border border-[#253745] text-[#CCD0CF] rounded-lg hover:bg-[#253745]/10 transition-colors"
              >
                Book 15 Min Call
              </button>
            </div>
          </div>

          {/* Partnerships Section */}
          <div className="flex-1 flex justify-center -ml-20">
            <PartnershipsSection />
          </div>
        </div>
      </div>
    </section>
  )
} 