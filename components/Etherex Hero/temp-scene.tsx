"use client"
\
You are given a task to integrate an existing React component in the codebase

The codebase should support:
- shadcn project structure  
- Tailwind CSS
- Typescript

\
If it doesn't, provide instructions on how to setup project via shadcn CLI, install Tailwind or Typescript.

\
Determine the default path
for components and styles.
\
If default path
for components is not /components/ui, provide instructions
on
why
it
's important to create this folder
Copy-paste this component to /components/ui folder:
```tsx
hero-section.tsx
import React, { useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Shape, ExtrudeGeometry } from "three"

const Box = ({ position, rotation }) => {
  const shape = new Shape()
  const angleStep = Math.PI * 0.5
  const radius = 1

  shape.absarc(2, 2, radius, angleStep * 0, angleStep * 1)
  shape.absarc(-2, 2, radius, angleStep * 1, angleStep * 2)
  shape.absarc(-2, -2, radius, angleStep * 2, angleStep * 3)
  shape.absarc(2, -2, radius, angleStep * 3, angleStep * 4)

  const extrudeSettings = {
    depth: 0.3,
    bevelEnabled: true,
    bevelThickness: 0.05,
    bevelSize: 0.05,
    bevelSegments: 20,
    curveSegments: 20,
  }

  const geometry = new ExtrudeGeometry(shape, extrudeSettings)
  geometry.center()

  return (
    <mesh geometry={geometry} position={position} rotation={rotation}>
      <meshPhysicalMaterial
        color="#232323"
        metalness={1}
        roughness={0.3}
        reflectivity={0.5}
        ior={1.5}
        emissive="#000000"
        emissiveIntensity={0}
        transparent={false}
        opacity={1.0}
        transmission={0.0}
        thickness={0.5}
        clearcoat={0.0}
        clearcoatRoughness={0.0}
        sheen={0}
        sheenRoughness={1.0}
        sheenColor="#ffffff"
        specularIntensity={1.0}
        specularColor="#ffffff"
        iridescence={1}
        iridescenceIOR={1.3}
        iridescenceThicknessRange={[100, 400]}
        flatShading={false}
        side={0}
        alphaTest={0}
        depthWrite={true}
        depthTest={true}
      />
    </mesh>
  )
}

const AnimatedBoxes = () => {
  const groupRef = useRef()

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.x += delta * 0.05
    }
  })

  const boxes = Array.from({ length: 50 }, (_, index) => ({
    position: [(index - 25) * 0.75, 0, 0],
    rotation: [(index - 10) * 0.1, Math.PI / 2, 0],
    id: index,
  }))

  return (
    <group ref={groupRef}>
      {boxes.map((box) => (
        <Box key={box.id} position={box.position} rotation={box.rotation} />
      ))}
    </group>
  )
}

export const Scene = () => {
  const [cameraPosition, setCameraPosition] = React.useState([5, 5, 20])

  return (
    <div className="w-full h-full z-0">
      <Canvas camera={{ position: cameraPosition, fov: 40 }}>
        <ambientLight intensity={15} />
        <directionalLight position={[10, 10, 5]} intensity={15} />
        <AnimatedBoxes />
      </Canvas>
    </div>
  )
}

demo.tsx
import { Scene } from "@/components/ui/hero-section"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Cpu, ShieldCheck, Layers, Zap } from "lucide-react"

const features = [
  {
    icon: Cpu,
    title: "Performance",
    description: "Ultra-fast data processing in every situation.",
  },
  {
    icon: ShieldCheck,
    title: "Security",
    description: "Advanced protection for complete peace of mind.",
  },
  {
    icon: Layers,
    title: "Modularity",
    description: "Easy integration with existing architecture.",
  },
  {
    icon: Zap,
    title: "Responsiveness",
    description: "Instant response to every command.",
  },
]

const DemoOne = () => {
  return (
    <div className="min-h-svh w-screen bg-linear-to-br from-[#000] to-[#1A2428] text-white flex flex-col items-center justify-center p-8">
      <div className="w-full max-w-6xl space-y-12 relative z-10">
        <div className="flex flex-col items-center text-center space-y-8">
          <Badge
            variant="secondary"
            className="backdrop-blur-sm bg-white/10 border border-white/20 text-white hover:bg-white/20 px-4 py-2 rounded-full"
          >
            ✨ Next Generation Tools
          </Badge>

          <div className="space-y-6 flex items-center justify-center flex-col ">
            <h1 className=" text-3xl md:text-6xl font-semibold tracking-tight max-w-3xl">
              Discover minimalism and power in one place
            </h1>
            <p className="text-lg text-neutral-300 max-w-2xl">
              Designed with aesthetics and performance in mind. Experience ultra-fast processing, advanced security, and
              intuitive design.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 items-center">
              <Button className="text-sm px-8 py-3 rounded-xl bg-white text-black border border-white/10 shadow-none hover:bg-white/90 transition-none">
                Get Started
              </Button>
              <Button className="text-sm px-8 py-3 rounded-xl bg-transparent text-white border border-white/20 shadow-none hover:bg-white/10 transition-none">
                Learn More
              </Button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-xl p-4 md:p-6 h-40 md:h-48 flex flex-col justify-start items-start space-y-2 md:space-y-3"
            >
              <feature.icon size={18} className="text-white/80 md:w-5 md:h-5" />
              <h3 className="text-sm md:text-base font-medium">{feature.title}</h3>
              <p className="text-xs md:text-sm text-neutral-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute inset-0">
        <Scene />
      </div>
    </div>
  )
}

export { DemoOne }
