import { useState } from 'react'
import { motion } from 'framer-motion'
import { Check, X as XIcon, Minus } from 'lucide-react'
import { packages, quoteConfig } from '../data/content'

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

function QuoteCalculator() {
  const { baseRates, baseHours, extraHourRate, addOns } = quoteConfig
  const [eventType, setEventType] = useState('wedding')
  const [duration, setDuration] = useState(6)
  const [selectedAddOns, setSelectedAddOns] = useState([])

  const toggleAddOn = (id) =>
    setSelectedAddOns((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    )

  const basePrice = baseRates[eventType]?.price ?? 0
  const extraHours = Math.max(0, duration - baseHours)
  const addOnTotal = selectedAddOns.reduce((sum, id) => {
    const a = addOns.find((x) => x.id === id)
    return sum + (a?.price ?? 0)
  }, 0)
  const total = basePrice + extraHours * extraHourRate + addOnTotal

  return (
    <motion.div
      className="mt-20 bg-gray-50 rounded-3xl p-8 md:p-12"
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-60px' }}
    >
      <div className="text-center mb-10">
        <h3 className="font-display font-black text-2xl md:text-3xl text-gray-900">
          Build Your Own Quote
        </h3>
        <p className="text-gray-500 mt-2">Get an instant estimate — we'll confirm the exact price together.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-10">
        {/* Left: inputs */}
        <div className="space-y-8">
          {/* Event Type */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-3">Event Type</label>
            <div className="grid grid-cols-2 gap-2">
              {Object.entries(baseRates).map(([key, val]) => (
                <button
                  key={key}
                  onClick={() => setEventType(key)}
                  className={`py-2.5 px-4 rounded-xl text-sm font-medium border transition-all text-left ${
                    eventType === key
                      ? 'border-accent bg-accent-light text-accent'
                      : 'border-gray-200 text-gray-600 hover:border-gray-300'
                  }`}
                >
                  {val.label}
                </button>
              ))}
            </div>
          </div>

          {/* Duration */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-3">
              Duration: <span className="text-accent">{duration} hours</span>
            </label>
            <input
              type="range"
              min={2}
              max={14}
              step={1}
              value={duration}
              onChange={(e) => setDuration(Number(e.target.value))}
              className="w-full accent-accent"
            />
            <div className="flex justify-between text-xs text-gray-400 mt-1">
              <span>2 hrs</span>
              <span>14 hrs</span>
            </div>
          </div>

          {/* Add-ons */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-3">Add-ons</label>
            <div className="space-y-2">
              {addOns.map((a) => (
                <button
                  key={a.id}
                  onClick={() => toggleAddOn(a.id)}
                  className={`w-full flex items-center justify-between py-3 px-4 rounded-xl border text-sm transition-all ${
                    selectedAddOns.includes(a.id)
                      ? 'border-accent bg-accent-light'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-5 h-5 rounded border flex items-center justify-center flex-shrink-0 ${
                        selectedAddOns.includes(a.id)
                          ? 'bg-accent border-accent'
                          : 'border-gray-300'
                      }`}
                    >
                      {selectedAddOns.includes(a.id) && (
                        <Check className="w-3 h-3 text-white" />
                      )}
                    </div>
                    <div className="text-left">
                      <span className="font-medium text-gray-800">{a.label}</span>
                      <span className="block text-xs text-gray-400">{a.description}</span>
                    </div>
                  </div>
                  <span className="text-gray-600 font-medium ml-4">+${a.price.toLocaleString()}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right: summary */}
        <div className="flex flex-col">
          <div className="bg-white rounded-2xl border border-gray-200 p-8 flex-1">
            <h4 className="font-semibold text-gray-700 mb-6">Estimate Breakdown</h4>

            <div className="space-y-3 text-sm">
              <div className="flex justify-between text-gray-600">
                <span>{baseRates[eventType]?.label} ({baseHours} hrs base)</span>
                <span>${basePrice.toLocaleString()}</span>
              </div>
              {extraHours > 0 && (
                <div className="flex justify-between text-gray-600">
                  <span>{extraHours} extra hr{extraHours > 1 ? 's' : ''} (${extraHourRate}/hr)</span>
                  <span>${(extraHours * extraHourRate).toLocaleString()}</span>
                </div>
              )}
              {selectedAddOns.map((id) => {
                const a = addOns.find((x) => x.id === id)
                return (
                  <div key={id} className="flex justify-between text-gray-600">
                    <span>{a?.label}</span>
                    <span>${a?.price.toLocaleString()}</span>
                  </div>
                )
              })}
            </div>

            <div className="border-t border-gray-100 mt-6 pt-6 flex justify-between items-end">
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">Estimated Total</p>
                <p className="font-display font-black text-4xl text-gray-900">
                  ${total.toLocaleString()}
                </p>
                <p className="text-xs text-gray-400 mt-1">*Exact pricing confirmed on enquiry</p>
              </div>
            </div>

            <a
              href={`#contact`}
              className="mt-8 w-full block text-center py-4 bg-accent text-white font-semibold rounded-full hover:bg-accent-dark transition-colors"
            >
              Request This Quote
            </a>
          </div>
        </div>
      </div>
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

        {/* Calculator */}
        <QuoteCalculator />
      </div>
    </section>
  )
}
