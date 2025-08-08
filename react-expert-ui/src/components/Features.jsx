import React from 'react'

export default function Features() {
  return (
    <section className="section">
      <div className="container">
        <h2 className="section-title display-5 text-center mb-5">Features to make your life easy</h2>

        <div className="row g-4 align-items-stretch mb-4">
          <div className="col-lg-4">
            <div className="feature-tile h-100">
              <p className="mb-2">Available Session Lengths</p>
              <div className="mb-3">
                <span className="badge bg-light text-dark badge-pill me-2">Regular - 15 min</span>
                <span className="badge bg-secondary badge-pill me-2">Popular - 30 min</span>
                <span className="badge bg-dark badge-pill">Extra - 45 min</span>
              </div>
              <img className="img-fluid rounded-20 img-shadow" src="https://placehold.co/640x200/222/FFF?text=1.5hr+2hr+2.5hr+3hr" alt="session lengths" />
            </div>
          </div>
          <div className="col-lg-4">
            <div className="feature-tile h-100 d-flex align-items-center justify-content-between">
              <div className="d-flex align-items-center">
                <div className="me-3">
                  <img alt="gcal" width="42" height="42" src="https://www.svgrepo.com/show/485985/google-calendar.svg" />
                </div>
                <div className="me-auto">
                  <div>Google Calendar</div>
                  <small className="text-muted-90">Connect</small>
                </div>
              </div>
              <button className="btn btn-light btn-sm px-3 text-dark btn-flat">Connect</button>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="feature-tile h-100 d-flex align-items-center justify-content-center">
              <div className="px-3 py-2 rounded-20 bg-light text-dark text-center w-100" style={{borderRadius:8}}>
                50% of proceeds will be donated to Baby2baby
              </div>
            </div>
          </div>
        </div>

        <div className="row g-4">
          <div className="col-lg-4">
            <h5 className="mb-2">Offer multiple call durations</h5>
            <p className="text-muted-90 small mb-0">Pick & choose which call durations make sense for you. Offer sessions ranging from 15 min to 3 hours</p>
          </div>
          <div className="col-lg-4">
            <h5 className="mb-2">Sync with your calendar</h5>
            <p className="text-muted-90 small mb-0">Connect your google calendar & as you update it, Intro will block off those times</p>
          </div>
          <div className="col-lg-4">
            <h5 className="mb-2">Support a charity</h5>
            <p className="text-muted-90 small mb-0">Let consumers know that you’re donating 5–100% of your proceeds to the charity of your choice</p>
          </div>
        </div>
      </div>
    </section>
  )
}