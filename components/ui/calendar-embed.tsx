"use client"

import { useEffect } from "react"
import Cal, { getCalApi } from "@calcom/embed-react"

export function CalendarEmbed() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi()
      cal("ui", {
        theme: "dark",
        styles: {
          branding: {
            brandColor: "#253745"
          }
        },
        hideEventTypeDetails: false,
      })
    })()
  }, [])

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