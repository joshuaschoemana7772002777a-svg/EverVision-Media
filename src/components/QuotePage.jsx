import { useState } from 'react'
import { motion } from 'framer-motion'
import { Minus, Plus, MapPin, Clock, Film } from 'lucide-react'
import { instantQuoteConfig } from '../data/content'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
}

function Stepper({ value, onChange, min = 0 }) {
  return (
    <div className="flex items-center gap-3">
      <button
        onClick={() => onChange(Math.max(min, value - 1))}
        className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:border-accent hover:text-accent transition-colors"
        aria-label="Decrease"
      >
        <Minus className="w-3.5 h-3.5" />
      </button>
      <span className="w-6 text-center font-semibold text-gray-900">{value}</span>
      <button
        onClick={() => onChange(value + 1)}
        className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:border-accent hover:text-accent transition-colors"
        aria-label="Increase"
      >
        <Plus className="w-3.5 h-3.5" />
      </button>
    </div>
  )
}

export default function QuotePage() {
  const { currency, filmingRatePerHour, editingRatePerBlock, travelRatePerKm, baseLocation, locations } =
    instantQuoteConfig

  const [hours, setHours] = useState(2)
  const [videos, setVideos] = useState(1)
  const [extraBlocks, setExtraBlocks] = useState(0)
  const [locationIndex, setLocationIndex] = useState(0)

  const location = locations[locationIndex]
  const fmt = (n) => `${currency}${n.toLocaleString()}`

  const filmingCost = hours * filmingRatePerHour
  const editingBlocks = videos + extraBlocks
  const editingCost = editingBlocks * editingRatePerBlock
  const travelCost = location.km * travelRatePerKm
  const total = filmingCost + editingCost + travelCost

  return (
    <div>
      {/* Header */}
      <section className="bg-[#080808] pt-32 pb-16 md:pt-40 md:pb-20 text-center px-6">
        <motion.span
          className="text-accent text-xs font-semibold tracking-[0.3em] uppercase"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Instant Quote
        </motion.span>
        <motion.h1
          className="font-display font-black text-4xl md:text-6xl text-white mt-4 mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Get Your Estimate
        </motion.h1>
        <motion.p
          className="text-white/60 max-w-xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Tell us about your shoot and get an instant price estimate. Final pricing is confirmed on enquiry.
        </motion.p>
      </section>

      {/* Calculator */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-10">
            {/* Inputs */}
            <motion.div
              className="space-y-8"
              variants={fadeUp}
              initial="hidden"
              animate="show"
            >
              {/* Shoot length */}
              <div>
                <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-3">
                  <Clock className="w-4 h-4 text-accent" /> Length of Shoot
                </label>
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => setHours((h) => Math.max(1, h - 0.5))}
                    className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:border-accent hover:text-accent transition-colors"
                    aria-label="Decrease hours"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="text-lg font-semibold text-gray-900 w-20 text-center">
                    {hours} hr{hours !== 1 ? 's' : ''}
                  </span>
                  <button
                    onClick={() => setHours((h) => h + 0.5)}
                    className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:border-accent hover:text-accent transition-colors"
                    aria-label="Increase hours"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
                <p className="text-xs text-gray-400 mt-2">{fmt(filmingRatePerHour)} per hour</p>
              </div>

              {/* Deliverables */}
              <div>
                <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-3">
                  <Film className="w-4 h-4 text-accent" /> Deliverables
                </label>
                <div className="space-y-3">
                  <div className="flex items-center justify-between py-3 px-4 rounded-xl border border-gray-200">
                    <div>
                      <p className="text-sm font-medium text-gray-800">Videos (up to 60 sec each)</p>
                      <p className="text-xs text-gray-400">{fmt(editingRatePerBlock)} per video</p>
                    </div>
                    <Stepper value={videos} onChange={setVideos} min={1} />
                  </div>

                  <div className="flex items-center justify-between py-3 px-4 rounded-xl border border-gray-200">
                    <div>
                      <p className="text-sm font-medium text-gray-800">Extra 60-sec blocks</p>
                      <p className="text-xs text-gray-400">For videos longer than 60 sec — {fmt(editingRatePerBlock)} each</p>
                    </div>
                    <Stepper value={extraBlocks} onChange={setExtraBlocks} min={0} />
                  </div>
                </div>
              </div>

              {/* Location */}
              <div>
                <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-3">
                  <MapPin className="w-4 h-4 text-accent" /> Shoot Location
                </label>
                <select
                  value={locationIndex}
                  onChange={(e) => setLocationIndex(Number(e.target.value))}
                  className="w-full py-3 px-4 rounded-xl border border-gray-200 text-sm text-gray-700 focus:outline-none focus:border-accent"
                >
                  {locations.map((loc, i) => (
                    <option key={loc.name} value={i}>
                      {loc.name}
                      {loc.km > 0 ? ` — ${loc.km}km` : ''}
                    </option>
                  ))}
                </select>
                <p className="text-xs text-gray-400 mt-2">
                  {fmt(travelRatePerKm)} per km from {baseLocation}
                </p>
              </div>
            </motion.div>

            {/* Summary */}
            <motion.div
              className="flex flex-col"
              variants={fadeUp}
              initial="hidden"
              animate="show"
              transition={{ delay: 0.15 }}
            >
              <div className="bg-gray-50 rounded-2xl border border-gray-200 p-8 flex-1">
                <h4 className="font-semibold text-gray-700 mb-6">Estimate Breakdown</h4>

                <div className="space-y-3 text-sm">
                  <div className="flex justify-between text-gray-600">
                    <span>
                      Filming ({hours} hr{hours !== 1 ? 's' : ''} × {fmt(filmingRatePerHour)})
                    </span>
                    <span>{fmt(filmingCost)}</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>
                      Editing ({editingBlocks} × {fmt(editingRatePerBlock)})
                    </span>
                    <span>{fmt(editingCost)}</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>
                      Travel ({location.km}km × {fmt(travelRatePerKm)})
                    </span>
                    <span>{fmt(travelCost)}</span>
                  </div>
                </div>

                <div className="border-t border-gray-200 mt-6 pt-6">
                  <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">Estimated Total</p>
                  <p className="font-display font-black text-4xl text-gray-900">{fmt(total)}</p>
                  <p className="text-xs text-gray-400 mt-1">*Exact pricing confirmed on enquiry</p>
                </div>

                <a
                  href="/#contact"
                  className="mt-8 w-full block text-center py-4 bg-accent text-white font-semibold rounded-full hover:bg-accent-dark transition-colors"
                >
                  Request This Quote
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
