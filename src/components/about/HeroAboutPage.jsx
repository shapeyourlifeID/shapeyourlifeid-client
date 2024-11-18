import React from "react";

export default function HeroAboutPage() {
  return (
    <section
      id="syl-hero-about"
      className="syl-hero-about text-white overflow-hidden"
    >
      <div className="container d-flex justify-content-center">
        <img
          src="./images/about/background-hero-about.svg"
          className="syl-hero-about__background"
          alt=""
        />
        <div className="syl-hero-about__description-hero">
          <p className="syl-hero-about__title-hero lh-1">Shape Your Life</p>
          <div className="d-flex flex-column justify-content-between h-50 w-100 mt-n1">
            <div className="d-flex justify-content-between">
              <h5>Yayasan Pemuda</h5>
              <h5>Indonesia Mendunia</h5>
            </div>
            <div className="d-flex justify-content-between">
              <div className="d-none d-lg-block lh-1 fs-6">
                <p>Mentorship</p>
                <p>Webinar</p>
                <p>Consultation</p>
              </div>
              <div className="text-end d-none d-lg-block lh-1">
                <p>Scholarships</p>
                <p>Funding</p>
                <p>and more!</p>
              </div>
            </div>
          </div>
        </div>
        <img
          src="./images/about/hero-about.png"
          className="syl-hero-about__team"
          alt=""
        />
      </div>
    </section>
  );
}
