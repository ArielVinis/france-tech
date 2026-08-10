"use client"

import { useEffect } from "react"
import { useLenis } from "lenis/react"
import Snap from "lenis/snap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

/**
 * Snap de secções com Lenis.
 * Docs: https://github.com/darkroomengineering/lenis/tree/main/packages/snap
 */
export function SectionSnap() {
  const lenis = useLenis()

  useEffect(() => {
    if (!lenis) return

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches
    if (reduceMotion) return

    let snap: Snap | null = null

    const setup = () => {
      snap?.destroy()

      snap = new Snap(lenis, {
        type: "proximity",
        distanceThreshold: "35%",
        debounce: 150,
        lerp: 0.09,
      })

      const sections = Array.from(
        document.querySelectorAll<HTMLElement>("[data-snap-section]")
      )

      if (sections.length > 0) {
        snap.addElements(sections, { align: "start" })
      }
    }

    // Espera pins do ScrollTrigger calcularem altura
    const timer = window.setTimeout(() => {
      ScrollTrigger.refresh()
      setup()
    }, 120)

    const onRefresh = () => snap?.resize()
    ScrollTrigger.addEventListener("refresh", onRefresh)

    return () => {
      window.clearTimeout(timer)
      ScrollTrigger.removeEventListener("refresh", onRefresh)
      snap?.destroy()
    }
  }, [lenis])

  return null
}
