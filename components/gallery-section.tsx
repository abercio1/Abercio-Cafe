'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { staggerContainer, fadeUp, VIEWPORT_ONCE } from '@/lib/animations'

const GALLERY = [
  {
    src: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=800&q=80',
    alt: 'Cafe warm interior lighting',
    span: 'row-span-2',
  },
  {
    src: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800&q=80',
    alt: 'Latte art pour',
    span: '',
  },
  {
    src: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&q=80',
    alt: 'Overhead coffee and phone',
    span: '',
  },
  {
    src: 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=800&q=80',
    alt: 'Reading in the cafe',
    span: '',
  },
  {
    src: 'https://images.unsplash.com/photo-1516981879613-9f5da904015f?w=800&q=80',
    alt: 'Vintage cafe corner',
    span: 'row-span-2',
  },
  {
    src: 'https://images.unsplash.com/photo-1498804103079-a6351b050096?w=800&q=80',
    alt: 'Cozy cafe setting',
    span: '',
  },
  {
    src: 'https://images.unsplash.com/photo-1459755486867-638c5745e283?w=800&q=80',
    alt: 'Coffee beans close-up',
    span: '',
  },
  {
    src: 'https://images.unsplash.com/photo-1514066558159-fc8c737ef259?w=800&q=80',
    alt: 'Cafe neon lights',
    span: 'row-span-2',
  },
  {
    src: 'https://images.unsplash.com/photo-1445116572660-236099ec97a0?w=800&q=80',
    alt: 'Cozy cafe window',
    span: '',
  },
]

export default function GallerySection() {
  return (
    <section className="section-padding bg-cafe-dark px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_ONCE}
          variants={staggerContainer}
        >
          <motion.p variants={fadeUp} className="text-cafe-gold text-xs font-inter tracking-[0.25em] uppercase mb-3">
            Visual Stories
          </motion.p>
          <motion.h2 variants={fadeUp} className="font-playfair text-4xl sm:text-5xl lg:text-6xl font-bold text-cafe-cream mb-5">
            Captured{' '}
            <span className="text-gold-gradient italic">Moments</span>
          </motion.h2>
          <motion.div variants={fadeUp} className="flex items-center justify-center gap-3">
            <span className="h-px w-14 bg-cafe-gold/40" />
            <span className="w-1.5 h-1.5 rounded-full bg-cafe-gold/60" />
            <span className="h-px w-14 bg-cafe-gold/40" />
          </motion.div>
        </motion.div>

        {/* Masonry Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
          style={{ gridAutoRows: '220px' }}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_ONCE}
          variants={staggerContainer}
        >
          {GALLERY.map((item, i) => (
            <GalleryItem key={i} {...item} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function GalleryItem({
  src,
  alt,
  span,
  index,
}: {
  src: string
  alt: string
  span: string
  index: number
}) {
  return (
    <motion.div
      variants={fadeUp}
      custom={index}
      className={`group relative rounded-xl overflow-hidden cursor-pointer ${span}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-108"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
      />

      {/* Hover overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-cafe-black/70 via-cafe-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

      {/* Label */}
      <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-400 ease-out">
        <p className="text-cafe-cream text-sm font-inter font-medium">{alt}</p>
        <div className="mt-1 h-px w-8 bg-cafe-gold" />
      </div>

      {/* Gold border on hover */}
      <div className="absolute inset-0 rounded-xl border border-transparent group-hover:border-cafe-gold/25 transition-colors duration-400" />
    </motion.div>
  )
}
