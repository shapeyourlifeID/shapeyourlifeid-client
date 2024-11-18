import React from "react";

export default function AchievmentSection() {
  return (
    <section id="syl-achievment" className="syl-achievment">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-6 py-5">
            <h1 className="text-dark-blue fw-semibold mb-3">
              Our Beloved Achievements
            </h1>
            <div className="row g-4">
              <div className="col-12 col-md-6">
                <div className="card border-0 shadow">
                  <div className="card-body rounded-5 text-center">
                    <div className="syl-achievment__count-achievment">70</div>
                    <h3 className="card-title fw-semibold text-dark-blue mt-3">
                      Mentoring <br />
                      Programs
                    </h3>
                    <p className="syl-achievment__card-text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="card border-0 shadow">
                  <div className="card-body rounded-5 text-center">
                    <div className="syl-achievment__count-achievment">50+</div>
                    <h3 className="card-title fw-semibold text-dark-blue mt-3">
                      Events <br />
                      Held
                    </h3>
                    <p className="syl-achievment__card-text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="card border-0 shadow">
                  <div className="card-body rounded-5 text-center">
                    <div className="syl-achievment__count-achievment">100</div>
                    <h3 className="card-title fw-semibold text-dark-blue mt-3">
                      Successful <br />
                      Mentees
                    </h3>
                    <p className="syl-achievment__card-text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="card border-0 shadow">
                  <div className="card-body rounded-5 text-center">
                    <div className="syl-achievment__count-achievment">6+</div>
                    <h3 className="card-title fw-semibold text-dark-blue mt-3">
                      Grants <br />
                      Winning
                    </h3>
                    <p className="syl-achievment__card-text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6 pt-5">
            <div className="syl-hero__left">
              <img
                src="/images/achievment.png"
                className="img-fluid w-100"
                alt="team"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
