import { useEffect, useRef } from 'react'

const SCRIPT_SRC = 'https://www.instagram.com/embed.js'

function loadEmbedScript() {
  if (window.instgrm) {
    window.instgrm.Embeds.process()
    return
  }
  const existing = document.querySelector(`script[src="${SCRIPT_SRC}"]`)
  if (existing) {
    existing.addEventListener('load', () => window.instgrm?.Embeds.process())
    return
  }
  const script = document.createElement('script')
  script.src = SCRIPT_SRC
  script.async = true
  document.body.appendChild(script)
}

// Renders Instagram's official public post/reel embed (no API key required).
export default function InstagramEmbed({ url }) {
  const containerRef = useRef(null)

  useEffect(() => {
    loadEmbedScript()
  }, [url])

  return (
    <div ref={containerRef} className="w-full flex justify-center">
      <blockquote
        className="instagram-media"
        data-instgrm-permalink={url}
        data-instgrm-version="14"
        style={{ margin: 0, width: '100%', maxWidth: 540, minWidth: 326 }}
      />
    </div>
  )
}
