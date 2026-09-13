// ─────────────────────────────────────────────────────────────────────────────
// EverVision Media — Site Content
// Update values here to change text, videos, pricing, and contact details.
// ─────────────────────────────────────────────────────────────────────────────

export const siteConfig = {
  name: 'EverVision Media',
  tagline: 'We Capture\nYour Story.',
  subtagline: 'Award-winning videography for weddings, events & brands.',
  instagramHandle: '@evervisionmedia.za',
  instagramUrl: 'https://www.instagram.com/evervisionmedia.za',
  email: 'evervisionmedia.za@gmail.com',
  phone: '+27 72 967 7745',
  location: 'South Africa',
  founder: 'Joshua Schoeman',
  // Compilation reel of multiple clients speaking about working with us.
  testimonialCompilationUrl: 'https://www.instagram.com/reel/DN3YXXp2skp/',
}

// Add the permalink URL of the actual Instagram reel/post for each entry
// (e.g. https://www.instagram.com/reel/XXXXXXXXXXX/). Leave blank to show
// a placeholder until real content is available.
export const portfolioVideos = [
  {
    id: 1,
    title: 'Wedding Film',
    category: 'wedding',
    instagramUrl: 'https://www.instagram.com/reel/DYytaXFIvgf/',
    gradient: 'from-rose-900 to-pink-900',
    duration: '',
  },
  {
    id: 2,
    title: 'Sport Reel',
    category: 'sport',
    instagramUrl: 'https://www.instagram.com/reel/DcfrhYEMA-M/',
    gradient: 'from-blue-900 to-indigo-900',
    duration: '',
  },
  {
    id: 3,
    title: 'Jewelry Showcase',
    category: 'jewelry',
    instagramUrl: 'https://www.instagram.com/reel/DZXQpM4tOIZ/',
    gradient: 'from-purple-900 to-violet-900',
    duration: '',
  },
  {
    id: 4,
    title: 'Creative Short',
    category: 'creative',
    instagramUrl: 'https://www.instagram.com/reel/DdBlJBOtqMD/',
    gradient: 'from-green-900 to-emerald-900',
    duration: '',
  },
  {
    id: 5,
    title: 'Creative Short',
    category: 'creative',
    instagramUrl: 'https://www.instagram.com/reel/DcTm7CkqEj_/',
    gradient: 'from-teal-900 to-cyan-900',
    duration: '',
  },
  {
    id: 6,
    title: 'Commercial Spot',
    category: 'commercial',
    instagramUrl: 'https://www.instagram.com/reel/DcRPNXVIPZN/',
    gradient: 'from-amber-900 to-orange-900',
    duration: '',
  },
  {
    id: 7,
    title: 'Storytelling Piece',
    category: 'storytelling',
    instagramUrl: 'https://www.instagram.com/reel/DbAwxtDt4pn/',
    gradient: 'from-red-900 to-rose-900',
    duration: '',
  },
]

export const testimonials = [
  {
    id: 1,
    name: 'Sarah & Michael',
    event: 'Wedding — The Grand Estate',
    quote: 'EverVision Media exceeded every expectation. They captured not just moments, but the emotions and love of our special day. We cry every single time we watch our wedding film.',
    instagramUrl: '',
    gradient: 'from-rose-800 to-pink-800',
    rating: 5,
  },
  {
    id: 2,
    name: 'Marcus Thompson',
    event: 'Corporate Summit — TechForward',
    quote: 'The team delivered a world-class production. Our brand video has driven incredible engagement and new business. Professional, creative, and completely stress-free to work with.',
    instagramUrl: '',
    gradient: 'from-blue-800 to-indigo-800',
    rating: 5,
  },
  {
    id: 3,
    name: 'Camille Rodriguez',
    event: 'Quinceañera — Villa Luna',
    quote: 'Words cannot describe how beautiful our video turned out. Every frame tells a story. Our whole family was in tears watching it for the first time. Absolutely magical.',
    instagramUrl: '',
    gradient: 'from-purple-800 to-violet-800',
    rating: 5,
  },
  {
    id: 4,
    name: 'James & Aria Chen',
    event: 'Engagement Film — Malibu',
    quote: "We booked EverVision for our engagement film and were so blown away we immediately hired them for our wedding. They have a gift for storytelling that's truly rare.",
    instagramUrl: '',
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

// Instant quote calculator rates — update here to change pricing.
export const instantQuoteConfig = {
  currency: 'R',
  filmingRatePerHour: 1500,
  // Editing is billed per video up to 60 seconds, and per additional 60-second block.
  editingRatePerBlock: 800,
  travelRatePerKm: 7,
  baseLocation: 'Boskruin, Randburg',
  // Distance in km from baseLocation. Keep the base as the first entry with km: 0.
  locations: [
    { name: 'Boskruin, Randburg (Base)', km: 0 },
    { name: 'Northcliff', km: 22 },
    { name: 'Sandton', km: 28 },
    { name: 'Linksfield', km: 31 },
    { name: 'Johannesburg', km: 38 },
    { name: 'Midrand', km: 48 },
    { name: 'OR Tambo', km: 88 },
    { name: 'Pretoria', km: 100 },
  ],
}
