import React from 'react'

export default function Features() {
  return (
    <section className="section">
      <div className="container">
        <h2 className="display-6 fw-bold text-center mb-5">Features to make your life easy</h2>
        <div className="row g-4 align-items-stretch">
          <div className="col-lg-4">
            <div className="p-4 border rounded-4 h-100 bg-white">
              <div className="mb-3">
                <span className="badge bg-dark badge-pill me-2">Regular - 15 min</span>
                <span className="badge bg-secondary badge-pill me-2">Popular - 30 min</span>
                <span className="badge bg-light text-dark badge-pill">Extra - 45 min</span>
              </div>
              <img className="img-fluid rounded" src="https://placehold.co/600x220/EEE/000?text=Session+Lengths" alt="session lengths" />
              <h5 className="mt-4">Offer multiple call durations</h5>
              <p className="mb-0 small">Pick & choose which call durations make sense for you. Offer sessions ranging from 15 min to 3 hours.</p>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="p-4 border rounded-4 h-100 bg-white">
              <img className="img-fluid rounded mb-3" src="https://placehold.co/600x220/DDD/000?text=Google+Calendar" alt="calendar" />
              <h5>Sync with your calendar</h5>
              <p className="mb-0 small">Connect your Google Calendar & as you update it, Intro will block off those times.</p>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="p-4 border rounded-4 h-100 bg-white">
              <img className="img-fluid rounded mb-3" src="https://placehold.co/600x220/CCC/000?text=Charity+Banner" alt="charity" />
              <h5>Support a charity</h5>
              <p className="mb-0 small">Let consumers know that you’re donating 5–100% of your proceeds to the charity of your choice.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}