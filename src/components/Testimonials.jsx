import { useState } from 'react'
import { motion } from 'framer-motion'
import { Play, Star } from 'lucide-react'
import { testimonials } from '../data/content'
import VideoModal from './VideoModal'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
}

function StarRating({ count }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
      ))}
    </div>
  )
}

export default function Testimonials() {
  const [selectedTestimonial, setSelectedTestimonial] = useState(null)

  return (
    <section id="testimonials" className="py-24 md:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          className="mb-16 text-center"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
        >
          <span className="text-accent text-xs font-semibold tracking-[0.3em] uppercase">Testimonials</span>
          <h2 className="font-display font-black text-4xl md:text-5xl mt-3 mb-5 text-gray-900">
            What Our Clients Say
          </h2>
          <p className="text-gray-500 max-w-md mx-auto">
            Real stories from real people we've had the honour of working with.
          </p>
        </motion.div>

        {/* Testimonial grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col md:flex-row"
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: i * 0.1 }}
            >
              {/* Thumbnail */}
              <div
                className="relative w-full md:w-48 flex-shrink-0 aspect-video md:aspect-auto cursor-pointer"
                onClick={() => setSelectedTestimonial(t)}
              >
                {t.youtubeId ? (
                  <img
                    src={`https://img.youtube.com/vi/${t.youtubeId}/mqdefault.jpg`}
                    alt={`${t.name} testimonial`}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className={`w-full h-full min-h-[140px] bg-gradient-to-br ${t.gradient}`} />
                )}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <Play className="w-5 h-5 text-gray-900 ml-0.5 fill-gray-900" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col justify-between p-6 flex-1">
                <div>
                  <StarRating count={t.rating} />
                  <p className="text-gray-600 mt-3 text-sm leading-relaxed italic">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>
                <div className="mt-5 pt-4 border-t border-gray-100">
                  <p className="font-display font-700 text-gray-900 text-sm">{t.name}</p>
                  <p className="text-gray-400 text-xs mt-0.5">{t.event}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {selectedTestimonial && (
        <VideoModal
          videoId={selectedTestimonial.youtubeId}
          gradient={selectedTestimonial.gradient}
          onClose={() => setSelectedTestimonial(null)}
        />
      )}
    </section>
  )
}
