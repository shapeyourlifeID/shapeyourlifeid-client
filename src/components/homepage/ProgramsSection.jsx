import React from "react";
import Button from "../ui/Button";

export default function ProgramsSection() {
  return (
    <section id="syl-programs-section" className="syl-programs-section">
      <div className="container">
        <div className="row mb-4">
          <div className="col d-flex align-items-center justify-content-between">
            <h1 className="text-dark-blue fw-semibold">Programs</h1>
            <Button value="View All" color={"btn-blue-dark"} />
          </div>
        </div>
        <div className="row g-4">
          <div className="col-12 col-lg-7 col-xl-9">
            <div className="card border-0 shadow main-program h-100">
              <div className="d-flex flex-column flex-xl-row h-100">
                <div>
                  <div className="card-body h-100 d-flex flex-column flex-xl-row">
                    <div className="h-100 me-xl-4">
                      <img
                        src="/images/image 4.png"
                        alt="Beasiswa Shape Your Life"
                      />
                    </div>
                    <div className="d-flex flex-column justify-content-between h-100 flex-grow-1">
                      <div>
                        <h5
                          className="card-title fw-bold"
                          style={{
                            color: "#3c4d8e",
                            fontSize: "40px",
                          }}
                        >
                          Beasiswa Shape Your Life x Fathia Fairuza
                        </h5>
                        <p className="card-text">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Vestibulum neque nibh, tincidunt ut ipsum ut,
                          aliquet porta nunc. Proin urna erat, porttitor ut
                          interd.
                        </p>
                      </div>
                      <p className="card-text">25-26 November 2023 - Event</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-5 col-xl-3">
            <div className="row g-4 mentorship-program">
              <div className="col-12 col-md-6 col-lg-12">
                <div className="card border-0 shadow">
                  <div
                    className="card-body d-flex flex-column justify-content-between"
                    style={{
                      minHeight: "180px",
                    }}
                  >
                    <h3 className="card-title fw-bold text-dark-blue">
                      Mentorship Program 2.0
                    </h3>
                    <p className="card-text">23 August 2023 - Mentorship</p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-12">
                <div className="card border-0 shadow">
                  <div
                    className="card-body d-flex flex-column justify-content-between"
                    style={{
                      minHeight: "180px",
                    }}
                  >
                    <h3 className="card-title fw-bold text-dark-blue">
                      Webinar 18.0
                    </h3>
                    <p className="card-text">23 August 2023 - Webinar</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
