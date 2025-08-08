import React from 'react'

export default function StartEarning() {
  return (
    <section className="section bg-black">
      <div className="container">
        {/* Row 1: text left, portrait image right with one big overlap */}
        <div className="row align-items-center g-5 mb-5 pb-3">
          <div className="col-lg-6">
            <h2 className="section-title display-5 mb-3">Start earning, without the hassle</h2>
            <p className="text-muted-90 desc-lg mb-0 pe-lg-5">
              We will build your profile page for you. Just send us your existing profile photo and we’ll do the rest.
            </p>
          </div>
          <div className="col-lg-6">
            <div className="overlap-wrap d-flex justify-content-center">
              <div className="mock-photo mock-photo-portrait img-shadow" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=900&auto=format&fit=crop')" }}>
                <div className="overlay-card">
                  <div className="d-flex align-items-center mb-2">
                    <div className="rounded-circle bg-light me-2" style={{ width: 36, height: 36 }} />
                    <div>
                      <div className="small">Simone H.</div>
                      <small className="text-muted-90">Book a video call</small>
                    </div>
                  </div>
                  <div className="bg-black rounded-3 p-2 small text-muted-90 border border-1 border-secondary">Today • 3:00 PM – 3:30 PM</div>
                </div>
              </div>
              <div className="mini-img mini-big mini-center-right" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1521579771033-2305f7a26d3b?q=80&w=600&auto=format&fit=crop')" }} />
            </div>
          </div>
        </div>

        {/* Row 2: portrait image left with schedule overlay + one big overlap, text right */}
        <div className="row align-items-center g-5">
          <div className="col-lg-6 order-lg-1 order-2">
            <div className="overlap-wrap d-flex justify-content-center">
              <div className="mock-photo mock-photo-portrait img-shadow" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=900&auto=format&fit=crop')" }}>
                <div className="overlay-schedule small">
                  <div className="mb-2">Tuesday 3/19</div>
                  <div className="mb-1"><span className="dot"/><span className="dot"/><span className="dot"/><span className="dot"/><span className="dot"/></div>
                  <div className="opacity-75">Repeat every Tuesday?</div>
                </div>
              </div>
              <div className="mini-img mini-big mini-center-left" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1478147427282-58a87a120781?q=80&w=600&auto=format&fit=crop')" }} />
            </div>
          </div>
          <div className="col-lg-6 order-lg-2 order-1">
            <h3 className="h2 mb-2">Set your own price, & availability</h3>
            <p className="mb-0 text-muted-90 desc-lg pe-lg-5">Set your own price per session & start earning for your time. Add sessions based on what works for your schedule, there are no minimums.</p>
          </div>
        </div>
      </div>
    </section>
  )
}