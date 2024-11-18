import React from "react";

export default function AllFundingsSection() {
  return (
    <section id="all-fundings" className="all-fundings">
      <div className="container">
        <div className="row align-items-center mb-4">
          <div className="col-12 col-lg-6">
            <h1 className="text-dark-blue fw-semibold">All Fundings</h1>
          </div>
          <div className="col-12 col-lg-6">
            <select className="search-fundings form-select py-3 rounded-4 border-1 fw-semibold ms-auto">
              <option value="registration start">Registration Start</option>
            </select>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="d-flex gap-4">
              <div className="all-fundings__filter shadow-sm d-none d-lg-block">
                <div className="accordion" id="accordionPanelsStayOpenExample">
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#type"
                        aria-expanded="true"
                        aria-controls="type"
                      >
                        Type
                      </button>
                    </h2>
                    <div id="type" className="accordion-collapse collapse show">
                      <div className="accordion-body">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            checked
                            id="check-scholarships"
                          />
                          <label
                            className="form-check-label d-flex justify-content-between"
                            for="check-scholarships"
                          >
                            <span>Scholarships</span>
                            <span>1</span>
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="check-exchange-programs"
                            checked
                          />
                          <label
                            className="form-check-label d-flex justify-content-between"
                            for="check-exchange-programs"
                          >
                            <span>Exchange Programs</span>
                            <span>9</span>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#countries"
                        aria-expanded="true"
                        aria-controls="countries"
                      >
                        Countries
                      </button>
                    </h2>
                    <div
                      id="countries"
                      className="accordion-collapse collapse show"
                    >
                      <div className="accordion-body">
                        {/* Africa */}
                        <div className="form-check">
                          <input
                            className="form-check-input parent-checkbox"
                            type="checkbox"
                            value="1"
                            id="check-africa"
                          />
                          <label
                            className="form-check-label d-flex justify-content-between"
                            for="check-africa"
                          >
                            <span>Africa</span>
                            <span id="parent-total">1</span>
                          </label>

                          <div className="child-checks">
                            <div className="form-check">
                              <input
                                className="form-check-input child-checkbox"
                                type="checkbox"
                                value="1"
                                checked
                                id="check-egypt"
                              />
                              <label
                                className="form-check-label d-flex justify-content-between"
                                for="check-egypt"
                              >
                                <span>Egypt</span>
                                <span>1</span>
                              </label>
                            </div>
                            <div className="form-check">
                              <input
                                className="form-check-input child-checkbox"
                                type="checkbox"
                                value="0"
                                id="check-morocco"
                              />
                              <label
                                className="form-check-label d-flex justify-content-between"
                                for="check-morocco"
                              >
                                <span>Morocco</span>
                                <span>0</span>
                              </label>
                            </div>
                            <div className="form-check">
                              <input
                                className="form-check-input child-checkbox"
                                type="checkbox"
                                value="0"
                                id="check-south-africa"
                              />
                              <label
                                className="form-check-label d-flex justify-content-between"
                                for="check-south-africa"
                              >
                                <span>South Africa</span>
                                <span>0</span>
                              </label>
                            </div>
                          </div>
                        </div>
                        {/* ./End */} {/* America */}
                        <div className="form-check">
                          <input
                            className="form-check-input parent-checkbox"
                            type="checkbox"
                            value="8"
                            checked
                            id="check-america"
                          />
                          <label
                            className="form-check-label d-flex justify-content-between"
                            for="check-america"
                          >
                            <span>America</span>
                            <span id="parent-total">8</span>
                          </label>

                          <div className="child-checks">
                            <div className="form-check">
                              <input
                                className="form-check-input child-checkbox"
                                type="checkbox"
                                value="4"
                                checked
                                id="check-canada"
                              />
                              <label
                                className="form-check-label d-flex justify-content-between"
                                for="check-canada"
                              >
                                <span>Canada</span>
                                <span>4</span>
                              </label>
                            </div>
                            <div className="form-check">
                              <input
                                className="form-check-input child-checkbox"
                                type="checkbox"
                                value="4"
                                checked
                                id="check-united-states"
                              />
                              <label
                                className="form-check-label d-flex justify-content-between"
                                for="check-united-states"
                              >
                                <span>United States</span>
                                <span>4</span>
                              </label>
                            </div>
                          </div>
                        </div>
                        {/* ./End */} {/* Asia */}
                        <div className="form-check">
                          <input
                            className="form-check-input parent-checkbox"
                            type="checkbox"
                            value="6"
                            id="check-asia"
                          />
                          <label
                            className="form-check-label d-flex justify-content-between"
                            for="check-asia"
                          >
                            <span>Asia</span>
                            <span id="parent-total">6</span>
                          </label>

                          <div className="child-checks">
                            <div className="form-check">
                              <input
                                className="form-check-input child-checkbox"
                                type="checkbox"
                                value="0"
                                id="check-china"
                              />
                              <label
                                className="form-check-label d-flex justify-content-between"
                                for="check-china"
                              >
                                <span>China</span>
                                <span>0</span>
                              </label>
                            </div>
                            <div className="form-check">
                              <input
                                className="form-check-input child-checkbox"
                                type="checkbox"
                                value="2"
                                checked
                                id="check-indonesia"
                              />
                              <label
                                className="form-check-label d-flex justify-content-between"
                                for="check-indonesia"
                              >
                                <span>Indonesia</span>
                                <span>2</span>
                              </label>
                            </div>
                            <div className="form-check">
                              <input
                                className="form-check-input child-checkbox"
                                type="checkbox"
                                value="1"
                                checked
                                id="check-japan"
                              />
                              <label
                                className="form-check-label d-flex justify-content-between"
                                for="check-japan"
                              >
                                <span>Japan</span>
                                <span>1</span>
                              </label>
                            </div>
                            <div className="form-check">
                              <input
                                className="form-check-input child-checkbox"
                                type="checkbox"
                                value="3"
                                checked
                                id="check-korea"
                              />
                              <label
                                className="form-check-label d-flex justify-content-between"
                                for="check-korea"
                              >
                                <span>Korea</span>
                                <span>3</span>
                              </label>
                            </div>
                            <div className="form-check">
                              <input
                                className="form-check-input child-checkbox"
                                type="checkbox"
                                value="0"
                                id="check-singapore"
                              />
                              <label
                                className="form-check-label d-flex justify-content-between"
                                for="check-singapore"
                              >
                                <span>singapore</span>
                                <span>0</span>
                              </label>
                            </div>
                          </div>
                        </div>
                        {/* ./End */} {/* Europe */}
                        <div className="form-check">
                          <input
                            className="form-check-input parent-checkbox"
                            type="checkbox"
                            value="3"
                            id="check-europe"
                          />
                          <label
                            className="form-check-label d-flex justify-content-between"
                            for="check-europe"
                          >
                            <span>Europe</span>
                            <span id="parent-total">3</span>
                          </label>

                          <div className="child-checks">
                            <div className="form-check">
                              <input
                                className="form-check-input child-checkbox"
                                type="checkbox"
                                value="0"
                                id="check-france"
                              />
                              <label
                                className="form-check-label d-flex justify-content-between"
                                for="check-france"
                              >
                                <span>France</span>
                                <span>0</span>
                              </label>
                            </div>
                            <div className="form-check">
                              <input
                                className="form-check-input child-checkbox"
                                type="checkbox"
                                value="2"
                                checked
                                id="check-germany"
                              />
                              <label
                                className="form-check-label d-flex justify-content-between"
                                for="check-germany"
                              >
                                <span>Germany</span>
                                <span>2</span>
                              </label>
                            </div>
                            <div className="form-check">
                              <input
                                className="form-check-input child-checkbox"
                                type="checkbox"
                                value="1"
                                checked
                                id="check-netherlands"
                              />
                              <label
                                className="form-check-label d-flex justify-content-between"
                                for="check-netherlands"
                              >
                                <span>Netherlands</span>
                                <span>1</span>
                              </label>
                            </div>
                            <div className="form-check">
                              <input
                                className="form-check-input child-checkbox"
                                type="checkbox"
                                value="0"
                                checked
                                id="check-russia"
                              />
                              <label
                                className="form-check-label d-flex justify-content-between"
                                for="check-russia"
                              >
                                <span>Russia</span>
                                <span>0</span>
                              </label>
                            </div>
                            <div className="form-check">
                              <input
                                className="form-check-input child-checkbox"
                                type="checkbox"
                                value="0"
                                id="check-turkey"
                              />
                              <label
                                className="form-check-label d-flex justify-content-between"
                                for="check-turkey"
                              >
                                <span>Turkey</span>
                                <span>0</span>
                              </label>
                            </div>
                            <div className="form-check">
                              <input
                                className="form-check-input child-checkbox"
                                type="checkbox"
                                value="0"
                                id="check-united-kingdom"
                              />
                              <label
                                className="form-check-label d-flex justify-content-between"
                                for="check-united-kingdom"
                              >
                                <span>United Kingdom</span>
                                <span>0</span>
                              </label>
                            </div>
                          </div>
                        </div>
                        {/* ./End */} {/* Oceania */}
                        <div className="form-check">
                          <input
                            className="form-check-input parent-checkbox"
                            type="checkbox"
                            value="1"
                            checked
                            id="check-oceania"
                          />
                          <label
                            className="form-check-label d-flex justify-content-between"
                            for="check-oceania"
                          >
                            <span>Oceania</span>
                            <span id="parent-total">1</span>
                          </label>

                          <div className="child-checks">
                            <div className="form-check">
                              <input
                                className="form-check-input child-checkbox"
                                type="checkbox"
                                value="1"
                                checked
                                id="check-australia"
                              />
                              <label
                                className="form-check-label d-flex justify-content-between"
                                for="check-australia"
                              >
                                <span>Australia</span>
                                <span>1</span>
                              </label>
                            </div>
                          </div>
                        </div>
                        {/* ./End */}
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#degree-of-education"
                        aria-expanded="true"
                        aria-controls="degree-of-education"
                      >
                        Degree of Education
                      </button>
                    </h2>
                    <div
                      id="degree-of-education"
                      className="accordion-collapse collapse show"
                    >
                      <div className="accordion-body">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value="8"
                            checked
                            id="check-high-school"
                          />
                          <label
                            className="form-check-label d-flex justify-content-between"
                            for="check-high-school"
                          >
                            <span>High School</span>
                            <span>8</span>
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value="9"
                            id="check-bachelors-degree"
                            checked
                          />
                          <label
                            className="form-check-label d-flex justify-content-between"
                            for="check-bachelors-degree"
                          >
                            <span>Bachelor’s Degree</span>
                            <span>9</span>
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value="9"
                            id="check-masters-degree"
                            checked
                          />
                          <label
                            className="form-check-label d-flex justify-content-between"
                            for="check-masters-degree"
                          >
                            <span>Master’s Degree</span>
                            <span>9</span>
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value="1"
                            id="check-doctorate-degree"
                            checked
                          />
                          <label
                            className="form-check-label d-flex justify-content-between"
                            for="check-doctorate-degree"
                          >
                            <span>Doctorate Degree</span>
                            <span>1</span>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#funding-scheme"
                        aria-expanded="true"
                        aria-controls="funding-scheme"
                      >
                        Funding Scheme
                      </button>
                    </h2>
                    <div
                      id="funding-scheme"
                      className="accordion-collapse collapse show"
                    >
                      <div className="accordion-body">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value="10"
                            checked
                            id="check-fully-funded"
                          />
                          <label
                            className="form-check-label d-flex justify-content-between"
                            for="check-fully-funded"
                          >
                            <span>Fully Funded</span>
                            <span>10</span>
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value="17"
                            id="check-partially-funded"
                            checked
                          />
                          <label
                            className="form-check-label d-flex justify-content-between"
                            for="check-partially-funded"
                          >
                            <span>Partially Funded</span>
                            <span>17</span>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="all-fundings__main">
                <div className="row">
                  <div className="col-12 col-sm-6 col-xl-4 mb-4">
                    <div className="card rounded-4 h-100 overflow-hidden border-0 shadow-sm">
                      <img
                        src="./images/fundings/1.png"
                        className="card-img-top"
                        alt="Indonesian International Student Mobility Awards"
                      />
                      <div className="card-body">
                        <h4 className="card-title fw-bold text-dark-blue">
                          Indonesian International Student Mobility Awards
                        </h4>
                        <p className="card-text mb-4">
                          Scholarship - Indonesia
                        </p>
                      </div>
                      <div className="card-footer text-body-secondary py-3">
                        <div className="mb-1">
                          <i className="bi bi-mortarboard-fill"></i>
                          <span className="ms-1">
                            Bachelor`s (4-6th Semester)
                          </span>
                        </div>
                        <div className="mb-1">
                          <i className="bi bi-calendar"></i>
                          <span className="ms-1">6 Nov 2024 - 28 Mar 2026</span>
                        </div>
                        <div className="mb-1">
                          <i className="bi bi-cash"></i>
                          <span className="ms-1">
                            Fully and Partially Funded
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-sm-6 col-xl-4 mb-4">
                    <div className="card rounded-4 h-100 overflow-hidden border-0 shadow-sm">
                      <img
                        src="./images/fundings/2.png"
                        className="card-img-top"
                        alt="Indonesian International Student Mobility Awards"
                      />
                      <div className="card-body">
                        <h4 className="card-title fw-bold text-dark-blue">
                          France Excellence
                        </h4>
                        <p className="card-text mb-4">Scholarship - France</p>
                      </div>
                      <div className="card-footer text-body-secondary py-3">
                        <div className="mb-1">
                          <i className="bi bi-mortarboard-fill"></i>
                          <span className="ms-1">High School Graduates</span>
                        </div>
                        <div className="mb-1">
                          <i className="bi bi-calendar"></i>
                          <span className="ms-1">
                            11 Sep 2024 - 18 Jan 2025
                          </span>
                        </div>
                        <div className="mb-1">
                          <i className="bi bi-cash"></i>
                          <span className="ms-1">Partially Funded</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-sm-6 col-xl-4 mb-4">
                    <div className="card rounded-4 h-100 overflow-hidden border-0 shadow-sm">
                      <img
                        src="./images/fundings/3.png"
                        className="card-img-top"
                        alt="Kennedy-Lugar Youth Exchange and Study (YES)"
                      />
                      <div className="card-body">
                        <h4 className="card-title fw-bold text-dark-blue">
                          Kennedy-Lugar Youth Exchange and Study (YES)
                        </h4>
                        <p className="card-text mb-4">
                          Scholarship - Indonesia
                        </p>
                      </div>
                      <div className="card-footer text-body-secondary py-3">
                        <div className="mb-1">
                          <i className="bi bi-mortarboard-fill"></i>
                          <span className="ms-1">
                            High School (10-11th Grade)
                          </span>
                        </div>
                        <div className="mb-1">
                          <i className="bi bi-calendar"></i>
                          <span className="ms-1">
                            11 Sep 2024 - 18 Aug 2025
                          </span>
                        </div>
                        <div className="mb-1">
                          <i className="bi bi-cash"></i>
                          <span className="ms-1">Fully Funded</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-sm-6 col-xl-4 mb-4">
                    <div className="card rounded-4 h-100 overflow-hidden border-0 shadow-sm">
                      <img
                        src="./images/fundings/1.png"
                        className="card-img-top"
                        alt="Indonesian International Student Mobility Awards"
                      />
                      <div className="card-body">
                        <h4 className="card-title fw-bold text-dark-blue">
                          Indonesian International Student Mobility Awards
                        </h4>
                        <p className="card-text mb-4">
                          Scholarship - Indonesia
                        </p>
                      </div>
                      <div className="card-footer text-body-secondary py-3">
                        <div className="mb-1">
                          <i className="bi bi-mortarboard-fill"></i>
                          <span className="ms-1">
                            Bachelor`s (4-6th Semester)
                          </span>
                        </div>
                        <div className="mb-1">
                          <i className="bi bi-calendar"></i>
                          <span className="ms-1">6 Nov 2024 - 28 Mar 2026</span>
                        </div>
                        <div className="mb-1">
                          <i className="bi bi-cash"></i>
                          <span className="ms-1">
                            Fully and Partially Funded
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-sm-6 col-xl-4 mb-4">
                    <div className="card rounded-4 h-100 overflow-hidden border-0 shadow-sm">
                      <img
                        src="./images/fundings/2.png"
                        className="card-img-top"
                        alt="Indonesian International Student Mobility Awards"
                      />
                      <div className="card-body">
                        <h4 className="card-title fw-bold text-dark-blue">
                          France Excellence
                        </h4>
                        <p className="card-text mb-4">Scholarship - France</p>
                      </div>
                      <div className="card-footer text-body-secondary py-3">
                        <div className="mb-1">
                          <i className="bi bi-mortarboard-fill"></i>
                          <span className="ms-1">High School Graduates</span>
                        </div>
                        <div className="mb-1">
                          <i className="bi bi-calendar"></i>
                          <span className="ms-1">
                            11 Sep 2024 - 18 Jan 2025
                          </span>
                        </div>
                        <div className="mb-1">
                          <i className="bi bi-cash"></i>
                          <span className="ms-1">Partially Funded</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-sm-6 col-xl-4 mb-4">
                    <div className="card rounded-4 h-100 overflow-hidden border-0 shadow-sm">
                      <img
                        src="./images/fundings/3.png"
                        className="card-img-top"
                        alt="Kennedy-Lugar Youth Exchange and Study (YES)"
                      />
                      <div className="card-body">
                        <h4 className="card-title fw-bold text-dark-blue">
                          Kennedy-Lugar Youth Exchange and Study (YES)
                        </h4>
                        <p className="card-text mb-4">
                          Scholarship - Indonesia
                        </p>
                      </div>
                      <div className="card-footer text-body-secondary py-3">
                        <div className="mb-1">
                          <i className="bi bi-mortarboard-fill"></i>
                          <span className="ms-1">
                            High School (10-11th Grade)
                          </span>
                        </div>
                        <div className="mb-1">
                          <i className="bi bi-calendar"></i>
                          <span className="ms-1">
                            11 Sep 2024 - 18 Aug 2025
                          </span>
                        </div>
                        <div className="mb-1">
                          <i className="bi bi-cash"></i>
                          <span className="ms-1">Fully Funded</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-sm-6 col-xl-4 mb-4">
                    <div className="card rounded-4 h-100 overflow-hidden border-0 shadow-sm">
                      <img
                        src="./images/fundings/1.png"
                        className="card-img-top"
                        alt="Indonesian International Student Mobility Awards"
                      />
                      <div className="card-body">
                        <h4 className="card-title fw-bold text-dark-blue">
                          Indonesian International Student Mobility Awards
                        </h4>
                        <p className="card-text mb-4">
                          Scholarship - Indonesia
                        </p>
                      </div>
                      <div className="card-footer text-body-secondary py-3">
                        <div className="mb-1">
                          <i className="bi bi-mortarboard-fill"></i>
                          <span className="ms-1">
                            Bachelor`s (4-6th Semester)
                          </span>
                        </div>
                        <div className="mb-1">
                          <i className="bi bi-calendar"></i>
                          <span className="ms-1">6 Nov 2024 - 28 Mar 2026</span>
                        </div>
                        <div className="mb-1">
                          <i className="bi bi-cash"></i>
                          <span className="ms-1">
                            Fully and Partially Funded
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-sm-6 col-xl-4 mb-4">
                    <div className="card rounded-4 h-100 overflow-hidden border-0 shadow-sm">
                      <img
                        src="./images/fundings/2.png"
                        className="card-img-top"
                        alt="Indonesian International Student Mobility Awards"
                      />
                      <div className="card-body">
                        <h4 className="card-title fw-bold text-dark-blue">
                          France Excellence
                        </h4>
                        <p className="card-text mb-4">Scholarship - France</p>
                      </div>
                      <div className="card-footer text-body-secondary py-3">
                        <div className="mb-1">
                          <i className="bi bi-mortarboard-fill"></i>
                          <span className="ms-1">High School Graduates</span>
                        </div>
                        <div className="mb-1">
                          <i className="bi bi-calendar"></i>
                          <span className="ms-1">
                            11 Sep 2024 - 18 Jan 2025
                          </span>
                        </div>
                        <div className="mb-1">
                          <i className="bi bi-cash"></i>
                          <span className="ms-1">Partially Funded</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-sm-6 col-xl-4 mb-4">
                    <div className="card rounded-4 h-100 overflow-hidden border-0 shadow-sm">
                      <img
                        src="./images/fundings/3.png"
                        className="card-img-top"
                        alt="Kennedy-Lugar Youth Exchange and Study (YES)"
                      />
                      <div className="card-body">
                        <h4 className="card-title fw-bold text-dark-blue">
                          Kennedy-Lugar Youth Exchange and Study (YES)
                        </h4>
                        <p className="card-text mb-4">
                          Scholarship - Indonesia
                        </p>
                      </div>
                      <div className="card-footer text-body-secondary py-3">
                        <div className="mb-1">
                          <i className="bi bi-mortarboard-fill"></i>
                          <span className="ms-1">
                            High School (10-11th Grade)
                          </span>
                        </div>
                        <div className="mb-1">
                          <i className="bi bi-calendar"></i>
                          <span className="ms-1">
                            11 Sep 2024 - 18 Aug 2025
                          </span>
                        </div>
                        <div className="mb-1">
                          <i className="bi bi-cash"></i>
                          <span className="ms-1">Fully Funded</span>
                        </div>
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
