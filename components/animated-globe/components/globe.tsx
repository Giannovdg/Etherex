"use client"

import { useEffect, useRef } from "react"
import createGlobe from "cobe"
import { useSpring } from "react-spring"

export function Globe() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const pointerInteracting = useRef<number | null>(null)
  const pointerInteractionMovement = useRef(0)

  const [{ r }, api] = useSpring(() => ({
    r: 0,
    config: {
      mass: 1,
      tension: 280,
      friction: 40,
      precision: 0.001,
    },
  }))

  useEffect(() => {
    let phi = 0
    let width = 0

    const onResize = () => {
      if (canvasRef.current) {
        width = canvasRef.current.offsetWidth
      }
    }

    window.addEventListener("resize", onResize)
    onResize()

    if (!canvasRef.current) return

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: width * 2,
      height: width * 2,
      phi: 0,
      theta: 0.3,
      dark: 1,
      diffuse: 3,
      mapSamples: 16000,
      mapBrightness: 1.2,
      baseColor: [0.1, 0.1, 0.15],
      markerColor: [0.6, 0.3, 0.9],
      glowColor: [0.5, 0.2, 0.8],
      markers: [
        { location: [37.7749, -122.4194], size: 0.03 },
        { location: [40.7128, -74.006], size: 0.1 },
        { location: [51.5074, -0.1278], size: 0.05 },
        { location: [35.6762, 139.6503], size: 0.07 },
        { location: [-33.8688, 151.2093], size: 0.05 },
        { location: [1.3521, 103.8198], size: 0.05 },
        { location: [48.8566, 2.3522], size: 0.05 },
        { location: [55.7558, 37.6173], size: 0.05 },
        { location: [28.6139, 77.209], size: 0.05 },
        { location: [-23.5505, -46.6333], size: 0.05 },
      ],
      onRender: (state) => {
        if (!pointerInteracting.current) {
          phi += 0.005
        }
        state.phi = phi + r.get()
        state.width = width * 2
        state.height = width * 2
      },
    })

    setTimeout(() => {
      if (canvasRef.current) {
        canvasRef.current.style.opacity = "1"
      }
    }, 100)

    return () => {
      globe.destroy()
      window.removeEventListener("resize", onResize)
    }
  }, [r])

  return (
    <div className="relative w-full h-full">
      <canvas
        ref={canvasRef}
        onPointerDown={(e) => {
          pointerInteracting.current = e.clientX - pointerInteractionMovement.current
          if (canvasRef.current) {
            canvasRef.current.style.cursor = "grabbing"
          }
        }}
        onPointerUp={() => {
          pointerInteracting.current = null
          if (canvasRef.current) {
            canvasRef.current.style.cursor = "grab"
          }
        }}
        onPointerOut={() => {
          pointerInteracting.current = null
          if (canvasRef.current) {
            canvasRef.current.style.cursor = "grab"
          }
        }}
        onMouseMove={(e) => {
          if (pointerInteracting.current !== null) {
            const delta = e.clientX - pointerInteracting.current
            pointerInteractionMovement.current = delta
            api.start({
              r: delta / 200,
            })
          }
        }}
        onTouchMove={(e) => {
          if (pointerInteracting.current !== null && e.targetTouches[0]) {
            const delta = e.targetTouches[0].clientX - pointerInteracting.current
            pointerInteractionMovement.current = delta
            api.start({
              r: delta / 100,
            })
          }
        }}
        className="w-full h-full opacity-0 transition-opacity duration-500 cursor-grab"
        style={{
          contain: "layout paint size",
        }}
      />
    </div>
  )
}
