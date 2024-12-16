"use client"

import { useEffect } from "react"
import { Button } from "./button"
import { Calendar } from "lucide-react"
import Cal from "@calcom/embed-react"

export function CalendarEmbed() {
  useEffect(() => {
    (async function initCal() {
      const Cal = (await import("@calcom/embed-react")).default
      const cal = await Cal.getApi()
      // Initialize Cal inline embed
      cal?.inline({
        elementOrSelector: "#cal-booking",
        calLink: "abdahunsi/30min",
        config: {
          layout: "month_view",
          theme: "dark",
          styles: {
            branding: {
              brandColor: "#253745"
            }
          },
          hideEventTypeDetails: false,
        }
      })
    })()
  }, [])

  return (
    <div className="flex flex-col items-center gap-4">
      <Button
        data-cal-link="abdahunsi/15min"
        data-cal-namespace="15min"
        className="bg-[#253745] text-[#CCD0CF] px-8 py-4 rounded-lg hover:bg-[#1A2F3D] transition-all duration-300 flex items-center gap-2"
      >
        <Calendar className="w-5 h-5" />
        Schedule a Consultation
      </Button>
      <p className="text-[#9BA8AB] text-sm">
        30 min call to discuss your technical writing needs
      </p>
      <div id="cal-booking"></div>
    </div>
  )
} 