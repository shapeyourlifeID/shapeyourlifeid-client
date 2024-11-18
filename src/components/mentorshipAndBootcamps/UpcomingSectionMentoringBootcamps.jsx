import React from "react";

export default function UpcomingSectionMentoringBootcamps() {
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
        {/* Upcoming Card*/}
        <div className="row">
          <div className="col-12 col-lg-9 mb-4 mb-lg-0">
            <div className="card border-0 shadow main-program">
              <div className="d-flex flex-column flex-lg-row">
                <div className="inline-block">
                  <img
                    src="./images/mentorships/upcoming1.png"
                    alt="Mentorship Beasiswa Indonesia Maju"
                  />
                </div>
                <div
                  className="card-body h-100 d-flex flex-column justify-content-between"
                  style={{ marginLeft: "10px" }}
                >
                  {/* Diubah: Tambahkan margin-left */}
                  <div>
                    <h5
                      className="card-title fw-bold"
                      style={{
                        color: "#3c4d8e",
                        fontSize: "40px",
                      }}
                    >
                      Beasiswa Indonesia Maju (BIM) Mentorship
                    </h5>
                    <p className="mb-5">Mentorship</p>
                    <p className="card-text" style={{ marginTop: "138px" }}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Vestibulum neque nibh, tincidunt ut ipsum at, aliquet
                      porta nunc. Proin urna erat, porttitor ut interdum sed,
                      interdum sollicitudin augue.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-3">
            <div className="row h-100">
              <div className="col">
                <div className="card border-0 shadow h-100">
                  <div className="card-body d-flex flex-column justify-content-between">
                    <h3
                      className="card-title fw-bold text-dark-blue"
                      style={{ marginBottom: "100px" }}
                    >
                      Timeline
                    </h3>
                    <div className="d-flex flex-column gap-3">
                      <div>
                        <p className="card-text fw-bold text-dark-blue mb-0">
                          May 4 - 8
                        </p>
                        <p className="card-text text-dark-blue mb-0">
                          Open Recruitment Mentors & Mentees
                        </p>
                      </div>
                      <div>
                        <p className="card-text fw-bold text-dark-blue mb-0">
                          May 9
                        </p>
                        <p className="card-text text-dark-blue mb-0">
                          Announcement
                        </p>
                      </div>
                      <div>
                        <p className="card-text fw-bold text-dark-blue mb-0">
                          May 11
                        </p>
                        <p className="card-text text-dark-blue mb-0">
                          Opening Ceremony
                        </p>
                      </div>
                      <div>
                        <p className="card-text fw-bold text-dark-blue mb-0">
                          May 13 - 31
                        </p>
                        <p className="card-text text-dark-blue mb-0">
                          Mentorship Period
                        </p>
                      </div>
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
