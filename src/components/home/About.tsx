"use client"

import { useScrollReveal } from "@/hooks/useScrollReveal"

export default function About() {
  useScrollReveal

  return (
    <>
      <section id="about" className="py-20 bg-black bg-opacity-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center neon-text-blue">
            <span className="neon-text-coral">//</span> Sobre & Formação
          </h2>

          <div className="flex flex-col md:flex-row gap-12">
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold mb-6 neon-text-coral">Minha Jornada</h3>

              <div className="relative pl-8 space-y-8">
                <div className="timeline-item relative">
                  <h4 className="text-xl font-bold text-white">Tecnologo em Análise e Desenvolvimento de Sistemas</h4>
                  <p className="text-gray-400">Universidade Paulista - 2022-2023</p>
                  <p className="text-gray-300 mt-2">
                    Formação voltada para o desenvolvimento de software, gestão de projetos de TI, análise de sistemas,
                    modelagem de dados, consultoria em tecnologia da informação e soluções baseadas em nuvem.
                  </p>
                </div>

                <div className="timeline-item relative">
                  <h4 className="text-xl font-bold text-white">Desenvolvedor Full-Stack JavaScript</h4>
                  <p className="text-gray-400">OneBitCode - 2023-2024</p>
                  <p className="text-gray-300 mt-2">
                    Formação intensiva com foco em desenvolvimento web utilizando tecnologias modernas como HTML5, CSS3,
                    JavaScript, TypeScript, React, Node.js, Next.js, Express, SQL e MongoDB.
                  </p>
                </div>

                <div className="timeline-item relative">
                  <h4 className="text-xl font-bold text-white">Auxiliar de TI</h4>
                  <p className="text-gray-400">Super Mercado Castanha - 2024-2025</p>
                  <p className="text-gray-300 mt-2">
                    Desenvolvimento e manutenção de ferramentas internas em ambiente real, com foco em automação de
                    processos, organização de dados e suporte técnico.
                  </p>
                </div>
              </div>
            </div>

            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold mb-6 neon-text-blue">Hablidades Técnicas</h3>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 neon-border-blue rounded-lg">
                  <h4 className="font-bold mb-2">Front-end</h4>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full bg-blue-500 mr-2"></div>
                      <span>React</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full bg-blue-500 mr-2"></div>
                      <span>Next.js</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full bg-blue-500 mr-2"></div>
                      <span>TailwindCSS</span>
                    </div>
                  </div>
                </div>

                <div className="p-4 neon-border-blue rounded-lg">
                  <h4 className="font-bold mb-2">Back-end</h4>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full bg-pink-500 mr-2"></div>
                      <span>Node.js</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full bg-pink-500 mr-2"></div>
                      <span>Express</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full bg-pink-500 mr-2"></div>
                      <span>Puppeteer</span>
                    </div>
                  </div>
                </div>

                <div className="p-4 neon-border-blue rounded-lg">
                  <h4 className="font-bold mb-2">Banco de Dados</h4>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full bg-purple-500 mr-2"></div>
                      <span>MongoDB</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full bg-purple-500 mr-2"></div>
                      <span>PostgreSQL</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full bg-purple-500 mr-2"></div>
                      <span>Redis</span>
                    </div>
                  </div>
                </div>

                <div className="p-4 neon-border-blue rounded-lg">
                  <h4 className="font-bold mb-2">DevOps/Ferramentas</h4>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                      <span>GIT</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                      <span>Make (Integromat)</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                      <span>Docker</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="font-bold mb-4 neon-text-coral">Certificações</h4>
                <div className="flex flex-wrap gap-4">
                  <div className="p-3 neon-border-coral rounded-lg hover:bg-pink-500 hover:bg-opacity-10 transition cursor-pointer">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center mr-2">
                        <span className="text-xs font-bold">OBC</span>
                      </div>
                      <span>Full-Stack JavaScript</span>
                    </div>
                  </div>
                  <div className="p-3 neon-border-coral rounded-lg hover:bg-pink-500 hover:bg-opacity-10 transition cursor-pointer">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-2">
                        <span className="text-xs font-bold">OBC</span>
                      </div>
                      <span>Formação IA para Devs</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
