import { Instagram, Youtube, Facebook } from 'lucide-react'
import { siteConfig } from '../data/content'
import Logo from './Logo'

const navLinks = [
  { label: 'Our Work', href: '#work' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Instagram', href: '#instagram' },
  { label: 'Contact', href: '#contact' },
]

const socials = [
  { Icon: Instagram, href: siteConfig.instagramUrl, label: 'Instagram' },
  { Icon: Youtube, href: '#', label: 'YouTube' },
  { Icon: Facebook, href: '#', label: 'Facebook' },
]

// TikTok SVG since lucide doesn't have it
function TikTokIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.32 6.32 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.16 8.16 0 004.77 1.52V6.76a4.85 4.85 0 01-1-.07z" />
    </svg>
  )
}

export default function Footer() {
  return (
    <footer className="bg-[#050505] text-gray-400 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pb-12 border-b border-white/10">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <Logo onDark />
            </div>
            <p className="text-sm leading-relaxed text-gray-500 max-w-xs">
              Award-winning videography for the moments that matter most. Based in {siteConfig.location}.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-5">Navigation</h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + Social */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-5">Connect</h4>
            <div className="space-y-2 text-sm mb-6">
              <p>
                <a href={`mailto:${siteConfig.email}`} className="hover:text-white transition-colors">
                  {siteConfig.email}
                </a>
              </p>
              <p>
                <a href={`tel:${siteConfig.phone}`} className="hover:text-white transition-colors">
                  {siteConfig.phone}
                </a>
              </p>
            </div>
            <div className="flex items-center gap-4">
              {socials.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center hover:border-accent hover:text-accent transition-all"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
              <a
                href="#"
                aria-label="TikTok"
                className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center hover:border-accent hover:text-accent transition-all"
              >
                <TikTokIcon className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-gray-600">
          <p>© {new Date().getFullYear()} EverVision Media. All rights reserved.</p>
          <p>Founded by {siteConfig.founder}.</p>
        </div>
      </div>
    </footer>
  )
}
