"use client"

import { useEffect, useMemo, useState } from "react"
import Particles from "@tsparticles/react"
import { initParticlesEngine } from "@tsparticles/react"
import type { Engine, Container, ISourceOptions } from "@tsparticles/engine"
import { loadSlim } from "@tsparticles/slim"

const ParticlesBackground = () => {
  const [init, setInit] = useState(false)

  useEffect(() => {
    initParticlesEngine(async (engine: Engine) => {
      await loadSlim(engine)
    }).then(() => {
      setInit(true)
    })
  }, [])

  const particlesLoaded = async (container?: Container): Promise<void> => {}

  const options: ISourceOptions = useMemo(
    () => ({
      fullScreen: { enable: true, zIndex: -1 },
      particles: {
        number: {
          value: 80,
          density: {
            enable: true,
          },
        },
        color: {
          value: "#00f0ff",
        },
        shape: {
          type: "circle",
        },
        opacity: {
          value: 0.5,
        },
        size: {
          value: { min: 1, max: 5 },
        },
        links: {
          enable: true,
          distance: 150,
          color: "#00f0ff",
          opacity: 0.4,
          width: 1,
        },
        move: {
          enable: true,
          speed: 2,
          direction: "none",
          random: true,
          straight: false,
          outModes: {
            default: "out",
          },
        },
      },
      interactivity: {
        events: {
          onHover: {
            enable: true,
            mode: "repulse",
          },
          onClick: {
            enable: true,
            mode: "push",
          },
        },
        modes: {
          repulse: {
            distance: 100,
          },
          push: {
            quantity: 4,
          },
        },
      },
      detectRetina: true,
    }),
    []
  )

  if (!init) return null

  return <Particles id="tsparticles" options={options} particlesLoaded={particlesLoaded} />
}

export default ParticlesBackground
