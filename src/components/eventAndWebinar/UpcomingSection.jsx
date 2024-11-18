import React from "react";

export default function UpcomingSection() {
  return (
    <section className="syl-upcoming py-5">
      <div className="container">
        <div className="row mb-4">
          <div className="col d-flex align-items-center justify-content-between">
            <h1 className="text-dark-blue fw-semibold">Upcoming</h1>
            <div className="ms-auto gap-1">
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
          <div className="col-12 col-lg-12 mb-4 mb-lg-0">
            <div className="card border-0 shadow main-program">
              <div className="d-flex flex-column flex-lg-row">
                <div className="inline-block">
                  <img src="./images/event/event6.png" alt="..." />
                </div>
                <div>
                  <div className="card-body h-100 d-flex flex-column justify-content-between">
                    <div>
                      <h5
                        className="card-title fw-bold"
                        style={{
                          color: "#3c4d8e",
                          fontSize: "40px",
                        }}
                      >
                        US Universities Festival for Undergraduate Studies
                      </h5>
                      <p className="card-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Vestibulum neque nibh, tincidunt ut ipsum at, aliquet
                        porta nunc. Proin urna erat, porttitor ut interdum sed,
                        interdum sollicitudin augue. Sed fermentum ante sit amet
                        purus convallis, malesuada bibendum est sollicitudin. In
                        congue volutpat
                      </p>
                    </div>
                    <div className="d-flex justify-content-between">
                      <p className="card-text">25-26 November 2023</p>
                      <p className="card-text" style={{ marginLeft: "auto" }}>
                        Event
                      </p>
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
