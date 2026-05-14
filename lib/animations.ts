import type { Variants } from 'framer-motion'

export const EASE_OUT_EXPO = [0.16, 1, 0.3, 1] as const
export const EASE_IN_OUT   = [0.22, 1, 0.36, 1] as const
export const SPRING_SOFT   = { type: 'spring', stiffness: 100, damping: 20 } as const

export const fadeUp: Variants = {
  hidden:  { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE_OUT_EXPO } },
}

export const fadeDown: Variants = {
  hidden:  { opacity: 0, y: -30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE_OUT_EXPO } },
}

export const fadeIn: Variants = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.9, ease: 'easeOut' } },
}

export const fadeLeft: Variants = {
  hidden:  { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: EASE_IN_OUT } },
}

export const fadeRight: Variants = {
  hidden:  { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: EASE_IN_OUT } },
}

export const scaleIn: Variants = {
  hidden:  { opacity: 0, scale: 0.88 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.65, ease: [0.34, 1.2, 0.64, 1] } },
}

export const staggerContainer: Variants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
}

export const staggerFast: Variants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.07, delayChildren: 0.0 } },
}

export const cardHover = {
  rest:  { scale: 1,    y: 0,  boxShadow: '0 4px 24px rgba(0,0,0,0.3)' },
  hover: { scale: 1.02, y: -6, boxShadow: '0 20px 60px rgba(200,169,107,0.12)' },
}

export const VIEWPORT_ONCE = { once: true, margin: '-80px' } as const
