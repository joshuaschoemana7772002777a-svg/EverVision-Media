import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import Logo from './Logo'

const links = [
  { label: 'Work', href: '#work' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Instagram', href: '#instagram' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleLinkClick = () => setMenuOpen(false)

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#">
            <Logo onDark={!scrolled} />
          </a>

          {/* Desktop links */}
          <nav className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-accent ${
                  scrolled ? 'text-gray-600' : 'text-white/80'
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="ml-2 px-5 py-2 bg-accent text-white text-sm font-semibold rounded-full hover:bg-accent-dark transition-colors"
            >
              Get a Quote
            </a>
          </nav>

          {/* Mobile hamburger */}
          <button
            className={`md:hidden transition-colors ${scrolled ? 'text-gray-900' : 'text-white'}`}
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-30 bg-black/95 flex flex-col items-center justify-center gap-8 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {links.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                onClick={handleLinkClick}
                className="text-white text-3xl font-display font-700 hover:text-accent transition-colors"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07 }}
              >
                {link.label}
              </motion.a>
            ))}
            <motion.a
              href="#contact"
              onClick={handleLinkClick}
              className="mt-4 px-8 py-3 bg-accent text-white font-semibold rounded-full hover:bg-accent-dark transition-colors"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: links.length * 0.07 }}
            >
              Get a Quote
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
