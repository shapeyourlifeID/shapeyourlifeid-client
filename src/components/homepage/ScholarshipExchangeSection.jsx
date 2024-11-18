import React from "react";
import Button from "../ui/Button";

export default function ScholarshipExchangeSection() {
  return (
    <section
      id="syl-scholarships-and-exchanges"
      className="syl-scholarships-and-exchanges"
    >
      <div className="container">
        <div className="row mb-4">
          <div className="col d-flex align-items-center justify-content-between">
            <h1 className="text-dark-blue fw-semibold">
              Scholarships and Exchanges
            </h1>
            <Button value="View More" color={"btn-blue-dark"} />
          </div>
        </div>
        <div className="row g-4">
          <div className="col-12 col-lg-6 order-2 order-lg-1">
            <div className="row g-4">
              <div className="col-12 col-md-6">
                <div className="card border-0 shadow h-100">
                  <div className="card-body">
                    <img
                      src="/images/location/indonesia.png"
                      className="img-fluid"
                      alt="indonesia"
                    />
                    <h3 className="card-title fw-semibold text-dark-blue mt-3">
                      Indonesia
                    </h3>
                    <p className="card-text">IISMA, LPDP, and more</p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="card border-0 shadow h-100">
                  <div className="card-body">
                    <img
                      src="/images/location/asia.png"
                      className="img-fluid"
                      alt="indonesia"
                    />
                    <h3 className="card-title fw-semibold text-dark-blue mt-3">
                      Asia
                    </h3>
                    <p className="card-text">Japan, Korea, and more</p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="card border-0 shadow h-100">
                  <div className="card-body">
                    <img
                      src="/images/location/america.png"
                      className="img-fluid"
                      alt="indonesia"
                    />
                    <h3 className="card-title fw-semibold text-dark-blue mt-3">
                      America
                    </h3>
                    <p className="card-text">Canada and the US</p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="card border-0 shadow h-100">
                  <div className="card-body">
                    <img
                      src="/images/location/africa.png"
                      className="img-fluid"
                      alt="indonesia"
                    />
                    <h3 className="card-title fw-semibold text-dark-blue mt-3">
                      Africa
                    </h3>
                    <p className="card-text">Egypt, Morocco, and more</p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="card border-0 shadow h-100">
                  <div className="card-body">
                    <img
                      src="/images/location/europe.png"
                      className="img-fluid"
                      alt="indonesia"
                    />
                    <h3 className="card-title fw-semibold text-dark-blue mt-3">
                      Europe
                    </h3>
                    <p className="card-text">Germany, the UK, and more</p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="card border-0 shadow h-100">
                  <div className="card-body">
                    <img
                      src="/images/location/ociania.png"
                      className="img-fluid"
                      alt="indonesia"
                    />
                    <h3 className="card-title fw-semibold text-dark-blue mt-3">
                      Oceania
                    </h3>
                    <p className="card-text">Australia</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6 order-1 order-lg-2">
            <div className="card card-large-horizontal border-0 shadow">
              <img
                src="/images/scholarships-and-exchanges.png"
                className="card-img-top"
                alt="scholarships and exchanges"
              />
              <div className="card-body d-flex flex-column justify-content-between">
                <h5 className="card-title">
                  Kennedy-Lugar Youth Exchange and Study
                </h5>
                <div className="card-info mt-4">
                  <p className="mb-0">Exchange ⋅ United States</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
