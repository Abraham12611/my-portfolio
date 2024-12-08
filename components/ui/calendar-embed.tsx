"use client"

import { useEffect, useState } from "react"
import dynamic from "next/dynamic"

// Dynamically import Cal with loading state
const Cal = dynamic(
  () => import("@calcom/embed-react").then((mod) => mod.default),
  { 
    ssr: false,
    loading: () => <LoadingCalendar />
  }
)

function LoadingCalendar() {
  return (
    <div className="h-[500px] flex items-center justify-center bg-[#11212D] rounded-lg">
      <div className="text-[#9BA8AB]">Loading calendar...</div>
    </div>
  )
}

export function CalendarEmbed() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let mounted = true

    const initializeCal = async () => {
      try {
        // Import getCalApi dynamically
        const { getCalApi } = await import("@calcom/embed-react")
        
        // Only proceed if component is still mounted
        if (!mounted) return

        const cal = await getCalApi()
        
        // Only proceed if component is still mounted
        if (!mounted) return

        cal("ui", {
          theme: "dark",
          styles: {
            branding: {
              brandColor: "#253745"
            }
          },
          hideEventTypeDetails: false,
        })
        
        if (mounted) {
          setIsLoaded(true)
        }
      } catch (err) {
        if (mounted) {
          console.error("Failed to initialize calendar:", err)
          setError("Failed to load calendar. Please try again later.")
        }
      }
    }

    initializeCal()

    // Cleanup function
    return () => {
      mounted = false
    }
  }, [])

  if (error) {
    return (
      <div className="h-[500px] flex items-center justify-center bg-[#11212D] rounded-lg">
        <div className="text-[#9BA8AB]">{error}</div>
      </div>
    )
  }

  if (!isLoaded) {
    return <LoadingCalendar />
  }

  return (
    <div className="h-[500px] overflow-hidden rounded-lg">
      <Cal
        namespace="30min"
        calLink="abdahunsi/30min"
        style={{
          width: "100%",
          height: "100%",
          overflow: "scroll"
        }}
        config={{
          layout: "month_view",
          theme: "dark"
        }}
      />
    </div>
  )
} 