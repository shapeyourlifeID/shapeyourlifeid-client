import React from "react";

export default function HighlightScholarshipsAndFunding() {
  return (
    <section id="syl-highlights-section" className="syl-highlights-section">
      <div className="container">
        <div className="row mb-4">
          <div className="col d-flex align-items-center justify-content-between">
            <h1 className="text-dark-blue fw-semibold">Highlights</h1>
            <div>
              <button className="btn btn-blue-dark px-2 py-1 text-white fw-bold">
                <i className="bi bi-arrow-left"></i>
              </button>
              <button className="btn btn-blue-dark px-2 py-1 text-white fw-bold">
                <i className="bi bi-arrow-right"></i>
              </button>
            </div>
          </div>
        </div>
        <div className="row">
          {/* Card 1 */}
          <div className="col-12 col-lg-6 mb-4 mb-lg-0">
            <div
              className="card border-0 shadow main-program mb-3 h-100"
              style={{ maxWidth: "100%" }}
            >
              <div className="row g-0 h-100">
                <div className="col-md-4 d-flex align-items-center position-relative">
                  <div className="position-relative w-100 h-100">
                    <img
                      src="./images/highlights1.png"
                      className="img-fluid rounded-start"
                      alt="Beasiswa Shape Your Life"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                    <img
                      src="./images/highlights3.png"
                      className="img-fluid rounded-start position-absolute top-50 start-50 translate-middle"
                      alt="Beasiswa Shape Your Life 3"
                      style={{
                        width: "auto",
                        height: "30%",
                        objectFit: "contain",
                      }}
                    />
                  </div>
                </div>
                <div className="col-md-8 d-flex flex-column">
                  <div className="card-body flex-grow-1">
                    <h5
                      className="card-title fw-bold"
                      style={{ color: "#3c4d8e", fontSize: "35px" }}
                    >
                      Indonesian International Student Mobility Awards
                    </h5>
                    <p className="card-text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Vestibulum neque nibh, tincidunt ut ipsum at, aliquet
                      porta nunc. Proin urna erat, porttitor ut interdum sed,
                      interdum sollicitudin augue. Sed fermentum.
                    </p>
                  </div>
                  <div className="card-footer text-body-secondary py-3 mt-auto">
                    <div className="mb-1">
                      <i className="bi bi-mortarboard-fill"></i>
                      <span className="ms-1">
                        Bachelor&apos;s (4-6th Semester)
                      </span>
                    </div>
                    <div className="mb-1">
                      <i className="bi bi-calendar"></i>
                      <span className="ms-1">6 Nov 2024 - 28 Mar 2026</span>
                    </div>
                    <div className="mb-1">
                      <i className="bi bi-cash"></i>
                      <span className="ms-1">Fully and Partially Funded</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Card 2 */}
          <div className="col-12 col-lg-6 mb-4 mb-lg-0">
            <div
              className="card border-0 shadow main-program mb-3 h-100"
              style={{ maxWidth: "100%" }}
            >
              <div className="row g-0 h-100">
                <div className="col-md-4 d-flex align-items-center position-relative">
                  <div className="position-relative w-100 h-100">
                    <img
                      src="./images/highlights2.png"
                      className="img-fluid rounded-start"
                      alt="Beasiswa Shape Your Life"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                    <img
                      src="./images/highlights4.png"
                      className="img-fluid rounded-start position-absolute top-50 start-50 translate-middle"
                      alt="Beasiswa Shape Your Life 3"
                      style={{
                        width: "auto",
                        height: "30%",
                        objectFit: "contain",
                      }}
                    />
                  </div>
                </div>
                <div className="col-md-8 d-flex flex-column">
                  <div className="card-body flex-grow-1">
                    <h5
                      className="card-title fw-bold"
                      style={{ color: "#3c4d8e", fontSize: "35px" }}
                    >
                      Kennedy-Lugar Youth Exchange and Study (YES)
                    </h5>
                    <p className="card-text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Vestibulum neque nibh, tincidunt ut ipsum at, aliquet
                      porta nunc. Proin urna erat, porttitor ut interdum sed,
                      interdum sollicitudin augue. Sed fermentum.
                    </p>
                  </div>
                  <div className="card-footer text-body-secondary py-3 mt-auto">
                    <div className="mb-1">
                      <i className="bi bi-mortarboard-fill"></i>
                      <span className="ms-1">
                        High School (10-11th Semester)
                      </span>
                    </div>
                    <div className="mb-1">
                      <i className="bi bi-calendar"></i>
                      <span className="ms-1">11 Sep 2024 - 18 Aug 2025</span>
                    </div>
                    <div className="mb-1">
                      <i className="bi bi-cash"></i>
                      <span className="ms-1">Fully Funded</span>
                    </div>
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
