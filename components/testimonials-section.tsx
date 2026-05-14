'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'
import { staggerContainer, fadeUp, VIEWPORT_ONCE } from '@/lib/animations'

const REVIEWS = [
  {
    id: 1,
    name: 'Siti Rahayu',
    role: 'Pelanggan Setia',
    // Indonesian woman, hijab, professional blazer, warm smile — unsplash/3h4WZ9TPuco
    avatar: 'https://plus.unsplash.com/premium_photo-1664475546048-b1e3768d2b14?w=200&h=200&q=85&fit=crop&crop=faces',
    rating: 5,
    text: 'Cafe terbaik di Semarang! Kopinya luar biasa, suasananya sangat cozy dan elegan. Selalu jadi tempat favorit untuk bersantai maupun meeting. Pelayanannya ramah dan profesional.',
  },
  {
    id: 2,
    name: 'Budi Santoso',
    role: 'Coffee Enthusiast',
    // Indonesian man, business suit, professional portrait — unsplash/pzOUnvx9c1E
    avatar: 'https://images.unsplash.com/photo-1543132220-3ec99c6094dc?w=200&h=200&q=85&fit=crop&crop=faces',
    rating: 5,
    text: 'Espresso Signature-nya benar-benar exceptional — crema yang sempurna dan aftertaste yang panjang. Sebagai pecinta kopi, ini adalah salah satu espresso terbaik yang pernah saya coba di Indonesia.',
  },
  {
    id: 3,
    name: 'Dewi Kusuma',
    role: 'Food Blogger',
    // Indonesian woman, hijab, minimalist white-wall portrait — unsplash/hH5VEFjcBJc
    avatar: 'https://images.unsplash.com/photo-1634707532472-00e23a3a5f43?w=200&h=200&q=85&fit=crop&crop=faces',
    rating: 5,
    text: 'Tiramisu-nya juara! Lapisan mascarpone yang lembut, rasa espresso yang kaya, dan presentasinya yang cantik. Abercio benar-benar menjaga kualitas di setiap detail.',
  },
  {
    id: 4,
    name: 'Raka Pratama',
    role: 'Entrepreneur',
    // Indonesian man, formal shirt and tie, professional — unsplash/WXoCpasOPuo
    avatar: 'https://images.unsplash.com/photo-1740414289827-3332d41cb11a?w=200&h=200&q=85&fit=crop&crop=faces',
    rating: 5,
    text: 'Tempat yang sempurna untuk working remotely. Wi-Fi cepat, stop kontak tersedia, dan kopi yang terus menerus enak. Ambiance-nya mendukung fokus dan kreativitas.',
  },
  {
    id: 5,
    name: 'Anisa Putri',
    role: 'Interior Designer',
    // Southeast Asian woman, smiling, professional portrait — unsplash/_o3DtvJEBYs
    avatar: 'https://plus.unsplash.com/premium_photo-1661549438187-384f8be9c3bc?w=200&h=200&q=85&fit=crop&crop=faces',
    rating: 5,
    text: 'Sebagai seorang desainer, saya sangat menghargai keindahan estetika Abercio. Setiap sudut instagramable, pencahayaannya sempurna, dan keselarasan desainnya membuat betah berlama-lama.',
  },
  {
    id: 6,
    name: 'Ahmad Fauzi',
    role: 'Regular Customer',
    // Southeast Asian man, urban outdoor professional portrait — unsplash/cM3iD78xtg8
    avatar: 'https://images.unsplash.com/photo-1763627556302-2b35f22c7a6c?w=200&h=200&q=85&fit=crop&crop=faces',
    rating: 5,
    text: 'Cold Brew Reserve-nya terbaik yang pernah saya coba! Smooth, bold, dan tanpa rasa pahit. Sekarang sudah jadi ritual pagi saya setiap hari Senin sebelum memulai minggu.',
  },
]

