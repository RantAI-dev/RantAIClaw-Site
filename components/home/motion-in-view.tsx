"use client"

import { motion, useReducedMotion } from "motion/react"
import type { ComponentProps } from "react"

import { cn } from "@/lib/utils"
import { defaultViewport, defaultTransition } from "@/lib/motion-variants"

type MotionInViewProps = {
  children: React.ReactNode
  className?: string
  viewport?: { once?: boolean; margin?: string; amount?: number }
} & Omit<ComponentProps<typeof motion.div>, "initial" | "whileInView" | "viewport">

export function MotionInView({
  children,
  className,
  viewport = defaultViewport,
  transition = defaultTransition,
  ...rest
}: MotionInViewProps) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.div
      initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewport}
      transition={shouldReduceMotion ? { duration: 0 } : transition}
      className={cn(className)}
      {...rest}
    >
      {children}
    </motion.div>
  )
}
