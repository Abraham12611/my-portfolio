"use client"

import { useEffect } from "react"
import { Button } from "./button"
import { Calendar } from "lucide-react"

interface CalWindow extends Window {
  Cal?: {
    q?: any[];
    ns?: Record<string, any>;
  }
}

declare const window: CalWindow

export function CalendarEmbed() {
  useEffect(() => {
    // Load Cal.com script
    const script = document.createElement('script')
    script.src = 'https://cal.com/embed.js'
    script.async = true
    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return (
    <div className="flex flex-col items-center gap-4">
      <Button
        data-cal-link="abdahunsi/30min"
        data-cal-namespace="30min"
        data-cal-config='{"layout":"month_view"}'
        className="bg-[#253745] text-[#CCD0CF] px-8 py-4 rounded-lg hover:bg-[#1A2F3D] transition-all duration-300 flex items-center gap-2"
      >
        <Calendar className="w-5 h-5" />
        Schedule a Consultation
      </Button>
      <p className="text-[#9BA8AB] text-sm">
        30 min call to discuss your technical writing needs
      </p>
    </div>
  )
} 