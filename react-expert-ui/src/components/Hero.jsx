import React from 'react'

const photos = [
  'https://placehold.co/600x900/222/FFF?text=Portrait+1',
  'https://placehold.co/600x900/333/FFF?text=Portrait+2',
  'https://placehold.co/600x900/444/FFF?text=Portrait+3',
  'https://placehold.co/600x900/555/FFF?text=Portrait+4',
]

export default function Hero() {
  return (
    <header className="hero-bg position-relative">
      <div className="hero-grid">
        {photos.map((src, i) => (
          <div key={i} className="hero-col" style={{ backgroundImage: `url(${src})` }} />
        ))}
      </div>
      <div className="hero-overlay" />
      <div className="container hero-content">
        <p className="mb-2">For experts & creators</p>
        <h1 className="hero-title mb-4">
          Connect with people virtually, give
          <br className="d-none d-md-block" /> 1‑on‑1 advice, and earn up to $500k*
        </h1>
        <button className="btn btn-light btn-lg px-4 py-3 btn-flat">Join as an Expert</button>
      </div>
    </header>
  )
}