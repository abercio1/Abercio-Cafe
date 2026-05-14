import ScrollProgress    from '@/components/scroll-progress'
import Navbar            from '@/components/navbar'
import Hero              from '@/components/hero'
import MenuSection       from '@/components/menu-section'
import AboutSection      from '@/components/about-section'
import ExperienceSection from '@/components/experience-section'
import GallerySection    from '@/components/gallery-section'
import TestimonialsSection from '@/components/testimonials-section'
import ReservationSection  from '@/components/reservation-section'
import ContactSection    from '@/components/contact-section'
import Footer            from '@/components/footer'

export default function Home() {
  return (
    <main className="bg-cafe-black overflow-x-hidden">
      <ScrollProgress />
      <Navbar />

      <div id="home">
        <Hero />
      </div>

      <div id="menu">
        <MenuSection />
      </div>

      <div id="about">
        <AboutSection />
      </div>

      <div id="experience">
        <ExperienceSection />
      </div>

      <div id="gallery">
        <GallerySection />
      </div>

      <div id="testimonials">
        <TestimonialsSection />
      </div>

      <div id="reservation">
        <ReservationSection />
      </div>

      <div id="contact">
        <ContactSection />
      </div>

      <Footer />
    </main>
  )
}
