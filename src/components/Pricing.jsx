import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Check, X as XIcon } from 'lucide-react'
import { packages } from '../data/content'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
}

function PackageCard({ pkg, index }) {
  return (
    <motion.div
      className={`relative flex flex-col rounded-2xl overflow-hidden border ${
        pkg.featured
          ? 'border-accent shadow-[0_0_0_2px_theme(colors.accent)] bg-white'
          : 'border-gray-200 bg-white'
      }`}
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-40px' }}
      transition={{ delay: index * 0.12 }}
    >
      {pkg.featured && (
        <div className="bg-accent text-white text-center text-xs font-semibold tracking-wider uppercase py-2">
          Most Popular
        </div>
      )}
      <div className="p-8 flex flex-col flex-1">
        <h3 className="font-display font-800 text-2xl text-gray-900">{pkg.name}</h3>
        <p className="text-gray-500 text-sm mt-2 mb-5">{pkg.description}</p>
        <p className="font-display font-black text-4xl text-gray-900">{pkg.price}</p>

        <div className="my-8 space-y-3">
          {pkg.features.map((f) => (
            <div key={f} className="flex items-start gap-3 text-sm text-gray-700">
              <Check className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
              {f}
            </div>
          ))}
          {pkg.notIncluded.map((f) => (
            <div key={f} className="flex items-start gap-3 text-sm text-gray-400">
              <XIcon className="w-4 h-4 text-gray-300 flex-shrink-0 mt-0.5" />
              {f}
            </div>
          ))}
        </div>

        <a
          href="#contact"
          className={`mt-auto text-center py-3 px-6 rounded-full font-semibold text-sm transition-all ${
            pkg.featured
              ? 'bg-accent text-white hover:bg-accent-dark'
              : 'border border-gray-300 text-gray-700 hover:border-accent hover:text-accent'
          }`}
        >
          {pkg.cta}
        </a>
      </div>
    </motion.div>
  )
}

function QuoteCta() {
  return (
    <motion.div
      className="mt-20 bg-gray-50 rounded-3xl p-8 md:p-12 text-center"
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-60px' }}
    >
      <h3 className="font-display font-black text-2xl md:text-3xl text-gray-900">
        Want an Exact Estimate?
      </h3>
      <p className="text-gray-500 mt-2 max-w-md mx-auto">
        Use our instant quote calculator to price your shoot based on length, deliverables, and location.
      </p>
      <Link
        to="/quote"
        className="inline-block mt-8 px-8 py-4 bg-accent text-white font-semibold rounded-full hover:bg-accent-dark transition-colors"
      >
        Get an Instant Quote
      </Link>
    </motion.div>
  )
}

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          className="mb-16 text-center"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
        >
          <span className="text-accent text-xs font-semibold tracking-[0.3em] uppercase">Pricing</span>
          <h2 className="font-display font-black text-4xl md:text-5xl mt-3 mb-5 text-gray-900">
            Simple, Transparent Pricing
          </h2>
          <p className="text-gray-500 max-w-md mx-auto">
            No surprises. Choose a package that fits or build a custom quote below.
          </p>
        </motion.div>

        {/* Package cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {packages.map((pkg, i) => (
            <PackageCard key={pkg.name} pkg={pkg} index={i} />
          ))}
        </div>

        {/* Calculator CTA */}
        <QuoteCta />
      </div>
    </section>
  )
}
