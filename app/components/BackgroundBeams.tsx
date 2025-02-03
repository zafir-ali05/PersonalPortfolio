"use client"
import { cn } from "../lib/utils"
import { useEffect, useRef } from "react"

export const BackgroundBeams = ({ className }: { className?: string }) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const mouseX = useRef(0)
  const mouseY = useRef(0)

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const { clientX, clientY } = event
      mouseX.current = clientX
      mouseY.current = clientY
    }

    window.addEventListener("mousemove", handleMouseMove)

    const interval = setInterval(() => {
      if (containerRef.current) {
        const x = mouseX.current
        const y = mouseY.current
        const newX = x - containerRef.current.offsetLeft
        const newY = y - containerRef.current.offsetTop
        containerRef.current.style.setProperty("--mouse-x", `${newX}px`)
        containerRef.current.style.setProperty("--mouse-y", `${newY}px`)
      }
    }, 100)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      clearInterval(interval)
    }
  }, [])

  return (
    <div ref={containerRef} className={cn("fixed inset-0 z-0 overflow-hidden opacity-70 bg-black", className)}>
      <div className="relative h-full w-full">
        <div className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-br from-violet-950 via-slate-950 to-sky-950" />
        <div
          className="absolute left-[--mouse-x] top-[--mouse-y] h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-violet-600/30 to-sky-600/30 blur-3xl"
          style={{ opacity: 0.3 }}
        />
      </div>
    </div>
  )
}

