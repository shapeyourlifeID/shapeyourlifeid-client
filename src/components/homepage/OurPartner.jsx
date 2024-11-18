import React from "react";
import Marquee from "react-fast-marquee";
import AutoScrollComponent from "../AutoScrollComponent";

export default function OurPartners() {
  return (
    <section id="syl-featured" className="syl-featured py-4">
      <div className="container text-center">
        <div className="row">
          <div className="col">
            <div className="partner-slider">
              <AutoScrollComponent>
                <div className="slider-box">
                  <img src="/images/partner/logo1.png" alt="" />
                </div>
                <div className="slider-box">
                  <img src="/images/partner/logo2.png" alt="" />
                </div>
                <div className="slider-box">
                  <img src="/images/partner/logo3.png" alt="" />
                </div>
                <div className="slider-box">
                  <img src="/images/partner/logo4.png" alt="" />
                </div>
                <div className="slider-box">
                  <img src="/images/partner/logo5.png" alt="" />
                </div>
                <div className="slider-box">
                  <img src="/images/partner/logo6.png" alt="" />
                </div>
              </AutoScrollComponent>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
