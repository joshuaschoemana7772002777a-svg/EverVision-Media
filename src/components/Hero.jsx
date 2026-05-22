import { motion } from 'framer-motion'
import { ChevronDown, Play } from 'lucide-react'
import { siteConfig } from '../data/content'

export default function Hero() {
  const [line1, line2] = siteConfig.tagline.split('\n')

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#080808]">
      {/* Background gradient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse at 25% 60%, rgba(0, 71, 255, 0.18) 0%, transparent 55%),
            radial-gradient(ellipse at 75% 30%, rgba(0, 71, 255, 0.08) 0%, transparent 50%)
          `,
        }}
      />

      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Optional YouTube background video — uncomment and add your showreel ID to content.js */}
      {siteConfig.heroVideoId && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <iframe
            src={`https://www.youtube.com/embed/${siteConfig.heroVideoId}?autoplay=1&mute=1&loop=1&playlist=${siteConfig.heroVideoId}&controls=0&showinfo=0&rel=0&iv_load_policy=3`}
            className="absolute"
            allow="autoplay"
            style={{
              top: '50%', left: '50%',
              transform: 'translate(-50%, -50%)',
              width: 'max(100vw, 177.78vh)',
              height: 'max(56.25vw, 100vh)',
              border: 'none',
            }}
            title="Showreel"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
      )}

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <motion.span
          className="inline-block text-accent text-xs font-semibold tracking-[0.3em] uppercase mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          Award-Winning Videography
        </motion.span>

        <motion.h1
          className="font-display font-black text-white leading-[0.95] mb-6"
          style={{ fontSize: 'clamp(3.5rem, 10vw, 8rem)' }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
        >
          {line1}
          <br />
          <span className="text-accent">{line2}</span>
        </motion.h1>

        <motion.p
          className="text-white/60 text-lg md:text-xl max-w-xl mx-auto mb-12 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          {siteConfig.subtagline}
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.65 }}
        >
          <a
            href="#work"
            className="flex items-center gap-2 px-8 py-4 bg-accent text-white font-semibold rounded-full hover:bg-accent-dark transition-colors text-base"
          >
            <Play className="w-4 h-4 fill-white" />
            View Our Work
          </a>
          <a
            href="#pricing"
            className="px-8 py-4 border border-white/30 text-white font-semibold rounded-full hover:border-white hover:bg-white/10 transition-all text-base"
          >
            Get a Quote
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.7 }}
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </motion.div>
    </section>
  )
}
