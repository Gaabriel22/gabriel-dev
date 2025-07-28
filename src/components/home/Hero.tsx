import Image from "next/image"
import TerminalTyping from "./TerminalTyping"
import ParticlesBackground from "./ParticlesBackground"

export default function Hero() {
  return (
    <>
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
        <ParticlesBackground />
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 flex flex-col space-y-8">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              <span className="neon-text-blue">Transformando </span>
              <span className="neon-text-coral">ideias </span>
              em código escalável
            </h1>

            <div className="terminal bg-black bg-opacity-70 p-6 rounded-lg neon-border-blue max-w-2xl">
              <div className="flex space-x-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="font-mono">
                <TerminalTyping />
              </div>
            </div>

            <p className="text-gray-300 text-lg">
              Soluções digitais personalizadas com tecnologias modernas e arquitetura robusta.
            </p>

            <div className="flex space-x-4">
              <a
                href="#projects"
                className="px-8 py-3 bg-gradient-to-r from-blue-500 to-pink-500 rounded-full font-bold glow-on-hover transition"
              >
                Ver Projetos
              </a>
              <a
                href="#contact"
                className="px-8 py-3 border border-neon-blue text-neon-blue rounded-full font-bold neon-text-blue-hover hover:bg-opacity-10 transition"
              >
                Fale Comigo
              </a>
            </div>
          </div>

          <div className="md:w-1/2 mt-12 md:mt-0 flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full neon-border-blue animate-pulse"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-56 h-56 md:w-72 md:h-72 rounded-full bg-gradient-to-br from-blue-500 to-pink-500 opacity-20 animate-spin-slow"></div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-48 h-48 md:w-64 md:h-64 rounded-full bg-black"></div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <Image
                  src="/images/avatar.jpg"
                  alt="Gabriel Amaral Perfil"
                  fill
                  className="w-40 h-40 md:w-52 md:h-52 rounded-full object-cover border-4 border-black"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
