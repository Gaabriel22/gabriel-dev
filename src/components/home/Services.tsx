"use client"

import { useScrollReveal } from "@/hooks/useScrollReveal"
import CheckIcon from "../icons/CheckIcon"
import IntegrationAutomationIcon from "../icons/IntegrationAutomationIcon"
import MaintenanceOptimizationIcon from "../icons/MaintenanceOptimizationIcon"
import MonitorIcon from "../icons/MonitorIcon"

export default function Services() {
  useScrollReveal()

  return (
    <>
      <section id="services" className="py-20 bg-black bg-opacity-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center neon-text-blue">
            <span className="neon-text-coral">//</span>Serviços Oferecidos
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            Soluções completas desde o conceito até a implantação e manutenção.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="service-card bg-black bg-opacity-70 p-8 rounded-lg neon-border-blue transition duration-300">
              <div className="w-16 h-16 bg-blue-900 bg-opacity-50 rounded-full flex items-center justify-center mb-6 neon-border-blue">
                <MonitorIcon className="text-blue-400" />
              </div>
              <h3 className="text-xl font-bold mb-3">Desenvolvimento Full-Stack</h3>
              <p className="space-y-2 mb-2 text-gray-400">
                Aplicações full stack completas, do front ao back, com deploy em nuvem e integração contínua.
              </p>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center">
                  <CheckIcon className="mr-2 text-blue-400" />
                  React, Next.js ou Angular
                </li>
                <li className="flex items-center">
                  <CheckIcon className="mr-2 text-blue-400" />
                  Node.js com Express ou Nest.js
                </li>
                <li className="flex items-center">
                  <CheckIcon className="mr-2 text-blue-400" />
                  Bancos SQL e NoSQL
                </li>
              </ul>
            </div>

            {/* Service 2 */}
            <div className="service-card bg-black bg-opacity-70 p-8 rounded-lg neon-border-coral transition duration-300">
              <div className="w-16 h-16 bg-coral-900 bg-opacity-50 rounded-full flex items-center justify-center mb-6 neon-border-coral">
                <MaintenanceOptimizationIcon className="text-pink-400" />
              </div>
              <h3 className="text-xl font-bold mb-3">Manutenção & Otimização de Sistemas</h3>
              <p className="space-y-2 mb-2 text-gray-400">
                Correção de bugs, melhorias incrementais e otimização de performance para garantir que sua aplicação
                continue estável, rápida e eficiente.
              </p>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center">
                  <CheckIcon className="mr-2 text-red-400" />
                  Diagnóstico e correção de erros
                </li>
                <li className="flex items-center">
                  <CheckIcon className="mr-2 text-red-400" />
                  Refatoração e boas práticas
                </li>
                <li className="flex items-center">
                  <CheckIcon className="mr-2 text-red-400" />
                  Melhoria de performance e SEO
                </li>
              </ul>
            </div>

            {/* Service 3 */}
            <div className="service-card bg-black bg-opacity-70 p-8 rounded-lg neon-border-blue transition duration-300">
              <div className="w-16 h-16 bg-blue-900 bg-opacity-50 rounded-full flex items-center justify-center mb-6 neon-border-blue">
                <IntegrationAutomationIcon className="text-blue-400" />
              </div>
              <h3 className="text-xl font-bold mb-3">Integrações & Automação de Processos</h3>
              <p className="space-y-2 mb-2 text-gray-400">
                Criação de integrações com APIs de terceiros e automação de fluxos manuais para acelerar o seu negócio.
              </p>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center">
                  <CheckIcon className="mr-2 text-blue-400" />
                  Integração com APIs REST
                </li>
                <li className="flex items-center">
                  <CheckIcon className="mr-2 text-blue-400" />
                  Webhooks e serviços externos
                </li>
                <li className="flex items-center">
                  <CheckIcon className="mr-2 text-blue-400" />
                  Automatização com Make (Integromat), Zapier e afins
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
