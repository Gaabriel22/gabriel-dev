"use client"

import { useState } from "react"
import ProjectModal from "../common/ProjectModal"
import Image from "next/image"
import ArrowRightIcon from "../icons/ArrowRightIcon"
import { useScrollReveal } from "@/hooks/useScrollReveal"

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<null | {
    title: string
    description: string
    githubUrl: string
    siteUrl: string
    imageUrl: string
  }>(null)

  useScrollReveal()

  return (
    <>
      <section id="projects" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center neon-text-coral ">
            <span className="neon-text-blue">//</span> Projetos Recentes
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            Soluções personalizadas que combinam design intuitivo com tecnologia de ponta.
          </p>

          <div className="flex justify-center mb-8">
            <div className="inline-flex rounded-md shadow-sm" role="group">
              <button type="button" className="px-4 py-2 text-sm font-medium rounded-l-lg bg-blue-500 text-white">
                Todos
              </button>
              <button
                type="button"
                className="px-4 py-2 text-sm font-medium bg-gray-800 text-gray-300 hover:bg-gray-700"
              >
                Web Apps
              </button>
              <button
                type="button"
                className="px-4 py-2 text-sm font-medium rounded-r-lg bg-gray-800 text-gray-300 hover:bg-gray-700"
              >
                Open Source
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1 */}
            <div className="project-card bg-black bg-opacity-50 rounded-lg overflow-hidden transition duration-500 transform hover:shadow-lg">
              <div className="relative h-48 overflow-hidden">
                <Image alt="flowentic" src={"/images/flowentic.png"} fill className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-75"></div>
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-xl font-bold text-white">Flowentic</h3>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <span className="text-xs px-2 py-1 rounded-full bg-blue-900 text-blue-300">React</span>
                    <span className="text-xs px-2 py-1 rounded-full bg-purple-900 text-purple-300">Bootstrap</span>
                    <span className="text-xs px-2 py-1 rounded-full bg-pink-900 text-pink-300">Sass</span>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-300 mb-4">
                  Site institucional moderno para Flowentic — Uma empresa de automação empresarial
                </p>
                <div className="flex justify-between items-center">
                  <button
                    onClick={() =>
                      setSelectedProject({
                        title: "Flowentic",
                        description:
                          "Site institucional moderno para uma empresa de automação empresarial, com foco em responsividade, identidade visual e performance.",
                        githubUrl: "https://github.com/Gaabriel22/flowentic",
                        siteUrl: "https://flowentic.vercel.app/",
                        imageUrl: "/images/flowentic.png",
                      })
                    }
                    className="text-blue-400 hover:text-blue-300 flex items-center"
                  >
                    <span>Ver detalhes</span>
                    <ArrowRightIcon />
                  </button>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="project-card bg-black bg-opacity-50 rounded-lg overflow-hidden transition duration-500 transform hover:shadow-lg">
              <div className="relative h-48 overflow-hidden">
                <Image
                  alt="flowentic"
                  src={"/images/construtora-excelencia.png"}
                  fill
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-75"></div>
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-xl font-bold text-white">Construtora Excelência</h3>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <span className="text-xs px-2 py-1 rounded-full bg-orange-900 text-orange-300">HTML</span>
                    <span className="text-xs px-2 py-1 rounded-full bg-yellow-900 text-yellow-300">JavaScript</span>
                    <span className="text-xs px-2 py-1 rounded-full bg-blue-900 text-blue-300">TailwindCSS</span>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-300 mb-4">
                  Landing page institucional para construtora de alto padrão, com foco em design elegante,
                  responsividade e código bem estruturado.
                </p>
                <div className="flex justify-between items-center">
                  <button
                    onClick={() =>
                      setSelectedProject({
                        title: "Construtora Excelência",
                        description:
                          "Landing page institucional fictícia criada com foco em apresentar os serviços e diferenciais de uma construtora de alto padrão. Este projeto foi desenvolvido com atenção aos detalhes visuais, responsividade e boas práticas de organização de código.",
                        githubUrl: "https://github.com/Gaabriel22/construtora-excelencia",
                        siteUrl: "https://gaabriel22.github.io/construtora-excelencia/",
                        imageUrl: "/images/construtora-excelencia.png",
                      })
                    }
                    className="text-blue-400 hover:text-blue-300 flex items-center"
                  >
                    <span>Ver detalhes</span>
                    <ArrowRightIcon />
                  </button>
                </div>
              </div>
            </div>

            {/* Project 3 */}
            <div className="project-card bg-black bg-opacity-50 rounded-lg overflow-hidden transition duration-500 transform hover:shadow-lg">
              <div className="relative h-48 overflow-hidden">
                <Image alt="flowentic" src={"/images/powerfit-gym.png"} fill className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-75"></div>
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-xl font-bold text-white">PowerFit Gym</h3>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <span className="text-xs px-2 py-1 rounded-full bg-orange-900 text-orange-300">HTML</span>
                    <span className="text-xs px-2 py-1 rounded-full bg-purple-900 text-purple-300">Bootstrap</span>
                    <span className="text-xs px-2 py-1 rounded-full bg-yellow-900 text-yellow-300">JavaScript</span>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-300 mb-4">
                  Site de academia moderna, criado como projeto de portfólio com foco em front-end.
                </p>
                <div className="flex justify-between items-center">
                  <button
                    onClick={() =>
                      setSelectedProject({
                        title: "PowerFit Gym",
                        description:
                          "Site de uma academia moderna e dinâmica, desenvolvido como projeto de portfólio para demonstrar habilidades em desenvolvimento front-end.",
                        githubUrl: "https://github.com/Gaabriel22/powerfit-gym",
                        siteUrl: "https://gaabriel22.github.io/powerfit-gym/",
                        imageUrl: "/images/powerfit-gym.png",
                      })
                    }
                    className="text-blue-400 hover:text-blue-300 flex items-center"
                  >
                    <span>Ver detalhes</span>
                    <ArrowRightIcon />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {selectedProject && (
        <ProjectModal
          title={selectedProject.title}
          description={selectedProject.description}
          githubUrl={selectedProject.githubUrl}
          siteUrl={selectedProject.siteUrl}
          imageUrl={selectedProject.imageUrl}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </>
  )
}
