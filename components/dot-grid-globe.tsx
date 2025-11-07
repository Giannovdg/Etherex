"use client"

import { useEffect, useRef } from "react"
import { cn } from "@/lib/utils"

interface DotGridGlobeProps {
  className?: string
  size?: number
}

export function DotGridGlobe({ className, size = 400 }: DotGridGlobeProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number>()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas size
    canvas.width = size
    canvas.height = size

    // Globe parameters
    const centerX = size / 2
    const centerY = size / 2
    const radius = size * 0.35
    const dotCount = 2000
    const rotationSpeed = 0.005

    // Dot structure
    interface Dot {
      x: number
      y: number
      z: number
      originalX: number
      originalY: number
      originalZ: number
      alpha: number
      size: number
    }

    // Generate dots on sphere surface
    const dots: Dot[] = []
    for (let i = 0; i < dotCount; i++) {
      const phi = Math.acos(2 * Math.random() - 1) // Uniform distribution on sphere
      const theta = 2 * Math.PI * Math.random()
      
      const x = radius * Math.sin(phi) * Math.cos(theta)
      const y = radius * Math.sin(phi) * Math.sin(theta)
      const z = radius * Math.cos(phi)
      
      dots.push({
        x,
        y,
        z,
        originalX: x,
        originalY: y,
        originalZ: z,
        alpha: Math.random() * 0.8 + 0.2,
        size: Math.random() * 2 + 1
      })
    }

    let time = 0

    const animate = () => {
      ctx.clearRect(0, 0, size, size)
      
      // Create radial gradient for glow effect
      const gradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, radius * 1.5)
      gradient.addColorStop(0, "rgba(59, 130, 246, 0.1)")
      gradient.addColorStop(0.5, "rgba(59, 130, 246, 0.05)")
      gradient.addColorStop(1, "rgba(59, 130, 246, 0)")
      
      // Draw glow background
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, size, size)

      // Rotate and project dots
      dots.forEach((dot, index) => {
        // Rotate around Y axis
        const rotatedX = dot.originalX * Math.cos(time) - dot.originalZ * Math.sin(time)
        const rotatedZ = dot.originalX * Math.sin(time) + dot.originalZ * Math.cos(time)
        
        // Simple perspective projection
        const perspective = 300
        const projectedX = centerX + (rotatedX * perspective) / (perspective + rotatedZ)
        const projectedY = centerY + (dot.originalY * perspective) / (perspective + rotatedZ)
        
        // Calculate depth-based alpha and size
        const depthFactor = (rotatedZ + radius) / (2 * radius)
        const alpha = dot.alpha * depthFactor * 0.8
        const dotSize = dot.size * (0.5 + depthFactor * 0.5)
        
        // Only draw dots that are visible (front-facing)
        if (rotatedZ > -radius * 0.8 && alpha > 0.1) {
          // Add subtle pulsing effect
          const pulse = Math.sin(time * 3 + index * 0.1) * 0.2 + 0.8
          
          // Draw dot with glow
          ctx.save()
          ctx.globalAlpha = alpha * pulse
          
          // Outer glow
          const glowGradient = ctx.createRadialGradient(
            projectedX, projectedY, 0,
            projectedX, projectedY, dotSize * 3
          )
          glowGradient.addColorStop(0, "rgba(59, 130, 246, 0.8)")
          glowGradient.addColorStop(0.3, "rgba(59, 130, 246, 0.4)")
          glowGradient.addColorStop(1, "rgba(59, 130, 246, 0)")
          
          ctx.fillStyle = glowGradient
          ctx.beginPath()
          ctx.arc(projectedX, projectedY, dotSize * 3, 0, Math.PI * 2)
          ctx.fill()
          
          // Inner dot
          ctx.fillStyle = `rgba(147, 197, 253, ${alpha * pulse})`
          ctx.beginPath()
          ctx.arc(projectedX, projectedY, dotSize, 0, Math.PI * 2)
          ctx.fill()
          
          ctx.restore()
        }
      })

      // Add connecting lines between nearby dots for network effect
      ctx.save()
      ctx.globalAlpha = 0.3
      ctx.strokeStyle = "rgba(59, 130, 246, 0.2)"
      ctx.lineWidth = 0.5
      
      for (let i = 0; i < dots.length; i += 10) { // Sample every 10th dot for performance
        const dot1 = dots[i]
        const rotatedX1 = dot1.originalX * Math.cos(time) - dot1.originalZ * Math.sin(time)
        const rotatedZ1 = dot1.originalX * Math.sin(time) + dot1.originalZ * Math.cos(time)
        
        if (rotatedZ1 > -radius * 0.5) {
          const perspective = 300
          const projectedX1 = centerX + (rotatedX1 * perspective) / (perspective + rotatedZ1)
          const projectedY1 = centerY + (dot1.originalY * perspective) / (perspective + rotatedZ1)
          
          for (let j = i + 1; j < Math.min(i + 20, dots.length); j++) {
            const dot2 = dots[j]
            const rotatedX2 = dot2.originalX * Math.cos(time) - dot2.originalZ * Math.sin(time)
            const rotatedZ2 = dot2.originalX * Math.sin(time) + dot2.originalZ * Math.cos(time)
            
            if (rotatedZ2 > -radius * 0.5) {
              const projectedX2 = centerX + (rotatedX2 * perspective) / (perspective + rotatedZ2)
              const projectedY2 = centerY + (dot2.originalY * perspective) / (perspective + rotatedZ2)
              
              const distance = Math.sqrt(
                Math.pow(projectedX2 - projectedX1, 2) + Math.pow(projectedY2 - projectedY1, 2)
              )
              
              if (distance < 50) {
                ctx.beginPath()
                ctx.moveTo(projectedX1, projectedY1)
                ctx.lineTo(projectedX2, projectedY2)
                ctx.stroke()
              }
            }
          }
        }
      }
      ctx.restore()

      time += rotationSpeed
      animationRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [size])

  return (
    <div className={cn("relative", className)}>
      <canvas
        ref={canvasRef}
        className="w-full h-full"
        style={{ filter: "drop-shadow(0 0 20px rgba(59, 130, 246, 0.3))" }}
      />
    </div>
  )
}