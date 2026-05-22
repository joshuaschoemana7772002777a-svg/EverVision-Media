import { motion } from 'framer-motion'
import { Instagram, Play, ImageIcon, Heart } from 'lucide-react'
import { siteConfig } from '../data/content'

// Placeholder post data — replace src/youtubeId fields once you connect Instagram API.
const posts = [
  { id: 1, type: 'video', gradient: 'from-rose-800 to-pink-900', likes: 312 },
  { id: 2, type: 'image', gradient: 'from-blue-800 to-indigo-900', likes: 198 },
  { id: 3, type: 'video', gradient: 'from-violet-800 to-purple-900', likes: 445 },
  { id: 4, type: 'image', gradient: 'from-amber-800 to-orange-900', likes: 267 },
  { id: 5, type: 'video', gradient: 'from-teal-800 to-cyan-900', likes: 389 },
  { id: 6, type: 'image', gradient: 'from-green-800 to-emerald-900', likes: 211 },
]

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
}

export default function InstagramFeed() {
  return (
    <section id="instagram" className="py-24 md:py-32 bg-[#080808]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          className="mb-12 text-center"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Instagram className="w-5 h-5 text-accent" />
            <span className="text-accent text-xs font-semibold tracking-[0.3em] uppercase">Instagram</span>
          </div>
          <h2 className="font-display font-black text-4xl md:text-5xl text-white mb-3">
            Follow Our Journey
          </h2>
          <a
            href={siteConfig.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-accent transition-colors text-lg"
          >
            {siteConfig.instagramHandle}
          </a>
        </motion.div>

        {/* Post grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
        >
          {posts.map((post, i) => (
            <motion.a
              key={post.id}
              href={siteConfig.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square rounded-2xl overflow-hidden"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.4 }}
            >
              <div className={`w-full h-full bg-gradient-to-br ${post.gradient}`} />

              {/* Type icon */}
              <div className="absolute top-3 right-3">
                {post.type === 'video'
                  ? <Play className="w-4 h-4 text-white/80 fill-white/80" />
                  : <ImageIcon className="w-4 h-4 text-white/80" />
                }
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity text-white flex items-center gap-2">
                  <Heart className="w-5 h-5 fill-white" />
                  <span className="font-semibold text-sm">{post.likes}</span>
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center mt-10"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <a
            href={siteConfig.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 border border-white/20 text-white font-semibold rounded-full hover:border-accent hover:text-accent transition-all"
          >
            <Instagram className="w-5 h-5" />
            Follow {siteConfig.instagramHandle}
          </a>
          <p className="text-gray-600 text-xs mt-4">
            Connect your Instagram API to show your real feed here.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
