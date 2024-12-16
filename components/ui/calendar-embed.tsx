"use client"

import { Calendar } from "lucide-react"
import Link from "next/link"
import { Button } from "./button"

export function CalendarEmbed() {
  return (
    <div className="flex flex-col items-center gap-4">
      <Link 
        href="https://cal.com/abdahunsi/15min"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button 
          className="bg-[#253745] text-[#CCD0CF] px-8 py-4 rounded-lg hover:bg-[#1A2F3D] transition-all duration-300 flex items-center gap-2"
        >
          <Calendar className="w-5 h-5" />
          Schedule a Consultation
        </Button>
      </Link>
      <p className="text-[#9BA8AB] text-sm">
        30 min call to discuss your technical writing needs
      </p>
    </div>
  )
} 