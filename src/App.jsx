import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Portfolio from './components/Portfolio'
import Testimonials from './components/Testimonials'
import Pricing from './components/Pricing'
import InstagramFeed from './components/InstagramFeed'
import Contact from './components/Contact'
import Footer from './components/Footer'
import QuotePage from './components/QuotePage'

function Home() {
  return (
    <>
      <Hero />
      <Portfolio />
      <Testimonials />
      <Pricing />
      <InstagramFeed />
      <Contact />
    </>
  )
}

function ScrollToTop() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
        return
      }
    }
    window.scrollTo(0, 0)
  }, [pathname, hash])
  return null
}

export default function App() {
  return (
    <div className="font-sans text-gray-900 bg-white">
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quote" element={<QuotePage />} />
      </Routes>
      <Footer />
    </div>
  )
}
