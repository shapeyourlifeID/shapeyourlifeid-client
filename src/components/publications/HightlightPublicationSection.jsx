import React from "react";

export default function HightlightPublicationSection() {
  return (
    <section className="syl-highlights py-5">
      <div className="container mx-auto">
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
        {/*Highlights card*/}
        <div className="row">
          <div className="col-lg-4 col-md-6 mb-4">
            <div
              className="card shadow-sm border-0"
              style={{ width: "500px", height: "450px" }}
            >
              <img
                src="images/highlight1.jpeg"
                className="card-img-top"
                alt=""
              />
              <div className="card-body">
                <h2
                  id="title_event"
                  className="card-title text-dark-blue fw-semibold"
                >
                  Studying in the Netherlands: The Reality Check You May Need
                </h2>
                <br />
                <p className="card-text">Dec 27, 2022 · IG Live Highlights</p>
              </div>
            </div>
          </div>

          <div
            className="col-12 col-lg-6"
            style={{ marginLeft: "auto", marginRight: "20px" }}
          >
            <div
              className="card mb-4 overflow-hidden shadow border-0"
              style={{ width: "565px", height: "auto" }}
            >
              <div className="d-flex">
                <img src="./images/image 11.png" alt="previous-img" />
                <div>
                  <div className="card-body d-flex flex-column justify-content-between h-100">
                    <div className="">
                      <h2
                        id="title_event"
                        className="card-title-high text-dark-blue fw-semibold multiline-truncate"
                      >
                        Find Out Thoroughly About LPDP Scholarship: Things You
                        Have to Prepared and Be Ready
                      </h2>
                    </div>
                    <p className="card-text foot-high">
                      Oct 3, 2023 ⋅ Webinar Highlights
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="card mb-4 overflow-hidden shadow border-0"
              style={{ width: "565px", height: "auto" }}
            >
              <div className="d-flex">
                <img src="./images/image 12.png" alt="previous-img" />
                <div>
                  <div className="card-body d-flex flex-column justify-content-between h-100">
                    <div className="">
                      <h2
                        id="title_event"
                        className="card-title-high text-dark-blue fw-semibold multiline-truncate"
                      >
                        5 Tips to Write the Best Essay for University Admission
                      </h2>
                    </div>
                    <p className="card-text foot-high">
                      Feb 24, 2023 ⋅ SYL Highlights
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
