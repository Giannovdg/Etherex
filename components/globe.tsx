"use client"
import type React from "react"
import { useEffect, useRef, memo, useCallback } from "react"
import createGlobe from "cobe"
import { cn } from "@/lib/utils"

interface EarthProps {
  className?: string
  theta?: number
  dark?: number
  scale?: number
  diffuse?: number
  mapSamples?: number
  mapBrightness?: number
  baseColor?: [number, number, number]
  markerColor?: [number, number, number]
  glowColor?: [number, number, number]
}

const Earth: React.FC<EarthProps> = memo(({
  className,
  theta = 0.25,
  dark = 1,
  scale = 1.1,
  diffuse = 1.2,
  mapSamples = 20000, // Reduced from 40000 for better performance
  mapBrightness = 6,
  baseColor = [0.4, 0.6509, 1],
  markerColor = [1, 0, 0],
  glowColor = [0.2745, 0.5765, 0.898],
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  const onRender = useCallback((state: Record<string, any>) => {
    state.phi += 0.002 // Slightly slower rotation for smoother performance
  }, [])

  useEffect(() => {
    if (!canvasRef.current) return

    let width = 0
    let animationId: number
    
    const onResize = () => {
      if (canvasRef.current) {
        width = canvasRef.current.offsetWidth
      }
    }
    
    // Use ResizeObserver for better performance if available
    const resizeObserver = window.ResizeObserver ? new ResizeObserver(onResize) : null
    
    if (resizeObserver && canvasRef.current) {
      resizeObserver.observe(canvasRef.current)
    } else {
      window.addEventListener("resize", onResize)
    }
    
    onResize()

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: Math.min(window.devicePixelRatio, 1.5), // Limit DPR for performance
      width: width * 2,
      height: width * 2,
      phi: 0,
      theta: theta,
      dark: dark,
      scale: scale,
      diffuse: diffuse,
      mapSamples: mapSamples,
      mapBrightness: mapBrightness,
      baseColor: baseColor,
      markerColor: markerColor,
      glowColor: glowColor,
      opacity: 1,
      offset: [0, 0],
      markers: [],
      onRender: onRender,
    })

    return () => {
      globe.destroy()
      if (resizeObserver) {
        resizeObserver.disconnect()
      } else {
        window.removeEventListener("resize", onResize)
      }
      if (animationId) {
        cancelAnimationFrame(animationId)
      }
    }
  }, [theta, dark, scale, diffuse, mapSamples, mapBrightness, baseColor, markerColor, glowColor, onRender])

  return (
    <div className={cn("flex items-center justify-center z-[10] w-full max-w-[350px] mx-auto", className)}>
      <canvas
        ref={canvasRef}
        style={{
          width: "100%",
          height: "100%",
          maxWidth: "100%",
          aspectRatio: "1",
        }}
      />
    </div>
  )
})

export default Earth