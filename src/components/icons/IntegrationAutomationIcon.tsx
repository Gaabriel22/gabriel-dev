import React from "react"

export default function IntegrationAutomationIcon({ className = "" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`h-8 w-8 ${className}`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 14H4v7h7" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 10h3V3h-7" />
    </svg>
  )
}
