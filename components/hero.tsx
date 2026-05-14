'use client'

import { useEffect, useState, useRef } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ChevronDown, MessageCircle, UtensilsCrossed, CalendarCheck } from 'lucide-react'

const WA_URL = 'https://wa.me/62895360408666'

interface Particle {
  id: number; size: number; left: string; top: string
  duration: string; delay: string; opacity: number
}

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export default function Hero() {
  const [particles, setParticles] = useState<Particle[]>([])
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start start', 'end start'] })
  const bgY     = useTransform(scrollYProgress, [0, 1], ['0%', '25%'])
  const textY   = useTransform(scrollYProgress, [0, 1], ['0%', '18%'])
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])

  useEffect(() => {
    setParticles(
      Array.from({ length: 22 }, (_, i) => ({
        id: i,
        size:     Math.random() * 3.5 + 1,
        left:     `${Math.random() * 100}%`,
        top:      `${Math.random() * 100}%`,
        duration: `${Math.random() * 8 + 8}s`,
        delay:    `${Math.random() * 6}s`,
        opacity:  Math.random() * 0.5 + 0.15,
      }))
    )
  }, [])

  const headlineWords = ['Where', 'Coffee', 'Becomes', 'an', 'Experience']

  return (
    <section
      ref={containerRef}
      className="relative h-screen min-h-[600px] overflow-hidden flex items-center justify-center"
      aria-label="Hero section"
    >
      {/* ── Background Image ── */}
      <motion.div className="absolute inset-0" style={{ y: bgY }}>
        <Image
          src="https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=1920&q=85"
          alt="Abercio Cafe — warm and inviting interior"
          fill
          priority
          quality={90}
          className="object-cover object-center"
        />
      </motion.div>

      {/* ── Overlays ── */}
      <div className="absolute inset-0 bg-cafe-black/60" />
      <div className="absolute inset-0 bg-gradient-to-b from-cafe-black/20 via-transparent to-cafe-black" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_50%,transparent_30%,rgba(11,11,11,0.55)_100%)]" />

      {/* ── Floating Particles ── */}
      {particles.map(p => (
        <span
          key={p.id}
          className="absolute rounded-full bg-cafe-gold pointer-events-none animate-float"
          style={{
            width: p.size, height: p.size,
            left: p.left, top: p.top,
            opacity: p.opacity,
            animationDuration: p.duration,
            animationDelay: p.delay,
          }}
        />
      ))}

      {/* ── Content ── */}
      <motion.div
        style={{ y: textY, opacity }}
        className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto"
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="inline-flex items-center gap-3 mb-8"
        >
          <span className="h-px w-10 bg-cafe-gold/60" />
          <span className="text-cafe-gold text-xs font-inter font-medium tracking-[0.25em] uppercase">
            Est. 2024 · Semarang, Indonesia
          </span>
          <span className="h-px w-10 bg-cafe-gold/60" />
        </motion.div>

        {/* Headline — word-by-word reveal */}
        <h1 className="font-playfair text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.08] text-cafe-cream mb-6 text-balance">
          {headlineWords.map((word, i) => (
            <motion.span
              key={word + i}
              className={`inline-block mr-[0.25em] ${
                word === 'Experience' ? 'text-gold-gradient italic' : ''
              }`}
              initial={{ opacity: 0, y: 60, skewY: 4 }}
              animate={{ opacity: 1, y: 0, skewY: 0 }}
              transition={{ duration: 0.85, delay: 0.45 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              {word}
            </motion.span>
          ))}
        </h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.05, ease: [0.16, 1, 0.3, 1] }}
          className="font-inter text-base sm:text-lg text-cafe-cream/65 max-w-xl mx-auto mb-10 leading-relaxed"
        >
          Exceptional coffee, curated ambiance, and unforgettable moments
          in the heart of Semarang.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <MagneticButton
            onClick={() => scrollToSection('menu')}
            variant="gold"
            icon={<UtensilsCrossed size={16} />}
          >
            Explore Menu
          </MagneticButton>

          <MagneticButton
            onClick={() => scrollToSection('reservation')}
            variant="outline"
            icon={<CalendarCheck size={16} />}
          >
            Reserve a Table
          </MagneticButton>

          <MagneticButton
            href={WA_URL}
            variant="ghost"
            icon={<MessageCircle size={16} />}
          >
            Chat WhatsApp
          </MagneticButton>
        </motion.div>
      </motion.div>

      {/* ── Scroll Indicator ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-cafe-cream/40 text-[10px] font-inter tracking-[0.2em] uppercase">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
        >
          <ChevronDown className="text-cafe-gold/60" size={20} />
        </motion.div>
      </motion.div>
    </section>
  )
}

/* ── Magnetic Button ── */
interface MagneticButtonProps {
  children: React.ReactNode
  onClick?: () => void
  href?: string
  variant: 'gold' | 'outline' | 'ghost'
  icon?: React.ReactNode
}

function MagneticButton({ children, onClick, href, variant, icon }: MagneticButtonProps) {
  const ref = useRef<HTMLButtonElement & HTMLAnchorElement>(null)

  const handleMouseMove = (e: React.MouseEvent) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = (e.clientX - rect.left - rect.width  / 2) * 0.18
    const y = (e.clientY - rect.top  - rect.height / 2) * 0.18
    el.style.transform = `translate(${x}px, ${y}px)`
    el.style.transition = 'transform 0.1s ease'
  }

  const handleMouseLeave = () => {
    const el = ref.current
    if (!el) return
    el.style.transform = 'translate(0px, 0px)'
    el.style.transition = 'transform 0.5s cubic-bezier(0.34,1.56,0.64,1)'
  }

  const baseClass =
    'flex items-center gap-2 px-6 py-3 rounded-full text-sm font-inter font-semibold tracking-wide transition-colors duration-300 cursor-pointer'

  const variantClass = {
    gold:    'bg-cafe-gold text-cafe-black hover:bg-cafe-gold/90 hover:shadow-[0_0_24px_rgba(200,169,107,0.35)]',
    outline: 'border border-cafe-cream/40 text-cafe-cream hover:border-cafe-cream hover:bg-cafe-cream/5',
    ghost:   'border border-cafe-gold/30 text-cafe-gold hover:border-cafe-gold hover:bg-cafe-gold/8',
  }[variant]

  const props = {
    ref,
    className: `${baseClass} ${variantClass}`,
    onMouseMove: handleMouseMove,
    onMouseLeave: handleMouseLeave,
  }

  if (href) {
    return (
      <a {...props as React.AnchorHTMLAttributes<HTMLAnchorElement>} href={href} target="_blank" rel="noopener noreferrer">
        {icon}{children}
      </a>
    )
  }

  return (
    <button {...props as React.ButtonHTMLAttributes<HTMLButtonElement>} onClick={onClick}>
      {icon}{children}
    </button>
  )
}
