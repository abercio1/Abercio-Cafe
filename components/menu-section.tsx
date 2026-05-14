'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { staggerContainer, fadeUp, VIEWPORT_ONCE } from '@/lib/animations'
import { formatRupiah } from '@/lib/utils'

const MENU_ITEMS = [
  {
    id: 1,
    name: 'Espresso Signature',
    description: 'A bold single-origin espresso with deep caramel notes, velvety crema, and a lingering finish.',
    price: 45000,
    category: 'Coffee',
    image: 'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=600&q=80',
  },
  {
    id: 2,
    name: 'Caramel Latte',
    description: 'Silky steamed milk meets our house espresso, drizzled with housemade salted caramel.',
    price: 55000,
    category: 'Coffee',
    image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=600&q=80',
  },
  {
    id: 3,
    name: 'Matcha Cloud',
    description: 'Premium ceremonial-grade matcha whisked with oat milk foam and a hint of vanilla.',
    price: 58000,
    category: 'Non-Coffee',
    image: 'https://images.unsplash.com/photo-1515823662972-da6a2e4d3168?w=600&q=80',
  },
  {
    id: 4,
    name: 'Croissant Butter',
    description: 'Layers of hand-folded dough, baked golden and served warm with cultured butter.',
    price: 42000,
    category: 'Pastry',
    image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=600&q=80',
  },
  {
    id: 5,
    name: 'Tiramisu Dessert',
    description: 'Classic Italian indulgence — espresso-soaked ladyfingers and mascarpone cream.',
    price: 65000,
    category: 'Dessert',
    image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=600&q=80',
  },
  {
    id: 6,
    name: 'Cold Brew Reserve',
    description: 'Steeped 18 hours in cold water. Smooth, rich, and perfectly balanced — no bitterness.',
    price: 60000,
    category: 'Coffee',
    image: 'https://images.unsplash.com/photo-1461003532573-04e81ba2c2d9?w=600&q=80',
  },
]

export default function MenuSection() {
  return (
    <section className="section-padding bg-cafe-black px-4 sm:px-6 lg:px-8">
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
            Curated Selection
          </motion.p>
          <motion.h2 variants={fadeUp} className="font-playfair text-4xl sm:text-5xl lg:text-6xl font-bold text-cafe-cream mb-5">
            Signature Menu
          </motion.h2>
          <motion.div variants={fadeUp} className="flex items-center justify-center gap-3">
            <span className="h-px w-14 bg-cafe-gold/40" />
            <span className="w-1.5 h-1.5 rounded-full bg-cafe-gold/60" />
            <span className="h-px w-14 bg-cafe-gold/40" />
          </motion.div>
          <motion.p variants={fadeUp} className="mt-5 text-cafe-cream/50 font-inter max-w-md mx-auto text-sm leading-relaxed">
            Every item on our menu is crafted with precision, premium ingredients, and a deep love for the craft.
          </motion.p>
        </motion.div>

        {/* Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_ONCE}
          variants={staggerContainer}
        >
          {MENU_ITEMS.map(item => (
            <MenuCard key={item.id} item={item} />
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT_ONCE}
          transition={{ duration: 0.7 }}
        >
          <p className="text-cafe-cream/40 text-sm font-inter mb-4">
            Explore our full menu — 30+ items crafted with passion.
          </p>
          <button
            onClick={() => document.getElementById('reservation')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border border-cafe-gold/35 text-cafe-gold text-sm font-semibold hover:bg-cafe-gold hover:text-cafe-black transition-all duration-300 hover:shadow-[0_0_24px_rgba(200,169,107,0.25)]"
          >
            Reserve Your Table
          </button>
        </motion.div>
      </div>
    </section>
  )
}

function MenuCard({ item }: { item: typeof MENU_ITEMS[0] }) {
  return (
    <motion.article
      variants={fadeUp}
      whileHover={{ y: -8, transition: { duration: 0.3, ease: 'easeOut' } }}
      className="group relative bg-cafe-dark rounded-2xl overflow-hidden border border-white/5 hover:border-cafe-gold/30 transition-colors duration-500 cursor-pointer"
      style={{ boxShadow: '0 4px 30px rgba(0,0,0,0.4)' }}
    >
      {/* Image */}
      <div className="relative h-52 overflow-hidden">
        <Image
          src={item.image}
          alt={item.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-cafe-black/0 group-hover:bg-cafe-black/20 transition-colors duration-500" />
        {/* Category badge */}
        <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] font-inter font-medium tracking-wide uppercase bg-cafe-black/70 text-cafe-gold border border-cafe-gold/20">
          {item.category}
        </span>
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex items-start justify-between gap-3 mb-2.5">
          <h3 className="font-playfair text-lg font-semibold text-cafe-cream group-hover:text-cafe-gold transition-colors duration-300">
            {item.name}
          </h3>
          <span className="text-cafe-gold font-inter font-semibold text-sm whitespace-nowrap mt-0.5">
            {formatRupiah(item.price)}
          </span>
        </div>
        <p className="text-cafe-cream/45 text-sm font-inter leading-relaxed line-clamp-2">
          {item.description}
        </p>

        {/* Gold line accent */}
        <div className="mt-4 h-px bg-gradient-to-r from-cafe-gold/0 via-cafe-gold/40 to-cafe-gold/0 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
      </div>
    </motion.article>
  )
}
