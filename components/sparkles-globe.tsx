"use client"

import { useEffect, useRef } from "react"
import { cn } from "@/lib/utils"

interface SparklesGlobeProps {
  density?: number
  className?: string
}

export function SparklesGblobe({ density = 1200, className }: SparklesGlobeProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    interface Sparkle {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      opacity: number
      fadeSpeed: number
    }

    const sparkles: Sparkle[] = []

    for (let i = 0; i < density / 10; i++) {
      sparkles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 0.5,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        opacity: Math.random(),
        fadeSpeed: Math.random() * 0.02 + 0.01,
      })
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      sparkles.forEach((sparkle) => {
        sparkle.x += sparkle.speedX
        sparkle.y += sparkle.speedY

        sparkle.opacity += sparkle.fadeSpeed
        if (sparkle.opacity >= 1 || sparkle.opacity <= 0) {
          sparkle.fadeSpeed *= -1
        }

        if (sparkle.x < 0) sparkle.x = canvas.width
        if (sparkle.x > canvas.width) sparkle.x = 0
        if (sparkle.y < 0) sparkle.y = canvas.height
        if (sparkle.y > canvas.height) sparkle.y = 0

        ctx.beginPath()
        ctx.arc(sparkle.x, sparkle.y, sparkle.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(59, 130, 246, ${sparkle.opacity * 0.6})`
        ctx.fill()

        const gradient = ctx.createRadialGradient(sparkle.x, sparkle.y, 0, sparkle.x, sparkle.y, sparkle.size * 3)
        gradient.addColorStop(0, `rgba(59, 130, 246, ${sparkle.opacity * 0.4})`)
        gradient.addColorStop(1, "rgba(59, 130, 246, 0)")

        ctx.beginPath()
        ctx.arc(sparkle.x, sparkle.y, sparkle.size * 3, 0, Math.PI * 2)
        ctx.fillStyle = gradient
        ctx.fill()
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [density])

  return <canvas ref={canvasRef} className={cn("w-full h-full", className)} />
}