const DIRECTION = { next: 1, prev: -1 }

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(1)
  const [isPaused, setIsPaused] = useState(false)
  const touchStart = useRef(0)

  const goTo = useCallback((index: number, dir: number) => {
    setDirection(dir)
    setCurrent(index)
  }, [])

  const next = useCallback(() =>
    goTo((current + 1) % REVIEWS.length, DIRECTION.next), [current, goTo])

  const prev = useCallback(() =>
    goTo((current - 1 + REVIEWS.length) % REVIEWS.length, DIRECTION.prev), [current, goTo])

  // Auto-play
  useEffect(() => {
    if (isPaused) return
    const id = setInterval(next, 4500)
    return () => clearInterval(id)
  }, [isPaused, next])

  // Touch swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStart.current = e.targetTouches[0].clientX
  }
  const handleTouchEnd = (e: React.TouchEvent) => {
    const diff = touchStart.current - e.changedTouches[0].clientX
    if (Math.abs(diff) > 50) diff > 0 ? next() : prev()
  }

  const variants = {
    enter: (dir: number) => ({ x: dir > 0 ? 80 : -80, opacity: 0 }),
    center: { x: 0, opacity: 1, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
    exit: (dir: number) => ({ x: dir > 0 ? -80 : 80, opacity: 0, transition: { duration: 0.35 } }),
  }

  const review = REVIEWS[current]

  return (
    <section className="section-padding bg-cafe-black px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-cafe-gold/3 blur-[80px] pointer-events-none" />

      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_ONCE}
          variants={staggerContainer}
        >
          <motion.p variants={fadeUp} className="text-cafe-gold text-xs font-inter tracking-[0.25em] uppercase mb-3">
            Guest Voices
          </motion.p>
          <motion.h2 variants={fadeUp} className="font-playfair text-4xl sm:text-5xl lg:text-6xl font-bold text-cafe-cream mb-5">
            What Our Guests{' '}
            <span className="text-gold-gradient italic">Say</span>
          </motion.h2>
          <motion.div variants={fadeUp} className="flex items-center justify-center gap-3">
            <span className="h-px w-14 bg-cafe-gold/40" />
            <span className="w-1.5 h-1.5 rounded-full bg-cafe-gold/60" />
            <span className="h-px w-14 bg-cafe-gold/40" />
          </motion.div>
        </motion.div>

        {/* Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT_ONCE}
          transition={{ duration: 0.7 }}
        >
          <div
            className="relative overflow-hidden"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={review.id}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                className="bg-cafe-dark-2 border border-white/5 rounded-3xl p-8 sm:p-12"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star key={i} className="text-cafe-gold fill-cafe-gold" size={16} />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="font-playfair text-xl sm:text-2xl text-cafe-cream/85 leading-relaxed mb-8 italic">
                  &ldquo;{review.text}&rdquo;
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-cafe-gold/30 flex-shrink-0">
                    <Image src={review.avatar} alt={review.name} fill className="object-cover" />
                  </div>
                  <div>
                    <p className="font-inter font-semibold text-cafe-cream text-sm">{review.name}</p>
                    <p className="font-inter text-cafe-gold/70 text-xs mt-0.5">{review.role}</p>
                  </div>
                  {/* Gold divider */}
                  <div className="ml-auto h-8 w-px bg-cafe-gold/20 hidden sm:block" />
                  <div className="hidden sm:flex flex-col items-end">
                    <p className="text-cafe-gold font-playfair text-2xl font-bold">★ 5.0</p>
                    <p className="text-cafe-cream/30 text-xs font-inter">Perfect score</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-6 mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-cafe-gold/25 flex items-center justify-center text-cafe-cream/50 hover:border-cafe-gold hover:text-cafe-gold transition-all duration-300"
              aria-label="Previous"
            >
              <ChevronLeft size={18} />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {REVIEWS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i, i > current ? 1 : -1)}
                  className={`rounded-full transition-all duration-300 ${
                    i === current
                      ? 'w-6 h-2 bg-cafe-gold'
                      : 'w-2 h-2 bg-cafe-cream/20 hover:bg-cafe-cream/40'
                  }`}
                  aria-label={`Go to review ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-cafe-gold/25 flex items-center justify-center text-cafe-cream/50 hover:border-cafe-gold hover:text-cafe-gold transition-all duration-300"
              aria-label="Next"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
