import React from "react";

export default function HeroLayout({ left, right, bgColor = "#3c4d8e" }) {
  return (
    <section
      id="syl-hero"
      className="syl-hero text-white overflow-hidden"
      style={{ backgroundColor: bgColor }}
    >
      <div className="container">
        <div className="d-flex flex-wrap gap-5 align-items-center justify-content-between">
          <div className="syl-hero__left">{left}</div>
          <div className="syl-hero__right text-center text-lg-start mb-4 mb-lg-0">
            {right}
          </div>
        </div>
      </div>
    </section>
  );
}
