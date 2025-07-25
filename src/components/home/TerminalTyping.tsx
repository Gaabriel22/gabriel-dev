"use client"

import phrases from "@/lib/phrases"
import { useEffect, useState } from "react"

export default function TerminalTyping() {
  const [text, setText] = useState("")
  const [index, setIndex] = useState(0)
  const [letter, setLetter] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    if (isPaused) return

    let typingSpeed = isDeleting ? 50 : 100
    const currentPhrase = phrases[index]

    const timer = setTimeout(() => {
      const updatedLetter = isDeleting ? letter - 1 : letter + 1
      setLetter(updatedLetter)
      setText(currentPhrase.substring(0, updatedLetter))

      if (!isDeleting && updatedLetter === currentPhrase.length) {
        setIsPaused(true)
        setTimeout(() => {
          setIsPaused(false)
          setIsDeleting(true)
        }, 1500)
      }

      if (isDeleting && updatedLetter === 0) {
        setIsDeleting(false)
        setIndex((prev) => (prev + 1) % phrases.length)
      }
    }, typingSpeed)

    return () => clearTimeout(timer)
  }, [letter, isDeleting, index, isPaused])

  return (
    <p className="text-gree-400 font-mono text-sm">
      <span>$</span> <span>{text}</span>
      <span className="terminal-cursor">|</span>
    </p>
  )
}
