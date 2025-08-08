import React from 'react'

export default function StartEarning() {
  return (
    <section className="section bg-white">
      <div className="container">
        <div className="row g-5 align-items-center">
          <div className="col-lg-6">
            <h2 className="section-title display-5 mb-3">Start earning, without the hassle</h2>
            <p className="text-muted-90 mb-4 pe-lg-5">
              We will build your profile page for you. Just send us your existing profile photo and we’ll do the rest.
            </p>
            <div className="row g-4 mt-4">
              <div className="col-7">
                <img className="img-fluid rounded-20 img-shadow" alt="availability" src="https://placehold.co/560x360/111/FFF?text=Availability" />
              </div>
              <div className="col-5">
                <img className="img-fluid rounded-20 img-shadow" alt="profile mock" src="https://placehold.co/420x520/000/FFF?text=Profile+Card" />
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="p-4 p-lg-5 feature-tile">
              <h3 className="h2 fw-bold mb-2">Set your own price, & availability</h3>
              <p className="mb-0 text-muted-90">Set your own price per session & start earning for your time. Add sessions based on what works for your schedule, there are no minimums.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}