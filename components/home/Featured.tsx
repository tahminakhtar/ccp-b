import React from 'react'

function Featured() {
  return (
    <div className="featured container">
      <div className="row gy-4">
        <div
          className="col-lg-4 d-flex"
          data-aos="fade-up"
          data-aos-delay={100}
        >
          <div className="featured-item position-relative">
            <div className="icon">
              <i className="bi bi-person icon" />
            </div>
            <h4>
              <a href="" className="stretched-link">
                Expertise in Trade
              </a>
            </h4>
            <p>
              Expertise on Promoting economic cooperation between the Portugal
              and the People’s Republic of Bangladesh, particularly in the
              private and government sector.
            </p>
          </div>
        </div>
        {/* End Featured Item */}
        <div
          className="col-lg-4 d-flex"
          data-aos="fade-up"
          data-aos-delay={200}
        >
          <div className="featured-item position-relative">
            <div className="icon">
              <i className="bi bi-chat-text icon" />
            </div>
            <h4>
              <a href="" className="stretched-link">
                Enthusiasm for Growth
              </a>
            </h4>
            <p>
              Sharing and exchange of information between the Portugal with a
              view to elevate greater understanding about each other’s economic
              potentials and opportunities.
            </p>
          </div>
        </div>
        {/* End Featured Item */}
        <div
          className="col-lg-4 d-flex"
          data-aos="fade-up"
          data-aos-delay={300}
        >
          <div className="featured-item position-relative">
            <div className="icon">
              <i className="bi bi-star icon" />
            </div>
            <h4>
              <a href="" className="stretched-link">
                Building Bridges
              </a>
            </h4>
            <p>
              Organizing meetings, workshops, business luncheon, edutainment
              seminars, get together to promote and support measures calculated
              to benefit and protect the interests.
            </p>
          </div>
        </div>
        {/* End Featured Item */}
      </div>
    </div>
  )
}

export default Featured