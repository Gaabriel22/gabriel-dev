"use client"

import { useEffect } from "react"

export function useScrollReveal() {
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>(".project-card, .service-card, .timeline-item")

    elements.forEach((el) => {
      el.style.opacity = "0"
      el.style.transform = "translateY(20px)"
      el.style.transition = "opacity 0.5s ease, transform 0.5s ease"
    })

    const animate = () => {
      elements.forEach((el) => {
        const top = el.getBoundingClientRect().top
        const threshold = window.innerHeight / 1.3
        if (top < threshold) {
          el.style.opacity = "1"
          el.style.transform = "translateY(0)"
        }
      })
    }

    window.addEventListener("scroll", animate)
    animate()

    return () => window.removeEventListener("scroll", animate)
  }, [])
}
