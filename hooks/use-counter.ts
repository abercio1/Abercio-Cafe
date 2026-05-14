'use client'

import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

export function useCounter(end: number, duration = 2.5, start = 0) {
  const [count, setCount] = useState(start)
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })
  const hasStarted = useRef(false)

  useEffect(() => {
    if (!isInView || hasStarted.current) return
    hasStarted.current = true

    let startTimestamp: number | null = null
    const totalMs = duration * 1000

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp
      const elapsed  = timestamp - startTimestamp
      const progress = Math.min(elapsed / totalMs, 1)
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * (end - start) + start))
      if (progress < 1) requestAnimationFrame(step)
      else setCount(end)
    }

    requestAnimationFrame(step)
  }, [isInView, end, duration, start])

  return { count, ref }
}
