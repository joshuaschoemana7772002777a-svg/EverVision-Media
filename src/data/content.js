// ─────────────────────────────────────────────────────────────────────────────
// EverVision Media — Site Content
// Update values here to change text, videos, pricing, and contact details.
// ─────────────────────────────────────────────────────────────────────────────

export const siteConfig = {
  name: 'EverVision Media',
  tagline: 'We Capture\nYour Story.',
  subtagline: 'Award-winning videography for weddings, events & brands.',
  instagramHandle: '@evervisionmedia',
  instagramUrl: 'https://www.instagram.com/evervisionmedia',
  email: 'hello@evervisionmedia.com',
  phone: '+1 (555) 000-0000',
  location: 'Your City, State',
  // Replace with your YouTube showreel video ID (the part after ?v= in the URL)
  heroVideoId: '',
}

// Replace youtubeId values with your actual YouTube video IDs.
export const portfolioVideos = [
  {
    id: 1,
    title: "Sarah & Michael's Wedding Film",
    category: 'weddings',
    youtubeId: '',
    gradient: 'from-rose-900 to-pink-900',
    duration: '4:32',
  },
  {
    id: 2,
    title: 'TechForward Corporate Summit',
    category: 'corporate',
    youtubeId: '',
    gradient: 'from-blue-900 to-indigo-900',
    duration: '3:15',
  },
  {
    id: 3,
    title: 'Aria & James — Engagement Film',
    category: 'weddings',
    youtubeId: '',
    gradient: 'from-purple-900 to-violet-900',
    duration: '5:48',
  },
  {
    id: 4,
    title: 'Bloom Collective — Brand Story',
    category: 'commercial',
    youtubeId: '',
    gradient: 'from-green-900 to-emerald-900',
    duration: '2:50',
  },
  {
    id: 5,
    title: 'The Rivera Family Reunion',
    category: 'events',
    youtubeId: '',
    gradient: 'from-amber-900 to-orange-900',
    duration: '6:10',
  },
  {
    id: 6,
    title: 'Luxe Cosmetics — Launch Film',
    category: 'commercial',
    youtubeId: '',
    gradient: 'from-red-900 to-rose-900',
    duration: '1:55',
  },
]

export const testimonials = [
  {
    id: 1,
    name: 'Sarah & Michael',
    event: 'Wedding — The Grand Estate',
    quote: 'EverVision Media exceeded every expectation. They captured not just moments, but the emotions and love of our special day. We cry every single time we watch our wedding film.',
    youtubeId: '',
    gradient: 'from-rose-800 to-pink-800',
    rating: 5,
  },
  {
    id: 2,
    name: 'Marcus Thompson',
    event: 'Corporate Summit — TechForward',
    quote: 'The team delivered a world-class production. Our brand video has driven incredible engagement and new business. Professional, creative, and completely stress-free to work with.',
    youtubeId: '',
    gradient: 'from-blue-800 to-indigo-800',
    rating: 5,
  },
  {
    id: 3,
    name: 'Camille Rodriguez',
    event: 'Quinceañera — Villa Luna',
    quote: 'Words cannot describe how beautiful our video turned out. Every frame tells a story. Our whole family was in tears watching it for the first time. Absolutely magical.',
    youtubeId: '',
    gradient: 'from-purple-800 to-violet-800',
    rating: 5,
  },
  {
    id: 4,
    name: 'James & Aria Chen',
    event: 'Engagement Film — Malibu',
    quote: "We booked EverVision for our engagement film and were so blown away we immediately hired them for our wedding. They have a gift for storytelling that's truly rare.",
    youtubeId: '',
    gradient: 'from-teal-800 to-cyan-800',
    rating: 5,
  },
]

// Update these packages with your real offerings.
export const packages = [
  {
    name: 'Essential',
    price: 'From $800',
    description: 'Perfect for intimate gatherings and small celebrations.',
    features: [
      '4 hours of coverage',
      '1 camera operator',
      'Highlight reel (3–5 min)',
      'Online delivery within 3 weeks',
      'Licensed background music',
    ],
    notIncluded: ['Drone footage', 'Raw footage', 'Same-day edit'],
    cta: 'Book Essential',
    featured: false,
  },
  {
    name: 'Standard',
    price: 'From $1,500',
    description: 'Our most popular package for weddings and full-day events.',
    features: [
      '8 hours of coverage',
      '2 camera operators',
      'Feature film (20–30 min)',
      'Social media highlight clip',
      'Online delivery within 2 weeks',
      'Licensed background music',
      'Raw footage included',
    ],
    notIncluded: ['Drone footage', 'Same-day edit'],
    cta: 'Book Standard',
    featured: true,
  },
  {
    name: 'Elite',
    price: 'From $2,500',
    description: 'The full EverVision experience — nothing left out.',
    features: [
      'Full-day coverage (up to 12 hrs)',
      '3 camera operators',
      'Cinema-quality feature film',
      'Same-day highlight edit',
      'Drone footage included',
      'Raw footage on USB',
      'Priority delivery within 1 week',
      'Complimentary engagement session',
    ],
    notIncluded: [],
    cta: 'Book Elite',
    featured: false,
  },
]

// Pricing calculator config — update rates to match your real pricing.
export const quoteConfig = {
  baseRates: {
    wedding: { label: 'Wedding', price: 2000 },
    corporate: { label: 'Corporate Event', price: 1500 },
    celebration: { label: 'Celebration / Party', price: 800 },
    commercial: { label: 'Commercial / Brand', price: 3000 },
    music: { label: 'Music Video', price: 1800 },
    other: { label: 'Other', price: 1000 },
  },
  baseHours: 4,
  extraHourRate: 150,
  addOns: [
    { id: 'drone', label: 'Drone Footage', price: 300, description: 'Cinematic aerial shots' },
    { id: 'sameDay', label: 'Same-Day Highlight Edit', price: 500, description: '2–3 min reel ready same evening' },
    { id: 'rawFootage', label: 'Raw Footage Delivery', price: 200, description: 'All unedited footage on USB' },
    { id: 'secondCamera', label: 'Second Camera Operator', price: 400, description: 'Additional angle coverage' },
    { id: 'liveStream', label: 'Live Streaming', price: 350, description: 'Stream to YouTube / Facebook Live' },
    { id: 'photoHighlights', label: 'Photo Highlights Package', price: 350, description: '50+ professionally edited photos' },
  ],
}
