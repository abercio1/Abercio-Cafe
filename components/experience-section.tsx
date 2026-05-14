'use client'

import { motion } from 'framer-motion'
import {
  Coffee, Leaf, Cake, Sofa, Star, Heart,
} from 'lucide-react'
import { staggerContainer, fadeUp, VIEWPORT_ONCE } from '@/lib/animations'

const FEATURES = [
  {
    icon: Coffee,
    title: 'Artisan Coffee',
    description:
      'Every shot is pulled with precision. Our baristas are trained in the art of espresso, ensuring each cup is nothing short of perfect.',
  },
  {
    icon: Leaf,
    title: 'Premium Beans',
    description:
      'We source single-origin beans directly from Indonesian highlands — Gayo, Toraja, and Flores — for a uniquely local, world-class flavor.',
  },
  {
    icon: Cake,
    title: 'Handcrafted Desserts',
    description:
      'From tiramisu to freshly baked croissants, our pastry kitchen crafts each item from scratch every morning.',
  },
  {
    icon: Sofa,
    title: 'Cozy Luxury',
    description:
      'Thoughtfully designed spaces — whether you need focus, conversation, or a quiet corner — we have the perfect seat for you.',
  },
  {
    icon: Star,
    title: 'Curated Experience',
    description:
      'From the ambient lighting to the carefully curated playlist, every detail is designed to make your visit unforgettable.',
  },
  {
    icon: Heart,
    title: 'Made with Love',
    description:
      'Abercio is more than a cafe — it\'s a labor of love. Every interaction, every cup, every smile is genuine.',
  },
]

export default function ExperienceSection() {
  return (
    <section className="section-padding bg-cafe-black px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Decorative radial gradient */}
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(200,169,107,0.04)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_ONCE}
          variants={staggerContainer}
        >
          <motion.p variants={fadeUp} className="text-cafe-gold text-xs font-inter tracking-[0.25em] uppercase mb-3">
            What We Offer
          </motion.p>
          <motion.h2 variants={fadeUp} className="font-playfair text-4xl sm:text-5xl lg:text-6xl font-bold text-cafe-cream mb-5">
            The Abercio{' '}
            <span className="text-gold-gradient italic">Experience</span>
          </motion.h2>
          <motion.div variants={fadeUp} className="flex items-center justify-center gap-3">
            <span className="h-px w-14 bg-cafe-gold/40" />
            <span className="w-1.5 h-1.5 rounded-full bg-cafe-gold/60" />
            <span className="h-px w-14 bg-cafe-gold/40" />
          </motion.div>
          <motion.p variants={fadeUp} className="mt-5 text-cafe-cream/50 font-inter max-w-md mx-auto text-sm leading-relaxed">
            We go beyond the cup. Every aspect of Abercio is designed to make you feel at home — in the most elevated way.
          </motion.p>
        </motion.div>

        {/* Feature Cards */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_ONCE}
          variants={staggerContainer}
        >
          {FEATURES.map(feature => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function FeatureCard({
  icon: Icon,
  title,
  description,
}: {
  icon: React.ElementType
  title: string
  description: string
}) {
  return (
    <motion.div
      variants={fadeUp}
      whileHover={{ y: -6, transition: { duration: 0.3, ease: 'easeOut' } }}
      className="group p-7 rounded-2xl border border-white/5 hover:border-cafe-gold/25 bg-cafe-dark-2 transition-colors duration-500 relative overflow-hidden"
    >
      {/* Ambient glow on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-cafe-gold/0 to-cafe-gold/0 group-hover:from-cafe-gold/4 group-hover:to-transparent transition-all duration-700 pointer-events-none" />

      {/* Icon */}
      <div className="w-12 h-12 rounded-xl bg-cafe-gold/8 border border-cafe-gold/15 flex items-center justify-center mb-5 group-hover:bg-cafe-gold/15 group-hover:border-cafe-gold/30 transition-all duration-300">
        <Icon className="text-cafe-gold" size={22} />
      </div>

      <h3 className="font-playfair text-lg font-semibold text-cafe-cream mb-3 group-hover:text-cafe-gold transition-colors duration-300">
        {title}
      </h3>
      <p className="text-cafe-cream/45 text-sm font-inter leading-relaxed">
        {description}
      </p>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cafe-gold/0 to-transparent group-hover:via-cafe-gold/40 transition-all duration-500" />
    </motion.div>
  )
}
