import React from "react";

export default function HeroEventAndWebinar() {
  return (
    <section id="syl-hero" className="syl-hero text-white overflow-hidden">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-7 d-flex flex-column justify-content-end align-items-center pe-lg-5 mb-4 mb-lg-0">
            <img
              src="./images/event/hero-event.png"
              className="img-fluid syl-hero__image"
              alt="team"
            />
          </div>
          <div className="col-12 col-lg-5 d-flex flex-column justify-content-center syl-hero__contents">
            <h1 className="syl-hero__title">Events and Webinars</h1>
            <p className="syl-hero__description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum neque nibh, tincidunt ut ipsum at, aliquet porta nunc.
              Proin urna erat, porttitor ut interdum sed, interdum sollicitudin
              augue. Sed fermentum ante sit.
            </p>
            <div className="input-group syl-hero__search mb-5 mb-lg-0">
              <input
                type="text"
                className="form-control"
                placeholder="Search for programs..."
              />
              <button
                className="btn btn-yellow d-flex align-items-center justify-content-center"
                type="button"
                id="button-addon1"
              >
                <i className="bi bi-search fs-4"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
