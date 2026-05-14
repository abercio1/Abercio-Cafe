'use client'

import { useEffect, useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, Menu, X, Coffee } from 'lucide-react'
import { cn } from '@/lib/utils'

const NAV_LINKS = [
  { label: 'Home',         id: 'home'         },
  { label: 'Menu',         id: 'menu'         },
  { label: 'About',        id: 'about'        },
  { label: 'Experience',   id: 'experience'   },
  { label: 'Gallery',      id: 'gallery'      },
  { label: 'Testimonials', id: 'testimonials' },
  { label: 'Reservation',  id: 'reservation'  },
  { label: 'Contact',      id: 'contact'      },
]

const WA_URL = 'https://wa.me/62895360408666'

export default function Navbar() {
  const [isScrolled,       setIsScrolled]       = useState(false)
  const [mobileOpen,       setMobileOpen]       = useState(false)
  const [activeSection,    setActiveSection]    = useState('home')

  const scrollToSection = useCallback((id: string) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setMobileOpen(false)
  }, [])

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 60)

      const ids = NAV_LINKS.map(l => l.id).reverse()
      const threshold = window.scrollY + window.innerHeight * 0.35
      for (const id of ids) {
        const el = document.getElementById(id)
        if (el && el.offsetTop <= threshold) {
          setActiveSection(id)
          break
        }
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
          isScrolled
            ? 'glass border-b border-cafe-gold/10 py-3 shadow-2xl'
            : 'bg-transparent py-5'
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => scrollToSection('home')}
            className="flex items-center gap-2.5 group"
            aria-label="Go to home"
          >
            <div className="w-9 h-9 rounded-full bg-cafe-gold/10 border border-cafe-gold/30 flex items-center justify-center group-hover:bg-cafe-gold/20 transition-colors duration-300">
              <Coffee className="w-4.5 h-4.5 text-cafe-gold" size={18} />
            </div>
            <span className="font-playfair text-xl font-semibold text-cafe-cream tracking-wide">
              Abercio
            </span>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-7" role="navigation">
            {NAV_LINKS.map(link => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={cn(
                  'relative text-sm font-inter tracking-wide transition-colors duration-300 group',
                  activeSection === link.id
                    ? 'text-cafe-gold'
                    : 'text-cafe-cream/70 hover:text-cafe-cream'
                )}
              >
                {link.label}
                <span
                  className={cn(
                    'absolute -bottom-1 left-0 h-px bg-cafe-gold transition-all duration-300',
                    activeSection === link.id ? 'w-full' : 'w-0 group-hover:w-full'
                  )}
                />
              </button>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center">
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-cafe-gold text-cafe-black text-sm font-semibold tracking-wide hover:bg-cafe-gold/90 transition-all duration-300 hover:shadow-[0_0_20px_rgba(200,169,107,0.3)]"
            >
              <MessageCircle size={15} />
              Chat via WhatsApp
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(v => !v)}
            className="lg:hidden w-10 h-10 flex items-center justify-center rounded-full border border-cafe-gold/20 text-cafe-cream hover:border-cafe-gold/50 transition-colors"
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait" initial={false}>
              {mobileOpen ? (
                <motion.span key="x"
                  initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}
                >
                  <X size={18} />
                </motion.span>
              ) : (
                <motion.span key="menu"
                  initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}
                >
                  <Menu size={18} />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.38, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="fixed inset-0 z-40 bg-cafe-black flex flex-col items-center justify-center gap-8 px-8"
          >
            {/* Decorative */}
            <div className="absolute top-8 left-8 flex items-center gap-2.5">
              <Coffee className="text-cafe-gold" size={20} />
              <span className="font-playfair text-xl text-cafe-cream">Abercio</span>
            </div>

            {/* Links */}
            <nav className="flex flex-col items-center gap-6 w-full">
              {NAV_LINKS.map((link, i) => (
                <motion.button
                  key={link.id}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 + 0.1, duration: 0.4, ease: 'easeOut' }}
                  onClick={() => scrollToSection(link.id)}
                  className={cn(
                    'font-playfair text-3xl font-medium tracking-wide transition-colors duration-200',
                    activeSection === link.id
                      ? 'text-cafe-gold'
                      : 'text-cafe-cream/60 hover:text-cafe-cream'
                  )}
                >
                  {link.label}
                </motion.button>
              ))}
            </nav>

            <motion.a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.4 }}
              className="flex items-center gap-2 px-8 py-3.5 rounded-full bg-cafe-gold text-cafe-black font-semibold text-base"
            >
              <MessageCircle size={18} />
              Chat via WhatsApp
            </motion.a>

            {/* Bottom divider */}
            <div className="absolute bottom-8 text-cafe-cream/20 text-sm font-inter">
              © 2024 Abercio Cafe · Semarang
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
