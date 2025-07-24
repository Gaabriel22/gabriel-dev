"use client"

import Image from "next/image"

type ProjectModalProps = {
  title: string
  description: string
  githubUrl: string
  siteUrl: string
  imageUrl: string
  onClose: () => void
}

export default function ProjectModal({ title, description, githubUrl, siteUrl, imageUrl, onClose }: ProjectModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
      <div className="relative w-full max-w-2xl mx-auto rounded-xl overflow-hidden shadow-xl">
        {/* Imagem de fundo */}
        <div className="absolute inset-0 z-0">
          <Image src={imageUrl} alt={title} fill className="object-cover brightness-50" priority />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/90" />
        </div>

        {/* Conteúdo sobreposto */}
        <div className="relative z-10 px-8 pt-32 pb-10 text-white">
          <button onClick={onClose} className="absolute top-5 right-5 text-gray-300 hover:text-white transition">
            X
          </button>

          <h2 className="text-3xl font-bold mb-4">{title}</h2>
          <p className="text-gray-200 mb-6">{description}</p>

          <div className="flex gap-4">
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition"
            >
              Ver Código
            </a>
            <a
              href={siteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center px-4 py-2 bg-green-600 hover:bg-green-700 rounded-lg font-semibold transition"
            >
              Ver Site
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
