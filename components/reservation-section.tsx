'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { CalendarCheck, CheckCircle2, Loader2, Users, Clock, Phone, Mail, MessageSquare, User } from 'lucide-react'
import { staggerContainer, fadeUp, fadeLeft, fadeRight, VIEWPORT_ONCE } from '@/lib/animations'
import { cn } from '@/lib/utils'

const WA_URL = 'https://wa.me/62895360408666'

interface FormState {
  name: string; phone: string; email: string
  date: string; time: string; guests: string; message: string
}

const INITIAL: FormState = {
  name: '', phone: '', email: '',
  date: '', time: '', guests: '2', message: '',
}

const TIME_SLOTS = [
  '08:00', '09:00', '10:00', '11:00',
  '12:00', '13:00', '14:00', '15:00',
  '16:00', '17:00', '18:00', '19:00', '20:00', '21:00',
]

const GUEST_OPTIONS = ['1', '2', '3', '4', '5', '6', '7', '8+']

export default function ReservationSection() {
  const [form, setForm]       = useState<FormState>(INITIAL)
  const [errors, setErrors]   = useState<Partial<FormState>>({})
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const today = new Date().toISOString().split('T')[0]

  const validate = (): boolean => {
    const errs: Partial<FormState> = {}
    if (!form.name.trim())  errs.name  = 'Nama wajib diisi'
    if (!form.phone.trim()) errs.phone = 'Nomor telepon wajib diisi'
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email))
      errs.email = 'Email tidak valid'
    if (!form.date)  errs.date  = 'Tanggal wajib dipilih'
    if (!form.time)  errs.time  = 'Waktu wajib dipilih'
    if (!form.guests) errs.guests = 'Jumlah tamu wajib diisi'
    setErrors(errs)
    return Object.keys(errs).length === 0
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
    if (errors[name as keyof FormState]) {
      setErrors(prev => ({ ...prev, [name]: undefined }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return

    setLoading(true)
    await new Promise(r => setTimeout(r, 1200))

    const msg = encodeURIComponent(
      `Halo Abercio Cafe! 🍵\n\nSaya ingin membuat *reservasi*:\n\n` +
      `👤 *Nama:* ${form.name}\n` +
      `📱 *Telepon:* ${form.phone}\n` +
      `📧 *Email:* ${form.email}\n` +
      `📅 *Tanggal:* ${form.date}\n` +
      `⏰ *Waktu:* ${form.time} WIB\n` +
      `👥 *Jumlah Tamu:* ${form.guests} orang\n` +
      `💬 *Pesan:* ${form.message || '-'}\n\n` +
      `Terima kasih! 🙏`
    )

    window.open(`${WA_URL}?text=${msg}`, '_blank')
    setLoading(false)
    setSuccess(true)
    setTimeout(() => { setSuccess(false); setForm(INITIAL) }, 4000)
  }

  return (
    <section className="section-padding bg-cafe-dark px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Glow */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[400px] h-[400px] bg-cafe-gold/4 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-start">
          {/* Left — Info */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT_ONCE}
            variants={staggerContainer}
          >
            <motion.p variants={fadeLeft} className="text-cafe-gold text-xs font-inter tracking-[0.25em] uppercase mb-3">
              Make a Reservation
            </motion.p>
            <motion.h2 variants={fadeLeft} className="font-playfair text-4xl sm:text-5xl font-bold text-cafe-cream mb-6 leading-tight">
              Reserve Your{' '}
              <span className="text-gold-gradient italic">Perfect Table</span>
            </motion.h2>

            <motion.p variants={fadeLeft} className="text-cafe-cream/55 font-inter text-sm leading-loose mb-10 max-w-md">
              Secure your spot at Abercio and let us craft an exceptional experience for you and your guests.
              We look forward to welcoming you.
            </motion.p>

            {/* Info cards */}
            <motion.div variants={staggerContainer} className="space-y-4">
              {[
                { icon: Clock,        label: 'Opening Hours',  value: 'Mon–Sun: 08:00–22:00 WIB' },
                { icon: Phone,        label: 'WhatsApp',       value: '+62 895-3604-08666' },
                { icon: CalendarCheck,label: 'Reservations',   value: 'Available 1–7 days in advance' },
              ].map(item => (
                <motion.div
                  key={item.label}
                  variants={fadeUp}
                  className="flex items-center gap-4 p-4 rounded-xl border border-white/5 bg-cafe-black/50"
                >
                  <div className="w-10 h-10 rounded-lg bg-cafe-gold/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="text-cafe-gold" size={18} />
                  </div>
                  <div>
                    <p className="text-cafe-cream/40 text-xs font-inter">{item.label}</p>
                    <p className="text-cafe-cream text-sm font-inter font-medium">{item.value}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT_ONCE}
            variants={fadeRight}
          >
            <div className="bg-cafe-dark-2 border border-white/5 rounded-3xl p-7 sm:p-9 relative overflow-hidden">
              {/* Success overlay */}
              {success && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="absolute inset-0 z-10 bg-cafe-dark-2/95 flex flex-col items-center justify-center rounded-3xl"
                >
                  <CheckCircle2 className="text-cafe-gold mb-4" size={48} />
                  <h3 className="font-playfair text-2xl font-bold text-cafe-cream mb-2">Reservasi Dikirim!</h3>
                  <p className="text-cafe-cream/50 text-sm font-inter text-center max-w-xs">
                    WhatsApp Anda akan dibuka. Silakan konfirmasi reservasi dengan tim kami.
                  </p>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                {/* Name + Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <FormField
                    label="Nama Lengkap *"
                    icon={<User size={15} />}
                    error={errors.name}
                  >
                    <input
                      name="name" type="text" value={form.name}
                      onChange={handleChange} placeholder="Nama Anda"
                      className={fieldClass(!!errors.name)}
                    />
                  </FormField>

                  <FormField
                    label="Nomor WhatsApp *"
                    icon={<Phone size={15} />}
                    error={errors.phone}
                  >
                    <input
                      name="phone" type="tel" value={form.phone}
                      onChange={handleChange} placeholder="08xx-xxxx-xxxx"
                      className={fieldClass(!!errors.phone)}
                    />
                  </FormField>
                </div>

                {/* Email */}
                <FormField
                  label="Email *"
                  icon={<Mail size={15} />}
                  error={errors.email}
                >
                  <input
                    name="email" type="email" value={form.email}
                    onChange={handleChange} placeholder="email@anda.com"
                    className={fieldClass(!!errors.email)}
                  />
                </FormField>

                {/* Date + Time */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <FormField
                    label="Tanggal *"
                    icon={<CalendarCheck size={15} />}
                    error={errors.date}
                  >
                    <input
                      name="date" type="date" value={form.date}
                      min={today} onChange={handleChange}
                      className={fieldClass(!!errors.date)}
                    />
                  </FormField>

                  <FormField
                    label="Waktu *"
                    icon={<Clock size={15} />}
                    error={errors.time}
                  >
                    <select
                      name="time" value={form.time} onChange={handleChange}
                      className={fieldClass(!!errors.time)}
                    >
                      <option value="">Pilih waktu</option>
                      {TIME_SLOTS.map(t => (
                        <option key={t} value={t}>{t} WIB</option>
                      ))}
                    </select>
                  </FormField>
                </div>

                {/* Guests */}
                <FormField
                  label="Jumlah Tamu *"
                  icon={<Users size={15} />}
                  error={errors.guests}
                >
                  <select
                    name="guests" value={form.guests} onChange={handleChange}
                    className={fieldClass(!!errors.guests)}
                  >
                    {GUEST_OPTIONS.map(g => (
                      <option key={g} value={g}>{g} {g === '1' ? 'orang' : 'orang'}</option>
                    ))}
                  </select>
                </FormField>

                {/* Message */}
                <FormField
                  label="Pesan Khusus"
                  icon={<MessageSquare size={15} />}
                >
                  <textarea
                    name="message" value={form.message}
                    onChange={handleChange}
                    placeholder="Ulang tahun? Anniversary? Atau ada permintaan khusus?"
                    rows={3}
                    className={cn(fieldClass(false), 'resize-none')}
                  />
                </FormField>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={loading || success}
                  className="w-full flex items-center justify-center gap-2.5 py-4 rounded-xl bg-cafe-gold text-cafe-black font-inter font-semibold text-sm tracking-wide hover:bg-cafe-gold/90 transition-all duration-300 disabled:opacity-60 hover:shadow-[0_0_30px_rgba(200,169,107,0.3)] active:scale-[0.99]"
                >
                  {loading ? (
                    <><Loader2 className="animate-spin" size={18} />Memproses...</>
                  ) : (
                    <><CalendarCheck size={18} />Konfirmasi via WhatsApp</>
                  )}
                </button>

                <p className="text-center text-cafe-cream/25 text-xs font-inter">
                  Form ini akan membuka WhatsApp untuk konfirmasi langsung.
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

/* ── Helpers ── */
function FormField({
  label, icon, error, children,
}: {
  label: string; icon?: React.ReactNode; error?: string; children: React.ReactNode
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="flex items-center gap-1.5 text-cafe-cream/50 text-xs font-inter">
        <span className="text-cafe-gold/60">{icon}</span>
        {label}
      </label>
      {children}
      {error && (
        <p className="text-red-400/80 text-xs font-inter flex items-center gap-1">
          <span>⚠</span>{error}
        </p>
      )}
    </div>
  )
}

const fieldClass = (hasError: boolean) =>
  cn(
    'w-full bg-cafe-black/60 border rounded-xl px-4 py-3 text-cafe-cream text-sm font-inter placeholder-cafe-cream/20',
    'focus:outline-none focus:ring-1 focus:ring-cafe-gold/50 focus:border-cafe-gold/50 transition-colors duration-200',
    'appearance-none',
    hasError
      ? 'border-red-400/40 focus:border-red-400/60'
      : 'border-white/8 hover:border-white/15'
  )
