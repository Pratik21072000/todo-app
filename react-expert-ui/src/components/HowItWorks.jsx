import React from 'react'

const items = [
  { title: 'Find an expert', text: "Discover and choose from our list of the world's most in-demand experts", icon: '🔎' },
  { title: 'Book a video call', text: "Select a time that works for both you and your expert’s schedule", icon: '🗓️' },
  { title: 'Virtual consultation', text: 'Join the 1‑on‑1 video call, ask questions, and get expert advice', icon: '🎥' },
]

export default function HowItWorks() {
  return (
    <section className="section" style={{background:'#000'}}>
      <div className="container">
        <h2 className="section-title display-5 text-center mb-5">How it works for customers</h2>
        <div className="row g-4">
          {items.map((it) => (
            <div className="col-md-4" key={it.title}>
              <div className="how-card text-center h-100">
                <div className="icon-circle mb-3">{it.icon}</div>
                <h5 className="mb-2">{it.title}</h5>
                <p className="mb-0 text-muted-90 small">{it.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}