"use client"

import { useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"

import { cn } from "@/lib/utils"

gsap.registerPlugin(ScrollTrigger, useGSAP)

type SectionRevealProps = {
  children: React.ReactNode
  className?: string
  id?: string
  /** Pin leve + scrub (desktop) para transição tipo studio */
  pin?: boolean
}

export function SectionReveal({
  children,
  className,
  id,
  pin = false,
}: SectionRevealProps) {
  const rootRef = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      const root = rootRef.current
      if (!root) return

      const items = root.querySelectorAll("[data-reveal]")
      const mm = gsap.matchMedia()

      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set(items, { clearProps: "all" })
      })

      mm.add(
        "(prefers-reduced-motion: no-preference) and (min-width: 768px)",
        () => {
          if (pin) {
            gsap.fromTo(
              items,
              { opacity: 0.15, y: 80 },
              {
                opacity: 1,
                y: 0,
                ease: "none",
                stagger: 0.08,
                scrollTrigger: {
                  trigger: root,
                  start: "top top",
                  end: "+=65%",
                  pin: true,
                  scrub: 0.85,
                  anticipatePin: 1,
                },
              }
            )
            return
          }

          gsap.fromTo(
            items,
            { opacity: 0, y: 64 },
            {
              opacity: 1,
              y: 0,
              duration: 1.05,
              ease: "power3.out",
              stagger: 0.14,
              scrollTrigger: {
                trigger: root,
                start: "top 80%",
                end: "top 40%",
                toggleActions: "play none none reverse",
              },
            }
          )
        }
      )

      mm.add(
        "(prefers-reduced-motion: no-preference) and (max-width: 767px)",
        () => {
          gsap.fromTo(
            items,
            { opacity: 0, y: 40 },
            {
              opacity: 1,
              y: 0,
              duration: 0.9,
              ease: "power3.out",
              stagger: 0.1,
              scrollTrigger: {
                trigger: root,
                start: "top 85%",
                toggleActions: "play none none reverse",
              },
            }
          )
        }
      )

      return () => mm.revert()
    },
    { scope: rootRef, dependencies: [pin] }
  )

  return (
    <section
      ref={rootRef}
      id={id}
      data-snap-section=""
      className={cn("relative min-h-svh scroll-mt-0", className)}
    >
      {children}
    </section>
  )
}
