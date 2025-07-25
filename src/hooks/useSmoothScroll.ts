"use client"

import { useEffect } from "react"

export function useSmoothScroll() {
  useEffect(() => {
    const anchors = document.querySelectorAll('a[href^="#"]')
    const menuBtn = document.getElementById("menu-btn")
    const mobileMenu = document.getElementById("mobile-menu")

    anchors.forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault()

        const targetAnchor = e.currentTarget as HTMLAnchorElement
        const href = targetAnchor.getAttribute("href")
        if (!href || href === "#") return

        const target = document.querySelector(href)
        if (!target) return

        window.scrollTo({
          top: target.getBoundingClientRect().top + window.scrollY - 80,
          behavior: "smooth",
        })

        if (mobileMenu && !mobileMenu.classList.contains("hidden")) {
          menuBtn?.classList.remove("active")
          mobileMenu.classList.add("hidden")
        }
      })
    })

    return () => {
      anchors.forEach((anchor) => anchor.removeEventListener("click", () => {}))
    }
  }, [])
}
