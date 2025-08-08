import React from 'react'

export default function StartEarning() {
  return (
    <section className="section bg-white">
      <div className="container">
        {/* Row 1: text left, image right with overlay card */}
        <div className="row align-items-center g-5 mb-5 pb-3">
          <div className="col-lg-6">
            <h2 className="section-title display-5 mb-3">Start earning, without the hassle</h2>
            <p className="text-muted-90 mb-0 pe-lg-5">
              We will build your profile page for you. Just send us your existing profile photo and we’ll do the rest.
            </p>
          </div>
          <div className="col-lg-6">
            <div className="mock-photo img-shadow" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=900&auto=format&fit=crop')" }}>
              <div className="overlay-card">
                <div className="d-flex align-items-center mb-2">
                  <div className="rounded-circle bg-dark me-2" style={{ width: 36, height: 36 }} />
                  <div>
                    <div className="fw-semibold small">Simone H.</div>
                    <small className="text-muted-90">Book a video call</small>
                  </div>
                </div>
                <div className="bg-light rounded-3 p-2 small text-muted-90">Today • 3:00 PM – 3:30 PM</div>
              </div>
            </div>
          </div>
        </div>

        {/* Row 2: image left with schedule overlay, text right */}
        <div className="row align-items-center g-5">
          <div className="col-lg-6 order-lg-1 order-2">
            <div className="mock-photo img-shadow" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=900&auto=format&fit=crop')" }}>
              <div className="overlay-schedule small">
                <div className="mb-2 fw-semibold">Tuesday 3/19</div>
                <div className="mb-1"><span className="dot"/><span className="dot"/><span className="dot"/><span className="dot"/><span className="dot"/></div>
                <div className="opacity-75">Repeat every Tuesday?</div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 order-lg-2 order-1">
            <h3 className="h2 fw-bold mb-2">Set your own price, & availability</h3>
            <p className="mb-0 text-muted-90 pe-lg-5">Set your own price per session & start earning for your time. Add sessions based on what works for your schedule, there are no minimums.</p>
          </div>
        </div>
      </div>
    </section>
  )
}