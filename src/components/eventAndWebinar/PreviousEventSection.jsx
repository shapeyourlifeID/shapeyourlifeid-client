import React from "react";

export default function PreviousEventSection() {
  return (
    <section className="syl-event py-5">
      <div className="container mx-auto">
        <div className="row mb-4">
          <div className="col d-flex align-items-center justify-content-between">
            <h1 className="text-dark-blue fw-semibold">Previous Event</h1>
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
        {/* events card */}
        <div className="row gap-4 mb-4">
          <div
            className="col card card-event border-0 shadow"
            style={{ width: "18rem" }}
          >
            <img
              src="./images/event/event1.png"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h4
                id="title_event"
                className="card-title fw-semibold multiline-truncate"
              >
                Beasiswa Shape Your Life x Fathia Fairuza
              </h4>
              <p id="date_event" className="card-text">
                22-23 August 2023
              </p>
            </div>
          </div>
          <div
            className="col card card-event border-0 shadow"
            style={{ width: "18rem" }}
          >
            <img
              src="./images/event/event2.png"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h4
                id="title_event"
                className="card-title fw-semibold multiline-truncate"
              >
                Virtual International Education Fair
              </h4>
              <p id="date_event" className="card-text">
                22-23 August 2023
              </p>
            </div>
          </div>
          <div
            className="col card card-event border-0 shadow"
            style={{ width: "18rem" }}
          >
            <img
              src="./images/event/event3.png"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h4
                id="title_event"
                className="card-title fw-semibold multiline-truncate"
              >
                Shape Your Dreams: Level Up Your 2024
              </h4>
              <p id="date_event" className="card-text">
                22-23 August 2023
              </p>
            </div>
          </div>
        </div>
        <div className="row gap-4">
          <div
            className="col card card-event border-0 shadow"
            style={{ width: "18rem" }}
          >
            <img
              src="./images/event/event4.png"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h4
                id="title_event"
                className="card-title fw-semibold multiline-truncate"
              >
                Shape Your Life Summit 2023
              </h4>
              <p id="date_event" className="card-text">
                22-23 August 2023
              </p>
            </div>
          </div>
          <div
            className="col card card-event border-0 shadow"
            style={{ width: "18rem" }}
          >
            <img
              src="./images/event/event5.png"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h4
                id="title_event"
                className="card-title fw-semibold multiline-truncate"
              >
                Study Abroad Summit 2022
              </h4>
              <p id="date_event" className="card-text">
                22-23 August 2023
              </p>
            </div>
          </div>
          <div
            className="col card card-event border-0 shadow"
            style={{ width: "18rem" }}
          >
            <img
              src="./images/event/event6.png"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h4
                id="title_event"
                className="card-title fw-semibold multiline-truncate"
              >
                Sedekah Jariyah Beasiswa Shape Your Life
              </h4>
              <p id="date_event" className="card-text">
                22-23 August 2023
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
