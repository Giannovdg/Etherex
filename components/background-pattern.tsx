"use client"

import { useEffect, useRef } from "react"
import { cn } from "@/lib/utils"

interface BackgroundPatternProps {
  className?: string
}

export function BackgroundPattern({ className }: BackgroundPatternProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number>()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    let time = 0

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      // Create subtle geometric pattern
      ctx.save()
      ctx.globalAlpha = 0.03
      
      // Draw subtle grid pattern
      const gridSize = 60
      ctx.strokeStyle = "rgba(59, 130, 246, 0.1)"
      ctx.lineWidth = 0.5
      
      for (let x = 0; x < canvas.width; x += gridSize) {
        for (let y = 0; y < canvas.height; y += gridSize) {
          const wave = Math.sin(time * 0.001 + x * 0.01 + y * 0.01) * 10
          ctx.beginPath()
          ctx.moveTo(x, y)
          ctx.lineTo(x + gridSize + wave, y)
          ctx.lineTo(x + gridSize + wave, y + gridSize)
          ctx.lineTo(x, y + gridSize)
          ctx.closePath()
          ctx.stroke()
        }
      }
      
      // Add floating geometric shapes
      ctx.globalAlpha = 0.02
      const shapeCount = 8
      
      for (let i = 0; i < shapeCount; i++) {
        const x = (canvas.width / shapeCount) * i + Math.sin(time * 0.0005 + i) * 100
        const y = canvas.height * 0.3 + Math.cos(time * 0.0007 + i) * 50
        const size = 40 + Math.sin(time * 0.001 + i) * 20
        
        ctx.fillStyle = "rgba(59, 130, 246, 0.05)"
        ctx.beginPath()
        
        // Draw hexagon
        for (let j = 0; j < 6; j++) {
          const angle = (j * Math.PI) / 3 + time * 0.0003
          const pointX = x + Math.cos(angle) * size
          const pointY = y + Math.sin(angle) * size
          
          if (j === 0) {
            ctx.moveTo(pointX, pointY)
          } else {
            ctx.lineTo(pointX, pointY)
          }
        }
        
        ctx.closePath()
        ctx.fill()
      }
      
      // Add subtle wave lines
      ctx.globalAlpha = 0.04
      ctx.strokeStyle = "rgba(59, 130, 246, 0.1)"
      ctx.lineWidth = 1
      
      for (let i = 0; i < 3; i++) {
        ctx.beginPath()
        const yOffset = canvas.height * (0.2 + i * 0.3)
        
        for (let x = 0; x <= canvas.width; x += 5) {
          const y = yOffset + Math.sin(x * 0.01 + time * 0.001 + i) * 30
          
          if (x === 0) {
            ctx.moveTo(x, y)
          } else {
            ctx.lineTo(x, y)
          }
        }
        
        ctx.stroke()
      }
      
      ctx.restore()
      
      time += 1
      animationRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className={cn("fixed inset-0 pointer-events-none z-0", className)}
      style={{ background: "linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%)" }}
    />
  )
}