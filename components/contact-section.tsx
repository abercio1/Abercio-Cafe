'use client'

import { motion } from 'framer-motion'
import { MapPin, MessageCircle, Clock, Instagram, Facebook, Twitter } from 'lucide-react'
import { staggerContainer, fadeUp, VIEWPORT_ONCE } from '@/lib/animations'

const WA_URL = 'https://wa.me/62895360408666'

const HOURS = [
  { day: 'Senin – Jumat', time: '08:00 – 22:00' },
  { day: 'Sabtu',         time: '07:00 – 23:00' },
  { day: 'Minggu',        time: '07:00 – 22:00' },
]

export default function ContactSection() {
  return (
    <section className="section-padding bg-cafe-black px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Glow */}
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[300px] bg-cafe-gold/4 blur-[100px] pointer-events-none" />

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
            Find Us
          </motion.p>
          <motion.h2 variants={fadeUp} className="font-playfair text-4xl sm:text-5xl lg:text-6xl font-bold text-cafe-cream mb-5">
            Come Visit{' '}
            <span className="text-gold-gradient italic">Abercio</span>
          </motion.h2>
          <motion.div variants={fadeUp} className="flex items-center justify-center gap-3">
            <span className="h-px w-14 bg-cafe-gold/40" />
            <span className="w-1.5 h-1.5 rounded-full bg-cafe-gold/60" />
            <span className="h-px w-14 bg-cafe-gold/40" />
          </motion.div>
        </motion.div>

        {/* Grid: 3 info cards + map */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Info cards col */}
          <motion.div
            className="lg:col-span-1 flex flex-col gap-5"
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT_ONCE}
            variants={staggerContainer}
          >
            {/* Location */}
            <motion.div
              variants={fadeUp}
              className="p-6 rounded-2xl border border-white/5 bg-cafe-dark-2 hover:border-cafe-gold/20 transition-colors duration-300 group"
            >
              <div className="w-11 h-11 rounded-xl bg-cafe-gold/10 flex items-center justify-center mb-4 group-hover:bg-cafe-gold/18 transition-colors duration-300">
                <MapPin className="text-cafe-gold" size={20} />
              </div>
              <h3 className="font-playfair text-lg font-semibold text-cafe-cream mb-2">Lokasi</h3>
              <p className="text-cafe-cream/50 text-sm font-inter leading-relaxed">
                Semarang, Jawa Tengah,<br />Indonesia 🇮🇩
              </p>
              <a
                href="https://maps.app.goo.gl/NSggcti5SVLzmWdT8"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 mt-4 text-cafe-gold text-xs font-inter group/link"
              >
                Lihat di Maps
                <span className="h-px w-4 bg-cafe-gold transition-all duration-300 group-hover/link:w-7" />
              </a>
            </motion.div>

            {/* WhatsApp */}
            <motion.a
              variants={fadeUp}
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 rounded-2xl border border-white/5 bg-cafe-dark-2 hover:border-cafe-gold/20 transition-colors duration-300 group block"
            >
              <div className="w-11 h-11 rounded-xl bg-cafe-gold/10 flex items-center justify-center mb-4 group-hover:bg-cafe-gold/18 transition-colors duration-300">
                <MessageCircle className="text-cafe-gold" size={20} />
              </div>
              <h3 className="font-playfair text-lg font-semibold text-cafe-cream mb-2">WhatsApp</h3>
              <p className="text-cafe-cream/50 text-sm font-inter">+62 895-3604-08666</p>
              <p className="mt-3 text-cafe-gold text-xs font-inter flex items-center gap-1.5">
                Chat sekarang
                <span className="h-px w-4 bg-cafe-gold transition-all duration-300 group-hover:w-7" />
              </p>
            </motion.a>

            {/* Hours */}
            <motion.div
              variants={fadeUp}
              className="p-6 rounded-2xl border border-white/5 bg-cafe-dark-2 hover:border-cafe-gold/20 transition-colors duration-300 group"
            >
              <div className="w-11 h-11 rounded-xl bg-cafe-gold/10 flex items-center justify-center mb-4 group-hover:bg-cafe-gold/18 transition-colors duration-300">
                <Clock className="text-cafe-gold" size={20} />
              </div>
              <h3 className="font-playfair text-lg font-semibold text-cafe-cream mb-3">Jam Buka</h3>
              <div className="space-y-2">
                {HOURS.map(h => (
                  <div key={h.day} className="flex justify-between items-center">
                    <span className="text-cafe-cream/40 text-xs font-inter">{h.day}</span>
                    <span className="text-cafe-cream/80 text-xs font-inter font-medium">{h.time}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Map placeholder */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT_ONCE}
            transition={{ duration: 0.8 }}
          >
            <div className="relative h-full min-h-[340px] lg:min-h-0 rounded-2xl overflow-hidden border border-white/5">
              {/* Map embed placeholder — replace with actual Google Maps iframe in production */}
              <div className="absolute inset-0 bg-cafe-dark-2 flex items-center justify-center">
                {/* Dark-styled map mockup */}
                <div className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage: `
                      linear-gradient(rgba(200,169,107,0.15) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(200,169,107,0.15) 1px, transparent 1px)
                    `,
                    backgroundSize: '40px 40px',
                  }}
                />
                <div className="relative z-10 text-center p-8">
                  <div className="w-16 h-16 rounded-full bg-cafe-gold/10 border-2 border-cafe-gold/30 flex items-center justify-center mx-auto mb-4 animate-pulse-gold">
                    <MapPin className="text-cafe-gold" size={28} />
                  </div>
                  <p className="font-playfair text-xl font-semibold text-cafe-cream mb-2">Abercio Cafe</p>
                  <p className="text-cafe-cream/40 text-sm font-inter mb-5">Semarang, Jawa Tengah, Indonesia</p>
                  <a
                    href="https://maps.app.goo.gl/NSggcti5SVLzmWdT8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-cafe-gold text-cafe-black text-sm font-inter font-semibold hover:bg-cafe-gold/90 transition-colors duration-300"
                  >
                    <MapPin size={15} />
                    Buka di Google Maps
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Social Media */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT_ONCE}
          transition={{ duration: 0.6 }}
        >
          <p className="text-cafe-cream/30 text-xs font-inter mb-4 tracking-widest uppercase">
            Follow our journey
          </p>
          <div className="flex items-center justify-center gap-4">
            {[
              { icon: Instagram, label: 'Instagram', href: '#' },
              { icon: Facebook,  label: 'Facebook',  href: '#' },
              { icon: Twitter,   label: 'Twitter',   href: '#' },
            ].map(s => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="w-10 h-10 rounded-full border border-cafe-gold/20 flex items-center justify-center text-cafe-cream/40 hover:border-cafe-gold/50 hover:text-cafe-gold transition-all duration-300"
              >
                <s.icon size={16} />
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
