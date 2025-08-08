import React from 'react'

const photos = [
  'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=600&auto=format&fit=crop',
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
        <button className="btn btn-light btn-lg px-4 py-3">Join as an Expert</button>
      </div>
    </header>
  )
}