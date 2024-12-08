"use client"

import { useEffect } from "react"
import { Button } from "./button" // Assuming you have a Button component
import { Calendar } from "lucide-react"

declare global {
  interface Window {
    Cal?: any
  }
}

export function CalendarEmbed() {
  useEffect(() => {
    // Initialize Cal
    (function (C: any, A: string, L: string) {
      let p = function (a: any, ar: any) {
        a.q.push(ar)
      }
      let d = C.document
      C.Cal =
        C.Cal ||
        function () {
          let cal = C.Cal
          let ar = arguments
          if (!cal.loaded) {
            cal.ns = {}
            cal.q = cal.q || []
            d.head.appendChild(d.createElement("script")).src = A
            cal.loaded = true
          }
          if (ar[0] === L) {
            const api = function () {
              p(api, arguments)
            }
            const namespace = ar[1]
            api.q = api.q || []
            if (typeof namespace === "string") {
              cal.ns[namespace] = cal.ns[namespace] || api
              p(cal.ns[namespace], ar)
              p(cal, ["initNamespace", namespace])
            } else p(cal, ar)
            return
          }
          p(cal, ar)
        }
    })(window, "https://app.cal.com/embed/embed.js", "init")

    // Initialize your calendar
    if (window.Cal) {
      window.Cal("init", "30min", { origin: "https://cal.com" })
      window.Cal.ns["30min"]("ui", {
        theme: "dark",
        styles: {
          branding: {
            brandColor: "#253745"
          }
        },
        hideEventTypeDetails: false,
      })
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