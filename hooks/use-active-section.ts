"use client"

import { useState, useEffect } from "react"

export function useActiveSection() {
  const [activeSection, setActiveSection] = useState<string>("home")

  useEffect(() => {
    const observers: IntersectionObserver[] = []
    
    // Options for the observer
    const options = {
      threshold: 0.6, // 60% of section must be visible
      rootMargin: "-10% 0px -45% 0px" // Adjusts the detection box
    }

    // Callback when intersection changes
    const callback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id
          setActiveSection(sectionId)
        }
      })
    }

    // Create an observer for each section
    const sections = document.querySelectorAll("section[id]")
    sections.forEach((section) => {
      const observer = new IntersectionObserver(callback, options)
      observer.observe(section)
      observers.push(observer)
    })

    // Cleanup
    return () => {
      observers.forEach((observer) => observer.disconnect())
    }
  }, [])

  return activeSection
} 