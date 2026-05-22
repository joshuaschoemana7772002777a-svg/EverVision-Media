import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Play, Clock } from 'lucide-react'
import { portfolioVideos } from '../data/content'
import VideoModal from './VideoModal'

const filters = [
  { id: 'all', label: 'All' },
  { id: 'weddings', label: 'Weddings' },
  { id: 'events', label: 'Events' },
  { id: 'corporate', label: 'Corporate' },
  { id: 'commercial', label: 'Commercial' },
]

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
}

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('all')
  const [selectedVideo, setSelectedVideo] = useState(null)

  const filtered = activeFilter === 'all'
    ? portfolioVideos
    : portfolioVideos.filter((v) => v.category === activeFilter)

  return (
    <section id="work" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          className="mb-16 text-center"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
        >
          <span className="text-accent text-xs font-semibold tracking-[0.3em] uppercase">Portfolio</span>
          <h2 className="font-display font-black text-4xl md:text-5xl mt-3 mb-5 text-gray-900">Our Work</h2>
          <p className="text-gray-500 max-w-md mx-auto">
            Every frame tells a story. Browse a selection of our recent films.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          className="flex flex-wrap justify-center gap-2 mb-12"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
        >
          {filters.map((f) => (
            <button
              key={f.id}
              onClick={() => setActiveFilter(f.id)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                activeFilter === f.id
                  ? 'bg-accent text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {f.label}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          layout
        >
          <AnimatePresence>
            {filtered.map((video, i) => (
              <motion.div
                key={video.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, delay: i * 0.07 }}
                className="group relative aspect-video rounded-2xl overflow-hidden cursor-pointer bg-gray-900"
                onClick={() => setSelectedVideo(video)}
              >
                {/* Thumbnail */}
                {video.youtubeId ? (
                  <img
                    src={`https://img.youtube.com/vi/${video.youtubeId}/maxresdefault.jpg`}
                    alt={video.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className={`w-full h-full bg-gradient-to-br ${video.gradient}`} />
                )}

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300" />

                {/* Play button */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-2xl">
                    <Play className="w-6 h-6 text-gray-900 ml-1 fill-gray-900" />
                  </div>
                </div>

                {/* Info */}
                <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/90 via-black/50 to-transparent translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-accent text-xs font-semibold uppercase tracking-wider capitalize">
                      {video.category}
                    </span>
                    <span className="text-white/60 text-xs flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {video.duration}
                    </span>
                  </div>
                  <h3 className="text-white font-semibold text-sm leading-snug">{video.title}</h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {selectedVideo && (
        <VideoModal
          videoId={selectedVideo.youtubeId}
          gradient={selectedVideo.gradient}
          onClose={() => setSelectedVideo(null)}
        />
      )}
    </section>
  )
}
