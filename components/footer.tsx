'use client'

import { motion } from 'framer-motion'
import { Coffee, Instagram, Facebook, Twitter, MessageCircle, Heart } from 'lucide-react'
import { fadeUp, staggerContainer, VIEWPORT_ONCE } from '@/lib/animations'

const WA_URL = 'https://wa.me/62895360408666'

const NAV_GROUPS = [
  {
    title: 'Explore',
    links: [
      { label: 'Home',       id: 'home'       },
      { label: 'Menu',       id: 'menu'       },
      { label: 'About',      id: 'about'      },
      { label: 'Experience', id: 'experience' },
    ],
  },
  {
    title: 'Connect',
    links: [
      { label: 'Gallery',      id: 'gallery'      },
      { label: 'Testimonials', id: 'testimonials' },
      { label: 'Reservation',  id: 'reservation'  },
      { label: 'Contact',      id: 'contact'      },
    ],
  },
]

const SOCIALS = [
  { icon: Instagram,     label: 'Instagram', href: '#' },
  { icon: Facebook,      label: 'Facebook',  href: '#' },
  { icon: Twitter,       label: 'Twitter',   href: '#' },
  { icon: MessageCircle, label: 'WhatsApp',  href: WA_URL },
]

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export default function Footer() {
  return (
    <footer className="bg-cafe-espresso/30 border-t border-white/5 relative overflow-hidden">
      {/* Top subtle glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-cafe-gold/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer grid */}
        <motion.div
          className="py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10"
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_ONCE}
          variants={staggerContainer}
        >
          {/* Brand */}
          <motion.div variants={fadeUp} className="lg:col-span-2">
            <button
              onClick={() => scrollTo('home')}
              className="flex items-center gap-2.5 mb-5 group"
            >
              <div className="w-10 h-10 rounded-full bg-cafe-gold/10 border border-cafe-gold/30 flex items-center justify-center">
                <Coffee className="text-cafe-gold" size={18} />
              </div>
              <span className="font-playfair text-xl font-semibold text-cafe-cream tracking-wide">
                Abercio
              </span>
            </button>

            <p className="text-cafe-cream/45 text-sm font-inter leading-loose mb-6 max-w-xs">
              Where every sip is a story and every visit is a memory.
              Exceptional coffee, curated ambiance, and genuine hospitality
              in the heart of Semarang.
            </p>

            {/* Social */}
            <div className="flex items-center gap-3">
              {SOCIALS.map(s => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-9 h-9 rounded-full border border-white/8 flex items-center justify-center text-cafe-cream/35 hover:border-cafe-gold/40 hover:text-cafe-gold transition-all duration-300"
                >
                  <s.icon size={15} />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Nav Groups */}
          {NAV_GROUPS.map(group => (
            <motion.div key={group.title} variants={fadeUp}>
              <h4 className="font-inter text-xs font-semibold uppercase tracking-[0.2em] text-cafe-cream/40 mb-5">
                {group.title}
              </h4>
              <ul className="space-y-3">
                {group.links.map(link => (
                  <li key={link.id}>
                    <button
                      onClick={() => scrollTo(link.id)}
                      className="text-cafe-cream/55 text-sm font-inter hover:text-cafe-gold transition-colors duration-200 group flex items-center gap-2"
                    >
                      <span className="h-px w-0 bg-cafe-gold/60 transition-all duration-300 group-hover:w-3" />
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />

        {/* Bottom bar */}
        <motion.div
          className="py-7 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-inter text-cafe-cream/30"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={VIEWPORT_ONCE}
          transition={{ duration: 0.6 }}
        >
          <p>© {new Date().getFullYear()} Abercio Cafe. All rights reserved.</p>

          <p className="flex items-center gap-1.5">
            Made with <Heart className="text-cafe-gold fill-cafe-gold" size={12} /> in Semarang, Indonesia
          </p>

          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-cafe-cream/60 transition-colors">Privacy</a>
            <span className="text-cafe-cream/10">·</span>
            <a href="#" className="hover:text-cafe-cream/60 transition-colors">Terms</a>
          </div>
        </motion.div>
      </div>

      {/* Floating WhatsApp button */}
      <a
        href={WA_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat via WhatsApp"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-[0_4px_20px_rgba(37,211,102,0.4)] hover:scale-110 transition-transform duration-300"
      >
        <MessageCircle className="text-white" size={24} />
      </a>
    </footer>
  )
}
