import React from 'react'

export default function Hero() {
  return (
    <header className="hero-bg position-relative">
      <div className="hero-overlay" />
      <div className="container hero-content">
        <p className="mb-2 fw-semibold">For experts & creators</p>
        <h1 className="hero-title mb-4">
          Connect with people virtually, give
          <br className="d-none d-md-block" /> 1‑on‑1 advice, and earn up to $500k*
        </h1>
        <button className="btn btn-light btn-lg px-4 py-3 fw-semibold">Join as an Expert</button>
      </div>
    </header>
  )
}