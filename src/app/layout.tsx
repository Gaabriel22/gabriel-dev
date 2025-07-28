import type { Metadata } from "next"
import { JetBrains_Mono, Orbitron } from "next/font/google"
import "./globals.css"

const geistSans = JetBrains_Mono({
  variable: "--font-jetBrains-mono",
  subsets: ["latin"],
})

const geistMono = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Gabriel Amaral | Desenvolvedor Full Stack",
  description: "Desenvolvedor Full Stack especializado em Next.js, React, Tailwind CSS e aplicações modernas.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
    </html>
  )
}
