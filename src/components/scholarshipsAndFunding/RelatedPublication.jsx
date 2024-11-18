import React from "react";

export default function RelatedPublication() {
  return (
    <section
      id="syl-relatedpublications-section"
      className="syl-relatedpublications-section"
    >
      <div className="container">
        <div className="row mb-4">
          <div className="col d-flex align-items-center justify-content-between">
            <h1 className="text-dark-blue fw-semibold">Related Publications</h1>
            <a
              href="#"
              className="btn btn-blue-dark px-3 py-2 fw-bold"
              style={{ minWidth: "150px" }}
            >
              View More
            </a>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-6 mb-4 mb-lg-0">
            <div className="card border-0 shadow main-program h-100">
              <div className="d-flex flex-column h-100">
                <div className="inline-block">
                  <img
                    src="./images/relatedpublications.png"
                    alt="Beasiswa Shape Your Life"
                    style={{ width: "100%", height: "auto" }}
                  />
                </div>
                <div className="card-body d-flex flex-column justify-content-between flex-grow-1">
                  <h5
                    className="card-title fw-bold"
                    style={{
                      color: "#3c4d8e",
                      fontSize: "40px",
                    }}
                  >
                    Studying in the Netherlands: The Reality Check You May Need
                  </h5>
                  <p className="card-text">Dec 27, 2022 - IG Live Highlights</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 mb-4 mb-lg-0">
            <div className="card border-0 shadow main-program h-100">
              <div className="d-flex flex-column h-100">
                <div className="inline-block">
                  <img
                    src="./images/relatedpublications.png"
                    alt="Beasiswa Shape Your Life"
                    style={{ width: "100%", height: "auto" }}
                  />
                </div>
                <div className="card-body d-flex flex-column justify-content-between flex-grow-1">
                  <h5
                    className="card-title fw-bold"
                    style={{
                      color: "#3c4d8e",
                      fontSize: "40px",
                    }}
                  >
                    Studying in the Netherlands: The Reality Check You May Need
                  </h5>
                  <p className="card-text">Dec 27, 2022 - IG Live Highlights</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
