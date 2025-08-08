import React from 'react'

export default function StartEarning() {
  return (
    <section className="section">
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-lg-6">
            <h2 className="display-6 fw-bold mb-3">Start earning, without the hassle</h2>
            <p className="mb-5 pe-lg-5">
              We will build your profile page for you. Just send us your existing profile photo and we’ll do the rest.
            </p>
            <div className="row g-4">
              <div className="col-12 col-md-6">
                <img className="img-fluid rounded shadow-sm" alt="profile mock" src="https://placehold.co/520x340/000/FFF?text=Profile+Card" />
              </div>
              <div className="col-12 col-md-6">
                <img className="img-fluid rounded shadow-sm" alt="availability" src="https://placehold.co/520x340/111/FFF?text=Availability" />
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="p-4 p-lg-5 bg-light rounded-4 border">
              <h3 className="h2 fw-bold">Set your own price, & availability</h3>
              <p className="mb-0">Set your own price per session & start earning for your time. Add sessions based on what works for your schedule, there are no minimums.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}