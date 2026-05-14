'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import {
  fadeLeft, fadeRight, fadeUp, staggerContainer, VIEWPORT_ONCE,
} from '@/lib/animations'
import { useCounter } from '@/hooks/use-counter'

const STATS = [
  { end: 10,    suffix: '+',  label: 'Years of Passion'      },
  { end: 50000, suffix: '+',  label: 'Happy Guests', abbrev: 'K', divide: 1000 },
  { end: 25,    suffix: '+',  label: 'Signature Creations'   },
]

export default function AboutSection() {
  return (
    <section className="section-padding bg-cafe-dark px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 rounded-full bg-cafe-gold/4 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Image Column */}
          <motion.div
            className="relative"
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT_ONCE}
            variants={fadeLeft}
          >
            {/* Main image */}
            <div className="relative rounded-2xl overflow-hidden aspect-[4/5]">
              <Image
                src="https://images.unsplash.com/photo-1442975631115-c4f7b05b8a2c?w=800&q=80"
                alt="Abercio — crafting the perfect cup"
                fill
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-cafe-black/60 via-transparent to-transparent" />
            </div>

            {/* Decorative gold frame */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-cafe-gold/40 rounded-tl-lg pointer-events-none" />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-cafe-gold/40 rounded-br-lg pointer-events-none" />

            {/* Floating badge */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ repeat: Infinity, duration: 3.5, ease: 'easeInOut' }}
              className="absolute -bottom-6 -right-6 lg:-right-8 glass border border-cafe-gold/20 rounded-2xl px-5 py-4 shadow-2xl hidden sm:block"
            >
              <p className="font-playfair text-2xl font-bold text-cafe-gold">★ 4.9</p>
              <p className="text-cafe-cream/50 text-xs font-inter mt-0.5">Customer Rating</p>
            </motion.div>
          </motion.div>

          {/* Text Column */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT_ONCE}
            variants={staggerContainer}
          >
            <motion.p variants={fadeRight} className="text-cafe-gold text-xs font-inter tracking-[0.25em] uppercase mb-3">
              Our Story
            </motion.p>
            <motion.h2 variants={fadeRight} className="font-playfair text-4xl sm:text-5xl font-bold text-cafe-cream mb-6 leading-tight">
              A Journey of Passion{' '}
              <span className="text-gold-gradient italic">& Coffee</span>
            </motion.h2>

            <motion.div variants={fadeRight} className="space-y-4 text-cafe-cream/60 font-inter text-sm leading-loose mb-8">
              <p>
                Abercio was born from a simple but profound belief: that a cup of coffee can be
                so much more than a morning ritual. It can be a moment of stillness, a conversation starter,
                a memory in the making.
              </p>
              <p>
                Founded in the heart of Semarang, every corner of our cafe has been designed with
                intention — from the warm lighting that invites you to linger, to the curated playlist
                that sets the mood. We obsess over every detail so you don't have to.
              </p>
              <p>
                We source our beans from the finest Indonesian highlands — Gayo, Toraja, Flores — working
                directly with farmers who share our commitment to quality and sustainability.
              </p>
            </motion.div>

            {/* Divider */}
            <motion.div variants={fadeRight} className="h-px bg-gradient-to-r from-cafe-gold/30 to-transparent mb-8" />

            {/* Stats */}
            <motion.div variants={staggerContainer} className="grid grid-cols-3 gap-6">
              {STATS.map(stat => (
                <StatCounter key={stat.label} {...stat} />
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div variants={fadeRight} className="mt-10">
              <button
                onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center gap-2 text-cafe-gold text-sm font-inter font-medium group"
              >
                Discover our experience
                <span className="h-px w-6 bg-cafe-gold transition-all duration-300 group-hover:w-12" />
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function StatCounter({ end, suffix, label, abbrev, divide }: typeof STATS[0]) {
  const { count, ref } = useCounter(end, 2.5)
  const display = divide ? `${Math.floor(count / divide)}${abbrev}` : `${count}`

  return (
    <motion.div variants={fadeUp} className="text-center">
      <p className="font-playfair text-3xl sm:text-4xl font-bold text-cafe-gold mb-1">
        <span ref={ref}>{display}</span>{suffix}
      </p>
      <p className="text-cafe-cream/40 text-xs font-inter leading-tight">{label}</p>
    </motion.div>
  )
}
