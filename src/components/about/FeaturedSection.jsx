import React from "react";
import AutoScrollComponent from "../AutoScrollComponent";

export default function FeaturedSection() {
  return (
    <section id="syl-featured" className="syl-featured py-4">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-3">
            <p className="text-dark-blue fw-semibold fs-5 lh-1">Featured by</p>
            <p className="fw-medium description">
              Prestigious and respected institutions all over the world
            </p>
          </div>
          <div className="col-12 col-md-9">
            <div className="partner-slider">
              <AutoScrollComponent>
                <div className="slider-box">
                  <img src="./images/featured/apu.svg" alt="" />
                </div>
                <div className="slider-box">
                  <img src="./images/featured/apu-ina.svg" alt="" />
                </div>
                <div className="slider-box">
                  <img src="./images/featured/u-report.svg" alt="" />
                </div>
                <div className="slider-box">
                  <img src="./images/featured/sea-today.svg" alt="" />
                </div>
              </AutoScrollComponent>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
