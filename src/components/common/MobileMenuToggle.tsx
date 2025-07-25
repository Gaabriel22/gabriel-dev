"use client"

import { useEffect } from "react"

export default function MobileMenuToggle() {
  useEffect(() => {
    const menuBtn = document.getElementById("menu-btn")
    const mobileMenu = document.getElementById("mobile-menu")

    if (!menuBtn || !mobileMenu) return

    menuBtn.addEventListener("click", () => {
      menuBtn.classList.toggle("active")
      mobileMenu.classList.toggle("hidden")
    })
  }, [])

  return null
}
