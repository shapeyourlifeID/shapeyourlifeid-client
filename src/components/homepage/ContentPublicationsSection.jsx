import React from "react";
import Button from "../ui/Button";

export default function ContentPublicationsSection() {
  return (
    <section
      id="syl-contents-and-publication"
      className="syl-contents-and-publication"
    >
      <div className="container">
        <div className="row mb-4">
          <div className="col d-flex align-items-center justify-content-between">
            <h1 className="text-dark-blue fw-semibold">
              Contents and Publications
            </h1>
            <Button value="View More" color={"btn-blue-dark"} />
          </div>
        </div>
        <div className="row g-4">
          <div className="col-12 col-lg-6">
            <img
              src="/images/image 5.png"
              className="img-fluid w-100 rounded-3 main-image mb-2"
              alt="Karya Ibu Kartini"
            />
            <div className="row g-2">
              <div className="col-4">
                <img
                  src="/images/image 9.png"
                  className="img-fluid w-100 rounded-3"
                  alt="Karya Ibu Kartini"
                />
              </div>
              <div className="col-4">
                <img
                  src="/images/image 10.png"
                  className="img-fluid w-100 rounded-3"
                  alt="Karya Ibu Kartini"
                />
              </div>
              <div className="col-4">
                <img
                  src="/images/image 8.png"
                  className="img-fluid w-100 rounded-3"
                  alt="Karya Ibu Kartini"
                />
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6 side-by-side">
            <div className="card mb-4 overflow-hidden shadow border-0">
              <div className="d-flex flex-column flex-md-row">
                <img
                  src="/images/image 11.png"
                  className="d-block"
                  alt="Karya Ibu Kartini"
                />
                <div>
                  <div className="card-body d-flex flex-column justify-content-between h-100">
                    <h5
                      className="card-title fw-bold"
                      style={{
                        color: "#3c4d8e",
                        fontSize: "25px",
                      }}
                    >
                      Find Out Thoroughly About LPDP Scholarships
                    </h5>
                    <p className="card-text">
                      Oct 3, 2023 - Webinar Highlights
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card mb-4 overflow-hidden shadow border-0">
              <div className="d-flex flex-column flex-md-row">
                <img
                  src="/images/image 12.png"
                  className="d-block"
                  alt="Karya Ibu Kartini"
                />
                <div>
                  <div className="card-body d-flex flex-column justify-content-between h-100">
                    <h5
                      className="card-title fw-bold"
                      style={{
                        color: "#3c4d8e",
                        fontSize: "25px",
                      }}
                    >
                      5 Tips to Write the Best Essay for University Admission
                    </h5>
                    <p className="card-text">Feb 24, 2023 - SYL Highlights</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card mb-4 overflow-hidden shadow border-0">
              <div className="d-flex flex-column flex-md-row">
                <img
                  src="/images/image 18.png"
                  className="d-block"
                  alt="Karya Ibu Kartini"
                />
                <div>
                  <div className="card-body d-flex flex-column justify-content-between h-100">
                    <h5
                      className="card-title fw-bold"
                      style={{
                        color: "#3c4d8e",
                        fontSize: "25px",
                      }}
                    >
                      What It’s Really like Studying Engineering Major
                    </h5>
                    <p className="card-text">
                      Dec 27, 2022 ⋅ IG Live Highlights
                    </p>
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
